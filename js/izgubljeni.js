$(document).ready(function() {
    let oglasi;

    init();

    function init() {
        if(localStorage.getItem('oglasi') == null) {
            oglasi = [];
            localStorage.setItem('oglasi', JSON.stringify(oglasi));
        }
        else {
            oglasi = JSON.parse(localStorage.getItem('oglasi'));

            for(let i = 0; i < oglasi.length; i++) {
                let dugme = $('<button></button>').addClass('btn').addClass('oglasDugme').attr('id', oglasi[i].id).text("Detalji").addClass('rec-detalji-oglasa');
                let par = $('<p></p>').text(oglasi[i].tekst);
                let kor = $('<div></div>').addClass('infoKor').append($("<span></span>").text("Korisnik:").addClass("rec-korisnik")).append($("<span></span>").text(oglasi[i].korisnik));//.text("Korisnik: " + oglasi[i].korisnik);


                let info = $('<div></div>').addClass('col-sm-8').addClass('infoWrap').append(par).append(kor);
                let dug = $('<div></div>').addClass('col-sm-4').addClass('dugmeWrap').append(dugme);
                let red = $('<div></div>').addClass('row').addClass('oglasIzg').append(info).append(dug)

                $('.oglasi').append(red);
            }
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
        // alert('aaaaaaaaaaa');
        localStorage.setItem('history', 'Izgubljeni ljubimci');
        localStorage.setItem('pregledOglas', JSON.stringify(oglas));
        window.location.href = 'pregledOglas.html'
    })

})