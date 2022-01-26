const path = require('path');
const fs = require('fs');
const assert = require('assert');

const { toHtml } = require('../dist/cli');

assert.strictEqual(
  fs.readFileSync(path.resolve(__dirname, 'structs', 'output.html'), 'utf-8'),
  toHtml(path.resolve(__dirname, 'structs', 'input', 'pages', 'index.tsx')),
  'does not parse jsx to html'
);
