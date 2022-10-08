/** Mô hình 3 khối
 * Khối 1: Input
 *      Lương một ngày, số ngày làm
 *      dailySalary, numOfWorkdays
 * Khối 2: Các bước xử lý
 *      B1: Khai báo biến và gán giá trị
 *      B2: Lập công thức tính toán
 *          tổng lương = lương mỗi ngày * số ngày làm việc
 *          totalSalary = dailySalary * numofWorkdays
 *      B3: Thông báo kết quả (console.log)
 * Khối 3: Output
 *      Tổng lương
 *      totalSalary
 */

 var dailySalary = 100000;
 var numofWorkdays = 6;
 var totalSalary = 0;
 
 totalSalary = dailySalary * numofWorkdays;

 console.log("Total salary: " + totalSalary);