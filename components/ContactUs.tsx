
import React, { useState } from 'react';
import { motion } from 'motion/react';

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "fa-location-dot",
      title: "Our Sanctuary",
      detail: "4th Miles Post, Hunuwilagama, Wilpattu, 50220 Sri Lanka",
      link: "https://maps.app.goo.gl/YourGoogleMapsLink"
    },
    {
      icon: "fa-phone",
      title: "Call Us",
      detail: "+94 770 083 310",
      link: "tel:+94770083310"
    },
    {
      icon: "fa-envelope",
      title: "Email Us",
      detail: "info@wildswilpattu.com",
      link: "mailto:info@wildswilpattu.com"
    },
    {
      icon: "fa-whatsapp",
      title: "WhatsApp",
      detail: "+94 770 083 310",
      link: "https://wa.me/94770083310"
    }
  ];

  return (
    <div className="bg-[#fbf7f2] min-h-screen pt-24 md:pt-32 pb-20 text-[#382F2B] leaf-pattern">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <header className="mb-12 md:mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#B08968]"></div>
            <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B08968]">Get In Touch</span>
            <div className="w-8 md:w-12 h-[1px] bg-[#B08968]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 md:mb-8 leading-tight text-[#8d5527]"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl font-light opacity-70 max-w-2xl mx-auto leading-relaxed italic px-2"
          >
            "Whether you have a question about our safaris, accommodation, or just want to say hello, we're here to help you plan your perfect wilderness escape."
          </motion.p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {contactInfo.map((info, idx) => (
            <motion.a
              href={info.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#8d5527]/5 hover:border-[#bf885e]/30 transition-all group text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#efe2d2] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:bg-[#8d5527] group-hover:text-white transition-colors">
                <i className={`fa-solid ${info.icon} text-xl md:text-2xl text-emerald-700 group-hover:text-white`}></i>
              </div>
              <h4 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#8d5527]">{info.title}</h4>
              <p className="text-[12px] md:text-[13px] leading-relaxed opacity-60 font-medium">{info.detail}</p>
            </motion.a>
          ))}
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#8d5527]">Drop Us a Line</h3>
            <p className="text-base md:text-lg font-light opacity-70 mb-8 md:mb-10 leading-relaxed px-4 lg:px-0">
              Have a specific request or just want to chat? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-4 md:gap-6 px-4 lg:px-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#efe2d2] flex items-center justify-center flex-shrink-0 text-emerald-700">
                  <i className="fa-solid fa-clock text-sm md:text-base"></i>
                </div>
                <div>
                  <h5 className="font-bold text-[11px] md:text-sm uppercase tracking-widest mb-1">Response Time</h5>
                  <p className="text-[12px] md:text-sm opacity-60">We typically respond within 12-24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 px-4 lg:px-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#efe2d2] flex items-center justify-center flex-shrink-0 text-emerald-700">
                  <i className="fa-solid fa-headset text-sm md:text-base"></i>
                </div>
                <div>
                  <h5 className="font-bold text-[11px] md:text-sm uppercase tracking-widest mb-1">Support Hours</h5>
                  <p className="text-[12px] md:text-sm opacity-60">Available 24/7 for emergency booking assistance via WhatsApp.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-[#8d5527]/5 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="text-center py-16 md:py-20">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#efe2d2]0 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-6 md:mb-8 animate-bounce">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-[#8d5527]">Message Sent!</h4>
                <p className="text-sm md:text-base opacity-60 mb-6 md:mb-8">Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-700 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-stone-50 border border-stone-100 px-5 py-3.5 md:px-6 md:py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-stone-50 border border-stone-100 px-5 py-3.5 md:px-6 md:py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+94 770 000 000"
                      className="w-full bg-stone-50 border border-stone-100 px-5 py-3.5 md:px-6 md:py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Subject</label>
                    <div className="relative">
                      <select 
                        className="w-full bg-stone-50 border border-stone-100 px-5 py-3.5 md:px-6 md:py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm appearance-none cursor-pointer"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      >
                        <option value="">Select a subject</option>
                        <option value="Booking Inquiry">Booking Inquiry</option>
                        <option value="Safari Packages">Safari Packages</option>
                        <option value="Special Events">Special Events</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                      <i className="fa-solid fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none text-xs"></i>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-stone-50 border border-stone-100 px-5 py-3.5 md:px-6 md:py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-[#8d5527] text-white py-5 md:py-6 rounded-xl font-bold text-[11px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-[#8d5527] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fa-solid fa-paper-plane text-[10px]"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-serif text-[#8d5527]">Our Location</h3>
            <a 
              href="https://maps.app.goo.gl/YourGoogleMapsLink" 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-700 hover:underline flex items-center gap-2 group"
            >
              Open in Google Maps
              <i className="fa-solid fa-arrow-up-right-from-square transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
          </div>
          <div className="w-full h-[350px] md:h-[500px] bg-stone-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!2sWilpattu+National+Park!2m2!1d79.9961!2d8.4389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afda5768888888b%3A0x7777777777777777!2sWilpattu+National+Park!5e0!3m2!1sen!2slk!4v1710100000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Wilds Wilpattu Location"
            ></iframe>
          </div>
        </motion.div>

        {/* Social Connect */}
        <div className="text-center">
          <h4 className="text-lg md:text-xl font-serif mb-6 md:mb-8 text-[#8d5527]">Follow Our Journey</h4>
          <div className="flex justify-center gap-4 md:gap-6">
            {[
              { icon: 'fa-instagram', link: '#' },
              { icon: 'fa-facebook-f', link: '#' },
              { icon: 'fa-x-twitter', link: '#' },
              { icon: 'fa-youtube', link: '#' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#8d5527]/10 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-all hover:-translate-y-1 active:scale-90"
              >
                <i className={`fa-brands ${social.icon} text-lg md:text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
