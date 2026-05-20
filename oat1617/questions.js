const SAVOLLAR = [
    {
        savol: "Optik kommutator qanday qurilma hisoblanadi?",
        variantlar: [
            "Optik signalni bir kirish portidan kerakli chiqish portiga yo‘naltiruvchi qurilma",
            "Bir nechta optik signallarni bitta tolaga birlashtiruvchi qurilma",
            " Optik signalni bir kirish portidan kerakli signalni elektr signalga aylantiruvchi qurilma",
            " Optik signalni bir kirish portidan kerakli signal amplitudasini oshiruvchi qurilma"
        ],
        togri: "Optik signalni bir kirish portidan kerakli chiqish portiga yo‘naltiruvchi qurilma"
    },

    {
        savol: "Optik kommutatorlarning asosiy afzalligi nimada?",
        variantlar: [
            "Signalni elektrga aylantirmasdan boshqarishida",
            " Optik signalni kuchaytirishib boshqarishida ",
            " Optik signalni modulyatsiyalashib boshqarishida ",
            " Optik signal chastotasini kamaytirishib boshqarishida "
        ],
        togri: "Signalni elektrga aylantirmasdan boshqarishida"
    },

    {
        savol: "OEO kommutatsiyasi nimani anglatadi?",
        variantlar: [
            "Optik → Elektr → Optik konvertatsiyasini",
            "Optik → Optik → Optik uzatishni",
            "Elektr → Optik → Elektr uzatishni",
            " Optik signalni filtrlashni"
        ],
        togri: "Optik → Elektr → Optik konvertatsiyasini"
    },

    {
        savol: "OEO usulining birinchi bosqichi qanday amalga oshiriladi?",
        variantlar: [
            "Optik signal fotodetektor yordamida elektr signalga aylantiriladi",
            "Elektr signal lazer yordamida kuchaytiriladi",
            "Signal to‘g‘ridan-to‘g‘ri kommutatsiya qilinadi",
            "Signal amplitudasi kamaytiriladi"
        ],
        togri: "Optik signal fotodetektor yordamida elektr signalga aylantiriladi"
    },

    {
        savol: "OEO usulining asosiy kamchiligi nimada?",
        variantlar: [
            "Signalni qayta ishlash sababli kechikish va energiya sarfi oshishi",
            " Signalni qayta ishlash sababli signal amplitudasi kamayishi",
            " Signalni qayta ishlash sababli optik kabel qizib ketishi",
            " Signalni qayta ishlash sababli signal chastotasi kamayishi"
        ],
        togri: "Signalni qayta ishlash sababli kechikish va energiya sarfi oshishi"
    },

    {
        savol: "OOO kommutatsiyasi qanday usul hisoblanadi?",
        variantlar: [
            "Signalni yorug‘lik holatida boshqaruvchi shaffof kommutatsiya usuli",
            " Signalni yorug‘lik holatida signalni elektr signalga aylantiruvchi usul",
            " Signalni yorug‘lik holatida analog signallar bilan ishlovchi usul",
            " Signalni yorug‘lik holatida past tezlikdagi kommutatsiya usuli"
        ],
        togri: "Signalni yorug‘lik holatida boshqaruvchi shaffof kommutatsiya usuli"
    },

    {
        savol: "OOO usulida yorug‘lik qanday boshqariladi?",
        variantlar: [
            "Ko‘zgular yoki boshqa optik elementlar yordamida kerakli portga yo‘naltiriladi",
            " Ko‘zgular yoki boshqa optik elementlar yordamida elektr signalga aylantiriladi",
            " Ko‘zgular yoki boshqa optik elementlar yordamida signal amplitudasi kamaytiriladi",
            " Ko‘zgular yoki boshqa optik elementlar yordamida signal filtrlab yuboriladi"
        ],
        togri: "Ko‘zgular yoki boshqa optik elementlar yordamida kerakli portga yo‘naltiriladi"
    },

    {
        savol: "OOO kommutatsiyasining asosiy afzalliklaridan biri nima?",
        variantlar: [
            "Minimal kechikish va juda yuqori tezlik",
            " Juda yuqori tezlik signalni kodlash imkoniyati",
            " Juda yuqori tezlik arzon qurilmalar ishlatilishi",
            " Juda yuqori tezlik analog signal uzatilishi"
        ],
        togri: "Minimal kechikish va juda yuqori tezlik"
    },

    {
        savol: "Optik kommutatorlarning protokolga bog‘liq emasligi nimani anglatadi?",
        variantlar: [
            "Qaysi formatdagi signal kelishidan qat’i nazar, faqat nurni yo‘naltirishini",
            " Optik signallarni uzatishda Ethernet bilan ishlashini",
            " Optik signallarni uzatishda SDH bilan ishlashini",
            " Optik signallarni uzatishda ATM bilan ishlashini"
        ],
        togri: "Qaysi formatdagi signal kelishidan qat’i nazar, faqat nurni yo‘naltirishini"
    },

    {
        savol: "MEMS kommutatorlari qanday ishlaydi?",
        variantlar: [
            "Mikroskopik ko‘zgular yordamida yorug‘likni kerakli yo‘nalishga qaytaradi",
            " Mikroskopik ko‘zgular yordamida yorug‘lik signalni kuchaytiradi",
            " Mikroskopik ko‘zgular yordamida yorug‘lik signalni elektr shaklga aylantiradi",
            " Mikroskopik ko‘zgular yordamida yorug‘lik signal amplitudasini kamaytiradi"
        ],
        togri: "Mikroskopik ko‘zgular yordamida yorug‘likni kerakli yo‘nalishga qaytaradi"
    },

    {
        savol: "MEMS texnologiyasida ko‘zgular asosan qanday usul bilan boshqariladi?",
        variantlar: [
            "Elektrostatik kuch yordamida",
            " Magnit maydon yordamida",
            " Mexanik bosim yordamida",
            " Lazer nuri yordamida"
        ],
        togri: "Elektrostatik kuch yordamida"
    },

    {
        savol: "2D MEMS kommutatorining asosiy xususiyati nima?",
        variantlar: [
            "Ko‘zgular faqat ikki holatda ishlaydi",
            "Ko‘zgular istalgan burchakka egiladi",
            " Ko‘zgular istalgan 2D formatda ishlaydi ",
            " Ko‘zgular 2 o’lchamli analog signal uzatadi"
        ],
        togri: "Ko‘zgular faqat ikki holatda ishlaydi"
    },

    {
        savol: "3D MEMS kommutatorlarining asosiy afzalligi nimada?",
        variantlar: [
            "Minglab portlarga ega katta optik matritsalarni yaratish imkonida",
            " Minglab kichik tarmoqlarda ishlashida",
            " Minglab qurilmalarni arzon ishlab chiqarilishida",
            " Minglab qurilmalarni past tezlikda ishlashida"
        ],
        togri: "Minglab portlarga ega katta optik matritsalarni yaratish imkonida"
    },

    {
        savol: "MEMS texnologiyasining asosiy afzalliklaridan biri nima?",
        variantlar: [
            "Kam energiya sarfi va kam signal yo‘qotishi",
            " Kam energiya sarfi va signalni modulyatsiyalashi",
            " Kam energiya sarfi va signalni filtrlashi",
            " Kam energiya sarfi va elektr signal bilan ishlashi"
        ],
        togri: "Kam energiya sarfi va kam signal yo‘qotishi"
    },

    {
        savol: "Termo-optik kommutatorlar qaysi hodisaga asoslanadi?",
        variantlar: [
            "Harorat ta’sirida sinish ko‘rsatkichi o‘zgarishiga",
            " Harorat ta’sirida sinish difraksiya hodisasiga",
            " Harorat ta’sirida sinish elektromagnit induksiyaga",
            " Harorat ta’sirida sinish rezonans hodisasiga"
        ],
        togri: "Harorat ta’sirida sinish ko‘rsatkichi o‘zgarishiga"
    },

    {
        savol: "Termo-optik kommutatorlarning asosiy afzalligi nimada?",
        variantlar: [
            "Mexanik qismlar bo‘lmagani uchun uzoq xizmat qilishida",
            " Mexanik qismlar bo‘lmagani uchun signalni kuchaytirishida",
            " Mexanik qismlar bo‘lmagani uchun past tezlikda ishlashida",
            " Mexanik qismlar bo‘lgani uchun bitta port bilan ishlashida"
        ],
        togri: "Mexanik qismlar bo‘lmagani uchun uzoq xizmat qilishida"
    },

    {
        savol: "Termo-optik kommutatorlarning asosiy kamchiligi nima?",
        variantlar: [
            "Doimiy energiya talab qilishi va qizib ketishi",
            " Doimiy energiya talab qilishi va signal amplitudasini kamaytirishi",
            " Doimiy energiya talab qilishi va qisqa masofalarda ishlashi",
            " Doimiy energiya talab qilishi va analog tizimlar bilan ishlashi"
        ],
        togri: "Doimiy energiya talab qilishi va qizib ketishi"
    },

    {
        savol: "LCD kommutatorlar qanday fizik xususiyatga asoslanadi?",
        variantlar: [
            "Yorug‘lik qutblanishini o‘zgartirishga",
            " Yorug‘lik signal amplitudasini oshirishga",
            " Yorug‘lik signal chastotasini kamaytirishga",
            " Yorug‘lik signalni elektrga aylantirishga"
        ],
        togri: "Yorug‘lik qutblanishini o‘zgartirishga"
    },

    {
        savol: "Akusto-optik kommutatorlar qanday to‘lqinlar yordamida ishlaydi?",
        variantlar: [
            "Tovush to‘lqinlari yordamida",
            " Elektromagnit to‘lqinlar yordamida",
            " Radio to‘lqinlar yordamida",
            " Lazer impulslari yordamida"
        ],
        togri: "Tovush to‘lqinlari yordamida"
    },

    {
        savol: "Akusto-optik kommutatorlarda difraksiya panjarasi qanday hosil bo‘ladi?",
        variantlar: [
            "Ultratovush to‘lqinlari kristal ichida zichlik o‘zgarishlari hosil qilishi orqali",
            " Ultratovush to‘lqinlari kristal ichida elektr toki orqali",
            " Ultratovush to‘lqinlari kristal ichida lazer qizdirishi orqali",
            " Ultratovush to‘lqinlari kristal ichida magnit maydon orqali"
        ],
        togri: "Ultratovush to‘lqinlari kristal ichida zichlik o‘zgarishlari hosil qilishi orqali"
    },

    {
        savol: "Akusto-optik kommutatorlarning asosiy afzalligi nima?",
        variantlar: [
            "Mikrosoniyalar ichida juda tez kommutatsiya qilishi",
            " Mikrosoniyalar ichida juda tez signalni filtrlashi",
            " Mikrosoniyalar ichida juda tez katta portlar soniga egaligi",
            " Mikrosoniyalar ichida juda tez past energiya sarfi"
        ],
        togri: "Mikrosoniyalar ichida juda tez kommutatsiya qilishi"
    },

    {
        savol: "Akusto-optik kommutatorlarning asosiy kamchiligi nimada?",
        variantlar: [
            "Portlar sonining cheklanganligi va yuqori energiya sarfi",
            " Portlar sonining cheklanganligi va signal amplitudasining kamayishi",
            " Portlar sonining cheklanganligi va mexanik qismlar mavjudligi",
            " Portlar sonining cheklanganligi va past tezlikda ishlashi"
        ],
        togri: "Portlar sonining cheklanganligi va yuqori energiya sarfi"
    },

    {
        savol: "Termo-optik kommutatorlar ko‘proq qaysi tizimlarda ishlatiladi?",
        variantlar: [
            "ROADM tizimlarida",
            " ROADM tizimlarida va radiotarmoqlarda",
            " ROADM tizimlarida va analog video tizimlarida",
            " ROADM tizimlarida va mis kabel tarmoqlarida"
        ],
        togri: "ROADM tizimlarida"
    },

    {
        savol: "Optik kommutatorlarning magistral tarmoqlardagi asosiy vazifasi nima?",
        variantlar: [
            "Katta hajmdagi ma’lumotlarni tez yo‘naltirish",
            " Katta hajmdagi ma’lumotlarni tez yo‘naltirishda  signal amplitudasini kamaytirish",
            " Katta hajmdagi ma’lumotlarni tez yo‘naltirishda  elektr signal hosil qilish",
            " Katta hajmdagi ma’lumotlarni tez yo‘naltirishda  kabel uzunligini oshirish"
        ],
        togri: "Katta hajmdagi ma’lumotlarni tez yo‘naltirish"
    }
];
