import { getFullYear, getFooterCopy, getLatestNotification} from './utils';

describe('check that getFullYear returns the correct year', () => {
    test('checks that the year returned is the current year', () => {
        const dt = new Date();
        expect(getFullYear()).toBe(dt.getFullYear());
    });

    test('check that getFooterCopy return the right string with different input', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('checks that getLatestNotification returns the right string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
    })
})