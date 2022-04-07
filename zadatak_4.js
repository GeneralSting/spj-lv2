var suma = 0;
for(var brojac = 1; brojac <= 100; brojac++)
{
    if(brojac % 2 == 1)
    {
        suma += brojac;
    }
}
console.log("Suma prvih sto nepranih brojave iznosi: " + suma);