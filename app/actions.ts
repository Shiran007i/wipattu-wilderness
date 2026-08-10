"use server";

import { GoogleGenAI, Type, Modality } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

// Curated experiences and excursions offered on the site (components/Experiences.tsx).
// Kept here (not env-driven) since these rarely change and aren't pricing data.
const SIGNATURE_EXPERIENCES = [
  "Guided Game Drives in Wilpattu National Park — expert-led game drives for leopard, elephant, and bird sightings.",
  "Breakfast by the Lake — lakeside breakfast with local delicacies.",
  "Bonfire and BBQ Nights — evening BBQ feast with local flavors around a bonfire.",
  "Wilpattu Village Walk — guided walk through local village life and traditions.",
  "Morning Walk Around Hunuwilagama Tank — a walk that connects directly to the park entrance.",
  "Wildlife Quiz for Children — a guided, educational activity for younger guests.",
];

const UNIQUE_EXCURSIONS = [
  "Anuradhapura Ancient City (1h 30m away) — UNESCO World Heritage sacred ancient capital.",
  "Mannar (2h away) — lagoons, baobab trees, birdlife, Mannar Fort, Adam's Bridge.",
  "Kalpitiya (2h 30m away) — dolphin watching boat rides and beaches.",
  "Tantirimale Rock Temple (1h 15m away) — ancient rock temple with Buddhist sculptures.",
];

// Builds a grounding context string from the site's actual live data (env
// vars + curated site content), so the AI plans trips and answers questions
// using only real accommodation, real safari packages, real experiences,
// and real contact info — not generic invented content.
const buildSiteContext = () => {
  const roomTitle = process.env.BOOKING_ROOM_TITLE || "Deluxe Chalet";

  let plans: any[] = [];
  try {
    plans = JSON.parse(
      process.env.BOOKING_PLANS_JSON ||
        '[{"id":"bb","name":"Bed & Breakfast (BB)","occupancyRates":{"single":90,"double":110,"triple":140}},{"id":"hb","name":"Half Board (HB)","occupancyRates":{"single":110,"double":140,"triple":180}},{"id":"fb","name":"Full Board (FB)","occupancyRates":{"single":125,"double":165,"triple":210}},{"id":"ai","name":"All-Inclusive (AI)*","occupancyRates":{"single":360,"double":570,"triple":780}}]',
    );
  } catch {
    plans = [];
  }

  let safariExperiences: any[] = [];
  try {
    safariExperiences = JSON.parse(
      process.env.SAFARI_EXPERIENCES_JSON ||
        '[{"name":"Morning Safari","duration":"05:30 AM - 10:00 AM","jeepWithEntryPrice":150,"includes":"Naturalist, Breakfast Packet, Cool box with water and Soft Drinks."},{"name":"Afternoon Safari","duration":"02:00 PM - 06:00 PM","jeepWithEntryPrice":150,"includes":"Naturalist, Evening Tea with Cookies, Cool box with water and Soft Drinks."},{"name":"Full-Day Safari","duration":"05:30 AM - 06:00 PM","jeepWithEntryPrice":190,"includes":"Naturalist, Breakfast Packet, Lunch, Evening Tea with Cookies, Cool box with water and Soft Drinks."}]',
    );
  } catch {
    safariExperiences = [];
  }

  const contactPhone = process.env.CONTACT_PHONE || "+94 716 335000";
  const contactEmail = process.env.CONTACT_EMAIL || "info@wilpattuwilderness.com";
  const contactAddress =
    process.env.CONTACT_ADDRESS || "02Km Distance from Hunuwilagama Gate, Wilpattu";

  const roomLines = plans
    .map(
      (p) =>
        `- ${roomTitle} (${p.name}): Single $${p.occupancyRates?.single}, Double $${p.occupancyRates?.double}, Triple $${p.occupancyRates?.triple} per night`,
    )
    .join("\n");

  const safariLines = safariExperiences
    .map(
      (s) =>
        `- ${s.name} (${s.duration}): $${s.jeepWithEntryPrice} for 2 pax private jeep + park entry. Includes: ${s.includes}`,
    )
    .join("\n");

  return `
ACCOMMODATION OPTIONS (only these exist — do not invent other room types or rates):
${roomLines || "No accommodation data available."}

SAFARI EXPERIENCES (only these exist — do not invent other safari packages or prices):
${safariLines || "No safari data available."}

SIGNATURE EXPERIENCES INCLUDED IN A STAY (free/complimentary activities):
${SIGNATURE_EXPERIENCES.map((e) => `- ${e}`).join("\n")}

UNIQUE EXCURSIONS (optional day trips, drive time one-way from the property):
${UNIQUE_EXCURSIONS.map((e) => `- ${e}`).join("\n")}

PROPERTY LOCATION: ${contactAddress}
CONTACT: ${contactEmail} | ${contactPhone}

KEY WILPATTU INFORMATION:
- Historical: Wilpattu is Sri Lanka's largest and oldest national park (declared sanctuary in 1905, NP in 1938). Legend says Prince Vijaya landed at Tambapanni (Kudiramalai) in 543 BC and met Queen Kuweni here. Ruins of her palace are still visible.
- Geographical: Famous for "Willus" (natural sand-rimmed water basins). Located in the dry zone, 30km west of Anuradhapura.
- Wildlife: Renowned for leopards (Panthera pardus kotiya), sloth bears, elephants, spotted deer, and diverse birdlife.
- Conservation: Focus on preserving Willu ecosystems and sustainable tourism.
`.trim();
};

