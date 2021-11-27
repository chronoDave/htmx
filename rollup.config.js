import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const file = (type, name = 'htmx') => `dist/${name}.${type}`;
const input = {
  core: 'src/index.ts',
  bin: 'src/bin.ts'
};

const config = {
  core: {
    input: input.core,
    plugins: [
      esbuild({
        target: 'esnext'
      })
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
  },
  types: {
    input: input.core,
    plugins: [dts()],
    output: {
      file: file('d.ts'),
      format: 'es'
    }
  },
  bin: {
    input: input.bin,
    plugins: [
      esbuild({
        target: 'esnext'
      })
    ],
    output: {
      file: file('js', 'bin'),
      exports: 'auto',
      format: 'cjs'
    }
  }
};

export default cla => {
  const configs = cla.noEmit ?
    [config.core, config.bin] :
    [config.core, config.bin, config.types];

  delete cla.noEmit;
  return configs;
};
