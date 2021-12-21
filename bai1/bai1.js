function tinhtien() {
  var luong1ngay = document.getElementById("luong1ngay").value;
  var songaylam = document.getElementById("songaylam").value;
  var sumel = document.getElementById("sum");

  let sum = luong1ngay * songaylam;
  sumel.innerText = "Tiền lương của bạn là: " + sum;
}
