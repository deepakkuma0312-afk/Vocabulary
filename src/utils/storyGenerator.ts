import { WordData } from '../types/vocab';

export function generateStoryFromWords(words: WordData[]): string {
  if (!words || words.length < 2) return '';

  const w1 = words[0];
  const w2 = words[1];
  const w3 = words[2] || words[0];

  const storyTemplates = [
    `In a moment of sudden clarity, the protagonist experienced a **${w1.word.toLowerCase()}** revelation. Rather than retreating into old habits, they took a **${w2.word.toLowerCase()}** approach, embracing the **${w3.word.toLowerCase()}** nature of the journey ahead.`,
    
    `The scholar spent years studying the **${w1.word.toLowerCase()}** principles of history. She believed that every great event leaves a **${w2.word.toLowerCase()}** legacy, inspiring a truly **${w3.word.toLowerCase()}** transformation across generations.`,
    
    `Standing before the roaring crowd with an **${w1.word.toLowerCase()}** presence, the speaker delivered a speech that felt remarkably **${w2.word.toLowerCase()}**. It sparked a **${w3.word.toLowerCase()}** movement that changed everything overnight.`,

    `What began as a **${w1.word.toLowerCase()}** coincidence quickly evolved into a **${w2.word.toLowerCase()}** achievement, proving that even **${w3.word.toLowerCase()}** ideas can alter the world when executed with passion.`
  ];

  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  return storyTemplates[randomIndex];
}
