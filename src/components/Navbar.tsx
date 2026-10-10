import React from 'react';
import { 
  Sparkles, 
  Bookmark, 
  BrainCircuit, 
  Layers, 
  PlusCircle, 
  Search, 
  Flame, 
  Award,
  Sun,
  Moon,
  Keyboard
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'generator' | 'flashcards' | 'quiz' | 'saved' | 'dictionary';
  setActiveTab: (tab: 'generator' | 'flashcards' | 'quiz' | 'saved' | 'dictionary') => void;
  savedCount: number;
  streak: number;
  xp: number;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenAddModal: () => void;
  onOpenShortcuts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  streak,
  xp,
  darkMode,
  setDarkMode,
  onOpenAddModal,
  onOpenShortcuts
}) => {
  // Calculate level based on XP (e.g. level = floor(xp / 100) + 1)
  const level = Math.floor(xp / 100) + 1;
  const levelNames = [
    'Word Novice', 'Word Explorer', 'Lexicon Scholar', 'Vocab Artisan', 
    'Language Master', 'Linguistic Wizard', 'Polyglot Genius'
  ];
  const levelName = levelNames[Math.min(level - 1, levelNames.length - 1)];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('generator')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 transform hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                LexiBoost
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                Vocab Generator
              </span>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('generator')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'generator'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Generator
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              Flashcards
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              Quiz Hub
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                activeTab === 'saved'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Saved
              {savedCount > 0 && (
                <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-pink-500 text-white font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('dictionary')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dictionary'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Search className="w-4 h-4" />
              Dictionary
            </button>
          </nav>

          {/* User Stats & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Pill */}
            <div 
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400 text-xs font-semibold shadow-xs"
              title={`${streak} day learning streak!`}
            >
              <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
              <span>{streak}d Streak</span>
            </div>

            {/* Level / XP Pill */}
            <div 
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 text-purple-600 dark:text-purple-300 text-xs font-semibold"
              title={`Lvl ${level} (${levelName}) - ${xp} XP`}
            >
              <Award className="w-4 h-4 text-purple-500" />
              <span>Lvl {level}</span>
            </div>

            {/* Add Custom Word Button */}
            <button
              onClick={onOpenAddModal}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Add Custom Word"
            >
              <PlusCircle className="w-5 h-5 text-indigo-500" />
            </button>

            {/* Keyboard Shortcuts Button */}
            <button
              onClick={onOpenShortcuts}
              className="hidden lg:flex p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Keyboard Shortcuts (Space, S, P)"
            >
              <Keyboard className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('generator')}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium ${
              activeTab === 'generator' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Generate
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium ${
              activeTab === 'flashcards' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Layers className="w-5 h-5" />
            Cards
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium ${
              activeTab === 'quiz' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <BrainCircuit className="w-5 h-5" />
            Quiz
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium relative ${
              activeTab === 'saved' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Bookmark className="w-5 h-5" />
            Saved ({savedCount})
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`flex flex-col items-center gap-0.5 text-xs font-medium ${
              activeTab === 'dictionary' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Search className="w-5 h-5" />
            Browse
          </button>
        </div>
      </div>
    </header>
  );
};
