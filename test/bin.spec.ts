import path from 'path';
import fs from 'fs';
import assert from 'assert';

import { toHtml } from '../src/bin/cli';

assert.strictEqual(
  fs.readFileSync(path.resolve(__dirname, 'structs', 'output.html'), 'utf-8'),
  toHtml(path.resolve(__dirname, 'structs', 'input', 'pages', 'index.tsx')),
  'does not parse jsx to html'
);