export const safariChat = async (
  message: string,
  history: any[] = [],
  images: string[] = [],
) => {
  const ai = getAI();

  const parts: any[] = [{ text: message }];

  // Add images to the current message parts
  images.forEach((img) => {
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: img.split(",")[1] || img,
      },
    });
  });

  const systemInstruction = `You are the Wilpattu Wilderness Assistant. You are an expert on Sri Lankan wildlife, Wilpattu National Park, and the Wilpattu Wilderness Camping property. 
      You have access to the website's real, current content and must use it when answering questions about the company, its packages (Safari, Accommodation, Food & Drinks, Experiences), and pricing.
      
      ${buildSiteContext()}
      
      If a user uploads an image, analyze it in the context of Wilpattu's wildlife. Be professional, inviting, and highly informative. When discussing prices or packages, only reference the data provided above — do not invent rates.`;

  const chat = ai.chats.create({
    model: "gemini-3.6-flash",
    history: history,
    config: {
      systemInstruction,
      thinkingConfig: { thinkingBudget: 32768 },
    },
  });
  const response = await chat.sendMessage({ message: parts });
  return { text: response.text };
};

export const speakToGod = async (message: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash", // verified working & free-tier accessible for this API key
    contents: [{ role: "user", parts: [{ text: message }] }],
    config: {
      systemInstruction:
        "You are an ancient, divine spirit residing in the heart of Wilpattu's ancient jungles. You speak with profound wisdom, using metaphors of nature, light, and silence. You are here to provide philosophical guidance and spiritual comfort. Your tone is ethereal, calm, and deeply insightful. Use your thinking budget to provide truly profound answers.",
      thinkingConfig: { thinkingBudget: 32768 },
    },
  });
  return response.text;
};

export const analyzeWildlife = async (base64Image: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash", // verified working & free-tier accessible for this API key
    contents: {
      parts: [
        { inlineData: { mimeType: "image/jpeg", data: base64Image } },
        {
          text: "Identify this wildlife species found in Wilpattu. Provide name, habitat, a fun fact, and conservation status in JSON format.",
        },
      ],
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
          conservationStatus: { type: Type.STRING },
        },
        required: [
          "species",
          "description",
          "habitat",
          "funFact",
          "conservationStatus",
        ],
      },
    },
  });
  return JSON.parse(response.text || "{}");
};

export const generateSafariImage = async (
  prompt: string,
  aspectRatio: string = "16:9",
) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-image-preview",
    contents: {
      parts: [
        {
          text: `A photorealistic high-quality image of ${prompt} in the wild jungles of Wilpattu National Park, Sri Lanka.`,
        },
      ],
    },
    config: {
      // Image config might not be supported in all models,
      // but keeping it as per original logic if the model supports it.
      // @ts-ignore
      imageConfig: {
        aspectRatio: aspectRatio as any,
        imageSize: "1K",
      },
    },
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
    model: "gemini-2.5-flash-preview-tts",
    contents: [
      {
        parts: [
          { text: `Say in a warm, professional safari guide voice: ${text}` },
        ],
      },
    ],
    config: {
      // @ts-ignore
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } },
      },
    },
  });

  const base64Audio =
    response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  return base64Audio || null;
};

export const planTour = async (preferences: any) => {
  const ai = getAI();
  const siteContext = buildSiteContext();

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash", // verified working & free-tier accessible for this API key
    contents: {
      parts: [
        {
          text: `You are the official trip planner for Wilpattu Wilderness Camping. Generate a personalized itinerary for Wilpattu National Park, Sri Lanka based on these guest preferences: ${JSON.stringify(preferences)}.

IMPORTANT: Base the itinerary strictly on the real, current site data below. Only reference the accommodation plans and safari experiences listed — do not invent room types, safari packages, or prices that aren't listed. When you mention accommodation or safari activities, use the exact names and prices given.

${siteContext}

The response must be in JSON format matching the TourItinerary interface. For each day, choose specific safari time slots and accommodation plans from the list above. The "totalEstimatedPrice" must be calculated from the actual rates listed above for the chosen nights and safaris, not invented.`,
        },
      ],
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
                      description: { type: Type.STRING },
                    },
                    required: ["time", "activity", "description"],
                  },
                },
                meals: { type: Type.ARRAY, items: { type: Type.STRING } },
                accommodation: { type: Type.STRING },
              },
              required: [
                "day",
                "title",
                "activities",
                "meals",
                "accommodation",
              ],
            },
          },
          totalEstimatedPrice: { type: Type.STRING },
        },
        required: ["title", "summary", "days"],
      },
    },
  });
  return JSON.parse(response.text || "{}");
};
