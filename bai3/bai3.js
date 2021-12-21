function usdtovnd() {
  var usd = parseInt(document.getElementById("usd").value);
  var vndel = document.getElementById("vnd");
  var change = document.getElementById("change").value;
  var vnd = usd * change;
  vndel.innerText = "Số tiền đã quy đổi là: " + vnd + " vnd";
}
