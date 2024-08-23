import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  it('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  it('getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });

  it('getLatestNotification returns the expected string', () => {
    expect(getLatestNotification()).toEqual(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
