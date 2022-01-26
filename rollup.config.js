import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const config = {
  core: {
    input: 'src/htmx.ts',
    plugins: [
      esbuild({
        target: 'esnext'
      })
    ],
    external: ['node-html-parser'],
    output: [{
      file: 'dist/htmx.cjs',
      exports: 'auto',
      format: 'cjs'
    }, {
      file: 'dist/htmx.mjs',
      exports: 'auto',
      format: 'es'
    }]
  },
  types: {
    input: 'src/htmx.ts',
    plugins: [dts()],
    output: {
      file: 'dist/htmx.d.ts',
      format: 'es'
    }
  },
  bin: {
    input: 'src/bin.ts',
    plugins: [
      esbuild({
        target: 'esnext'
      })
    ],
    external: [
      'fs',
      'path',
      'yargs-parser',
      'node-html-parser'
    ],
    output: {
      file: 'dist/bin.js',
      exports: 'auto',
      banner: '#!/usr/bin/env node',
      format: 'cjs'
    }
  },
  cli: {
    input: 'src/cli.ts',
    plugins: [
      esbuild({
        target: 'esnext'
      })
    ],
    external: [
      'path',
      'esbuild',
      'require-from-string',
      'node-html-parser'
    ],
    output: [{
      file: 'dist/cli.js',
      exports: 'auto',
      format: 'cjs'
    }]
  }
};

export default cli => {
  const configs = cli.dev ?
    [config.core, config.cli] :
    [config.core, config.types, config.bin];

  delete cli.dev;
  return configs;
};
