let x = prompt("");
let y = "Html";

function test(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let k = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        k = true;
        break;
      }
    }
    if (!k) {
      return false;
    }
  }
  return true;
}

console.log(test(x, y));
