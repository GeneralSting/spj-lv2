var aPolje = new Array();
var broj = 1;
while(aPolje.length < 50)
{
    if(broj % 7 == 0)
    {
        aPolje.push(broj);
    }
    broj++;
}
var aParniBrojevi = new Array();
aPolje.forEach(function(parni)
{
    if(parni % 2 == 0)
    {
        aParniBrojevi.push(parni);
    }
});
aParniBrojevi.forEach(element => {
    console.log(element);
});