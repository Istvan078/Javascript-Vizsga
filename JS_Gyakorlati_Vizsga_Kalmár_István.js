//  Feladat 1

var nevInput = document.getElementById("nev");
var valaszResz = document.getElementById("valasz");
var gomb = document.getElementById("button");

const tarolo = [[1,2,3], ['alma', "banán", "körte"], {segítő:"Janos", kor: 31}, "Kalmár István"];

function callback(inputmezo,valasz1,valasz2,segito){
    if(inputmezo.value == tarolo[3]){
        valasz1.innerHTML = "Ön regisztrált tag.";
    } else if(inputmezo.value !== "" &&   isNaN(inputmezo.value)) {
        valasz2.innerHTML = "Ön nem regisztrált tag. " + segito + "-hoz tud segítségért fordulni!";
    }
};

gomb.addEventListener("click", function(){
    callback(nevInput,valaszResz,valaszResz,tarolo[2].segítő)
});

//  Feladat 2

var valaszResz2 = document.getElementById("valasz2");
var szamInput = document.getElementById("szam")
var gomb2 = document.getElementById("button2")

const szamok = [2,4,6,8,11,14,17,22,27,29,35,44,55,64,77,88];

function szamkereso(megadottSzam){
   var talaltszam =  szamok.find(function(szam){
    return szam > megadottSzam
   })
    valaszResz2.innerHTML = talaltszam
}


gomb2.addEventListener("click", function(){
    szamkereso(szamInput.value)
});
