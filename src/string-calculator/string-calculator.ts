export const stringCalculator = (string: string | null): number => {
  let numbers;
  if (string === '' || string === null) return 0;
  if (string.startsWith('//')) {
    const separator = string.slice(2, 3);
    numbers = string.slice(4).split(separator);
  } else {
    numbers = string.split(',');
  }
  return numbers
    .map((number) => (isNaN(Number(number)) ? 0 : Number(number)))
    .reduce((acc, current) => {
      return acc + current;
    });
};
