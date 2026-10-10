import React, { useState } from 'react';
import { WordData } from '../types/vocab';
import { WordCard } from './WordCard';
import { generateStoryFromWords } from '../utils/storyGenerator';
import { speakWord } from '../utils/speech';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Shuffle, 
  Bookmark, 
  BookmarkCheck, 
  Volume2, 
  BookOpen, 
  Grid, 
  FileText, 
  RotateCcw,
  SlidersHorizontal,
  Zap
} from 'lucide-react';

interface MainGeneratorProps {
  currentWord: WordData;
  history: WordData[];
  onGenerateNew: () => void;
  onSelectWord: (wordName: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (diff: string) => void;
  selectedPartOfSpeech: string;
  setSelectedPartOfSpeech: (pos: string) => void;
  categories: string[];
  difficulties: string[];
  partsOfSpeech: string[];
  savedWordIds: string[];
  onToggleSave: (word: WordData) => void;
  batchWords: WordData[];
  onGenerateBatch: () => void;
}

export const MainGenerator: React.FC<MainGeneratorProps> = ({
  currentWord,
  history,
  onGenerateNew,
  onSelectWord,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedPartOfSpeech,
  setSelectedPartOfSpeech,
  categories,
  difficulties,
  partsOfSpeech,
  savedWordIds,
  onToggleSave,
  batchWords,
  onGenerateBatch
}) => {
  const [viewMode, setViewMode] = useState<'single' | 'batch' | 'story'>('single');
  const [showConfettiEffect, setShowConfettiEffect] = useState(true);

  const triggerConfetti = () => {
    if (showConfettiEffect) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleGenerateClick = () => {
    triggerConfetti();
    if (viewMode === 'batch' || viewMode === 'story') {
      onGenerateBatch();
    } else {
      onGenerateNew();
    }
  };

  const isCurrentSaved = savedWordIds.includes(currentWord.id);
  const storyText = batchWords.length >= 2 ? generateStoryFromWords(batchWords) : '';

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Header & Primary Trigger Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-6 sm:p-10 shadow-2xl overflow-hidden border border-indigo-700/50">
        {/* Background glow effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-indigo-200">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Smart Vocabulary Builder & Generator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
            Learn Powerful Words with Every Click
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light">
            Click the button below to generate instant curated vocabulary complete with definitions, real-world examples, etymologies, audio pronunciation, and memory hooks!
          </p>

          {/* MAIN GIANT GENERATE BUTTON */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              onClick={handleGenerateClick}
              className="group relative w-full sm:w-auto px-8 py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-extrabold text-xl sm:text-2xl shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 ring-4 ring-white/10 hover:ring-white/20"
            >
              <Sparkles className="w-7 h-7 text-amber-300 animate-spin-slow group-hover:scale-125 transition-transform" />
              <span>Generate New Word</span>
              <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded-md bg-black/30 border border-white/20 text-indigo-200 ml-2">
                Spacebar ␣
              </span>
            </button>

            {/* Surprise Me / Randomizer Button */}
            <button
              onClick={() => {
                setSelectedCategory('All Categories');
                setSelectedDifficulty('All Levels');
                setSelectedPartOfSpeech('All Parts');
                triggerConfetti();
                onGenerateNew();
              }}
              className="w-full sm:w-auto px-5 py-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              title="Reset filters and generate surprise word"
            >
              <Shuffle className="w-5 h-5 text-indigo-300" />
              <span>Surprise Me!</span>
            </button>
          </div>

          {/* Confetti toggle */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-300">
              <input
                type="checkbox"
                checked={showConfettiEffect}
                onChange={(e) => setShowConfettiEffect(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Confetti effect on click</span>
            </label>
          </div>
        </div>
      </div>

      {/* Filter Toolbar & View Mode Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* View Modes (Single, 3-Word Batch, Story) */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start">
            <button
              onClick={() => setViewMode('single')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'single'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Single Word
            </button>
            <button
              onClick={() => {
                setViewMode('batch');
                if (batchWords.length === 0) onGenerateBatch();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'batch'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Grid className="w-4 h-4" />
              Batch (3 Words)
            </button>
            <button
              onClick={() => {
                setViewMode('story');
                if (batchWords.length === 0) onGenerateBatch();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'story'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              Story Mode
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters:</span>
            </div>

            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Difficulty Select */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Part of Speech Select */}
            <select
              value={selectedPartOfSpeech}
              onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500"
            >
              {partsOfSpeech.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {/* Reset Filter Pill */}
            {(selectedCategory !== 'All Categories' || selectedDifficulty !== 'All Levels' || selectedPartOfSpeech !== 'All Parts') && (
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSelectedDifficulty('All Levels');
                  setSelectedPartOfSpeech('All Parts');
                }}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                title="Reset active filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* VIEW CONTENT AREA */}

      {/* SINGLE WORD VIEW */}
      {viewMode === 'single' && (
        <WordCard
          word={currentWord}
          isSaved={isCurrentSaved}
          onToggleSave={onToggleSave}
          onSelectWord={onSelectWord}
          onNextWord={handleGenerateClick}
        />
      )}

      {/* BATCH GRID VIEW */}
      {viewMode === 'batch' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Grid className="w-5 h-5 text-indigo-500" />
              <span>Multi-Word Batch Discovery</span>
            </h2>
            <button
              onClick={onGenerateBatch}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Refresh Batch</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {batchWords.map((word) => {
              const saved = savedWordIds.includes(word.id);
              return (
                <div
                  key={word.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between space-y-4 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300">
                        {word.partOfSpeech}
                      </span>
                      <button
                        onClick={() => onToggleSave(word)}
                        className={`p-1.5 rounded-lg ${
                          saved ? 'text-pink-500' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                      >
                        {saved ? <BookmarkCheck className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
                      </button>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                      {word.word}
                    </h3>

                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                      {word.phonetic}
                    </p>

                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium line-clamp-3">
                      {word.definition}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => speakWord(word.word)}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectWord(word.word);
                        setViewMode('single');
                      }}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Deep Dive →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STORY MODE VIEW */}
      {viewMode === 'story' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-500" />
                <span>3-Word Creative Story Generator</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Weave 3 generated words into a meaningful contextual story to supercharge retention.
              </p>
            </div>
            <button
              onClick={onGenerateBatch}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-colors flex items-center gap-2 shrink-0 shadow-md shadow-purple-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>New Story Combo</span>
            </button>
          </div>

          {/* Words Chips in Story */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900">
            <span className="text-xs font-semibold text-purple-800 dark:text-purple-300 uppercase tracking-wider">
              Combo Words:
            </span>
            {batchWords.map((w) => (
              <span key={w.id} className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-purple-900 dark:text-purple-200 font-bold text-sm shadow-xs border border-purple-200 dark:border-purple-800">
                {w.word}
              </span>
            ))}
          </div>

          {/* Generated Story Box */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
            <p className="text-lg text-slate-800 dark:text-slate-200 font-serif leading-relaxed italic">
              {storyText}
            </p>
          </div>
        </div>
      )}

      {/* RECENTS HISTORY TAPE */}
      {history.length > 1 && (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Recently Generated Words ({history.length})
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {history.slice(-10).reverse().map((w, idx) => (
              <button
                key={`${w.id}-${idx}`}
                onClick={() => onSelectWord(w.word)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  w.id === currentWord.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {w.word}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
