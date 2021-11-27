export const htmx = (...args: unknown[]) => {
  console.log(args);

  // [
  //   'div',
  //   null,
  //   [
  //     HTMLElement {
  //       parentNode: [HTMLElement],
  //       childNodes: [],
  //       rawAttrs: 'src="" ',
  //       nodeType: 1,
  //       rawTagName: 'img',
  //       id: '',
  //       classList: [DOMTokenList]
  //     }
  //   ]
  // ]

  return ''
};
