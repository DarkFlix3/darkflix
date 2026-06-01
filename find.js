const fs = require('fs');
const content = fs.readFileSync('style.css', 'utf8');

const regexes = [
  /\.cinema-player/g,
  /iframe/g,
  /scale/g
];

let results = '';

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('cinema-player') || line.includes('iframe') || line.includes('scale')) {
    results += `Line ${index + 1}: ${line.trim()}\n`;
  }
});

fs.writeFileSync('find_results.txt', results);
console.log('Search complete! Results written to find_results.txt');
