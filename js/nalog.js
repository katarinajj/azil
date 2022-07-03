$(document).ready(function() {
    let oglasi = [];
    let komentari = [];
    let korisnik;

    init();

    function init() {
        korisnik = JSON.parse(localStorage.getItem('korisnik'));

        $('#korime').text(korisnik.korime);
        $('#kontakt').text(korisnik.telefon)
        if(localStorage.getItem('oglasi') == null) {
            oglasi = [];
            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
        else {
            oglasi = JSON.parse(localStorage.getItem('oglasi'));

            for(let i = 0; i < oglasi.length; i++) {
                if(oglasi[i].korisnik == korisnik.korime) {

                    let dugme = $('<button></button>').addClass('btn').addClass('vasOglasDugme').attr('id', oglasi[i].id).text("Obriši").addClass('rec-obrisi');
                    let par = $('<p></p>').text(oglasi[i].tekst);
                    // let kor = $('<div></div>').addClass('infoKor').text("Kontakt: " + oglasi[i].telefon);


                    let info = $('<div></div>').addClass('col-sm-8').addClass('infoWrap').append(par);// .append(kor);
                    let dug = $('<div></div>').addClass('col-sm-4').addClass('dugmeWrap').append(dugme);
                    let red = $('<div></div>').addClass('row').addClass('oglasIzg').addClass(oglasi[i].id).append(info).append(dug)


                    $('.mojiOglasi').append(red);
                }
            }

            
        }

        if(localStorage.getItem('komentari') == null) {
            komentari = [];
            localStorage.setItem('komentari', JSON.stringify(komentari));
        }
        else {
            komentari = JSON.parse(localStorage.getItem('komentari'));

            for(let i = 0; i < komentari.length; i++) {
                if(komentari[i].korisnik == korisnik.korime) {
                    let dugme = $('<button></button>').addClass('btn').addClass('vasOglasPregled').attr('id', komentari[i].oglas).text("Pogledaj oglas").addClass('rec-pregled-oglasa');
                    let par = $('<p></p>').text(komentari[i].tekst);
                    // let kor = $('<div></div>').addClass('infoKor').text("Kontakt: " + oglasi[i].telefon);


                    let info = $('<div></div>').addClass('col-sm-8').addClass('infoWrap').append(par);//.append(kor);
                    let dug = $('<div></div>').addClass('col-sm-4').addClass('dugmeWrap').append(dugme);
                    let red = $('<div></div>').addClass('row').addClass('oglasIzg').addClass(oglasi[i].id).append(info).append(dug)


                    $('.mojiKomentari').append(red);
                }
            }
        }
    }
    $('.vasOglasDugme').on('click', function() {
        let id = $(this).attr('id');
        let ind;
        for(let i = 0; i < oglasi.length; i++) {
            if(oglasi[i].id == id) {
                ind = i;
                break;
            }
        }
        oglasi.splice(ind, 1);
        $('.' + id).remove();

        for(let i = 0; i < komentari.length; i++) {
            if(komentari[i].oglas == ind) {
                komentari.splice(i, 1);
            }
        }
        localStorage.setItem('komentari', JSON.stringify(komentari));
        localStorage.setItem('oglasi', JSON.stringify(oglasi));
    })

    $('.vasOglasPregled').on('click', function() {
        let id = $(this).attr('id');
        let oglas = null;
        for(let i = 0; i < oglasi.length; i++) {
            if(oglasi[i].id == id) {
                oglas = oglasi[i];
                break;
            }
        }
        localStorage.setItem('history', 'Moj nalog');
        localStorage.setItem('pregledOglas', JSON.stringify(oglas));
        window.location.href = 'pregledOglas.html'
    })
})