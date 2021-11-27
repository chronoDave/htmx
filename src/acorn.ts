// import fs from 'fs';
// import path from 'path';

// import * as acorn from 'acorn';
// import jsx from 'acorn-jsx';
// import * as walk from 'acorn-walk';

// const parser = acorn.Parser.extend(jsx());
// const parsed = parser.parse('<img src="" />', { ecmaVersion: 'latest' });

// fs.writeFileSync(path.resolve(__dirname, 'parse.json'), JSON.stringify(parsed, undefined, '\t'));

// type NodeJsx = acorn.Node & {
//   openingElement: acorn.Node,
//   closingElement: acorn.Node | null,
//   children: never
// };

// const debug = walk.ancestor(parsed, {}, {
//   ...walk.base,
//   JSXElement: (node, ancestors) => {
//     const { openingElement } = node;
//   },
// });

// console.log('debug', debug);
