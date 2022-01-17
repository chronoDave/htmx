import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const file = (type, name = 'htmx') => `dist/${name}.${type}`;
const input = {
  core: 'src/htmx.ts',
  bin: 'src/bin/bin.ts'
};

export default [{
  input: input.core,
  plugins: [
    esbuild({
      target: 'esnext'
    })
  ],
  external: [
    'node-html-parser'
  ],
  output: [{
    file: file('cjs'),
    exports: 'auto',
    format: 'cjs'
  }, {
    file: file('mjs'),
    exports: 'auto',
    format: 'es'
  }]
}, {
  input: input.core,
  plugins: [dts()],
  output: {
    file: file('d.ts'),
    format: 'es'
  }
}, {
  input: input.bin,
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
    file: file('js', 'bin'),
    exports: 'auto',
    banner: '#!/usr/bin/env node',
    format: 'cjs'
  }
}];
