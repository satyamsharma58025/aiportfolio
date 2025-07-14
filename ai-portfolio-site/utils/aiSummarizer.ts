// AI-powered text summarization utility
export async function summarizeText(text: string): Promise<string> {
  try {
    // For now, return a simple summary
    // In production, this would connect to an AI service
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  } catch (error) {
    console.error('Error summarizing text:', error);
    return text;
  }
}