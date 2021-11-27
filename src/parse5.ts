import { finished } from 'stream';

import RewritingStream from 'parse5-html-rewriting-stream';
import { parseFragment, serialize } from 'parse5';

type JsxElement = (attrs: Record<string, string>) => string

export const htmx = (
  htmlFragment: string,
  components: Record<string, string | JsxElement>
) => {
  // Traverse all nodes defined in components
  const fragment = parseFragment(htmlFragment).childNodes;
  while (nodes.length > 0) {
    const node = nodes.pop();

    if (!node) break;
    if (node?.nodeName in components) {
      
    }
  }

  return nodes;
}

console.log(htmx('<div><Card><img /></Card></div>', {}))
