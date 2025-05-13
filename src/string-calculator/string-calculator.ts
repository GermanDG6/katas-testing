export const stringCalculator = (string: string | null): number => {
  if (string === null || 0) return 0;
  let numbers: string[] = [string];
  if (string.startsWith('//')) {
    const separator = string[2];
    numbers = string.split(separator);
  }
  if (string.includes(',')) {
    numbers = string.split(',');
  }
  return numbers.reduce((acc, current) => {
    if (isNaN(Number(current))) return acc;
    return acc + Number(current);
  }, 0);
};
