const SAVOLLAR = [
    {
        savol: "Optik aloqa tizimi uzatish muhitiga ko‘ra qanday turlarga bo‘linadi?",
        variantlar: [
            "ochiq optik aloqa tizimi va tolali optik aloqa tizimiga",
            " analog va raqamli tizimlarga",
            " magistral va mahalliy tizimlarga",
            " bir modli va ko‘p modli tizimlarga"
        ],
        togri: "Ochiq optik aloqa tizimi va tolali optik aloqa tizimiga"
    },

    {
        savol: "OOAT deb qanday tizimga aytiladi?",
        variantlar: [
            "Axborot ochiq optik uzatish muhiti orqali uzatiladigan tizimga",
            "Axborot faqat optik tola orqali uzatiladigan tizimga",
            " radio to‘lqinlar orqali ishlovchi tizimga",
            " elektr signallarini uzatuvchi tizimga"
        ],
        togri: "Axborot ochiq optik uzatish muhiti orqali uzatiladigan tizimga"
    },

    {
        savol: "TOAT deb qanday tizimga aytiladi?",
        variantlar: [
            "Axborot tolali optik uzatish muhiti orqali uzatiladigan tizimga",
            "Axborot atmosfera orqali uzatiladigan tizimga",
            " suv ostida ishlaydigan tizimga",
            " analog signallarni uzatuvchi tizimga"
        ],
        togri: "Axborot tolali optik uzatish muhiti orqali uzatiladigan tizimga"
    },

    {
        savol: "Optik tolali aloqa tizimlari tarixining boshlanishi qaysi voqea bilan bog‘liq?",
        variantlar: [
            "1960-yilda birinchi lazer ixtiro qilinishi bilan",
            "1950-yilda radioaloqa paydo bo‘lishi bilan",
            "1970-yilda internet yaratilishi bilan",
            "1940-yilda televizor ishlab chiqarilishi bilan"
        ],
        togri: "1960-yilda birinchi lazer ixtiro qilinishi bilan"
    },

    {
        savol: "Optik tolaning yorug‘lik o‘tkazuvchi qismi qanday ataladi?",
        variantlar: [
            "Yadro",
            "Qoplama",
            "Modul",
            "Kanal"
        ],
        togri: "Yadro"
    },

    {
        savol: "Amortizator (qoplama)ning asosiy vazifasi nima?",
        variantlar: [
            "Nurlanishning yadrodan chiqib ketishini oldini olish",
            "Signal tezligini kamaytirish",
            " kabelni sovutish",
            "Elektr kuchlanishini oshirish"
        ],
        togri: "Nurlanishning yadrodan chiqib ketishini oldini olish"
    },

    {
        savol: "To‘liq ichki qaytish hosil bo‘lishi uchun qanday shart bajarilishi kerak?",
        variantlar: [
            "Yadroning sinish ko‘rsatkichi qoplamanikidan yuqori bo‘lishi kerak",
            "Qoplamaning sinish ko‘rsatkichi yadrodan yuqori bo‘lishi kerak",
            "Har ikkala muhitning sinish ko‘rsatkichi teng bo‘lishi kerak",
            "Havoning sinish ko‘rsatkichi eng katta bo‘lishi kerak"
        ],
        togri: "Yadroning sinish ko‘rsatkichi qoplamanikidan yuqori bo‘lishi kerak"
    },

    {
        savol: "Bir modli optik tolalarning yadro diametri odatda qancha bo‘ladi?",
        variantlar: [
            "9 mkm",
            "50 mkm",
            "62,5 mkm",
            "125 mkm"
        ],
        togri: "9 mkm"
    },

    {
        savol: "Ko‘p modli optik tolalarning yadro diametri odatda qanday bo‘ladi?",
        variantlar: [
            "50 yoki 62,5 mkm",
            "9 yoki 10 mkm",
            "100 yoki 125 mkm",
            "1 yoki 2 mkm"
        ],
        togri: "50 yoki 62,5 mkm"
    },

    {
        savol: "Barcha optik tolalar uchun qoplama diametri qanday qiymatga ega?",
        variantlar: [
            "125 mkm",
            "50 mkm",
            "62,5 mkm",
            "9 mkm"
        ],
        togri: "125 mkm"
    },

    {
        savol: "OT3 optik tolasi qanday xususiyatga ega?",
        variantlar: [
            "300 m gacha 10 Gbit/s tezlikni qo‘llab-quvvatlaydi",
            "1000 m gacha 100 Mbit/s tezlikni qo‘llab-quvvatlaydi",
            " analog signal uzatadi",
            " telefon aloqasida ishlatiladi"
        ],
        togri: "300 m gacha 10 Gbit/s tezlikni qo‘llab-quvvatlaydi"
    },

    {
        savol: "10 Gbit/s dan yuqori tezliklarda qaysi turdagi optik toladan foydalanish tavsiya etiladi?",
        variantlar: [
            "Bir modli optik tola",
            "OT1 ko‘p modli tola",
            "OT2 ko‘p modli tola",
            " gradiyentli tola"
        ],
        togri: "Bir modli optik tola"
    },

    {
        savol: "Ko‘p modli kabel nega bir modli kabelga qaraganda qimmatroq bo‘lishi mumkin?",
        variantlar: [
            "Yadro diametri kattaroq bo‘lgani uchun",
            "Qoplama diametri kichikroq bo‘lgani uchun",
            " metall element ishlatilgani uchun",
            "Signal tezligi past bo‘lgani uchun"
        ],
        togri: "Yadro diametri kattaroq bo‘lgani uchun"
    },

    {
        savol: "Bir modli optik aloqa asosan qayerlarda qo‘llaniladi?",
        variantlar: [
            "Dengiz va uzoq masofali magistral liniyalarda",
            " bino ichida",
            " qisqa masofali LAN tarmoqlarda",
            " telemetriya tizimlarida"
        ],
        togri: "Dengiz va uzoq masofali magistral liniyalarda"
    },

    {
        savol: "Ko‘p modli optik aloqa asosan qayerlarda qo‘llaniladi?",
        variantlar: [
            "300–550 m gacha bo‘lgan bino ichidagi magistral liniyalarda",
            " transokean aloqa tizimlarida",
            " kosmik aloqa tizimlarida",
            " suv osti tizimlarida"
        ],
        togri: "300–550 m gacha bo‘lgan bino ichidagi magistral liniyalarda"
    },

    {
        savol: "Uzun optik liniyalarni sinovdan o‘tkazishda qaysi qurilmadan foydalaniladi?",
        variantlar: [
            "OTDR reflektometridan",
            " multimetrdan",
            "Generator qurilmasidan",
            "Osiloskopdan"
        ],
        togri: "OTDR reflektometridan"
    },

    {
        savol: "OOAT uzatuvchi muhiti qanday turlarga bo‘linadi?",
        variantlar: [
            "Atmosfera, kosmik va suvosti muhitlariga",
            " atmosfera va yerosti muhitiga",
            " kosmik va yerosti muhitiga",
            " suvosti va tunnel muhitiga"
        ],
        togri: "Atmosfera, kosmik va suvosti muhitlariga"
    },

    {
        savol: "TOATning asosiy yo‘nalishi nimaga asoslangan?",
        variantlar: [
            "Optik tolalar orqali elektromagnit nurlanishni uzatishga",
            " radio to‘lqinlarni uzatishga",
            " elektr impulslarni uzatishga",
            " analog signallarni qayta ishlashga"
        ],
        togri: "Optik tolalar orqali elektromagnit nurlanishni uzatishga"
    },

    {
        savol: "Qo‘llaniladigan modulyatsiya turiga ko‘ra OAT qanday bo‘linadi?",
        variantlar: [
            "Analog va raqamli OATga",
            "Bir modli va ko‘p modli OATga",
            "Magistral va mahalliy OATga",
            "Atmosferali va suvosti OATga"
        ],
        togri: "Analog va raqamli OATga"
    },

    {
        savol: "Analog OATda qanday modulyatsiya turlari qo‘llaniladi?",
        variantlar: [
            "Amplituda, chastota va faza modulyatsiyasi",
            " amplituda modulyatsiyasi",
            " impuls modulyatsiyasi",
            " kvantlash modulyatsiyasi"
        ],
        togri: "Amplituda, chastota va faza modulyatsiyasi"
    },

    {
        savol: "Raqamli OATda qanday modulyatsiya usullaridan foydalaniladi?",
        variantlar: [
            "Diskret modulyatsiya usullaridan",
            " analog modulyatsiyadan",
            " amplitudali modulyatsiyadan",
            " fazali modulyatsiyadan"
        ],
        togri: "Diskret modulyatsiya usullaridan"
    },

    {
        savol: "Raqamli OATning analog OATga nisbatan asosiy afzalligi nimada?",
        variantlar: [
            "Shovqinga bardoshliligi yuqori",
            " arzon uskunalarda ishlashi",
            " qisqa masofada ishlashi",
            " analog signallarni uzatishi"
        ],
        togri: "Shovqinga bardoshliligi yuqori"
    },

    {
        savol: "Magistral OAT taxminan qancha masofaga signal uzatishga mo‘ljallangan?",
        variantlar: [
            "1000 km gacha",
            "100 km gacha",
            "300 km gacha",
            "50 km gacha"
        ],
        togri: "1000 km gacha"
    },

    {
        savol: "Mintaqaviy OAT taxminan qancha masofaga signal uzatadi?",
        variantlar: [
            "600 km gacha",
            "1000 km gacha",
            "50 km gacha",
            "100 km gacha"
        ],
        togri: "600 km gacha"
    },

    {
        savol: "Optik tashuvchini modulyatsiyalashda eng ko‘p qo‘llaniladigan usul qaysi?",
        variantlar: [
            "Intensivlik bo‘yicha modulyatsiyalash",
            " faza modulyatsiyasi",
            " qutblanish modulyatsiyasi",
            " chastotali modulyatsiya"
        ],
        togri: "Intensivlik bo‘yicha modulyatsiyalash"
    },

    {
        savol: "Bevosita fotodetektorlash usuli nimani anglatadi?",
        variantlar: [
            "Optik signalni fotodetektor orqali elektr signaliga aylantirish",
            "Elektr signalni optik signalga aylantirish",
            " signalni kuchaytirish",
            " signalni kodlash"
        ],
        togri: "Optik signalni fotodetektor orqali elektr signaliga aylantirish"
    },

    {
        savol: "Atmosferali OOATda aloqa sifati nimaga kuchli bog‘liq?",
        variantlar: [
            "Ob-havo sharoitlariga",
            " kabel uzunligiga",
            " signal chastotasiga",
            " uzatkich quvvatiga"
        ],
        togri: "Ob-havo sharoitlariga"
    },

    {
        savol: "Kosmik OOATning asosiy afzalligi nimada?",
        variantlar: [
            "Atmosfera buzilishlari hosil bo‘lmaydi",
            " analog signallar uzatiladi",
            "Shovqin sathi juda past bo‘ladi",
            "Qisqa masofada yuqori tezlik beradi"
        ],
        togri: "Atmosfera buzilishlari hosil bo‘lmaydi"
    },

    {
        savol: "OOATning keng qo‘llanilmasligiga sabab bo‘luvchi omillardan biri qaysi?",
        variantlar: [
            "Atmosfera xarakteristikalarining aloqa sifatiga ta’siri",
            "Optik tolalarning arzonligi",
            "Signalning haddan tashqari kuchliligi",
            "Qurilmalarning juda ixchamligi"
        ],
        togri: "Atmosfera xarakteristikalarining aloqa sifatiga ta’siri"
    },

    {
        savol: "TOATda OOATga xos kamchiliklar nega mavjud emas?",
        variantlar: [
            "Signallar optik tola orqali yo‘naltirilganligi uchun",
            " analog signallar ishlatilgani uchun",
            " qisqa masofalarda ishlatilgani uchun",
            "Atmosfera bilan bog‘liq bo‘lgani uchun"
        ],
        togri: "Signallar optik tola orqali yo‘naltirilganligi uchun"
    }
];
