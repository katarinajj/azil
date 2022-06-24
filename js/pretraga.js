function komparatorStarostRastuce(a, b) {
    return parseInt(a.starost[0]) - parseInt(b.starost[0]);
}

function komparatorStarostOpadajuce(a, b) {
    return parseInt(b.starost[0]) - parseInt(a.starost[0]);
}

function komparatorNazivRastuce(a, b) {
    return a.localeCompare(b);
}

function komparatorNazivOpadajuce(a, b) {
    return b.localeCompare(a);
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
        case "1" : { niz.sort(komparatorNazivRastuce); break; }
        case "2": { niz.sort(komparatorNazivOpadajuce); break; }
        case "3" : { niz.sort(komparatorStarostRastuce); break; }
        case "4": { niz.sort(komparatorStarostOpadajuce); break; }
    }

    let filter = $("#filtriranje").val();
    let unetNaziv = $(".pretraga input").val();

    for (let i = 0; i < niz.length; i++) {
        if (filtriranje(filter, niz[i].starost[0]) == false) continue;
        if (filterNazivRase(unetNaziv, niz[i].rasa) == false) continue;

        let rezultat = $("<div></div>");
        let slika = $("<img>").attr("src", niz[i].slika[0]);
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
        $("." + rasa + " .slike img").eq(0).attr("src", "../" + niz[i].slika[0]);
        $("." + rasa + " .slike img").eq(1).attr("src", "../" + niz[i].slika[1]);
    }
}

$(document).ready(function() {
    let jezik = parseInt(localStorage.getItem("jezik")) - 1;
    if ($(".pretraga").length) izlistajRezultate();

    $("#pretrazi").click(izlistajRezultate);

    popuniPolja(jezik);
});