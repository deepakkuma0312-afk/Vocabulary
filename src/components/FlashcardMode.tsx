import React, { useState } from 'react';
import { WordData } from '../types/vocab';
import { Volume2, RotateCcw, CheckCircle2, HelpCircle, Shuffle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { speakWord } from '../utils/speech';

interface FlashcardModeProps {
  words: WordData[];
  onMarkMastered: (wordId: string) => void;
  savedWordIds: string[];
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  words,
  onMarkMastered
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardList, setCardList] = useState<WordData[]>(words);

  if (cardList.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center border border-slate-200 dark:border-slate-800 space-y-4">
        <Layers className="w-12 h-12 text-indigo-400 mx-auto animate-bounce" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Flashcards Available</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm">
          Save some vocabulary words or switch categories to generate a deck of study cards!
        </p>
      </div>
    );
  }

  const currentCard = cardList[currentIndex % cardList.length];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardList].sort(() => 0.5 - Math.random());
    setCardList(shuffled);
    setCurrentIndex(0);
  };

  const handleMarkKnown = () => {
    onMarkMastered(currentCard.id);
    handleNext();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Header controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-500" />
            <span>Spaced Repetition Flashcards</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Card {currentIndex + 1} of {cardList.length}
          </p>
        </div>

        <button
          onClick={handleShuffle}
          className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
        >
          <Shuffle className="w-4 h-4 text-indigo-500" />
          <span>Shuffle Deck</span>
        </button>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer perspective-1000 min-h-[360px] relative group"
      >
        <div className={`w-full h-full min-h-[360px] rounded-3xl border-2 border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-900 p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between transform ${isFlipped ? 'bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/40 dark:to-purple-950/40' : ''}`}>
          
          {/* Card Top Pill & Audio */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              {currentCard.partOfSpeech} • {currentCard.difficulty}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                speakWord(currentCard.word);
              }}
              className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100"
              title="Listen Pronunciation"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* FRONT OF CARD */}
          {!isFlipped ? (
            <div className="my-auto text-center space-y-4 py-8">
              <h3 className="text-4xl sm:text-5xl font-serif font-extrabold text-slate-900 dark:text-white tracking-tight">
                {currentCard.word}
              </h3>
              <p className="text-lg font-mono text-indigo-600 dark:text-indigo-400">
                {currentCard.phonetic}
              </p>
              <p className="text-xs text-slate-400 font-medium animate-pulse pt-4">
                Click anywhere to flip card & reveal meaning 🔄
              </p>
            </div>
          ) : (
            /* BACK OF CARD */
            <div className="my-auto space-y-4 py-4 animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Definition
                </span>
                <p className="text-xl font-medium text-slate-800 dark:text-slate-100 mt-1 leading-relaxed">
                  {currentCard.definition}
                </p>
              </div>

              {currentCard.examples.length > 0 && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Example</span>
                  <p className="text-sm italic text-slate-700 dark:text-slate-300 mt-0.5">
                    "{currentCard.examples[0]}"
                  </p>
                </div>
              )}

              {currentCard.mnemonic && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-800 dark:text-amber-200 font-medium">
                  💡 <strong>Memory Hook:</strong> {currentCard.mnemonic}
                </div>
              )}
            </div>
          )}

          {/* Card Bottom Hint */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>{currentCard.category}</span>
            <span className="flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5" />
              Click to Flip
            </span>
          </div>
        </div>
      </div>

      {/* Assessment Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={handlePrev}
          className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          title="Previous Card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNext}
            className="px-4 py-3 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 hover:bg-amber-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Need Practice</span>
          </button>

          <button
            onClick={handleMarkKnown}
            className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mastered! (+10 XP)</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          title="Next Card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
