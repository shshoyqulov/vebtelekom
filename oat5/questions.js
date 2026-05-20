const SAVOLLAR = [
    {
        savol: "Tolali optik aloqa tizimlarida elektr signalini yorug‘lik signaliga aylantirish qaysi modul tomonidan amalga oshiriladi?",
        variantlar: [
            "Uzatuvchi optoelektron modul tomonidan",
            " Qabul qiluvchi optik modul tomonidan",
            "Kuchaytiruvchi modul tomonidan",
            " Fotodetektor tomonidan"
        ],
        togri: "Uzatuvchi optoelektron modul tomonidan"
    },

    {
        savol: "Yorug‘lik manbai uzatuvchi optoelektron modulda qanday vazifani bajaradi?",
        variantlar: [
            "Elektr signallarini yorug‘lik signallariga aylantiradi",
            "Yorug‘lik signallarini elektr signallariga aylantiradi",
            " Signalni kuchaytiradi",
            " Signalni saqlaydi"
        ],
        togri: "Elektr signallarini yorug‘lik signallariga aylantiradi"
    },

    {
        savol: "Optik aloqa tizimlarida yorug‘lik manbai qanday o‘lchamlarga ega bo‘lishi kerak?",
        variantlar: [
            "Optik kabelning ko‘ndalang kesimiga mos o‘lchamga",
            " Optik kabelning ko‘ndalang kesimidan katta o‘lchamga",
            " Bir xil diametrda",
            "Optik tolaga bog‘liq bo‘lmagan o‘lchamga"
        ],
        togri: "Optik kabelning ko‘ndalang kesimiga mos o‘lchamga"
    },

    {
        savol: "Signalni uzoq masofaga uzatish uchun yorug‘lik manbai qanday xususiyatga ega bo‘lishi kerak?",
        variantlar: [
            "Yetarli darajada katta quvvatga ega bo‘lishi kerak",
            " Yetarli darajada kichik chastotada ishlashi kerak",
            " Yetarli darajada impuls rejimida ishlashi kerak",
            " Yetarli darajada sovutilgan holatda ishlashi kerak"
        ],
        togri: "Yetarli darajada katta quvvatga ega bo‘lishi kerak"
    },

    {
        savol: "Yorug‘lik manbaining sindirish ko‘rsatkichi qanday bo‘lishi kerak?",
        variantlar: [
            "Optik tolaning sindirish ko‘rsatkichiga yaqin bo‘lishi kerak",
            " Optik tolaning sindirish ko‘rsatkichidan kichik bo‘lishi kerak",
            " Optik tolaning sindirish ko‘rsatkichidan katta bo‘lishi kerak",
            "Sindirish ko‘rsatkichi ahamiyatsiz"
        ],
        togri: "Optik tolaning sindirish ko‘rsatkichiga yaqin bo‘lishi kerak"
    },

    {
        savol: "Optik tolalarda eng kam yo‘qotish kuzatiladigan shaffoflik darchalari markazlari qaysi to‘lqin uzunliklariga mos keladi?",
        variantlar: [
            "850 nm, 1300 nm va 1550 nm",
            "650 nm, 950 nm va 1200 nm",
            "400 nm, 850 nm va 2000 nm",
            "130 nm, 850 nm va 950 nm"
        ],
        togri: "850 nm, 1300 nm va 1550 nm"
    },

    {
        savol: "Axborotni yuqori tezlikda uzatish uchun yorug‘lik manbai qanday bo‘lishi kerak?",
        variantlar: [
            "Katta modulyatsiya chastotalarida ishlay olishi kerak",
            " Past modulyatsiya chastotada ishlashi kerak",
            " Modulyatsiya doimiy tokda ishlashi kerak",
            "Modulyatsiyasiz ishlashi kerak"
        ],
        togri: "Katta modulyatsiya chastotalarida ishlay olishi kerak"
    },

    {
        savol: "Tolali optik aloqa tizimlarida keng qo‘llaniladigan yorug‘lik manbalari qaysilar?",
        variantlar: [
            "Yarimo‘tkazgichli yorug‘lik diodlari va injeksion lazer diodlari",
            " Yarimo‘tkazgichli yorug‘lik diodlari, vakuum lampalari va fotodiodlar",
            " Yarimo‘tkazgichli yorug‘lik diodlari, gaz razryadli lampalar",
            " Yarimo‘tkazgichli yorug‘lik diodlari, infraqizil lampalar"
        ],
        togri: "Yarimo‘tkazgichli yorug‘lik diodlari va injeksion lazer diodlari"
    },

    {
        savol: "Yorug‘lik diodi qanday turdagi nurlanish manbai hisoblanadi?",
        variantlar: [
            "Nomonoxromatik va nokogerent nurlanish manbai",
            "Monoxromatik va kogerent nurlanish manbai",
            " Monoxromatik nurlanish manbai",
            " Infraqizil nurlanish manbai"
        ],
        togri: "Nomonoxromatik va nokogerent nurlanish manbai"
    },

    {
        savol: "Yorug‘lik diodlarini tayyorlashda qanday materiallardan foydalaniladi?",
        variantlar: [
            "GaAs, GaAlAs, InGaAsP, GaP va SiC",
            " Kremniy, Galliy, alyuminiy",
            " Kvarts va shisha ",
            " Germaniy, po‘lat va oltin-mis aralashmasi"
        ],
        togri: "GaAs, GaAlAs, InGaAsP, GaP va SiC"
    },

    {
        savol: "Tolali optik aloqa tizimlarida ishlatiladigan yorug‘lik diodlarining nurlanuvchi sirt diametri taxminan qancha?",
        variantlar: [
            "50 mkm",
            "5 mkm",
            "500 mkm",
            "150 mkm"
        ],
        togri: "50 mkm"
    },

    {
        savol: "Injeksion yorug‘lik diodi qanday tuzilishga ega?",
        variantlar: [
            "p-n tuzilishli optoelektron asbob",
            " metall qatlamli asbob",
            "Vakuumli elektron asbob",
            "Magnit rezonansli asbob"
        ],
        togri: "p-n tuzilishli optoelektron asbob"
    },

    {
        savol: "LEDlarda yorug‘lik hosil bo‘lishi nimaga asoslanadi?",
        variantlar: [
            "Yarimo‘tkazgichdagi elektronlarning harakatiga",
            "Filamentning qizishiga",
            "Gaz ionlanishiga",
            "Magnit maydon hosil bo‘lishiga"
        ],
        togri: "Yarimo‘tkazgichdagi elektronlarning harakatiga"
    },

    {
        savol: "1907-yilda H.J. Round qanday hodisani kashf etgan?",
        variantlar: [
            "Elektroluminesans hodisasini",
            "Fotoeffekt hodisasini",
            "Difraksiya hodisasini",
            "Rentgen nurlanishini"
        ],
        togri: "Elektroluminesans hodisasini"
    },

    {
        savol: "Elektroluminesans nima?",
        variantlar: [
            "Elektr toki ta’sirida yorug‘lik chiqarish jarayoni",
            "Yorug‘lik ta’sirida elektr toki hosil bo‘lishi",
            "Issiqlik ta’sirida nur chiqarish",
            "Magnit maydon ta’sirida zaryad hosil bo‘lishi"
        ],
        togri: "Elektr toki ta’sirida yorug‘lik chiqarish jarayoni"
    },

    {
        savol: "LEDning p-tipli yarimo‘tkazgichida qanday zaryad tashuvchilar mavjud?",
        variantlar: [
            "Teshiklar",
            "Elektronlar",
            "Ionlar",
            "Fotonlar"
        ],
        togri: "Teshiklar"
    },

    {
        savol: "LEDning n-tipli yarimo‘tkazgichida qanday zaryad tashuvchilar mavjud?",
        variantlar: [
            "Elektronlar",
            "Teshiklar",
            "Fotonlar",
            "Ionlar"
        ],
        togri: "Elektronlar"
    },

    {
        savol: "Chiqarilgan yorug‘likning rangi nimaga bog‘liq?",
        variantlar: [
            "Fotonlar energiyasiga va materialning tarmoqli energiyasiga",
            " Fotonlar energiyasiga va tok kuchiga",
            " Fotonlar energiyasiga va haroratga",
            " Fotonlar energiyasiga va yorug‘lik quvvatiga"
        ],
        togri: "Fotonlar energiyasiga va materialning tarmoqli energiyasiga"
    },

    {
        savol: "InGaN materiali qanday rangdagi LEDlarni ishlab chiqarishda qo‘llaniladi?",
        variantlar: [
            "Moviy, yashil va ultrabinafsha LEDlarda",
            " qizil LEDlarda",
            " sariq LEDlarda",
            " infraqizil LEDlarda"
        ],
        togri: "Moviy, yashil va ultrabinafsha LEDlarda"
    },

    {
        savol: "AlGaInP materiali qanday rangdagi LEDlarni ishlab chiqarishda qo‘llaniladi?",
        variantlar: [
            "Sariq, to‘q sariq va qizil LEDlarda",
            " ko‘k LEDlarda",
            " oq LEDlarda",
            " binafsha LEDlarda"
        ],
        togri: "Sariq, to‘q sariq va qizil LEDlarda"
    },

    {
        savol: "GaN materiali LED ishlab chiqarishda qanday vazifani bajaradi?",
        variantlar: [
            "Ko‘k va yashil yorug‘lik chiqaruvchi yarimo‘tkazgich sifatida",
            " issiqlikni tarqatish uchun",
            " mexanik himoya uchun",
            " elektr izolyatsiyasi uchun"
        ],
        togri: "Ko‘k va yashil yorug‘lik chiqaruvchi yarimo‘tkazgich sifatida"
    },

    {
        savol: "LED ishlab chiqarishda mis qanday maqsadda ishlatiladi?",
        variantlar: [
            "Issiqlikni tarqatish uchun",
            " Yorug‘likni kuchaytirish uchun",
            " Rang hosil qilish uchun",
            " Kuchlanishni oshirish uchun"
        ],
        togri: "Issiqlikni tarqatish uchun"
    },

    {
        savol: "Yorug‘lik diodining degradatsiyasi nimani anglatadi?",
        variantlar: [
            "Vaqt o‘tishi bilan nurlanish quvvatining kamayishini",
            " Vaqt o‘tishi bilan nurlanish chastotasining oshishini",
            " Vaqt o‘tishi bilan tokning cheksiz ortishini",
            " Vaqt o‘tishi bilan haroratning keskin kamayishini"
        ],
        togri: "Vaqt o‘tishi bilan nurlanish quvvatining kamayishini"
    },

    {
        savol: "Yorug‘lik diodlari odatda qanday masofali optik aloqa tizimlarida qo‘llaniladi?",
        variantlar: [
            "Qisqa va lokal optik tarmoqlarda",
            " Transokean tizimlarida",
            " Sun’iy yo‘ldosh tizimlarida",
            " Magistral liniyalarda"
        ],
        togri: "Qisqa va lokal optik tarmoqlarda"
    },

    {
        savol: "Lazer diodlari qanday nurlanish manbai hisoblanadi?",
        variantlar: [
            "Monoxromatik va kogerent nurlanish manbai",
            "Nomonoxromatik va nokogerent manba",
            " Infraqizil manba",
            " Ultrabinafsha manba"
        ],
        togri: "Monoxromatik va kogerent nurlanish manbai"
    },

    {
        savol: "Bir modali lazerlarda spektr kengligi taxminan qanday qiymatga ega?",
        variantlar: [
            "0,1 – 0,4 nm",
            "1 – 4 nm",
            "10 – 40 nm",
            "0,01 – 0,04 nm"
        ],
        togri: "0,1 – 0,4 nm"
    },

    {
        savol: "Sozlanuvchan lazerlarda to‘lqin uzunligini taxminan qanchagacha o‘zgartirish mumkin?",
        variantlar: [
            "30 nm gacha",
            "3 nm gacha",
            "300 nm gacha",
            "1 nm gacha"
        ],
        togri: "30 nm gacha"
    },

    {
        savol: "Yorug‘lik diodlari va lazer diodlarining tezkorligi nimaga bog‘liq?",
        variantlar: [
            "p-n o‘tish orqali zaryad tashuvchilarning to‘planish va so‘rilish vaqtiga",
            " Haroratga",
            " Optik tola uzunligiga",
            " Elektr qarshiligiga"
        ],
        togri: "p-n o‘tish orqali zaryad tashuvchilarning to‘planish va so‘rilish vaqtiga"
    },

    {
        savol: "Nima sababdan lazer diodlari Gbit/s tezlikli tizimlarda qo‘llaniladi?",
        variantlar: [
            "Tezkorligi yorug‘lik diodlariga nisbatan yuqori bo‘lgani uchun",
            " Quvvati yorug‘lik diodlariga nisbatan kichik bo‘lgani uchun",
            "Narxi yorug‘lik diodlariga nisbatan arzon bo‘lgani uchun",
            " Yorug‘lik diodlariga nisbatan infraqizil diapazonda ishlagani uchun"
        ],
        togri: "Tezkorligi yorug‘lik diodlariga nisbatan yuqori bo‘lgani uchun"
    }
];
