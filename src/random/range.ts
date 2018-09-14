/**
 * Create an range of random numbers
 * @param start {number} - Smallest possible number
 * @param end {number} - Biggest possible number
 * @param n {number} - Number of random numbers
 */
export function range(start: number = 0, end: number = 1, n: number = 10) {
  const data = [];
  let item = 0;
  while (data.length < n) {
    // tslint:disable-next-line
    item = Math.random() * end;
    if (item >= start) {
      data.push(item);
    }
  }

  return data;
}
