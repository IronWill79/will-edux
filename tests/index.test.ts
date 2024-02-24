/* eslint-env jest */
import { add } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });

  test('expect a single number in a string to be that number', () => {
    expect(add('1')).toBe(1);
  });

  test('expect this to be 10', () => {
    expect(add('1, 2, 3, 4')).toBe(10);
  });

  test('negative numbers should throw an error', () => {
    expect(() => add('-5')).toThrow('Negatives are not allowed: -5');
  });
});
