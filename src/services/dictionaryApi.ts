import { WordData } from '../types/vocab';

export async function fetchWordFromOnlineApi(wordQuery: string): Promise<Partial<WordData> | null> {
  try {
    const cleanWord = wordQuery.trim().toLowerCase();
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    if (!data || !data.length) return null;
    
    const entry = data[0];
    const word = entry.word || wordQuery;
    const phonetic = entry.phonetic || entry.phonetics?.find((p: { text?: string }) => p.text)?.text || '';
    
    const meanings = entry.meanings || [];
    const primaryMeaning = meanings[0] || {};
    const partOfSpeech = (primaryMeaning.partOfSpeech as any) || 'noun';
    
    const definitions = primaryMeaning.definitions || [];
    const mainDefObj = definitions[0] || {};
    const definition = mainDefObj.definition || 'No definition available.';
    const simpleMeaning = definition.length > 80 ? definition.slice(0, 80) + '...' : definition;
    
    const examples: string[] = [];
    definitions.forEach((d: { example?: string }) => {
      if (d.example && examples.length < 3) {
        examples.push(d.example);
      }
    });
    
    if (examples.length === 0) {
      examples.push(`The word "${word}" is frequently used in formal writing and literature.`);
    }

    const synonyms: string[] = primaryMeaning.synonyms || [];
    const antonyms: string[] = primaryMeaning.antonyms || [];

    return {
      id: `online-${cleanWord}-${Date.now()}`,
      word: word.charAt(0).toUpperCase() + word.slice(1),
      phonetic,
      partOfSpeech,
      category: 'Everyday Gems',
      difficulty: 'Intermediate',
      definition,
      simpleMeaning,
      examples,
      synonyms: synonyms.slice(0, 5),
      antonyms: antonyms.slice(0, 5),
      etymology: `Derived from classic English usage of ${word}.`,
      mnemonic: `Focus on the root sound "${word}" to remember its core meaning.`,
      collocations: [`use ${word}`, `common ${word}`]
    };
  } catch (err) {
    console.warn('Online dictionary fetch error:', err);
    return null;
  }
}
