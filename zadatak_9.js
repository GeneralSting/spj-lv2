var aPolje1 = [1, 4, 7, 8, 9, 12, 16, 18, 22, 24, 25];
var aPolje2 = [2, 3, 4, 7, 8, 11, 13, 15, 17, 18, 22, 23];
const isti_brojevi = aPolje1.filter(element=> aPolje2.includes(element));
console.log(isti_brojevi);

//array.prototype.filter() creates a new aaray with elements that pass the test implemented by the provided function