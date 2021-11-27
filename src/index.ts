import { parse } from 'node-html-parser';
import Card from './Card';

const root = parse('<Card />')

root.getElementsByTagName('Card')
  .forEach(element => element.replaceWith(Card(element.childNodes)))

// console.log(root.toString());
