// sum.test.js

import {sum} from '../scripts/sum.js';
test('add 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})