/*var ispis = "";
var fs = require('fs')
fs.readFile('C:/wamp64/www/spj/labos_2/osobe.json', 'utf-8', (err, jsonstring)=>
{
    if(err)
    {
        console.log("File read failed: ", err)
        return
    }
    ispis = jsonstring
})
*/

const jsonData= require('./osobe.json'); 
console.log(jsonData);
jsonData.forEach(element =>{
    if(element.index == null)
    {
        console.log("index: Nema zapisanu vrijednost");
    }
    else
    {
        console.log("index: "+element.index);
    }
    if(element.age == null)
    {
        console.log("age: Nema zapisanu vrijednost");
    }
    else
    {
        console.log("age: "+element.age);
    }
    if(element.name == null)
    {
        console.log("name: Nema zapisanu vrijednost");
    }
    else
    {
        console.log("name: "+element.name);
    }
    if(element.company == null)
    {
        console.log("company: Nema zapisanu vrijednost");
    }
    else
    {
        console.log("company: "+element.company);
    }
    console.log("\n");
    
});

var http = require('http');
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
jsonData.forEach(element =>{
    if(element.index == null)
    {
        response.write(" index: Nema zapisanu vrijednost");
    }
    else
    {
        response.write(" index: "+element.index+" ");
    }
    if(element.age == null)
    {
        response.write(" age: Nema zapisanu vrijednost");
    }
    else
    {
        response.write("age: "+element.age + " ");
    }
    if(element.name == null)
    {
        response.write(" name: Nema zapisanu vrijednost");
    }
    else
    {
        response.write(" name: "+element.name + " ");
    }
    if(element.company == null)
    {
        response.write(" company: Nema zapisanu vrijednost");
    }
    else
    {
        response.write(" company: "+element.company + " ");
    }
    response.write("\n");
    
});
response.end();
}).listen(nPort);
