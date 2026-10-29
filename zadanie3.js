// nastepuje to automatyczna konwerjsa typow
// kazdy obiekt to logiczna prawda, unarny plus zamienia na liczbe, binarny plus skleja stringi, stringi mozna indekstowac
console.log( (![]+[])[+[]] // !(0+0) to inaczej (false+[])[0] co daje false[0]=f
+
(![]+[])[+!+[]]// (![]+[]) to daje false jak wczesniej powiedzane [+!+[]] negacja 0 czyli true zamieniona na liczbe czyli 1 czyli false[1]=a
+
([![]]+[][[]])[ +!+[]+[+[]] ] // [][[]] odczytanie 0 wartosci pustej listy co daje undefined, ([![]]+[][[]]) to false+undefined taki dlugi string, [+!+[]+[+[]]] "1"+"0" daje 10 falseundefined[10]=i
+
(![]+[])[!+[]+!+[]] ); // false[2]=l
// mamy wiedz f a i l 