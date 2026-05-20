const SAVOLLAR = [
    {
        savol: "Optik aloqa qanday aloqa turi hisoblanadi?",
        variantlar: [
            "Axborot yorug‘lik nuri ko‘rinishida optik tola yoki atmosfera orqali uzatiladigan aloqa",
            "Axborot elektr impulslari ko‘rinishida mis kabel orqali uzatiladigan aloqa",
            "Axborot radio to‘lqinlari yordamida faqat antenna orqali uzatiladigan aloqa",
            "Axborot magnit maydon yordamida yopiq muhitda uzatiladigan aloqa"
        ],
        togri: "Axborot yorug‘lik nuri ko‘rinishida optik tola yoki atmosfera orqali uzatiladigan aloqa"
    },

    {
        savol: "Optik aloqada signal tashuvchilari nima hisoblanadi?",
        variantlar: [
            "Fotonlar",
            "Elektronlar",
            "Ionlar",
            "Magnit impulslar"
        ],
        togri: "Fotonlar"
    },

    {
        savol: "Optik aloqada signalning tarqalish tezligi qanday qiymatga yaqin?",
        variantlar: [
            "3×10^8 m/s",
            "3×10^6 m/s",
            "3×10^5 km/s",
            "3×10^7 km/s"
        ],
        togri: "3×10^8 m/s"
    },

    {
        savol: "Optik aloqa tizimi (OAT) nima?",
        variantlar: [
            "Optik signallarni shakllantirish, qayta ishlash va uzatishni ta’minlovchi qurilmalar yig‘indisi",
            " optik kabellar va kuchaytirgichlardan tashkil topgan tizim",
            " signalni qabul qiluvchi va kuchaytiruvchi qurilmalar majmui",
            "Elektr signallarini optik signallarga aylantirmasdan uzatuvchi tizim"
        ],
        togri: "Optik signallarni shakllantirish, qayta ishlash va uzatishni ta’minlovchi qurilmalar yig‘indisi"
    },

    {
        savol: "Telekommunikatsiyalar qonunida telekommunikatsiyalar nima deb tariflangan?",
        variantlar: [
            "Axborotni elektromagnit tizimlar orqali uzatish, qabul qilish va qayta ishlash jarayoni",
            " Radio to‘lqinlari yordamida axborot almashish jarayoni",
            "Elektr energiyasini signallar yordamida uzatish tizimi",
            " Internet orqali ma’lumot uzatish usuli"
        ],
        togri: "Axborotni elektromagnit tizimlar orqali uzatish, qabul qilish va qayta ishlash jarayoni"
    },

    {
        savol: "Terminal asbob-uskunalarining asosiy vazifasi nima?",
        variantlar: [
            "Tarmoqlar orqali uzatiladigan signallarni hosil qilish va qayta ishlash",
            " Signalni kodlash va shifrlash",
            " Optik tolalarni ulash va nazorat qilish",
            " Elektr energiyasini uzatish"
        ],
        togri: "Tarmoqlar orqali uzatiladigan signallarni hosil qilish va qayta ishlash"
    },

    {
        savol: "Tarmoqlararo ulanishlarning asosiy vazifasi nimadan iborat?",
        variantlar: [
            "Turli operator foydalanuvchilari o‘rtasida axborot almashinuvini ta’minlash",
            " mahalliy telefon tarmoqlarini ulash",
            " internet trafikini boshqarish",
            " radioeshittirish tizimlarini bog‘lash"
        ],
        togri: "Turli operator foydalanuvchilari o‘rtasida axborot almashinuvini ta’minlash"
    },

    {
        savol: "Telekommunikatsiya operatori kim hisoblanadi?",
        variantlar: [
            "telekommunikatsiya tarmog‘iga ega va xizmat ko‘rsatuvchi yuridik shaxs",
            " internet xizmatlarini sotuvchi tashkilot",
            " terminal qurilmalarni ishlab chiqaruvchi korxona",
            " mobil aloqa foydalanuvchilariga xizmat qiluvchi shaxs"
        ],
        togri: "Telekommunikatsiya tarmog‘iga ega va xizmat ko‘rsatuvchi yuridik shaxs"
    },

    {
        savol: "Provayderning asosiy faoliyati nimadan iborat?",
        variantlar: [
            "Operator tarmog‘i orqali foydalanuvchilarga xizmat ko‘rsatish",
            " Optik kabel ishlab chiqarish",
            " Signallarni kuchaytirish",
            " Telefon apparatlarini sozlash"
        ],
        togri: "Operator tarmog‘i orqali foydalanuvchilarga xizmat ko‘rsatish"
    },

    {
        savol: "Infraqizil diapazon qaysi to‘lqin uzunliklari oralig‘ida joylashgan?",
        variantlar: [
            "0,75–100 mkm",
            "0,4–0,75 mkm",
            "0,005–0,4 mkm",
            "100–1000 mkm"
        ],
        togri: "0,75–100 mkm"
    },

    {
        savol: "Ko‘rinuvchi spektr qaysi oraliqda joylashgan?",
        variantlar: [
            "0,75–0,4 mkm",
            "0,75–100 mkm",
            "0,4–0,005 mkm",
            "1–10 mkm"
        ],
        togri: "0,75–0,4 mkm"
    },

    {
        savol: "Uchinchi shaffoflik darchasi qaysi to‘lqin uzunligiga mos keladi?",
        variantlar: [
            "1,55 mkm",
            "1,3 mkm",
            "0,85 mkm",
            "1,75 mkm"
        ],
        togri: "1,55 mkm"
    },

    {
        savol: "1,55 mkm diapazonda so‘nish qiymati taxminan qanday bo‘ladi?",
        variantlar: [
            "0,2–0,3 dB/km",
            "2–3 dB/km",
            "1–1,5 dB/km",
            "3–5 dB/km"
        ],
        togri: "0,2–0,3 dB/km"
    },

    {
        savol: "1882-yilda optik fotofonni kim yaratgan?",
        variantlar: [
            "Alyeksandr Grehem Bell",
            "Isaak Nyuton",
            "Albert Eynshteyn",
            "Guglielmo Markoni"
        ],
        togri: "Alyeksandr Grehem Bell"
    },

    {
        savol: "Optik fotofon yordamida ovoz qanday uzatilgan?",
        variantlar: [
            "Fokuslangan quyosh nuri orqali",
            "Elektr impulslari orqali",
            "Radioto‘lqinlar orqali",
            "Magnit maydon orqali"
        ],
        togri: "Fokuslangan quyosh nuri orqali"
    },

    {
        savol: "Birinchi lazer qaysi davrda yaratilgan?",
        variantlar: [
            "1960-yillar boshida",
            "1940-yillar oxirida",
            "1980-yillar boshida",
            "1920-yillarda"
        ],
        togri: "1960-yillar boshida"
    },

    {
        savol: "Uchinchi avlod optik tizimlarida asosan qanday tola ishlatilgan?",
        variantlar: [
            "Bir modali tola",
            "Ko‘p modali pog‘onali tola",
            "Ko‘p modali gradient o‘zakli tola",
            "Mis o‘tkazgichli kabel"
        ],
        togri: "Bir modali tola"
    },

    {
        savol: "To‘rtinchi avlod optik tizimlarining asosiy to‘lqin uzunligi qaysi qiymat atrofida bo‘lgan?",
        variantlar: [
            "1,55 mkm",
            "0,85 mkm",
            "1,3 mkm",
            "0,65 mkm"
        ],
        togri: "1,55 mkm"
    },

    {
        savol: "Beshinchi avlod optik tizimlarida qanday qo‘shimcha texnologiya qo‘llanilgan?",
        variantlar: [
            "Tolali optik kuchaytirgichlar",
            " mis kabel retranslyatorlari",
            " analog kuchaytirgichlar",
            "Magnit kuchaytirgichlar"
        ],
        togri: "Tolali optik kuchaytirgichlar"
    },

    {
        savol: "TOA tizimlarining asosiy afzalliklaridan biri qaysi?",
        variantlar: [
            "O‘tkazish oralig‘ining kengligi",
            "Elektr tokini kuchli uzatishi",
            " qisqa masofada ishlashi",
            " analog signallarni uzatishi"
        ],
        togri: "O‘tkazish oralig‘ining kengligi"
    },

    {
        savol: "Optik aloqa tizimlari shovqinga qanday munosabatda bo‘ladi?",
        variantlar: [
            "Shovqindan himoyalanganligi yuqori",
            "Shovqinga juda sezgir",
            " elektr shovqinidan himoyalangan",
            "Atmosfera shovqinidan umuman himoyalanmagan"
        ],
        togri: "Shovqindan himoyalanganligi yuqori"
    },

    {
        savol: "TOA tizimlarida signal so‘nishi qanday xarakterga ega?",
        variantlar: [
            "Kam so‘nishli",
            "Juda yuqori so‘nishli",
            " qisqa masofada kam so‘nishli",
            "Masofaga bog‘liq bo‘lmagan"
        ],
        togri: "Kam so‘nishli"
    },

    {
        savol: "Optik aloqa tizimlari qaysi sohada qo‘llaniladi?",
        variantlar: [
            "Telefon aloqasi, televideniya va hisoblash texnikasida",
            " mobil telefon ishlab chiqarishda",
            " radioeshittirish markazlarida",
            " sun’iy yo‘ldosh qurilmalarida"
        ],
        togri: "Telefon aloqasi, televideniya va hisoblash texnikasida"
    },

    {
        savol: "Ochiq optik aloqa tizimlarida signal qanday muhit orqali uzatiladi?",
        variantlar: [
            "Atmosfera va ochiq fazo orqali",
            " optik tola orqali",
            " mis kabel orqali",
            " suvosti kabeli orqali"
        ],
        togri: "Atmosfera va ochiq fazo orqali"
    },

    {
        savol: "Tolali optik aloqa tizimlarida signal qanday muhit orqali uzatiladi?",
        variantlar: [
            "Optik tola orqali",
            "Radio kanal orqali",
            "Mis sim orqali",
            "Magnit kanal orqali"
        ],
        togri: "Optik tola orqali"
    },

    {
        savol: "Optik aloqa tizimlarining rivojlanishiga asosiy sabab nima bo‘lgan?",
        variantlar: [
            "Yuqori tezlikda katta hajmdagi axborotni uzatishga ehtiyoj ortishi",
            "Elektr energiyasini uzoq masofaga uzatish ehtiyoji",
            " analog aloqa tizimlarini rivojlantirish zarurati",
            "Telefon apparatlari sonining kamayishi"
        ],
        togri: "Yuqori tezlikda katta hajmdagi axborotni uzatishga ehtiyoj ortishi"
    }
];