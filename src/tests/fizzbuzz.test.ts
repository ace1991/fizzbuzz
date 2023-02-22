import {fizzbuzz} from "../core/fizzbuzz";

describe('FizzBuzz', () => {
    it('returns number one as a string for number one', () => {
        expect(fizzbuzz(1)).toBe('1');
    });
    it('returns number two as a string for number two', () => {
        expect(fizzbuzz(2)).toBe('2');
    });
    it('returns fizz as a string for number three', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });
    it('returns buzz as a string for number five', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });
    it('returns fizzbuzz as a string for number fifteen', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
    it('returns fizz as a string for number divisible by three', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    });
    it('returns buzz as a string for number divisible by  five', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });
    it('returns fizzbuzz as a string for number divisible by fifteen', () => {
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    });
    it('returns number as string for any number that is not divisible by three or five', () => {
        expect(fizzbuzz(17)).toBe('17');
    });
});