const fs = require('fs');

function searchFile(filename, query) {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  let results = `=== Matches in ${filename} ===\n`;
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes(query.toLowerCase())) {
      results += `Line ${index + 1}: ${line.trim()}\n`;
    }
  });
  return results;
}

let out = '';
out += searchFile('index.html', 'watch-party');
out += searchFile('app.js', 'watchParty');
out += searchFile('app.js', 'watch-party');
fs.writeFileSync('find_results.txt', out);
console.log('Search complete!');
