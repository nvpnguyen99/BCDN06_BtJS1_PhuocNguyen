/** Mô hình 3 khối
 *  Khối 1: Input
 *          Chiều rộng, chiều dài hình chữ nhật
 *          recWidth, recLength
 *  Khối 2: các bước xử lý
 *          B1: Khai báo biến, gán giá trị
 *          B2: Lập công thức tính toán
 *          diện tích = chiều rộng * chiều dài
 *          s = recWidth * recLength
 *          chu vi = (chiều rộng + chiều dài) *2
 *          p = (recWidth + recLength) * 2 
 *          B3: Thông báo kết quả (console.log)
 * Khối 3: Output
 *          Diện tích, chu vi hình chữ nhật
 *          p,s
 */

var recWidth = 30;
var recLength = 60;
var s = 0;
var p = 0;

s = recWidth * recLength;
p = (recWidth + recLength) * 2;

console.log("Diện tích hình chữ nhật: " + s);
console.log("Chu vi hình chữ nhật: " + p);