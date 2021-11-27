const test = require('tape');

const { normalize } = require('..');

test('[normalize.path] should append html', t => {
  t.equal(normalize.path(__dirname), `${__dirname}.html`, 'appends html');

  t.end();
});

test('[normalize.prop] should remove whitespace', t => {
  t.equal(normalize.prop('  a ').length, 1, 'removes whitespace');

  t.end();
});
