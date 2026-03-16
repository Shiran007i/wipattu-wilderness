"use server";

import { GoogleGenAI, Type, Modality } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const safariChat = async (message: string, history: any[] = [], images: string[] = []) => {
  const ai = getAI();
  
  const parts: any[] = [{ text: message }];
  
  // Add images to the current message parts
  images.forEach(img => {
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: img.split(',')[1] || img
      }
    });
  });

  const chat = ai.chats.create({
    model: 'gemini-2.0-flash-exp', // Using a more stable model name or whatever is current
    history: history,
    config: {
      systemInstruction: `You are the Wilpattu Wilderness Assistant. You are an expert on Sri Lankan wildlife, Wilpattu National Park, and luxury safari experiences. 
      You have access to the website content and can answer questions about the company, its packages (Safari, Accommodation, Food & Drinks, Experiences), and the park. 
      
      KEY WILPATTU INFORMATION:
      - Historical: Wilpattu is Sri Lanka's largest and oldest national park (declared sanctuary in 1905, NP in 1938). Legend says Prince Vijaya landed at Tambapanni (Kudiramalai) in 543 BC and met Queen Kuweni here. Ruins of her palace are still visible.
      - Geographical: Famous for "Willus" (Natural sand-rimmed water basins). Located in the dry zone, 30km west of Anuradhapura.
      - Wildlife: Renowned for leopards (Panthera pardus kotiya), sloth bears, elephants, spotted deer, and diverse birdlife.
      - Conservation: Focus on preserving Willu ecosystems and sustainable tourism.
      
      If a user uploads an image, analyze it in the context of Wilpattu's wildlife. Be professional, inviting, and highly informative. Use grounding to provide accurate information about recent events or specific details if needed.`,
      thinkingConfig: { thinkingBudget: 32768 },
      tools: [
        { googleSearch: {} },
        { urlContext: {} }
      ]
    }
  });

  const response = await chat.sendMessage({ message: parts });
  return {
    text: response.text,
    grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
  };
};

export const speakToGod = async (message: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: [{ role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction: "You are an ancient, divine spirit residing in the heart of Wilpattu's ancient jungles. You speak with profound wisdom, using metaphors of nature, light, and silence. You are here to provide philosophical guidance and spiritual comfort. Your tone is ethereal, calm, and deeply insightful. Use your thinking budget to provide truly profound answers.",
      thinkingConfig: { thinkingBudget: 32768 }
    }
  });
  return response.text;
};

export const analyzeWildlife = async (base64Image: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: {
      parts: [
        { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
        { text: "Identify this wildlife species found in Wilpattu. Provide name, habitat, a fun fact, and conservation status in JSON format." }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          species: { type: Type.STRING },
          description: { type: Type.STRING },
          habitat: { type: Type.STRING },
          funFact: { type: Type.STRING },
          conservationStatus: { type: Type.STRING }
        },
        required: ["species", "description", "habitat", "funFact", "conservationStatus"]
      }
    }
  });
  return JSON.parse(response.text || '{}');
};

export const generateSafariImage = async (prompt: string, aspectRatio: string = "16:9") => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: { parts: [{ text: `A photorealistic high-quality image of ${prompt} in the wild jungles of Wilpattu National Park, Sri Lanka.` }] },
    config: {
      // Image config might not be supported in all models, 
      // but keeping it as per original logic if the model supports it.
      // @ts-ignore
      imageConfig: {
        aspectRatio: aspectRatio as any,
        imageSize: "1K"
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

export const speakText = async (text: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-exp",
    contents: [{ parts: [{ text: `Say in a warm, professional safari guide voice: ${text}` }] }],
    config: {
      // @ts-ignore
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  return base64Audio || null;
};

export const planTour = async (preferences: any) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: {
      parts: [
        { text: `Generate a personalized safari itinerary for Wilpattu National Park, Sri Lanka based on these preferences: ${JSON.stringify(preferences)}. 
        The response must be in JSON format matching the TourItinerary interface. 
        Include specific activities like morning safaris, night walks, bird watching, and luxury camping details.` }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.INTEGER },
                title: { type: Type.STRING },
                activities: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      time: { type: Type.STRING },
                      activity: { type: Type.STRING },
                      description: { type: Type.STRING }
                    },
                    required: ["time", "activity", "description"]
                  }
                },
                meals: { type: Type.ARRAY, items: { type: Type.STRING } },
                accommodation: { type: Type.STRING }
              },
              required: ["day", "title", "activities", "meals", "accommodation"]
            }
          },
          totalEstimatedPrice: { type: Type.STRING }
        },
        required: ["title", "summary", "days"]
      }
    }
  });
  return JSON.parse(response.text || '{}');
};
