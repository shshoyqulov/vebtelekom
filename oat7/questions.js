const SAVOLLAR = [
    {
        savol: "Optik aloqa tizimlarida signal quvvati masofa oshishi bilan nima sababdan kamayadi?",
        variantlar: [
            "Energiya yo‘qotilishi va attenuatsiya sababli",
            " Energiya yo‘qotilishi modulyatsiya chastotasi kamaygani sababli",
            " Energiya yo‘qotilishi elektr qarshilik ortgani sababli",
            " Energiya yo‘qotilishi lazer quvvati oshgani sababli"
        ],
        togri: "Energiya yo‘qotilishi va attenuatsiya sababli"
    },

    {
        savol: "Optik signalning kuchsizlanishi qanday ataladi?",
        variantlar: [
            "Attenuatsiya",
            "Interferensiya",
            "Dispersiya",
            "Modulyatsiya"
        ],
        togri: "Attenuatsiya"
    },

    {
        savol: "Optik tolada signal kuchsizlanishining asosiy sabablaridan biri qaysi?",
        variantlar: [
            "Yutilish va sochilish jarayonlari",
            " Optik tolada haroratning pasayishi",
            " Optik tolada elektr maydonning kamayishi",
            " Optik tolada modulyatsiya usulining o‘zgarishi"
        ],
        togri: "Yutilish va sochilish jarayonlari"
    },

    {
        savol: "An’anaviy kuchaytirish usulida optik signal qanday qayta ishlanadi?",
        variantlar: [
            "Avval elektr signalga aylantirilib, keyin yana optik signalga o‘tkaziladi",
            "Avval optik signalga aylantirilib, keyin yana elektr signalga o‘tkaziladi",
            " An’anaviy kuchaytirish usulida optik signal analog signalga aylantiriladi",
            " An’anaviy kuchaytirish usulida optik signal raqamli signalga aylantiriladi"
        ],
        togri: "Avval elektr signalga aylantirilib, keyin yana optik signalga o‘tkaziladi"
    },

    {
        savol: "Optik kuchaytirgichlarning asosiy afzalligi nimada?",
        variantlar: [
            "Signalni elektr ko‘rinishga o‘tkazmasdan kuchaytirishi",
            " Signalni chastotasini past holatda uzatish ",
            " Signalni tok kuchini oshirishi",
            " Signalni shovqinni yo‘qotishi"
        ],
        togri: "Signalni elektr ko‘rinishga o‘tkazmasdan kuchaytirishi"
    },

    {
        savol: "Optik kuchaytirgichlarda kuchaytirish jarayonida nima ko‘paytiriladi?",
        variantlar: [
            " Fotonlar soni",
            " Signal chastotasi",
            " Signal uzunligi",
            " Elektr qarshilik"
        ],
        togri: " Fotonlar soni"
    },

    {
        savol: "Optik kuchaytirgichlar odatda uzatish liniyasining qayerida qo‘llaniladi?",
        variantlar: [
            "Boshlang‘ich, o‘rta va qabul qiluvchi qismlarida",
            "Boshlang‘ich va qabul qiluvchi qismlarida",
            "Boshlang‘ich, o‘rta  qismlarida",
            " O‘rta va qabul qiluvchi qismlarida",
        ],
        togri: "Boshlang‘ich, o‘rta va qabul qiluvchi qismlarida"
    },

    {
        savol: "Booster amplifier qanday vazifani bajaradi?",
        variantlar: [
            "Uzatish liniyasining boshlanishida signalni kuchaytiradi",
            "Uzatish liniyasining qabul qiluvchi qismida signalni kuchaytiradi",
            " Shovqinni filtrlash uchun ishlatiladi",
            " Signalni saqlash uchun ishlatiladi"
        ],
        togri: "Uzatish liniyasining boshlanishida signalni kuchaytiradi"
    },

    {
        savol: "Optik kuchaytirgichlar signal bilan birga nimani ham kuchaytiradi?",
        variantlar: [
            "Shovqin",
            " Amplituda",
            " Faza",
            " Modulyatsiya"
        ],
        togri: "Shovqin"
    },

    {
        savol: "Optik kuchaytirgichlar qanday fizik hodisadan foydalanadi?",
        variantlar: [
            "Induksiyalangan nurlanish ",
            " Fotoeffekt ",
            " Termoelektr ",
            " Elektromagnit induksiya "
        ],
        togri: "Induksiyalangan nurlanish "
    },

    {
        savol: "Fabri-Pero kuchaytirgichlari qanday rezonator bilan jihozlangan?",
        variantlar: [
            "Yarim shaffof ko‘zgu devorli yassi rezonator ",
            " Dielektrik rezonator ",
            " Magnit rezonator ",
            " Vakuum rezonatori "
        ],
        togri: "Yarim shaffof ko‘zgu devorli yassi rezonator "
    },

    {
        savol: "Fabri-Pero kuchaytirgichining kuchaytirish koeffitsienti taxminan qancha bo‘lishi mumkin?",
        variantlar: [
            "25 dB gacha",
            "5 dB gacha",
            "100 dB gacha",
            "1 dB gacha"
        ],
        togri: "25 dB gacha"
    },

   {
    savol: "Brillyuen kuchaytirgichlari qanday effektga asoslanadi?",
    variantlar: [
        "Nochiziqli Brillyuen sochilish effektiga",
        "Nochiziqli Brillyuen yutilish effektiga",
        "Nochiziqli Brillyuen dispersiya effektiga",
        "Nochiziqli Brillyuen interferensiya effektiga"
    ],
    togri: "Nochiziqli Brillyuen sochilish effektiga"
},

    {
        savol: "Raman kuchaytirgichlari qanday hodisaga asoslanadi?",
        variantlar: [
            "Raman sochilish ",
            " Raman difraksiya ",
            " Raman interferensiya ",
            " Raman qutblanish "
        ],
        togri: "Raman sochilish hodisasiga"
    },

    {
        savol: "Raman kuchaytirgichlarining asosiy afzalligi nimada?",
        variantlar: [
            "Bir nechta WDM kanallarini bir vaqtda kuchaytirishi",
            "Bir nechta WDM kanallarini ketma-ket kuchaytirishi",
            " bitta signalni kuchaytirishi va qisqa masofada ishlashi",
            " Raqamli va analog signal uzatishi"
        ],
        togri: "Bir nechta WDM kanallarini bir vaqtda kuchaytirishi"
    },

    {
        savol: "EDFA kuchaytirgichlarida optik tolaga qanday ionlar qo‘shiladi?",
        variantlar: [
            "Erbiy ionlari",
            "Kremniy ionlari",
            "Mis ionlari",
            "Temir ionlari"
        ],
        togri: "Erbiy ionlari"
    },

    {
        savol: "EDFA kuchaytirgichlarida signal asosan qaysi to‘lqin uzunligida kuchaytiriladi?",
        variantlar: [
            "1550 nm atrofida",
            "850 nm atrofida",
            "650 nm atrofida",
            "400 nm atrofida"
        ],
        togri: "1550 nm atrofida"
    },

    {
        savol: "Raman kuchaytirgichlarda nasos signali qayer orqali yuboriladi?",
        variantlar: [
            "Uzatish tolasi orqali",
            " Elektr kabel orqali",
            " Rezonator orqali",
            " Filtr orqali"
        ],
        togri: "Uzatish tolasi orqali"
    },

    {
        savol: "DWDM texnologiyasi nimani ta’minlaydi?",
        variantlar: [
            "To‘lqin uzunligi bo‘linish multipleksatsiyasini",
            " To‘lqin uzunligi  analog modulyatsiyani",
            " To‘lqin uzunligi  elektr signal uzatishni",
            " To‘lqin uzunligi  past tezlikli uzatishni"
        ],
        togri: "To‘lqin uzunligi bo‘linish multipleksatsiyasini"
    },

    {
        savol: "Optik kuchaytirgichlarning ishlashi nimaga bog‘liq emas?",
        variantlar: [
            "Uzatish tezligi va to‘lqin uzunligiga",
            " Uzatish tezligi va nasos quvvatiga",
            " Uzatish tezligi va aktiv muhitga",
            " Uzatish tezligi va signal quvvatiga"
        ],
        togri: "Uzatish tezligi va to‘lqin uzunligiga"
    },

    {
        savol: "Optik kuchaytirgichning kuchaytirish koeffitsienti nimaga teng?",
        variantlar: [
            "Chiqish va kirish quvvatlari nisbatining logarifmiga",
            "Chiqish va kirish quvvatlari yig’indisining logarifmiga",
            " Chiqish va  kirish quvvatiga",
            "Signal chastotalari yig‘indisiga"
        ],
        togri: "Chiqish va kirish quvvatlari nisbatining logarifmiga"
    },

    {
        savol: "Shovqin faktori (NF) nimani ifodalaydi?",
        variantlar: [
            "Signal/shovqin nisbatining kirish va chiqishdagi o‘zgarishini",
            "Signal/shovqin nisbatining kirish va chiqishdagi qiymatini",
            "Signal/shovqin nisbatining kirish va chiqishdagi signal amplitudasini",
            "Signal/shovqin nisbatining kirish va chiqishdagi lazer quvvatini",
            " signal uzunligini"
        ],
        togri: "Signal/shovqin nisbatining kirish va chiqishdagi o‘zgarishini"
    },

    {
        savol: "Raman kuchaytirgichlarda 1550 nm signalni kuchaytirish uchun qaysi lazerlardan foydalaniladi?",
        variantlar: [
            "1320 nm yoki 1443 nm lazerlardan",
            "850 nm lazerlardan",
            "650 nm lazerlardan",
            "9800 nm lazerlardan"
        ],
        togri: "1320 nm yoki 1443 nm lazerlardan"
    },

    {
        savol: "Dastlabki (old) kuchaytirgichlar qayerda o‘rnatiladi?",
        variantlar: [
            "Regenerator kirishida",
            " Uzatuvchi modul ichida",
            " Qabul qiluvchi modul ichida",
            " Markaziy serverda"
        ],
        togri: "Regenerator kirishida"
    }
];
