/**
 * @jest-environment jsdom
 */
import {pushToHistory} from '../scripts/router.js';
const historyStack = window.history.length;

describe('history stack length', () => {
    test('default', () =>{
        pushToHistory('');
        let leng = historyStack + 1;
        expect(window.history.length).toBe(leng);
    });

    test('entry', () => {
        pushToHistory('entry', 0);
        let leng = historyStack + 2;
        expect(window.history.length).toBe(leng);
    });

    test('settings', () => {
        pushToHistory('settings');
        let leng = historyStack + 3;
        expect(window.history.length).toBe(leng);
    });
})