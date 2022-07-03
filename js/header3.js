let header = '\
<div class="col-sm-10 col">\
<nav class="navbar navbar-expand-sm">\
    <a href="index.html" class="navbar-brand">\
        <img src="../../slike/logo.png" alt="ivka" id="logo">\
    </a>\
    <ul class="navbar-nav meni">\
        <li class="nav-item">\
            <a href="../../index.html" class="nav-link rec-pocetna">Početna</a>\
        </li>\
        <li class="nav-item dropdown" role="menu">\
            <a class="nav-link dropdown-toggle rec-zivotinje" href="../../zivotinje.html" id="dropdownMenuLink" data-bs-toggle="dropdown">\
                Životinje\
            </a>\
            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">\
                <li class="dropdown-submenu">\
                  <a  class="dropdown-item rec-psi" tabindex="-1" href="../psi.html">Psi</a>\
                  <ul class="dropdown-menu">\
                    <li class="dropdown-item"><a tabindex="-1" href="../psi/labrador.html" class="rec-labrador">Labrador</a></li>\
                    <li class="dropdown-item"><a href="../psi/samojed.html" class="rec-samojed">Samojed</a></li>\
                    <li class="dropdown-item"><a href="../psi/pudlica.html" class="rec-pudlica">Pudlica</a></li>\
                  </ul>\
                </li>\
                <li class="dropdown-submenu">\
                    <a  class="dropdown-item rec-macke" tabindex="-1" href="../macke.html">Mačke</a>\
                    <ul class="dropdown-menu">\
                      <li class="dropdown-item"><a tabindex="-1" href="../macke/persijska.html" class="rec-persijska">Persijska</a></li>\
                      <li class="dropdown-item"><a href="../macke/bengalska.html" class="rec-bengalska">Bengalska</a></li>\
                      <li class="dropdown-item"><a href="../macke/sijamska.html" class="rec-sijamska">Sijamska</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown-submenu">\
                    <a  class="dropdown-item rec-ptice" tabindex="-1" href="../ptice.html">Ptice</a>\
                    <ul class="dropdown-menu">\
                      <li class="dropdown-item"><a tabindex="-1" href="../ptice/tigrice.html" class="rec-tigrica">Tigrica</a></li>\
                      <li class="dropdown-item"><a href="../ptice/nimfa.html" class="rec-nimfa">Nimfa</a></li>\
                      <li class="dropdown-item"><a href="../ptice/kanarinac.html" class="rec-kanarinac">Kanarinac</a></li>\
                    </ul>\
                </li>\
              </ul>\
        </li>\
        <li class="nav-item">\
            <a href="../../izgubljeniLjubimci.html" class="nav-link rec-izgubljeni">Izgubljeni ljubimci</a>\
        </li>\
        <li class="nav-item">\
            <a href="../../dodajOglas.html" class="nav-link rec-dodaj-oglas">Dodaj oglas</a>\
        </li>\
        <li class="nav-item">\
            <a href="../../onama.html" class="nav-link rec-o-nama">O nama</a>\
        </li>\
    </ul>\
</nav>\
</div>\
<div class="col-sm-2 col">\
<nav class="navbar navbar-expand-sm moj-nalog">\
    <a href="#" class="navbar-brand collapse" id="zastava_srb">\
        <img src="../../slike/zastava_srb.png" alt="srb">\
    </a>\
    <a href="#" class="navbar-brand collapse" id="zastava_eng">\
        <img src="../../slike/zastava_eng.png" alt="eng" >\
    </a>\
    <ul class="navbar-nav">\
        <li class="nav-item">\
            <a href="../../mojNalog.html" class="nav-link rec-nalog">Moj nalog</a>\
        </li>\
    </ul>\
</nav>\
</div>\
';

let headerElem = $(header);

$(document).ready(function() {
    $(".header").append(headerElem);
        
    $("#dropdownMenuLink").on('click', function() {
        window.location.href = '../../zivotinje.html'
    })
})