const SAVOLLAR = [
    {
        savol: "Optik demultipleksor (DEMUX) qanday qurilma hisoblanadi?",
        variantlar: [
            "Bitta tolada kelayotgan aralash optik signallarni alohida kanallarga ajratuvchi qurilma",
            "Bir nechta optik signallarni bitta tolaga birlashtiruvchi qurilma",
            " Bitta tolada kelayotgan aralash optik signallarni  kuchaytiruvchi optik qurilma",
            " Bitta tolada kelayotgan aralash optik signallarni elektr signalga aylantiruvchi qurilma"
        ],
        togri: "Bitta tolada kelayotgan aralash optik signallarni alohida kanallarga ajratuvchi qurilma"
    },

    {
        savol: "DEMUX qurilmasi asosan qaysi texnologiyada muhim rol o‘ynaydi?",
        variantlar: [
            "WDM texnologiyasida",
            " ADM, analog telefon tarmoqlarida",
            " Wi-Fi radiorele tizimlarida",
            " Elektr kabel tizimlarida"
        ],
        togri: "WDM texnologiyasida"
    },

    {
        savol: "Demultipleksorning asosiy vazifasi nimadan iborat?",
        variantlar: [
            "Umumiy optik oqimdan kanallarni to‘lqin uzunligi bo‘yicha ajratish",
            "Turli kanallarni bitta oqimga birlashtirish",
            " Umumiy optik oqimdan kanallarni signal amplitudasini oshirish",
            " Umumiy optik oqimdan kanallarni signalni modulyatsiyalash"
        ],
        togri: "Umumiy optik oqimdan kanallarni to‘lqin uzunligi bo‘yicha ajratish"
    },

    {
        savol: "Demultipleksor ma’lumotlarni qanday tarqatadi?",
        variantlar: [
            "Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga yo‘naltiradi",
            "Barcha signallarni bitta qurilmaga uzatadi",
            " Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga signalni saqlaydi",
            " Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga signalni kuchaytiradi"
        ],
        togri: "Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga yo‘naltiradi"
    },

    {
        savol: "Demultipleksorlarning samaradorligi nimada namoyon bo‘ladi?",
        variantlar: [
            "Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanish imkonida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib signal tezligini kamaytirishida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib elektr energiyasini tejashida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib analog signal uzatishida"
        ],
        togri: "Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanish imkonida"
    },

    {
        savol: "Diffraksion panjara demultipleksorda qanday vazifani bajaradi?",
        variantlar: [
            "Nurni to‘lqin uzunligiga qarab turli burchaklarga og‘diradi",
            " Nurni to‘lqin uzunligiga qarab signalni kuchaytiradi",
            " Nurni to‘lqin uzunligiga qarab signalni modulyatsiyalaydi",
            " Nurni to‘lqin uzunligiga qarab signalni elektr shaklga aylantiradi"
        ],
        togri: "Nurni to‘lqin uzunligiga qarab turli burchaklarga og‘diradi"
    },

    {
        savol: "TFF (Thin Film Filter) qanday ishlaydi?",
        variantlar: [
            " ma’lum to‘lqin uzunligini o‘tkazib, qolganlarini qaytaradi",
            "Barcha to‘lqinlarni teng kuchaytiradi",
            " ma’lum to‘lqin uzunligida signal amplitudasini kamaytiradi",
            " ma’lum to‘lqin uzunligida signal tezligini oshiradi"
        ],
        togri: " ma’lum to‘lqin uzunligini o‘tkazib, qolganlarini qaytaradi"
    },

    {
        savol: "Prizmalar demultipleksorlarda qanday xususiyatdan foydalanadi?",
        variantlar: [
            "Yorug‘likning dispersiya xususiyatidan",
            " Yorug‘likning magnit xususiyatidan",
            " Yorug‘likning elektr qarshiligidan",
            " Yorug‘likning issiqlik o‘tkazuvchanligidan"
        ],
        togri: "Yorug‘likning dispersiya xususiyatidan"
    },

    {
        savol: "Diffraksion panjara qanday optik qurilma hisoblanadi?",
        variantlar: [
            "Murakkab nurni spektrga ajratuvchi optik qurilma",
            " Murakkab signalni birlashtiruvchi qurilma",
            " Murakkab signalni kuchaytiruvchi qurilma",
            " Murakkab elektr signal hosil qiluvchi qurilma"
        ],
        togri: "Murakkab nurni spektrga ajratuvchi optik qurilma"
    },

    {
        savol: "TFF texnologiyasi ayniqsa qaysi tizimlarda keng qo‘llaniladi?",
        variantlar: [
            "CWDM va DWDM tizimlarida",
            " CWDM radiouzatkichlarda",
            " DWDM analog telefonlarda",
            " CWDM va DWDM elektr tarmoqlarida"
        ],
        togri: "CWDM va DWDM tizimlarida"
    },

    {
        savol: "Optik multipleksor (MUX) qanday qurilma hisoblanadi?",
        variantlar: [
            "Bir nechta optik signallarni bitta optik tolaga birlashtiruvchi qurilma",
            " Bir nechta optik signallarni kuchaytiruvchi optik qurilma",
            " Bir nechta optik signallarni  elektr signalga aylantiruvchi qurilma",
            " Bir nechta optik signallarni chastotasini kamaytiruvchi qurilma"
        ],
        togri: "Bir nechta optik signallarni bitta optik tolaga birlashtiruvchi qurilma"
    },

    {
        savol: "Optik multipleksorlar aloqa tizimida qanday afzallik beradi?",
        variantlar: [
            "Mavjud optik liniyaning o‘tkazuvchanligini oshiradi",
            " Mavjud optik liniyasida  signal amplitudasini oshiradi",
            " Mavjud optik liniyasida  elektr quvvatini kamaytiradi",
            " Mavjud optik liniyasida  optik tolani sovutadi"
        ],
        togri: "Mavjud optik liniyaning o‘tkazuvchanligini oshiradi"
    },

    {
        savol: "CWDM tizimlarida kanallar orasidagi masofa odatda qancha bo‘ladi?",
        variantlar: [
            "20 nm atrofida",
            "0.4 nm atrofida",
            "0.01 nm atrofida",
            "100 nm atrofida"
        ],
        togri: "20 nm atrofida"
    },

    {
        savol: "DWDM texnologiyasining asosiy afzalligi nimada?",
        variantlar: [
            "Juda ko‘p kanallarni bitta tolada uzata olishi",
            " Ko‘p kanallarda bitta signalni uzata olishi",
            " Ko‘p kanallarda qisqa masofalarda ishlashi",
            " Ko‘p kanallarda analog signallarni uzatishi"
        ],
        togri: "Juda ko‘p kanallarni bitta tolada uzata olishi"
    },

    {
        savol: "DWDM tizimlari asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Uzoq masofali magistral tarmoqlarda",
            " Shahar ichida ",
            " Ichki tarmoqlarida",
            " Shahar va qishloqlar ichida "
        ],
        togri: "Uzoq masofali magistral tarmoqlarda"
    },

    {
        savol: "DWDM tizimlari nechtagacha kanalni qo‘llab-quvvatlashi mumkin?",
        variantlar: [
            "80, 96 va hatto 160 tagacha",
            " 2 tagacha",
            " 8 tagacha",
            " 16 tagacha"
        ],
        togri: "80, 96 va hatto 160 tagacha"
    },

    {
        savol: "OTDM texnologiyasida kanallar nimaga asoslanib ajratiladi?",
        variantlar: [
            "vaqt slotlariga",
            " chastotaga",
            " signal quvvatiga",
            " signal amplitudasiga"
        ],
        togri: "Vaqt slotlariga"
    },

    {
        savol: "OTDM va WDM orasidagi asosiy farq nimada?",
        variantlar: [
            "OTDM bitta to‘lqin uzunligida ishlaydi",
            "OTDM faqat rang bo‘yicha ishlaydi",
            "WDM vaqt slotlari bo‘yicha ishlaydi",
            "WDM faqat bitta signal uzatadi"
        ],
        togri: "OTDM bitta to‘lqin uzunligida ishlaydi"
    },

    {
        savol: "ROADM qanday qurilma hisoblanadi?",
        variantlar: [
            "Qayta konfiguratsiya qilinadigan aqlli optik multipleksor",
            " Qayta konfiguratsiya qilinadigan optik signalni kuchaytiruvchi qurilma",
            " Qayta konfiguratsiya qilinadigan signalni elektr signalga aylantiruvchi qurilma",
            " Qayta konfiguratsiya qilinadigan lazer nurlanishini hosil qiluvchi qurilma"
        ],
        togri: "Qayta konfiguratsiya qilinadigan aqlli optik multipleksor"
    },

    {
        savol: "WSS texnologiyasi nima uchun xizmat qiladi?",
        variantlar: [
            "Signallarni to‘lqin uzunligi bo‘yicha saralash uchun",
            " Signallarni to‘lqin uzunligi bo‘yicha quvvatini oshirish uchun",
            " Signallarni to‘lqin uzunligi bo‘yicha kodlash uchun",
            " Signallarni elektr impulslarini uzatish uchun"
        ],
        togri: "Signallarni to‘lqin uzunligi bo‘yicha saralash uchun"
    },

    {
        savol: "DWDM texnologiyasi yordamida qanday tezlikdagi kanallar uzatilishi mumkin?",
        variantlar: [
            "100 Gbit/s, 400 Gbit/s va hatto 800 Gbit/s",
            " 1 Mbit/s",
            " 10 Mbit/s",
            " 100 Mbit/s"
        ],
        togri: "100 Gbit/s, 400 Gbit/s va hatto 800 Gbit/s"
    },

    {
        savol: "Data Centerlar orasidagi aloqa uchun asosan qaysi texnologiya qo‘llaniladi?",
        variantlar: [
            "CWDM",
            " Analog multiplekslash",
            " Radioaloqa",
            " Mis kabel tizimlari"
        ],
        togri: "CWDM"
    },

    {
        savol: "Sanoat va xavfsizlik tizimlarida multipleksorlar qanday maqsadda qo‘llaniladi?",
        variantlar: [
            "Ko‘plab video oqimlarni bitta magistral tolaga yig‘ish uchun",
            " Ko‘plab video oqimlarda signalni kuchaytirish uchun",
            " Ko‘plab video oqimlarda signalni vaqt bo‘yicha ajratish uchun",
            " Ko‘plab video oqimlarda elektr energiyasini boshqarish uchun"
        ],
        togri: "Ko‘plab video oqimlarni bitta magistral tolaga yig‘ish uchun"
    },

    {
        savol: "Optik multipleksorlarning xavfsizlik afzalligi nimada?",
        variantlar: [
            "Kanallar alohida to‘lqin uzunligida bo‘lgani uchun xalaqit kam bo‘ladi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun signal tezligini oshiradi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun signal amplitudasini kamaytiradi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun elektr quvvatini boshqaradi"
        ],
        togri: "Kanallar alohida to‘lqin uzunligida bo‘lgani uchun xalaqit kam bo‘ladi"
    }
];
