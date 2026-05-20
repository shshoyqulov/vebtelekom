const SAVOLLAR = [
    {
        savol: "Optik liniya trakti qanday ta’riflanadi?",
        variantlar: [
            "Optik signalni uzatish, kuchaytirish va sifatini tiklashni ta’minlovchi qurilmalar yig‘indisi",
            " Optik signalni uzatish, kuchaytirish va sifatini tiklashni ta’minlovchi optik kabeldan iborat uzatish muhiti",
            " Optik signalni uzatish, kuchaytirish va sifatini tiklashni ta’minlovchi optik signalni modulyatsiyalovchi qurilma",
            " Optik signalni uzatish, kuchaytirish va sifatini tiklashni ta’minlovchi optik signalni qabul qiluvchi tizim"
        ],
        togri: "Optik signalni uzatish, kuchaytirish va sifatini tiklashni ta’minlovchi qurilmalar yig‘indisi"
    },

    {
        savol: "Optik tolada signalning so‘nishiga asosan nima sabab bo‘ladi?",
        variantlar: [
            "Yorug‘likning yutilishi va sochilishi",
            " Yorug‘lik signali amplitudasining oshishi",
            " Yorug‘lik modulyatsiya turi o‘zgarishi",
            " Yorug‘lik uzatuvchi lazer haroratining pasayishi"
        ],
        togri: "Yorug‘likning yutilishi va sochilishi"
    },

    {
        savol: "Dispersiya qanday hodisaga olib keladi?",
        variantlar: [
            "Signal impulslarining kengayib va buzilib kelishiga",
            " Signal quvvatining ortishiga va buzilib kelishiga ",
            " Signal chastotasining kamayishiga va buzilib kelishiga ",
            " Optik kabelning qizishiga va buzilib kelishiga "
        ],
        togri: "Signal impulslarining kengayib va buzilib kelishiga"
    },

    {
        savol: "Retranslyatorsiz uchastka uzunligi nima sababdan chegaralanadi?",
        variantlar: [
            "So‘nish, dispersiya va shovqinlar sababli",
            " Optik kabel uzunligi sababli",
            " Lazer quvvati so’nishi sababli",
            " Elektr energiyasi yetishmasligi sababli"
        ],
        togri: "So‘nish, dispersiya va shovqinlar sababli"
    },

    {
        savol: "TOA liniyalarida uzatish sifati qanday baholanadi?",
        variantlar: [
            "Minimal signal-shovqin nisbati bilan",
            " Signal amplitudasi bilan",
            " Signal chastotasi bilan",
            " Optik kabel diametri bilan"
        ],
        togri: "Minimal signal-shovqin nisbati bilan"
    },

    {
        savol: "Raqamli uzatish tizimlari uchun minimal shovqindan himoyalanganlik qancha bo‘lishi kerak?",
        variantlar: [
            "20–25 dBi dan kam bo‘lmasligi kerak",
            "5–10 dBi dan kam bo‘lmasligi kerak",
            "50–60 dBi dan kam bo‘lmasligi kerak",
            "100 dBi dan kam bo‘lmasligi kerak"
        ],
        togri: "20–25 dBi dan kam bo‘lmasligi kerak"
    },

    {
        savol: "Optik tizimlarda regeneratorlar orasidagi masofa nega katta bo‘lishi mumkin?",
        variantlar: [
            "Optik kabellarda so‘nish juda kichik bo‘lgani uchun",
            " Optik kabellarda signal chastotasi past bo‘lgani uchun",
            " Optik kabel diametri katta bo‘lgani uchun",
            " Optik kabellarda elektr qarshilik bo‘lmagani uchun"
        ],
        togri: "Optik kabellarda so‘nish juda kichik bo‘lgani uchun"
    },

    {
        savol: "Retranslyatorlarning asosiy turlari qaysilar?",
        variantlar: [
            "Regeneratorlar va optik kuchaytirgichlar",
            " Lazerlar va LED",
            " Multipleksor va demultipleksorlar",
            " Fotodetektor va filtrlar"
        ],
        togri: "Regeneratorlar va optik kuchaytirgichlar"
    },

    {
        savol: "Optik kuchaytirgich signal bilan qanday ishlaydi?",
        variantlar: [
            "Signalni shaklini tiklamasdan faqat kuchaytiradi",
            "Signalni to‘liq qayta tiklaydi",
            "Signalni elektr signalga aylantirmaydi va yo‘q qiladi",
            " Signal chastotasini kamaytiradi va to‘liq qayta tiklaydi "
        ],
        togri: "Signalni shaklini tiklamasdan faqat kuchaytiradi"
    },

    {
        savol: "Optik kuchaytirgichlarning asosiy kamchiligi nimada?",
        variantlar: [
            "Shovqinni ham signal bilan birga kuchaytirishi",
            " Shovqinni ham signal bilan bitta signal bilan ishlashi",
            " Shovqinni ham signal elektr signal bilan ishlashi",
            " Signal bilan qisqa masofalarda ishlashi"
        ],
        togri: "Shovqinni ham signal bilan birga kuchaytirishi"
    },

    {
        savol: "Regeneratorlarda qo‘llaniladigan 3R funksiyasi nimani anglatadi?",
        variantlar: [
            "Re-amplify, Re-shape va Re-time",
            "Repeat, Reduce va Restore",
            "Receive, Relay va Rebuild",
            "Reflect, Refract va Redirect"
        ],
        togri: "Re-amplify, Re-shape va Re-time"
    },

    {
        savol: "Re-shape funksiyasining vazifasi nima?",
        variantlar: [
            "Signal impulslarining shaklini tiklash",
            "Signal amplitudasini kamaytirish",
            "Signalni optik shaklga aylantirish",
            "Signal chastotasini boshqarish"
        ],
        togri: "Signal impulslarining shaklini tiklash"
    },

    {
        savol: "Re-time funksiyasi nimani bajaradi?",
        variantlar: [
            "Signalni vaqt bo‘yicha sinxronlashtiradi",
            "Signal amplitudasini oshiradi",
            "Signalni optik shaklga o‘tkazadi",
            "Signalni filtrlaydi"
        ],
        togri: "Signalni vaqt bo‘yicha sinxronlashtiradi"
    },

    {
        savol: "Regeneratorlarda signal qanday jarayon orqali qayta ishlanadi?",
        variantlar: [
            "Optik → Elektr → Optik (O–E–O)",
            " Optik → Optik",
            " Elektr → Elektr",
            "Elektr → Optik → Elektr"
        ],
        togri: "Optik → Elektr → Optik (O–E–O)"
    },

    {
        savol: "Regeneratorning birinchi bloki qanday vazifani bajaradi?",
        variantlar: [
            "Fotodetektor orqali optik signalni elektr signalga aylantiradi",
            " Fotodetektor orqali optik signalni modulyatsiyalaydi",
            " Fotodetektor orqali optik signalni filtrlaydi",
            " Fotodetektor orqali optik signalni to‘g‘ridan-to‘g‘ri kuchaytiradi"
        ],
        togri: "Fotodetektor orqali optik signalni elektr signalga aylantiradi"
    },

    {
        savol: "Optik kuchaytirgichlarning asosiy afzalligi nimada?",
        variantlar: [
            "Bir nechta WDM signallarni bir vaqtning o‘zida kuchaytirishi",
            " Bir nechta WDM signallarni bir vaqtning o‘zida bitta kanalni uzatishi",
            " Bir nechta WDM signallarni bir vaqtning o‘zida elektr shaklga aylantirishi",
            " Bir nechta WDM signallarni bir vaqtning o‘zida past tezlikda ishlashi"
        ],
        togri: "Bir nechta WDM signallarni bir vaqtning o‘zida kuchaytirishi"
    },

    {
        savol: "Regenerator va optik kuchaytirgich orasidagi asosiy farq nimada?",
        variantlar: [
            "Regenerator signalni tiklaydi, kuchaytirgich esa faqat kuchaytiradi",
            "Kuchaytirgich signalni tiklaydi, regenerator esa faqat kuchaytiradi",
            "Ikkalasi faqat signalni filtrlash uchun ishlatiladi",
            "Ikkalasi faqat analog tizimlarda ishlaydi"
        ],
        togri: "Regenerator signalni tiklaydi, kuchaytirgich esa faqat kuchaytiradi"
    },

    {
        savol: "Liniya kodlash nima?",
        variantlar: [
            "Raqamli ma’lumotlarni uzatish muhiti uchun mos shaklga keltirish jarayoni",
            " Raqamli ma’lumotlarni uzatish muhiti uchun signalni kuchaytirish jarayoni",
            " Raqamli ma’lumotlarni uzatish muhiti uchun signalni modulyatsiyalash usuli",
            " Raqamli ma’lumotlarni uzatish muhiti uchun signalni qabul qilish usuli"
        ],
        togri: "Raqamli ma’lumotlarni uzatish muhiti uchun mos shaklga keltirish jarayoni"
    },

    {
        savol: "Liniya kodlarining asosiy vazifalaridan biri nima?",
        variantlar: [
            "Sinxronlashni ta’minlash va xatoliklarni kamaytirish",
            " Sinxronlashni ta’minlash va signal amplitudasini oshirish",
            " Sinxronlashni ta’minlash va signal tezligini kamaytirish",
            " Sinxronlashni ta’minlash va optik kabelni himoyalash"
        ],
        togri: "Sinxronlashni ta’minlash va xatoliklarni kamaytirish"
    },

    {
        savol: "NRZ kodlash usulining asosiy kamchiligi nimada?",
        variantlar: [
            "Sinxronlash muammolari yuzaga kelishi mumkin",
            "Signal shakli tiklanmaydi",
            " Signal shakli analog tizimlarda ishlaydi",
            " Signal shaklinu uzatish uchun  qisqa masofalarda qo‘llaniladi"
        ],
        togri: "Sinxronlash muammolari yuzaga kelishi mumkin"
    },

    {
        savol: "RZ kodlash usulining asosiy xususiyati nimada?",
        variantlar: [
            "Har bir bit oxirida signal nolga qaytadi",
            "Signal darajasi o‘zgarmaydi",
            " Musbat impulslar ishlatiladi",
            " Manfiy impulslar ishlatiladi"
        ],
        togri: "Har bir bit oxirida signal nolga qaytadi"
    },

    {
        savol: "Manchester kodining asosiy afzalligi nima?",
        variantlar: [
            "Sinxronlashni juda yaxshi ta’minlashi",
            "Polosali kenglikni kamaytirishi",
            " Bitta signal bilan ishlashi",
            "Signalni kuchaytirib uzatishi"
        ],
        togri: "Sinxronlashni juda yaxshi ta’minlashi"
    },

    {
        savol: "AMI kodlash usulida “1” bitlari qanday ifodalanadi?",
        variantlar: [
            "Navbatma-navbat musbat va manfiy impulslar bilan",
            " Navbatma-navbat musbat impulslar bilan",
            " Navbatma-navbat manfiy impulslar bilan",
            " Navbatma-navbat bir va nol signal bilan"
        ],
        togri: "Navbatma-navbat musbat va manfiy impulslar bilan"
    },

    {
        savol: "4B/5B kodlash usulida nima amalga oshiriladi?",
        variantlar: [
            "4 bitli ma’lumot 5 bitli kodga o‘zgartiriladi",
            "5 bitli ma’lumot 4 bitga qisqartiriladi",
            "Signal amplitudasi ikki baravar oshiriladi",
            "Signal vaqt bo‘yicha siqiladi"
        ],
        togri: "4 bitli ma’lumot 5 bitli kodga o‘zgartiriladi"
    },

    {
        savol: "8B/10B kodlash usuli qaysi tizimlarda keng qo‘llaniladi?",
        variantlar: [
            "Yuqori tezlikli tizimlarda",
            " Analog uzatish tizimlarida",
            " Past tezlikli tizimlarda",
            " Telefon liniyalarida"
        ],
        togri: "Yuqori tezlikli tizimlarda"
    },

    {
        savol: "Optik regeneratorlarning asosiy afzalligi nimada?",
        variantlar: [
            "Signalni deyarli yangidek holatga tiklay olishi",
            " Signal amplitudasini oshirishi",
            " Shovqinni kuchaytirishi",
            " Analog tizimlarda ishlashi"
        ],
        togri: "Signalni deyarli yangidek holatga tiklay olishi"
    },

    {
        savol: "Optik kuchaytirgichlar nega suv osti optik liniyalarida qulay hisoblanadi?",
        variantlar: [
            "Ishonchliligi yuqori bo‘lgani uchun",
            " Arzonligi va chidamliligi uchun",
            " Signalni oson shakllantirgani uchun",
            " Signalni yuqori tezliklarda ishlagani uchun"
        ],
        togri: "Ishonchliligi yuqori bo‘lgani uchun"
    }
];
