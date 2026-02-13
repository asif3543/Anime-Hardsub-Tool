
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProcessingInsights = async (
  videoName: string,
  assName: string,
  hasThumbnail: boolean,
  position: string
) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short technical "FFmpeg execution plan" overview for an anime hardsubbing task.
      Video: ${videoName}
      Subtitles: ${assName}
      Thumbnail: ${hasThumbnail ? `Yes (${position})` : 'No'}
      
      Format the response as a bulleted list of 3 items explaining technical optimizations. Keep it under 100 words.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ready to process video stream...";
  }
};
