import { parseFragment, serialize } from 'parse5';

const fragment = parseFragment('<Card title="E" />');

console.log(fragment.childNodes[0])
console.log(serialize(fragment))
