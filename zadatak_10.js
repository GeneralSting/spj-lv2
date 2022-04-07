var brojac = 1;
var dajbroj = require('./slucajanBroj');

var http = require('http');
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});


while(brojac <= 10)
{
    response.write((String)(dajbroj.dajSlucajanBroj(10, 100))+ "\n");
    brojac++;
}
response.end();
}).listen(nPort);

