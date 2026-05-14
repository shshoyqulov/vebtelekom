const SAVOLLAR = [
    {
        savol: "Ulanish qatlami (Data Link Layer) ma’lumotlarni qanday birlik ko‘rinishida shakllantiradi?",
        variantlar: [
            "Paketlar (Packets)",
            "Freymlar (Frames)",
            "Segmentlar (Segments)",
            "Datagrammalar (Datagrams)"
        ],
        togri: "Freymlar (Frames)"
    },
    {
        savol: "TCP protokolining UDP protokoliga nisbatan asosiy ustunligi nimada?",
        variantlar: [
            "Ma’lumotlarni uzatish tezligining yuqoriligi",
            "Ma’lumotlarning to‘liq va to‘g‘ri yetkazib berilishini kafolatlashi",
            "Video va audio ma’lumotlarni uzatishda samaradorligi",
            "Tarmoq kanallarini kamroq yuklama bilan band qilishi"
        ],
        togri: "Ma’lumotlarning to‘liq va to‘g‘ri yetkazib berilishini kafolatlashi"
    },
    {
        savol: "MAC manzillar haqidagi qaysi mulohaza haqiqatga yaqin?",
        variantlar: [
            "Internet provayder tomonidan qurilmaga vaqtinchalik beriladi",
            "Qurilmaning tarmoq kartasiga zavodda beriladi va o‘zgartirib bo‘lmaydi",
            "Faqat 32 bitdan iborat bo‘lgan raqamli identifikator hisoblanadi",
            "Tarmoqlararo paketlarni yo‘naltirish (routing) uchun ishlatiladi"
        ],
        togri: "Qurilmaning tarmoq kartasiga zavodda beriladi va o‘zgartirib bo‘lmaydi"
    },
    {
        savol: "OSI modelining qaysi qatlamida ma’lumotlarni shifrlash, siqish va formatlarini o‘zgartirish (masalan, JPEG, MP4) amalga oshiriladi?",
        variantlar: [
            "Ilova qatlami (Application Layer)",
            "Taqdimot qatlami (Presentation Layer)",
            "Sessiya qatlami (Session Layer)",
            "Transport qatlami (Transport Layer)"
        ],
        togri: "Taqdimot qatlami (Presentation Layer)"
    },
    {
        savol: "Shahar miqyosidagi bir nechta lokal tarmoqlarni birlashtiruvchi tarmoq turi qanday ataladi?",
        variantlar: [
            "WAN (Wide Area Network)",
            "MAN (Metropolitan Area Network)",
            "CAN (Campus Area Network)",
            "LAN (Local Area Network)"
        ],
        togri: "MAN (Metropolitan Area Network)"
    },
    {
        savol: "Router (marshrutizator) qurilmasi OSI modelining qaysi pog‘onasida ishlaydi?",
        variantlar: [
            "2-pog‘ona: Ulanish qatlami",
            "3-pog‘ona: Tarmoq qatlami",
            "4-pog‘ona: Transport qatlami",
            "1-pog‘ona: Fizik qatlam"
        ],
        togri: "3-pog‘ona: Tarmoq qatlami"
    },
    {
        savol: "IPv4 va IPv6 manzillarining bit hajmi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        variantlar: [
            "IPv4 – 32 bit, IPv6 – 64 bit",
            "IPv4 – 32 bit, IPv6 – 128 bit",
            "IPv4 – 48 bit, IPv6 – 128 bit",
            "IPv4 – 64 bit, IPv6 – 128 bit"
        ],
        togri: "IPv4 – 32 bit, IPv6 – 128 bit"
    },
    {
        savol: "ARP (Address Resolution Protocol) protokolining vazifasi nimadan iborat?",
        variantlar: [
            "Domen nomlarini IP manzilga o‘zgartirish",
            "IP manzilni MAC manzilga yoki aksincha o‘zgartirish",
            "Ma’lumotlarni segmentlarga ajratib uzatish",
            "Tarmoq xavfsizligini ta’minlash va trafikni filtrlash"
        ],
        togri: "IP manzilni MAC manzilga yoki aksincha o‘zgartirish"
    },
    {
        savol: "Nima uchun OSI modeli amaliyotda kamroq qo‘llanilsa ham, ta’limda o‘rganiladi?",
        variantlar: [
            "U zamonaviy tarmoqlarning barcha standartlarini qo‘llab-quvvatlagani uchun",
            "Tarmoq tamoyillarini va jarayonlarini tushuntirishda eng mukammal model bo‘lgani uchun",
            "TCP/IP modelidan ko‘ra ochiqroq model bo‘lgani uchun",
            "U barcha telekommunikatsiya kompaniyalari uchun yagona majburiy standart bo‘lgani uchun"
        ],
        togri: "Tarmoq tamoyillarini va jarayonlarini tushuntirishda eng mukammal model bo‘lgani uchun"
    },
    {
        savol: "Sessiya qatlamining (Session Layer) asosiy vazifasi nima?",
        variantlar: [
            "Ma’lumotlarni bitlarga kodlash va simlar orqali uzatish",
            "Ikkala qurilma o‘rtasidagi ulanishni (seansni) o‘rnatish va boshqarish",
            "Paketlarni eng maqbul yo‘nalish bo‘ylab jo‘natish",
            "Xatolarni tekshirish va ma’lumot yaxlitligini ta’minlash"
        ],
        togri: "Ikkala qurilma o‘rtasidagi ulanishni (seansni) o‘rnatish va boshqarish"
    }
];

