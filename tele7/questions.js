const SAVOLLAR = [
    {
        savol: "Telekommunikatsiya tarmoqlarida protokollar nima hisoblanadi?",
        variantlar: [
            "Qurilmalar orasidagi aloqa qoidalari",
            "Faqat signal kuchaytirish usullari",
            "Elektr uzatish standartlari",
            "Kompyuter xotira tizimlari"
        ],
        togri: "Qurilmalar orasidagi aloqa qoidalari"
    },

    {
        savol: "Hozirgi global tarmoqlarning asosini qaysi stek tashkil qiladi?",
        variantlar: [
            "TCP/IP steki",
            "OSI Lite steki",
            "SMTP steki",
            "Ethernet steki"
        ],
        togri: "TCP/IP steki"
    },

    {
        savol: "TCP/IP modeli nechta asosiy qatlamdan iborat?",
        variantlar: [
            "4 ta qatlamdan",
            "3 ta qatlamdan",
            "5 ta qatlamdan",
            "7 ta qatlamdan"
        ],
        togri: "4 ta qatlamdan"
    },

    {
        savol: "Application Layer qanday vazifani bajaradi?",
        variantlar: [
            "Foydalanuvchi dasturlari bilan ishlaydi",
            "Paketlarni marshrutlaydi",
            "Signalni fizik uzatadi",
            "MAC manzil yaratadi"
        ],
        togri: "Foydalanuvchi dasturlari bilan ishlaydi"
    },

    {
        savol: "HTTP protokoli asosan nima uchun ishlatiladi?",
        variantlar: [
            "Veb sahifalarni uzatish uchun",
            "Elektron pochta yuborish uchun",
            "IP manzil tarqatish uchun",
            "Fayllarni siqish uchun"
        ],
        togri: "Veb sahifalarni uzatish uchun"
    },

    {
        savol: "DNS tizimining asosiy vazifasi nima?",
        variantlar: [
            "Domen nomini IP ga aylantirish",
            "Signal tezligini oshirish",
            "Fayllarni shifrlash jarayoni",
            "Paketlarni segmentlash"
        ],
        togri: "Domen nomini IP ga aylantirish"
    },

    {
        savol: "FTP protokoli nima vazifani bajaradi?",
        variantlar: [
            "Fayllarni uzatish xizmatini bajaradi",
            "Videoqo‘ng‘iroqlarni boshqaradi",
            "IP manzilni tekshiradi",
            "Routerlarni bog‘laydi"
        ],
        togri: "Fayllarni uzatish xizmatini bajaradi"
    },

    {
        savol: "SMTP protokoli asosan nima uchun ishlatiladi?",
        variantlar: [
            "Elektron xat yuborish uchun",
            "Veb saytlarni ochish uchun",
            "IP manzil aniqlash uchun",
            "Paketlarni yo‘naltirish uchun"
        ],
        togri: "Elektron xat yuborish uchun"
    },

    {
        savol: "DHCP xizmatining vazifasi nima?",
        variantlar: [
            "IP manzilni avtomatik berish",
            "Fayllarni shifrlab uzatish",
            "Paketlarni qayta yig‘ish",
            "Signalni kuchaytirib yuborish"
        ],
        togri: "IP manzilni avtomatik berish"
    },

    {
        savol: "Transport qatlamining asosiy vazifasi nima?",
        variantlar: [
            "Ma’lumot uzatishni nazorat qilish",
            "Signalni fizik uzatish",
            "Domen nomlarini yaratish",
            "MAC manzilni saqlash"
        ],
        togri: "Ma’lumot uzatishni nazorat qilish"
    },

    {
        savol: "TCP protokolining asosiy xususiyati qaysi?",
        variantlar: [
            "Ishonchli uzatishni ta’minlaydi",
            "Tasdiqsiz ishlaydi",
            "Faqat audio uzatadi",
            "Signalni siqmay yuboradi"
        ],
        togri: "Ishonchli uzatishni ta’minlaydi"
    },

    {
        savol: "Three-way handshake jarayoni qaysi protokolda mavjud?",
        variantlar: [
            "TCP protokolida",
            "UDP protokolida",
            "DNS protokolida",
            "ARP protokolida"
        ],
        togri: "TCP protokolida"
    },

    {
        savol: "UDP protokolining asosiy afzalligi nima?",
        variantlar: [
            "Tezkor ishlashi bilan",
            "Paketlarni tiklashi bilan",
            "Signalni shifrlashi bilan",
            "Tarmoqni segmentlashi bilan"
        ],
        togri: "Tezkor ishlashi bilan"
    },

    {
        savol: "Onlayn o‘yinlar ko‘proq qaysi protokoldan foydalanadi?",
        variantlar: [
            "UDP protokolidan",
            "TCP protokolidan",
            "FTP protokolidan",
            "SMTP protokolidan"
        ],
        togri: "UDP protokolidan"
    },

    {
        savol: "Segmentatsiya jarayoni nimani anglatadi?",
        variantlar: [
            "Katta ma’lumotni bo‘laklarga ajratish",
            "Signalni kuchaytirib yuborish",
            "IP manzilni o‘zgartirish",
            "Routerlarni ulab chiqish"
        ],
        togri: "Katta ma’lumotni bo‘laklarga ajratish"
    },

    {
        savol: "Internet qatlamining asosiy vazifasi nima?",
        variantlar: [
            "Paketlarni manzillash va yo‘naltirish",
            "Signalni fizik uzatish",
            "Fayllarni shifrlash jarayoni",
            "Portlarni boshqarib turish"
        ],
        togri: "Paketlarni manzillash va yo‘naltirish"
    },

    {
        savol: "IP protokoli nima vazifani bajaradi?",
        variantlar: [
            "Paketlarni manzilga yetkazadi",
            "Elektron xat yuboradi",
            "Domen nomini saqlaydi",
            "Audio signalni uzatadi"
        ],
        togri: "Paketlarni manzilga yetkazadi"
    },

    {
        savol: "Ping buyrug‘i qaysi protokol orqali ishlaydi?",
        variantlar: [
            "ICMP protokoli orqali",
            "SMTP protokoli orqali",
            "FTP protokoli orqali",
            "DHCP protokoli orqali"
        ],
        togri: "ICMP protokoli orqali"
    },

    {
        savol: "ARP protokolining vazifasi nima?",
        variantlar: [
            "IP manzilni MAC ga bog‘lash",
            "Paketlarni segmentlash",
            "Signalni kodlash jarayoni",
            "Paketlarni siqib yuborish"
        ],
        togri: "IP manzilni MAC ga bog‘lash"
    },

    {
        savol: "Router asosan qaysi qatlamda ishlaydi?",
        variantlar: [
            "Internet qatlamida",
            "Ilova qatlamida",
            "Transport qatlamida",
            "Session qatlamida"
        ],
        togri: "Internet qatlamida"
    },

    {
        savol: "Network Access Layer nima vazifani bajaradi?",
        variantlar: [
            "Ma’lumotni fizik signalga aylantiradi",
            "Elektron xatlarni boshqaradi",
            "Paketlarni segmentlaydi",
            "Domenlarni tekshiradi"
        ],
        togri: "Ma’lumotni fizik signalga aylantiradi"
    },

    {
        savol: "MAC manzil qanday manzillash turiga kiradi?",
        variantlar: [
            "Fizik manzillash turiga",
            "Mantiqiy manzillash turiga",
            "Virtual manzillash turiga",
            "Xizmat manzillash turiga"
        ],
        togri: "Fizik manzillash turiga"
    },

    {
        savol: "IPv4 manzillari necha bitdan iborat?",
        variantlar: [
            "32 bitdan iborat",
            "64 bitdan iborat",
            "48 bitdan iborat",
            "128 bitdan iborat"
        ],
        togri: "32 bitdan iborat"
    },

    {
        savol: "IPv6 manzillari necha bitdan iborat?",
        variantlar: [
            "128 bitdan iborat",
            "64 bitdan iborat",
            "32 bitdan iborat",
            "48 bitdan iborat"
        ],
        togri: "128 bitdan iborat"
    },

    {
        savol: "HTTPS uchun standart port qaysi?",
        variantlar: [
            "443 porti",
            "21 porti",
            "25 porti",
            "80 porti"
        ],
        togri: "443 porti"
    },

    {
        savol: "Marshrutlash nima jarayonini anglatadi?",
        variantlar: [
            "Paket uchun eng yaxshi yo‘lni tanlash",
            "Signal amplitudasini oshirish",
            "Paketlarni siqib uzatish",
            "IP manzilni yashirish"
        ],
        togri: "Paket uchun eng yaxshi yo‘lni tanlash"
    },

    {
        savol: "Statik marshrutlash qanday boshqariladi?",
        variantlar: [
            "Administrator tomonidan qo‘lda",
            "Router tomonidan avtomatik",
            "Signal orqali masofadan",
            "DHCP server orqali"
        ],
        togri: "Administrator tomonidan qo‘lda"
    },

    {
        savol: "Dinamik marshrutlashning afzalligi nima?",
        variantlar: [
            "Yo‘lni avtomatik aniqlashi",
            "Portlarni yashirib ishlashi",
            "Signalni kuchaytirib uzatishi",
            "Paketlarni birlashtirib yuborishi"
        ],
        togri: "Yo‘lni avtomatik aniqlashi"
    },

    {
        savol: "OSPF protokoli asosan qayerda ishlatiladi?",
        variantlar: [
            "Katta korporativ tarmoqlarda",
            "Faqat uy Wi-Fi tarmoqlarida",
            "Mobil telefon tizimlarida",
            "Bluetooth aloqalarida"
        ],
        togri: "Katta korporativ tarmoqlarda"
    },

    {
        savol: "BGP protokoli nima uchun muhim?",
        variantlar: [
            "Internetdagi asosiy marshrutlash uchun",
            "Audio signalni uzatish uchun",
            "Fayllarni shifrlash uchun",
            "Wi-Fi signalini kuchaytirish uchun"
        ],
        togri: "Internetdagi asosiy marshrutlash uchun"
    }
];