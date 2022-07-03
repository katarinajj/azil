$(document).ready(function() {
    let korisnik = JSON.parse(localStorage.getItem('korisnik'));
    let oglas;
    let komentari = [];
    init();

    function init() {
        let hist = localStorage.getItem('history');
        let link;
        let klasa;
    //     <li class="breadcrumb-item">
    //     <a href="pregledOglas.html" class="rec-zivotinje">Pregled oglasa</a>
    // </li>
        switch(hist) {
            case 'Moj nalog':
                link = "mojaNalog.html";
                klasa = "rec-nalog";
                break;
            case 'Izgubljeni ljubimci':
                link = "izgubljeniLjubimci.html";
                klasa = "rec-izgubljeni";
                break;
        }
        if(hist != "Početna") {
            $('<li></li>').addClass('breadcrumb-item').append(
                $('<a></a>').addClass(klasa).prop('href', link).text(hist)
            ).insertBefore('.poslednji');
        }
        
        oglas = JSON.parse(localStorage.getItem('pregledOglas'));
        $('#korisnik').text(oglas.korisnik);
        $('#kontakt').text(oglas.telefon);
        $('#tekst').text(oglas.tekst);

        komentari = JSON.parse(localStorage.getItem('komentari'));
        for(let i = 0; i < komentari.length; i++) {
            if(komentari[i].oglas == oglas.id) {
                let komentar = $('<li></li>').addClass('komentar').addClass('list-group-item').text(komentari[i].korisnik + " - " + komentari[i].tekst);
                $('#komentari').append(komentar);
            }
        }
    }

    $('#ostaviKoment').click(function() {
        let tekst = $('#tekstKoment').val();
        if(tekst != '') {
            let noviKoment = {
                id: komentari.length + '',
                korisnik: korisnik.korime,
                oglas: oglas.id,
                tekst: tekst
            }

            komentari.push(noviKoment);
            localStorage.setItem('komentari', JSON.stringify(komentari));
            let komentar = $('<li></li>').addClass('komentar').addClass('list-group-item').text(noviKoment.korisnik + " - " + noviKoment.tekst);
            $('#komentari').append(komentar);
        }
    })

})