var dajbroj = require('./slucajanBroj')
var aBrojevi = new Array();
while(aBrojevi.length < 100)
{
    aBrojevi.push(dajbroj.dajSlucajanBroj(50, 5000));
    
}
var parniBrojevi = 0;
var neparniBrojevi = 0;
aBrojevi.forEach(element => {
    if(element % 2 == 0)
    {
        parniBrojevi++;
    }
    else
    {
        neparniBrojevi++;
    }
});
console.log("Neparni brojevi: " + neparniBrojevi);
console.log("Parni brojevi: " + parniBrojevi);