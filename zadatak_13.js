var dajbroj = require('./slucajanBroj');
var aBrojevi = new Array();
while(aBrojevi.length < 20)
{
    aBrojevi.push(dajbroj.dajSlucajanBroj(10,200));
}

function SortiranjeNajveci(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (array[i - 1] < array[i]) {
          done = false;
          var tmp = array[i - 1];   //pokupi se vrijednost manjeg broja
          array[i - 1] = array[i];  //manjem broju se daje veca vrijednost
          array[i] = tmp;           //Vecem broju se daje manja vrijednost
        }
      }
    }
    return array;
  }

  function SortiranjeNajmanji(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];   //pokupi se vrijednost većeg broja
          array[i - 1] = array[i];  //većem broju se daje mmanja vrijednost
          array[i] = tmp;           //manjem broju se daje veca vrijednost
        }
      }
    }
    return array;
  }

  SortiranjeNajveci(aBrojevi);
  console.log(aBrojevi);
  SortiranjeNajmanji(aBrojevi);
  console.log(aBrojevi);