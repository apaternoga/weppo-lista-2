// ------------------------------------------------------------------------> PUNKT A
let firma = {}
console.log("ZADANIE A")
firma.nazwa = "PELL";
let key = "wlasciciel";
firma[key] = "Jan Kowalski"; // niemozliwe dla .
firma["adres glownej siedziby"]= "Fiolkowa 42/24"; // niemozliwe dla .
console.log(firma.nazwa)
console.log(firma[key])
console.log(firma["adres glownej siedziby"])

//  ODPOWIEDZ: roznica miedzy nawiasami, a kropka jest taka, ze kropka wymaga poprawnej nazwy indentyfikatora, 
//  ktora musi byc juz znana w trakcie pisania (a nie ewaluacji kodu), natomiast dla nawiasu mozemy uzyc dowolnego wyrazenia (zmiennej czy tez napis ze spacjami itd)
// ------------------------------------------------------------------------> PUNKT A


// ------------------------------------------------------------------------> PUNKT B
console.log("ZADANIE B")
let obiekt = {"42":67}
//  ODPOWIEDZ 1: obiekt to tak naprawde slownik ktory operuje na stringach, wiec po podaniu liczby jako argument zostanie ona potraktowana jako jej odpowiednik string
console.log(obiekt[42])
//  ODPOWIEDZ 2: w przypadku obiektu tak samo zostaje uzyta niejawnie toString() i zostaje on zamieniiny na klucz [object Object] rodzi to jednak problemy poniewaz kazdy obiekt po zamianie na string daje ten sam klucz
const podobiekt1 = {name: "Stachu"}
const podobiekt2 = {name: "Gieniu"}
obiekt[podobiekt1]= "pierwszy podobiekt"
obiekt[podobiekt2]= "drugi podobiekt" // nadpisanie pierwszego podobiektu
console.log(obiekt["[object Object]"]) // powinno dac drugi podobiekt
console.log(Object.keys(obiekt)) //sprawdzenie czy faktycznie to prawda ze nadpisany zostal 1 podobiekt
//  ODPOWIEDZ 3: w przypadku obiektow programista ma wplyw poniewaz moze nadpisac metode toString() dla danego obiektu, dla liczby natomiast nie da tak sie zrobic, programista nie ma wplywu na to
// ------------------------------------------------------------------------> PUNKT B


// ------------------------------------------------------------------------> PUNKT C
const arr = [1,2,3]
arr["tekst"] = 100
arr["0"] = 42
console.log(arr)
console.log(arr.length)
// ODPOWIEDZ 1: tablica jest obiektem wiec jesli jako argument w stringu podamy sam tekst zostanie utworzony nowy klucz i odpowiadajaca mu wartosc (w przypadku przykladu powyzej),
// natomiast jesli w argumencie typu string znajduje sie liczba jest on traktowany jako normalna liczba
// tekstowe klucze w tablicy nie sa brane po uwage w .length
arr[podobiekt1]="obiekt w tablicy"
console.log(arr)
// ODPOWIEDZ 2: obiekt jak w poprzednim punkcie jest traktowany jako klucz [object Object]
// ODPOWIEDZ 3: z punktu widzenia obiektu powstaje nowe pole, ktore nie ma jednak wplywu na wartosc length (to pole nie jest traktowane jako element tablicy!)
arr.length=2
console.log(arr)
arr.length = 5
console.log(arr)
console.log(arr[3])
// ODPOWIEDZ 4: Tak mozna modyfikowac atrybut length. W przypadku zmniejszenia length tablica zostaje "skrocona" do podanej liczby elementow, natomiast po powiekszeniu zostaje ona powiekszona o puste pola bez wartosci (undefined).
// ------------------------------------------------------------------------> PUNKT C
