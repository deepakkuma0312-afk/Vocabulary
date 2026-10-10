export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb' | 'idiom';

export type Category = 
  | 'All Categories'
  | 'Literary' 
  | 'GRE & SAT Prep' 
  | 'Business & Tech' 
  | 'Philosophy & Art' 
  | 'Slang & Idioms' 
  | 'Science & Nature' 
  | 'Everyday Gems' 
  | 'Personality & Emotions';

export type Difficulty = 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';

export interface FamousQuote {
  text: string;
  author: string;
}

export interface WordData {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: PartOfSpeech;
  category: Exclude<Category, 'All Categories'>;
  difficulty: Exclude<Difficulty, 'All Levels'>;
  definition: string;
  simpleMeaning: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  etymology: string;
  mnemonic: string;
  collocations: string[];
  usageTip?: string;
  quote?: FamousQuote;
  isCustom?: boolean;
}

export interface UserProgress {
  savedWordIds: string[];
  masteredWordIds: string[];
  customWords: WordData[];
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalGenerated: number;
  quizScore: number;
  quizzesTaken: number;
  xp: number;
}

export interface QuizQuestion {
  id: string;
  type: 'meaning' | 'synonym' | 'fillInBlank';
  word: WordData;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
