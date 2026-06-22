const fs = require('fs');

function searchFile(filename, query) {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  let results = `=== Matches for "${query}" in ${filename} ===\n`;
  let count = 0;
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes(query.toLowerCase())) {
      results += `Line ${index + 1}: ${line.trim()}\n`;
      count++;
    }
  });
  return `${results}Total: ${count} matches\n\n`;
}

let out = '';
out += searchFile('app.js', 'emoji');
out += searchFile('app.js', 'party-chat');
out += searchFile('app.js', 'party-file');
out += searchFile('app.js', 'attach');
out += searchFile('app.js', 'chat-image');
out += searchFile('app.js', 'send');
fs.writeFileSync('find_results.txt', out);
console.log('Search complete! Results written to find_results.txt');


