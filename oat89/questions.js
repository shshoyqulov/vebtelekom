const SAVOLLAR = [
    {
        savol: "Yorug‘lik oqimini modulyatsiyalash qanday jarayon hisoblanadi?",
        variantlar: [
            "Yorug‘lik to‘lqini parametrlarini axborot signaliga mos ravishda o‘zgartirish",
            " Yorug‘lik to‘lqini parametrlarini axborot signaliga mos ravishda yorug‘lik intensivligini kamaytirish",
            " Yorug‘lik to‘lqini parametrlarini axborot signaliga mos ravishda  optik signalni elektr signalga aylantirish",
            " Yorug‘lik to‘lqini parametrlarini axborot signaliga mos ravishda lazer quvvatini oshirish"
        ],
        togri: "Yorug‘lik to‘lqini parametrlarini axborot signaliga mos ravishda o‘zgartirish"
    },

    {
        savol: "Optik modulyatsiyada qaysi parametrlar o‘zgartirilishi mumkin?",
        variantlar: [
            "Amplituda, chastota, faza va qutblanish",
            " Foton, amplituda va tok kuchi",
            " Qarshilik va sig‘im",
            " Kuchlanish va tok"
        ],
        togri: "Amplituda, chastota, faza va qutblanish"
    },

    {
        savol: "Yorug‘lik modulyatsiyasining asosiy turlari qaysilar?",
        variantlar: [
            "Ichki va tashqi modulyatsiyalash",
            "Analog va raqamli modulyatsiyalash",
            "Magnit va elektr modulyatsiyalash",
            "Yuqori va past chastotali modulyatsiyalash"
        ],
        togri: "Ichki va tashqi modulyatsiyalash"
    },

    {
        savol: "Ichki modulyatsiyalashda yorug‘lik signali qanday boshqariladi?",
        variantlar: [
            "Nurlanish manbasining o‘ziga ta’sir ko‘rsatish orqali",
            " Nurlanish tashqi kristallar yordamida",
            " Nurlanish optik filtr orqali",
            " Nurlanish magnit maydon yordamida"
        ],
        togri: "Nurlanish manbasining o‘ziga ta’sir ko‘rsatish orqali"
    },

    {
        savol: "Ichki modulyatsiyalash asosan qaysi qurilmalarda amalga oshiriladi?",
        variantlar: [
            "Lazer diodlari va LED",
            " Optik filtrларда",
            " Rezonatorларда",
            " Fotodiodlarda"
        ],
        togri: "Lazer diodlari va LEDlarda"
    },

    {
        savol: "Nima sababdan lazer diodlari yuqori chastotalarda modulyatsiyalash imkonini beradi?",
        variantlar: [
            "Inersiyasi juda kichik bo‘lgani uchun",
            " Katta o‘lchamli bo‘lgani uchun",
            " Yuqori haroratda ishlagani uchun",
            " Kuchlanishi katta bo‘lgani uchun"
        ],
        togri: "Inersiyasi juda kichik bo‘lgani uchun"
    },

    {
        savol: "LED ning lazerlarga nisbatan asosiy kamchiligi nimada?",
        variantlar: [
            "Tezligi pastroq",
            " Energiya sarfi katta",
            " Signalni kuchaytira olmaydi",
            " Magnit maydonda ishlaydi"
        ],
        togri: "Tezligi pastroq"
    },

    {
        savol: "Ichki modulyatsiyalashning asosiy afzalligi qaysi?",
        variantlar: [
            "Qo‘shimcha tashqi modulyatorlarga ehtiyoj yo‘qligi",
            " Qo‘shimcha tashqi modulyatorning  uzoq masofada ishlashi",
            " Qo‘shimcha tashqi modulyatorning yuqori quvvat talab qilishi",
            " Qo‘shimcha tashqi modulyatorning tashqi lazer bilan ishlashi"
        ],
        togri: "Qo‘shimcha tashqi modulyatorlarga ehtiyoj yo‘qligi"
    },

    {
        savol: "Ichki modulyatsiyadagi chirp effekti nimani anglatadi?",
        variantlar: [
            "Tok o‘zgarganda lazer chastotasining ham o‘zgarishi",
            " Tok o‘zgarganda amplitudaning kamayishi",
            " Tok o‘zgarganda signalning yo‘qolishi",
            " Tok o‘zgarganda optik tolada qizish yuz berishi"
        ],
        togri: "Tok o‘zgarganda lazer chastotasining ham o‘zgarishi"
    },

    {
        savol: "Ichki modulyatsiya qaysi tizimlarda keng qo‘llaniladi?",
        variantlar: [
            "Lokal tarmoqlar va FTTH texnologiyalarida",
            " Sun’iy yo‘ldosh tizimlarida va FTTH texnologiyalarida ",
            " Radar tizimlarida va FTTH texnologiyalarida ",
            " Magnit aloqa tizimlarida va FTTH texnologiyalarida "
        ],
        togri: "Lokal tarmoqlar va FTTH texnologiyalarida"
    },

    {
        savol: "Juda yuqori tezlik va uzoq masofa talab qilinganda qaysi modulyatsiya ishlatiladi?",
        variantlar: [
            "Tashqi modulyatsiyalash",
            " Ichki modulyatsiyalash",
            " Amplitudaviy modulyatsiya",
            " Magnit modulyatsiyasi"
        ],
        togri: "Tashqi modulyatsiyalash"
    },

    {
        savol: "Tashqi modulyatsiyalash qanday amalga oshiriladi?",
        variantlar: [
            "Doimiy lazer nuri tashqi qurilma yordamida boshqariladi",
            "Lazer toki to‘liq uzib qo‘yiladi",
            " Optik tolani qizdirish orqali",
            " Fotodiod yordamida tashqi qurilma yordamida boshqariladi "
        ],
        togri: "Doimiy lazer nuri tashqi qurilma yordamida boshqariladi"
    },

    {
        savol: "Tashqi modulyatsiyada ma’lumot qachon nurga yuklanadi?",
        variantlar: [
            "Nur manbadan chiqib bo‘lgandan keyin",
            "Lazer hosil bo‘lishidan oldin",
            " Nur qabul qilish vaqtida",
            " Nur uzatish tugagach"
        ],
        togri: "Nur manbadan chiqib bo‘lgandan keyin"
    },

    {
        savol: "Tashqi modulyatsiyada eng keng tarqalgan qurilma qaysi?",
        variantlar: [
            "Max-Sander interferometri (MZI)",
            " Fotodiod",
            " Fabri-Pero rezonatori",
            " LED matritsasi"
        ],
        togri: "Max-Sander interferometri (MZI)"
    },

    {
        savol: "MZI modulyatorida yorug‘lik bilan nima sodir bo‘ladi?",
        variantlar: [
            "Nur ikkiga bo‘linib, keyin yana birlashtiriladi",
            "Nur kuchaytiriladi, keyin yana birlashtiriladi ",
            "Nur yutiladi, keyin yana birlashtiriladi ",
            "Nur tarqatiladi, keyin yana birlashtiriladi "
        ],
        togri: "Nur ikkiga bo‘linib, keyin yana birlashtiriladi"
    },

    {
        savol: "Elektrooptik modulyatsiyalash qaysi effektga asoslanadi?",
        variantlar: [
            "Pokkels effektiga",
            "Faradey effektiga",
            "Raman effektiga",
            "Brillyuen effektiga"
        ],
        togri: "Pokkels effektiga"
    },

    {
        savol: "Pokkels effektida nima o‘zgaradi?",
        variantlar: [
            "Kristallning sindirish ko‘rsatkichi",
            " Kristall harorati",
            " Tok kuchi",
            " Magnit qarshilik"
        ],
        togri: "Kristallning sindirish ko‘rsatkichi"
    },

    {
        savol: "Akustooptik modulyatorlarda akustik to‘lqinlar nimaga sabab bo‘ladi?",
        variantlar: [
            "Nurning difraksiyasiga",
            "Nur signalning kuchayishiga",
            "Nur qutblanishning yo‘qolishiga",
            "Nur chastota kamayishiga"
        ],
        togri: "Nurning difraksiyasiga"
    },

    {
        savol: "Tashqi modulyatsiyaning asosiy afzalligi nimada?",
        variantlar: [
            "40–100 Gbit/s va undan yuqori tezliklarda ishlashi",
            " Tashqi modulyatsiyaning qurilmasining arzonligi",
            " Tashqi modulyatsiyaning qurilmasining oddiy tuzilishga egaligi",
            " Tashqi modulyatsiyaning qurilmasining energiya sarfi katta bo‘lishi"
        ],
        togri: "40–100 Gbit/s va undan yuqori tezliklarda ishlashi"
    },

    {
        savol: "Tashqi modulyatsiyada chirp effekti qanday bo‘ladi?",
        variantlar: [
            "Deyarli yo‘q",
            "Juda yuqori",
            " Qisqa masofada paydo bo‘ladi",
            " LEDda kuzatiladi"
        ],
        togri: "Deyarli yo‘q"
    },

    {
        savol: "Tashqi modulyatsiya asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Magistral optik tolali aloqa liniyalarida",
            " Juda qisqa masofali optik tolali aloqa liniyalarida ",
            " Qisqa lokal tarmoqlarda",
            " Shahar ichi optik tolali aloqa liniyalarida "
        ],
        togri: "Magistral optik tolali aloqa liniyalarida"
    },

    {
        savol: "Optik modulyator qanday qurilma?",
        variantlar: [
            "Yorug‘lik parametrlarini tashqi signal yordamida o‘zgartiruvchi qurilma",
            " Yorug‘lik parametrlarini o‘zgartiruvchi optik signalni qabul qiluvchi qurilma",
            " Yorug‘lik parametrlarini o‘zgartiruvchi  signalni kuchaytiruvchi qurilma",
            " Yorug‘lik parametrlarini o‘zgartiruvchi  yorug‘lik hosil qiluvchi qurilma"
        ],
        togri: "Yorug‘lik parametrlarini tashqi signal yordamida o‘zgartiruvchi qurilma"
    }
];
