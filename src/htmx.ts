import { HTMLElement, TextNode, Node } from 'node-html-parser';

type ElementMap<T = {}> = Partial<Omit<{
  [K in keyof T]: T[K] | string
}, 'children'>> & {
  children?: Htmx.Children
  [key: string]: unknown
};

type IntrinsicElementMap = {
  [K in keyof HTMLElementTagNameMap]: ElementMap<HTMLElementTagNameMap[K]>
} & {
  [K in keyof SVGElementTagNameMap]: ElementMap<SVGElementTagNameMap[K]>
};

type Props = Record<string, string> | null;

declare global {
  namespace Htmx {
    type Element = Node;

    type Child =
      Htmx.Element[] |
      Htmx.Element |
      string |
      number |
      boolean |
      null |
      undefined;

    type Children = Htmx.Child[] | Htmx.Child;
  }

  namespace JSX {
    interface Element extends Htmx.Element {}

    interface IntrinsicElements extends IntrinsicElementMap {
      [key: string]: ElementMap
    }

    interface ElementAttributesProperty {
      props: {}
    }

    interface ElementChildrenAttribute {
      children: {}
    }
  }
}

const htmx = (
  type: string | ((props: Props) => JSX.Element),
  props: Props,
  ...children: string[]
) => {
  if (typeof type === 'function') return type(props);

  const keyAttributes: { id?: string, class?: string } = {
    id: props?.id,
    class: props?.class
  };

  const rawAttributes = Object.entries(props || {})
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  const element = new HTMLElement(
    type,
    keyAttributes,
    rawAttributes,
    null
  );

  children.forEach(child => element.appendChild(new TextNode(child, element)));

  return element;
};

export default htmx;
