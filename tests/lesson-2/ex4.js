const prompt = require("prompt-sync")();
let chieuCao = parseFloat(prompt("Nhập chiều cao (cm):"));
let soLe = chieuCao % 100;
const canNangLyTuong = soLe * 9 / 10;
const canNangToiDa = soLe;
const canNangToiThieu = soLe * 8 / 10;
console.log("Cân nặng lý tưởng của bạn là:" + canNangLyTuong, "Cân nặng tối đa của bạn là:" + canNangToiDa, "Cân nặng tối thiểu của bạn là:" + canNangToiThieu)