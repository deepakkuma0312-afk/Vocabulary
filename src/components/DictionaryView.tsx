import React, { useState } from 'react';
import { WordData } from '../types/vocab';
import { fetchWordFromOnlineApi } from '../services/dictionaryApi';
import { Search, Globe, Volume2, Sparkles, BookOpen, Loader2 } from 'lucide-react';
import { speakWord } from '../utils/speech';

interface DictionaryViewProps {
  allWords: WordData[];
  onSelectWordData: (word: WordData) => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({
  allWords,
  onSelectWordData
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [onlineResult, setOnlineResult] = useState<WordData | null>(null);
  const [onlineNotFound, setOnlineNotFound] = useState(false);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredOffline = allWords.filter((w) => {
    if (activeLetter && !w.word.toUpperCase().startsWith(activeLetter)) return false;
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

  const handleOnlineSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Check if it already exists offline
    const foundOffline = allWords.find(
      (w) => w.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundOffline) {
      onSelectWordData(foundOffline);
      return;
    }

    // Try online fetch
    setIsSearchingOnline(true);
    setOnlineNotFound(false);
    setOnlineResult(null);

    const fetched = await fetchWordFromOnlineApi(searchTerm.trim());
    setIsSearchingOnline(false);

    if (fetched && fetched.word) {
      const fullWordData = fetched as WordData;
      setOnlineResult(fullWordData);
    } else {
      setOnlineNotFound(true);
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-500" />
          <span>Vocabulary Dictionary & Live Lookup</span>
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Browse through our curated vocabulary database or look up any word from live English dictionaries online!
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleOnlineSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOnlineNotFound(false);
              setOnlineResult(null);
            }}
            placeholder="Type any English word to search (e.g., Ephemeral, Synergy, Resilient)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2 shrink-0"
        >
          {isSearchingOnline ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Globe className="w-4 h-4" />
              <span>Lookup</span>
            </>
          )}
        </button>
      </form>

      {/* A-Z Letter Filter Bar */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-thin">
        <button
          onClick={() => setActiveLetter(null)}
          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
            activeLetter === null
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          ALL
        </button>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
              activeLetter === letter
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* ONLINE DICTIONARY RESULT BOX */}
      {onlineResult && (
        <div className="p-6 rounded-3xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              Live Online Dictionary Result
            </span>
            <button
              onClick={() => speakWord(onlineResult.word)}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 shadow-sm"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {onlineResult.word}
            </h3>
            {onlineResult.phonetic && (
              <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
                {onlineResult.phonetic}
              </p>
            )}
          </div>

          <p className="text-base text-slate-800 dark:text-slate-200 font-medium">
            {onlineResult.definition}
          </p>

          <button
            onClick={() => onSelectWordData(onlineResult)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Load into Main Generator Card</span>
          </button>
        </div>
      )}

      {/* ONLINE NOT FOUND ALERT */}
      {onlineNotFound && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200">
          ⚠️ Word not found in online dictionary. Try checking spelling or browse the offline database below.
        </div>
      )}

      {/* OFFLINE DATABASE WORD CARDS GRID */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Curated Lexicon Database ({filteredOffline.length} words)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredOffline.map((word) => (
            <div
              key={word.id}
              onClick={() => onSelectWordData(word)}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer group flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {word.category}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">
                    {word.partOfSpeech}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors mt-2">
                  {word.word}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                  {word.definition}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                <span>View Card →</span>
                <span className="text-slate-400">{word.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
