const osoba = {
    imie:"Jan",

    podajImie()
    {
        return this.imie
    },
    _pesel: 10101010,

    get pesel()
    {
        return this._pesel
    },
    set pesel(nowy){
        this._pesel = nowy;
    }
};

console.log(osoba.imie)
console.log(osoba.pesel)//wywolanie get
osoba.pesel=2020202020  //wywolanie set
console.log(osoba.pesel)

osoba.nazwisko = "Kowlaski"
osoba.podajNazwisko = function()
{
    return this.nazwisko
}
Object.defineProperty(osoba, "dowodTozsamosci",
    {
        get(){return this.imie+ " "+this.nazwisko + " "+ this.pesel},
        set(dane)
        {
            calosc=dane.split(" ")
            this.imie = calosc[0]
            this.nazwisko = calosc[1]
            this._pesel = calosc[2]
        }
    }
)
console.log(osoba.dowodTozsamosci)
osoba.dowodTozsamosci = "Adam Zjadam 67676767"
console.log(osoba.dowodTozsamosci)
//Odpowiedz na pytanie: defineProperty MOZEMY uzyc i dla pola, metody i wlasciwosci, natomiast MUSIMY do wlasciowsci