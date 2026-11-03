import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = createGroq({ 
  apiKey: apiKey || '',
});

export default async function askAi(question) {
  if (!apiKey) {
    throw new Error('Missing VITE_GROQ_API_KEY in .env file');
  }

  const result = await generateText({
    model: groq('openai/gpt-oss-20b'),
    prompt: question,
  });

  return result.text;
}