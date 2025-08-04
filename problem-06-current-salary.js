/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary * (1 + (5 / 100))**experience;
console.log(currentSalary.toFixed(2));