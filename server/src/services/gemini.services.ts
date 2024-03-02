// node --version # Should be >= 18
// npm install @google/generative-ai

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GEMNI_API_KEY || "AIzaSyDNhtzIMiSQ9Y5KWZarlfk3Rtgv3licJhY";

async function runChat(message: string) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      // {
      //   role: "user",
      //   parts: [{ text: "Question:\nMenurut anda, mana yang lebih mungkin terjadi, jatuh cinta dengan orang yang karakternya mirip\ndengan kita atau jatuh cinta dengan orang yang karakternya jauh berbeda dengan kita. Jelaskan\ndengan menggunakan salah satu teori dalam hubungan antar pribadi\n\nAnswer sample:\nMenurut saya, kita lebih mungkin untuk jatuh cinta dengan orang yang karakternya\nmirip dengan kita. Alasan utamanya mendasar kepada teori Law of Attraction / Teori Ketertarikan.\n\nPrompt: Jika user menyebutkan hampir mirip dengan jawaban, berikan 10 point, jika benar setengah nya berikan 5 point, dan jika tidak relevan berikan 1 point. Jawab dalam format Json" }],
      // },
      // {
      //   role: "model",
      //   parts: [{ text: "{\n \"score\": 5,\n \"feedback\": \" Jawaban pengguna hampir benar, namun gagal memberikan penjelasan menggunakan salah satu teori dalam hubungan antar pribadi yang disebutkan dalam prompt.\"\n}" }],
      // },
      // {
      //   role: "user",
      //   parts: [{ text: "Saya berpendapat bahwa, kita lebih mungkin untuk jatuh cinta dengan orang yang karakternya mirip dengan kita, sehubungan dengan teori law of attraction" }],
      // },
      // {
      //   role: "model",
      //   parts: [{ text: "{\n \"score\": 10,\n \"feedback\": \"Jawaban pengguna benar dan lengkap. Pengguna menyebutkan teori yang relevan (law of attraction) dan memberikan penjelasan yang jelas.\"\n}" }],
      // },
    ],
  });

  const result = await chat.sendMessage(message);
  const response = result.response;
  console.log(response.text());
  return response.text();
}


export { runChat };