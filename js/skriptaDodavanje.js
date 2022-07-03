$(document).ready(function() {
    let korisnik = JSON.parse(localStorage.getItem('korisnik'));
    let oglasi = JSON.parse(localStorage.getItem('oglasi'));
    

    $('#dodajOglas').on('click',function() {
        let txt = $('#tekstOglas').val();
        if(txt != '') {
            let br = $('#korKontakt').val();
            if(br == '') br = korisnik.telefon;
            let noviOglas = {
                id: oglasi.length + '',
                korisnik: korisnik.korime,
                telefon: br,
                tekst: txt
            };
            let jezik = localStorage.getItem('jezik');
            if(jezik == 2) {
                $('.uspeh').addClass("rec-uspeh").text("Your add was successfully published!");
            }
            else $('.uspeh').addClass("rec-uspeh").text("Uspešno ste objavili oglas!");
            oglasi.push(noviOglas);
            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
    })

})