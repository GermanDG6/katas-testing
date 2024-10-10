export function fibonacci(number: number): number {
  if (number === 0) return 0;
  if (number === 1) return 1;
  return fibonacci(number - 2) + fibonacci(number - 1);
}
