const SAVOLLAR = [
    {
        savol: "Axborot nazariyasi asosan nimani o‘rganadi?",
        variantlar: [
            "Axborotni uzatish va kodlash jarayonlarini",
            "Elektr energiyasini boshqarish usullarini",
            "Kompyuter qismlarini ishlab chiqarishni",
            "Mobil qurilmalarni ta’mirlash jarayonini"
        ],
        togri: "Axborotni uzatish va kodlash jarayonlarini"
    },

    {
        savol: "Axborot nazariyasining asoschilaridan biri kim?",
        variantlar: [
            "Alan Turing",
            "Nikola Tesla",
            "Klod Shennon",
            "Isaak Nyuton"
        ],
        togri: "Klod Shennon"
    },

    {
        savol: "Shennon nazariyasining asosiy vazifasi nima?",
        variantlar: [
            "Axborotni samarali uzatish usullarini aniqlash",
            "Elektr tokini uzatish tizimlarini yaratish",
            "Kompyuter xotirasini kengaytirish yo‘llari",
            "Tarmoq kabellarini joylashtirish qoidalari"
        ],
        togri: "Axborotni samarali uzatish usullarini aniqlash"
    },

    {
        savol: "Shennon-Hartley qonuni nimani belgilaydi?",
        variantlar: [
            "Kanalning maksimal uzatish tezligini",
            "Signalning minimal kuchlanish qiymatini",
            "Kompyuterning maksimal ish tezligini",
            "Tarmoq kabelining umumiy uzunligini"
        ],
        togri: "Kanalning maksimal uzatish tezligini"
    },

    {
        savol: "Kanal o‘tkazuvchanligi nimani anglatadi?",
        variantlar: [
            "Ma’lumot uzatishning maksimal tezligini",
            "Signal amplitudasining o‘zgarishini",
            "Kabelning fizik uzunlik darajasini",
            "Qurilmaning elektr quvvat sarfini"
        ],
        togri: "Ma’lumot uzatishning maksimal tezligini"
    },

    {
        savol: "Signal-shovqin nisbati nimani ifodalaydi?",
        variantlar: [
            "Signal va shovqin quvvatlari nisbatini",
            "Kanal va kabel uzunligi nisbatini",
            "Kompyuter va server tezligi nisbatini",
            "Foydalanuvchi va tarmoq soni nisbatini"
        ],
        togri: "Signal va shovqin quvvatlari nisbatini"
    },

    {
        savol: "Entropiya nimani ifodalaydi?",
        variantlar: [
            "Xabardagi noaniqlik darajasini",
            "Signalning fizik kuchlanishini",
            "Kanalning tashqi uzunligini",
            "Qurilmaning ishlash tezligini"
        ],
        togri: "Xabardagi noaniqlik darajasini"
    },

    {
        savol: "Qaysi xabar ko‘proq axborot olib keladi?",
        variantlar: [
            "Kam uchraydigan kutilmagan xabar",
            "Doimiy takrorlanadigan oddiy xabar",
            "Faqat qisqa matndan iborat xabar",
            "Oldindan ma’lum bo‘lgan signal turi"
        ],
        togri: "Kam uchraydigan kutilmagan xabar"
    },

    {
        savol: "Kanal deganda nima tushuniladi?",
        variantlar: [
            "Signal uzatiladigan aloqa muhiti",
            "Ma’lumot saqlanadigan xotira qismi",
            "Internetga ulovchi maxsus dastur",
            "Signalni kuchaytiruvchi elektron blok"
        ],
        togri: "Signal uzatiladigan aloqa muhiti"
    },

    {
        savol: "Shovqin nima hisoblanadi?",
        variantlar: [
            "Signalga aralashuvchi tashqi buzilish",
            "Signalning foydali asosiy qismi",
            "Optik toladagi yorug‘lik oqimi",
            "Kompyuter ichidagi sovutish tizimi"
        ],
        togri: "Signalga aralashuvchi tashqi buzilish"
    },

    {
        savol: "Xabarlar teng ehtimollikda bo‘lsa entropiya qanday bo‘ladi?",
        variantlar: [
            "Maksimal qiymatga ega bo‘ladi",
            "Doimiy ravishda kamayib boradi",
            "Har doim nolga teng bo‘ladi",
            "Signal kuchiga bog‘liq bo‘ladi"
        ],
        togri: "Maksimal qiymatga ega bo‘ladi"
    },

    {
        savol: "1 bit axborot nimani bildiradi?",
        variantlar: [
            "Ikki holatdan birini aniqlash miqdorini",
            "Bir sekunddagi signal uzatish hajmini",
            "Kompyuter xotirasining eng kichik qismini",
            "Signal amplitudasining o‘lchov darajasini"
        ],
        togri: "Ikki holatdan birini aniqlash miqdorini"
    },

    {
        savol: "Entropiyasi yuqori xabar qanday bo‘ladi?",
        variantlar: [
            "Ko‘proq axborot olib keluvchi xabar",
            "Doim takrorlanadigan oddiy signal",
            "Faqat analog shakldagi uzatish turi",
            "Signal sifatiga ta’sir qilmaydigan holat"
        ],
        togri: "Ko‘proq axborot olib keluvchi xabar"
    },

    {
        savol: "Kanal sig‘imi entropiyadan kichik bo‘lsa nima yuz beradi?",
        variantlar: [
            "Axborotning bir qismi yo‘qoladi",
            "Signal sifati avtomatik yaxshilanadi",
            "Kanal tezligi keskin oshib ketadi",
            "Shovqin miqdori butunlay kamayadi"
        ],
        togri: "Axborotning bir qismi yo‘qoladi"
    },

    {
        savol: "Kodlash jarayonining asosiy vazifasi nima?",
        variantlar: [
            "Axborotni siqish va himoyalash",
            "Signal amplitudasini oshirib borish",
            "Elektr quvvatini tejab ishlatish",
            "Kabel uzunligini kamaytirib borish"
        ],
        togri: "Axborotni siqish va himoyalash"
    },

    {
        savol: "Hamming va Reed-Solomon algoritmlari nima uchun ishlatiladi?",
        variantlar: [
            "Xatolarni aniqlash va tuzatish uchun",
            "Signal chastotasini kamaytirish uchun",
            "Kompyuter xotirasini kengaytirish uchun",
            "Tarmoq uzunligini optimallashtirish uchun"
        ],
        togri: "Xatolarni aniqlash va tuzatish uchun"
    },

    {
        savol: "MP3 va MPEG standartlari nima vazifani bajaradi?",
        variantlar: [
            "Axborotni siqish va optimallashtirish",
            "Elektr signallarini kuchaytirib uzatish",
            "Kabel orqali tok uzatishni boshqarish",
            "Kompyuter sovutish tizimini nazorat qilish"
        ],
        togri: "Axborotni siqish va optimallashtirish"
    },

    {
        savol: "Adaptiv modulyatsiya qanday maqsadda qo‘llaniladi?",
        variantlar: [
            "Aloqa sifatini barqaror saqlash uchun",
            "Kompyuter quvvatini oshirish uchun",
            "Signalni analog shaklga o‘tkazish uchun",
            "Tarmoqdagi foydalanuvchilarni kamaytirish uchun"
        ],
        togri: "Aloqa sifatini barqaror saqlash uchun"
    },

    {
        savol: "Kod alfaviti nimani anglatadi?",
        variantlar: [
            "Kodlashda ishlatiladigan belgilar to‘plamini",
            "Signal uzatiladigan fizik muhit turini",
            "Kompyuter xotirasidagi fayllar ro‘yxatini",
            "Internet tarmog‘idagi serverlar sonini"
        ],
        togri: "Kodlashda ishlatiladigan belgilar to‘plamini"
    },

    {
        savol: "Shovqinsiz aloqa kanalidagi asosiy vazifa nima?",
        variantlar: [
            "Maksimal tezlikda axborot uzatish",
            "Signal amplitudasini doimiy oshirish",
            "Elektr energiyasi sarfini ko‘paytirish",
            "Kanal uzunligini minimal saqlash"
        ],
        togri: "Maksimal tezlikda axborot uzatish"
    }
];