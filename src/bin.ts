import fs from 'fs';
import path from 'path';

import yargs from 'yargs-parser';

import { createConfig, toHtml } from './cli';

const { files, output } = createConfig(yargs(process.argv.slice(2), {
  array: ['entry'],
  alias: {
    entry: 'e',
    config: 'c',
    output: 'o'
  }
}));

files.forEach(file => {
  const { name } = path.parse(file);

  fs.writeFileSync(
    path.resolve(output, `${name}.html`),
    toHtml(file)
  );
});
