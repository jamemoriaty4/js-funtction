const arr = [1, 23, 3, 4, 5, 6, 6, 45, 43, 4534, 534, 543, 4, 53, 99999];

function long(array) {
  let x = array[0].toString().length + array;
  for (let i = 0; i < array.length; i++) {
    array[i].toString().lenght;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + i]) {
      x = array[i + i];
    }
  }
  console.log(x);
}

long(arr);
