
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { safariChat, speakText } from '../app/actions';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'motion/react';

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
  }
  return buffer;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'model', text: 'Ayubowan! Your Green Safari Guide is here. How can I help you explore Wilpattu today?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [attachedImages, setAttachedImages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setAttachedImages(prev => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files) as File[];
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setAttachedImages(prev => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setAttachedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if ((!input.trim() && attachedImages.length === 0) || loading) return;
    
    const userMsg = input;
    const currentImages = [...attachedImages];
    
    setInput('');
    setAttachedImages([]);
    setMessages(prev => [...prev, { role: 'user', text: userMsg || (currentImages.length > 0 ? "Sent images" : "") }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const response = await safariChat(userMsg || "Analyze these images", history, currentImages);
      setMessages(prev => [...prev, { role: 'model', text: response.text || '' }]);
    } catch (e) { 
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to the wild. Please try again." }]); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleSpeak = async (text: string) => {
    try {
      const audioBase64 = await speakText(text);
      if (audioBase64) {
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const ctx = audioContextRef.current; 
        const audioData = decodeBase64(audioBase64); 
        const buffer = await decodeAudioData(audioData, ctx, 24000, 1);
        const src = ctx.createBufferSource(); 
        src.buffer = buffer; 
        src.connect(ctx.destination); 
        src.start();
      }
    } catch (e) { console.error(e); }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed bottom-0 right-0 sm:bottom-28 sm:right-10 w-full sm:w-[400px] h-full sm:h-[650px] sm:max-h-[calc(100vh-150px)] bg-[#8d5527]/95 backdrop-blur-2xl sm:rounded-3xl border-t sm:border border-[#bf885e]/30 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-white z-[300]"
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className="bg-[#8d5527] p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#efe2d2]0/20 flex items-center justify-center">
                <i className="fa-solid fa-sparkles text-[#bf885e] text-sm sm:text-base"></i>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm">Safari AI Guide</h3>
                <span className="text-[8px] sm:text-[10px] text-[#bf885e] uppercase tracking-widest font-bold">Green Intelligence</span>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 sm:space-y-6 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl ${m.role === 'user' ? 'bg-[#bf885e] text-white shadow-lg rounded-tr-none' : 'bg-white/10 text-white border border-white/5 rounded-tl-none'}`}>
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>

                  {m.role === 'model' && (
                    <button onClick={() => handleSpeak(m.text)} className="mt-2 sm:mt-3 text-[8px] sm:text-[10px] uppercase font-bold text-[#bf885e] hover:text-white flex items-center gap-2 transition-colors">
                      <i className="fa-solid fa-volume-high text-[10px]"></i> Listen
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/5 flex gap-1.5 items-center rounded-tl-none">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-5 bg-black/20 border-t border-white/10 space-y-3 sm:space-y-4 pb-10 sm:pb-5">
            {attachedImages.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {attachedImages.map((img, idx) => (
                  <div key={idx} className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-lg overflow-hidden border border-white/20">
                    <img src={img} className="w-full h-full object-cover" alt="Attachment" />
                    <button 
                      onClick={() => removeImage(idx)}
                      className="absolute top-0 right-0 bg-black/60 text-white w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[8px] sm:text-[10px]"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2 sm:gap-3 items-end">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-1.5 sm:p-2 focus-within:border-emerald-500 transition-colors">
                <textarea 
                  value={input} 
                  onChange={e => setInput(e.target.value)} 
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask or drop images..." 
                  className="w-full bg-transparent border-none outline-none text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 resize-none h-10 max-h-32 no-scrollbar"
                />
                <div className="flex items-center justify-between px-2 pb-1">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="text-white/40 hover:text-[#bf885e] transition-colors"
                  >
                    <i className="fa-solid fa-paperclip text-sm"></i>
                  </button>
                  <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                  <span className="hidden sm:inline text-[8px] text-white/20 uppercase font-bold tracking-tight">Shift+Enter for new line</span>
                </div>
              </div>
              <button 
                onClick={handleSend} 
                disabled={loading}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#efe2d2]0 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shrink-0"
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
