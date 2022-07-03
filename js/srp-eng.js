let jezik = 1;

const reci = [
    ["rec-pocetna", "Početna", "Home"],
    ["rec-zivotinje", "Životinje", "Animals"],
    ["rec-izgubljeni", "Izgubljeni ljubimci", "Lost pets"],
    ["rec-dodaj-oglas", "Dodaj oglas", "Post an ad"],
    ["rec-o-nama", "O nama", "About us"],
    ["rec-nalog", "Moj nalog", "My account"],
    ["rec-detalji-oglasa", "Detalji", "Details"],
    ["rec-pitanje1", "Da li se psi i mačke stvarno mrze?", "Do cats and dogs really hate eachother?"],
    ["rec-pitanje2", "Linjanje - zašto se dešava i kako izaći na kraj s tim?", "Molting - Why it happens and how to handle it?"],
    ["rec-pitanje3", "Papagaji za početnike, a i one malo iskusnije", "Parrots for begginers, and for more experienced"],
    ["rec-footer", "Copyright © 2022, Jocić Katarina i Potkonjak Iva, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu",
    "Copyright © 2022, Jocić Katarina i Potkonjak Iva, Deparment for software engineering, School of Electrical Engineering, University of Belgrade"],
    ["rec-psi", "Psi", "Dogs"],
    ["rec-pas", "Pas", "Dog"],
    ["rec-samojed", "Samojed", "Samoyed"],
    ["rec-labrador", "Labrador", "Labrador"],
    ["rec-pudlica", "Pudlica", "Poodle"],
    ["rec-macke", "Mačke", "Cats"],
    ["rec-macka", "Mačka", "Cat"],
    ["rec-persijska", "Persijska", "Persian"],
    ["rec-bengalska", "Bengalska", "Bengal"],
    ["rec-sijamska", "Sijamska", "Siamese"],
    ["rec-ptice", "Ptice", "Birds"],
    ["rec-ptica", "Ptica", "Bird"],
    ["rec-kanarinac", "Kanarinac", "Canary"],
    ["rec-nimfa", "Nimfa", "Nimfa"],
    ["rec-tigrica", "Tigrica", "Tiger"],
    ["rec-karakteristike", "Karakteristike", "Characteristics"],
    ["rec-rasa", "Rasa", "Breed"],
    ["rec-pol", "Pol", "Genre"],
    ["rec-starost", "Starost", "Age"],
    ["rec-tezina", "Tezina", "Weight"],
    ["rec-opis", "Opis", "Description"],
    ["rec-pretrazi", "Pretraži", "Find"], 
    ["rec-pretraga-po-rasi", "Pretraga po nazivu rase", "Search for breed"],
    ["rec-sortiraj-pretragu", "Sortiraj pretragu", "Sort results"],
    ["rec-naziv-r", "Naziv rastuce", "Breed ascending"],
    ["rec-naziv-o", "Naziv opadajuce", "Breed descending"],
    ["rec-starost-r", "Starost rastuce", "Age ascending"],
    ["rec-starost-o", "Starost opadajuce", "Age descending"],
    ["rec-kontakt-info", "Kontakt informacije", "Contact info"],
    ["rec-adresa", "Kako do nas?", "Where can you find us?"],
    ["rec-post1", "Sigurno ste nekada čuli rečenicu ‘Mrze se kao pas i mačka’. Međutim, da li se psi i mačke stvarno mrze? Iskustva su veoma podeljena.\
    Postoji mnoštvo primera gde vidimo ljubav između njih. Međutim, isto tako često vidimo kako su ova dva ljubimca netrpeljiva ili agresivna jedno prema drugom. To je zbog bihevioralnih razlika među njima.\
    Psi su društveniji i brže prihvataju druge životinje i ljude, trčanje im je vrsta zabave (dok mačke trče da pobegnu od opasnosti), percipiraju režanje kao opasnost ili agresiju\
    (dok mačke predu iz zadovoljstva), mašu repom u pozitivnom kontekstu (dok mačke mašu repom kad su uznemirene ili pred napad), itd.",
    "You’ve probably heard the sentence ‘They hate each other like a dog and a cat’. However, do dogs and cats really hate each other? Experiences are very divided.\
    There are many examples where we see love between them. However, we also often see how these two pets are intolerant or aggressive towards each other. This is due to behavioral differences between them.\
    Dogs are more sociable and accept other animals and people faster, running is a kind of fun (while cats run to escape danger), they perceive growling as danger or aggression \
    (while cats spin out of pleasure), they wag their tails in a positive context (while cats wag their tails) when disturbed or before an attack), etc."],
    ["rec-post2", "Tradicionalno, životinje se linjaju dva puta godišnje - na proleće i na jesen. Na proleće, pojavom toplijeg vremena, oni gube nepotreban zimski prekrivač i zamenjuju ga laganijim i manje gustim krznom. \
    S druge strane, na jesen, poddlaka postaje deblja kako bi ih zaštitila od hladnijeg vremena. Ceo proces traje negde između 3 i 7 nedelja, a količina zavisi od same vrste psa, odnosno vrste dlake koju imaju.\
    Imate osećaj da se vaš ljubimac linja tokom cele godine? To je potpuno normalno! Psi i mačke koji provode većinu vremena u zatvorenom prostoru nemaju potrebu da se prilagođavaju velikim razlikama u temperaturi, \
    te se konstantno prilagođavaju na sobnu temperaturu.", "Traditionally, animals shed twice a year - in spring and autumn. In the spring, with the appearance of warmer weather, they lose the unnecessary winter cover and\
    replace it with lighter and less dense fur. On the other hand, in the fall, the undercoat becomes thicker to protect them from colder weather. The whole process takes somewhere between 3 and 7 weeks, and the amount depends on the type of dog, ie the type of hair they have.\
    Feel that your pet is shedding all year round? This is completely normal! Dogs and cats that spend most of their time indoors do not need to adapt to large differences in temperature, and constantly adapt to room temperature."],
    ["rec-post3", "Istraživanja pokazuju da su papagaji jedna od najinteligentnijih životinja koje su poznate čoveku. Postoji mnogo razloga zbog kojih papagaji predstavljaju dobre ljubimce ali je važno i da njihovi vlasnici budu dobro informisani. Papagaji su često traženi \
    zbog svojih zabavnih i komičnih ličnosti kao i njihovih živahnih boja. Različite vrste papagaja mogu da žive od 10 do preko 100 godina, tako da držanje papagaja kao ljubimca možemo smatrati doživotnom posvećenošću.\
    Papagaji imaju odlične jezičke veštine. Često razumeju ljudski jezik, kao i dete od 4 do 5 godina. Oni su i društveni i inteligentni. Lojalni su  životni pratioci sa stvarnim emocijama. Jarkih boja, ljubazni i relativno laki za održavanje, papagaji su divni ljubimci za ljubitelje ptica svih uzrasta.", 
    "Research shows that parrots are one of the most intelligent animals known to man. There are many reasons why parrots are good pets, but it is also important that their owners are well informed. Parrots are often sought after for their fun and comic personalities as well as their vibrant colors. Different\
    species of parrots can live from 10 to over 100 years, so keep a parrot as a pet can be considered a lifelong commitment.\
    Parrots have excellent language skills. They often understand human language, as well as a child from 4 to 5 years old. They are both social and intelligent. They are loyal life companions with real emotions. Brightly colored, friendly and relatively easy to maintain, parrots are wonderful pets for bird lovers of all ages"],
    ["rec-post4", " Organizacija je osnovana 2000. godine iako njeni osnivači imaju višegodišnji staž u oblasti zaštite životinja.\
    S obzirom da je problem napuštenih životinja još uvek nerešeno pitanje u našoj zemlji, naše aktivnosti su prevashodno usmerene na omogućavanje opstanka prihvatilišta.\
    Sve naše životinje su čipovane, vakcinisane i sterilisane. Nažalost, zbog ograničenih kapaciteta (200 pasa) nismo u mogućnosti da preuzimamo nove životinje u broju u kome je to potrebno s obzirom na konstantan priliv.\
    Naš cilj jeste da psima pronađemo adekvatno udomljenje, ali kako nismo u mogućnosti da to uvek učinimo važno nam je da im obezbedimo pristojne uslove i kvalitetan život u prihvatilištu.", 
    "The organization was founded in 2000, although its founders have many years of experience in the field of animal protection.\
    Given that the problem of abandoned animals is still an unresolved issue in our country, our activities are primarily aimed at enabling the survival of shelters.\
    All our animals were chipped, vaccinated and sterilized. Unfortunately, due to limited capacity (200 dogs) we are not able to take on new animals in numbers where this is necessary given the constant influx.\
    Our goal is to find adequate adoption for dogs, but as we are not always able to do that, it is important for us to provide them with decent conditions and a quality life in the shelter."],
    ["rec-pitanje4", "Šta nas čini posebnim?", "What makes us special?"],
    ["rec-pitanje5", "Naše nagrade?", "Our prizes?"],
    ["rec-post5", "Prihvatilište Ivka od trenutka osnivanja do današnjeg dana niže brojne uspehe. Proglašeni smo za najdruželjubivi azil\
    u centralnoj Srbiji. Brojna priznanja su uručena od strane Srpske veterinarske komore za požrtvovanost koju su naši radnici\
    pružali. Posebno bismo istakli trku koju smo istrčali sa našim psima. Osvojili smo neverovatno 3. mesto i time se izborili za dodatnu opremu. \
    Od nagrade uloženo je u razvoj veb sajta, koji nam je pomogao da se čuje za nas.", "The Ivka shelter has had numerous successes since its founding. We have been declared the most friendly asylum\
    in central Serbia. Numerous awards were presented by the Serbian Veterinary Chamber for the dedication of our workers provided.\
    We would especially highlight the race we ran with our dogs. We won an incredible 3rd place and thus fought for additional equipment.\
    The award was invested in the development of the website, which helped us to be heard about."],
    ["rec-macka-tekst", "Mačke žive u bliskoj vezi sa ljudima najmanje 9.500 godina. \
    Pogledaj našu ponudi i pronađi svog prijatelja!", "Cats have lived in close contact with humans for at least 9,500 years. Take a look at our offer and find your friend!"],
    ["rec-ptica-tekst", "Pored pasa i mačaka, ova ptica je najpoželjniji ljubimac u svetu. \ Ulepšaće Vaš dom novim bojama i zvukovima.", 
    "In addition to dogs and cats, this bird is the most desirable pet in the world. It will beautify your home with colors and sounds."],
    ["rec-pas-tekst", "Psi su verovatno prve pripitomljene životinje, koje čoveku verno služe do danas.\
    Uverite se, pas je čovekov najbolji prijatelj.", "Dogs are probably the first domesticated animals, which have served man faithfully to this day.\
    The dog is man's best friend."],
    ["rec-filter-starost", "Filtriraj starost", "Filter by age"],
    ["rec-sve-starosti", "Sve starosti", "All ages"],
    ["rec-do-1", "Starost do 1 godine", "Under 1 year"],
    ["rec-do-3", "Starost do 3 godine", "Under 3 years"],
    ["rec-preko-3", "Starost preko 3 godine", "Above 3 years"],
    ["rec-vasi-oglasi", "Vaši oglasi", "Your ads"],
    ["rec-vasi-komentari", "Vaši komentari", "Your comments"],
    ["rec-vas-profil", "Vaš profil", "Your profile"],
    ["rec-obrisi", "Obriši", "Delete"],
    ["rec-pregled-oglasa", "Pregled oglasa", "View ad"],
    ["rec-nalog", "Moj nalog", "My profile"],
    ["rec-ostavi", "Ostavi komentar", "Leave a comment"],
    ["rec-komentari", "Komentari:", "Comments:"],
    ["rec-korisnik", "Korisnik:", "User:"],
    ["rec-kontakt", "Kontakt:", "Contact:"],
    ["rec-tekst-dodaj-oglas", "Ukoliko je Vaš ljubimac nestao možete ostaviti oglas u kome navodite njegov opis kao i lokaciju na kojoj je poslednji put viđen. Ostali korisnici će komentarisati objavu\
    sa informacijama koje bi mogle biti od pomoći u nalaženju Vaše životinje!", "If your pet is missing, you can leave an ad in which you state its description as well as the location where it was last seen. Other users will comment on the post\
    with information that could be helpful in finding your animal!"],
    ["rec-uspeh", "Uspešno ste objavili oglas!", "Your add was successfully published!"],
    ["rec-opcioni-broj", "Ukoliko želite možete navesti telefon na koji Vas drugi korisnici mogu kontaktirati u vezi Vašeg oglasa. Ukoliko ne navedete, podrazumevan će biti broj ostavljen pri regisraciji.",
    "If you wish, you can specify a phone number where other users can contact you regarding your ad. If you do not specify a contact number, the number left during registration will be used by default."],
    ["rec-stampaj", "Odštampaj oglas", "Print ad"]
    
]

