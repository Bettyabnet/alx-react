/**
 * Returns the current year
 * @returns {number} The current year
 */
export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Returns the Holberton School footer text
 * @param {boolean} isIndex - Indicates whether the footer is for the index page
 * @returns {string} The Holberton School footer text
 */
export function getFooterCopy(isIndex) {
  return isIndex
    ? 'Holberton School'
    : 'Holberton School main dashboard';
}
