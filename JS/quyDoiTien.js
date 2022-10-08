/** Mô hình 3 khối
 *  Khối 1: Input
 *          Giá USD, số tiền USD cần quy đổi
 *          valueUSD, amountUSD
 *  Khối 2: Các bước cần xử lý
 *          B1: Khai báo biến, gán giá trị
 *          B2: Lập công thức tính toán
 *          tiền VND sau quy đổi = số tiền USD * giá USD
 *          amountVND = amountUSD * valueUSD
 *          B3: Thông báo kết quả (console.log)
 *  Khối 3: Output
 *          số tiền VND sau quy đổi
 *          amountVND
 */

var valueUSD = 23500;
var amountUSD = 6;

var amountVND = amountUSD * valueUSD;

console.log("VND amount: " + amountVND);