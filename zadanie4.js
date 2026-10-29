let numNormal = 1;
console.log(typeof numNormal);
let numFunkcja=Number(1);
console.log(typeof numFunkcja)
let numObj = new Number(1)
console.log(typeof numObj)

console.log(numNormal instanceof Number);
console.log(numFunkcja instanceof Number);
console.log(numObj instanceof Object);
// typeof zwraca typ danej wartosci, natomiast instanceof zwraca false/true w zaleznosci czy wartosc jest instancja danego obiektu
// console.log(typeof numObj) daje Object bo tworzymy nowy obiekt console.log(numNormal instanceof Number); daje false bo to wartosc wartosc na stosie nie instancja Number