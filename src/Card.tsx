import { Node } from 'node-html-parser';
import { htmx } from './htmx';

export default (children: Node[]) => (
  <div>
    {children}
  </div>
)