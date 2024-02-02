let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function max(x) {
  let maxSum = x[0];
  let cursum = x[0];
  let start = 0;
  let end = 0;
  let cur = 0;

  for (let i = 1; i < x.length; i++) {
    if (cursum < 0) {
      cursum = x[i];
      start = i;
    } else {
      cursum += arr[i];
    }
    if (cursum > max) {
      max = cursum;
      start = cur;
      end = i;
    }
  }
  return x.slice(start, end + 1);
}

console.log(max(arr));
