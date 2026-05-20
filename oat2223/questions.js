const SAVOLLAR = [
    {
        savol: "TOAT jihozlarining asosiy xususiyatlaridan biri qaysi javobda to‘g‘ri ko‘rsatilgan?",
        variantlar: [
            "Ko‘p funksionalligi va murakkab tuzilishga egaligi",
            "Faqat bitta vazifani bajarishi",
            "Faqat analog signallar bilan ishlashi",
            "Faqat qisqa masofada ishlashi"
        ],
        togri: "Ko‘p funksionalligi va murakkab tuzilishga egaligi"
    },

    {
        savol: "TOAT tizimida bir nechta element rad etganda nima yuz berishi mumkin?",
        variantlar: [
            "Tizim ish sifati va samaradorligi kamayadi",
            "Tizim har doim to‘liq ishdan chiqadi",
            "Signal tezligi ortib ketadi",
            "Faqat elektr quvvati oshadi"
        ],
        togri: "Tizim ish sifati va samaradorligi kamayadi"
    },

    {
        savol: "Ekspluatatsiya so‘zi qanday ma’noni anglatadi?",
        variantlar: [
            "Nimadandir foydalanish yoki ishlatish",
            " Qurilmani ishlab chiqarish va ishlatish",
            " signalni uzatish, qurilma ishlab chiqarish va ishlatish",
            " foydalanish yoki ishlatish "
        ],
        togri: "Nimadandir foydalanish yoki ishlatish"
    },

    {
        savol: "Texnik ekspluatatsiya tizimi nimani tashkil etadi?",
        variantlar: [
            "TOAT qurilmalarining samarali ishlashiga yo‘naltirilgan tashkiliy-texnik tadbirlar majmuasini",
            " TOAT qurilmalarining samarali ishlashiga yo‘naltirilgan optik kabel ishlab chiqarish jarayonini",
            " TOAT qurilmalarining samarali ishlashiga yo‘naltirilgan signalni kodlash tizimini",
            " TOAT qurilmalarining samarali ishlashiga yo‘naltirilgan elektr ta’minoti qurilmalarini"
        ],
        togri: "TOAT qurilmalarining samarali ishlashiga yo‘naltirilgan tashkiliy-texnik tadbirlar majmuasini"
    },

    {
        savol: "TEO tushunchasi nimani bildiradi?",
        variantlar: [
            "Texnik ekspluatatsiya obyekti",
            "Texnik elektr-optik o‘zgartirgich",
            "Tashqi elektr operatori",
            "Telekommunikatsiya elektr-optika obyekti"
        ],
        togri: "Texnik ekspluatatsiya obyekti"
    },

    {
        savol: "Texnik xodim deb kimlarga aytiladi?",
        variantlar: [
            "Ekspluatatsion operatsiyalarni amalga oshiruvchi kishilarga",
            " Ekspluatatsion operatsiyalarining qurilma ishlab chiqaruvchilarga",
            " Ekspluatatsion operatsiyalarining dastur tuzuvchilarga",
            " Ekspluatatsion operatsiyalarining kabel montajchilariga"
        ],
        togri: "Ekspluatatsion operatsiyalarni amalga oshiruvchi kishilarga"
    },

    {
        savol: "Texnik ekspluatatsiya nazariyasi nimani o‘rganadi?",
        variantlar: [
            "TE jarayoni, qonuniyatlari va amalga oshirish usullarini",
            " TE jarayoni signal kuchaytirgichlarini",
            " TE jarayoni optik tolalarning kimyoviy tarkibini",
            " TE jarayoni lazer qurilmalarining ishlashini"
        ],
        togri: "TE jarayoni, qonuniyatlari va amalga oshirish usullarini"
    },

    {
        savol: "Dispersiyaning asosiy ta’siri nimada namoyon bo‘ladi?",
        variantlar: [
            "Impulslarning kengayib ketishida",
            "Signal amplitudasining ortishida",
            " Dispersiya elektr toki kamayishida",
            " Dispersiya signal rangining o‘zgarishida"
        ],
        togri: "Impulslarning kengayib ketishida"
    },

    {
        savol: "Dispersiya natijasida qabul qilgichda qanday muammo yuzaga keladi?",
        variantlar: [
            "Ikkita signalni ajrata olmaslik",
            "Signal quvvatining ortib ketishi",
            "Signal chastotasining ikki barobar oshishi",
            " elektr quvvatining yo‘qolishi"
        ],
        togri: "Ikkita signalni ajrata olmaslik"
    },

    {
        savol: "Texnik xizmat ko‘rsatishning asosiy maqsadi nima?",
        variantlar: [
            "TEOning ishga qobiliyatliligi va sozligini ta’minlash",
            " TEOning ishga qobiliyatliligi va sozligini ta’minlashda signal tezligini kamaytirish",
            " TEOning ishga qobiliyatliligi va sozligini ta’minlashda kabel uzunligini oshirish",
            " TEOning ishga qobiliyatliligi va sozligini ta’minlashda qurilmani o‘chirib qo‘yish"
        ],
        togri: "TEOning ishga qobiliyatliligi va sozligini ta’minlash"
    },

    {
        savol: "Ta’mirlash tushunchasi qaysi javobda to‘g‘ri berilgan?",
        variantlar: [
            "TOAT elementlarining sozligini qayta tiklash ishlari",
            " TOAT elementlarining signalni o‘lchash ishlari",
            " TOAT elementlarining kabelni almashtirish ishlari",
            " TOAT elementlarining signalni filtrlash ishlari"
        ],
        togri: "TOAT elementlarining sozligini qayta tiklash ishlari"
    },

    {
        savol: "Texnik ekspluatatsiyaning asosiy maqsadi nima?",
        variantlar: [
            "Rad etish holatlarini kamaytirish",
            "Signal chastotasini kamaytirish",
            " Optik kabel uzunligini oshirish",
            " Optik energiya sarfini oshirish"
        ],
        togri: "Rad etish holatlarini kamaytirish"
    },

    {
        savol: "Rad etish deganda nima tushuniladi?",
        variantlar: [
            "TOATning ish qobiliyatini to‘liq yoki qisman yo‘qotishi",
            "TOATda signalning vaqtincha kuchayishi",
            " TOATda kabelning qizib ketishi",
            " TOATda optik signalning rangi o‘zgarishi"
        ],
        togri: "TOATning ish qobiliyatini to‘liq yoki qisman yo‘qotishi"
    },

    {
        savol: "Ekspluatatsiya vositalariga nimalar kiradi?",
        variantlar: [
            "Asboblar, zahira bloklar va texnik qurilmalar majmuasi",
            " Asboblar, zahira bloklar va elektr generatorlari",
            " Asboblar, zahira bloklar va kompyuter dasturlari",
            " Asboblar, zahira bloklar va signal kuchaytirgichlari"
        ],
        togri: "Asboblar, zahira bloklar va texnik qurilmalar majmuasi"
    },

    {
        savol: "Texnik xizmat ko‘rsatish qachon amalga oshiriladi?",
        variantlar: [
            "Ekspluatatsiyaga kiritishda, ishlash davomida va rad etishda",
            " Ekspluatatsiyaga kiritishda, ishlash davomida va tizim ishdan chiqqanda",
            " Ekspluatatsiyaga kiritishda, ishlash davomida va montaj vaqtida",
            " Ekspluatatsiyaga kiritishda, ishlash davomida va signal yo‘qolganda"
        ],
        togri: "Ekspluatatsiyaga kiritishda, ishlash davomida va rad etishda"
    },

    {
        savol: "Texnik xizmat ko‘rsatish jarayoniga qaysi amal kiradi?",
        variantlar: [
            "Ishchi xarakteristikalarni o‘lchash",
            " Ishchi signal rangini o‘zgartirish",
            " Ishchi kabelni bo‘yash",
            " Ishchi qurilmani o‘lchash, o‘chirish"
        ],
        togri: "Ishchi xarakteristikalarni o‘lchash"
    },

    {
        savol: "PTXK qanday texnik xizmat turi hisoblanadi?",
        variantlar: [
            "Profilaktik texnik xizmat ko‘rsatish",
            "Passiv texnik kuchaytirishga xizmat ko‘rsatish ",
            "Parallel texnik kodlashga xizmat ko‘rsatish ",
            "Paketli texnik kanalga xizmat ko‘rsatish "
        ],
        togri: "Profilaktik texnik xizmat ko‘rsatish"
    },

    {
        savol: "Profilaktik texnik xizmat ko‘rsatishga qaysi ish kiradi?",
        variantlar: [
            "Davriy ekspluatatsion nazorat",
            " Ekspluatatsion avariya bartaraf etish",
            " Ekspluatatsion signal modulyatsiyasi",
            " Ekspluatatsion kabel montaji"
        ],
        togri: "Davriy ekspluatatsion nazorat"
    },

    {
        savol: "Ekspluatatsion nazorat nimani aniqlaydi?",
        variantlar: [
            "TEOning o‘rnatilgan talablarga mosligini",
            " TEOning o‘rnatilgan signal rangini",
            " TEOning o‘rnatilgan elektr kuchlanishini",
            " TEOning o‘rnatilgan kabel uzunligini"
        ],
        togri: "TEOning o‘rnatilgan talablarga mosligini"
    },

    {
        savol: "Anomaliya nima?",
        variantlar: [
            "Obyekt parametrining joriy va talab etilgan qiymati orasidagi farq",
            " Obyekt parametrining kabel uzilishi",
            " Obyekt parametrining signalning kuchayishi",
            " Obyekt parametrining elektr toki va yorug’lik yo‘qolishi"
        ],
        togri: "Obyekt parametrining joriy va talab etilgan qiymati orasidagi farq"
    },

    {
        savol: "Defekt qanday holat hisoblanadi?",
        variantlar: [
            "Obyektning talab etilgan funksiyani bajarish qobiliyatining chegaralanishi",
            " Obyektning talab etilgan funksiyani bajarishda  signal amplitudasining ortishi",
            " Obyektning talab etilgan funksiyani bajarishda lazerning qizib ketishi",
            " Obyektning talab etilgan funksiyani bajarishda optik kabelning cho‘zilishi"
        ],
        togri: "Obyektning talab etilgan funksiyani bajarish qobiliyatining chegaralanishi"
    },

    {
        savol: "Aniqlovchi parametr nimani baholash imkonini beradi?",
        variantlar: [
            "TEOning umumiy ish qobiliyatini",
            " TEOning umumiy signal rangini",
            " TEOning umumiy kabel diametrini",
            " TEOning umumiy elektr quvvatini"
        ],
        togri: "TEOning umumiy ish qobiliyatini"
    },

    {
        savol: "AVARIYA holatida nima yuz beradi?",
        variantlar: [
            "NOning rad etishi kuzatiladi",
            " NOning opto-elektrik signal sifati yomonlashadi",
            " NOning signal quvvati ortadi",
            " NOning uzatish tezligi kamayadi"
        ],
        togri: "NOning rad etishi kuzatiladi"
    },

    {
        savol: "OTDR qurilmasining asosiy vazifasi nima?",
        variantlar: [
            "Optik kabeldagi uzilish va signal yo‘qotilishi joyini aniqlash",
            " Optik kabeldagi uzilish va signalni modulyatsiyalash",
            " Optik kabeldagi uzilish va signalni kuchaytirish",
            " Optik kabeldagi uzilish va kabelni sovitish"
        ],
        togri: "Optik kabeldagi uzilish va signal yo‘qotilishi joyini aniqlash"
    }
];