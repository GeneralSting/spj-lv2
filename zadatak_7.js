var dajbroj = require('./slucajanBroj')

var aBrojevi = new Array();
while(aBrojevi.length < 200)
{
    aBrojevi.push(dajbroj.dajSlucajanBroj(150,1500));
}
var max_array = Math.max.apply(Math, aBrojevi);
var min_array = Math.min.apply(Math, aBrojevi);
console.log("najveci broj u polju je: " + max_array);
console.log("najmanji broj u polju je: " + min_array);