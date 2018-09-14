/**
 * Generates arithmetic sequence
 * @param start {number} - Start of sequence
 * @param difference {number} - Difference between each item in sequence
 * @param n {number} - Number of items in sequence
 */
export function * arithmetic(start: number, difference: number, n: number) {
  let i = 0;
  while (i < n) {
    yield start + (difference * i);
    i += 1;
  }
}

/**
 * Generates linear sequence
 * @param start {number} - Start of sequence
 * @param intercept {number} - Intercept
 * @param n {number} - Number of items in sequence
 */
export function * linear(start: number, intercept: number, n: number) {
  let x = 0;
  while (x < n) {
    yield start * x + intercept;
    x += 1;
  }
}