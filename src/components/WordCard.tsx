import React, { useState } from 'react';
import { WordData } from '../types/vocab';
import { 
  Volume2, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Lightbulb, 
  BookOpen, 
  History, 
  Quote, 
  Check, 
  Copy, 
  Sparkles,
  Send,
  Zap,
  Tag
} from 'lucide-react';
import { speakWord } from '../utils/speech';

interface WordCardProps {
  word: WordData;
  isSaved: boolean;
  onToggleSave: (word: WordData) => void;
  onSelectWord: (wordName: string) => void;
  onNextWord?: () => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  isSaved,
  onToggleSave,
  onSelectWord,
  onNextWord
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [copiedSentence, setCopiedSentence] = useState<number | null>(null);
  const [userSentence, setUserSentence] = useState('');
  const [sentenceFeedback, setSentenceFeedback] = useState<string | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    speakWord(word.word, audioSpeed, () => setIsPlayingAudio(false));
  };

  const handleCopySentence = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSentence(idx);
    setTimeout(() => setCopiedSentence(null), 2000);
  };

  const handleShareWord = () => {
    const shareText = `📚 Word of the Day: "${word.word}" (${word.phonetic}) [${word.partOfSpeech}]\n\nMeaning: ${word.definition}\nExample: "${word.examples[0]}"\n\nLearn more vocabulary on LexiBoost!`;
    navigator.clipboard.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleCheckUserSentence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSentence.trim()) return;

    const lowerSentence = userSentence.toLowerCase();
    const lowerWord = word.word.toLowerCase();
    
    // Check if sentence contains the target word or its root
    if (lowerSentence.includes(lowerWord) || lowerSentence.includes(lowerWord.slice(0, Math.max(3, lowerWord.length - 2)))) {
      setSentenceFeedback('🎉 Brilliant usage! Your sentence uses the word correctly and clearly!');
    } else {
      setSentenceFeedback(`💡 Good effort! Try incorporating the exact word "${word.word}" into your sentence!`);
    }
  };

  // Color mapping based on difficulty
  const difficultyColors = {
    Beginner: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    Intermediate: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    Advanced: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    Master: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all duration-300">
      {/* Top Banner Accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Pill */}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-indigo-500" />
              {word.category}
            </span>

            {/* Part of Speech Pill */}
            <span className="px-3 py-1 rounded-full text-xs font-medium italic bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              {word.partOfSpeech}
            </span>

            {/* Difficulty Badge */}
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[word.difficulty] || difficultyColors.Intermediate}`}>
              {word.difficulty}
            </span>
          </div>

          {/* Action Buttons: Audio speed, Bookmark, Share */}
          <div className="flex items-center gap-2">
            {/* Speed selector */}
            <button
              onClick={() => setAudioSpeed(s => s === 1.0 ? 0.75 : s === 0.75 ? 1.25 : 1.0)}
              className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Change Audio Speed"
            >
              {audioSpeed}x Speed
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => onToggleSave(word)}
              className={`p-2.5 rounded-2xl transition-all ${
                isSaved
                  ? 'bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 border border-pink-300 dark:border-pink-800 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={isSaved ? "Remove from Saved" : "Save to Favorites"}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
            </button>

            {/* Share Button */}
            <button
              onClick={handleShareWord}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
              title="Share Word"
            >
              {copiedShare ? <Check className="w-5 h-5 text-emerald-500" /> : <Share2 className="w-5 h-5" />}
              {copiedShare && (
                <span className="absolute -top-8 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            {/* Next Word Button */}
            {onNextWord && (
              <button
                onClick={onNextWord}
                className="px-3 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1"
                title="Generate Next Word"
              >
                <span>Next</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>

        {/* Word Title & Pronunciation */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white">
              {word.word}
            </h1>
            {word.phonetic && (
              <p className="text-lg font-mono text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
                {word.phonetic}
              </p>
            )}
          </div>

          {/* Large Audio Speaker Button */}
          <button
            onClick={handlePlayAudio}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all transform active:scale-95 shadow-md ${
              isPlayingAudio
                ? 'bg-indigo-700 text-white animate-pulse ring-4 ring-indigo-300 dark:ring-indigo-800'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25'
            }`}
          >
            <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
            <span>Listen Pronunciation</span>
          </button>
        </div>

        {/* Definition & Simple Meaning Box */}
        <div className="space-y-3 p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Definition</span>
          </div>
          <p className="text-lg text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
            {word.definition}
          </p>

          {word.simpleMeaning && (
            <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/50 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span><strong className="text-slate-700 dark:text-slate-300">Quick Recap:</strong> {word.simpleMeaning}</span>
            </div>
          )}
        </div>

        {/* Contextual Example Sentences */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Contextual Examples</span>
          </h3>
          <div className="space-y-2.5">
            {word.examples.map((ex, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors flex items-start justify-between gap-3"
              >
                <p className="text-slate-700 dark:text-slate-200 text-base leading-snug">
                  "{ex}"
                </p>
                <button
                  onClick={() => handleCopySentence(idx, ex)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-indigo-600 transition-all shrink-0"
                  title="Copy example sentence"
                >
                  {copiedSentence === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mnemonic & Etymology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mnemonic / Memory Hook */}
          {word.mnemonic && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-xs uppercase tracking-wide">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Memory Hook (Mnemonic)</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {word.mnemonic}
              </p>
            </div>
          )}

          {/* Etymology Origin */}
          {word.etymology && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-xs uppercase tracking-wide">
                <History className="w-4 h-4 text-indigo-500" />
                <span>Etymology & Root Origin</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {word.etymology}
              </p>
            </div>
          )}
        </div>

        {/* Synonyms & Antonyms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Synonyms */}
          {word.synonyms && word.synonyms.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Synonyms (Click to explore)
              </span>
              <div className="flex flex-wrap gap-2">
                {word.synonyms.map((syn, i) => (
                  <button
                    key={i}
                    onClick={() => onSelectWord(syn)}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  >
                    + {syn}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Antonyms */}
          {word.antonyms && word.antonyms.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Antonyms
              </span>
              <div className="flex flex-wrap gap-2">
                {word.antonyms.map((ant, i) => (
                  <button
                    key={i}
                    onClick={() => onSelectWord(ant)}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
                  >
                    × {ant}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Collocations */}
        {word.collocations && word.collocations.length > 0 && (
          <div className="pt-2 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Common Combinations (Collocations)
            </span>
            <div className="flex flex-wrap gap-2">
              {word.collocations.map((col, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                >
                  "{col}"
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Famous Quote (if available) */}
        {word.quote && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 border border-purple-200/60 dark:border-purple-800/50 relative">
            <Quote className="w-8 h-8 text-purple-300 dark:text-purple-800 absolute top-3 right-4 opacity-50" />
            <p className="text-sm italic text-slate-800 dark:text-slate-200 font-serif leading-relaxed pr-6">
              "{word.quote.text}"
            </p>
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-2 text-right">
              — {word.quote.author}
            </p>
          </div>
        )}

        {/* Interactive "Write your sentence" challenge */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Send className="w-4 h-4 text-indigo-500" />
              <span>Sentence Writing Practice</span>
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">Test your understanding</span>
          </div>

          <form onSubmit={handleCheckUserSentence} className="flex gap-2">
            <input
              type="text"
              value={userSentence}
              onChange={(e) => setUserSentence(e.target.value)}
              placeholder={`Write a sentence using "${word.word}"...`}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Check</span>
            </button>
          </form>

          {sentenceFeedback && (
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-medium text-indigo-900 dark:text-indigo-200 animate-fadeIn">
              {sentenceFeedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
