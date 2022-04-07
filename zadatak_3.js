var provjera = false;
for(var brojac = 1; brojac <=100; brojac++)
{
    if(brojac % 5 == 0)
    {
        if(brojac % 7 == 0)
        {
            console.log("broj: " + brojac + " je djeljiv sa 5 i sa 7");
            provjera = true;
        }
        else
        {
            console.log("broj: " + brojac + " je djeljiv sa 5");
        }
    }
    if(brojac % 7 == 0 && provjera == false)
    {
        console.log("broj: " + brojac + " je djeljiv s 7");
    }
    provjera = false;
}