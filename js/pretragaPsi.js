pas1 = {
    ime: "Boni",
    rasa: "Labrador",
    starost: "1 godina",
    opis: "blabla",
    slika: "../slike/labrador.png"
};

pas2 = {
    ime: "Boni",
    rasa: "Samojed",
    starost: "1 godina",
    opis: "blabla",
    slika: "../slike/labrador.png"
};

pas3 = {
    ime: "Pudlica",
    rasa: "Pudlica",
    starost: "1 godina",
    opis: "blabla",
    slika: "../slike/labrador.png"
};


psi = [pas1, pas2, pas3];


$(document).ready(function() {
    $("#pretrazi").click(function() {
        for (let i = 0; i < psi.length; i++) {
            let rezultat = $("<div></div>");
            let slika = $("<img>").attr("src", psi[i].slika);
            let ime = $("<div></div>").text(psi[i].ime);
            let opis = $("<div></div>").text(psi[i].opis);
            rezultat.append(slika).append(ime).append(opis).addClass("rezultat")

            $(".rezultati").append(rezultat);

        }
    });
});