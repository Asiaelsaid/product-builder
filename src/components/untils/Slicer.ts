/**
 * 
 * @param {string} txt - The input text to be sliced
 * @param {number} [max=50] -The maximum length before truncation
 * @returns The sliced text , with an ellipsis (...) appended if truncated
 */

export const txtSlicer = (txt: string, max: number = 50) => {
  if (txt.length >= 50) return `${txt.slice(0, max)}...`;
  return txt;
};
