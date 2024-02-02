const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const y = +prompt();
function test(array, x) {
  const number = new Set();
  for (let i = 0; i < array.length; i++) {
    const k = x - array[i];
    if (number.has(k)) {
      return [k, arr[i]];
    }
    number.add(array[i]);
  }
  return null;
}

console.log(test(arr, y));
