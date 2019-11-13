const chunkArray = (array, length) => {
  // Initialise chunked array
  const chunkedArray = [];

  // Loop through array
  array.forEach(val => {
    // Get last element
    const last = chunkedArray[chunkedArray.length - 1];

    // Check if last and if last length is equal to the chunk length
    if (!last || last.length === length) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArray;
};

module.exports = chunkArray;
