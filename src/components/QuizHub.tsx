import React, { useState } from 'react';
import { WordData, QuizQuestion } from '../types/vocab';
import { generateQuiz } from '../utils/quizGenerator';
import confetti from 'canvas-confetti';
import { BrainCircuit, Trophy, CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';

interface QuizHubProps {
  allWords: WordData[];
  onAddXp: (amount: number) => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({ allWords, onAddXp }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startNewQuiz = (count = 5) => {
    const qList = generateQuiz(allWords, count);
    setQuestions(qList);
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setQuizStarted(true);
  };

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null) return; // Prevent double clicking
    setSelectedOption(opt);

    const currentQ = questions[currentIdx];
    if (opt === currentQ.correctAnswer) {
      setScore((s) => s + 1);
      onAddXp(20);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
          <BrainCircuit className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
            Vocabulary Mastery Quiz
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
            Test your knowledge across meanings, synonyms, and real-world sentence completions. Earn +20 XP per correct answer!
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => startNewQuiz(5)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all"
          >
            Quick Quiz (5 Questions)
          </button>
          <button
            onClick={() => startNewQuiz(10)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-lg shadow-purple-500/25 transition-all"
          >
            Deep Test (10 Questions)
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-center">
        <Trophy className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />

        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
            Quiz Complete! 🎉
          </h2>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            You scored {score} / {questions.length} ({percentage}%)
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You earned +{score * 20} XP!
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => startNewQuiz(questions.length)}
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <button
            onClick={() => setQuizStarted(false)}
            className="px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 transition-all"
          >
            Back to Quiz Hub
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Progress & Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
          <BrainCircuit className="w-5 h-5" />
          <span>Question {currentIdx + 1} of {questions.length}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Score: {score}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Type: {currentQ.type}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white leading-snug whitespace-pre-line">
            {currentQ.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === currentQ.correctAnswer;
            
            let btnStyle = "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400";
            if (selectedOption !== null) {
              if (isCorrect) {
                btnStyle = "bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold";
              } else if (isSelected) {
                btnStyle = "bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-900 dark:text-rose-100 font-bold";
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleSelectOption(opt)}
                className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base transition-all flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt}</span>
                {selectedOption !== null && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />}
                {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Explanation & Next Button */}
        {selectedOption !== null && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 font-medium">
              💡 <strong>Explanation:</strong> {currentQ.explanation}
            </div>

            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
