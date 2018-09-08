import * as fn from '../src/fn';


test('returns NaN when data is empty list', () => {
  expect(fn.max([])).toBe(NaN);
})

test('returns 3 from list of [1, 2, 3]', () => {
  expect(fn.max([1, 2, 3])).toBe(3);
})

test('returns 3 from list of [3, 2, 1]', () => {
  expect(fn.max([3, 2, 1])).toBe(3);
})

test('function max: returns NaN when data is empty list', () => {
  expect(fn.min([])).toBe(NaN);
})

test('function min: returns 1 from list of [1, 2, 3]', () => {
  expect(fn.min([1, 2, 3])).toBe(1);
})

test('function min: returns 1 from list of [3, 2, 1]', () => {
  expect(fn.min([3, 2, 1])).toBe(1);
})

test('function sum: returns NaN from list of []', () => {
  expect(fn.sum([])).toBe(NaN);
})

test('function sum: returns 6 from list of [1, 2, 3]', () => {
  expect(fn.sum([1, 2, 3])).toBe(6);
})

test('function mean: returns NaN from list of []', () => {
  expect(fn.mean([])).toBe(NaN);
})

test('function mean: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.mean([1, 2, 3])).toBe(2);
})

test('function median: returns NaN from list of []', () => {
  expect(fn.median([])).toBe(NaN);
})

test('function median: returns 2 from list of [1, 2, 3]', () => {
  expect(fn.median([1, 2, 3])).toBe(2);
})

test('function median: returns 2 from list of [1, 2, 3, 4]', () => {
  expect(fn.median([1, 2, 3, 4])).toBe(2.5);
})

test('function count: returns undefined from list of []', () => {
  expect(fn.count([])).toBe(undefined);
})

test('function count: returns 2 from list of [1, 2, 2]', () => {
  expect(fn.count([1, 2, 2])).toBe({'1': 2, '2': 2});
})