const placehold = ["--", "Pretraga po nazivu rase", "Search breed name"]

function inicijalizacija() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem("jezik", "1");
        $("#zastava_srb").show();
        $("#zastava_eng").hide();
    }
    let tmp = parseInt(localStorage.getItem("jezik")); 
    if (tmp != jezik) {
        jezik = tmp;
        menjajTekst();      
    }
    if (jezik == 1) {
        $("#zastava_srb").show();
        $("#zastava_eng").hide();
    }
    else {
        $("#zastava_srb").hide();
        $("#zastava_eng").show();
    }
}

function menjajTekst() {
    for (let i = 0; i < reci.length; i++){
        $("." + reci[i][0]).text(reci[i][jezik]);
    }
    $("#placehold").attr("placeholder", placehold[jezik]);
}

$(document).ready(function() {
    let footer = '<div class="col-sm-12 col text-center rec-footer">Copyright © 2022, Jocić Katarina i Potkonjak Iva, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu</div>';
    let footerElem = $(footer);
    $(".footer").append(footerElem);

    inicijalizacija();

    $("#zastava_srb").click(function() {
        jezik = 2;
        localStorage.setItem("jezik", "2");
        menjajTekst();
        $("#zastava_srb").hide();
        $("#zastava_eng").show();
        if ($(".karakteristike").length) popuniPolja(1);
    });

    $("#zastava_eng").click(function() {
        jezik = 1;
        localStorage.setItem("jezik", "1");
        menjajTekst();
        $("#zastava_eng").hide();
        $("#zastava_srb").show();
        if ($(".karakteristike").length) popuniPolja(0);
    });

});
