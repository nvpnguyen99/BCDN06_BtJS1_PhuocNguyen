/** Mô hình 3 khối
 * Khối 1: Input
 *      5 số thực
 *      num1, num2, num3, num4, num5
 * Khối 2: Các bước xử lý
 *      B1: Khai báo biến, gán giá trị
 *      B2: Lập công thức tính toán
 *          số trung bình = tổng 5 số / 5
 *          avg = (num1 + num2 + num3 + num4 + num5) / 5
 *      B3: Thông báo kết quả (console.log)
 * Khối 3: Output
 *      số trung bình của 5 số thực
 *      avg
 */

var num1 = 9.1;
var num2 = 9.2;
var num3 = 9.3;
var num4 = 9.4;
var num5 = 9.5;
var avg = 0;

avg = (num1 + num2 + num3 + num4 + num5) / 5;

console.log("Average value: " + avg);