var dajbroj = require('./slucajanBroj')
var aBrojevi = new Array();
while(aBrojevi.length < 3)
{
    aBrojevi.push(dajbroj.dajSlucajanBroj(10,100));
}
function ProvjeraZnamenki()
{
    console.log("Brojevi: ");
    aBrojevi.forEach(element =>
        {
            console.log(element);
        });
    console.log("zadnje znamenke: ");
    var aZnamenke = new Array();
    aBrojevi.forEach(element => {
        aZnamenke.push(element % 10);
    });
    aZnamenke.forEach(element => {
        console.log(element);
    })
    if(aZnamenke.length == new Set(aZnamenke).size)
    {
        console.log("Nema podudarnih zadnjih znamenki")
    }
    else
    {
        if(new Set(aZnamenke).size == 2)
        {
            console.log("Zadnje znamenke se podudaraju u 2 broja")
        }
        else
        {
            console.log("Zadnje znamenke se podudaraju u 3 broja")
        }
    }
}
ProvjeraZnamenki();