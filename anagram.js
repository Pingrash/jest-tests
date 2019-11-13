// Format and compare two strings. If true then they are anagrams.
const isAnagram = (str1, str2) =>
  formatString(str1) === formatString(str2);

// Prepare string for comparison by removing white space, making characters lowercase and sorting the characters.
const formatString = str =>
  str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

module.exports = isAnagram;
