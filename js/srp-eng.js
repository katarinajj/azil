let jezik = 1;

const reci = [
    ["rec-pocetna", "Početna", "Home"],
    ["rec-zivotinje", "Životinje", "Animals"],
    ["rec-izgubljeni", "Izgubljeni ljubimci", "Lost pets"],
    ["rec-dodaj-oglas", "Dodaj oglas", "Post an ad"],
    ["rec-o-nama", "O nama", "About us"],
    ["rec-nalog", "Moj nalog", "My account"],
    ["rec-detalji-oglasa", "Detalji", "Details"],
    ["rec-pitanje1", "Da li se psi i mačke stvarno mrze?", "Do cats and dogs really hate eachother?"],
    ["rec-pitanje2", "Linjanje - zašto se dešava i kako izaći na kraj s tim?", "?? - Why it happens and how to handle it?"],
    ["rec-pitanje3", "Papagaji za početnike, a i one malo iskusnije", "Parrots for begginers, and for more experienced"],
    ["rec-footer", "Copyright © 2022, Jocić Katarina i Potkonjak Iva, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu",
    "Copyright © 2022, Jocić Katarina i Potkonjak Iva, Deparment for software engineering, School of Electrical Engineering, University of Belgrade"],
    ["rec-psi", "Psi", "Dogs"],
    ["rec-samojed", "Samojed", "Samoyed"],
    ["rec-labrador", "Labrador", "Labrador"],
    ["rec-pudlica", "Pudlica", "Poodle"],
    ["rec-macke", "Mačke", "Cats"],
    ["rec-ptice", "Ptice", "Birds"],
    ["rec-karakteristike", "Karakteristike", "Characteristics"],
    ["rec-rasa", "Rasa", "Breed"],
    ["rec-pol", "Pol", "Genre"],
    ["rec-starost", "Starost", "Age"],
    ["rec-tezina", "Tezina", "Weight"],
    ["rec-opis", "Opis", "Description"],
    ["rec-pretrazi", "Pretrazi", "Find"], 
    ["rec-pretraga-po-rasi", "Pretraga po nazivu rase", "Search for breed"],
    ["rec-sortiraj-pretragu", "Sortiraj pretragu", "Sort results"],
    ["rec-naziv-r", "Naziv rastuce", "Breed ascending"],
    ["rec-naziv-o", "Naziv opadajuce", "Breed descending"],
    ["rec-starost-r", "Starost rastuce", "Age ascending"],
    ["rec-starost-o", "Starost opadajuce", "Age descending"],
    ["rec-kontakt-info", "Kontakt informacije", "Contact info"],
    ["rec-adresa", "Kako do nas?", "Where can you find us?"]

]

function inicijalizacija() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem("jezik", "1");
    }
    jezik = parseInt(localStorage.getItem("jezik")); 
    menjajTekst();  
}

function menjajTekst() {
    for (let i = 0; i < reci.length; i++){
        $("." + reci[i][0]).text(reci[i][jezik]);
    }
}

$(document).ready(function() {
    let footer = '<div class="col-sm-12 col text-center rec-footer">Copyright © 2022, Jocić Katarina i Potkonjak Iva, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu</div>';
    let footerElem = $(footer);
    $(".footer").append(footerElem);

    inicijalizacija();

    $("#zastava_srb").click(function() {
        jezik = 2;
        localStorage.setItem("jezik", "2");
        menjajTekst();
    });

    $("#zastava_eng").click(function() {
        jezik = 1;
        localStorage.setItem("jezik", "1");
        menjajTekst();
    });
})