// const path = require('path');
// const fs = require('fs');

// const test = require('tape');

// const htmx = require('..').default;

// test('[htmx] should throw error if paths are not absolute', t => {
//   try {
//     htmx({ template: './', output: __dirname });
//     t.fail('expected to throw');
//   } catch (err) {
//     t.pass('throws template');
//   }

//   try {
//     htmx({ template: __dirname, output: './' });
//     t.fail('expected to throw');
//   } catch (err) {
//     t.pass('throws output');
//   }

//   t.end();
// });

// test('[htmx] should build html', t => {
//   const output = path.resolve(__dirname, 'test.html');

//   const node = {
//     template: path.resolve(__dirname, 'structs/_template.html'),
//     output,
//     props: {
//       meta: htmx(path.resolve(__dirname, '')),
//       header: '',
//       main: '',
//       footer: ''
//     }
//   };

//   try {
//     htmx(node);

//     t.true(fs.existsSync(output), 'creates output');

//     const file = fs.readFileSync(output, 'utf-8');
//     t.true(file.includes(node.props.title));
//   } catch (err) {
//     t.fail(err);
//   }

//   fs.rmSync(output, { force: true });

//   t.end();
// });
