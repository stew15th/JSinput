function hinhchunhat() {
  var chieudai = parseInt(document.getElementById("chieudai").value);
  var chieurong = parseInt(document.getElementById("chieurong").value);

  var chuviel = document.getElementById("chuvi");
  var dientichel = document.getElementById("dientich");

  var chuvi = (chieudai + chieurong) * 2;
  var dientich = chieudai * chieurong;
  chuviel.innerText = "Chu vi hình chữ nhật là: " + chuvi + "cm";
  dientichel.innerText = "Diện tích hình chữ nhật là: " + dientich + "cm^2";
}
