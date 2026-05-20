const SAVOLLAR = [
    {
        savol: "Yorug‘likni optik tolaga kiritish va chiqarish qurilmalarining asosiy vazifasi nima?",
        variantlar: [
            "Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signalni uzatish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signal chastotasini kamaytirish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va elektr signalini kuchaytirish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va optik tolani sovutish"
        ],
        togri: "Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signalni uzatish"
    },

    {
        savol: "Optik ulagichlarning asosiy vazifasi nimadan iborat?",
        variantlar: [
            "Tolalarni bir-biriga yoki qurilmalarga ulash",
            " Tolalarni qurilmalarga ulash va yorug‘likni filtrlash",
            " Tolalarni qurilmalarga ulash va signal amplitudasini oshirish",
            " Tolalarni qurilmalarga ulash va lazer quvvatini boshqarish"
        ],
        togri: "Tolalarni bir-biriga yoki qurilmalarga ulash"
    },

    {
        savol: "Kollimatorlar va linzalar qanday vazifani bajaradi?",
        variantlar: [
            "Yorug‘likni tola uchiga fokuslash yoki qayta yoyish",
            " Yorug‘likni tola uchiga fokuslash va signalni modulyatsiyalash",
            " Yorug‘likni tola uchiga fokuslash va elektr signal hosil qilish",
            " Yorug‘likni tola uchiga fokuslash va shovqinni kamaytirish"
        ],
        togri: "Yorug‘likni tola uchiga fokuslash yoki qayta yoyish"
    },

    {
        savol: "Coupler qurilmalari qanday vazifani bajaradi?",
        variantlar: [
            "Signalni optik tolaga kiritish yoki undan chiqarish",
            " Signalni optik tolaga kiritish yoki signalni kodlash",
            " Signalni optik tolaga kiritish yoki chastotani oshirish",
            " Signalni optik tolaga kiritish yoki optik tolani himoyalash"
        ],
        togri: "Signalni optik tolaga kiritish yoki undan chiqarish"
    },

    {
        savol: "Optik aloqa liniyalarida eng kam so‘nish qaysi to‘lqin uzunligida kuzatiladi?",
        variantlar: [
            "1.55 mkm atrofida",
            "0.45 mkm atrofida",
            "10 mkm atrofida",
            "0.01 mkm atrofida"
        ],
        togri: "1.55 mkm atrofida"
    },

    {
        savol: "Pigtail nima?",
        variantlar: [
            "Lazer yoki fotodetektorga zavodda ulangan qisqa optik tola",
            " Lazer yoki fotodetektorga zavodda ulangan optik filtr turi",
            " Lazer yoki fotodetektorga zavodda ulangan kuchaytiruvchi modul",
            " Lazer yoki fotodetektorga zavodda ulangan kollimator qurilmasi"
        ],
        togri: "Lazer yoki fotodetektorga zavodda ulangan qisqa optik tola"
    },

    {
        savol: "Mikrolinzalar nima maqsadda ishlatiladi?",
        variantlar: [
            "Yorug‘lik dastasini fokuslash va tola aperturasi bilan moslashtirish uchun",
            " Yorug‘lik dastasini fokuslash va signalni saqlash uchun",
            " Yorug‘lik dastasini fokuslash va tokni kamaytirish uchun",
            " Yorug‘lik dastasini fokuslash va mexanik himoya uchun"
        ],
        togri: "Yorug‘lik dastasini fokuslash va tola aperturasi bilan moslashtirish uchun"
    },

    {
        savol: "Fokuslovchi obyektivlar asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Laboratoriya sharoitida keng nurni ingichka o‘zakka tushirish uchun",
            " Sun’iy yo‘ldosh tizimlarida",
            " Elektro-optik tarmoqlarida",
            " Radiouzatkich tarmoqlarda"
        ],
        togri: "Laboratoriya sharoitida keng nurni ingichka o‘zakka tushirish uchun"
    },

    {
        savol: "SC, LC va FC — … turlari hisoblanadi?",
        variantlar: [
            "Optik konnektorlarning",
            " Lazer diodlarining",
            " Optik kuchaytirgichlarning",
            " Fotodiodlarning"
        ],
        togri: "Optik konnektorlarning"
    },

    {
        savol: "Optik adapterlarning asosiy vazifasi nima?",
        variantlar: [
            "Ikki konnektorni aniq markazlashtirib tutashtirish",
            " Ikki konnektorni aniq markazlashtirib signalni kuchaytirish",
            " Optik signalni elektr signalga aylantirish",
            " Ikki konnektorni aniq markazlashtirib lazer quvvatini kamaytirish"
        ],
        togri: "Ikki konnektorni aniq markazlashtirib tutashtirish"
    },

    {
        savol: "Splitters va Couplers qanday maqsadda ishlatiladi?",
        variantlar: [
            "Nurni bir nechta tolaga bo‘lish yoki birlashtirish uchun",
            " Nurni bir nechta tolaga bo‘lish va signalni saqlash uchun",
            " Optik tolani ichki va tashqi himoyalash uchun",
            " Nurni bir nechta tolaga bo‘lish va tokni oshirish uchun"
        ],
        togri: "Nurni bir nechta tolaga bo‘lish yoki birlashtirish uchun"
    },

    {
        savol: "Apertura mos kelmasligi nimaga olib keladi?",
        variantlar: [
            "Energiya yo‘qolishiga",
            " Signal kuchayishiga",
            " Harorat oshishiga",
            " Modulyatsiya tezlashishiga"
        ],
        togri: "Energiya yo‘qolishiga"
    },

    {
        savol: "Fresnel akslanishi nimaga sabab bo‘lishi mumkin?",
        variantlar: [
            "Signal quvvatining kamayishiga",
            " Lazer quvvatining ortishiga",
            " Tokning oshishiga",
            " Chastota barqarorlashishiga"
        ],
        togri: "Signal quvvatining kamayishiga"
    },

    {
        savol: "Insertion Loss nimani ko‘rsatadi?",
        variantlar: [
            "Qurilma ulangandan keyin signal quvvatining kamayishini",
            " Qurilma ulangandan keyin signal chastotasini",
            " Qurilma ulangandan keyin optik tola diametrini",
            " Qurilma ulangandan keyin lazer haroratini"
        ],
        togri: "Qurilma ulangandan keyin signal quvvatining kamayishini"
    },

    {
        savol: "Konnektorlar uchun odatiy insertion loss qiymati qancha?",
        variantlar: [
            "0.1 dB dan 0.5 dB gacha",
            "10 dB dan 50 dB gacha",
            "1 dB dan 5 dB gacha",
            "50 dB dan 100 dB gacha"
        ],
        togri: "0.1 dB dan 0.5 dB gacha"
    },

    {
        savol: "Payvandlangan ulanish uchun yo‘qotish odatda qanday bo‘ladi?",
        variantlar: [
            "0.01–0.1 dB atrofida",
            "1–5 dB atrofida",
            "10–20 dB atrofida",
            "50–60 dB atrofida"
        ],
        togri: "0.01–0.1 dB atrofida"
    },

    {
        savol: "Return Loss nimani ifodalaydi?",
        variantlar: [
            "Nurning ulanish joyidan orqaga qaytib akslanishini",
            " Nurning ulanish joyidasignalning kuchayishini",
            " Nurning ulanish joyidatokning kamayishini",
            " Nurning ulanish joyida lazer tezligini"
        ],
        togri: "Nurning ulanish joyidan orqaga qaytib akslanishini"
    },

    {
        savol: "APC konnektorining asosiy xususiyati nimada?",
        variantlar: [
            "Uchi 8 gradus qiyalikda bo‘lib, akslanishi juda kam",
            " Uchi metall qoplamaga ega",
            " Uchi past chastotada ishlaydi",
            " Uchi LED bilan ishlaydi"
        ],
        togri: "Uchi 8 gradus qiyalikda bo‘lib, akslanishi juda kam"
    },

    {
        savol: "Numerical Aperture (NA) nimani bildiradi?",
        variantlar: [
            "Tolaning nurni qabul qilish qobiliyatini",
            " Tolaning signal amplitudasini",
            " Tolaning lazer kuchlanishini",
            " Tolaning modulyatsiya tezligini"
        ],
        togri: "Tolaning nurni qabul qilish qobiliyatini"
    },

    {
        savol: "Bir modali tolalarda NA taxminan qanday bo‘ladi?",
        variantlar: [
            "0.1 – 0.14",
            "1 – 1.4",
            "5 – 10",
            "0.001 – 0.005"
        ],
        togri: "0.1 – 0.14"
    },

    {
        savol: "1–2 mikrometr siljish nimaga olib kelishi mumkin?",
        variantlar: [
            "10–20% quvvat yo‘qolishiga",
            " Signal tezlashishiga",
            " Tok ortishiga",
            " Harorat kamayishiga"
        ],
        togri: "10–20% quvvat yo‘qolishiga"
    },

    {
        savol: "Standart optik oynalar qaysi to‘lqin uzunliklarida ishlaydi?",
        variantlar: [
            "850 nm, 1310 nm va 1550 nm",
            "100 nm, 200 nm va 300 nm",
            "5 nm, 10 nm va 15 nm",
            "5000 nm, 7000 nm va 9000 nm"
        ],
        togri: "850 nm, 1310 nm va 1550 nm"
    },

    {
        savol: "Cleaving jarayonida nima amalga oshiriladi?",
        variantlar: [
            "Tola uchi 90 gradus burchak ostida kesiladi",
            " Tolada signal kuchaytiriladi",
            " Optik tolaga qoplama surtiladi",
            " Optik tolada lazer sozlanadi"
        ],
        togri: "Tola uchi 90 gradus burchak ostida kesiladi"
    }
];
