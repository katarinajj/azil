$(document).ready(function() {
    let korisnik = JSON.parse(localStorage.getItem('korisnik'));
    let oglasi = JSON.parse(localStorage.getItem('oglasi'));
    

    $('#dodajOglas').on('click',function() {
        let txt = $('#tekstOglas').val();
        if(txt != '') {
            let noviOglas = {
                id: oglasi.length + '',
                korisnik: korisnik.korime,
                telefon: korisnik.telefon,
                tekst: txt
            };
            $('.uspeh').text("Uspešno ste objavili oglas!");
            oglasi.push(noviOglas);
            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
    })

})