const path = require('path');
const fs = require('fs');
const os = require('os');

const test = require('tape');

const { hydrate } = require('..');

test('[hydrate] should throw error if file does not exist', t => {
  try {
    hydrate(__dirname);
    t.fail('expected to throw');
  } catch (err) {
    t.pass(err);
  }

  t.end();
});

test('[hydrate] should throw error if path is not absolute', t => {
  try {
    hydrate('./');
    t.fail('expected to throw');
  } catch (err) {
    t.pass(err);
  }

  t.end();
});

test('[hydrate] should no-op if props do not exist', t => {
  const pathFooter = path.resolve(__dirname, 'structs/_single-prop.html');
  const footer = fs.readFileSync(pathFooter, 'utf-8');

  t.equal(hydrate(path.resolve(__dirname, 'structs/_single-prop')), footer, 'no-op');

  t.end();
});

test('[hydrate] should replace prop', t => {
  const output = hydrate(path.resolve(__dirname, 'structs/_single-prop'), { a: 'a', b: 'b', c: 'c' });
  t.equal(output, 'a', 'replaces prop');

  t.end();
});

test('[hydrate] should replace props', t => {
  const output = hydrate(path.resolve(__dirname, 'structs/_multi-prop'), { a: 'a', b: 'b', c: 'c' });
  t.equal(output, 'a\r\nb\r\nc', 'replaces prop');

  t.end();
});

test('[hydrate] should accept function as prop type', t => {
  const output = hydrate(path.resolve(__dirname, 'structs/_single-prop'), { a: () => 'b' });
  t.equal(output, 'b', 'replaces prop');

  t.end();
});

test('[hydrate] should respect indentation', t => {
  const input = `a\n\nb`;

  const output = hydrate(path.resolve(__dirname, 'structs/_indent'), { a: input });
  t.equal(output, 'b', 'replaces prop');

  console.log(output);

  t.end();
});
