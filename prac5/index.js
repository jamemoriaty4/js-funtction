var arr = ["Chuoi 1", "Chuoi 2", "Chuoi 3", "Chuoi 4"];

var x = prompt("Nhập vào một chuỗi: ");

var kq = search(arr, x);
function search(mang, chuoi) {
  var ketQua = mang.filter(function (elements) {
    return elements.includes(chuoi);
  });

  return ketQua;
}

if (kq.length > 0) {
  console.log("Các phần tử trong mảng chứa chuỗi '" + x + "':");
  kq.forEach(function (elements) {
    console.log(elements);
  });
} else {
  console.log("Không có phần tử nào trong mảng chứa chuỗi '" + x + "'.");
}
