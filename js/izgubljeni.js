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
                let kor = $('<div></div>').addClass('infoKor').text("Korisnik: " + oglasi[i].korisnik);


                let info = $('<div></div>').addClass('col-sm-8').addClass('infoWrap').append(par).append(kor);
                let dug = $('<div></div>').addClass('col-sm-4').addClass('dugmeWrap').append(dugme);
                let red = $('<div></div>').addClass('row').addClass('oglasIzg').append(info).append(dug)

                // let red1 = $('<tr></tr>').append($('<td></td>').append(par).append(kor)).append($('<td></td>').addClass('dugmeTD').append(dugme));
                // // let red2 = $('<tr></tr>').append($('<td></td>').append(kor));
                // let tabela = $('<table></table>').append(red1);

                // let oglas = $('<div></div>').addClass('oglasIzg').append(tabela);
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

        localStorage.setItem('pregledOglas', JSON.stringify(oglas));
        window.location.href = 'pregledOglas.html'
    })

})