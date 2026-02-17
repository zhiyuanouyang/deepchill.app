
import { GoogleGenAI } from "@google/genai";
import { APPS_CATALOG } from "@/app/data/apps";

export class GeminiAssistant {
    private ai: GoogleGenAI;

    constructor() {
        this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    }

    async recommendApp(query: string): Promise<string> {
        const catalogString = JSON.stringify(APPS_CATALOG.map(app => ({
            name: app.name,
            description: app.description,
            category: app.category,
            tags: app.tags
        })));

        try {
            const response = await this.ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: `I have a catalog of web applications: ${catalogString}. Based on the user's request: "${query}", recommend the best application from the list. Explain why in a concise, friendly tone (max 2 sentences).`,
                config: {
                    temperature: 0.7,
                }
            });
            return response.text || "I couldn't find a specific recommendation. Feel free to browse our full catalog!";
        } catch (error) {
            console.error("Gemini Error:", error);
            return "I'm having trouble connecting to my neural network. Please check the catalog manually!";
        }
    }
}
