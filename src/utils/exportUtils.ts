import { WordData } from '../types/vocab';

export function exportWordsAsJSON(words: WordData[], filename = 'vocabulary-list.json') {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(words, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function exportWordsAsCSV(words: WordData[], filename = 'vocabulary-list.csv') {
  const headers = ['Word', 'Phonetic', 'Part of Speech', 'Category', 'Difficulty', 'Definition', 'Simple Meaning', 'Examples'];
  
  const rows = words.map(w => [
    `"${w.word.replace(/"/g, '""')}"`,
    `"${(w.phonetic || '').replace(/"/g, '""')}"`,
    `"${w.partOfSpeech}"`,
    `"${w.category}"`,
    `"${w.difficulty}"`,
    `"${w.definition.replace(/"/g, '""')}"`,
    `"${w.simpleMeaning.replace(/"/g, '""')}"`,
    `"${(w.examples.join(' | ') || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", encodeURI(csvContent));
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
