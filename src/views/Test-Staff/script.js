import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue';

export default {
  data() {
    return {
        // data
        IsUserAdmin: 0,
        adminId: 0,

        totalQuestions: 0,
        extendedChapters: {},
        results: {},
        score: {
            correct: 0,
            wrong: 0,
        },
        possibleQuestions: [
            {id: "Ce inseamna MetaGaming (MG) ? ( 6 EXEMPLE", description: [
                {text: "Raspuns:"},
                {text: "MetaGaming-ul reprezintă folosirea informațiilor OOC în scop IC"},
                {text: "Exemplu:"},
                {text: "➤ Esti cu un prieten pe Discord in locatii complet diferite, el este prins de cineva si omorat intr-o zona pe care tu IC nu o cunosti dar prietenul tau iti spune locatia pe Discord si tu te duci sa il duci la spital."},
            ]},
            {id: "Ce inseamna PowerGaming (PG) ? ( 12 EXEMPLE )", description: [
                {text: "Raspuns:"},
                {text: "PowerGaming sau prescurtat PG reprezinta folosirea unor puteri supranaturale sau neacordarea de sanse egale ambelor parti printr-un RolePlay."},
                {text: "Exemple:"},
                {text: "➤ Cand nu simulezi accidentele rutiere."},
                {text: "➤ Condusul cu 2 sau mai mult de 2 roti sparte cu o viteza mai mare de 20 Km/h."},
            ]},
            {id: "Ce inseamna Revange Kill (RK) ?", description: [
                {text: "Raspuns:"},
                {text: "Revenge Kill-ul reprezintă atunci când un jucător îl omoară pe altul, iar după ce primește respawn, se întoarce după același jucător cu scopul de a îl omorî în mai puțin de jumătate de ora."},
                {text: "Exemple:"},
                {text: '➤ Ai participat la un roleplay in care tu ai fost omorat de catre cineva, nu primesti revive de la un medic si iti iei respawn la spital. In momentul in care ai primit revive te duci fix in locatia unde ai murit pentru a il omora si tu pe el.'},
            ]},
            {id: "Ce inseamna Mixing (MX) ? ( 2 EXEMPLE )", description: [
                {text: "Raspuns:"},
                {text: "Mixing-ul reprezinta transmiterea actiunilor/informatiilor IC in chatul global al server-ului."},
                {text: "Exemple:"},
                {text: '➤ Esti la sectia de Politie si scrii pe chat-ul global de pe server: “Poate sa vina cineva sa ma ia si pe mine de la sectie?”.'},
                {text: '➤ Atunci cand te folosesti de chat-ul global pentru a vinde/cumpara anumite chestii.'},
            ]},
            {id: "Ce inseamna Random Death Match (RDM) ?", description: [
                {text: "Raspuns:"},
                {text: "Random Death Match-ul reprezintă când 2 sau mai mulți jucători au început să se împuște ca și cum ar fii într-un joc fără un scop Roleplay."},
            ]},
            {id: "Ce inseamna Character Kill (CK) ?", description: [
                {text: "Raspuns:"},
                {text: "Character Kill-ul sau prescurtat CK reprezintă uciderea unui jucator. Daca un jucator primeste CK, acesta isi va putea schimba identitatea/buletinul si nu va mai putea juca cu acel nume."},
                {text: "Exemple:"},
                {text: '➤ Pentru a acorda un CK, jucatorul care doreste sa o faca trebuie sa aiba un motiv foarte bun.(de exemplu, intr-o mafie, un asociat se duce la politie si da informatii despre mafia in care este - respectivul poate primi CK daca mafia afla ce a facut). Totodata, roleplay-ul facut pentru un CK trebuie sa fie complex.”'},
                {text: '➤ In cazul in care comite infractiuni care echivaleaza inchisoarea pe viata.'},
                {text: '➤ In cazul in care un jucator tradeaza o anumita grupare/organizatie si ia legatura cu alta factiune pentru a acorda informatii despre respectiva grupare/organizatie.'},
                {text: '➤ In cazul in care jucatorul scrie [/me moare].'},                         
                {text: '➤ Pentru acordarea unui CK aveti nevoie de acordul unui membru High Staff'},                
            ]},
            {id: "Ce inseamna RolePlay (RP) ?", description: [
                {text: "Raspuns:"},
                {text: "Roleplay sau prescurtat RP reprezintă simularea sau practicarea une-i vieti reale dar in situatia noastra e o viata virtuala, pe scurt reprezina simularea unei vieti reale intr-un mediu virtual."},
            ]},
            {id: "Ce inseamna In Character (IC) ?", description: [
                {text: "Raspuns:"},
                {text: "Acest termen reprezintă toate informatiile si actiuniile facute/gasite de noi in joc. Pentru reprezentarea informatiilor sau actiuniilor facut de noi in joc folosim VoiceChat-ul si comanda [/me]."},
            ]},
            {id: "Ce inseamna Out Of Character (OOC) ?", description: [
                {text: "Raspuns:"},
                {text: "Acest termen reprezintă toate actiuniile sau informatiile facute in viata REALA si se reprezinta cu ajutorul unor chat-uri specifice. (Chat in Game/Discord/Skype etc)."},
            ]},
            {id: "Ce inseamna Player Kill (PK) ?", description: [
                {text: "Raspuns:"},
                {text: "Acest termen reprezintă resetarea informatiilor IC cu persoanele aflate in acel roleplay. Mai pe intelesul tuturor in momentul in care mori si iti iei respawn la spital. Acela este momentul in care se uita toate informatiile cu persoanele respective care s-au aflat la roleplay-ul respectiv."},
            ]},
            {id: "Ce inseamna Bug Abuse ?", description: [
                {text: "Raspuns:"},
                {text: "Daca gasiti sau aveti cunostinta de unul sau mai multe bug-uri existente pe server, anuntati de indata, fie facand un ticket direct pe server si anuntand un admin de bug-ul gasit, fie pe Discord printr-un ticket/mesaj unui admin. In niciun caz nu este permisa abuzarea de eventualele bug-uri descoperite."},
            ]},
            {id: "Ce inseamna Olympic Swim (OS) ?", description: [
                {text: "Raspuns:"},
                {text: "Este interzisa fuga de politie prin apa, inotand. Acest lucru este considerat Olympic Swim pentru ca nu poti inota la nesfarsit, in mod normal obosesti."},
            ]},
            {id: "Ce inseamna Chicken-Run (CR) ?", description: [
                {text: "Raspuns:"},
                {text: "Chicken-Run este atunci cand un jucator fuge dintr-o parte in alta astfel incat sa evite gloantele, ceea ce este non roleplay si interzis. Aceasta regula se aplica si in cazul unui brawl (fight-bataie in grup). Atunci cand are loc un brawl, nu aveti voie sa fugiti si sa loviti cu bata."},
            ]},
            {id: "Ce inseamna NO-FEAR (NF) ? ( 6 EXEMPLE )", description: [
                {text: "Raspuns:"},
                {text: "NO-FEAR-ul sau prescurtat (NF) reprezintă actiunile unui jucator care alege sa nu roleze frica atunci cand este necesar."},
                {text: "Exemple:"},
                {text: '➤ Esti intr-o zona rau famata a orasului, niste persoane dubioase se tin dupa tine si intr-o zona mai retrasa scot arma la tine si incep sa te ameninte cu ea iar tu in momentul acela incepi sa il iei la pumni.'},
            ]},
            {id: "Ce inseamna COP FEAR (CF) ? ( 3 EXEMPLE )", description: [
                {text: "Raspuns:"},
                {text: "COP FEAR sau prescurtat CF este o ramura din regula NO-FEAR si face referinnta la persoanele care nu au frica de politisti. Mai pe intelesul tuturor trebuie sa aveti un comportament civilizat si respectuos fata de Politisti indiferent daca faceti parte dintr-o Organizatie sau nu."},
                {text: "Exemple:"},
                {text: '➤ Este strict interzis sa luati la misto un politist indiferent de situatie.'},
                {text: '➤ Este strict interzis sa va impuscati / sa va bateti cu DIICOT-UL deoarece in mod normal ar trebui sa rolati frica cand ii vedeti si sa fugiti fara sa va mai uitati in spate sau sa va predati. (Aceasta regula nu se aplica la jafuri de banca / in zonele rau famate in intervalul orar 20 - 08:00 si nu se mai aplica regula in cazul in care va aflati la locatiile ilegale de (Droguri / Etnobotanice / etc) sau in cazul in care va aflati la livrat.).'},
                {text: '➤ Este strict interzis ca in timpul urmariri sa abuzati de faptul ca politia nu are voie sa mearga la locatiile ilegale.'},     
            ]},
            {id: "Ce inseamna Trolling ?", description: [
                {text: "Raspuns:"},
                {text: "Trolling-ul pe server este interzis. Prin trolling se intelege ca unul sau mai multi jucatori nu au dispozitia necesara desfasurari unei actiuni roleplay si nu fac altceva decat sa caute atentie, sa se bage in seama cu alti jucatori cu scopul de a ii face pe acei jucatori sa interactioneze chiar daca acestia nu isi doresc acest lucru. Practic, respectivul sau respectivii nu fac decat sa provoace alti jucatori cu scopul de a crea oarecare conflicte sau pentru a se amuza."},
            ]},
            {id: "La ce se refera regula Reclama ?", description: [
                {text: "Raspuns:"},
                {text: "Orice tip de reclama adusa altor comunitati pe acest server este interzisa, atat pe server cat si pe Discord."},
            ]}, 
            {id: "Ce inseamna DROP & KILL (DK) ?", description: [
                {text: "Raspuns:"},
                {text: "Este interzis sa fortezi o persoana sa arunce toate bunurile de pe el, iar dupa sa il omori. Daca l-ati fortat sa arunce trebuie sa il lasati in viata, iar daca vreti sa il omorati nu aveti voie sa il puneti sa arunce bunurile de pe el."},
            ]},
            {id: "Ce inseamna ROB $ KILL (DK) ?", description: [
                {text: "Raspuns:"},
                {text: "Este interzis sa jefuiesti o persoana, iar dupa sa o omori deoarece in realitate in cele mai multe cazuri cand un hot vrea sa te jefuiasca nu o sa mai riste niciodata sa te si omoare."},
            ]},
            {id: "La ce se refera regula Limbaj Vulgar OOC ?", description: [
                {text: "Raspuns:"},
                {text: "Limbajul vulgar, injruile, textele cu tenta rasista etc. sunt interzise pe chaturile OOC."},
                {text: "Incercam sa mentionam un limbaj cat mai decent astfel incat nimeni sa nu fie deranjat de limbajul mai “bogat” al unora."},
            ]},
            {id: "Explica tot ce stii despre Job-urile Legale.", description: [
                {text: "Raspuns:"},
                {text: "➤ Este interzis sa jefuiesti in timpul in care iti faci jobul sau esti cu masina de job"},
                {text: "➤ Este interzis sa rapesti in timpul in care iti faci jobul sau esti cu masina de job"},
                {text: "➤ Este interzis sa faci joburile cu masina personala (Doar la joburile care au masina de job)"},
                {text: "➤ Este interzis sa folosesti masina de job in scopuri personale"},
            ]},
            {id: "La ce se refera regula Interpretarea Regulamentului ?", description: [
                {text: "Raspuns:"},
                {text: "Interpretarea regulilor din regulamentul server-ului este strict interzisa. Nu puteti interpreta dupa bunul plac aceste reguli, doar pentru a va favoriza in momentul in care sunteti pus in fata unei situatii neplacute in care ati incalcat una dintre reguli. Chiar daca anumite reguli lasa loc de interpretare, staff-ul server-ului sunt cei care decid in ce conditii se vor aplica sanctiunile."},
            ]},
            {id: "Explica regula Amenintari.", description: [
                {text: "Raspuns:"},
                {text: "Pretinderea ca detineti functii, ca aveti relatii cu membri din staff-ul server-ului sau amenintari cu interventia membrilor staff-ului sunt strict interzise."},
            ]},
            {id: "Explica regula Instigare.", description: [
                {text: "Raspuns:"},
                {text: "Instigarea altor persoane la incalcarea oricărei reguli din regulamentul server-ului va fii pedepsita."},
            ]},
            {id: "Explica tot ceea ce stii despre regula Rapiri.", description: [
                {text: "Raspuns:"},
                {text: "➤ Este strict interzis sa rapesti o persoana singur in timp ce conduci masina."}, 
                {text: "Explicatie: Este considerat fail deoarece singur nu ai cum sa fii atent la persoana pe care ai rapito, sa mai tii si arma dar sa mai si conduci. Asa ca pentru a rapi o persoana cu masina este nevoie de minim 2 persoane."},
                {text: "➤ Este interzis sa rapesti o persoana si sa ceri rascumparare pe acea persoana de la Politie."},
            ]},
            {id: "Explica tot ce stii despre regula PIT-STOP.", description: [
                {text: "Raspuns:"},
                {text: "Ce inseamna PIT-STOP?: Este o manevra de oprire a masinii prin intrarea in lateral sau in spatele masini pe care vreti sa o opriti."},
                {text: "➤  Este interzis sa faceti manevra PIT-STOP la o viteza mai mare de 150 Km/h deoarece intr-o situatie reala daca faceti aceasta manevra ar fii sanse extrem de mari ca acea persoana sa moara."},
                {text: "➤ Este interzis sa faceti manevra PIT-STOP cu anumite clase de masini exceptand masinile de la CLASA C / CLASA B / CLASA LOWRIDER / Masini Mafie, deoarece in realitate nimeni nu si-ar strica masina de sute de mii de euro doar ca sa il opreasca pe unu."},
            ]},
            {id: "La ce se refera regula Tranzactii OOC.", description: [
                {text: "Raspuns:"},
                {text: "Nu efectuati plati OOC catre jucatori sau membrii ai staff-ului in schimbul unor bunuri IC (bani, case, masini, etc). Cei care incalca aceasta regula vor fi banati permanent."},
            ]},
            {id: "Explica tot ce stii despre Numele IN-CHARACTER (IC) INTERZISE.", description: [
                {text: "Raspuns:"},
                {text: "➤ Nume celebre (Numele unei persoane cunoscute in intreaga lume, o anumita cultura sau doar o tara)"},
                {text: "➤ Nume nerealiste."},
                {text: "➤ Nume puse pentru a starni amuzamentul (Tom Beron, Lin Jon Kur, Iamil Angura, etc)"},
            ]},
            {id: "Explica tot ce stii despre Numele OUT-OF-CHARACTER (OOC) INTERZISE.", description: [
                {text: "Raspuns:"},
                {text: "➤ Nu aveti voie sa folositi nume OOC Vlad arenblabla.ro sau chestii de genul nu se accepta reclama pe server prin nume sau alte metode."},
            ]},
            {id: "Explica tot ce stii despre regula Haine interzise.", description: [
                {text: "Raspuns:"},
                {text: "➤ Este stric interzis sa va imbracati cu haine de Politist daca nu faceti parte din factiune."},
                {text: "➤ Este stric interzis sa va imbracati cu haine de Medici daca nu faceti parte din factiune"},
                {text: "➤ Este stric interzis sa folositi haine/costume care lumineaza"},
                {text: "➤ Este stric interzis sa folositi masti non-rp de la magazinul de haine."},
                {text: "Exemplu: Masca de Cal / Masca de Iepure, etc. Sunt permise doar mastile de genul Bandanda / Cagula, in general masti care nu instiga la TROLL."},
            ]},
            {id: "Explica tot ce stii despre regula Actiuni Teroriste.", description: [
                {text: "Raspuns:"},
                {text: "➤ Este interzis sa faci roleplay de acest gen. Trebuie sa discuti despre fiecare detaliu cu un membru staff (Moderator+) si fiecare lucru oe care vrei sa-l faci in actiunea respectiva. De asemenea daca vi se ofera permisiunea un memebru staff va urmari toata actiunea roleplay care urmeaza sa fie efectuata."},
            ]},
            {id: "Explica tot ce stii despre Evenimentele Organizate", description: [
                {text: "Raspuns:"},
                {text: "➤ Orice adunare unde se strange o masa de oameni (petreceri, protest, conferinta de presa, car meeting, competiti, etc) este considerata un eveniment, iar deranjarea lui sau influentarea lui negativa va fi interzisa."},
            ]},
            {id: "Explica tot ce stii despre Roleplay Scarbos/Dezgustator.", description: [
                {text: "Raspuns:"},
                { text: "➤ Abuzu sexual (violul). canibalismul , necrofilia , pedofilia si alte tipuri de roleplay dezgustator sunt permise pe server doar cu acordul OOC al ambelor parti implicate in actiune."},
            ]},
            {id: "Explica tot ce stii despre regula AFK/ REFUZ ROLEPLAY.", description: [
                {text: "Raspuns:"},
                {text: "➤ Refuzul unei actiuni roleplay reprezinta refuzul unui jucator de a face roleplay cu alti jucatori, ingreunand astfel actiunile roleplay ale acestora, prin parasirea jocului (/quit sau trecerea jocului in bara - AFK)."},
                {text: "➤ Este interzis sa stati AFK mai mult de 5 minute in timp ce sunteti ON-DUTY ca Politist/Medic deoarece se poate considera AFK pentru payday si puteti fi sanctionati ca atare."},
                {text: "➤ Daca un jucator este AFK, nu aveti voie sa interactionati cu el in niciun fel, aceasta regula se aplica doar in cazul in care jucatorul a fost AFK inainte sa incepeti o anumita actiune cu el, daca jucatorul respectiv s-a pus AFK in timpul actiunii, atunci acesta poate fi reclamat."},
                {text: "➤ De asemenea, este interzis orice fel de program anti-afk, blocarea tastelor sau orice alta metoda pentru a nu lua kick de la sistemul ANTI-AFK"},
            ]},
            {id: "Explica tot ce stii despre regula Condus Non-Roleplay.", description: [
                {text: "Raspuns:"},
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
            ]},
            {id: "Explica tot ce stii despre WARN-URI.", description: [
                {text: "Raspuns:"},
                {text: "➤ Odata cu acumularea a 3 avertismente (warn-uri) veti fi banati automat. Warn-urile sunt acordate jucatorilor care incalca anumite reguli si in functie de decizia admin-ului primesc sau nu warn."},
            ]},
            {id: "Explica tot ce stii despre regula COMA.", description: [
                {text: "Raspuns:"},
                {text: "In momentul in care esti in coma trebuie sa respecti urmatoarele reguli:"},
                {text: "➤ Este strict interzis sa vorbesti in timp ce esti in COMA"},
                {text: "➤ Este strict interzis sa vorbesti pe “cascuta” in timp ce esti in COMA"},
                {text: "➤ Este strict interzis sa trimiti sau sa suni pe cineva cand esti in COMA"},
                {text: "➤ Daca esti in COMA in urma unui accident rutier ai voie sa suni la medic dupa ora 00:00 pana la ora 10:00 si sa vorbesti la persoana A 3-A."},
            ]},
            {id: "Explica tot ce stii despre regula [/cara]/[/caraprieten].", description: [
                {text: "Raspuns:"},
                {text: "In momentul in care vrei sa iei pe cineva in /cara trebuie sa respecti urmatoarele reguli:"},
                {text: "➤ Este strict interzis sa alergi cu cineva in /cara indiferent daca sunteti mai multi care faceti rp ca il carati"},
                {text: "➤ Este permis sa iei pe cineva in /cara fara sa faci rp deoarece oricum se face o animatie."},
            ]},
            {id: "Explica tot ce stii despre regula SCAM / INSELACIUNI.", description: [
                {text: "Raspuns:"},
                {text: "In momentul in care aveti de gand sa dati SCAM unei persoane trebuie sa respectati urmatoarea regula:"},
                {text: "➤ Este strict interzis ca SCAM-Ul sa fie mai mare de 5.000$ in bunuri sau bani."},
                {text: "ATENTIE!"},
                {text: "➤ Nu se considera SCAM daca imprumutati la cineva de buna voie o masina si nu o mai primiti inapoi."},
                {text: "➤ Nu se considera SCAM daca imprumutati pe cineva de buna voie o suma de bani si nu o mai primiti inapoi"},
                {text: "➤ Nu se considera SCAM afacerile cu vehicle/case folosind bani impachetati."},
            ]},  
            {id: "Explica tot ce stii despre regula Ostatic.", description: [
                {text: "Raspuns:"},
                {text: "➤ Este interzis sa luati ostatic o persoana random fara sa existe un motiv bine intemeiat."},
                {text: "➤ Este interzis sa tineti pe cineva ostatic fara sa cereti ceva pe el mai mult de 2 ore. In cazul in care nu aveti cu cine sa vorbiti pentru intelegere, aveti dreptul sa tineti ostaticul pana va raspunde cineva"},
                {text: "➤ Este interzis sa cereti pe un ostatic o suma mai mare de 200.000$ in bani sau bunuri."},
                {text: "➤ Este interzis sa aveti pretentii mari precum pe baza la un ostatic ca un lider sau o intreaga organizatie sa prezinte fortat o locatie"},
                {text: "➤ Este obligatoriu ca dupa o intelegere/negocieri pe baza unui ostatic sa va tineti de cuvant si sa nu fie o inselaciune la mijloc. Este valabil de ambele parti implicate"},
                {text: "➤ Este interzis sa aveti pretentii din partea politiei precum sa plece toate echipajele, sa lase toti armele sau exagerari foarte mari."},
                {text: "➤ Este interzis la jafuri de Banca / Bijuterii sa aveti ostatic."},
            ]},             
            {id: "Explica tot ce stii despre regula Live-Streams.", description: [
                {text: "Raspuns:"},
                {text: "➤ Nu aveți voie sa instigati la ura prin intermediul subscriberilor"},
            ]},
            {id: "Explica tot ce stii despre regula HOME.", description: [
                {text: "Raspuns:"},
                {text: "➤ Folosirea tastei HOME pentru a vedea cine este persoana respectivă este strict interzisa."},
            ]},
            {id: "Explica tot ce stii despre regula Anunțuri.", description: [
                {text: "Raspuns:"},
                {text: "➤ Anunturile de tip: Caut familie/mafie/săgeți. Vand droguri/jucarii (poliția nu vede/deepweb) Sunt total interzise."},
            ]},
            {id: "Explica tot ce stii despre regula Ban Evading.", description: [
                {text: "Raspuns:"},
                {text: "➤ Ban Evading-ul reprezinta incercarea de a 'fenta' ban-ul, mai exact cand aveți ban PERMANENT pe un cont sa va creati altul pentru a va juca pe server, acest lucru se pedepsește cu BAN IP."},
            ]},
            {id: "Explica tot ce stii despre regula MTL-uri/REMORCI.", description: [
                {text: "Raspuns:"},
                {text: "➤ Nu aveti voie sa folositi remorcile/mtl-urile in alt context diferit de cel pentru care aceastea au fost făcute."},
            ]},
            {id: "Ce inseamna CAR RAM ?", description: [
                {text: "Raspuns:"},
                {text: "Car Ram-ul reprezinta busirea unui autovehicul într-un mod repetitiv fără a rola."},
            ]},
            {id: "Ce inseamna CAR SURF ?", description: [
                {text: "Raspuns:"},
                {text: "Car Surf-ul reprezinta stationarea pe un vehicul în timp ce acesta se afla în mișcare."},
            ]},
            {id: "Ce inseamna NINJA JACK ?", description: [
                {text: "Raspuns:"},
                {text: "Ninja Jack-ul reprezinta furtul unui vehicul fara a intretine un roleplay."},
            ]},
            {id: "Explica tot ce stii despre regula CAUCIUCURI SPARTE.", description: [
                {text: "Raspuns:"},
                {text: "Te poți deplasa cu o masina ce are 1 cauciuc spart cu viteza de 80km/h, cu 2 cauciucuri sparte cu viteza de 20km/h, în cazul în care numărul roților sparte depășește de 2 este strict interzis sa te mai deplasezi cu aceasta."},
            ]},
            {id: "Explica tot ce stii despre regula STREAM-SNIPE.", description: [
                {text: "Raspuns:"},
                {text: "Stream-snipe-ul este total interzis, acest lucru reprezinta urmarirea unui jucator care este Live la acel moment pe server."},
            ]},
            {id: "Ce inseamna deschidere OOC in IC DESCHIDERE OOC IN IC ? ( 5 EXEMPLE )", description: [
                {text: "Raspuns:"},
                {text: "Deschidere OOC in IC se reprezinta mentionarea termenilor OOC intr-un roleplay."},
                {text: "Nu aveti voie sa folositi [/me] pentru a scrie anumite chestii OOC."},
                {text: "EXEMPLE:"},
                {text: "➤ Esti admin?"},
                {text: "➤ Esti ingeras?"},
                {text: "➤ Permiti OOC?"},
                {text: "➤ Permiti Chineza?"},
                {text: "➤ [/me permiti chineza?]"},
            ]},
            {id: "Explica regula BOMBARDIER.", description: [
                {text: "Raspuns:"},
                {text: "Regula BOMBARDIER reprezinta intimidarea/jignirea/provocarea unui jucator fără, cautarea de scandal cu toate lumea fara un anumit scop sau total random."},
            ]},
            {id: "Explica tot ce stii despre regula CORUPTIE.", description: [
                {text: "Raspuns:"},
                {text: "Corupția nu este permisă nici IC nici OOC. La ce se referă aceasta regula? Sa nu dai caziere, amenzi, dacă ești polițist/medic cand ieși din department să profiți de bunurile oferite de departament gratuit și să pleci cu prelata de bandaje/armuri. Sau sa plecati cu armele departamentului. Tot la corupție se încadrează și cerutul de mită/practicarea de acțiuni ilegale cat timp faci parte dintr-un departament. Cu ce se sancționează acest lucru? Cu ban 14 zile, iar în funcție de caz și cu CK."},
                {text: "Instigarea la corupție este și ea sancționată, nu aveți voie sa instigati medici/polițiști la corupție"},
            ]},
            {id: "Explica tot ce stii despre CAMP.", description: [
                {text: "Raspuns:"},
                {text: "Nu aveți voie sa campati morții pentru a aștepta alte echipaje de poliție/medici ca sa ii omorati. Nu aveți voie sa campati locațiile ilegale."},
            ]},
            {id: "Explica regula TOMBEROANE.", description: [
                {text: "Raspuns:"},
                {text: "Nu aveți voie sa băgați oameni morți în tomberoane. Nu aveți voie sa ieșiți din tomberon cu armă în mână."},
            ]},
            {id: "Explica tot ce stii despre regula MODURI INTERZISE. ( 3 EXEMPLE )", description: [
                {text: "Raspuns:"},
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
            {id: "Ce inseamna Kill & Rob (KR) ?", description: [
                {text: "Raspuns:"},
                {text: "KILL & ROB, prescurtarea (RB). Acest terment reprezinta jefuirea unui jucator dupa ce l-ai omorat tu sau colegii tai."},
            ]},
            {id: "Ce inseamna FREE-CHAT ?", description: [
                {text: "Raspuns:"},
                {text: "Chat-ul este strict pentru intrebari si nelamuriri, daca folositit chat-ul GLOBAL de pe joc in alte contexte veti fi sanctionati cu mute."},
            ]},
            {id: "Explica regula Sticky Bomb/Molotov.", description: [
                {text: "Raspuns:"},
                {text: "Nu aveti voie sa aruncati Sticky Bomb/Molotov inauntrul bancii/bijuteriei, in caz contrar cel care a aruncat va primii CK. (Atunci cand incercati sa aruncati Molotov prin usile bancii/bijuteriei afara si se inchide usa brusc nu se ia in considerare.)"},
                {text: "Nu aveti voie sa aruncati Sticky Bomb pe trotuarul de la banca sau pe aleea de la bijuterie, in caz contrar cel care a aruncat va primii CK."},
                {text: "Nu aveti voie sa aruncati Sticky Bomb in interiorul oricarei cladiri, in caz contrar cel care a aruncat va primii CK. (Aceasta regula nu se ia in considerare atunci cand efectuati o actiune terorista aprobata de catre un membru High Staff.)"},
                {text: "Daca ati aruncat un Molotov inauntru unei cladiri aveti 5 minute din momentul in care primul Molotov a fost aruncat sa evacuati cladirea, in caz contrar toate persoanele care sunt alaturi de cel care a aruncat cu Molotov-ul in cladire si nu au reusit sa evacueze cladirea vor primii CK. (Persoanele in COMA  nu se iau in considerare.)"},
            ]},
            {id: "Explica tot ce stii despre regula URMARIRE.", description: [
                {text: "Raspuns:"},
                {text: "Daca urmarirea a inceput intr-o zona publica nu aveti voie sa va duceti in zonele rau famate."},
            ]},
            {id: "Explica tot ce stii despre regula Suferințele (IC) cât și cele (OOC).", description: [
                {text: "Raspuns:"},
                {text: "Suferintele sunt strict interzise OOC cat si IC"},
                {text: "EXEMPLE:"},
                {text: "➤ Culcat slabule"},
                {text: "➤ Sunteti slabi"},
                {text: "➤ Sit Dog"},
                {text: "➤ La cotet"},
                {text: "➤ Tot culcati, tot culcati?"},
            ]},
            {id: "Explica tot ce stii despre regula Jafuri Persoane.", description: [
                {text: "Raspuns:"},
                {text: "➤ Intervalul orar in care puteti jefuii este 21:00 - 07:00"},
                {text: "➤ Nu aveti voie sa jefuiti persoanele care fac job legal"},
                {text: "➤ Nu aveti voie sa jefuiti Politisti / Medici ON DUTY"},
                {text: "➤ Nu aveti voie sa fortati persoane sa scoata bani din Banca."},
                {text: "➤ Aveti dreptul de a jefuii absolut tot ce are persoana respectiva in inventar, mai putin obiectele de job legal."},
                {text: "➤ Aveti dreptul de a jefuii absolut tot ce are in portbagaj / torpedo."},
                {text: "➤ Nu aveti voie sa fortati persoane sa scoata masini din garaj pentru a le controla, respectiv jefuii."},
            ]},
            {id: "Ce inseamna Vehicle Death Match (VDM) ?", description: [
                {text: "Raspuns:"},
                {text: "Vehicle Death Match-ul reprezinta actiunea in care un jucator omoara alt jucator folosind o masina fara un scop roleplay."},
            ]},
            {id: "Ce inseamna Cop Bait ?", description: [
                {text: "Raspuns:"},
                {text: "Cop Bait-ul reprezinta actiunea in care un jucator forteaza roleplay-ul cu un politist."},
                {text: "Exemple:"},
                {text: "➤ Astepti la rosu cu politistul langa tine si treci pe rosu."},
                {text: "➤ Faci driftur in fata politistului."},
                {text: "➤ Faci burnout in fata sectiei de politie."},
            ]},
            {id: "Explica regula Jafuri Pacific.", description: [
                {text: "➤ Nu aveti voie sa da-ti jaf la Pacific in mai putin de 8 persoane."},
                {text: "➤ Nu aveti voie sa luati ostatici la jaf la Banca"},
                {text: "➤ Nu aveti voie sa folositi Sticky Bomb / Molotov in interiorul Bancii"},
                {text: "➤ Nu aveti voie sa luati ostatici pentru a ii da la schimb pentru persoanele prinse la Jaf Banca."},
            ]},
            {id: "Explica regula Jafuri Bijuterie.", description: [
                {text: "➤ Nu aveti voie sa da-ti jaf la Bijuterie in mai putin de 4 persoane."},
                {text: "➤ Nu aveti voie sa luati ostatici la jaf la Bijuterie"},
                {text: "➤ Nu aveti voie sa folositi Sticky Bomb / Molotov in interiorul Bijuteriei"},
                {text: "➤ Nu aveti voie sa luati ostatici pentru a ii da la schimb pentru persoanele prinse la Jaf Bijuterie."},
            ]},
            {id: "Explica regula ACTIUNI ILEGALE IN ZONE PUBLICE.", description: [
                {text: "➤ Actiunile ilegale in zonele publice sunt strict interzise."},
                {text: "➤ Aveti voie sa rolati ca va urcati la cineva in masina si sa rolati ca ii puneti cutitu/pistolul la cap/burta doar daca masina are geamuri fumurii cel putin pe geamurile din fata."},
                {text: '➤ Nu aveti voie sa va urcati la cineva in masina si sa rolati ca ii puneti cutitu/pistolul la cap/burta in fata sectiei de politie/spital.'},
            ]},                                       
        ],
    };
  },
  components: {
    "TestStaff-Header": Header,
    "TestStaff-Sidebar": Sidebar,
  },
  methods: {
    async hasUserAdmin() {
        this.$axios.get("http://localhost:5000/api/admin", { withCredentials: true }).then((response) => {
            if (response.data.isAdmin) {
                this.IsUserAdmin = response.data['adminLvl'];
                this.adminId = response.data['adminId'];
            } else {
                this.IsUserAdmin = 0;
            }
        });
    },
    extendChapter(chapter, section) {
        if (this.extendedChapters[chapter]) {
            this.extendedChapters[chapter] = false;
            return false;
        }

        this.extendedChapters[chapter] = true;
    },

    shuffleTest(k) {
        k.sort(() => Math.random() - 0.5);
    },

    async createTest() {
        this.shuffleTest(this.possibleQuestions);
        return this.possibleQuestions;
    },

    async finishTest(forced) {
        if ((this.totalQuestions - (this.score.wrong + this.score.correct)) == this.totalQuestions){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                confirmButtonText: 'Am înțeles!',
                text: 'Nici o intrebare nu a fost marcata, trebuie sa completezi testul inainte de a-l finaliza :(',
            }).then(() => {
                this.createTest();
            });
            
            return false;
        }
        
        if (((this.score.wrong + this.score.correct) < this.totalQuestions) && !forced){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                confirmButtonText: 'Am înțeles!',
                text: 'Hey! Nu ai raspuns la toate intrebarile, nu poti finaliza testul pana cand cel testat nu va raspunde la toate intrebarile generate in test.',
            });
            
            return false;
        }

        var succeded = this.score["wrong"] < 3;
        var currentWrongs = this.score.wrong;
        var currentOk = this.score.correct;

        this.extendedChapters = {};
        this.results = {};
        this.score = {wrong: 0, correct: 0};

        if (!succeded){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonText: 'Am înțeles!',
                text: 'Din păcate jucătorul nu a reușit să treacă testul staff, poți vedea scorul mai jos.',
                footer: `Scor: ${currentOk} răspunsuri corecte / ${currentWrongs} greșeli`
            }).then(() => {
                this.createTest();
            });

            return false;
        }

        Swal.fire({
            icon: 'success',
            title: 'Woohoo...',
            confirmButtonText: 'Am înțeles!',
            html: 'Jucătorul testat a reușit să treacă testul staff, îi poți vedea scorul mai jos. Urează-i succes!<br><br>Important: Nu uită să contactezi un administrator pentru a-i oferi gradul de staff.',
            footer: `Scor: ${currentOk} răspunsuri corecte / ${currentWrongs} greșeli`
        }).then(() => {
            this.createTest();
        });
    },

    markQuestion(question, result) {
        this.results[question] = result;
        this.score[result]++;

        if (this.score["wrong"] >= 3){
            return this.finishTest(true);
        }            
    },

    changeMark(question) {
        this.score[this.results[question]]--;
        this.results[question] = null;
    
        if (this.score["wrong"] >= 3){
            return this.finishTest(true);
        }  
    },
},
async created() {
    let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        backgroundColor: '#00000090',
        transition: 'fade',
        enforceFocus: true,
        opacity: 0.6,
        loader: 'dots',
        color: '#0098ff',
    });
    setTimeout(() => {
        loader.hide()
    }, 1000)

    this.hasUserAdmin();
    this.createTest().then((result) => {
        this.totalQuestions = result.length;
    });
}
}