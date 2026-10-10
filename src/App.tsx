import { useState, useEffect, useCallback } from 'react';
import { WordData } from './types/vocab';
import { INITIAL_VOCABULARY, filterWords, getRandomWord, generateBatchWords } from './data/vocabulary';
import { speakWord } from './utils/speech';
import { Navbar } from './components/Navbar';
import { MainGenerator } from './components/MainGenerator';
import { FlashcardMode } from './components/FlashcardMode';
import { QuizHub } from './components/QuizHub';
import { SavedWordsView } from './components/SavedWordsView';
import { DictionaryView } from './components/DictionaryView';
import { AddWordModal } from './components/AddWordModal';
import { ShortcutsModal } from './components/ShortcutsModal';

const STORAGE_KEY_SAVED = 'lexiboost_saved_word_ids';
const STORAGE_KEY_CUSTOM = 'lexiboost_custom_words';
const STORAGE_KEY_MASTERED = 'lexiboost_mastered_word_ids';
const STORAGE_KEY_STATS = 'lexiboost_user_stats';
const STORAGE_KEY_THEME = 'lexiboost_theme';

export function App() {
  // Categories and filter lists
  const categories = [
    'All Categories',
    'Literary',
    'GRE & SAT Prep',
    'Business & Tech',
    'Philosophy & Art',
    'Slang & Idioms',
    'Science & Nature',
    'Everyday Gems',
    'Personality & Emotions'
  ];

  const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Master'];
  const partsOfSpeech = ['All Parts', 'noun', 'verb', 'adjective', 'adverb', 'idiom'];

  // Persistent State
  const [customWords, setCustomWords] = useState<WordData[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CUSTOM);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedWordIds, setSavedWordIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED);
      return stored ? JSON.parse(stored) : ['ephemeral', 'serendipity', 'ubiquitous'];
    } catch {
      return ['ephemeral', 'serendipity', 'ubiquitous'];
    }
  });

  const [masteredWordIds, setMasteredWordIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [xp, setXp] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_STATS);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.xp || 50;
      }
      return 50;
    } catch {
      return 50;
    }
  });

  const [streak, setStreak] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_STATS);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.streak || 1;
      }
      return 1;
    } catch {
      return 1;
    }
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_THEME);
      if (stored !== null) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Combine initial vocabulary with custom words
  const allWords = [...INITIAL_VOCABULARY, ...customWords];

  // Active filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All Levels');
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string>('All Parts');

  // View state
  const [activeTab, setActiveTab] = useState<'generator' | 'flashcards' | 'quiz' | 'saved' | 'dictionary'>('generator');
  
  // Current active word & history
  const [currentWord, setCurrentWord] = useState<WordData>(() => getRandomWord(INITIAL_VOCABULARY));
  const [history, setHistory] = useState<WordData[]>([currentWord]);
  const [batchWords, setBatchWords] = useState<WordData[]>(() => generateBatchWords(allWords, 3, 'All Categories', 'All Levels'));

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Sync dark mode class with documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY_THEME, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Sync Saved / Custom / Mastered to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(savedWordIds));
  }, [savedWordIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(customWords));
  }, [customWords]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(masteredWordIds));
  }, [masteredWordIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify({ xp, streak }));
  }, [xp, streak]);

  // Check and update streak daily
  useEffect(() => {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const storedStats = localStorage.getItem(STORAGE_KEY_STATS);
      if (storedStats) {
        const parsed = JSON.parse(storedStats);
        if (parsed.lastActiveDate) {
          const lastDate = new Date(parsed.lastActiveDate);
          const today = new Date(todayStr);
          const diffTime = Math.abs(today.getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            setStreak((s) => s + 1);
          } else if (diffDays > 1) {
            setStreak(1);
          }
        }
      }
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify({ xp, streak, lastActiveDate: todayStr }));
    } catch {
      // ignore
    }
  }, []);

  // Generate new word handler
  const handleGenerateNewWord = useCallback(() => {
    const filtered = filterWords(allWords, selectedCategory, selectedDifficulty, selectedPartOfSpeech);
    const pool = filtered.length > 0 ? filtered : allWords;
    
    // Pick a random word that isn't identical to the current one if pool size > 1
    let next = getRandomWord(pool);
    if (pool.length > 1) {
      while (next.id === currentWord.id) {
        next = getRandomWord(pool);
      }
    }

    setCurrentWord(next);
    setHistory((prev) => [...prev, next]);
    setXp((prevXp) => prevXp + 5);
  }, [allWords, selectedCategory, selectedDifficulty, selectedPartOfSpeech, currentWord.id]);

  // Generate batch handler
  const handleGenerateBatch = useCallback(() => {
    const batch = generateBatchWords(allWords, 3, selectedCategory, selectedDifficulty);
    setBatchWords(batch);
  }, [allWords, selectedCategory, selectedDifficulty]);

  // Bookmark / Save toggle
  const handleToggleSave = useCallback((word: WordData) => {
    setSavedWordIds((prev) => {
      if (prev.includes(word.id)) {
        return prev.filter((id) => id !== word.id);
      } else {
        return [...prev, word.id];
      }
    });
  }, []);

  // Select word by name (e.g. from synonym click or dictionary)
  const handleSelectWordByName = useCallback((wordName: string) => {
    const found = allWords.find((w) => w.word.toLowerCase() === wordName.toLowerCase());
    if (found) {
      setCurrentWord(found);
      setHistory((prev) => [...prev, found]);
      setActiveTab('generator');
    } else {
      // If not in database, attempt online lookup automatically!
      handleGenerateNewWord();
    }
  }, [allWords, handleGenerateNewWord]);

  const handleSelectWordData = useCallback((word: WordData) => {
    setCurrentWord(word);
    setHistory((prev) => [...prev, word]);
    setActiveTab('generator');
  }, []);

  // Add custom word
  const handleAddCustomWord = (newWord: WordData) => {
    setCustomWords((prev) => [newWord, ...prev]);
    setCurrentWord(newWord);
    setHistory((prev) => [...prev, newWord]);
    setSavedWordIds((prev) => [...prev, newWord.id]);
    setActiveTab('generator');
    setXp((prev) => prev + 25);
  };

  const handleMarkMastered = (wordId: string) => {
    setMasteredWordIds((prev) => (prev.includes(wordId) ? prev : [...prev, wordId]));
    setXp((prev) => prev + 10);
  };

  const handleAddXp = (amount: number) => {
    setXp((prev) => prev + amount);
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside input fields or textareas
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleGenerateNewWord();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        handleToggleSave(currentWord);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        speakWord(currentWord.word);
      } else if (e.key === '?') {
        setIsShortcutsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerateNewWord, handleToggleSave, currentWord]);

  const savedWordsList = allWords.filter((w) => savedWordIds.includes(w.id));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedWordIds.length}
        streak={streak}
        xp={xp}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'generator' && (
          <MainGenerator
            currentWord={currentWord}
            history={history}
            onGenerateNew={handleGenerateNewWord}
            onSelectWord={handleSelectWordByName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedPartOfSpeech={selectedPartOfSpeech}
            setSelectedPartOfSpeech={setSelectedPartOfSpeech}
            categories={categories}
            difficulties={difficulties}
            partsOfSpeech={partsOfSpeech}
            savedWordIds={savedWordIds}
            onToggleSave={handleToggleSave}
            batchWords={batchWords}
            onGenerateBatch={handleGenerateBatch}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardMode
            words={savedWordsList.length > 0 ? savedWordsList : allWords}
            onMarkMastered={handleMarkMastered}
            savedWordIds={savedWordIds}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizHub
            allWords={allWords}
            onAddXp={handleAddXp}
          />
        )}

        {activeTab === 'saved' && (
          <SavedWordsView
            savedWords={savedWordsList}
            onRemoveSave={handleToggleSave}
            onSelectWord={handleSelectWordByName}
            onStartFlashcards={() => setActiveTab('flashcards')}
          />
        )}

        {activeTab === 'dictionary' && (
          <DictionaryView
            allWords={allWords}
            onSelectWordData={handleSelectWordData}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© LexiBoost Vocabulary Generator. Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono">Spacebar</kbd> anytime to generate new words!</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsShortcutsOpen(true)} className="hover:underline">
              Shortcuts (?)
            </button>
            <button onClick={() => setIsAddModalOpen(true)} className="hover:underline">
              + Add Custom Word
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddWordModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddWord={handleAddCustomWord}
        categories={categories}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

export default App;
