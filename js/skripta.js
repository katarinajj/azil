$(document).ready(function() {
    let korisnik;
    let oglasi = [];
    let komentari = [];

    init();

    function init() {
        if(localStorage.getItem('korisnik') == null) {
            korisnik = {
                korime: 'ivka',
                lozinka: '123',
                telefon: '060123456'
            };

            localStorage.setItem('korisnik', JSON.stringify(korisnik));
        }
        else {
            korisnik = JSON.parse(localStorage.getItem('korisnik'));
        }

        if(localStorage.getItem('oglasi') == null) {
            oglasi = [{
                id: '0',
                korisnik: 'ana',
                telefon: '062987654',
                tekst: 'Bela maca sa flekom iznad desnog oka i šarenim repom. Poslednji put viđena na putu za Institut Vinča.'
            },
            {
                id: '1',
                korisnik: 'bojan',
                telefon: '062456123',
                tekst: 'U Žarkovu nestala ženka tigrice 17.05.2022. Zove se Popi i svetlo plave boje je, sivih krila i bele glave.'
            },
            {
                id: '2',
                korisnik: 'dragan',
                telefon: '062456123',
                tekst: 'Nestao jazavicar star 5 meseci odaziva se na ime Toma.'
            }
            ];
            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
        else {
            oglasi = JSON.parse(localStorage.getItem('oglasi'));
        }

        if(localStorage.getItem('komentari') == null) {
            komentari = [{
                id: '0',
                korisnik: 'ana',
                oglas: '1',
                tekst: 'Viđen papagaj koji odgovara opisu na Vidikovcu.'
            },
            {
                id: '1',
                korisnik: 'ana',
                oglas: '2',
                tekst: 'Na kojoj lokaciji je poslednji put viđen Toma?'
            },
            {
                id: '2',
                korisnik: 'bojan',
                oglas: '2',
                tekst: 'Kako izgleda Toma preciznije?'
            }
            ];
            localStorage.setItem('komentari', JSON.stringify(komentari));
        }
        else {
            komentari = JSON.parse(localStorage.getItem('komentari'));
        }


        for(let i = oglasi.length - 3; i < oglasi.length; i++) {
            let dugme = $('<button></button>').addClass('btn').addClass('oglasDugme').attr('id', oglasi[i].id).text("Detalji").addClass('rec-detalji-oglasa');
            let par = $('<p></p>').text(oglasi[i].tekst);
            let oglas = $('<div></div>').addClass('oglas').append(par).append(dugme);
            $('.oglasi').append(oglas);
        }
    }

    $('.oglasDugme').on('click', function() {
        let id = $(this).attr('id');
        let oglas;
        for(let i = 0; i < oglasi.length; i++) {
            if(oglasi[i].id == id) {
                oglas = oglasi[i];
                break;
            }
        }
        localStorage.setItem('history', 'Početna');
        localStorage.setItem('pregledOglas', JSON.stringify(oglas));
        window.location.href = 'pregledOglas.html'
    })

    $("#dropdownMenuLink").on('click', function() {
        window.location.href = 'zivotinje.html'
    })

})