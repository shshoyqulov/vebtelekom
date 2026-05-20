const SAVOLLAR = [
    {
        savol: "Optik kabellar vazifasiga ko‘ra qanday turlarga bo‘linadi?",
        variantlar: [
            "magistral, hududiy va shahar kabellariga",
            " magistral va hududiy kabellarga",
            "shahar va suv osti kabellariga",
            " stansiya va liniya kabellariga"
        ],
        togri: "magistral, hududiy va shahar kabellariga"
    },

    {
        savol: "Kvarts-polimer turdagi optik tolada qanday materiallar ishlatiladi?",
        variantlar: [
            "O‘zak kvartsdan, qobiq polimerdan tayyorlanadi",
            "O‘zak polimerdan, qobiq kvartsdan tayyorlanadi",
            "O‘zak ham, qobiq ham kvartsdan tayyorlanadi",
            "O‘zak ham, qobiq ham polimerdan tayyorlanadi"
        ],
        togri: "O‘zak kvartsdan, qobiq polimerdan tayyorlanadi"
    },

    {
        savol: "Liniya kabellari uchun asosan qaysi turdagi optik tolalar qo‘llaniladi?",
        variantlar: [
            "Kvarts-kvarts turdagi optik tolalar",
            "Kvarts-polimer turdagi optik tolalar",
            " Polimer tolalar",
            "Metall qobiqli tolalar"
        ],
        togri: "Kvarts-kvarts turdagi optik tolalar"
    },

    {
        savol: "Osma optik kabellarning o‘zi boradigan turi qanday xususiyatga ega?",
        variantlar: [
            "tayanchlarga tashuvchi trossli yoki trossiz osiladi",
            " yer ostiga yotqiziladi",
            " suv ostida ishlatiladi",
            " tunnel ichida qo‘llaniladi"
        ],
        togri: "tayanchlarga tashuvchi trossli yoki trossiz osiladi"
    },

    {
        savol: "Mahkamlanadigan osma kabellar qanday o‘rnatiladi?",
        variantlar: [
            "Maxsus qisqichlar yordamida tashuvchi simga mahkamlanadi",
            " Beton ichiga joylashtiriladi",
            "Tuproq ostiga bevosita ko‘miladi",
            " Po‘lat quvur ichiga joylashtiriladi"
        ],
        togri: "Maxsus qisqichlar yordamida tashuvchi simga mahkamlanadi"
    },

    {
        savol: "O‘raladigan optik kabellar qanday usulda yotqiziladi?",
        variantlar: [
            "tashuvchi sim yoki tross atrofiga o‘raladi",
            " quvur ichiga tortiladi",
            " beton ostiga joylashtiriladi",
            "Suv ostiga erkin tashlanadi"
        ],
        togri: "tashuvchi sim yoki tross atrofiga o‘raladi"
    },

    {
        savol: "Yer ostiga yotqiziladigan optik kabellar qayerlarga joylashtirilishi mumkin?",
        variantlar: [
            "kabel kanalizatsiyasi, tunnellar va quvurlarga",
            " ko‘prik ustiga",
            " bino ichiga",
            " ustunlarga osilgan holda"
        ],
        togri: "kabel kanalizatsiyasi, tunnellar va quvurlarga"
    },

    {
        savol: "40–100 mm diametrli plastmassa quvurlarda odatda nechta optik kabel yotqiziladi?",
        variantlar: [
            "Bitta quvur ichiga bitta optik kabel",
            "Bitta quvur ichiga ikkita optik kabel",
            "Bitta quvur ichiga uchta optik kabel",
            "Cheklanmagan miqdorda optik kabel"
        ],
        togri: "Bitta quvur ichiga bitta optik kabel"
    },

    {
        savol: "100 mm dan katta quvurlarda optik kabellar qanday joylashtiriladi?",
        variantlar: [
            "Bir nechta optik kabel bitta quvur ichiga joylashtiriladi",
            " bitta kabel joylashtiriladi",
            " metall kabel joylashtiriladi",
            " elektr kabeli bilan birga joylashtiriladi"
        ],
        togri: "Bir nechta optik kabel bitta quvur ichiga joylashtiriladi"
    },

    {
        savol: "Suv osti optik kabellari qanday turlarga bo‘linadi?",
        variantlar: [
            "daryo, ko‘l va okean tubiga yotqiziladigan turlarga",
            " okean tubiga yotqiziladigan turlarga",
            " daryo tubiga yotqiziladigan turlarga",
            " bino ichida ishlatiladigan turlarga"
        ],
        togri: "daryo, ko‘l va okean tubiga yotqiziladigan turlarga"
    },

    {
        savol: "Ichki yotqizish kabellari asosan qayerlarda ishlatiladi?",
        variantlar: [
            "Telefon stansiyalari, ofislar va binolar ichida",
            " temir yo‘l ostida",
            " dengiz tubida",
            " magistral tarmoqlarda"
        ],
        togri: "Telefon stansiyalari, ofislar va binolar ichida"
    },

    {
        savol: "Optik tola optik kabelning qanday elementi hisoblanadi?",
        variantlar: [
            "Asosiy uzatuvchi va yo‘naltiruvchi element",
            " himoyalovchi element",
            " kuchaytiruvchi element",
            " tashqi qobiq elementi"
        ],
        togri: "Asosiy uzatuvchi va yo‘naltiruvchi element"
    },

    {
        savol: "Optik modulning asosiy vazifasi nima?",
        variantlar: [
            "Optik tolani himoyalash va barqaror ishlashini ta’minlash",
            "Elektr energiyasini uzatish",
            " signalni kuchaytirish",
            " tashqi qobiqni mustahkamlash"
        ],
        togri: "Optik tolani himoyalash va barqaror ishlashini ta’minlash"
    },

    {
        savol: "Kabel markazidagi kuch elementi nima vazifani bajaradi?",
        variantlar: [
            "Kabelning egiluvchanligini ta’minlaydi",
            " signalni filtrlashni bajaradi",
            " elektr tokini uzatadi",
            " namlikni yutadi"
        ],
        togri: "Kabelning egiluvchanligini ta’minlaydi"
    },

    {
        savol: "Gidrofob to‘ldirgichning asosiy vazifasi nima?",
        variantlar: [
            "Namlik va suv bug‘larini kabel ichiga kirishidan saqlash",
            "Signal tezligini oshirish",
            " kabel massasini kamaytirish",
            "Elektr kuchlanishini uzatish"
        ],
        togri: "Namlik va suv bug‘larini kabel ichiga kirishidan saqlash"
    },

    {
        savol: "Optik kabel qobig‘ining asosiy vazifasi nima?",
        variantlar: [
            "Kabel o‘zagini tashqi va mexanik ta’sirlardan himoyalash",
            " kabel rangini belgilash",
            " signalni kuchaytirish",
            " issiqlikni uzatish"
        ],
        togri: "Kabel o‘zagini tashqi va mexanik ta’sirlardan himoyalash"
    },

    {
        savol: "Optik kabelning zirh qatlami nima uchun xizmat qiladi?",
        variantlar: [
            "Kabelning mexanik chidamliligini oshirish uchun",
            " signalni kodlash uchun",
            " kabelni sovutish uchun",
            " elektr toki hosil qilish uchun"
        ],
        togri: "Kabelning mexanik chidamliligini oshirish uchun"
    },

    {
        savol: "Dielektrik optik kabellarda zirh qatlami uchun qanday materiallar qo‘llaniladi?",
        variantlar: [
            "Aramid iplar va shisha plastik sterjenlar",
            " mis simlar",
            " alyuminiy plastinalar",
            " rezina qoplamalar"
        ],
        togri: "Aramid iplar va shisha plastik sterjenlar"
    },

    {
        savol: "Optik kabellarning asosiy konstruksiyalaridan biri qaysi?",
        variantlar: [
            "Burama o‘ralgan konstruksiya",
            " kvadrat konstruksiya",
            " metall sterjenli konstruksiya",
            " betonli konstruksiya"
        ],
        togri: "Burama o‘ralgan konstruksiya"
    },

    {
        savol: "OKGM optik kabellari asosan qayerga yotqizish uchun mo‘ljallangan?",
        variantlar: [
            "yer ostiga yotqizish uchun",
            " bino ichiga  yotqizish uchun ",
            " suv ostiga  yotqizish uchun ", 
            " ustunlarga osish uchun"
        ],
        togri: "yer ostiga yotqizish uchun"
    },

    {
        savol: "OKGM kabelining tashqi qobig‘i qanday materialdan tayyorlanadi?",
        variantlar: [
            "Polietilendan",
            "Rezina materialdan",
            " Po‘latdan",
            "Shisha tolali materialdan"
        ],
        togri: "Polietilendan"
    },

    {
        savol: "OKGC optik kabellari qanday maqsadda ishlatiladi?",
        variantlar: [
            "yerga va kabel kanalizatsiyasiga o‘rnatish uchun",
            " suv ostida ishlatish uchun",
            " binolar ichida ishlatish uchun",
            " radioeshittirish uchun"
        ],
        togri: "yerga va kabel kanalizatsiyasiga o‘rnatish uchun"
    },

    {
        savol: "OKKM optik kabellarida suvni blokirovka qiluvchi qanday element mavjud?",
        variantlar: [
            "Suvni blokirovka qiluvchi lenta",
            "Mis qoplama",
            "Magnit qatlam",
            "Issiqlik filtri"
        ],
        togri: "Suvni blokirovka qiluvchi lenta"
    },

    {
        savol: "OKSM osma optik kabellari qayerlarga osib qo‘yish uchun mo‘ljallangan?",
        variantlar: [
            "Aloqa liniyasi tayanchlari va yoritish ustunlariga",
            " tunnel ichiga",
            " yer ostiga",
            " suv quvurlariga"
        ],
        togri: "Aloqa liniyasi tayanchlari va yoritish ustunlariga"
    },

    {
        savol: "OKPM osma optik kabellarida tashqi kuch elementi sifatida nima ishlatilishi mumkin?",
        variantlar: [
            "Po‘lat sim, po‘lat tross yoki shisha plastik sterjen",
            " alyuminiy lenta",
            " rezina qoplama",
            " mis plastina"
        ],
        togri: "Po‘lat sim, po‘lat tross yoki shisha plastik sterjen"
    },

    {
        savol: "Optik kabellarning xizmat muddati taxminan qancha bo‘lishi kerak?",
        variantlar: [
            "Kamida 25–30 yil",
            "5–10 yil",
            "10–15 yil",
            "15–20 yil"
        ],
        togri: "Kamida 25–30 yil"
    },

    {
        savol: "OKTM optik kabellari qayerlarga o‘rnatish uchun mo‘ljallangan?",
        variantlar: [
            "Kabel kanalizatsiyasi va bino ichiga",
            " dengiz tubiga",
            " elektr stansiyalariga",
            " avtomobil yo‘llari ostiga"
        ],
        togri: "Kabel kanalizatsiyasi va bino ichiga"
    }
];
