/** Problem 04 - (Delete / Store) */
var fileName= "#sk.pdf";
//write your code here
var tempString = fileName.split('.');

if (fileName[0] === '#' || tempString[1] === 'pdf' || tempString[1] === 'docx') {
    console.log("Store");
}
else {
    console.log("Delete");
}