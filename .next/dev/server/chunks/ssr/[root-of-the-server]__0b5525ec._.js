module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4005ac7261116a584b955af765d656ff0eec9e6a01":"planTour","400d560a36a073d118cddd95f660eecc49eba1c37b":"speakText","407fa70e89e814647a6f3b0283e56e668e4aa60548":"analyzeWildlife","40a8ab60db27460af9a6262a6400b12da556256c20":"speakToGod","605bcb456a21998f9eae59cff243eb5b5c9574b161":"generateSafariImage","70c29a7ba523818b3ca85e8f2d22e57ba89e6a9c6a":"safariChat"},"",""] */ __turbopack_context__.s([
    "analyzeWildlife",
    ()=>analyzeWildlife,
    "generateSafariImage",
    ()=>generateSafariImage,
    "planTour",
    ()=>planTour,
    "safariChat",
    ()=>safariChat,
    "speakText",
    ()=>speakText,
    "speakToGod",
    ()=>speakToGod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const getAI = ()=>{
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not set in environment variables");
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
        apiKey
    });
};
const safariChat = async (message, history = [], images = [])=>{
    const ai = getAI();
    const parts = [
        {
            text: message
        }
    ];
    // Add images to the current message parts
    images.forEach((img)=>{
        parts.push({
            inlineData: {
                mimeType: "image/jpeg",
                data: img.split(',')[1] || img
            }
        });
    });
    const chat = ai.chats.create({
        model: 'gemini-2.0-flash-exp',
        history: history,
        config: {
            systemInstruction: `You are the Wilpattu Wild Camping Assistant. You are an expert on Sri Lankan wildlife, Wilpattu National Park, and luxury safari experiences. 
      You have access to the website content and can answer questions about the company, its packages (Safari, Accommodation, Food & Drinks, Experiences), and the park. 
      
      KEY WILPATTU INFORMATION:
      - Historical: Wilpattu is Sri Lanka's largest and oldest national park (declared sanctuary in 1905, NP in 1938). Legend says Prince Vijaya landed at Tambapanni (Kudiramalai) in 543 BC and met Queen Kuweni here. Ruins of her palace are still visible.
      - Geographical: Famous for "Willus" (Natural sand-rimmed water basins). Located in the dry zone, 30km west of Anuradhapura.
      - Wildlife: Renowned for leopards (Panthera pardus kotiya), sloth bears, elephants, spotted deer, and diverse birdlife.
      - Conservation: Focus on preserving Willu ecosystems and sustainable tourism.
      
      If a user uploads an image, analyze it in the context of Wilpattu's wildlife. Be professional, inviting, and highly informative. Use grounding to provide accurate information about recent events or specific details if needed.`,
            thinkingConfig: {
                thinkingBudget: 32768
            },
            tools: [
                {
                    googleSearch: {}
                },
                {
                    urlContext: {}
                }
            ]
        }
    });
    const response = await chat.sendMessage({
        message: parts
    });
    return {
        text: response.text,
        grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
};
const speakToGod = async (message)=>{
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: [
            {
                role: 'user',
                parts: [
                    {
                        text: message
                    }
                ]
            }
        ],
        config: {
            systemInstruction: "You are an ancient, divine spirit residing in the heart of Wilpattu's ancient jungles. You speak with profound wisdom, using metaphors of nature, light, and silence. You are here to provide philosophical guidance and spiritual comfort. Your tone is ethereal, calm, and deeply insightful. Use your thinking budget to provide truly profound answers.",
            thinkingConfig: {
                thinkingBudget: 32768
            }
        }
    });
    return response.text;
};
const analyzeWildlife = async (base64Image)=>{
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: {
            parts: [
                {
                    inlineData: {
                        mimeType: 'image/jpeg',
                        data: base64Image
                    }
                },
                {
                    text: "Identify this wildlife species found in Wilpattu. Provide name, habitat, a fun fact, and conservation status in JSON format."
                }
            ]
        },
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].OBJECT,
                properties: {
                    species: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    description: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    habitat: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    funFact: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    conservationStatus: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    }
                },
                required: [
                    "species",
                    "description",
                    "habitat",
                    "funFact",
                    "conservationStatus"
                ]
            }
        }
    });
    return JSON.parse(response.text || '{}');
};
const generateSafariImage = async (prompt, aspectRatio = "16:9")=>{
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: {
            parts: [
                {
                    text: `A photorealistic high-quality image of ${prompt} in the wild jungles of Wilpattu National Park, Sri Lanka.`
                }
            ]
        },
        config: {
            // Image config might not be supported in all models, 
            // but keeping it as per original logic if the model supports it.
            // @ts-ignore
            imageConfig: {
                aspectRatio: aspectRatio,
                imageSize: "1K"
            }
        }
    });
    for (const part of response.candidates?.[0]?.content?.parts || []){
        if (part.inlineData) {
            return `data:image/png;base64,${part.inlineData.data}`;
        }
    }
    return null;
};
const speakText = async (text)=>{
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: [
            {
                parts: [
                    {
                        text: `Say in a warm, professional safari guide voice: ${text}`
                    }
                ]
            }
        ],
        config: {
            // @ts-ignore
            responseModalities: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Modality"].AUDIO
            ],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: {
                        voiceName: 'Kore'
                    }
                }
            }
        }
    });
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio || null;
};
const planTour = async (preferences)=>{
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: {
            parts: [
                {
                    text: `Generate a personalized safari itinerary for Wilpattu National Park, Sri Lanka based on these preferences: ${JSON.stringify(preferences)}. 
        The response must be in JSON format matching the TourItinerary interface. 
        Include specific activities like morning safaris, night walks, bird watching, and luxury camping details.`
                }
            ]
        },
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].OBJECT,
                properties: {
                    title: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    summary: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    },
                    days: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ARRAY,
                        items: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].OBJECT,
                            properties: {
                                day: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].INTEGER
                                },
                                title: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                },
                                activities: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ARRAY,
                                    items: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].OBJECT,
                                        properties: {
                                            time: {
                                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                            },
                                            activity: {
                                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                            },
                                            description: {
                                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                            }
                                        },
                                        required: [
                                            "time",
                                            "activity",
                                            "description"
                                        ]
                                    }
                                },
                                meals: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ARRAY,
                                    items: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                    }
                                },
                                accommodation: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                                }
                            },
                            required: [
                                "day",
                                "title",
                                "activities",
                                "meals",
                                "accommodation"
                            ]
                        }
                    },
                    totalEstimatedPrice: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].STRING
                    }
                },
                required: [
                    "title",
                    "summary",
                    "days"
                ]
            }
        }
    });
    return JSON.parse(response.text || '{}');
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    safariChat,
    speakToGod,
    analyzeWildlife,
    generateSafariImage,
    speakText,
    planTour
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(safariChat, "70c29a7ba523818b3ca85e8f2d22e57ba89e6a9c6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(speakToGod, "40a8ab60db27460af9a6262a6400b12da556256c20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(analyzeWildlife, "407fa70e89e814647a6f3b0283e56e668e4aa60548", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateSafariImage, "605bcb456a21998f9eae59cff243eb5b5c9574b161", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(speakText, "400d560a36a073d118cddd95f660eecc49eba1c37b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(planTour, "4005ac7261116a584b955af765d656ff0eec9e6a01", null);
}),
"[project]/.next-internal/server/app/accommodation/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/accommodation/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400d560a36a073d118cddd95f660eecc49eba1c37b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["speakText"],
    "70c29a7ba523818b3ca85e8f2d22e57ba89e6a9c6a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safariChat"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$accommodation$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/accommodation/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b5525ec._.js.map