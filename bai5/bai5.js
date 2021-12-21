function tongkyso() {
  var number = parseInt(document.getElementById("number").value);
  var ketquael = document.getElementById("ketqua");
  var unit = number % 10;
  var ten = Math.floor(number / 10);
  var sum = unit + ten;
  ketquael.innerText = "Tổng 2 ký số là: " + sum;
}
