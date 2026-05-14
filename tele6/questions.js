const SAVOLLAR = [
    {
        savol: "Kompyuter tarmoqlarida ma’lumot uzatishda asosan qaysi texnologiyalar ishlatiladi?",
        variantlar: [
            "Kanallar va paketlar kommutatsiyasi",
            "Faqat optik va analog uzatish",
            "Signal va amplituda boshqaruvi",
            "Router va modem konfiguratsiyasi"
        ],
        togri: "Kanallar va paketlar kommutatsiyasi"
    },

    {
        savol: "Kanallar kommutatsiyasi qanday prinsip asosida ishlaydi?",
        variantlar: [
            "Oldindan doimiy aloqa kanali o‘rnatiladi",
            "Ma’lumotlar paketlarga bo‘lib yuboriladi",
            "Signal routerlarda qayta ishlanadi",
            "Barcha qurilmalar umumiy kanal ishlatadi"
        ],
        togri: "Oldindan doimiy aloqa kanali o‘rnatiladi"
    },

    {
        savol: "Circuit Switching texnologiyasining asosiy xususiyati nima?",
        variantlar: [
            "Aloqa davomida kanal band bo‘lib turadi",
            "Paketlar turli yo‘llardan uzatiladi",
            "Har bir paket mustaqil yo‘naltiriladi",
            "Ma’lumotlar faqat qisqa bloklarda uzatiladi"
        ],
        togri: "Aloqa davomida kanal band bo‘lib turadi"
    },

    {
        savol: "Kanallar kommutatsiyasining eng mashhur misoli qaysi?",
        variantlar: [
            "An’anaviy telefon tarmoqlari",
            "Elektron pochta tizimlari",
            "Bulutli saqlash xizmatlari",
            "Ijtimoiy tarmoq platformalari"
        ],
        togri: "An’anaviy telefon tarmoqlari"
    },

    {
        savol: "Kanallar kommutatsiyasida birinchi bosqich nima hisoblanadi?",
        variantlar: [
            "Ulanishni o‘rnatish jarayoni",
            "Paketlarni qayta yig‘ish",
            "Signalni siqish jarayoni",
            "Paketlarni marshrutlash bosqichi"
        ],
        togri: "Ulanishni o‘rnatish jarayoni"
    },

    {
        savol: "Kanallar kommutatsiyasida kanal bo‘sh bo‘lmasa nima yuz beradi?",
        variantlar: [
            "Band signali yuboriladi",
            "Paketlar avtomatik bo‘linadi",
            "Router qayta ishga tushadi",
            "Signal kuchaytirib yuboriladi"
        ],
        togri: "Band signali yuboriladi"
    },

    {
        savol: "Kanallar kommutatsiyasining afzalliklaridan biri qaysi?",
        variantlar: [
            "Barqaror va sifatli aloqa ta’minlaydi",
            "Paketlarni turli yo‘llarga yuboradi",
            "Resurslarni doimiy tejab ishlaydi",
            "Kanalni barcha foydalanuvchi bo‘lishadi"
        ],
        togri: "Barqaror va sifatli aloqa ta’minlaydi"
    },

    {
        savol: "Kanallar kommutatsiyasining asosiy kamchiligi nima?",
        variantlar: [
            "Resurslarning samarasiz ishlatilishi",
            "Paketlarni qayta yig‘ish qiyinligi",
            "Signalni manzillashning murakkabligi",
            "Paketlarning tartibsiz yetib kelishi"
        ],
        togri: "Resurslarning samarasiz ishlatilishi"
    },

    {
        savol: "FDM texnologiyasi nimaga asoslanadi?",
        variantlar: [
            "Chastota diapazonini bo‘lishga",
            "Vaqt oralig‘ini bo‘lib uzatishga",
            "Paketlarni segmentlarga ajratishga",
            "Signalni qayta kodlash jarayoniga"
        ],
        togri: "Chastota diapazonini bo‘lishga"
    },

    {
        savol: "TDM texnologiyasi qanday ishlaydi?",
        variantlar: [
            "Har foydalanuvchiga vaqt oralig‘i ajratiladi",
            "Har signal alohida kabel orqali uzatiladi",
            "Paketlar turli routerlarga yuboriladi",
            "Signal chastotasi avtomatik o‘zgaradi"
        ],
        togri: "Har foydalanuvchiga vaqt oralig‘i ajratiladi"
    },

    {
        savol: "Packet Switching texnologiyasida ma’lumotlar qanday uzatiladi?",
        variantlar: [
            "Kichik paketlarga bo‘linib uzatiladi",
            "Doimiy kanal orqali uzatiladi",
            "Faqat analog signal ko‘rinishida uzatiladi",
            "Bitta katta blok sifatida yuboriladi"
        ],
        togri: "Kichik paketlarga bo‘linib uzatiladi"
    },

    {
        savol: "Paketlar kommutatsiyasining asosiy qo‘llanilish sohasi qaysi?",
        variantlar: [
            "Internet tarmoqlari",
            "Analog telefon liniyalari",
            "Elektr uzatish tizimlari",
            "Radioeshittirish qurilmalari"
        ],
        togri: "Internet tarmoqlari"
    },

    {
        savol: "Packet Switching texnologiyasida doimiy fizik ulanish talab qilinadimi?",
        variantlar: [
            "Doimiy ulanish talab qilinmaydi",
            "Har doim maxsus kanal kerak bo‘ladi",
            "Faqat optik tarmoqlarda talab qilinadi",
            "Barcha routerlar bir xil yo‘l ishlatadi"
        ],
        togri: "Doimiy ulanish talab qilinmaydi"
    },

    {
        savol: "Paket tarkibidagi Header qismi nimani saqlaydi?",
        variantlar: [
            "Manzil va xizmat ma’lumotlarini",
            "Faqat foydali yuk qismini",
            "Signal kuchlanish qiymatini",
            "Tasvir va audio fayllarni"
        ],
        togri: "Manzil va xizmat ma’lumotlarini"
    },

    {
        savol: "Payload qismi nimani o‘z ichiga oladi?",
        variantlar: [
            "Asosiy uzatilayotgan ma’lumotni",
            "Paketning tugash belgisini",
            "Marshrutlash jadvalini",
            "Signal chastota qiymatini"
        ],
        togri: "Asosiy uzatilayotgan ma’lumotni"
    },

    {
        savol: "Store and Forward prinsipi nimani anglatadi?",
        variantlar: [
            "Paketlarni saqlab keyin uzatishni",
            "Signalni to‘g‘ridan-to‘g‘ri kuchaytirishni",
            "Kanalni oldindan band qilishni",
            "Paketlarni analog signalga aylantirishni"
        ],
        togri: "Paketlarni saqlab keyin uzatishni"
    },

    {
        savol: "Segmentatsiya jarayonida nima amalga oshiriladi?",
        variantlar: [
            "Katta fayl paketlarga bo‘linadi",
            "Signal chastotasi kamaytiriladi",
            "Kanal tezligi o‘zgartiriladi",
            "Paketlar qayta yig‘iladi"
        ],
        togri: "Katta fayl paketlarga bo‘linadi"
    },

    {
        savol: "Paketlar kommutatsiyasining asosiy afzalligi nima?",
        variantlar: [
            "Tarmoq resurslari samarali ishlatiladi",
            "Har foydalanuvchi alohida kanal oladi",
            "Signal hech qachon kechikmaydi",
            "Kanal doim bo‘sh holatda qoladi"
        ],
        togri: "Tarmoq resurslari samarali ishlatiladi"
    },

    {
        savol: "Packet Switching texnologiyasining kamchiligi qaysi?",
        variantlar: [
            "Kechikish yuzaga kelishi mumkin",
            "Kanal doimiy band bo‘lib qoladi",
            "Aloqa faqat analog ishlaydi",
            "Paketlar bo‘linmay uzatiladi"
        ],
        togri: "Kechikish yuzaga kelishi mumkin"
    },

    {
        savol: "Datagram tarmoqlarida paketlar qanday uzatiladi?",
        variantlar: [
            "Har biri mustaqil yo‘naltiriladi",
            "Faqat bitta yo‘ldan uzatiladi",
            "Doimiy kanal orqali yuboriladi",
            "Signal bilan birga saqlanadi"
        ],
        togri: "Har biri mustaqil yo‘naltiriladi"
    }
];