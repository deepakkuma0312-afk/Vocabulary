import { WordData, QuizQuestion } from '../types/vocab';

export function generateQuiz(allWords: WordData[], questionCount: number = 5): QuizQuestion[] {
  if (allWords.length < 4) return [];

  const shuffledWords = [...allWords].sort(() => 0.5 - Math.random());
  const selectedWords = shuffledWords.slice(0, Math.min(questionCount, allWords.length));

  return selectedWords.map((word, index) => {
    // Pick 3 random distractor words that aren't the target word
    const distractors = allWords
      .filter((w) => w.id !== word.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const questionTypes: Array<'meaning' | 'synonym' | 'fillInBlank'> = ['meaning', 'synonym', 'fillInBlank'];
    // pick type based on available properties
    let type = questionTypes[index % questionTypes.length];
    if (type === 'synonym' && (!word.synonyms || word.synonyms.length === 0)) {
      type = 'meaning';
    }

    if (type === 'meaning') {
      const options = [word.definition, ...distractors.map((d) => d.definition)].sort(() => 0.5 - Math.random());
      return {
        id: `q-${word.id}-${Date.now()}-${index}`,
        type: 'meaning',
        word,
        question: `What is the meaning of the word "${word.word}"?`,
        options,
        correctAnswer: word.definition,
        explanation: `"${word.word}" means: ${word.definition}`
      };
    } else if (type === 'synonym') {
      const targetSynonym = word.synonyms[0] || word.simpleMeaning;
      const distractorSynonyms = distractors.map(
        (d) => (d.synonyms && d.synonyms.length > 0 ? d.synonyms[0] : d.simpleMeaning)
      );
      const options = [targetSynonym, ...distractorSynonyms].sort(() => 0.5 - Math.random());

      return {
        id: `q-${word.id}-${Date.now()}-${index}`,
        type: 'synonym',
        word,
        question: `Which word is a synonym for "${word.word}"?`,
        options,
        correctAnswer: targetSynonym,
        explanation: `"${targetSynonym}" is a synonym for "${word.word}".`
      };
    } else {
      // fillInBlank
      // Take the first example sentence and replace the word (case-insensitive) with "________"
      const exampleStr = word.examples[0] || `${word.word} is a key concept.`;
      const regex = new RegExp(word.word, 'gi');
      const blankedSentence = exampleStr.replace(regex, '________');

      const options = [word.word, ...distractors.map((d) => d.word)].sort(() => 0.5 - Math.random());

      return {
        id: `q-${word.id}-${Date.now()}-${index}`,
        type: 'fillInBlank',
        word,
        question: `Fill in the blank:\n"${blankedSentence}"`,
        options,
        correctAnswer: word.word,
        explanation: `The sentence uses "${word.word}": "${exampleStr}"`
      };
    }
  });
}
