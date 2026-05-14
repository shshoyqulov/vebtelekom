const SAVOLLAR = [
    {
        savol: "XSS (Cross-Site Scripting) tahdidi asosan nimaga bog‘liq?",
        variantlar: [
            "Foydalanuvchi kiritgan kodni tekshirmasdan chiqarishga",
            "Server tezligini noto‘g‘ri sozlashga",
            "Brauzer tarixini saqlab qolishga",
            "Ma’lumotlar bazasini zaxiralashga"
        ],
        togri: "Foydalanuvchi kiritgan kodni tekshirmasdan chiqarishga"
    },

    {
        savol: "XSS hujumida hujumchi odatda nimani kiritishga urinadi?",
        variantlar: [
            "Zararli skript kodini",
            "SQL jadval tuzilmasini",
            "CSS animatsiya faylini",
            "Server konfiguratsiyasini"
        ],
        togri: "Zararli skript kodini"
    },

    {
        savol: "htmlspecialchars() funksiyasining asosiy vazifasi nima?",
        variantlar: [
            "Maxsus belgilarni xavfsiz ko‘rinishga o‘tkazish",
            "JSON obyektlarini saralash",
            "HTTP so‘rovlarini yuborish",
            "Brauzer xotirasini tozalash"
        ],
        togri: "Maxsus belgilarni xavfsiz ko‘rinishga o‘tkazish"
    },

    {
        savol: "Quyidagi belgining xavfsiz ko‘rinishi qaysi: < ?",
        variantlar: [
            "&lt;",
            "&gt;",
            "&amp;",
            "&copy;"
        ],
        togri: "&lt;"
    },

    {
        savol: "ENT_QUOTES parametri nima uchun ishlatiladi?",
        variantlar: [
            "Bir va qo‘shtirnoqlarni ham xavfsizlashtirish uchun",
            "Faqat HTML teglarni yashirish uchun",
            "JSON massivni kodlash uchun",
            "Brauzer kodlashini o‘zgartirish uchun"
        ],
        togri: "Bir va qo‘shtirnoqlarni ham xavfsizlashtirish uchun"
    },

    {
        savol: "UTF-8 kodlashini ko‘rsatishning asosiy maqsadi nima?",
        variantlar: [
            "Belgilarni to‘g‘ri qayta ishlash",
            "Server tezligini oshirish",
            "PHP funksiyalarini qisqartirish",
            "Brauzer oynasini boshqarish"
        ],
        togri: "Belgilarni to‘g‘ri qayta ishlash"
    },

    {
        savol: "Himoyasiz kodda foydalanuvchi kiritgan <script> tegi nima qilishi mumkin?",
        variantlar: [
            "Brauzer tomonidan bajarilishi mumkin",
            "Avtomatik JSON ga aylanishi mumkin",
            "Faqat matn sifatida chiqishi mumkin",
            "Server tomonidan o‘chirib yuborilishi mumkin"
        ],
        togri: "Brauzer tomonidan bajarilishi mumkin"
    },

    {
        savol: "Xavfsiz variantda <script> tegi qanday ko‘rinishda chiqadi?",
        variantlar: [
            "Oddiy matn sifatida",
            "Faol JavaScript sifatida",
            "Avtomatik HTML shaklida",
            "Brauzer oynasida yashirin holda"
        ],
        togri: "Oddiy matn sifatida"
    },

    {
        savol: "PHP da foydalanuvchi ma’lumotlarini xavfsiz chiqarish qachon muhim hisoblanadi?",
        variantlar: [
            "HTML sahifaga qayta chiqarilganda",
            "CSS fayl yuklanganda",
            "Brauzer yopilganda",
            "Server qayta ishga tushganda"
        ],
        togri: "HTML sahifaga qayta chiqarilganda"
    },

    {
        savol: "XSS tahdididan himoyalanishning eng muhim usullaridan biri qaysi?",
        variantlar: [
            "Kiritilgan ma’lumotni filtrlash va kodlash",
            "Brauzer tarixini avtomatik o‘chirish",
            "Server vaqtini yashirish",
            "HTML fayl hajmini kamaytirish"
        ],
        togri: "Kiritilgan ma’lumotni filtrlash va kodlash"
    }
];