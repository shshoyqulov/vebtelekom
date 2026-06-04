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
    },

    {
        savol: "Optik kabellar vazifasiga ko‘ra qanday turlarga bo‘linadi?",
        variantlar: [
            "magistral, hududiy va shahar kabellariga",
            " magistral va hududiy kabellarga",
            "shahar va suv osti kabellariga",
            " stansiya va liniya kabellariga"
        ],
        togri: "magistral, hududiy va shahar kabellariga"
    },

    {
        savol: "Kvarts-polimer turdagi optik tolada qanday materiallar ishlatiladi?",
        variantlar: [
            "O‘zak kvartsdan, qobiq polimerdan tayyorlanadi",
            "O‘zak polimerdan, qobiq kvartsdan tayyorlanadi",
            "O‘zak ham, qobiq ham kvartsdan tayyorlanadi",
            "O‘zak ham, qobiq ham polimerdan tayyorlanadi"
        ],
        togri: "O‘zak kvartsdan, qobiq polimerdan tayyorlanadi"
    },

    {
        savol: "Liniya kabellari uchun asosan qaysi turdagi optik tolalar qo‘llaniladi?",
        variantlar: [
            "Kvarts-kvarts turdagi optik tolalar",
            "Kvarts-polimer turdagi optik tolalar",
            " Polimer tolalar",
            "Metall qobiqli tolalar"
        ],
        togri: "Kvarts-kvarts turdagi optik tolalar"
    },

    {
        savol: "Osma optik kabellarning o‘zi boradigan turi qanday xususiyatga ega?",
        variantlar: [
            "tayanchlarga tashuvchi trossli yoki trossiz osiladi",
            " yer ostiga yotqiziladi",
            " suv ostida ishlatiladi",
            " tunnel ichida qo‘llaniladi"
        ],
        togri: "tayanchlarga tashuvchi trossli yoki trossiz osiladi"
    },

    {
        savol: "Mahkamlanadigan osma kabellar qanday o‘rnatiladi?",
        variantlar: [
            "Maxsus qisqichlar yordamida tashuvchi simga mahkamlanadi",
            " Beton ichiga joylashtiriladi",
            "Tuproq ostiga bevosita ko‘miladi",
            " Po‘lat quvur ichiga joylashtiriladi"
        ],
        togri: "Maxsus qisqichlar yordamida tashuvchi simga mahkamlanadi"
    },

    {
        savol: "O‘raladigan optik kabellar qanday usulda yotqiziladi?",
        variantlar: [
            "tashuvchi sim yoki tross atrofiga o‘raladi",
            " quvur ichiga tortiladi",
            " beton ostiga joylashtiriladi",
            "Suv ostiga erkin tashlanadi"
        ],
        togri: "tashuvchi sim yoki tross atrofiga o‘raladi"
    },

    {
        savol: "Yer ostiga yotqiziladigan optik kabellar qayerlarga joylashtirilishi mumkin?",
        variantlar: [
            "kabel kanalizatsiyasi, tunnellar va quvurlarga",
            " ko‘prik ustiga",
            " bino ichiga",
            " ustunlarga osilgan holda"
        ],
        togri: "kabel kanalizatsiyasi, tunnellar va quvurlarga"
    },

    {
        savol: "40–100 mm diametrli plastmassa quvurlarda odatda nechta optik kabel yotqiziladi?",
        variantlar: [
            "Bitta quvur ichiga bitta optik kabel",
            "Bitta quvur ichiga ikkita optik kabel",
            "Bitta quvur ichiga uchta optik kabel",
            "Cheklanmagan miqdorda optik kabel"
        ],
        togri: "Bitta quvur ichiga bitta optik kabel"
    },

    {
        savol: "100 mm dan katta quvurlarda optik kabellar qanday joylashtiriladi?",
        variantlar: [
            "Bir nechta optik kabel bitta quvur ichiga joylashtiriladi",
            " bitta kabel joylashtiriladi",
            " metall kabel joylashtiriladi",
            " elektr kabeli bilan birga joylashtiriladi"
        ],
        togri: "Bir nechta optik kabel bitta quvur ichiga joylashtiriladi"
    },

    {
        savol: "Suv osti optik kabellari qanday turlarga bo‘linadi?",
        variantlar: [
            "daryo, ko‘l va okean tubiga yotqiziladigan turlarga",
            " okean tubiga yotqiziladigan turlarga",
            " daryo tubiga yotqiziladigan turlarga",
            " bino ichida ishlatiladigan turlarga"
        ],
        togri: "daryo, ko‘l va okean tubiga yotqiziladigan turlarga"
    },

    {
        savol: "Ichki yotqizish kabellari asosan qayerlarda ishlatiladi?",
        variantlar: [
            "Telefon stansiyalari, ofislar va binolar ichida",
            " temir yo‘l ostida",
            " dengiz tubida",
            " magistral tarmoqlarda"
        ],
        togri: "Telefon stansiyalari, ofislar va binolar ichida"
    },

    {
        savol: "Optik tola optik kabelning qanday elementi hisoblanadi?",
        variantlar: [
            "Asosiy uzatuvchi va yo‘naltiruvchi element",
            " himoyalovchi element",
            " kuchaytiruvchi element",
            " tashqi qobiq elementi"
        ],
        togri: "Asosiy uzatuvchi va yo‘naltiruvchi element"
    },

    {
        savol: "Optik modulning asosiy vazifasi nima?",
        variantlar: [
            "Optik tolani himoyalash va barqaror ishlashini ta’minlash",
            "Elektr energiyasini uzatish",
            " signalni kuchaytirish",
            " tashqi qobiqni mustahkamlash"
        ],
        togri: "Optik tolani himoyalash va barqaror ishlashini ta’minlash"
    },

    {
        savol: "Kabel markazidagi kuch elementi nima vazifani bajaradi?",
        variantlar: [
            "Kabelning egiluvchanligini ta’minlaydi",
            " signalni filtrlashni bajaradi",
            " elektr tokini uzatadi",
            " namlikni yutadi"
        ],
        togri: "Kabelning egiluvchanligini ta’minlaydi"
    },

    {
        savol: "Gidrofob to‘ldirgichning asosiy vazifasi nima?",
        variantlar: [
            "Namlik va suv bug‘larini kabel ichiga kirishidan saqlash",
            "Signal tezligini oshirish",
            " kabel massasini kamaytirish",
            "Elektr kuchlanishini uzatish"
        ],
        togri: "Namlik va suv bug‘larini kabel ichiga kirishidan saqlash"
    },

    {
        savol: "Optik kabel qobig‘ining asosiy vazifasi nima?",
        variantlar: [
            "Kabel o‘zagini tashqi va mexanik ta’sirlardan himoyalash",
            " kabel rangini belgilash",
            " signalni kuchaytirish",
            " issiqlikni uzatish"
        ],
        togri: "Kabel o‘zagini tashqi va mexanik ta’sirlardan himoyalash"
    },

    {
        savol: "Optik kabelning zirh qatlami nima uchun xizmat qiladi?",
        variantlar: [
            "Kabelning mexanik chidamliligini oshirish uchun",
            " signalni kodlash uchun",
            " kabelni sovutish uchun",
            " elektr toki hosil qilish uchun"
        ],
        togri: "Kabelning mexanik chidamliligini oshirish uchun"
    },

    {
        savol: "Dielektrik optik kabellarda zirh qatlami uchun qanday materiallar qo‘llaniladi?",
        variantlar: [
            "Aramid iplar va shisha plastik sterjenlar",
            " mis simlar",
            " alyuminiy plastinalar",
            " rezina qoplamalar"
        ],
        togri: "Aramid iplar va shisha plastik sterjenlar"
    },

    {
        savol: "Optik kabellarning asosiy konstruksiyalaridan biri qaysi?",
        variantlar: [
            "Burama o‘ralgan konstruksiya",
            " kvadrat konstruksiya",
            " metall sterjenli konstruksiya",
            " betonli konstruksiya"
        ],
        togri: "Burama o‘ralgan konstruksiya"
    },

    {
        savol: "OKGM optik kabellari asosan qayerga yotqizish uchun mo‘ljallangan?",
        variantlar: [
            "yer ostiga yotqizish uchun",
            " bino ichiga  yotqizish uchun ",
            " suv ostiga  yotqizish uchun ", 
            " ustunlarga osish uchun"
        ],
        togri: "yer ostiga yotqizish uchun"
    },

    {
        savol: "OKGM kabelining tashqi qobig‘i qanday materialdan tayyorlanadi?",
        variantlar: [
            "Polietilendan",
            "Rezina materialdan",
            " Po‘latdan",
            "Shisha tolali materialdan"
        ],
        togri: "Polietilendan"
    },

    {
        savol: "OKGC optik kabellari qanday maqsadda ishlatiladi?",
        variantlar: [
            "yerga va kabel kanalizatsiyasiga o‘rnatish uchun",
            " suv ostida ishlatish uchun",
            " binolar ichida ishlatish uchun",
            " radioeshittirish uchun"
        ],
        togri: "yerga va kabel kanalizatsiyasiga o‘rnatish uchun"
    },

    {
        savol: "OKKM optik kabellarida suvni blokirovka qiluvchi qanday element mavjud?",
        variantlar: [
            "Suvni blokirovka qiluvchi lenta",
            "Mis qoplama",
            "Magnit qatlam",
            "Issiqlik filtri"
        ],
        togri: "Suvni blokirovka qiluvchi lenta"
    },

    {
        savol: "OKSM osma optik kabellari qayerlarga osib qo‘yish uchun mo‘ljallangan?",
        variantlar: [
            "Aloqa liniyasi tayanchlari va yoritish ustunlariga",
            " tunnel ichiga",
            " yer ostiga",
            " suv quvurlariga"
        ],
        togri: "Aloqa liniyasi tayanchlari va yoritish ustunlariga"
    },

    {
        savol: "OKPM osma optik kabellarida tashqi kuch elementi sifatida nima ishlatilishi mumkin?",
        variantlar: [
            "Po‘lat sim, po‘lat tross yoki shisha plastik sterjen",
            " alyuminiy lenta",
            " rezina qoplama",
            " mis plastina"
        ],
        togri: "Po‘lat sim, po‘lat tross yoki shisha plastik sterjen"
    },

    {
        savol: "Optik kabellarning xizmat muddati taxminan qancha bo‘lishi kerak?",
        variantlar: [
            "Kamida 25–30 yil",
            "5–10 yil",
            "10–15 yil",
            "15–20 yil"
        ],
        togri: "Kamida 25–30 yil"
    },

    {
        savol: "OKTM optik kabellari qayerlarga o‘rnatish uchun mo‘ljallangan?",
        variantlar: [
            "Kabel kanalizatsiyasi va bino ichiga",
            " dengiz tubiga",
            " elektr stansiyalariga",
            " avtomobil yo‘llari ostiga"
        ],
        togri: "Kabel kanalizatsiyasi va bino ichiga"
    },
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
    },
    {
        savol: "Optika qonuniyatlari nimaga asoslanadi?",
        variantlar: [
            "Yorug‘likning to‘g‘ri chiziqli tarqalishi va muhit bilan o‘zaro ta’sirlashuviga",
            " Yorug‘likning to‘g‘ri chiziqli tarqalishi va yorug‘likning elektr maydonda tarqalishiga",
            " Yorug‘likning to‘g‘ri chiziqli tarqalishi va magnit maydon hosil bo‘lishiga",
            " Yorug‘likning to‘g‘ri chiziqli tarqalishi va yorug‘likning vakuumda so‘nmasdan tarqalishiga"
        ],
        togri: "Yorug‘likning to‘g‘ri chiziqli tarqalishi va muhit bilan o‘zaro ta’sirlashuviga"
    },

    {
        savol: "Izotroplik xususiyati nimani anglatadi?",
        variantlar: [
            "Muhitda yorug‘likning barcha yo‘nalishlarda bir xil tarqalishini",
            "Yorug‘likning faqat bir yo‘nalishda tarqalishini",
            "Yorug‘likning vakuumda tezlashishini",
            "Muhitda faqat qizil nurning tarqalishini"
        ],
        togri: "Muhitda yorug‘likning barcha yo‘nalishlarda bir xil tarqalishini"
    },

    {
        savol: "Yorug‘lik bir muhitdan ikkinchi muhitga o‘tganda yo‘nalishining o‘zgarishi qanday hodisa deyiladi?",
        variantlar: [
            "Sinish",
            "Difraksiya",
            "Interferensiya",
            "Absorbsiya"
        ],
        togri: "Sinish"
    },

    {
        savol: "Sindirish ko‘rsatkichi katta muhitdan kichik muhitga o‘tganda nur qanday og‘adi?",
        variantlar: [
            "Perpendikulyardan uzoqlashadi",
            "Perpendikulyarga yaqinlashadi",
            "To‘g‘ri chiziq bo‘ylab davom etadi",
            "To‘liq yutilib ketadi"
        ],
        togri: "Perpendikulyardan uzoqlashadi"
    },

    {
        savol: "Sinish burchagi 90° ga teng bo‘lgandagi tushish burchagi qanday ataladi?",
        variantlar: [
            "Kritik burchak",
            "Apertura burchagi",
            "Qaytish burchagi",
            "Dispersiya burchagi"
        ],
        togri: "Kritik burchak"
    },

    {
        savol: "Yorug‘lik kritik burchakdan katta burchak ostida tushganda qanday hodisa yuz beradi?",
        variantlar: [
            "To‘liq ichki qaytish sodir bo‘ladi",
            "Nur to‘liq ikkinchi muhitga o‘tadi",
            "Nur yutilib ketadi",
            " Sinish hodisasi yuz beradi"
        ],
        togri: "To‘liq ichki qaytish sodir bo‘ladi"
    },

    {
        savol: "To‘liq ichki qaytish hodisasi nimani anglatadi?",
        variantlar: [
            "Yorug‘likning ikki muhit chegarasidan to‘liq qaytishini",
            "Yorug‘likning muhitda to‘liq yutilishini",
            "Nur intensivligining kamayishini",
            "Yorug‘likning vakuumda tarqalishini"
        ],
        togri: "Yorug‘likning ikki muhit chegarasidan to‘liq qaytishini"
    },

    {
        savol: "Snellius qonuni nimani ifodalaydi?",
        variantlar: [
            "Tushgan va singan nurlar orasidagi munosabatni",
            "Nur intensivligi va chastota orasidagi bog‘lanishni",
            "Yorug‘lik tezligi va quvvat orasidagi bog‘lanishni",
            "Dispersiya va so‘nish orasidagi bog‘lanishni"
        ],
        togri: "Tushgan va singan nurlar orasidagi munosabatni"
    },

    {
        savol: "Optik tolada yorug‘likning tarqalishi asosan qaysi hodisaga asoslanadi?",
        variantlar: [
            "To‘liq ichki qaytish hodisasiga",
            " difraksiya hodisasiga",
            " interferensiya hodisasiga",
            "Yorug‘likning yutilishiga"
        ],
        togri: "To‘liq ichki qaytish hodisasiga"
    },

    {
        savol: "Apertura nima?",
        variantlar: [
            "Optik tizimning yorug‘lik o‘tkazadigan teshigi",
            "Optik tolaning tashqi qobig‘i",
            "Nur qaytishini kamaytiruvchi qatlam",
            "Signalni kuchaytiruvchi qurilma"
        ],
        togri: "Optik tizimning yorug‘lik o‘tkazadigan teshigi"
    },

    {
        savol: "Burchakli apertura nimani bildiradi?",
        variantlar: [
            "Yorug‘lik konusidagi chetki nurlar orasidagi burchakni",
            "Tushish va qaytish nurlari orasidagi masofani",
            "Nur tezligi bilan bog‘liq kattalikni",
            "Yorug‘likning sinish ko‘rsatkichini"
        ],
        togri: "Yorug‘lik konusidagi chetki nurlar orasidagi burchakni"
    },

    {
        savol: "Optik asbobning ajratish qobiliyati nimaga bog‘liq?",
        variantlar: [
            "Aperturaga",
            " yorug‘lik rangiga",
            " muhit haroratiga",
            " tola uzunligiga"
        ],
        togri: "Aperturaga"
    },

    {
        savol: "Optik tolaga faqat qanday nurlar o‘zagi bo‘ylab tarqaladi?",
        variantlar: [
            "Kritik burchakdan katta burchak ostida tushgan nurlar",
            " perpendikulyar tushgan nurlar",
            " qizil rangli nurlar",
            " kichik burchak ostida tushgan nurlar"
        ],
        togri: "Kritik burchakdan katta burchak ostida tushgan nurlar"
    },

    {
        savol: "Nurlarning tola o‘zagiga maksimal tushish konusining katta yarim burchagi nima deyiladi?",
        variantlar: [
            "Apertura burchagi",
            "Kritik burchak",
            "Qaytish burchagi",
            "Dispersiya burchagi"
        ],
        togri: "Apertura burchagi"
    },

    {
        savol: "Sonli apertura qanday belgilanadi?",
        variantlar: [
            "NA",
            "TIQ",
            "FM",
            "AM"
        ],
        togri: "NA"
    },

    {
        savol: "Sonli apertura qaysi kattaliklar orqali aniqlanadi?",
        variantlar: [
            "O‘zak va qobiq sindirish ko‘rsatkichlari orqali",
            " O‘zak diametri orqali",
            " Yorug‘lik chastotasi orqali",
            " Tola uzunligi va diametri orqali"
        ],
        togri: "O‘zak va qobiq sindirish ko‘rsatkichlari orqali"
    },

    {
        savol: "NA qiymati katta bo‘lgan optik tolalarning asosiy xususiyati qaysi?",
        variantlar: [
            "Yorug‘likni yaxshi qabul qiladi",
            " Tor nur dastasini qabul qiladi",
            "Dispersiyasi juda kichik bo‘ladi",
            "Modalar soni juda kam bo‘ladi"
        ],
        togri: "Yorug‘likni yaxshi qabul qiladi"
    },

    {
        savol: "NA kichik qiymatli optik tolalarga qanday yorug‘lik kiritish mumkin?",
        variantlar: [
            " tor yo‘naltirilgan yorug‘lik to‘plamini",
            "har qanday yo‘nalishdagi nurlarni",
            " tarqaluvchi nurlarni",
            " diffuz nurlarni"
        ],
        togri: " tor yo‘naltirilgan yorug‘lik to‘plamini"
    },

    {
        savol: "Yuqori o‘tkazish polosali optik tolalar qanday NA qiymatiga ega bo‘ladi?",
        variantlar: [
            "Kichik NA qiymatiga",
            "Juda katta NA qiymatiga",
            " o‘rta NA qiymatiga",
            "NA qiymati ahamiyatga ega emas"
        ],
        togri: "Kichik NA qiymatiga"
    },

    {
        savol: "NA kichik bo‘lgan optik tolalarda modalar soni qanday bo‘ladi?",
        variantlar: [
            "Kam bo‘ladi",
            "Juda ko‘p bo‘ladi",
            "Cheksiz bo‘ladi",
            " bitta moda bo‘ladi"
        ],
        togri: "Kam bo‘ladi"
    },

    {
        savol: "NA kichik bo‘lgan optik tolalarda dispersiya qanday bo‘ladi?",
        variantlar: [
            "Kichik bo‘ladi",
            "Juda katta bo‘ladi",
            "Doimiy bo‘ladi",
            "Umuman mavjud bo‘lmaydi"
        ],
        togri: "Kichik bo‘ladi"
    },

    {
        savol: "NA katta qiymatli optik tolalarda modalararo dispersiya nima sababdan yuqori bo‘ladi?",
        variantlar: [
            "Mumkin bo‘lgan yorug‘lik yo‘nalishlari ko‘pligi sababli",
            "Yadro diametri juda kichik bo‘lgani sababli",
            " bitta moda mavjud bo‘lgani sababli",
            "Nur tezligi kamaygani sababli"
        ],
        togri: "Mumkin bo‘lgan yorug‘lik yo‘nalishlari ko‘pligi sababli"
    },

    {
        savol: "Kritik burchak ostida tushgan nur qanday tarqaladi?",
        variantlar: [
            "Ikki muhit chegarasi bo‘ylab tarqaladi",
            "To‘liq ikkinchi muhitga o‘tadi",
            "To‘liq qaytib ketadi",
            "Yutilib ketadi"
        ],
        togri: "Ikki muhit chegarasi bo‘ylab tarqaladi"
    },

    {
        savol: "Tushish burchagi va sinish burchagi teng bo‘lishi qaysi holatda kuzatiladi?",
        variantlar: [
            "To‘liq ichki qaytishda",
            " oddiy sinishda",
            " dispersiyada",
            " yutilishda"
        ],
        togri: "To‘liq ichki qaytishda"
    },

    {
        savol: "Yorug‘likning sinishi nima sababdan yuz beradi?",
        variantlar: [
            "Turli muhitlarda yorug‘lik tezligining o‘zgarishi sababli",
            " yorug‘lik rangining o‘zgarishi sababli",
            "Muhitning qizishi sababli",
            " magnit maydon ta’sirida"
        ],
        togri: "Turli muhitlarda yorug‘lik tezligining o‘zgarishi sababli"
    },

    {
        savol: "Optik tolada yuqori o‘tkazish polosasi nimaga bog‘liq?",
        variantlar: [
            "Modalar sonining kam va dispersiyaning kichik bo‘lishiga",
            "NA qiymatining juda katta bo‘lishiga",
            " yadro diametrining kattaligiga",
            " kabel uzunligiga"
        ],
        togri: "Modalar sonining kam va dispersiyaning kichik bo‘lishiga"
    },

    {
        savol: "Sonli apertura nimani ko‘rsatadi?",
        variantlar: [
            "Yorug‘likning tolaga qanday kiritilishi va tarqalishini",
            " kabel uzunligini",
            " signal quvvatini",
            " modulyatsiya turini"
        ],
        togri: "Yorug‘likning tolaga qanday kiritilishi va tarqalishini"
    },
    {
        savol: "Tolali optik aloqa tizimlarida elektr signalini yorug‘lik signaliga aylantirish qaysi modul tomonidan amalga oshiriladi?",
        variantlar: [
            "Uzatuvchi optoelektron modul tomonidan",
            " Qabul qiluvchi optik modul tomonidan",
            "Kuchaytiruvchi modul tomonidan",
            " Fotodetektor tomonidan"
        ],
        togri: "Uzatuvchi optoelektron modul tomonidan"
    },

    {
        savol: "Yorug‘lik manbai uzatuvchi optoelektron modulda qanday vazifani bajaradi?",
        variantlar: [
            "Elektr signallarini yorug‘lik signallariga aylantiradi",
            "Yorug‘lik signallarini elektr signallariga aylantiradi",
            " Signalni kuchaytiradi",
            " Signalni saqlaydi"
        ],
        togri: "Elektr signallarini yorug‘lik signallariga aylantiradi"
    },

    {
        savol: "Optik aloqa tizimlarida yorug‘lik manbai qanday o‘lchamlarga ega bo‘lishi kerak?",
        variantlar: [
            "Optik kabelning ko‘ndalang kesimiga mos o‘lchamga",
            " Optik kabelning ko‘ndalang kesimidan katta o‘lchamga",
            " Bir xil diametrda",
            "Optik tolaga bog‘liq bo‘lmagan o‘lchamga"
        ],
        togri: "Optik kabelning ko‘ndalang kesimiga mos o‘lchamga"
    },

    {
        savol: "Signalni uzoq masofaga uzatish uchun yorug‘lik manbai qanday xususiyatga ega bo‘lishi kerak?",
        variantlar: [
            "Yetarli darajada katta quvvatga ega bo‘lishi kerak",
            " Yetarli darajada kichik chastotada ishlashi kerak",
            " Yetarli darajada impuls rejimida ishlashi kerak",
            " Yetarli darajada sovutilgan holatda ishlashi kerak"
        ],
        togri: "Yetarli darajada katta quvvatga ega bo‘lishi kerak"
    },

    {
        savol: "Yorug‘lik manbaining sindirish ko‘rsatkichi qanday bo‘lishi kerak?",
        variantlar: [
            "Optik tolaning sindirish ko‘rsatkichiga yaqin bo‘lishi kerak",
            " Optik tolaning sindirish ko‘rsatkichidan kichik bo‘lishi kerak",
            " Optik tolaning sindirish ko‘rsatkichidan katta bo‘lishi kerak",
            "Sindirish ko‘rsatkichi ahamiyatsiz"
        ],
        togri: "Optik tolaning sindirish ko‘rsatkichiga yaqin bo‘lishi kerak"
    },

    {
        savol: "Optik tolalarda eng kam yo‘qotish kuzatiladigan shaffoflik darchalari markazlari qaysi to‘lqin uzunliklariga mos keladi?",
        variantlar: [
            "850 nm, 1300 nm va 1550 nm",
            "650 nm, 950 nm va 1200 nm",
            "400 nm, 850 nm va 2000 nm",
            "130 nm, 850 nm va 950 nm"
        ],
        togri: "850 nm, 1300 nm va 1550 nm"
    },

    {
        savol: "Axborotni yuqori tezlikda uzatish uchun yorug‘lik manbai qanday bo‘lishi kerak?",
        variantlar: [
            "Katta modulyatsiya chastotalarida ishlay olishi kerak",
            " Past modulyatsiya chastotada ishlashi kerak",
            " Modulyatsiya doimiy tokda ishlashi kerak",
            "Modulyatsiyasiz ishlashi kerak"
        ],
        togri: "Katta modulyatsiya chastotalarida ishlay olishi kerak"
    },

    {
        savol: "Tolali optik aloqa tizimlarida keng qo‘llaniladigan yorug‘lik manbalari qaysilar?",
        variantlar: [
            "Yarimo‘tkazgichli yorug‘lik diodlari va injeksion lazer diodlari",
            " Yarimo‘tkazgichli yorug‘lik diodlari, vakuum lampalari va fotodiodlar",
            " Yarimo‘tkazgichli yorug‘lik diodlari, gaz razryadli lampalar",
            " Yarimo‘tkazgichli yorug‘lik diodlari, infraqizil lampalar"
        ],
        togri: "Yarimo‘tkazgichli yorug‘lik diodlari va injeksion lazer diodlari"
    },

    {
        savol: "Yorug‘lik diodi qanday turdagi nurlanish manbai hisoblanadi?",
        variantlar: [
            "Nomonoxromatik va nokogerent nurlanish manbai",
            "Monoxromatik va kogerent nurlanish manbai",
            " Monoxromatik nurlanish manbai",
            " Infraqizil nurlanish manbai"
        ],
        togri: "Nomonoxromatik va nokogerent nurlanish manbai"
    },

    {
        savol: "Yorug‘lik diodlarini tayyorlashda qanday materiallardan foydalaniladi?",
        variantlar: [
            "GaAs, GaAlAs, InGaAsP, GaP va SiC",
            " Kremniy, Galliy, alyuminiy",
            " Kvarts va shisha ",
            " Germaniy, po‘lat va oltin-mis aralashmasi"
        ],
        togri: "GaAs, GaAlAs, InGaAsP, GaP va SiC"
    },

    {
        savol: "Tolali optik aloqa tizimlarida ishlatiladigan yorug‘lik diodlarining nurlanuvchi sirt diametri taxminan qancha?",
        variantlar: [
            "50 mkm",
            "5 mkm",
            "500 mkm",
            "150 mkm"
        ],
        togri: "50 mkm"
    },

    {
        savol: "Injeksion yorug‘lik diodi qanday tuzilishga ega?",
        variantlar: [
            "p-n tuzilishli optoelektron asbob",
            " metall qatlamli asbob",
            "Vakuumli elektron asbob",
            "Magnit rezonansli asbob"
        ],
        togri: "p-n tuzilishli optoelektron asbob"
    },

    {
        savol: "LEDlarda yorug‘lik hosil bo‘lishi nimaga asoslanadi?",
        variantlar: [
            "Yarimo‘tkazgichdagi elektronlarning harakatiga",
            "Filamentning qizishiga",
            "Gaz ionlanishiga",
            "Magnit maydon hosil bo‘lishiga"
        ],
        togri: "Yarimo‘tkazgichdagi elektronlarning harakatiga"
    },

    {
        savol: "1907-yilda H.J. Round qanday hodisani kashf etgan?",
        variantlar: [
            "Elektroluminesans hodisasini",
            "Fotoeffekt hodisasini",
            "Difraksiya hodisasini",
            "Rentgen nurlanishini"
        ],
        togri: "Elektroluminesans hodisasini"
    },

    {
        savol: "Elektroluminesans nima?",
        variantlar: [
            "Elektr toki ta’sirida yorug‘lik chiqarish jarayoni",
            "Yorug‘lik ta’sirida elektr toki hosil bo‘lishi",
            "Issiqlik ta’sirida nur chiqarish",
            "Magnit maydon ta’sirida zaryad hosil bo‘lishi"
        ],
        togri: "Elektr toki ta’sirida yorug‘lik chiqarish jarayoni"
    },

    {
        savol: "LEDning p-tipli yarimo‘tkazgichida qanday zaryad tashuvchilar mavjud?",
        variantlar: [
            "Teshiklar",
            "Elektronlar",
            "Ionlar",
            "Fotonlar"
        ],
        togri: "Teshiklar"
    },

    {
        savol: "LEDning n-tipli yarimo‘tkazgichida qanday zaryad tashuvchilar mavjud?",
        variantlar: [
            "Elektronlar",
            "Teshiklar",
            "Fotonlar",
            "Ionlar"
        ],
        togri: "Elektronlar"
    },

    {
        savol: "Chiqarilgan yorug‘likning rangi nimaga bog‘liq?",
        variantlar: [
            "Fotonlar energiyasiga va materialning tarmoqli energiyasiga",
            " Fotonlar energiyasiga va tok kuchiga",
            " Fotonlar energiyasiga va haroratga",
            " Fotonlar energiyasiga va yorug‘lik quvvatiga"
        ],
        togri: "Fotonlar energiyasiga va materialning tarmoqli energiyasiga"
    },

    {
        savol: "InGaN materiali qanday rangdagi LEDlarni ishlab chiqarishda qo‘llaniladi?",
        variantlar: [
            "Moviy, yashil va ultrabinafsha LEDlarda",
            " qizil LEDlarda",
            " sariq LEDlarda",
            " infraqizil LEDlarda"
        ],
        togri: "Moviy, yashil va ultrabinafsha LEDlarda"
    },

    {
        savol: "AlGaInP materiali qanday rangdagi LEDlarni ishlab chiqarishda qo‘llaniladi?",
        variantlar: [
            "Sariq, to‘q sariq va qizil LEDlarda",
            " ko‘k LEDlarda",
            " oq LEDlarda",
            " binafsha LEDlarda"
        ],
        togri: "Sariq, to‘q sariq va qizil LEDlarda"
    },

    {
        savol: "GaN materiali LED ishlab chiqarishda qanday vazifani bajaradi?",
        variantlar: [
            "Ko‘k va yashil yorug‘lik chiqaruvchi yarimo‘tkazgich sifatida",
            " issiqlikni tarqatish uchun",
            " mexanik himoya uchun",
            " elektr izolyatsiyasi uchun"
        ],
        togri: "Ko‘k va yashil yorug‘lik chiqaruvchi yarimo‘tkazgich sifatida"
    },

    {
        savol: "LED ishlab chiqarishda mis qanday maqsadda ishlatiladi?",
        variantlar: [
            "Issiqlikni tarqatish uchun",
            " Yorug‘likni kuchaytirish uchun",
            " Rang hosil qilish uchun",
            " Kuchlanishni oshirish uchun"
        ],
        togri: "Issiqlikni tarqatish uchun"
    },

    {
        savol: "Yorug‘lik diodining degradatsiyasi nimani anglatadi?",
        variantlar: [
            "Vaqt o‘tishi bilan nurlanish quvvatining kamayishini",
            " Vaqt o‘tishi bilan nurlanish chastotasining oshishini",
            " Vaqt o‘tishi bilan tokning cheksiz ortishini",
            " Vaqt o‘tishi bilan haroratning keskin kamayishini"
        ],
        togri: "Vaqt o‘tishi bilan nurlanish quvvatining kamayishini"
    },

    {
        savol: "Yorug‘lik diodlari odatda qanday masofali optik aloqa tizimlarida qo‘llaniladi?",
        variantlar: [
            "Qisqa va lokal optik tarmoqlarda",
            " Transokean tizimlarida",
            " Sun’iy yo‘ldosh tizimlarida",
            " Magistral liniyalarda"
        ],
        togri: "Qisqa va lokal optik tarmoqlarda"
    },

    {
        savol: "Lazer diodlari qanday nurlanish manbai hisoblanadi?",
        variantlar: [
            "Monoxromatik va kogerent nurlanish manbai",
            "Nomonoxromatik va nokogerent manba",
            " Infraqizil manba",
            " Ultrabinafsha manba"
        ],
        togri: "Monoxromatik va kogerent nurlanish manbai"
    },

    {
        savol: "Bir modali lazerlarda spektr kengligi taxminan qanday qiymatga ega?",
        variantlar: [
            "0,1 – 0,4 nm",
            "1 – 4 nm",
            "10 – 40 nm",
            "0,01 – 0,04 nm"
        ],
        togri: "0,1 – 0,4 nm"
    },

    {
        savol: "Sozlanuvchan lazerlarda to‘lqin uzunligini taxminan qanchagacha o‘zgartirish mumkin?",
        variantlar: [
            "30 nm gacha",
            "3 nm gacha",
            "300 nm gacha",
            "1 nm gacha"
        ],
        togri: "30 nm gacha"
    },

    {
        savol: "Yorug‘lik diodlari va lazer diodlarining tezkorligi nimaga bog‘liq?",
        variantlar: [
            "p-n o‘tish orqali zaryad tashuvchilarning to‘planish va so‘rilish vaqtiga",
            " Haroratga",
            " Optik tola uzunligiga",
            " Elektr qarshiligiga"
        ],
        togri: "p-n o‘tish orqali zaryad tashuvchilarning to‘planish va so‘rilish vaqtiga"
    },

    {
        savol: "Nima sababdan lazer diodlari Gbit/s tezlikli tizimlarda qo‘llaniladi?",
        variantlar: [
            "Tezkorligi yorug‘lik diodlariga nisbatan yuqori bo‘lgani uchun",
            " Quvvati yorug‘lik diodlariga nisbatan kichik bo‘lgani uchun",
            "Narxi yorug‘lik diodlariga nisbatan arzon bo‘lgani uchun",
            " Yorug‘lik diodlariga nisbatan infraqizil diapazonda ishlagani uchun"
        ],
        togri: "Tezkorligi yorug‘lik diodlariga nisbatan yuqori bo‘lgani uchun"
    },
    {
        savol: "Optik aloqa tizimida fotoqabulqilgichlar asosan qanday vazifani bajaradi?",
        variantlar: [
            "Yorug‘lik signalini elektr signaliga aylantiradi",
            "Elektr signalini optik signalga aylantiradi",
            " Signalni kuchaytiradi",
            " Signalni saqlaydi, qayta ishlaydi va uzatadi"
        ],
        togri: "Yorug‘lik signalini elektr signaliga aylantiradi"
    },

    {
        savol: "Yarimo‘tkazgichli fotoqabulqilgichlar optik aloqa tizimida nimani ta’minlaydi?",
        variantlar: [
            "Funksional aloqani saqlagan holda galvanik izolyatsiyani",
            " Funksional aloqani saqlagan holda signalning mexanik himoyasini",
            " Funksional aloqani saqlagan holda kuchlanishni stabilizatsiyalashni",
            " Funksional aloqani saqlagan holda signalni modulyatsiyalashni"
        ],
        togri: "Funksional aloqani saqlagan holda galvanik izolyatsiyani"
    },

    {
        savol: "Ko‘p elementli fotoqabulqilgichlar asosan qayerlarda qo‘llaniladi?",
        variantlar: [
            "Skanerlar va yuqori fotosezgir qurilmalarda",
            " Radio uzatkich tarmoqlarda",
            " Mobil qurilmalarda, Wi-Fida ",
            " Analog va raqamli telefonlarda"
        ],
        togri: "Skanerlar va yuqori fotosezgir qurilmalarda"
    },

    {
        savol: "Optik faol qurilmalar nechta asosiy toifaga bo‘linadi?",
        variantlar: [
            "Uchta toifaga",
            "Ikkita toifaga",
            "To‘rtta toifaga",
            "Beshta toifaga"
        ],
        togri: "Uchta toifaga"
    },

    {
        savol: "Yorug‘lik manbai qanday vazifani bajaradi?",
        variantlar: [
            "Elektr signalini optik signalga aylantiradi",
            "Optik signalni elektr signaliga aylantiradi",
            " sigSalni filtrlashni bajaradi",
            " Signalni hosil qiladi va kuchaytiradi"
        ],
        togri: "Elektr signalini optik signalga aylantiradi"
    },

    {
        savol: "Asosiy yorug‘lik manbalari qaysilar?",
        variantlar: [
            "LED va lazer diodlari",
            "Fotodiod va tranzistorlar",
            " Vakuum lampalari",
            " Quyosh batareyalari"
        ],
        togri: "LED va lazer diodlari"
    },

    {
        savol: "Optik detektor qanday qurilma hisoblanadi?",
        variantlar: [
            "Optik signalni elektr signaliga aylantiruvchi qurilma",
            "Elektr signalini optik signalga aylantiruvchi qurilma",
            " Yorug‘lik signalini yig’uvchi qurilma",
            " Yorug‘likni kuchaytiruvchi qurilma"
        ],
        togri: "Optik signalni elektr signaliga aylantiruvchi qurilma"
    },

    {
        savol: "Asosiy optik detektorlar qaysilar?",
        variantlar: [
            "Fotodiod va ko‘chkili fotodiod",
            "LED va lazer diodi",
            "Fotorezistor va tranzistor",
            " Vakuum fotodiodlari"
        ],
        togri: "Fotodiod va ko‘chkili fotodiod"
    },

    {
        savol: "Optik detektor uchun eng muhim talablardan biri qaysi?",
        variantlar: [
            "Yuqori sezuvchanlik va tez javob berish",
            " Katta ish qobiliyati va kichik o‘lchamli bo‘lish",
            " Yuqori kuchlanishda ishlash",
            " Past chastotada ishlash"
        ],
        togri: "Yuqori sezuvchanlik va tez javob berish"
    },

    {
        savol: "EDFA qanday qurilma hisoblanadi?",
        variantlar: [
            "Erbiy qo‘shilgan tolali kuchaytirgich",
            "Elektr signallarni filtrlovchi qurilma",
            " Optik detektor",
            " Lazer generatori"
        ],
        togri: "Erbiy qo‘shilgan tolali kuchaytirgich"
    },

    {
        savol: "Fotodiod deb qanday asbobga aytiladi?",
        variantlar: [
            "Bitta p-n o‘tishga ega fotoelektr asbobga",
            "Ikki p-n o‘tishga ega tranzistorga",
            " Optik kuchaytirgichga",
            " Yorug‘lik chiqaruvchi asbobga"
        ],
        togri: "Bitta p-n o‘tishga ega fotoelektr asbobga"
    },

    {
        savol: "Fotodiodning fotodiodli rejimida p-n o‘tish qanday ulanadi?",
        variantlar: [
            "Teskari siljitilgan holda",
            "To‘g‘ri siljitilgan holda",
            "Nol kuchlanishda",
            " Impuls rejimida"
        ],
        togri: "Teskari siljitilgan holda"
    },

    {
        savol: "Fotodiodga yorug‘lik tushirilmaganda qanday tok oqadi?",
        variantlar: [
            "Qorong‘ulik ekstraksiya toki",
            "To‘g‘ri injeksiya toki",
            " Impuls toki",
            " Kollektor toki"
        ],
        togri: "Qorong‘ulik ekstraksiya toki"
    },

    {
        savol: "Fotodiodga yorug‘lik tushganda qanday jarayon yuz beradi?",
        variantlar: [
            "Elektron-kovak juftliklari generatsiyalanadi",
            " Ionlar harakati boshlanadi",
            " Magnit maydon hosil bo‘ladi",
            " Qarshilik ortadi"
        ],
        togri: "Elektron-kovak juftliklari generatsiyalanadi"
    },

    {
        savol: "Yorug‘lik oqimi intensivligi oshganda fotodiod toki qanday o‘zgaradi?",
        variantlar: [
            "Teskari tok ortadi",
            "Tok kamayadi",
            "Tok o‘zgarmaydi",
            "Tok nolga teng bo‘ladi"
        ],
        togri: "Teskari tok ortadi"
    },

    {
        savol: "Fototokning yorug‘lik oqimiga bog‘liqligi qanday xarakterga ega?",
        variantlar: [
            "Deyarli chiziqli bog‘liq",
            "Eksponensial kamayuvchi",
            "Sinusoidal o‘zgaruvchi",
            "Kvadratik bog‘liq"
        ],
        togri: "Deyarli chiziqli bog‘liq"
    },

    {
        savol: "Fotodiod sezgirligi nima bilan aniqlanadi?",
        variantlar: [
            "Fototokning yorug‘lik oqimiga nisbati bilan",
            " Kuchlanish qiymati bilan",
            " Harorat bilan",
            " Fotodiod sezgirligi qarshiligini o’lchash asbobi bilan"
        ],
        togri: "Fototokning yorug‘lik oqimiga nisbati bilan"
    },

    {
        savol: "Yorug‘lik diodi qanday asbob hisoblanadi?",
        variantlar: [
            "Elektr energiyasini nokogerent yorug‘likka aylantiruvchi yarimo‘tkazgichli asbob",
            " Optik signalni elektr signaliga aylantiruvchi asbob",
            " Kuchaytiruvchi qurilma",
            " Yorug‘likni filtrlovchi qurilma"
        ],
        togri: "Elektr energiyasini nokogerent yorug‘likka aylantiruvchi yarimo‘tkazgichli asbob"
    },

    {
        savol: "Yorug‘lik diodida yorug‘lik qanday hosil bo‘ladi?",
        variantlar: [
            "Elektron-kovak juftliklarining rekombinatsiyasi natijasida",
            " Metallning qizishi natijasida",
            " Magnit maydon ta’sirida",
            " Ionlashish natijasida"
        ],
        togri: "Elektron-kovak juftliklarining rekombinatsiyasi natijasida"
    },

    {
        savol: "Galliy arsenididan tayyorlangan yorug‘lik diodlari uchun to‘lqin uzunligi qanday oraliqda bo‘ladi?",
        variantlar: [
            "0,9 – 1,4 mkm",
            "0,1 – 0,4 mkm",
            "2 – 5 mkm",
            "5 – 10 mkm"
        ],
        togri: "0,9 – 1,4 mkm"
    },

    {
        savol: "Qizil, sariq va yashil rang nurlatuvchi diodlar qanday material asosida tayyorlanadi?",
        variantlar: [
            "Galliy fosfati asosida",
            "Kremniy karbidi asosida",
            " kremniy asosida",
            " germaniy asosida"
        ],
        togri: "Galliy fosfati asosida"
    },

    {
        savol: "Zamonaviy yorug‘lik diodlari uchun kvant chiqishi taxminan qanday qiymatda bo‘ladi?",
        variantlar: [
            "0,01 – 0,04",
            "0,1 – 0,4",
            "1 – 4",
            "0,5 – 1"
        ],
        togri: "0,01 – 0,04"
    },

    {
        savol: "Geteroo‘tishli yorug‘lik diodlarida kvant chiqishi taxminan qancha bo‘lishi mumkin?",
        variantlar: [
            "0,3 gacha",
            "0,03 gacha",
            "3 gacha",
            "1 dan katta"
        ],
        togri: "0,3 gacha"
    },

    {
        savol: "Yorug‘lik diodining volt-amper xarakteristikasi qanday bog‘liqlik bilan ifodalanadi?",
        variantlar: [
            "Eksponensial bog‘liqlik bilan",
            "Chiziqli bog‘liqlik bilan",
            "Sinusoidal bog‘liqlik bilan",
            "Logarifmik bog‘liqlik bilan"
        ],
        togri: "Eksponensial bog‘liqlik bilan"
    },

    {
        savol: "Yorug‘lik diodining qayta ulanish vaqti taxminan qanday oraliqda bo‘ladi?",
        variantlar: [
            "10⁻⁷ – 10⁻⁹ s",
            "10⁻³ – 10⁻⁴ s",
            "10⁻¹ – 10⁻² s",
            "10⁻¹⁰ – 10⁻¹² s"
        ],
        togri: "10⁻⁷ – 10⁻⁹ s"
    },

    {
        savol: "Optopara qanday qurilmalardan tashkil topadi?",
        variantlar: [
            "Yorug‘lik nurlatuvchi va fotoqabulqilgichdan",
            " Ikkita fotodioddan",
            " Lazer va tranzistordan",
            " Optik kuchaytirgichlardan"
        ],
        togri: "Yorug‘lik nurlatuvchi va fotoqabulqilgichdan"
    },

    {
        savol: "Optoparada yorug‘lik nurlatuvchi va fotoqabulqilgich orasidagi aloqa qanday bo‘ladi?",
        variantlar: [
            "To‘g‘ri optik aloqa",
            " Elektr aloqa",
            " Magnit aloqa",
            " Mexanik aloqa"
        ],
        togri: "To‘g‘ri optik aloqa"
    },
    {
        savol: "Optik aloqa tizimlarida signal quvvati masofa oshishi bilan nima sababdan kamayadi?",
        variantlar: [
            "Energiya yo‘qotilishi va attenuatsiya sababli",
            " Energiya yo‘qotilishi modulyatsiya chastotasi kamaygani sababli",
            " Energiya yo‘qotilishi elektr qarshilik ortgani sababli",
            " Energiya yo‘qotilishi lazer quvvati oshgani sababli"
        ],
        togri: "Energiya yo‘qotilishi va attenuatsiya sababli"
    },

    {
        savol: "Optik signalning kuchsizlanishi qanday ataladi?",
        variantlar: [
            "Attenuatsiya",
            "Interferensiya",
            "Dispersiya",
            "Modulyatsiya"
        ],
        togri: "Attenuatsiya"
    },

    {
        savol: "Optik tolada signal kuchsizlanishining asosiy sabablaridan biri qaysi?",
        variantlar: [
            "Yutilish va sochilish jarayonlari",
            " Optik tolada haroratning pasayishi",
            " Optik tolada elektr maydonning kamayishi",
            " Optik tolada modulyatsiya usulining o‘zgarishi"
        ],
        togri: "Yutilish va sochilish jarayonlari"
    },

    {
        savol: "An’anaviy kuchaytirish usulida optik signal qanday qayta ishlanadi?",
        variantlar: [
            "Avval elektr signalga aylantirilib, keyin yana optik signalga o‘tkaziladi",
            "Avval optik signalga aylantirilib, keyin yana elektr signalga o‘tkaziladi",
            " An’anaviy kuchaytirish usulida optik signal analog signalga aylantiriladi",
            " An’anaviy kuchaytirish usulida optik signal raqamli signalga aylantiriladi"
        ],
        togri: "Avval elektr signalga aylantirilib, keyin yana optik signalga o‘tkaziladi"
    },

    {
        savol: "Optik kuchaytirgichlarning asosiy afzalligi nimada?",
        variantlar: [
            "Signalni elektr ko‘rinishga o‘tkazmasdan kuchaytirishi",
            " Signalni chastotasini past holatda uzatish ",
            " Signalni tok kuchini oshirishi",
            " Signalni shovqinni yo‘qotishi"
        ],
        togri: "Signalni elektr ko‘rinishga o‘tkazmasdan kuchaytirishi"
    },

    {
        savol: "Optik kuchaytirgichlarda kuchaytirish jarayonida nima ko‘paytiriladi?",
        variantlar: [
            " Fotonlar soni",
            " Signal chastotasi",
            " Signal uzunligi",
            " Elektr qarshilik"
        ],
        togri: " Fotonlar soni"
    },

    {
        savol: "Optik kuchaytirgichlar odatda uzatish liniyasining qayerida qo‘llaniladi?",
        variantlar: [
            "Boshlang‘ich, o‘rta va qabul qiluvchi qismlarida",
            "Boshlang‘ich va qabul qiluvchi qismlarida",
            "Boshlang‘ich, o‘rta  qismlarida",
            " O‘rta va qabul qiluvchi qismlarida",
        ],
        togri: "Boshlang‘ich, o‘rta va qabul qiluvchi qismlarida"
    },

    {
        savol: "Booster amplifier qanday vazifani bajaradi?",
        variantlar: [
            "Uzatish liniyasining boshlanishida signalni kuchaytiradi",
            "Uzatish liniyasining qabul qiluvchi qismida signalni kuchaytiradi",
            " Shovqinni filtrlash uchun ishlatiladi",
            " Signalni saqlash uchun ishlatiladi"
        ],
        togri: "Uzatish liniyasining boshlanishida signalni kuchaytiradi"
    },

    {
        savol: "Optik kuchaytirgichlar signal bilan birga nimani ham kuchaytiradi?",
        variantlar: [
            "Shovqin",
            " Amplituda",
            " Faza",
            " Modulyatsiya"
        ],
        togri: "Shovqin"
    },

    {
        savol: "Optik kuchaytirgichlar qanday fizik hodisadan foydalanadi?",
        variantlar: [
            "Induksiyalangan nurlanish ",
            " Fotoeffekt ",
            " Termoelektr ",
            " Elektromagnit induksiya "
        ],
        togri: "Induksiyalangan nurlanish "
    },

    {
        savol: "Fabri-Pero kuchaytirgichlari qanday rezonator bilan jihozlangan?",
        variantlar: [
            "Yarim shaffof ko‘zgu devorli yassi rezonator ",
            " Dielektrik rezonator ",
            " Magnit rezonator ",
            " Vakuum rezonatori "
        ],
        togri: "Yarim shaffof ko‘zgu devorli yassi rezonator "
    },

    {
        savol: "Fabri-Pero kuchaytirgichining kuchaytirish koeffitsienti taxminan qancha bo‘lishi mumkin?",
        variantlar: [
            "25 dB gacha",
            "5 dB gacha",
            "100 dB gacha",
            "1 dB gacha"
        ],
        togri: "25 dB gacha"
    },

   {
    savol: "Brillyuen kuchaytirgichlari qanday effektga asoslanadi?",
    variantlar: [
        "Nochiziqli Brillyuen sochilish effektiga",
        "Nochiziqli Brillyuen yutilish effektiga",
        "Nochiziqli Brillyuen dispersiya effektiga",
        "Nochiziqli Brillyuen interferensiya effektiga"
    ],
    togri: "Nochiziqli Brillyuen sochilish effektiga"
},

    {
        savol: "Raman kuchaytirgichlari qanday hodisaga asoslanadi?",
        variantlar: [
            "Raman sochilish ",
            " Raman difraksiya ",
            " Raman interferensiya ",
            " Raman qutblanish "
        ],
        togri: "Raman sochilish hodisasiga"
    },

    {
        savol: "Raman kuchaytirgichlarining asosiy afzalligi nimada?",
        variantlar: [
            "Bir nechta WDM kanallarini bir vaqtda kuchaytirishi",
            "Bir nechta WDM kanallarini ketma-ket kuchaytirishi",
            " bitta signalni kuchaytirishi va qisqa masofada ishlashi",
            " Raqamli va analog signal uzatishi"
        ],
        togri: "Bir nechta WDM kanallarini bir vaqtda kuchaytirishi"
    },

    {
        savol: "EDFA kuchaytirgichlarida optik tolaga qanday ionlar qo‘shiladi?",
        variantlar: [
            "Erbiy ionlari",
            "Kremniy ionlari",
            "Mis ionlari",
            "Temir ionlari"
        ],
        togri: "Erbiy ionlari"
    },

    {
        savol: "EDFA kuchaytirgichlarida signal asosan qaysi to‘lqin uzunligida kuchaytiriladi?",
        variantlar: [
            "1550 nm atrofida",
            "850 nm atrofida",
            "650 nm atrofida",
            "400 nm atrofida"
        ],
        togri: "1550 nm atrofida"
    },

    {
        savol: "Raman kuchaytirgichlarda nasos signali qayer orqali yuboriladi?",
        variantlar: [
            "Uzatish tolasi orqali",
            " Elektr kabel orqali",
            " Rezonator orqali",
            " Filtr orqali"
        ],
        togri: "Uzatish tolasi orqali"
    },

    {
        savol: "DWDM texnologiyasi nimani ta’minlaydi?",
        variantlar: [
            "To‘lqin uzunligi bo‘linish multipleksatsiyasini",
            " To‘lqin uzunligi  analog modulyatsiyani",
            " To‘lqin uzunligi  elektr signal uzatishni",
            " To‘lqin uzunligi  past tezlikli uzatishni"
        ],
        togri: "To‘lqin uzunligi bo‘linish multipleksatsiyasini"
    },

    {
        savol: "Optik kuchaytirgichlarning ishlashi nimaga bog‘liq emas?",
        variantlar: [
            "Uzatish tezligi va to‘lqin uzunligiga",
            " Uzatish tezligi va nasos quvvatiga",
            " Uzatish tezligi va aktiv muhitga",
            " Uzatish tezligi va signal quvvatiga"
        ],
        togri: "Uzatish tezligi va to‘lqin uzunligiga"
    },

    {
        savol: "Optik kuchaytirgichning kuchaytirish koeffitsienti nimaga teng?",
        variantlar: [
            "Chiqish va kirish quvvatlari nisbatining logarifmiga",
            "Chiqish va kirish quvvatlari yig’indisining logarifmiga",
            " Chiqish va  kirish quvvatiga",
            "Signal chastotalari yig‘indisiga"
        ],
        togri: "Chiqish va kirish quvvatlari nisbatining logarifmiga"
    },

    {
        savol: "Shovqin faktori (NF) nimani ifodalaydi?",
        variantlar: [
            "Signal/shovqin nisbatining kirish va chiqishdagi o‘zgarishini",
            "Signal/shovqin nisbatining kirish va chiqishdagi qiymatini",
            "Signal/shovqin nisbatining kirish va chiqishdagi signal amplitudasini",
            "Signal/shovqin nisbatining kirish va chiqishdagi lazer quvvatini",
            " signal uzunligini"
        ],
        togri: "Signal/shovqin nisbatining kirish va chiqishdagi o‘zgarishini"
    },

    {
        savol: "Raman kuchaytirgichlarda 1550 nm signalni kuchaytirish uchun qaysi lazerlardan foydalaniladi?",
        variantlar: [
            "1320 nm yoki 1443 nm lazerlardan",
            "850 nm lazerlardan",
            "650 nm lazerlardan",
            "9800 nm lazerlardan"
        ],
        togri: "1320 nm yoki 1443 nm lazerlardan"
    },

    {
        savol: "Dastlabki (old) kuchaytirgichlar qayerda o‘rnatiladi?",
        variantlar: [
            "Regenerator kirishida",
            " Uzatuvchi modul ichida",
            " Qabul qiluvchi modul ichida",
            " Markaziy serverda"
        ],
        togri: "Regenerator kirishida"
    },
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
    },
    {
        savol: "Yorug‘likni optik tolaga kiritish va chiqarish qurilmalarining asosiy vazifasi nima?",
        variantlar: [
            "Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signalni uzatish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signal chastotasini kamaytirish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va elektr signalini kuchaytirish",
            " Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va optik tolani sovutish"
        ],
        togri: "Yorug‘lik manbasi nurlanishini tolaga samarali yo‘naltirish va signalni uzatish"
    },

    {
        savol: "Optik ulagichlarning asosiy vazifasi nimadan iborat?",
        variantlar: [
            "Tolalarni bir-biriga yoki qurilmalarga ulash",
            " Tolalarni qurilmalarga ulash va yorug‘likni filtrlash",
            " Tolalarni qurilmalarga ulash va signal amplitudasini oshirish",
            " Tolalarni qurilmalarga ulash va lazer quvvatini boshqarish"
        ],
        togri: "Tolalarni bir-biriga yoki qurilmalarga ulash"
    },

    {
        savol: "Kollimatorlar va linzalar qanday vazifani bajaradi?",
        variantlar: [
            "Yorug‘likni tola uchiga fokuslash yoki qayta yoyish",
            " Yorug‘likni tola uchiga fokuslash va signalni modulyatsiyalash",
            " Yorug‘likni tola uchiga fokuslash va elektr signal hosil qilish",
            " Yorug‘likni tola uchiga fokuslash va shovqinni kamaytirish"
        ],
        togri: "Yorug‘likni tola uchiga fokuslash yoki qayta yoyish"
    },

    {
        savol: "Coupler qurilmalari qanday vazifani bajaradi?",
        variantlar: [
            "Signalni optik tolaga kiritish yoki undan chiqarish",
            " Signalni optik tolaga kiritish yoki signalni kodlash",
            " Signalni optik tolaga kiritish yoki chastotani oshirish",
            " Signalni optik tolaga kiritish yoki optik tolani himoyalash"
        ],
        togri: "Signalni optik tolaga kiritish yoki undan chiqarish"
    },

    {
        savol: "Optik aloqa liniyalarida eng kam so‘nish qaysi to‘lqin uzunligida kuzatiladi?",
        variantlar: [
            "1.55 mkm atrofida",
            "0.45 mkm atrofida",
            "10 mkm atrofida",
            "0.01 mkm atrofida"
        ],
        togri: "1.55 mkm atrofida"
    },

    {
        savol: "Pigtail nima?",
        variantlar: [
            "Lazer yoki fotodetektorga zavodda ulangan qisqa optik tola",
            " Lazer yoki fotodetektorga zavodda ulangan optik filtr turi",
            " Lazer yoki fotodetektorga zavodda ulangan kuchaytiruvchi modul",
            " Lazer yoki fotodetektorga zavodda ulangan kollimator qurilmasi"
        ],
        togri: "Lazer yoki fotodetektorga zavodda ulangan qisqa optik tola"
    },

    {
        savol: "Mikrolinzalar nima maqsadda ishlatiladi?",
        variantlar: [
            "Yorug‘lik dastasini fokuslash va tola aperturasi bilan moslashtirish uchun",
            " Yorug‘lik dastasini fokuslash va signalni saqlash uchun",
            " Yorug‘lik dastasini fokuslash va tokni kamaytirish uchun",
            " Yorug‘lik dastasini fokuslash va mexanik himoya uchun"
        ],
        togri: "Yorug‘lik dastasini fokuslash va tola aperturasi bilan moslashtirish uchun"
    },

    {
        savol: "Fokuslovchi obyektivlar asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Laboratoriya sharoitida keng nurni ingichka o‘zakka tushirish uchun",
            " Sun’iy yo‘ldosh tizimlarida",
            " Elektro-optik tarmoqlarida",
            " Radiouzatkich tarmoqlarda"
        ],
        togri: "Laboratoriya sharoitida keng nurni ingichka o‘zakka tushirish uchun"
    },

    {
        savol: "SC, LC va FC — … turlari hisoblanadi?",
        variantlar: [
            "Optik konnektorlarning",
            " Lazer diodlarining",
            " Optik kuchaytirgichlarning",
            " Fotodiodlarning"
        ],
        togri: "Optik konnektorlarning"
    },

    {
        savol: "Optik adapterlarning asosiy vazifasi nima?",
        variantlar: [
            "Ikki konnektorni aniq markazlashtirib tutashtirish",
            " Ikki konnektorni aniq markazlashtirib signalni kuchaytirish",
            " Optik signalni elektr signalga aylantirish",
            " Ikki konnektorni aniq markazlashtirib lazer quvvatini kamaytirish"
        ],
        togri: "Ikki konnektorni aniq markazlashtirib tutashtirish"
    },

    {
        savol: "Splitters va Couplers qanday maqsadda ishlatiladi?",
        variantlar: [
            "Nurni bir nechta tolaga bo‘lish yoki birlashtirish uchun",
            " Nurni bir nechta tolaga bo‘lish va signalni saqlash uchun",
            " Optik tolani ichki va tashqi himoyalash uchun",
            " Nurni bir nechta tolaga bo‘lish va tokni oshirish uchun"
        ],
        togri: "Nurni bir nechta tolaga bo‘lish yoki birlashtirish uchun"
    },

    {
        savol: "Apertura mos kelmasligi nimaga olib keladi?",
        variantlar: [
            "Energiya yo‘qolishiga",
            " Signal kuchayishiga",
            " Harorat oshishiga",
            " Modulyatsiya tezlashishiga"
        ],
        togri: "Energiya yo‘qolishiga"
    },

    {
        savol: "Fresnel akslanishi nimaga sabab bo‘lishi mumkin?",
        variantlar: [
            "Signal quvvatining kamayishiga",
            " Lazer quvvatining ortishiga",
            " Tokning oshishiga",
            " Chastota barqarorlashishiga"
        ],
        togri: "Signal quvvatining kamayishiga"
    },

    {
        savol: "Insertion Loss nimani ko‘rsatadi?",
        variantlar: [
            "Qurilma ulangandan keyin signal quvvatining kamayishini",
            " Qurilma ulangandan keyin signal chastotasini",
            " Qurilma ulangandan keyin optik tola diametrini",
            " Qurilma ulangandan keyin lazer haroratini"
        ],
        togri: "Qurilma ulangandan keyin signal quvvatining kamayishini"
    },

    {
        savol: "Konnektorlar uchun odatiy insertion loss qiymati qancha?",
        variantlar: [
            "0.1 dB dan 0.5 dB gacha",
            "10 dB dan 50 dB gacha",
            "1 dB dan 5 dB gacha",
            "50 dB dan 100 dB gacha"
        ],
        togri: "0.1 dB dan 0.5 dB gacha"
    },

    {
        savol: "Payvandlangan ulanish uchun yo‘qotish odatda qanday bo‘ladi?",
        variantlar: [
            "0.01–0.1 dB atrofida",
            "1–5 dB atrofida",
            "10–20 dB atrofida",
            "50–60 dB atrofida"
        ],
        togri: "0.01–0.1 dB atrofida"
    },

    {
        savol: "Return Loss nimani ifodalaydi?",
        variantlar: [
            "Nurning ulanish joyidan orqaga qaytib akslanishini",
            " Nurning ulanish joyidasignalning kuchayishini",
            " Nurning ulanish joyidatokning kamayishini",
            " Nurning ulanish joyida lazer tezligini"
        ],
        togri: "Nurning ulanish joyidan orqaga qaytib akslanishini"
    },

    {
        savol: "APC konnektorining asosiy xususiyati nimada?",
        variantlar: [
            "Uchi 8 gradus qiyalikda bo‘lib, akslanishi juda kam",
            " Uchi metall qoplamaga ega",
            " Uchi past chastotada ishlaydi",
            " Uchi LED bilan ishlaydi"
        ],
        togri: "Uchi 8 gradus qiyalikda bo‘lib, akslanishi juda kam"
    },

    {
        savol: "Numerical Aperture (NA) nimani bildiradi?",
        variantlar: [
            "Tolaning nurni qabul qilish qobiliyatini",
            " Tolaning signal amplitudasini",
            " Tolaning lazer kuchlanishini",
            " Tolaning modulyatsiya tezligini"
        ],
        togri: "Tolaning nurni qabul qilish qobiliyatini"
    },

    {
        savol: "Bir modali tolalarda NA taxminan qanday bo‘ladi?",
        variantlar: [
            "0.1 – 0.14",
            "1 – 1.4",
            "5 – 10",
            "0.001 – 0.005"
        ],
        togri: "0.1 – 0.14"
    },

    {
        savol: "1–2 mikrometr siljish nimaga olib kelishi mumkin?",
        variantlar: [
            "10–20% quvvat yo‘qolishiga",
            " Signal tezlashishiga",
            " Tok ortishiga",
            " Harorat kamayishiga"
        ],
        togri: "10–20% quvvat yo‘qolishiga"
    },

    {
        savol: "Standart optik oynalar qaysi to‘lqin uzunliklarida ishlaydi?",
        variantlar: [
            "850 nm, 1310 nm va 1550 nm",
            "100 nm, 200 nm va 300 nm",
            "5 nm, 10 nm va 15 nm",
            "5000 nm, 7000 nm va 9000 nm"
        ],
        togri: "850 nm, 1310 nm va 1550 nm"
    },

    {
        savol: "Cleaving jarayonida nima amalga oshiriladi?",
        variantlar: [
            "Tola uchi 90 gradus burchak ostida kesiladi",
            " Tolada signal kuchaytiriladi",
            " Optik tolaga qoplama surtiladi",
            " Optik tolada lazer sozlanadi"
        ],
        togri: "Tola uchi 90 gradus burchak ostida kesiladi"
    },
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
    },
    {
        savol: "Optik demultipleksor (DEMUX) qanday qurilma hisoblanadi?",
        variantlar: [
            "Bitta tolada kelayotgan aralash optik signallarni alohida kanallarga ajratuvchi qurilma",
            "Bir nechta optik signallarni bitta tolaga birlashtiruvchi qurilma",
            " Bitta tolada kelayotgan aralash optik signallarni  kuchaytiruvchi optik qurilma",
            " Bitta tolada kelayotgan aralash optik signallarni elektr signalga aylantiruvchi qurilma"
        ],
        togri: "Bitta tolada kelayotgan aralash optik signallarni alohida kanallarga ajratuvchi qurilma"
    },

    {
        savol: "DEMUX qurilmasi asosan qaysi texnologiyada muhim rol o‘ynaydi?",
        variantlar: [
            "WDM texnologiyasida",
            " ADM, analog telefon tarmoqlarida",
            " Wi-Fi radiorele tizimlarida",
            " Elektr kabel tizimlarida"
        ],
        togri: "WDM texnologiyasida"
    },

    {
        savol: "Demultipleksorning asosiy vazifasi nimadan iborat?",
        variantlar: [
            "Umumiy optik oqimdan kanallarni to‘lqin uzunligi bo‘yicha ajratish",
            "Turli kanallarni bitta oqimga birlashtirish",
            " Umumiy optik oqimdan kanallarni signal amplitudasini oshirish",
            " Umumiy optik oqimdan kanallarni signalni modulyatsiyalash"
        ],
        togri: "Umumiy optik oqimdan kanallarni to‘lqin uzunligi bo‘yicha ajratish"
    },

    {
        savol: "Demultipleksor ma’lumotlarni qanday tarqatadi?",
        variantlar: [
            "Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga yo‘naltiradi",
            "Barcha signallarni bitta qurilmaga uzatadi",
            " Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga signalni saqlaydi",
            " Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga signalni kuchaytiradi"
        ],
        togri: "Ajratilgan signallarni tegishli qabul qiluvchi qurilmalarga yo‘naltiradi"
    },

    {
        savol: "Demultipleksorlarning samaradorligi nimada namoyon bo‘ladi?",
        variantlar: [
            "Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanish imkonida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib signal tezligini kamaytirishida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib elektr energiyasini tejashida",
            " Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanib analog signal uzatishida"
        ],
        togri: "Bitta tolada o‘nlab va yuzlab mustaqil kanallardan foydalanish imkonida"
    },

    {
        savol: "Diffraksion panjara demultipleksorda qanday vazifani bajaradi?",
        variantlar: [
            "Nurni to‘lqin uzunligiga qarab turli burchaklarga og‘diradi",
            " Nurni to‘lqin uzunligiga qarab signalni kuchaytiradi",
            " Nurni to‘lqin uzunligiga qarab signalni modulyatsiyalaydi",
            " Nurni to‘lqin uzunligiga qarab signalni elektr shaklga aylantiradi"
        ],
        togri: "Nurni to‘lqin uzunligiga qarab turli burchaklarga og‘diradi"
    },

    {
        savol: "TFF (Thin Film Filter) qanday ishlaydi?",
        variantlar: [
            " ma’lum to‘lqin uzunligini o‘tkazib, qolganlarini qaytaradi",
            "Barcha to‘lqinlarni teng kuchaytiradi",
            " ma’lum to‘lqin uzunligida signal amplitudasini kamaytiradi",
            " ma’lum to‘lqin uzunligida signal tezligini oshiradi"
        ],
        togri: " ma’lum to‘lqin uzunligini o‘tkazib, qolganlarini qaytaradi"
    },

    {
        savol: "Prizmalar demultipleksorlarda qanday xususiyatdan foydalanadi?",
        variantlar: [
            "Yorug‘likning dispersiya xususiyatidan",
            " Yorug‘likning magnit xususiyatidan",
            " Yorug‘likning elektr qarshiligidan",
            " Yorug‘likning issiqlik o‘tkazuvchanligidan"
        ],
        togri: "Yorug‘likning dispersiya xususiyatidan"
    },

    {
        savol: "Diffraksion panjara qanday optik qurilma hisoblanadi?",
        variantlar: [
            "Murakkab nurni spektrga ajratuvchi optik qurilma",
            " Murakkab signalni birlashtiruvchi qurilma",
            " Murakkab signalni kuchaytiruvchi qurilma",
            " Murakkab elektr signal hosil qiluvchi qurilma"
        ],
        togri: "Murakkab nurni spektrga ajratuvchi optik qurilma"
    },

    {
        savol: "TFF texnologiyasi ayniqsa qaysi tizimlarda keng qo‘llaniladi?",
        variantlar: [
            "CWDM va DWDM tizimlarida",
            " CWDM radiouzatkichlarda",
            " DWDM analog telefonlarda",
            " CWDM va DWDM elektr tarmoqlarida"
        ],
        togri: "CWDM va DWDM tizimlarida"
    },

    {
        savol: "Optik multipleksor (MUX) qanday qurilma hisoblanadi?",
        variantlar: [
            "Bir nechta optik signallarni bitta optik tolaga birlashtiruvchi qurilma",
            " Bir nechta optik signallarni kuchaytiruvchi optik qurilma",
            " Bir nechta optik signallarni  elektr signalga aylantiruvchi qurilma",
            " Bir nechta optik signallarni chastotasini kamaytiruvchi qurilma"
        ],
        togri: "Bir nechta optik signallarni bitta optik tolaga birlashtiruvchi qurilma"
    },

    {
        savol: "Optik multipleksorlar aloqa tizimida qanday afzallik beradi?",
        variantlar: [
            "Mavjud optik liniyaning o‘tkazuvchanligini oshiradi",
            " Mavjud optik liniyasida  signal amplitudasini oshiradi",
            " Mavjud optik liniyasida  elektr quvvatini kamaytiradi",
            " Mavjud optik liniyasida  optik tolani sovutadi"
        ],
        togri: "Mavjud optik liniyaning o‘tkazuvchanligini oshiradi"
    },

    {
        savol: "CWDM tizimlarida kanallar orasidagi masofa odatda qancha bo‘ladi?",
        variantlar: [
            "20 nm atrofida",
            "0.4 nm atrofida",
            "0.01 nm atrofida",
            "100 nm atrofida"
        ],
        togri: "20 nm atrofida"
    },

    {
        savol: "DWDM texnologiyasining asosiy afzalligi nimada?",
        variantlar: [
            "Juda ko‘p kanallarni bitta tolada uzata olishi",
            " Ko‘p kanallarda bitta signalni uzata olishi",
            " Ko‘p kanallarda qisqa masofalarda ishlashi",
            " Ko‘p kanallarda analog signallarni uzatishi"
        ],
        togri: "Juda ko‘p kanallarni bitta tolada uzata olishi"
    },

    {
        savol: "DWDM tizimlari asosan qayerda qo‘llaniladi?",
        variantlar: [
            "Uzoq masofali magistral tarmoqlarda",
            " Shahar ichida ",
            " Ichki tarmoqlarida",
            " Shahar va qishloqlar ichida "
        ],
        togri: "Uzoq masofali magistral tarmoqlarda"
    },

    {
        savol: "DWDM tizimlari nechtagacha kanalni qo‘llab-quvvatlashi mumkin?",
        variantlar: [
            "80, 96 va hatto 160 tagacha",
            " 2 tagacha",
            " 8 tagacha",
            " 16 tagacha"
        ],
        togri: "80, 96 va hatto 160 tagacha"
    },

    {
        savol: "OTDM texnologiyasida kanallar nimaga asoslanib ajratiladi?",
        variantlar: [
            "vaqt slotlariga",
            " chastotaga",
            " signal quvvatiga",
            " signal amplitudasiga"
        ],
        togri: "Vaqt slotlariga"
    },

    {
        savol: "OTDM va WDM orasidagi asosiy farq nimada?",
        variantlar: [
            "OTDM bitta to‘lqin uzunligida ishlaydi",
            "OTDM faqat rang bo‘yicha ishlaydi",
            "WDM vaqt slotlari bo‘yicha ishlaydi",
            "WDM faqat bitta signal uzatadi"
        ],
        togri: "OTDM bitta to‘lqin uzunligida ishlaydi"
    },

    {
        savol: "ROADM qanday qurilma hisoblanadi?",
        variantlar: [
            "Qayta konfiguratsiya qilinadigan aqlli optik multipleksor",
            " Qayta konfiguratsiya qilinadigan optik signalni kuchaytiruvchi qurilma",
            " Qayta konfiguratsiya qilinadigan signalni elektr signalga aylantiruvchi qurilma",
            " Qayta konfiguratsiya qilinadigan lazer nurlanishini hosil qiluvchi qurilma"
        ],
        togri: "Qayta konfiguratsiya qilinadigan aqlli optik multipleksor"
    },

    {
        savol: "WSS texnologiyasi nima uchun xizmat qiladi?",
        variantlar: [
            "Signallarni to‘lqin uzunligi bo‘yicha saralash uchun",
            " Signallarni to‘lqin uzunligi bo‘yicha quvvatini oshirish uchun",
            " Signallarni to‘lqin uzunligi bo‘yicha kodlash uchun",
            " Signallarni elektr impulslarini uzatish uchun"
        ],
        togri: "Signallarni to‘lqin uzunligi bo‘yicha saralash uchun"
    },

    {
        savol: "DWDM texnologiyasi yordamida qanday tezlikdagi kanallar uzatilishi mumkin?",
        variantlar: [
            "100 Gbit/s, 400 Gbit/s va hatto 800 Gbit/s",
            " 1 Mbit/s",
            " 10 Mbit/s",
            " 100 Mbit/s"
        ],
        togri: "100 Gbit/s, 400 Gbit/s va hatto 800 Gbit/s"
    },

    {
        savol: "Data Centerlar orasidagi aloqa uchun asosan qaysi texnologiya qo‘llaniladi?",
        variantlar: [
            "CWDM",
            " Analog multiplekslash",
            " Radioaloqa",
            " Mis kabel tizimlari"
        ],
        togri: "CWDM"
    },

    {
        savol: "Sanoat va xavfsizlik tizimlarida multipleksorlar qanday maqsadda qo‘llaniladi?",
        variantlar: [
            "Ko‘plab video oqimlarni bitta magistral tolaga yig‘ish uchun",
            " Ko‘plab video oqimlarda signalni kuchaytirish uchun",
            " Ko‘plab video oqimlarda signalni vaqt bo‘yicha ajratish uchun",
            " Ko‘plab video oqimlarda elektr energiyasini boshqarish uchun"
        ],
        togri: "Ko‘plab video oqimlarni bitta magistral tolaga yig‘ish uchun"
    },

    {
        savol: "Optik multipleksorlarning xavfsizlik afzalligi nimada?",
        variantlar: [
            "Kanallar alohida to‘lqin uzunligida bo‘lgani uchun xalaqit kam bo‘ladi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun signal tezligini oshiradi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun signal amplitudasini kamaytiradi",
            " Kanallar alohida to‘lqin uzunligida bo‘lgani uchun elektr quvvatini boshqaradi"
        ],
        togri: "Kanallar alohida to‘lqin uzunligida bo‘lgani uchun xalaqit kam bo‘ladi"
    },
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
    },
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
    },
{
        savol: "Tolali optik aloqa tizimi qanday tizim hisoblanadi?",
        variantlar: [
            "Ma'lumotlarni yorug'lik nurlari yordamida optik tolalar orqali uzatuvchi tizim",
            "Ma'lumotlarni yorug'lik va  elektr signallari orqali uzatuvchi tizim",
            " Ma'lumotlarni yorug'lik nurlari  va radio to'lqinlar asosida ishlovchi tizim",
            " Ma'lumotlarni yorug'lik nurlari mis kabel orqali ma'lumot uzatuvchi tizim"
        ],
        togri: "Ma'lumotlarni yorug'lik nurlari yordamida optik tolalar orqali uzatuvchi tizim"
    },

    {
        savol: "Optik aloqa tizimida uzatish qismi qanday vazifani bajaradi?",
        variantlar: [
            "Elektr signalni optik signalga aylantiradi",
            "Optik signalni elektr signalga aylantiradi",
            " Elektr signalni optik signalga aylantiradi va signalni kuchaytiradi",
            " Elektr signalni optik signalga aylantiradi va signalni filtrlashni amalga oshiradi"
        ],
        togri: "Elektr signalni optik signalga aylantiradi"
    },

    {
        savol: "Tolali optik aloqa tizimlarining asosiy afzalliklaridan biri nima?",
        variantlar: [
            "Yuqori o'tkazish qobiliyati",
            "Faqat arzon qurilmalar ishlatilishi",
            "Faqat qisqa masofada ishlashi",
            "Faqat analog signal uzatishi"
        ],
        togri: "Yuqori o'tkazish qobiliyati"
    },

    {
        savol: "Optik aloqa tizimlari rivojlanishi asosan nima bilan bog`liq?",
        variantlar: [
            "Lazer texnologiyalarining paydo bo`lishi bilan",
            "Faqat mis kabellar rivojlanishi bilan",
            "Faqat radiotexnika taraqqiyoti bilan",
            "Faqat sun`iy yo`ldosh tizimlari bilan"
        ],
        togri: "Lazer texnologiyalarining paydo bo`lishi bilan"
    },

    {
        savol: "Optik aloqa tizimida qabul qilish qismi nima qiladi?",
        variantlar: [
            "Optik signalni elektr signalga aylantiradi",
            "Elektr signalni optik signalga aylantiradi",
            "Faqat signal amplitudasini oshiradi",
            "Faqat signalni kodlaydi"
        ],
        togri: "Optik signalni elektr signalga aylantiradi"
    },

    {
        savol: "Optik tolada signal uzatilishi qaysi hodisaga asoslanadi?",
        variantlar: [
            "To'liq ichki qaytish hodisasiga",
            " elektromagnit induksiya hodisasiga",
            " difraksiya hodisasiga",
            " rezonans hodisasiga"
        ],
        togri: "To'liq ichki qaytish hodisasiga"
    },

    {
        savol: "Optik tolaning markaziy qismi nima deb ataladi?",
        variantlar: [
            "Yadro",
            "Qobiq",
            "Himoya qatlami",
            "Reflektor"
        ],
        togri: "Yadro"
    },

    {
        savol: "Qobiqning asosiy vazifasi nima?",
        variantlar: [
            "Yorug'likni optik tola ichida ushlab turish",
            "Yorug'lik signalni elektr shaklga aylantirish",
            "Yorug'lik signalni kuchaytirish",
            "Yorug'lik signalni modulyatsiyalash"
        ],
        togri: "Yorug'likni optik tola ichida ushlab turish"
    },
    {
        savol: "Bir modali optik tolaning asosiy xususiyati nimada?",
        variantlar: [
            "Yorug‘lik bitta yo‘nalishda tarqaladi",
            "Yorug‘lik bir nechta yo‘nalishda tarqaladi",
            " Yorug‘likni uzatish uchun qisqa masofalarda ishlaydi",
            " Yorug‘likni analog signallarda uzatadi"
        ],
        togri: "Yorug‘lik bitta yo‘nalishda tarqaladi"
    },

    {
        savol: "Ko‘p modali optik tolalar asosan qayerlarda qo‘llaniladi?",
        variantlar: [
            "Qisqa masofali lokal tarmoqlarda",
            " Magistral liniyalarda",
            " Xalqaro suv osti tarmoqlarida",
            "Internet va  sun’iy yo‘ldosh aloqasida"
        ],
        togri: "Qisqa masofali lokal tarmoqlarda"
    },

    {
        savol: "LED qurilmalarining asosiy afzalligi nima?",
        variantlar: [
            "Sodda va arzon bo‘lishi",
            " Uzoq masofaga yorug’lik uzatishi",
            " Juda yuqori tezlikda ishlashi",
            " Magistral tarmoqlarda ishlashi"
        ],
        togri: "Sodda va arzon bo‘lishi"
    },

    {
        savol: "Lazer diodlar qaysi holatda ko‘proq qo‘llaniladi?",
        variantlar: [
            "Yuqori tezlik va uzoq masofali tizimlarda",
            "Qisqa masofali lokal tarmoqlarda",
            " Analog telefon tizimlarida ma’lumot uzatishda",
            "Internet va  ichki tarmoq kabellarida"
        ],
        togri: "Yuqori tezlik va uzoq masofali tizimlarda"
    },

    {
        savol: "Optik qabul qilgichlarda asosan qanday qurilmalar ishlatiladi?",
        variantlar: [
            "Fotodetektorlar",
            " Multipleksorlar",
            " Lazer generatorlari",
            " Optik filtrlar"
        ],
        togri: "Fotodetektorlar"
    },

    {
        savol: "APD fotodiodning asosiy afzalligi nimada?",
        variantlar: [
            "Yuqori sezgirlikka ega bo‘lishida",
            " Arzon ishlab chiqarilishida",
            " Signalni kuchaytirmasligida",
            " Qisqa masofalarda ishlashida"
        ],
        togri: "Yuqori sezgirlikka ega bo‘lishida"
    },

    {
        savol: "Signalning so‘nishi nimani anglatadi?",
        variantlar: [
            "Optik signal quvvatining kamayishini",
            " Optik signal chastotasining oshishini",
            " Optik signal tezligining ortishini",
            " Optik signal shaklining tiklanishini"
        ],
        togri: "Optik signal quvvatining kamayishini"
    },

    {
        savol: "Dispersiya qanday jarayon hisoblanadi?",
        variantlar: [
            "Signal impulslarining kengayib ketish jarayoni",
            "Signal amplitudasining ortish jarayoni",
            "Signalni elektr shaklga aylantirish jarayoni",
            "Signalni modulyatsiyalash jarayoni"
        ],
        togri: "Signal impulslarining kengayib ketish jarayoni"
    },

    {
        savol: "Modal dispersiya asosan qaysi tolalarda uchraydi?",
        variantlar: [
            "Ko‘p modali tolalarda",
            "Bir modali tolalarda",
            " Suv osti kabellarida",
            " Lazer tizimlaridagi kabellarida "
        ],
        togri: "Ko‘p modali tolalarda"
    },

    {
        savol: "Optik kuchaytirgichning asosiy vazifasi nima?",
        variantlar: [
            "Optik signalni elektr signalga aylantirmasdan kuchaytirish",
            " Optik signalni elektr shaklga aylantirish orqali kuchaytirish ",
            " Optik signalni kodlash orqali kuchaytirish ",
            " Optik signalni sinxronlashtirish orqali kuchaytirish "
        ],
        togri: "Optik signalni elektr signalga aylantirmasdan kuchaytirish"
    },

    {
        savol: "EDFA kuchaytirgich qanday ishlaydi?",
        variantlar: [
            "Erbiy qo‘shilgan optik tolada signalni kuchaytiradi",
            " Elektr signal yordamida ishlaydi, optik tolada signalni kuchaytiradi ",
            " Elektro- radio signalni kuchaytiradi",
            " Erbiy qo‘shilgan elektro signalni filtrlash uchun ishlatiladi"
        ],
        togri: "Erbiy qo‘shilgan optik tolada signalni kuchaytiradi"
    },

    {
        savol: "Regeneratorning asosiy afzalligi nimada?",
        variantlar: [
            "Signalni to‘liq tiklay olishi",
            " Signalni kuchaytirishi",
            " Signalni filtrlashi",
            " Arzon qurilma bo‘lishi"
        ],
        togri: "Signalni to‘liq tiklay olishi"
    },

    {
        savol: "Regeneratorning 3R funksiyasiga qaysi amal kirmaydi?",
        variantlar: [
            "Re-reflect",
            "Re-amplify",
            "Re-shape",
            "Re-time"
        ],
        togri: "Re-reflect"
    },

    {
        savol: "Multiplekslash texnologiyasining vazifasi nima?",
        variantlar: [
            "Bir nechta signalni bitta optik tolada uzatish",
            "Signalni elektr shaklga aylantirish",
            " Signalni kuchaytirish va optik tolada uzatish ",
            "Signal amplitudasini kamaytirish va optik tolada uzatish "
        ],
        togri: "Bir nechta signalni bitta optik tolada uzatish"
    },

    {
        savol: "DWDM texnologiyasining asosiy xususiyati nimada?",
        variantlar: [
            "Juda ko‘p optik kanallarni bitta tolada uzatishi",
            " Juda ko‘p optik kanallarni bitta kanal bilan ishlashi",
            " Juda ko‘p optik kanallarni qisqa masofalarda ishlashi",
            " Juda ko‘p optik kanallarni analog signallarni uzatishi"
        ],
        togri: "Juda ko‘p optik kanallarni bitta tolada uzatishi"
    },

    {
        savol: "Nuqta-nuqta topologiyasida qanday ulanish amalga oshiriladi?",
        variantlar: [
            "Ikki qurilma to‘g‘ridan-to‘g‘ri ulanadi",
            "Barcha qurilmalar markaziy tugunga ulanadi",
            "Qurilmalar yopiq halqa shaklida ulanadi",
            "Bir nechta yulduzsimon tarmoqlar birlashadi"
        ],
        togri: "Ikki qurilma to‘g‘ridan-to‘g‘ri ulanadi"
    },

    {
        savol: "Halqa topologiyasining asosiy afzalligi nima?",
        variantlar: [
            "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilishi",
            "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilmasligi",
            "Bir nechta yulduzsimon tarmoqlar birlashadi",
            "Barcha qurilmalar markaziy tugunga ulanishi"
        ],
        togri: "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilishi"
    },

    {
        savol: "Yulduzsimon topologiyada asosiy kamchilik nima?",
        variantlar: [
            "Markaziy tugun ishdan chiqsa tarmoq buzilishi",
            "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilishi",
            "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilmasligi",
            "Barcha qurilmalar markaziy tugunga ulanishi"
        ],
        togri: "Markaziy tugun ishdan chiqsa tarmoq buzilishi"
    },

    {
        savol: "FTTH texnologiyasi nimani anglatadi?",
        variantlar: [
            "Optik tolani foydalanuvchi uyigacha olib borishni",
            "Optik tolani magistral liniyalarni ulashni ",
            "Optik tolani mobil aloqa tarmoqlarini bog‘lashni ",
            "Optik tolani radio uzatishni tashkil qilishni  (Wi-Fi)"
        ],
        togri: "Optik tolani foydalanuvchi uyigacha olib borishni"
    },

    {
        savol: "GPON texnologiyasining asosiy afzalligi nimada?",
        variantlar: [
            "Bitta optik liniya orqali ko‘plab foydalanuvchilarga xizmat ko‘rsatishi",
            "Optik tolani radio uzatishni tashkil qilishni  (Wi-Fi)",
            "Markaziy tugun ishdan chiqsa tarmoq buzilishi",
            "Bir yo‘nalishda uzilish bo‘lsa signal boshqa yo‘nalishda uzatilishi"
        ],
        togri: "Bitta optik liniya orqali ko‘plab foydalanuvchilarga xizmat ko‘rsatishi"
    },

    {
        savol: "OTDR qurilmasining vazifasi nima?",
        variantlar: [
            "Optik kabeldagi nosozlik joyini aniqlash",
            " Optik kabeldagi signalni modulyatsiyalash",
            " Optik kabeldagi signalni kodlash",
            " Optik kabeldagi signalni filtrlash"
        ],
        togri: "Optik kabeldagi nosozlik joyini aniqlash"
    },
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
