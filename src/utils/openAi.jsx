import { GEMINI_AI_KEY } from "./constant";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiModel;
