/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var result = area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
}
else if (money >= 10000) {
    console.log("Cycle");
}
else {
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (let i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        console.log(i,"- medicine");
        continue;
    }
    console.log(i,"- rest");
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
var tempString = fileName.split('.');
if (fileName[0] === '#' || tempString[1] === 'pdf' || tempString[1] === 'docx') {
    console.log("Store");
}
else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var emailExtension = '@ph.ac.bd';
var studentEmail = student['name'].concat(student['roll']).concat('.').concat(student['department']).concat(emailExtension);
console.log(studentEmail);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary * (1 + (5 / 100))**experience;
console.log(currentSalary.toFixed(2));