import React, { useState } from 'react';
import { WordData } from '../types/vocab';
import { exportWordsAsCSV, exportWordsAsJSON } from '../utils/exportUtils';
import { speakWord } from '../utils/speech';
import { Bookmark, Search, Trash2, Download, Volume2, Layers } from 'lucide-react';

interface SavedWordsViewProps {
  savedWords: WordData[];
  onRemoveSave: (word: WordData) => void;
  onSelectWord: (wordName: string) => void;
  onStartFlashcards: () => void;
}

export const SavedWordsView: React.FC<SavedWordsViewProps> = ({
  savedWords,
  onRemoveSave,
  onSelectWord,
  onStartFlashcards
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWords = savedWords.filter((w) => {
    if (selectedCategory !== 'All' && w.category !== selectedCategory) return false;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      return (
        w.word.toLowerCase().includes(term) ||
        w.definition.toLowerCase().includes(term) ||
        w.simpleMeaning.toLowerCase().includes(term)
      );
    }
    return true;
  });

  if (savedWords.length === 0) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-10 text-center border border-slate-200 dark:border-slate-800 space-y-4">
        <Bookmark className="w-12 h-12 text-pink-400 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Saved Collection is Empty</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
          Click the bookmark icon on any word card in the generator to save words to your personal study bank!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Export controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-pink-500 fill-current" />
            <span>Saved Vocabulary Bank ({savedWords.length})</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Your personal list of bookmarked words for study and review.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onStartFlashcards}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Layers className="w-4 h-4" />
            <span>Study Saved Deck</span>
          </button>

          <button
            onClick={() => exportWordsAsCSV(savedWords)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
            title="Export list to CSV spreadsheet"
          >
            <Download className="w-4 h-4 text-emerald-500" />
            <span>CSV</span>
          </button>

          <button
            onClick={() => exportWordsAsJSON(savedWords)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
            title="Export list to JSON format"
          >
            <Download className="w-4 h-4 text-purple-500" />
            <span>JSON</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search inside saved collection..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-medium focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Categories</option>
          {Array.from(new Set(savedWords.map((w) => w.category))).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWords.map((word) => (
          <div
            key={word.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3 hover:border-indigo-300 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300">
                  {word.partOfSpeech} • {word.difficulty}
                </span>

                <button
                  onClick={() => onRemoveSave(word)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 transition-colors"
                  title="Remove from saved list"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-baseline justify-between gap-2">
                <h3 
                  onClick={() => onSelectWord(word.word)}
                  className="text-2xl font-serif font-bold text-slate-900 dark:text-white hover:text-indigo-600 cursor-pointer"
                >
                  {word.word}
                </h3>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">{word.phonetic}</span>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                {word.definition}
              </p>

              {word.examples.length > 0 && (
                <p className="text-xs italic text-slate-500 dark:text-slate-400">
                  "{word.examples[0]}"
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">{word.category}</span>
              <button
                onClick={() => speakWord(word.word)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
