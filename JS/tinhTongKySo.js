/** Mô hình 3 khối
 * Khối 1: Input
 *         1 số có 2 chữ số
 *          num, ten, unit
 * Khối 2: Các bước xử lý
 *        B1: Khai báo biến, gán giá trị
 *        B2: Lập công thức tính toán
 *          số hàng chục = số / 10
 *          ten = num / 10
 *          số hàng đơn vị = số % 10
 *          unit = num % 10
 *          tổng 2 ký số = số hàng chục + số hàng đơn vị
 *          sum = ten + unit
 * Khối 3: Output
 *          tổng 2 ký số của số vừa nhập
 *          sum
 */

var num = 83;
var ten = 0;
var unit = 0;
var sum = 0;

ten = Math.floor(num / 10) ;
unit = num % 10;
sum = ten + unit;

console.log("Tổng 2 ký số của số vừa nhập: " + sum);