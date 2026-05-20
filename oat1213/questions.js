const SAVOLLAR = [
    {
        savol: "Optik attenyuator qanday qurilma hisoblanadi?",
        variantlar: [
            "Optik signal quvvatini ma’lum darajada kamaytiruvchi passiv qurilma",
            " Optik signal signal chastotasini oshiruvchi qurilma",
            " Optik signalni elektr signalga aylantiruvchi qurilma",
            " Optik signalni modulyatsiyalovchi qurilma"
        ],
        togri: "Optik signal quvvatini ma’lum darajada kamaytiruvchi passiv qurilma"
    },

    {
        savol: "Optik attenyuator signalga qanday ta’sir qiladi?",
        variantlar: [
            "Signal shaklini saqlagan holda faqat quvvatini kamaytiradi",
            " Signal shaklini saqlagan holda faqat signal chastotasini kamaytiradi",
            "Signal shaklini butunlay o‘zgartiradi",
            " Signal shaklini saqlagan holda faqat signal fazasini o‘zgartiradi"
        ],
        togri: "Signal shaklini saqlagan holda faqat quvvatini kamaytiradi"
    },

    {
        savol: "Optik attenyuatorning asosiy vazifalaridan biri nima?",
        variantlar: [
            "Qabul qiluvchi fotodiodni ortiqcha quvvatdan himoya qilish",
            " Qabul qiluvchi fotodiodda lazer nurini kuchaytirish",
            " Qabul qiluvchi fotodiodda signal tezligini oshirish",
            " Qabul qiluvchi fotodiodda optik filtrlarni boshqarish"
        ],
        togri: "Qabul qiluvchi fotodiodni ortiqcha quvvatdan himoya qilish"
    },

    {
        savol: "DWDM tizimlarida attenyuator nima uchun ishlatiladi?",
        variantlar: [
            "Kanallar signal quvvatini muvozanatlash uchun",
            " Kanallar signal quvvatini kodlash uchun",
            " Kanallarda lazer haroratini boshqarish uchun",
            " Kanalli optik tolani himoyalash uchun"
        ],
        togri: "Kanallar signal quvvatini muvozanatlash uchun"
    },

    {
        savol: "Attenyuator yordamida tizimni sinash qanday amalga oshiriladi?",
        variantlar: [
            "Masofadagi signal pasayishi sun’iy yaratiladi",
            " Masofadagi signal tezligi kamaytiriladi",
            " Optik tola uzunligi qisqartiriladi",
            " Optik tolada  modulyatsiya turi almashtiriladi"
        ],
        togri: "Masofadagi signal pasayishi sun’iy yaratiladi"
    },

    {
        savol: "Scattering usulida nima sodir bo‘ladi?",
        variantlar: [
            "Yorug‘lik oqimi maxsus tuzilmalar yordamida sochiladi",
            " Yorug‘lik oqimi maxsus tuzilmalar yordamida signal kuchaytiriladi",
            " Yorug‘lik oqimi maxsus tuzilmalar yordamida signal chastotasi kamayadi",
            " Yorug‘lik oqimi maxsus tuzilmalar yordamida signal fazasi o‘zgaradi"
        ],
        togri: "Yorug‘lik oqimi maxsus tuzilmalar yordamida sochiladi"
    },

    {
        savol: "Air gap usulida signal qanday kamayadi?",
        variantlar: [
            "Ikki konnektor orasidagi tirqish sabab nur qisman chiqib ketadi",
            " Ikki konnektor orasidagi tirqish sabab signal qayta modulyatsiyalanadi",
            " Ikki konnektor orasidagi tirqish sabab lazer quvvati kamayadi",
            " Ikki konnektor orasidagi tirqish sabab signal qutblanishi o‘zgaradi"
        ],
        togri: "Ikki konnektor orasidagi tirqish sabab nur qisman chiqib ketadi"
    },

    {
        savol: "Fixed attenyuatorning asosiy xususiyati nimada?",
        variantlar: [
            "Signalni doimiy dB qiymatida pasaytiradi",
            "Signalni avtomatik kuchaytiradi",
            " Laboratoriyada ishlatiladi",
            " Signalni filtrlash uchun ishlatiladi"
        ],
        togri: "Signalni doimiy dB qiymatida pasaytiradi"
    },

    {
        savol: "VOA qisqartmasi nimani anglatadi?",
        variantlar: [
            "Variable Optical Attenuator",
            "Variable Optical Adapter",
            "Visual Optical Analyzer",
            "Voltage Optical Amplifier"
        ],
        togri: "Variable Optical Attenuator"
    },

    {
        savol: "Variable attenyuatorlar asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Laboratoriya va dinamik tarmoqlarda",
            " WiFi, radioaloqa tizimlarida",
            " Televizorlarda",
            " Elektr stansiyalarida"
        ],
        togri: "Laboratoriya va dinamik tarmoqlarda"
    },

    {
        savol: "10 dB attenyuatsiya nimani bildiradi?",
        variantlar: [
            "Signal quvvati taxminan 10 marta kamayishini",
            "Signal quvvati 10 marta oshishini",
            "Signal tezligi 10 marta kamayishini",
            "Signal chastotasi 10 marta oshishini"
        ],
        togri: "Signal quvvati taxminan 10 marta kamayishini"
    },

    {
        savol: "Attenyuatorlarning asosiy ishchi to‘lqin uzunliklari qaysilar?",
        variantlar: [
            "1310 nm va 1550 nm",
            "450 nm va 650 nm",
            "10 nm va 20 nm",
            "2500 nm va 5000 nm"
        ],
        togri: "1310 nm va 1550 nm"
    },

    {
        savol: "SC/APC attenyuatorining asosiy xususiyati nimada?",
        variantlar: [
            "Qaytish yo‘qotishlari kam bo‘lgan qiya silliqlangan turi",
            " Qaytish yo‘qotishlari kam bo‘lgan metall qoplamali turi",
            " Qaytish yo‘qotishlari kam bo‘lgan signal kuchaytiruvchi turi",
            " Qaytish yo‘qotishlari kam bo‘lgan qisqa masofali aloqa uchun turi"
        ],
        togri: "Qaytish yo‘qotishlari kam bo‘lgan qiya silliqlangan turi"
    },

    {
        savol: "Optik filtr qanday qurilma hisoblanadi?",
        variantlar: [
            "Ma’lum to‘lqin uzunliklarini tanlab o‘tkazuvchi yoki qaytaruvchi qurilma",
            " Ma’lum to‘lqin uzunliklarini tanlab signalni kuchaytiruvchi qurilma",
            " Ma’lum to‘lqin uzunliklarini tanlab optik signalni elektr signalga aylantiruvchi qurilma",
            " Ma’lum to‘lqin uzunliklarini tanlab lazer nurlanishini hosil qiluvchi qurilma"
        ],
        togri: "Ma’lum to‘lqin uzunliklarini tanlab o‘tkazuvchi yoki qaytaruvchi qurilma"
    },

    {
        savol: "Bandpass filtrlar qanday ishlaydi?",
        variantlar: [
            " tor diapazondagi to‘lqinlarni o‘tkazadi",
            " uzun to‘lqinlarni o‘tkazadi",
            " qisqa to‘lqinlarni o‘tkazadi",
            "barcha to‘lqinlarni teng kamaytiradi"
        ],
        togri: " tor diapazondagi to‘lqinlarni o‘tkazadi"
    },

    {
        savol: "Telekommunikatsiyada optik filtrlar nima uchun ishlatiladi?",
        variantlar: [
            "WDM tizimlarida signallarni ajratish uchun",
            " Optik tolani qizdirish uchun",
            " Optik tolada signalni kodlash uchun",
            " Optik tolada elektr signal hosil qilish uchun"
        ],
        togri: "WDM tizimlarida signallarni ajratish uchun"
    },

    {
        savol: "Optik izolyator qanday vazifani bajaradi?",
        variantlar: [
            "Nurni faqat bir yo‘nalishda o‘tkazib, teskari nurni to‘sadi",
            " Nurni faqat bir yo‘nalishda o‘tkazib, signalni kuchaytiradi",
            " Nurni faqat bir yo‘nalishda o‘tkazib, signal chastotasini kamaytiradi",
            " Nurni faqat bir yo‘nalishda o‘tkazib, signalni modulyatsiyalaydi"
        ],
        togri: "Nurni faqat bir yo‘nalishda o‘tkazib, teskari nurni to‘sadi"
    },

    {
        savol: "Optik izolyatorning ishlashi qaysi effektga asoslangan?",
        variantlar: [
            "Faradey magnito-optik effektiga",
            "Raman effektiga",
            "Brillyuen effektiga",
            "Difraksiya effektiga"
        ],
        togri: "Faradey magnito-optik effektiga"
    },

    {
        savol: "Qaytgan nur lazerga qanday ta’sir qilishi mumkin?",
        variantlar: [
            "Lazer barqarorligini buzishi va shovqinni oshirishi mumkin",
            " Lazer barqarorligini buzishi va signalni kuchaytirishi mumkin",
            " Lazer barqarorligini buzishi va optik tolani sovutishi mumkin",
            " Lazer barqarorligini buzishi va signal tezligini oshirishi mumkin"
        ],
        togri: "Lazer barqarorligini buzishi va shovqinni oshirishi mumkin"
    },

    {
        savol: "Optik izolyatorlarda izolyatsiya odatda qanday bo‘ladi?",
        variantlar: [
            "30 dB dan 60 dB gacha",
            "1 dB dan 5 dB gacha",
            "0.01 dB dan 0.1 dB gacha",
            "100 dB dan 200 dB gacha"
        ],
        togri: "30 dB dan 60 dB gacha"
    },

    {
        savol: "Optik sirkulyator qanday qurilma hisoblanadi?",
        variantlar: [
            "Signallarni portlar orasida bir tomonlama aylana bo‘ylab yo‘naltiruvchi qurilma",
            " Signallarni portlar orasida bir tomonlama aylana bo‘ylab signalni kuchaytiruvchi qurilma",
            " Signallarni portlar orasida optik signalni elektr signalga aylantiruvchi qurilma",
            " Signallarni portlar orasida bir tomonlama aylana bo‘ylab modulyatsiyalovchi qurilma"
        ],
        togri: "Signallarni portlar orasida bir tomonlama aylana bo‘ylab yo‘naltiruvchi qurilma"
    },

    {
        savol: "Sirkulyatorda yorug‘lik 1-portdan kirsa qayerga o‘tadi?",
        variantlar: [
            " 2-portga",
            " 3-portga",
            "Bir vaqtning o‘zida barcha portlarga",
            " kirish portiga qaytadi"
        ],
        togri: " 2-portga"
    },

    {
        savol: "Optik sirkulyatorning asosiy qo‘llanilish sohalaridan biri qaysi?",
        variantlar: [
            "Bitta tolada ikki tomonlama aloqa tashkil qilish",
            " Bitta tolada signalni kuchaytirish",
            " Bitta tolada lazer nurlarini hosil qilish",
            " Bitta tolada signal chastotasini kamaytirish"
        ],
        togri: "Bitta tolada ikki tomonlama aloqa tashkil qilish"
    }
];
