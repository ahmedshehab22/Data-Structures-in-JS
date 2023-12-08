function binarySearch(array, key) {
  // Array must be sorted at most 1+lg N of array of size N
  let lo = 0,
    hi = array.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (key < array[mid]) {
      hi = mid - 1;
    } else if (key > array[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 4, 6, 8, 12, 123, 134], 1));
