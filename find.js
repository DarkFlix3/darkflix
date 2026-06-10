const fs = require('fs');
const content = fs.readFileSync('style.css', 'utf8');

const terms = [
  'cinema',
  'aspect-ratio',
  '16:',
  '@media',
  'iframe'
];

let results = '';

const lines = content.split('\n');
lines.forEach((line, index) => {
  const matches = terms.filter(term => line.includes(term));
  if (matches.length > 0) {
    results += `Line ${index + 1}: ${line.trim()}\n`;
  }
});

fs.writeFileSync('find_results.txt', results);
console.log('Search complete! Results written to find_results.txt');
