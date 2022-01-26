/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import path from 'path';

import { buildSync } from 'esbuild';
import requireFromString from 'require-from-string';

import htmx from './htmx';

/** Utils */
export const toArray = <T>(x: T | T[]) => (Array.isArray(x) ? x : [x]);

export const toAbsolute = (p?: string) => {
  if (typeof p !== 'string') return process.cwd();
  if (path.isAbsolute(p)) return p;
  return path.resolve(process.cwd(), p);
};

/** Validation */
export const isRecord = (x: unknown): x is Record<string, unknown> =>
  x !== null &&
  !Array.isArray(x) &&
  typeof x === 'object';

export const isEntry = (x: unknown): x is string | string[] => (Array.isArray(x) ?
  x.every(y => typeof y === 'string') :
  typeof x === 'string'
);

export const isOutput = (x: unknown): x is string =>
  typeof x === 'string';

/** Cli */
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

export const toHtml = (file: string) => {
  const result = buildSync({
    write: false,
    bundle: true,
    entryPoints: [file],
    format: 'cjs',
    external: ['@chronocide/htmx']
  });

  return htmx(requireFromString(result.outputFiles[0].text).default, null).toString();
};
