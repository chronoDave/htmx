export const isRecord = (x: unknown): x is Record<string, unknown> =>
  x !== null &&
  !Array.isArray(x) &&
  typeof x === 'object';

export const isEntry = (x: unknown): x is string | string[] => (Array.isArray(x) ?
  x.every(y => typeof y === 'string') :
  typeof x === 'string'
);

export const isOutput = (x: unknown): x is string =>
  typeof x === 'string';
