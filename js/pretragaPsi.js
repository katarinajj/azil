jedan = {
    ime: "Boni",
    rasa: "labrador",
    pol: ["ženka", "female"],
    starost: ["1 godina", "1 year"],
    tezina: "25kg",
    opis: "Umiljat pas, želi vlasnika sa kojim će da trči!",
    slika: "../slike/labrador.png",
    link: "./psi/labrador.html"
};

dva = {
    ime: "Flipi",
    rasa: "samojed",
    pol: ["mužjak", "male"],
    starost: ["3 godine", "3 years"],
    tezina: "25kg",
    opis: "Umiljat pas, želi vlasnika sa kojim će da se mazi!",
    slika: "../slike/samojed.png",
    link: "./psi/samojed.html"
};

tri = {
    ime: "Doli",
    rasa: "pudlica",
    pol: ["ženka", "female"],
    starost: ["4 godine", "4 years"],
    tezina: "15kg",
    opis: "Umiljat pas, želi vlasnika koji će da je voli!",
    slika: "../slike/pudlica.png",
    link: "./psi/pudlica.html"
};


const niz = [jedan, dva, tri];

function komparatorStarostRastuce(a, b) {
    return parseInt(a.starost[0]) - parseInt(b.starost[0]);
}

function komparatorStarostOpadajuce(a, b) {
    return parseInt(b.starost[0]) - parseInt(a.starost[0]);
}

function filtriranje(filter, starost) {
    switch(filter) {
        case "1" : { return true; }
        case "2" : { return !starost.includes("god"); }
        case "3" : { return !starost.includes("god") || parseInt(starost) < 3; }
        case "4": { return starost.includes("god") && parseInt(starost) >= 3; }
    }
}

function filterNazivRase(unetNaziv, rasa) {
    if (unetNaziv != "") return unetNaziv.toLowerCase() == rasa.toLowerCase();
    return true;
}

function izlistajRezultate() {
    $(".rezultati").empty();
    let komparator = $("#sortiranje").val();
    switch(komparator) {
        case "3" : { niz.sort(komparatorStarostRastuce); break; }
        case "4": { niz.sort(komparatorStarostOpadajuce); break; }
    }

    let filter = $("#filtriranje").val();
    let unetNaziv = $(".pretraga input").val();

    for (let i = 0; i < niz.length; i++) {
        if (filtriranje(filter, niz[i].starost[0]) == false) continue;
        if (filterNazivRase(unetNaziv, niz[i].rasa) == false) continue;

        let rezultat = $("<div></div>");
        let slika = $("<img>").attr("src", niz[i].slika);
        let link = $("<a href=" + niz[i].link + ">Ime</a>").text(niz[i].ime);
        let ime = $("<div></div>").append(link);
        let opis = $("<div></div>").text(niz[i].opis);
        rezultat.append(slika).append(ime).append(opis).addClass("rezultat")
        $(".rezultati").append(rezultat);
    }

}

function popuniPolja(jezik) {
    for (let i = 0; i < niz.length; i++) {
        let rasa = niz[i].rasa;
        $("." + rasa + " .rasa").text(niz[i].rasa);
        $("." + rasa + " .pol").text(niz[i].pol[jezik]);
        $("." + rasa + " .starost").text(niz[i].starost[jezik]);
        $("." + rasa + " .tezina").text(niz[i].tezina);
        $("." + rasa + " .opis").text(niz[i].opis);
        $("." + rasa + " .slike img").attr("src", "../" + niz[i].slika);
    }
}

$(document).ready(function() {
    let jezik = parseInt(localStorage.getItem("jezik")) - 1;
    if ($("title").html() == "Ivka - Psi") izlistajRezultate();

    $("#pretrazi").click(izlistajRezultate);

    popuniPolja(jezik);
});