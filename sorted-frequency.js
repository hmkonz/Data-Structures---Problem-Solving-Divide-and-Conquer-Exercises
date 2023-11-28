function sortedFrequency(array, num) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      count += 1;
    }
  }
  if (count === 0) {
    return -1;
  } else return count;
}

module.exports = sortedFrequency;
