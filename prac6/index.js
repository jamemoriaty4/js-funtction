let x = "string_1 string_2";
function sup(y) {
  let characters = y.split(" ");
  for (let i = 0; i < characters.length; i++) {
    characters[i] = characters[i][0].toUpperCase() + characters[i].substring(1);
  }
  return characters.join(" ");
}
console.log(sup(x));
