import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue';

export default {
  data() {
    return {
        rules: {
            'server': [
                {id: "1.1 MetaGaming (MG)", rules: [
                    {text: "MetaGaming-ul reprezintă folosirea informațiilor OOC în scop IC"},
                    {text: "Exemplu:"},
                    {text: "➤ Esti cu un prieten pe Discord in locatii complet diferite, el este prins de cineva si omorat intr-o zona pe care tu IC nu o cunosti dar prietenul tau iti spune locatia pe Discord si tu te duci sa il duci la spital."},
                ]},

                {id: "1.2 PowerGaming (PG)", rules: [
                    {text: "PowerGaming sau prescurtat PG reprezinta folosirea unor puteri supranaturale sau neacordarea de sanse egale ambelor parti intr-un Roleplay."},
                    {text: "Exemple:"},
                    {text: '➤ Cand nu simulezi accidentele rutiere.'},
                    {text: '➤ Condusul cu 2 sau mai mult de 2 roti sparte cu o viteza mai mare de 20 Km/h.'},
                ]},
                {id: "1.3 Revenge Kill (RK)", rules: [
                    {text: "Revenge Kill-ul reprezintă atunci când un jucător îl omoară pe altul, iar după ce primește respawn, se întoarce după același jucător cu scopul de a îl omorî în mai puțin de jumătate de ora."},
                    {text: "Exemple:"},
                    {text: '➤ Ai participat la un roleplay in care tu ai fost omorat de catre cineva, nu primesti revive de la un medic si iti iei respawn la spital. In momentul in care ai primit revive te duci fix in locatia unde ai murit pentru a il omora si tu pe el.'},
                    {text: "➤ Este strict interzis sa te duci sa cauti persoana care te-a omorat intr-un interval mai mic de 60 de minute."},
                ]},
                {id: "1.4 Mixing (MX)", rules: [
                    {text: "Mixing-ul reprezinta transmiterea actiunilor/informatiilor IC in chatul global al server-ului."},
                    {text: "Exemple:"},
                    {text: '➤ Esti la sectia de Politie si scrii pe chat-ul global de pe server: “Poate sa vina cineva sa ma ia si pe mine de la sectie?”.'},
                    {text: '➤ Atunci cand te folosesti de chat-ul global pentru a vinde/cumpara anumite chestii.'},
                ]},
                {id: "1.5 Random Death Match (RDM)", rules: [
                    {text: "Random Death Match-ul reprezintă când 2 sau mai mulți jucători au început să se împuște ca și cum ar fii într-un joc fără un scop Roleplay."},
                ]},
                {id: "1.6 Character Kill (CK)", rules: [
                    {text: "Character Kill-ul sau prescurtat CK reprezintă uciderea unui jucator. Daca un jucator primeste CK, acesta isi va putea schimba identitatea/buletinul si nu va mai putea juca cu acel nume."},
                    {text: "Exemple:"},
                    {text: '➤ Pentru a acorda un CK, jucatorul care doreste sa o faca trebuie sa aiba un motiv foarte bun.(de exemplu, intr-o mafie, un asociat se duce la politie si da informatii despre mafia in care este - respectivul poate primi CK daca mafia afla ce a facut). Totodata, roleplay-ul facut pentru un CK trebuie sa fie complex.”'},
                    {text: '➤ In cazul in care comite infractiuni care echivaleaza inchisoarea pe viata.'},
                    {text: '➤ In cazul in care un jucator tradeaza o anumita grupare/organizatie si ia legatura cu alta factiune pentru a acorda informatii despre respectiva grupare/organizatie.'},
                    {text: '➤ In cazul in care jucatorul scrie [/me moare].'},	                       
                    {text: '➤ Pentru acordarea unui CK aveti nevoie de acordul unui membru High Staff'},				
                ]},
                {id: "1.7 Roleplay (RP)", rules: [
                    {text: "Roleplay sau prescurtat RP reprezintă simularea sau practicarea une-i vieti reale dar in situatia noastra e o viata virtuala, pe scurt reprezina simularea unei vieti reale intr-un mediu virtual."},
                ]},
                {id: "1.8 IN-CHARACTER (IC)", rules: [
                    {text: "Acest termen reprezintă toate informatiile si actiuniile facute/gasite de noi in joc. Pentru reprezentarea informatiilor sau actiuniilor facut de noi in joc folosim VoiceChat-ul si comanda [/me]."},
                ]},
                {id: "1.9 OUT-OF-CHARACTER (OOC)", rules: [
                    {text: "Acest termen reprezintă toate actiuniile sau informatiile facute in viata REALA si se reprezinta cu ajutorul unor chat-uri specifice. (Chat in Game/Discord/Skype etc)."},
                ]},
                {id: "1.10 Player Kill (PK)", rules: [
                    {text: "Acest termen reprezintă resetarea informatiilor IC cu persoanele aflate in acel roleplay. Mai pe intelesul tuturor in momentul in care mori si iti iei respawn la spital. Acela este momentul in care se uita toate informatiile cu persoanele respective care s-au aflat la roleplay-ul respectiv."},
                ]},
                {id: "1.11 Bug Abuse", rules: [
                    {text: "Daca gasiti sau aveti cunostinta de unul sau mai multe bug-uri existente pe server, anuntati de indata, fie facand un ticket direct pe server si anuntand un admin de bug-ul gasit, fie pe Discord printr-un ticket/mesaj unui admin. In niciun caz nu este permisa abuzarea de eventualele bug-uri descoperite."},
                ]},
                {id: "1.12 Olympic-Swim (OS)", rules: [
                    {text: "Este interzisa fuga de politie prin apa, inotand. Acest lucru este considerat Olympic Swim pentru ca nu poti inota la nesfarsit, in mod normal obosesti."},
                ]},
                {id: "1.13 Chicken-Run (CR)", rules: [
                    {text: "Chicken-Run este atunci cand un jucator fuge dintr-o parte in alta astfel incat sa evite gloantele, ceea ce este non roleplay si interzis. Aceasta regula se aplica si in cazul unui brawl (fight-bataie in grup). Atunci cand are loc un brawl, nu aveti voie sa fugiti si sa loviti cu bata."},
                ]},
                {id: "1.14 NO-FEAR (NF)", rules: [
                    {text: "NO-FEAR-ul sau prescurtat (NF) reprezintă actiunile unui jucator care alege sa nu roleze frica atunci cand este necesar."},
                    {text: "Exemple:"},
                    {text: '➤ Esti intr-o zona rau famata a orasului, niste persoane dubioase se tin dupa tine si intr-o zona mai retrasa scot arma la tine si incep sa te ameninte cu ea iar tu in momentul acela incepi sa il iei la pumni.'},
                ]},
                {id: "1.15 COP FEAR (CF)", rules: [
                    {text: "COP FEAR sau prescurtat CF este o ramura din regula NO-FEAR si face referinnta la persoanele care nu au frica de politisti. Mai pe intelesul tuturor trebuie sa aveti un comportament civilizat si respectuos fata de Politisti indiferent daca faceti parte dintr-o Organizatie sau nu."},
                    {text: "Exemple:"},
                    {text: '➤ Este strict interzis sa luati la misto un politist indiferent de situatie.'},
                    {text: '➤ Este strict interzis sa va impuscati / sa va bateti cu DIICOT-UL deoarece in mod normal ar trebui sa rolati frica cand ii vedeti si sa fugiti fara sa va mai uitati in spate sau sa va predati. (Aceasta regula nu se aplica la jafuri de banca / in zonele rau famate in intervalul orar 20:00 - 08:00 si nu se mai aplica regula in cazul in care va aflati la locatiile ilegale de (Droguri / Etnobotanice / etc) sau in cazul in care va aflati la livrat.).'},
                    {text: '➤ Este strict interzis ca in timpul urmariri sa abuzati de faptul ca politia nu are voie sa mearga la locatiile ilegale.'},		
                ]},
                {id: "1.16 TROLLING", rules: [
                    {text: "Trolling-ul pe server este interzis. Prin trolling se intelege ca unul sau mai multi jucatori nu au dispozitia necesara desfasurari unei actiuni roleplay si nu fac altceva decat sa caute atentie, sa se bage in seama cu alti jucatori cu scopul de a ii face pe acei jucatori sa interactioneze chiar daca acestia nu isi doresc acest lucru. Practic, respectivul sau respectivii nu fac decat sa provoace alti jucatori cu scopul de a crea oarecare conflicte sau pentru a se amuza."},
                ]},
                {id: "1.17 Reclama", rules: [
                    {text: "Orice tip de reclama adusa altor comunitati pe acest server este interzisa, atat pe server cat si pe Discord."},
                ]},
                {id: "1.18 Drop & KILL (DK)", rules: [
                    {text: "Este interzis sa fortezi o persoana sa arunce toate bunurile de pe el, iar dupa sa il omori. Daca l-ati fortat sa arunce trebuie sa il lasati in viata, iar daca vreti sa il omorati nu aveti voie sa il puneti sa arunce bunurile de pe el."},
                ]},
                {id: "1.19 ROB & KILL (DK)", rules: [
                    {text: "Este interzis sa jefuiesti o persoana, iar dupa sa o omori deoarece in realitate in cele mai multe cazuri cand un hot vrea sa te jefuiasca nu o sa mai riste niciodata sa te si omoare."},
                ]},
                {id: "1.20 LIMBAJ VULGAR OOC", rules: [
                    {text: "Limbajul vulgar, injruile, textele cu tenta rasista etc. sunt interzise pe chaturile OOC."},
                    {text: "Incercam sa mentionam un limbaj cat mai decent astfel incat nimeni sa nu fie deranjat de limbajul mai “bogat” al unora."},
                ]},
                {id: "1.21 Joburile Legale", rules: [
                    {text: "➤ Este interzis sa jefuiesti in timpul in care iti faci jobul sau esti cu masina de job"},
                    {text: "➤ Este interzis sa rapesti in timpul in care iti faci jobul sau esti cu masina de job"},
                    {text: "➤ Este interzis sa faci joburile cu masina personala (Doar la joburile care au masina de job)"},
                    {text: "➤ Este interzis sa folosesti masina de job in scopuri personale"},
                ]},
                {id: "1.22 Interpretarea Regulamentului", rules: [
                    {text: "Interpretarea regulilor din regulamentul server-ului este strict interzisa. Nu puteti interpreta dupa bunul plac aceste reguli, doar pentru a va favoriza in momentul in care sunteti pus in fata unei situatii neplacute in care ati incalcat una dintre reguli. Chiar daca anumite reguli lasa loc de interpretare, staff-ul server-ului sunt cei care decid in ce conditii se vor aplica sanctiunile."},
                ]},
                {id: "1.23 Amenintari", rules: [
                    {text: "Pretinderea ca detineti functii, ca aveti relatii cu membri din staff-ul server-ului sau amenintari cu interventia membrilor staff-ului sunt strict interzise."},
                ]},
                {id: "1.24 Instigarea", rules: [
                    {text: "Instigarea altor persoane la incalcarea oricărei reguli din regulamentul server-ului va fii pedepsita."},
                ]},
                {id: "1.25 Rapiri", rules: [
                    {text: "➤ Este strict interzis sa rapesti o persoana singur in timp ce conduci masina."}, 
                    {text: "Explicatie: Este considerat fail deoarece singur nu ai cum sa fii atent la persoana pe care ai rapito, sa mai tii si arma dar sa mai si conduci. Asa ca pentru a rapi o persoana cu masina este nevoie de minim 2 persoane."},
                    {text: "➤ Este interzis sa rapesti o persoana si sa ceri rascumparare pe acea persoana de la Politie."},
                ]},
                {id: "1.26 PIT-STOP", rules: [
                    {text: "Ce inseamna PIT-STOP?: Este o manevra de oprire a masinii prin intrarea in lateral sau in spatele masini pe care vreti sa o opriti."},
                    {text: "➤  Este interzis sa faceti manevra PIT-STOP la o viteza mai mare de 150 Km/h deoarece intr-o situatie reala daca faceti aceasta manevra ar fii sanse extrem de mari ca acea persoana sa moara."},
                    {text: "➤ Este interzis sa faceti manevra PIT-STOP cu anumite clase de masini exceptand masinile de la CLASA D / CLASA C / CLASA LOWRIDER / Masini Mafie, deoarece in realitate nimeni nu si-ar strica masina de sute de mii de euro doar ca sa il opreasca pe unu."},
                ]},
                {id: "1.27 Tranzactii OOC", rules: [
                    {text: "Nu efectuati plati OOC catre jucatori sau membrii ai staff-ului in schimbul unor bunuri IC (bani, case, masini, etc). Cei care incalca aceasta regula vor fi banati permanent."},
                ]},
                {id: "1.28 Nume IN-CHARACTER (IC) INTERZISE", rules: [
                    {text: "➤ Nume celebre (Numele unei persoane cunoscute in intreaga lume, o anumita cultura sau doar o tara)"},
                    {text: "➤ Nume nerealiste."},
                    {text: "➤ Nume puse pentru a starni amuzamentul (Tom Beron, Lin Jon Kur, Iamil Angura, etc)"},
                ]},
                {id: "1.29 Nume OUT-OF-CHARACTER (OOC) INTERZISE", rules: [
                    {text: "➤ Nu aveti voie sa folositi nume OOC Vlad arenblabla.ro sau chestii de genul nu se accepta reclama pe server prin nume sau alte metode."},
                ]},
                {id: "1.30 Haine interzise", rules: [
                    {text: "➤ Este stric interzis sa va imbracati cu haine de Politist daca nu faceti parte din factiune."},
                    {text: "➤ Este stric interzis sa va imbracati cu haine de Medici daca nu faceti parte din factiune"},
                    {text: "➤ Este stric interzis sa folositi haine/costume care lumineaza"},
                    {text: "➤ Este stric interzis sa folositi masti non-rp de la magazinul de haine."},
                    {text: "Exemplu: Masca de Cal / Masca de Iepure, etc. Sunt permise doar mastile de genul Bandanda / Cagula, in general masti care nu instiga la TROLL."},
                ]},
                {id: "1.31 Actiuni Teroriste", rules: [
                    {text: "➤ Este interzis sa faci roleplay de acest gen. Trebuie sa discuti despre fiecare detaliu cu un membru staff (Moderator+) si fiecare lucru oe care vrei sa-l faci in actiunea respectiva. De asemenea daca vi se ofera permisiunea un memebru staff va urmari toata actiunea roleplay care urmeaza sa fie efectuata."},
                ]},
                {id: "1.32 Evenimente Organizate", rules: [
                    {text: "➤ Orice adunare unde se strange o masa de oameni (petreceri, protest, conferinta de presa, car meeting, competiti, etc) este considerata un eveniment, iar deranjarea lui sau influentarea lui negativa va fi interzisa."},
                ]},
                {id: "1.33 Roleplay Scarbos/Dezgustator", rules: [
                    { text: "➤ Abuzu sexual (violul). canibalismul , necrofilia , pedofilia si alte tipuri de roleplay dezgustator sunt permise pe server doar cu acordul OOC al ambelor parti implicate in actiune."},
                ]},
                {id: "1.34 AFK/ REFUZ ROLEPLAY", rules: [
                    {text: "➤ Refuzul unei actiuni roleplay reprezinta refuzul unui jucator de a face roleplay cu alti jucatori, ingreunand astfel actiunile roleplay ale acestora, prin parasirea jocului (/quit sau trecerea jocului in bara - AFK)."},
                    {text: "➤ Este interzis sa iti mai dati RESPAWN dupa ce ai trecut de usile spitalului."},
                    {text: "➤ Este interzis sa stati AFK mai mult de 5 minute in timp ce sunteti ON-DUTY ca Politist/Medic deoarece se poate considera AFK pentru payday si puteti fi sanctionati ca atare."},
                    {text: "➤ Daca un jucator este AFK, nu aveti voie sa interactionati cu el in niciun fel, aceasta regula se aplica doar in cazul in care jucatorul a fost AFK inainte sa incepeti o anumita actiune cu el, daca jucatorul respectiv s-a pus AFK in timpul actiunii, atunci acesta poate fi reclamat."},
                    {text: "➤ De asemenea, este interzis orice fel de program anti-afk, blocarea tastelor sau orice alta metoda pentru a nu lua kick de la sistemul ANTI-AFK"},
                ]},
                {id: "1.35 Condus Non-Roleplay", rules: [
                    {text: "In Oras:"},
                    {text: "➤ Este strict interzis sa depasiti viteza de 200 Km/h in oras fara un motiv bine intemeiat"},
                    {text: "➤ Este strict interzis sa treceti peste caile ferate cu o viteza mai mare de 35 Km/h"},
                    {text: "OFF-ROAD:"},
                    {text: "➤ Este strict interzis sa mergeti cu masini cu garda joasa pe drumuri forestiere sau pe drumuri care nu sunt asfaltate."},
                    {text: "➤ Este strict interzis sa sa mergeti pe aceste drumuri cu o viteza mai mare de 40-80 Km/h, iar in cazul in care sunteti urmariti sau viata vosatra este pusa in pericol aveti dreptul sa mergeti cu o viteza de maxim 100 km/h"},
                    {text: "ATENTIE!"},
                    {text: "Toate dubele/camioanele sunt considerate OFF-ROAD"},
                    {text: "OFF-ROAD EXTREM:"},
                    {text: "➤ Este strict interzis sa urcati cu masinile sau motocicletele pe munti sau drumuri care nu sunt marcate cu exceptia vehiculelor care sunt destinate pentru un astfel de drum."},
                    {text: "Exemple:"},
                    {text: "Jeep Wrangler, Chevrolet Colorado, Ford Raptor, Yamaha XT66, etc. Dar ATENTIE, daca vehiculele nu sunt echipate cu cauciucuri OFF-ROAD nu au ce cauta pe aceste trasee."},
                    {text: "➤ Este strict interzis sa mergeti pe aceste tipuri de trasee cu o viteza mai mare de 40-60 Km/h indiferent de situatie."},
                    {text: "ACCIDENTE:"},
                    {text: "➤ Este strict interzis sa intrii frontal intr-un alt autovehicul intentionat doar pentru a il opri indiferent ca aveti un Camion sau ori ce alt tip de vehicul masiv."},
                    {text: "➤ Este strict interzis sa intrii intentionat intr-un vehicul oprit"},
                    {text: "ELICOPTERE:"},
                    {text: "➤ Este strict interzis sa aterizezi cu un elicopter pe insule."},
                    {text: "➤ Este strict interzis sa aterizati cu un elicopter pe strazi. ( Cu exceptia elicopterelor Smurd / Politie sau in cazul unei defectiuni care necesita aterizare de urgenta)"},
                    {text: "➤ Este strict interzis sa aterizati cu un elicopter pe blocurile din Los Santos cu exceptia blocurilor care detin un HELIPAD"},
                    {text: "➤ Este strict interzis sa aterizati cu un elicopter pe case, indiferent de zona."},
                    {text: "➤ Sunteti nevoiti sa pastrati o altitudine mare."},
                    {text: "AVIOANE:"},
                    {text: "➤ Este strict interzis sa zburati cu avionul deasupra orasului."},
                    {text: "➤ Este strict interzis sa aterizati cu avionul altundeva inafara de AEROPORT."},
                    {text: "➤ Sunteti nevoiti sa pastrati o altitudine mare."},
                ]},
                {id: "1.36 WARN-URI", rules: [
                    {text: "➤ Odata cu acumularea a 3 avertismente (warn-uri) veti fi banati automat. Warn-urile sunt acordate jucatorilor care incalca anumite reguli si in functie de decizia admin-ului primesc sau nu warn."},
                ]},
                {id: "1.37 COMA", rules: [
                    {text: "In momentul in care esti in coma trebuie sa respecti urmatoarele reguli:"},
                    {text: "➤ Este strict interzis sa vorbesti in timp ce esti in COMA"},
                    {text: "➤ Este strict interzis sa vorbesti pe “cascuta” in timp ce esti in COMA"},
                    {text: "➤ Este strict interzis sa trimiti sau sa suni pe cineva cand esti in COMA"},
                    {text: "➤ Daca esti in COMA in urma unui accident rutier ai voie sa suni la medic dupa ora 00:00 pana la ora 10:00 si sa vorbesti la persoana A 3-A."},
                ]},
                {id: "1.38 Regulament [/cara]/[/caraprieten]", rules: [
                    {text: "In momentul in care vrei sa iei pe cineva in /cara trebuie sa respecti urmatoarele reguli:"},
                    {text: "➤ Este strict interzis sa alergi cu cineva in /cara indiferent daca sunteti mai multi care faceti rp ca il carati"},
                    {text: "➤ Este permis sa iei pe cineva in /cara fara sa faci rp deoarece oricum se face o animatie."},
                ]},
                {id: "1.39 SCAM / INSELACIUNI", rules: [
                    {text: "In momentul in care aveti de gand sa dati SCAM unei persoane trebuie sa respectati urmatoarea regula:"},
                    {text: "➤ Este strict interzis ca SCAM-Ul sa fie mai mare de 5.000$ in bunuri sau bani."},
                    {text: "ATENTIE!"},
                    {text: "➤ Nu se considera SCAM daca imprumutati la cineva de buna voie o masina si nu o mai primiti inapoi."},
                    {text: "➤ Nu se considera SCAM daca imprumutati pe cineva de buna voie o suma de bani si nu o mai primiti inapoi"},
                    {text: "➤ Nu se considera SCAM afacerile cu vehicle/case folosind bani impachetati."},
                ]},  
                {id: "1.40 Ostatic", rules: [
                    {text: "➤ Este interzis sa luati ostatic o persoana random fara sa existe un motiv bine intemeiat."},
                    {text: "➤ Este interzis sa tineti pe cineva ostatic fara sa cereti ceva pe el mai mult de 2 ore. In cazul in care nu aveti cu cine sa vorbiti pentru intelegere, aveti dreptul sa tineti ostaticul pana va raspunde cineva"},
                    {text: "➤ Este interzis sa cereti pe un ostatic o suma mai mare de 200.000$ in bani sau bunuri."},
                    {text: "➤ Este interzis sa aveti pretentii mari precum pe baza la un ostatic ca un lider sau o intreaga organizatie sa prezinte fortat o locatie"},
                    {text: "➤ Este obligatoriu ca dupa o intelegere/negocieri pe baza unui ostatic sa va tineti de cuvant si sa nu fie o inselaciune la mijloc. Este valabil de ambele parti implicate"},
                    {text: "➤ Este interzis sa aveti pretentii din partea politiei precum sa plece toate echipajele, sa lase toti armele sau exagerari foarte mari."},
                    {text: "➤ Este interzis la jafuri de Banca / Bijuterii sa aveti ostatic."},
                    {text: "➤ Este interzis sa iei ostatic CIVIL intr-o bataie cu politia."},
                ]},             
                {id: "1.41 Live-Streams", rules: [
                    {text: "➤ Nu aveți voie sa instigati la ura prin intermediul subscriberilor"},
                ]},
                {id: "1.42 HOME", rules: [
                    {text: "➤ Folosirea tastei HOME pentru a vedea cine este persoana respectivă este strict interzisa."},
                ]},
                {id: "1.43 Anunțuri", rules: [
                    {text: "➤ Anunturile de tip: Caut familie/mafie/săgeți. Vand droguri/jucarii (poliția nu vede/deepweb) Sunt total interzise."},
                ]},
                {id: "1.44 Ban Evading", rules: [
                    {text: "➤ Ban Evading-ul reprezinta incercarea de a 'fenta' ban-ul, mai exact cand aveți ban PERMANENT pe un cont sa va creati altul pentru a va juca pe server, acest lucru se pedepsește cu BAN IP."},
                ]},
                {id: "1.45 MTL-uri/REMORCI", rules: [
                    {text: "➤ Nu aveti voie sa folositi remorcile/mtl-urile in alt context diferit de cel pentru care aceastea au fost făcute."},
                ]},
                {id: "1.46 CAR RAM", rules: [
                    {text: "Car Ram-ul reprezinta busirea unui autovehicul într-un mod repetitiv fără a rola."},
                ]},
                {id: "1.47 CAR SURF", rules: [
                    {text: "Car Surf-ul reprezinta stationarea pe un vehicul în timp ce acesta se afla în mișcare."},
                ]},
                {id: "1.48 NINJA JACK", rules: [
                    {text: "Ninja Jack-ul reprezinta furtul unui vehicul fara a intretine un roleplay."},
                ]},
                {id: "1.49 CAUCIUCURI SPARTE", rules: [
                    {text: "Te poți deplasa cu o masina ce are 1 cauciuc spart cu viteza de 80km/h, cu 2 cauciucuri sparte cu viteza de 20km/h, în cazul în care numărul roților sparte depășește de 2 este strict interzis sa te mai deplasezi cu aceasta."},
                ]},
                {id: "1.50 STREAM-SNIPE", rules: [
                    {text: "Stream-snipe-ul este total interzis, acest lucru reprezinta urmarirea unui jucator care este Live la acel moment pe server."},
                ]},
                {id: "1.51 DESCHIDERE OOC IN IC", rules: [
                    {text: "Deschidere OOC in IC se reprezinta mentionarea termenilor OOC intr-un roleplay."},
                    {text: "Nu aveti voie sa folositi [/me] pentru a scrie anumite chestii OOC."},
                    {text: "EXEMPLE:"},
                    {text: "➤ Esti admin?"},
                    {text: "➤ Esti ingeras?"},
                    {text: "➤ Permiti OOC?"},
                    {text: "➤ Permiti Chineza?"},
                    {text: "➤ [/me permiti chineza?]"},
                ]},
                {id: "1.52 BOMBARDIER", rules: [
                    {text: "Regula BOMBARDIER reprezinta intimidarea/jignirea/provocarea unui jucator fără, cautarea de scandal cu toate lumea fara un anumit scop sau total random."},
                ]},
                {id: "1.52 CORUPTIE", rules: [
                    {text: "Corupția nu este permisă nici IC nici OOC. La ce se referă aceasta regula? Sa nu dai caziere, amenzi, dacă ești polițist/medic cand ieși din department să profiți de bunurile oferite de departament gratuit și să pleci cu prelata de bandaje/armuri. Sau sa plecati cu armele departamentului. Tot la corupție se încadrează și cerutul de mită/practicarea de acțiuni ilegale cat timp faci parte dintr-un departament. Cu ce se sancționează acest lucru? Cu ban 14 zile, iar în funcție de caz și cu CK."},
                    {text: "Instigarea la corupție este și ea sancționată, nu aveți voie sa instigati medici/polițiști la corupție"},
                ]},
                {id: "1.53 CAMP", rules: [
                    {text: "Nu aveți voie sa campati morții pentru a aștepta alte echipaje de poliție/medici ca sa ii omorati. Nu aveți voie sa campati locațiile ilegale."},
                ]},
                {id: "1.54 TOMBEROANE", rules: [
                    {text: "➤ Nu aveți voie sa băgați oameni morți în tomberoane."},
                    {text: "➤ Nu aveți voie sa ieșiți din tomberon cu armă în mână."},
                ]},
                {id: "1.55 MODURI INTERZISE", rules: [
                    {text: "Modurile Interzise sunt cele care iti pot oferii avantaje, aveți cateva exemple mai jos. Cine folosește astfel de moduri va fi sancționat cu BAN PERMANENT."},
                    {text: "EXEMPLE:"},
                    {text: "➤ No Night"},
                    {text: "➤ No Props"},
                    {text: "➤ No Water"},
                    {text: "➤ No Vegetation"},
                    {text: "➤ No Fog"},
                    {text: "➤ Mod de FOV"},
                    {text: "➤ Bullet Tracers"},
                    {text: "➤ Kill Effects"},
                ]},
                {id: "1.56 ARME DE MAFIE LA CIVILI", rules: [
                    {text: "➤ Este strict interzis sa folositi armele de mafie daca sunteti civili."},
                ]},
                {id: "1.57 Kill & Rob (KR)", rules: [
                    {text: "KILL & ROB, prescurtarea (RB). Acest terment reprezinta jefuirea unui jucator dupa ce l-ai omorat tu sau colegii tai."},
                ]},
                {id: "1.58 FREE-CHAT", rules: [
                    {text: "Chat-ul este strict pentru intrebari si nelamuriri, daca folositit chat-ul GLOBAL de pe joc in alte contexte veti fi sanctionati cu mute."},
                ]},
                {id: "1.59 Sticky Bomb/Molotov", rules: [
                    {text: "Nu aveti voie sa aruncati Sticky Bomb/Molotov inauntrul bancii/bijuteriei, in caz contrar cel care a aruncat va primii CK. (Atunci cand incercati sa aruncati Molotov prin usile bancii/bijuteriei afara si se inchide usa brusc nu se ia in considerare.)"},
                    {text: "Nu aveti voie sa aruncati Sticky Bomb pe trotuarul de la banca sau pe aleea de la bijuterie, in caz contrar cel care a aruncat va primii CK."},
                    {text: "Nu aveti voie sa aruncati Sticky Bomb in interiorul oricarei cladiri, in caz contrar cel care a aruncat va primii CK. (Aceasta regula nu se ia in considerare atunci cand efectuati o actiune terorista aprobata de catre un membru High Staff.)"},
                    {text: "Daca ati aruncat un Molotov inauntru unei cladiri aveti 5 minute din momentul in care primul Molotov a fost aruncat sa evacuati cladirea, in caz contrar toate persoanele care sunt alaturi de cel care a aruncat cu Molotov-ul in cladire si nu au reusit sa evacueze cladirea vor primii CK. (Persoanele in COMA  nu se iau in considerare.)"},
                ]},
                {id: "1.60 URMARIRE", rules: [
                    {text: "➤ Daca urmarirea a inceput intr-o zona publica nu aveti voie sa va duceti in zonele rau famate."},
                ]},
                {id: "1.61 Suferințele (IC) cât și cele (OOC)", rules: [
                    {text: "Suferintele sunt strict interzise OOC cat si IC"},
                    {text: "EXEMPLE:"},
                    {text: "➤ Culcat slabule"},
                    {text: "➤ Sunteti slabi"},
                    {text: "➤ Sit Dog"},
                    {text: "➤ La cotet"},
                    {text: "➤ Tot culcati, tot culcati?"},
                ]},
                {id: "1.62 Jafuri Persoane", rules: [
                    {text: "➤ Intervalul orar in care puteti jefuii este 21:00 - 07:00"},
                    {text: "➤ Nu aveti voie sa jefuiti persoanele care fac job legal"},
                    {text: "➤ Nu aveti voie sa jefuiti Politisti / Medici ON DUTY"},
                    {text: "➤ Nu aveti voie sa fortati persoane sa scoata bani din Banca."},
                    {text: "➤ Aveti dreptul de a jefuii absolut tot ce are persoana respectiva in inventar, mai putin obiectele de job legal."},
                    {text: "➤ Aveti dreptul de a jefuii absolut tot ce are in portbagaj / torpedo."},
                    {text: "➤ Nu aveti voie sa fortati persoane sa scoata masini din garaj pentru a le controla, respectiv jefuii."},
                    {text: "➤ Nu aveti voie sa jefuiti arme de mafie/politie."},
                    {text: "➤ Nu aveti voie sa jefuiti veste/truse medicale."},
                    {text: "➤ Nu aveti voie sa jefuiti aceasi persoana de mai multe ori intr-un interval mai mic de 2 ore."},
                ]},
                {id: "1.63 Jafuri Pacific", rules: [
                    {text: "➤ Nu aveti voie sa da-ti jaf la Pacific in mai putin de 8 persoane si mai mult de 16 persoane."},
                    {text: "➤ Nu aveti voie sa luati ostatici la jaf la Banca"},
                    {text: "➤ Nu aveti voie sa folositi Sticky Bomb / Molotov in interiorul Bancii"},
                    {text: "➤ Nu aveti voie sa luati ostatici pentru a ii da la schimb pentru persoanele prinse la Jaf Banca."},
                ]},
                {id: "1.64 Jafuri Bijuterie", rules: [
                    {text: "➤ Nu aveti voie sa da-ti jaf la Bijuterie in mai putin de 4 persoane si mai mult de 12 persoane."},
                    {text: "➤ Nu aveti voie sa luati ostatici la jaf la Bijuterie"},
                    {text: "➤ Nu aveti voie sa folositi Sticky Bomb / Molotov in interiorul Bijuteriei"},
                    {text: "➤ Nu aveti voie sa luati ostatici pentru a ii da la schimb pentru persoanele prinse la Jaf Bijuterie."},
                ]},
                {id: "1.65 ACTIUNI ILEGALE IN ZONE PUBLICE", rules: [
                    {text: "➤ Actiunile ilegale in zonele publice sunt strict interzise."},
                    {text: "➤ Aveti voie sa va urcati la cineva in masina si sa rolati ca ii puneti cutitu/pistolul la cap/burta doar daca masina are geamuri fumurii cel putin pe geamurile din fata."},
                    {text: '➤ Nu aveti voie sa va urcati la cineva in masina si sa rolati ca ii puneti cutitu/pistolul la cap/burta in fata sectiei de politie/spital.'},
                    {text: "➤ Orice bataie cu pumnii in zonele publice se considera actiune ilegala in zona publica."},
                    {text: "➤ O actiune ilegala se poate petrece pe autostrada in intervalul orar 22:00 - 08:00 doar intr-un interval mai mic de 1 minut, iar aceasta nu trebuie sa fie langa iesirile/intrarile din orase."},
                ]},
            ],

            'politie': [
                {id: "Regulament General", rules: [
                    {id: "1.1", text: "Nu este permisa coruptia IC nici OOC."},
                    {id: "1.2", text: "Nu este permis sa utilizati masinile puse in dotare de departamentul de politie cand sunteti OFF-DUTY / in scopuri personale."},
                    {id: "1.3", text: "Nu este permis sa utilizati armele de orice tip  / uniforma de politie , atunci cand sunteti  OFF-DUTY / in scopuri personale."},
                    {id: "1.4", text: "Usile la celule trebuie sa fie mereu inchise."},
                    {id: "1.5", text: "Membrii subdepartementului D.I.I.C.O.T. nu au voie sa proceseze suspectii cat timp au imbracamintea respectiva."},
                    {id: "1.6", text: "Nu aveti voie sa mergeti in zonele rau-famate decat la apel, cand sunt razii sau cand se organizeaza o rau-famata de catre un ASP+."},
                    {id: "1.7", text: "Raziile pe zonele rau-famate sunt facute cu o distanta de 2 ore MINIM si dureaza 30 de minute. Ele se fac cu aprobarea unui Inspector+."},
                    {id: "1.8", text: "Cand sunteti OFF-DUTY, aveti obligatia sa va predati toate armele."},
                    {id: "1.9", text: "Aveti permisiunea sa va imbracati in D.I.I.C.O.T. doar in cazul in care un Coordonator D.I.I.C.O.T va cere acest lucru."},
                    {id: "1.10", text: "D.I.I.C.O.T-ul NU are voie sa faca Traffic-Stop."},
                    {id: "1.11", text: "Cand va schimbati din D.I.I.C.O.T. inapoi in politist, sunteti obligati sa folositi doar armele de gradul vostru."},
                    {id: "1.12", text: "Dupa interventiile D.I.I.C.O.T. sunteti obligati sa va schimbati inapoi in gradul vostru aferent."},
                    {id: "1.13", text: "Nu este permis sa preluati apeluri atunci cand sunteti OFF-DUTY."},
                    {id: "1.14", text: "Transportul de detinuti se efectueaza in cazul in care este un numar de 4 suspecti plus la celule sau depaseste o sentinta de 60 de minute, transportul se efectueaza cu aprobarea  unui Inspector."},
                    {id: "1.15", text: "Nu aveti voie sa opriti o persoana care circula regulamentar, acestia trebuie sa fie opriti doar daca au incalcat codul penal."},
                    {id: "1.16", text: "Nu aveti voie sa plecati singuri in patrula, exceptie facand cazurile cand primiti aprobare de la un Inspector+."},
                       {id: "1.17", text: "Nu aveti voie sa purtati absolut niciun tip de masca OFF-DUTY nici ON-DUTY (Exceptie D.I.I.C.O.T.)."},
                       {id: "1.17.1",text: "Persoanele care detin functia de 'CADET' nu au voie sa plece singuri in patrula neinsotit de un politist mai experimentat sau unul de acelasi grad."},
                    {id: "1.18", text: "Politistii au obligatia sa se prezinte atunci cand interactioneaza cu un alt player dupa urmatorul model: (Grad-ul) (Numele) (Exemplu: Buna ziua/seara/dimineata, Chestor General Fernando Martinez din cadrul politie Los Santos)"},
                    {id: "1.19", text: "Nu aveti voie sa mergeti cu alte masini, decat cele de la gradul vostru."},
                    {id: "1.20", text: "Nu aveti voie sa folositi alte arme, decat cele de la gradul vostru."},
                    {id: "1.21", text: "Cand va puneti ON-DUTY este obligatoriu sa fiti prezenti pe statie."},
                    {id: "1.22", text: "Nu aveti voie sa folositi chat-ul [/d] pentru a cere sa fiti ridicati in cazul in care sunteti in coma."},
                    {id: "1.23", text: "Masina de politie poate fi modificata doar la performanta, nu aveti voie sa modificati masina vizual"},
                    {id: "1.24", text: "Politistul poate refuza un apel doar daca este la o distanta foarte mare fata de acesta sau daca este personal redus in oras (2-3 politisti)."},
                    {id: "1.27", text: "Este permisa efectuarea manevrei de PIT-STOP in oras intre orele 23:30 - 07:00, dar nu la o viteza mai mare de 150km/h."},
                    {id: "1.28", text: "Perchezitia este interzisa in cazul in urmatoarele cazzuri: cetateanul are folii pe geamuri,, cetateanul a trecut pe rosu, cetateanul a condus imprudent, cetateanul este oprit pentru a ii fi verificat permisul de conducere, cetateanul are neoane."},						
                    {id: "1.29", text: "In cazul unei urmariri este STRICT INTERZIS sa se traga la rotile suspectului. Singurele cazuri in care este permis sa tragi la roti sunt acelea in care suspectul are COD 0 sau primesti permisiunea de la un membru din Conducere."},
                    {id: "1.30", text: "Zonele rau-famate din orasul Los Santos se afla in GROOVE-STREET / VESPUCCI / VINEWOOD. Pentru a putea patrula in afara orasului Los Santos sau in Zonele Rau Famate trebuie sa primesti permisiune de la un membru din Conducere."},					
                    {id: "1.31", text: "In cazul unei spargeri de banca nu este permis sa mergeti singuri, trebuie neaparat sa mearga 2 politisti (in unele cazuri 3) intr-o singura masina."},					
                    {id: "1.32", text: "Orice abatere de la regulament poate fi sanctionata cu rank-down/demitere/amenda."},			
                    {id: "1.33", text: "In cazul in care Politistii au murit in timpul unei razii, acestia nu mai au voie sa se intoarca dupa ce isi iau respawn (se considera RevangeKill)."},
                ]},
                {id: "Coduri de Asistenta", rules: [
                    {id: '', text: 'Ce inseamna CODURI DE ASISTENTA?:'},
                    {id: '', text: 'Se folosesc pentru a afla mult mai usor locatia unui Politist cu ajutorul unei comenzi (/bk /1/2/3) facuta pentru Politisti si Medici. Ideea comenzii este ca in momentul in care un politist scrie comanda la restul politistilor le apare pe GPS locatia.'},
                    {id: '', text: 'Coduri de asistenta:'},
                    {id: '', text: '➤ COD 0 - Este atunci cand este o situatie de urgenta. (Oameni inarmati, ofiter ranit, spargere de banca etc) Si este obligatoriu ca toate unitatile disponibile sa se prezinta la locatia data'},
                    {id: '', text: '➤ COD 1 - Este atunci cand un ofiter are nevoie de asistenta care sa vina OBLIGATORIU cu SIRENELE SI LUMINILE oprite.'},
                    {id: '', text: '➤ COD 2 - Este atunci cand un ofiter are nevoie de asistenta unui medic.'},
                    {id: '', text: '➤ COD 3 - Este atunci cand un ofiter are nevoie de asistenta care sa vina OBLIGATORIU cu SIRENELE si LUMINILE pornite.'},
                ]},
                {id: "Manevra PIT-STOP", rules: [
                    {id: '', text: 'Ce inseamna PIT-STOP?:'},
                    {id: '', text: '➤ Tehnica de Interventie in Urmarire", unde se foloseste pentru a incerca sa opreasca autovehiculul care incearca sa fuga de politie. Tehnica este una de mare risc unde pot fi ranite persoane, de aceea trebuie facuta cu atentie in afara oraselor deoarece exista riscul ca un pieton sa fie ranit in urma efectuarii acestei manevre.'},
                ]},
                {id: "Felony Stop", rules: [
                    {id: '', text: '➤ Un Felony Stop efectueaza atunci cand un politist are motive foarte serioase sa creada ca soferul sau pasagerul sunt suspecti de savarsirea unei crime grave sau ca suspectii pot fi inarmati sau foarte periculosi. Aceasta manevra se mai folosesti cand pe numarul masinii exista un mandat de arestare.'},
                ]},
                {id: "TRAFFIC STOP", rules: [
                    {id: '', text: 'Ce inseamna Traffic Stop?:'},
                    {id: '', text: 'Este atunci cand o persoana este trasa pe dreapta pentru un control de rutina sau pentru ca a fost surprins facand ilegalitati in trafic.'},
                ]},
                {id: "Razii Fabricare Ilegale", rules: [
                    {id: '', text: 'Regula "Razii Fabricare Ilegale" este atunci cand D.I.I.C.O.T. merg la o locatie ilegala de fabricare (Tigari / Etnobotanice etc)'},
                    {id: '', text: '➤ Pentru a se putea desfasura o razie trebuie sa fie minim 8 membrii care fac parte din subdepartamentul D.I.I.C.O.T..'},
                    {id: '', text: '➤ Numarul maxim de razii permis pe zi este de 3'},
                    {id: '', text: '➤ Coordonatorul D.I.I.C.O.T are dreptul sa cheme si Politistii la agent cu conditia ca acestia sa ramana in spate, Politistii nu au voie sa se bage peste trupele D.I.I.C.O.T. la actiune fara permisiunea acestora.'},
                ]},
                {id: "Razii Livrare Ilegale", rules: [
                    {id: '', text: 'Regula "Razii Livrare Ilegale" este atunci cand trupele Politistii fac o razie intr-o zona de livrare (Vespucci, Grove, Vinewood)'},
                    {id: '', text: '➤ Pentru a se putea desfasura o razie trebuie sa fie minim 2 unitati care sa participe la razie.'},
                    {id: '', text: '➤ Aveti dreptul la maxim o razie intr-un interval de 60 de minute'},
                    {id: '', text: '➤ O razie dureaza maxim 30 de minute.'},
                    {id: '', text: '➤ In cazul se primesc apeluri in zonele de livrare este permis sa se prezinte Agentii D.I.I.C.O.T. alaturi de Politie.'},
                ]},
                {id: "Nemarcata", rules: [
                    {id: '', text: 'Nemarcatele sunt masinile din dotare ale Politiei ( BMW Unmarked / Bugatti Unmarked etc ) care au din dotare lumini si sirene si mai sunt masinile personale care nu sunt echipate cu nici un fel de echipament, fiind folosite doar in anumite situatii speciale.'},
                    {id: '', text: '➤ Nu este permis sa folositi masinile nemarcate pentru Traffic Stop-uri'},
                    {id: '', text: '➤ Nu este permis sa folositi masinile nemarcate daca nu aveti echipamentul si uniforma pe voi.'},
                    {id: '', text: '➤ Doar persoanele ce detin un rank mai mare de Inspector pot folosii masinile personale pentru filaje.'}
               ]},
            ],

            'medici': [
                {id: "Regulament General", rules: [
                    {id: '1.1', text: 'Orice medic este obligat sa aiba statia pornita pe frecventa aferenta atunci cand sunt ON DUTY.'},
                    {id: '1.2', text: 'Deranjul colegilor prin intermediul statiei este total interzis!'},
                    {id: '1.3', text: 'Nu aveti voie sa folositi vehiculele factiunii in scopuri personale sau vehiculul personal pentru efectuarea apelurilor.'},
                    {id: '1.4', text: 'Elicopterul poate fi folosit doar in cazurile in care nu este disponibil accesul cu vehiculul.'},
                    {id: '1.5', text: 'Taser-ul poate fi folosit doar in cazul in care va este pusa integritatea in pericol sa a celorlalti oameni desigur dupa ce jucatorul a fost somat de cel putin 2 ori excluzand momentul in care acesta incearca sa scoata o arma de orice fel. Totodata folosirea lui este necesar atunci cand politia nu este prezenta.'},
                    {id: '1.6', text: 'Este strict interzis sa detineti obiecte ilegale sau arme de foc.'},
                    {id: '1.7', text: 'Nu aveti voie sa folositi echipamentul cand sunteti OFF DUTY.'},
                    {id: '1.8', text: 'Mituirea este strict interzia.'},
                    {id: '1.9', text: 'Atunci cand sunteti ON DUTY sunteti OBLIGATI sa folositi echipamentul corespunzator, sa folositi statia cat si vehiculele factiunii.'},
                    {id: '1.10', text: 'Medicii nu sunt si politisti, asadar daca sesizati o scena de violenta/agresiune anuntati politia, nu interveniti!'},
                    {id: '1.11', text: 'Este interzis sa faceti joburi ilegale.'},
                    {id: '1.12', text: 'Nu aveti voie sa folositi echipamentul/masinile OFF DUTY.'},
                    {id: '1.13', text: 'Medicii nu au voie sa patruleze cu politistii fara un scop bineintemeiat. Medicii vin la jafuri/interventii doar chemati de politisti.'},
                    {id: '1.14', text: 'In orice situatie de agresiune viata civilului este pusa pe primul loc, asadar civilul este primul salvat dupa ce interventia a avut loc, in timpul unei interventii politistul este primul ajutat.'},
                    {id: '1.15', text: 'Nu aveti voie sa salvati oameni OFF DUTY fara echipamentul corespunzator.'},
                    {id: '1.16', text: 'Gradul cel mai mare online este cel ascultat.'},
                ]},
            ],
        },
        extendedChapters: {},
    };
  },
  components: {
    "rules-Header": Header,
    "rules-Sidebar": Sidebar,
  },
  methods: {
    extendChapter(oneChapter, section) {
        var chapter = section + oneChapter;

        if (this.extendedChapters[chapter]) {
            this.extendedChapters[chapter] = false;
            return false;
        }

        this.extendedChapters[chapter] = true;
    },
  },
  async created() {
    let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        backgroundColor: '#00000090',
        transition: 'fade',
        enforceFocus: true,
        opacity: 0.9,
        loader: 'dots',
        color: '#0098ff',
    });
    setTimeout(() => {
        loader.hide()
    }, 2000)
}
}