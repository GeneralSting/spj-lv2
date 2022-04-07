function ZbrojZnamenki(broj)
{
    var vrijednost = broj;
    if(broj > 99)
    {
        for(var brojac = 1; brojac <= broj.toString().length; brojac++)
        {
            if(brojac == 1 || brojac == broj.toString().length)
            {
                zbroj += vrijednost % 10;
            }
            vrijednost = Math.floor(vrijednost/10);
        }
    }
    else
    {
        zbroj = "Broj mora sadržavati barem 3 znamenke";
        
    }
    return zbroj;
}
var zbroj = 0;
console.log(ZbrojZnamenki(1232139));
