export const taskFirst = () => 'I prefer const when I can.';

export function getLast() {
  return ' is okay';
}

export let taskNext = () => `But sometimes let${getLast()}`;
