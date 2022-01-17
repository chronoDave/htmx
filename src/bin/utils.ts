import path from 'path';

export const toAbsolute = (p?: string) => {
  if (typeof p !== 'string') return process.cwd();
  if (path.isAbsolute(p)) return p;
  return path.resolve(process.cwd(), p);
};

export const toArray = <T>(x: T | T[]) => (Array.isArray(x) ? x : [x]);
