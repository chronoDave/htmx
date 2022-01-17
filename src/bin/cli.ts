/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import htmx from '../htmx';

import { toAbsolute, toArray } from './utils';
import { isRecord, isEntry, isOutput } from './validation';

export const normalizeConfig = (x: unknown) => {
  if (!isRecord(x)) throw new Error('Invalid config, must be of type `object`');
  if (!isEntry(x.entry)) throw new Error('Invalid config, "entry" must be of type `string` or `string[]`');
  if (!isOutput(x.output)) throw new Error('Invalid config, "output" must be of type `string`');

  return {
    files: toArray(x.entry)
      .map(file => toAbsolute(file)),
    output: toAbsolute(x.output)
  };
};

export const createConfig = (x: unknown) => {
  if (!isRecord(x)) throw new Error('Invalid config, must be of type `object`');

  if (x.config === true) return normalizeConfig(require(toAbsolute('.htmx.js')));
  if (typeof x.config === 'string') return normalizeConfig(require(toAbsolute(x.config)));
  return normalizeConfig({
    entry: x.entry,
    output: x.output ?? process.cwd()
  });
};

export const toHtml = (file: string) => htmx(require(file).default, null).toString();
