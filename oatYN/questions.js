const SAVOLLAR = [
    {
        "savol": "OneDrive qaysi kompaniyaning bulutli saqlash xizmati hisoblanadi?",
        "variantlar": [
            "Google",
            "Amazon",
            "Microsoft",
            "Apple, Android"
        ],
        "togri": "Microsoft"
    },
    {
        "savol": "Raqamli portfel (e-portfolio) nima?",
        "variantlar": [
            "Hujjat saqlash uchun mo‘ljallangan elektron hamyon",
            "Hujjat parollarni yozib boradigan elektron daftar",
            "Kompyuter papkasining raqamli modeli",
            "Shaxsning yutuqlari, malakasi, loyihalari va ish namunalarining elektron to‘plami"
        ],
        "togri": "Shaxsning yutuqlari, malakasi, loyihalari va ish namunalarining elektron to‘plami"
    },
    {
        "savol": "Raqamli portfelni joylashtirish uchun qaysi platformalardan foydalanish maqsadga muvofiq?",
        "variantlar": [
            "Microsoft Word, Excel, Access",
            "GitHub, Behance, Google Sites, shaxsiy veb-sayt",
            "Telegram, WhatsApp, Viber,Microsoft Word, Excel, Access",
            "VLC, Winamp, Windows Media Player"
        ],
        "togri": "GitHub, Behance, Google Sites, shaxsiy veb-sayt"
    },
    {
        "savol": "Kuchli parol siyosatiga ko‘ra, xavfsiz parol qanday bo‘lishi kerak?",
        "variantlar": [
            "Kamida 8 ta belgi, bosh va kichik harflar, raqamlar va maxsus belgilar o‘z ichiga olishi kerak",
            "Kamida 7 ta belgi, bosh va kichik harflar, raqamlar va maxsus belgilar o‘z ichiga olishi kerak",
            "Kamida 6 ta belgi, bosh va kichik harflar, raqamlar va maxsus belgilar o‘z ichiga olishi kerak",
            "Kamida 4 ta bir xil harfdan iborat bo‘lishi kerak"
        ],
        "togri": "Kamida 8 ta belgi, bosh va kichik harflar, raqamlar va maxsus belgilar o‘z ichiga olishi kerak"
    },
    {
        "savol": "IoT tizimlarining eng katta xavfsizlik muammosi nimada?",
        "variantlar": [
            "Narxining juda arzonligi",
            "Qurilmalarning zaiflik va shaxsiy ma’lumotlar sizib chiqishi xavfi",
            "Energiyaning zaiflik va shaxsiy ma’lumotlar sizib chiqishi xavfi",
            "Kiberhujumlarga zaiflik va shaxsiy ma’lumotlar sizib chiqishi xavfi"
        ],
        "togri": "Kiberhujumlarga zaiflik va shaxsiy ma’lumotlar sizib chiqishi xavfi"
    },
    {
        "savol": "Google Workspace tarkibiga qaysi xizmatlar kiradi?",
        "variantlar": [
            "Word, Excel, PowerPoint, Outlook",
            "Windows, Linux, macOS",
            "Google Drive, Docs, Sheets, Slides, Gmail, Meet",
            "Photoshop, Illustrator, InDesign,Google Drive, Docs, Sheets, Slides, Gmail,"
        ],
        "togri": "Google Drive, Docs, Sheets, Slides, Gmail, Meet"
    },
    {
        "savol": "Prezi onlayn vositasining o‘ziga xos xususiyati nimada?",
        "variantlar": [
            "Slaydlarning oddiy almashinuvidan farqli olaroq, kattalashtirish (Zooming) effekti va bitta katta xaritada ishlash",
            "Slaydlarning oddiy almashinuvidan farqli olaroq, kattalashtirish (Zooming) effekti va bir nechta katta xaritada ishlash",
            "Faqat ovoz yozish imkoniyati",
            "Faqat matnlarni o‘chirib tashlash"
        ],
        "togri": "Slaydlarning oddiy almashinuvidan farqli olaroq, kattalashtirish (Zooming) effekti va bitta katta xaritada ishlash"
    },
    {
        "savol": "Onlayn hujjatlarda o‘zgarishlar tarixi (version history) nima uchun kerak?",
        "variantlar": [
            "Hujjat muddatini cheklash va avvalgi holatlarini ko‘rish va kerak bo‘lsa tiklash uchun",
            "Faqat matn shriftini o‘zgartirish uchun",
            "Fayl hajmini oshirish uchun",
            "Hujjatning avvalgi holatlarini ko‘rish va kerak bo‘lsa tiklash uchun"
        ],
        "togri": "Hujjatning avvalgi holatlarini ko‘rish va kerak bo‘lsa tiklash uchun"
    },
    {
        "savol": "Taqdimot tayyorlashda 'Vizual iyerarxiya' qoidasi nimani anglatadi?",
        "variantlar": [
            "Barcha matnlarni bir xil shrift va o‘lchamda yozish",
            "Eng muhim ma’lumotlarning kattaroq va yorqinroq elementlar yordamida birinchi navbatda ko‘zga tashlanishi",
            "Eng muhim ma’lumotlarning kichikroq va yorqinroq elementlar yordamida birinchi navbatda ko‘zga tashlanishi",
            "Slaydga imkon qadar ko‘p matn joylashtirish"
        ],
        "togri": "Eng muhim ma’lumotlarning kattaroq va yorqinroq elementlar yordamida birinchi navbatda ko‘zga tashlanishi"
    },
    {
        "savol": "Malware nima?",
        "variantlar": [
            "Zararli dasturlar (viruslar, troyanlar, josus dasturlar) to‘plami",
            "Zararsiz dasturlar (virus, troyanlar, josus bo'lmagan dasturlar) to‘plami",
            "Kompyuter ekranini himoya qiluvchi oyna",
            "Operatsion tizimning yangilanish fayli"
        ],
        "togri": "Zararli dasturlar (viruslar, troyanlar, josus dasturlar) to‘plami"
    },
    {
        "savol": "Zoom-da 'Breakout Rooms' (Sessiya zallari) funksiyasining vazifasi nima?",
        "variantlar": [
            "Ekran rangini o‘zgartirish",
            "Uchrashuv ishtirokchilarini kichik guruhlarga ajratib, alohida muhokama tashkil etish",
            "Uchrashuvni butunlay to‘xtatish",
            "Uchrashuv ishtirokchilarini katta guruhlarga ajratib, alohida muhokama tashkil etish"
        ],
        "togri": "Uchrashuv ishtirokchilarini kichik guruhlarga ajratib, alohida muhokama tashkil etish"
    },
    {
        "savol": "Quyidagilardan qaysi biri faqat bulutli saqlash xizmati hisoblanadi?",
        "variantlar": [
            "VLC Player",
            "WinRAR, Cloud",
            "Adobe Reader",
            "Dropbox"
        ],
        "togri": "Dropbox"
    },
    {
        "savol": "Ma’lumotlar tahlilida gistoqramma (Histogram) nima uchun ishlatiladi?",
        "variantlar": [
            "Ma’lumotlarning taqsimlanish chastotasini novizual ko‘rsatish uchun",
            "Elektron xatlarni jo‘natish uchun",
            "Rasm ranglarini o‘zgartirish uchun",
            "Ma’lumotlarning taqsimlanish chastotasini vizual ko‘rsatish uchun"
        ],
        "togri": "Ma’lumotlarning taqsimlanish chastotasini vizual ko‘rsatish uchun"
    },
    {
        "savol": "Google Drive-da faylni 'Ssilka orqali hamma kirishi mumkin' (Anyone with the link) rejimiga o‘tkazish nima beradi?",
        "variantlar": [
            "Faylni viruslardan tozalaydi",
            "Faylni avtomatik ravishda o‘chirib tashlaydi",
            "Havolaga ega bo‘lgan har qanday internet foydalanuvchisi faylni ko‘rishi yoki yuklab olishi mumkin emas",
            "Havolaga ega bo‘lgan har qanday internet foydalanuvchisi faylni ko‘rishi yoki yuklab olishi mumkin"
        ],
        "togri": "Havolaga ega bo‘lgan har qanday internet foydalanuvchisi faylni ko‘rishi yoki yuklab olishi mumkin"
    },
    {
        "savol": "Fakt-cheking (Fact-checking) nima?",
        "variantlar": [
            "Rasmlarni tahrirlash dasturi",
            "Internet tezligini oshirish usuli",
            "Ma’lumotlarning haqiqiyligini va manbasini tekshirish jarayoni",
            "Ma’lumotlarning haqiqiyligini va manbasini, nomini tekshirish jarayoni"
        ],
        "togri": "Ma’lumotlarning haqiqiyligini va manbasini tekshirish jarayoni"
    },
    {
        "savol": "ChatGPT qanday turdagi model hisoblanadi?",
        "variantlar": [
            "Katta til modeli (Large Language Model - LLM)",
            "Katta til modeli (Large Language Model - LLM), Ma’lumotlar bazasini boshqarish tizimi",
            "Ma’lumotlar bazasini boshqarishning mexanik tizimi",
            "Grafikli tasvirlarni qayta ishlovchi operatsion tizim"
        ],
        "togri": "Katta til modeli (Large Language Model - LLM)"
    },
    {
        "savol": "Excel va Google Sheets dasturlarida formula qaysi belgi bilan boshlanadi?",
        "variantlar": [
            "Undov (!) belgisi bilan",
            "Dollar ($) belgisi bilan",
            "Tenglik belgisi (=) bilan",
            "Yulduzcha (*) belgisi bilan"
        ],
        "togri": "Tenglik belgisi (=) bilan"
    },
    {
        "savol": "Bulutli onlayn ofislarda bir vaqtning o‘zida hamkorlikda tahrirlash (co-authoring) qanday amalga oshiriladi?",
        "variantlar": [
            "Bunday imkoniyat umuman mavjud emas",
            "Bir nechta foydalanuvchi internet orqali bitta hujjatni real vaqt rejimida tahrirlaydi",
            "Faqat faylni navbatma-navbat fleshkaga ko‘chirib o‘tkazish orqali",
            "Bir nechta foydalanuvchi internet orqali bir nechta hujjatni real vaqt rejimida tahrirlaydi"
        ],
        "togri": "Bir nechta foydalanuvchi internet orqali bitta hujjatni real vaqt rejimida tahrirlaydi"
    },
    {
        "savol": "Google Docs dasturida yangi hujjat yaratilganda u qayerda avtomatik saqlanadi?",
        "variantlar": [
            "Tashqi qattiq diskda (HDD",
            "Google Drive bulutli omborida",
            "Flesh xotirada, SSD xotirada",
            "Kompyuterning C diskida"
        ],
        "togri": "Google Drive bulutli omborida"
    },
    {
        "savol": "Neyron tarmoqlar (Neural Networks) nima?",
        "variantlar": [
            "Oddiy elektr simlari to‘plami",
            "Inson miyasi neyronlari faoliyatiga taqlid qiluvchi matematik modellar",
            "Kompyuterdagi fayllar tizimi",
            "Inson miyasi neyronlari faoliyatiga taqlid qilmaydigan matematik modellar"
        ],
        "togri": "Inson miyasi neyronlari faoliyatiga taqlid qiluvchi matematik modellar"
    },
    {
        "savol": "Ransomware (Tovlamachi dasturlar) qanday zarar yetkazadi?",
        "variantlar": [
            "Foydalanuvchi fayllarini shifrlab qo‘yadi va ochish uchun pul talab qiladi",
            "Fayllarni avtomatik ravishda ingliz tiliga tarjima qiladi",
            "Sichqoncha harakatini to‘xtatadi,kompyuter chiroqlarini o‘chirib qo‘yadi",
            "Foydalanuvchi fayllarini shifrlamasdan, arxivlab ochish uchun pul talab qiladi"
        ],
        "togri": "Foydalanuvchi fayllarini shifrlab qo‘yadi va ochish uchun pul talab qiladi"
    },
    {
        "savol": "Raqamli savodxonlik nima?",
        "variantlar": [
            "Raqamli texnologiyalardan xavfsiz va samarali foydalanish ko‘nikmasi",
            "Raqamli texnologiyalardan xavfsiz va samarali foydalanish bilim va malakasi",
            "Mobil telefonlarni sotish va ta'mirlash malakasi",
            "Faqat kompyuter dasturlarini yozish qobiliyati"
        ],
        "togri": "Raqamli texnologiyalardan xavfsiz va samarali foydalanish ko‘nikmasi"
    },
    {
        "savol": "Taqdimot davomida tinglovchilar e'tiborini jalb qilish uchun eng muhim omil nima?",
        "variantlar": [
            "Har bir slaydga 100 ta satrdan matn yozish",
            "Taqdimotda faqat murakkab formulalardan foydalanish",
            "Slaydlardagi minimal, aniq matn va ma’noli vizualizatsiya (tasvir, grafik) uyg‘unligi",
            "Slaydlardagi maksimal, aniq matn va ma’noli vizualizatsiya (tasvir, grafik) uyg‘unligi"
        ],
        "togri": "Slaydlardagi minimal, aniq matn va ma’noli vizualizatsiya (tasvir, grafik) uyg‘unligi"
    },
    {
        "savol": "Soxta yangiliklar (fake news) qanday maqsadlarda tarqatiladi?",
        "variantlar": [
            "Faqat ta’lim sifatini oshirish uchun",
            "Chalg‘itish, vaqtdan yutish, jamoatchilik fikrini manipulyatsiya qilish va daromad olish",
            "Texnik nosozliklarni bartaraf etish maqsadida",
            "Chalg‘itish, jamoatchilik fikrini manipulyatsiya qilish va daromad olish"
        ],
        "togri": "Chalg‘itish, jamoatchilik fikrini manipulyatsiya qilish va daromad olish"
    },
    {
        "savol": "Quyidagilardan qaysi biri raqamli intellektual yordamchiga misol bo‘ladi?",
        "variantlar": [
            "Siri, Google Assistant, Cortana",
            "WinRAR, 7-Zip, Helper, Yordamchi 2.0",
            "Photoshop, CorelDraw",
            "Excel, Word, PowerPoint"
        ],
        "togri": "Siri, Google Assistant, Cortana"
    },
    {
        "savol": "Moodle-da 'topshiriq' (assignment) elementi nima uchun xizmat qiladi?",
        "variantlar": [
            "Tizim parolini o‘zgartirish uchun",
            "Talabalar tomonidan bajarilgan ishlarni elektron fayl yoki qog'ozli matn ko‘rinishida yuklash va baholash uchun",
            "Talabalar tomonidan bajarilgan ishlarni elektron fayl yoki matn ko‘rinishida yuklash va baholash uchun",
            "Talabalarning davomatini belgilash uchun"
        ],
        "togri": "Talabalar tomonidan bajarilgan ishlarni elektron fayl yoki matn ko‘rinishida yuklash va baholash uchun"
    },
    {
        "savol": "Masofaviy ta’limda sinxron aloqa (Synchronous learning) nima?",
        "variantlar": [
            "Faqat elektron pochta orqali bir necha kundan keyin javob yozish",
            "Kitoblarni audio variantda tinglash",
            "O‘qituvchi va talabaning virtual vaqt rejimida (jonli muloqotda) dars o‘tishi",
            "O‘qituvchi va talabaning real vaqt rejimida (jonli muloqotda) dars o‘tishi"
        ],
        "togri": "O‘qituvchi va talabaning real vaqt rejimida (jonli muloqotda) dars o‘tishi"
    },
    {
        "savol": "Professional shaxsiy brendni rivojlantirish va ishbilarmonlik aloqalarini o‘rnatish uchun eng mos keladigan ijtimoiy tarmoq qaysi?",
        "variantlar": [
            "Snapchat",
            "TikTok",
            "Instagram",
            "LinkedIn"
        ],
        "togri": "LinkedIn"
    },
    {
        "savol": "Bulutli texnologiyalar (Cloud Computing) nima?",
        "variantlar": [
            "Ma’lumotlarni mahalliy kompyuterda emas, internetdagi masofaviy serverlarda saqlash va qayta ishlash",
            "Kompyuter ekranini sovutish texnologiyasi",
            "Simsiz quloqchinlar turi",
            "Ma’lumotlarni mahalliy kompyuterda, internetdagi masofaviy serverlarda saqlash va qayta ishlash"
        ],
        "togri": "Ma’lumotlarni mahalliy kompyuterda emas, internetdagi masofaviy serverlarda saqlash va qayta ishlash"
    },
    {
        "savol": "Zoom dasturining asosiy vazifasi nimadan iborat?",
        "variantlar": [
            "Onlayn video-konferensiyalar, vebinarlar va guruhli video-muloqotlar tashkil etish",
            "Offlayn video-konferensiyalar, vebinarlar va guruhli video-muloqotlar tashkil etish",
            "Katta hajmdagi rasmlarni saqlash",
            "Kompyuter qattiq diskini sinovdan o‘tkazish"
        ],
        "togri": "Onlayn video-konferensiyalar, vebinarlar va guruhli video-muloqotlar tashkil etish"
    },
    {
        "savol": "HTTPS bayonnomasi (protocol) URL manzilida nimani anglatadi?",
        "variantlar": [
            "Sayt faqat mobil qurilmalar uchun mo‘ljallanganligini",
            "Sayt bilan aloqa shifrlangan va xavfsiz ekanligini",
            "Sayt pullik ekanligini,aloqa shifrlangan va xavfsiz ekanligini",
            "Sayt tarkibida faqat videolar borligini"
        ],
        "togri": "Sayt bilan aloqa shifrlangan va xavfsiz ekanligini"
    },
    {
        "savol": "Mobil qurilmalarning zamonaviy jamiyatdagi asosiy roli nimadan iborat?",
        "variantlar": [
            "Matnlarni faqat qog‘ozga chop etish",
            "Kompyuter viruslarini tarqatish",
            "Doimiy aloqa, ma’lumotlarga tezkor kirish va mobillikni ta’minlash",
            "Doimiy aloqa, ma’lumotlarga tezkor kirish va mobillikni ta’minlamaslik"
        ],
        "togri": "Doimiy aloqa, ma’lumotlarga tezkor kirish va mobillikni ta’minlash"
    },
    {
        "savol": "IoT – Internet of Things atamasining ma'nosi nima?",
        "variantlar": [
            "Narsalar interneti (qurilmalarning internet orqali o‘zaro bog‘lanishi)",
            "Narsalar interneti (dasturlarning internet orqali o‘zaro bog‘lanishi)",
            "Xalqaro kompyuter tashkiloti",
            "Ichki xotirani formatlash tizimi"
        ],
        "togri": "Narsalar interneti (qurilmalarning internet orqali o‘zaro bog‘lanishi)"
    },
    {
        "savol": "Cloud Storage xizmatlarida ma’lumotlarni sinxronizatsiya qilish (Sync) nima?",
        "variantlar": [
            "Mahalliy qurilmadagi fayllar va bulutdagi nusxalarning bir xilligini ta’minlash",
            "Mahalliy qurilmadagi fayllar va bulutdagi nusxalarning har xilligini ta’minlash",
            "Fayllarni faqat rasm formatiga o‘tkazish",
            "Internet tezligini kamaytirish"
        ],
        "togri": "Mahalliy qurilmadagi fayllar va bulutdagi nusxalarning bir xilligini ta’minlash"
    },
    {
        "savol": "Phishing (Fishing) hujumi nima?",
        "variantlar": [
            "Mavjud saytlar yoki xat yuborish orqali foydalanuvchining login, parol va bank kartasi ma’lumotlarini o‘g‘irlash",
            "Soxta saytlar yoki xatlar orqali foydalanuvchining login, parol va bank kartasi ma’lumotlarini o‘g‘irlash",
            "Rasmiy antivirus dasturining nomi",
            "Kompyuter protsessorini tezlashtirish dasturi"
        ],
        "togri": "Soxta saytlar yoki xatlar orqali foydalanuvchining login, parol va bank kartasi ma’lumotlarini o‘g‘irlash"
    },
    {
        "savol": "Smart Home (Aqlli uy) tizimi nimaga asoslanadi?",
        "variantlar": [
            "Avtomatlashtirilgan qurilmalarga",
            "Robot va avtomatlashtirilgan qurilmalarga",
            "IoT texnologiyalari va avtomatlashtirilgan qurilmalarga",
            "Internetga ulanmagan radiolarga"
        ],
        "togri": "IoT texnologiyalari va avtomatlashtirilgan qurilmalarga"
    },
    {
        "savol": "Xavfsizlik madaniyati (Security culture) deganda nima tushuniladi?",
        "variantlar": [
            "Foydalanuvchining kiberxavflarni anglagan holda axborot texnologiyalaridan xavfsiz foydalanish odatlari",
            "Kompyuter xonasiga kalit bilan kirish",
            "Foydalanuvchining kiberxavflarni anglamagan holda axborot texnologiyalaridan xavfsiz foydalanish odatlari",
            "Internet tarmoqlarini butunlay rad etish"
        ],
        "togri": "Foydalanuvchining kiberxavflarni anglagan holda axborot texnologiyalaridan xavfsiz foydalanish odatlari"
    },
    {
        "savol": "Excel fayllarining standart kengaytmasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "variantlar": [
            ".docx",
            ".xlsx",
            ".xl3",
            ".pptx"
        ],
        "togri": ".xlsx"
    },
    {
        "savol": "Raqamli madaniyat (digital culture) nima?",
        "variantlar": [
            "Internet tezligini o‘lchash usuli",
            "Faqat elektron pochta ochish qoidasi",
            "Raqamli muhitda insonlarning o‘zaro axborot almashinuvi va etika qoidalari",
            "Faqat kompyuter o‘yinlarini o‘ynash madaniyati"
        ],
        "togri": "Raqamli muhitda insonlarning o‘zaro axborot almashinuvi va etika qoidalari"
    },
    {
        "savol": "Raqamli yordamchilarning (Digital assistants) ta’limdagi asosiy vazifasi nima?",
        "variantlar": [
            "Maktab binosini qo‘riqlash",
            "Faqat dars jadvallarini qog‘ozga bosish",
            "O‘quvchilar o‘rniga to‘liq imtihon topshirish",
            "O‘quvchilarga individual yordam berish va o‘qitishni shaxsiylashtirish"
        ],
        "togri": "O‘quvchilarga individual yordam berish va o‘qitishni shaxsiylashtirish"
    },
    {
        "savol": "Ikki bosqichli autentifikatsiya (2fa) nima?",
        "variantlar": [
            "Paroldan tashqari qo‘shimcha tasdiqlash kodi (SMS, Google Authenticator) orqali xavfsizlikni ta’minlash",
            "Faqat ikki xil kompyuterdan kirish",
            "Parolsiz tizimga kirish usuli",
            "Faqat ikkita bir xil parolni ketma-ket kiritish"
        ],
        "togri": "Paroldan tashqari qo‘shimcha tasdiqlash kodi (SMS, Google Authenticator) orqali xavfsizlikni ta’minlash"
    },
    {
        "savol": "Kengaytirilgan ma’lumotlar tahlilida 'Pivot Table' (Svodnaya tablitsa) nima?",
        "variantlar": [
            "Kataklarga rang berish buyrug‘i",
            "Faqat grafik chizish asbobi",
            "Oddiy matn muharriri",
            "Katta hajmdagi ma’lumotlarni tezkor guruhlash va yakuniy tahlil qilish vositasi"
        ],
        "togri": "Katta hajmdagi ma’lumotlarni tezkor guruhlash va yakuniy tahlil qilish vositasi"
    },
    {
        "savol": "Bulutli omborlarning foydalanuvchi uchun eng asosiy qulayligi nimada?",
        "variantlar": [
            "Faqat internetga ulanmasdan ishlash xususiyati",
            "Kompyuter texnikasini mutlaqo talab qilmasligi",
            "Faqat bepul va cheksiz xotira berishi",
            "Istalgan joydan va istalgan qurilmadan ma’lumotlarga kirish imkoniyati"
        ],
        "togri": "Istalgan joydan va istalgan qurilmadan ma’lumotlarga kirish imkoniyati"
    },
    {
        "savol": "Google Sheets-ning excel-dan asosiy afzalligi nimada?",
        "variantlar": [
            "Hech qanday formula ishlatib bo‘lmasligi",
            "Bulutda ishlashi va real vaqtda jamoaviy tahrirlash imkoniyati",
            "Kompyuterdan juda ko‘p xotira talab qilishi",
            "Faqat oflayn rejimda ishlashi"
        ],
        "togri": "Bulutda ishlashi va real vaqtda jamoaviy tahrirlash imkoniyati"
    },
    {
        "savol": "Prompt (prompting) nima?",
        "variantlar": [
            "Faqat parollarni saqlash joyi",
            "Dasturlash tilidagi xatolik nomi",
            "Kompyuterni o‘chirib-yoqish tugmasi",
            "Sun'iy intellektga beriladigan aniq buyruq, matnli so‘rov yoki ko‘rsatma"
        ],
        "togri": "Sun'iy intellektga beriladigan aniq buyruq, matnli so‘rov yoki ko‘rsatma"
    },
    {
        "savol": "Shaxsiy brending (personal branding) nima?",
        "variantlar": [
            "Mutaxassis sifatida o‘z mahorati, obro‘si va noyob jihatlarini bozorda maqsadli shakllantirish va targ‘ib qilish",
            "Faqat kompaniya logotipini chizish",
            "Faqat internet do‘kon ochish",
            "Faqat qimmatbaho brend kiyimlarni sotib olish"
        ],
        "togri": "Mutaxassis sifatida o‘z mahorati, obro‘si va noyob jihatlarini bozorda maqsadli shakllantirish va targ‘ib qilish"
    },
    {
        "savol": "Microsoft Teams platformasi qanday imkoniyatlarni birlashtiradi?",
        "variantlar": [
            "Faqat operatsion tizimni o‘rnatish",
            "Faqat musiqa tinglash va yuklab olish",
            "Kompyuterdagi o‘yinlarni boshqarish",
            "Guruhli chatlar, video uchrashuvlar, fayllar almashinuvi va topshiriqlarni boshqarish"
        ],
        "togri": "Guruhli chatlar, video uchrashuvlar, fayllar almashinuvi va topshiriqlarni boshqarish"
    },
    {
        "savol": "Kibergigiena (cyber hygiene) qoidalariga nima kirmaydi?",
        "variantlar": [
            "Murakkab parollardan foydalanish",
            "Shubhali havolalarga o‘ylamasdan bosish va parollarni hammaga aytish",
            "Dasturlarni muntazam yangilab borish",
            "Zaxira nusxalarini (Backup) yaratish"
        ],
        "togri": "Shubhali havolalarga o‘ylamasdan bosish va parollarni hammaga aytish"
    },
    {
        "savol": "Aqlli qurilmalarga (Smart devices) qaysi javob mos keladi?",
        "variantlar": [
            "Elektr tarmog‘iga ulanmagan oddiy muzlatgichlar",
            "O‘zaro ma’lumot almashuvchi va internetga ulanuvchi datchikli qurilmalar",
            "Faqat mexanik soatlar",
            "Faqat statsionar telefonlar"
        ],
        "togri": "O‘zaro ma’lumot almashuvchi va internetga ulanuvchi datchikli qurilmalar"
    },
    {
        "savol": "ChatGPT-da kutilgan sifatli natijani olish uchun nima muhim?",
        "variantlar": [
            "Promptning aniq, kontekstli va tushunarli yozilishi",
            "Ingliz tilidan mutlaqo foydalanmaslik",
            "Faqat katta harflar bilan yozish",
            "So‘rovni juda qisqa va tushunarsiz qoldirish"
        ],
        "togri": "Promptning aniq, kontekstli va tushunarli yozilishi"
    },
    {
        "savol": "Canva platformasining asosiy vazifasi nima?",
        "variantlar": [
            "Faqat ma’lumotlar bazasini dasturlash",
            "Faqat video fayllarni formatlash",
            "Tayyor shablonlar asosida sifatli grafik dizayn va onlayn taqdimotlar yaratish",
            "Kompyuter tarmoqlarini kiberhujumdan himoya qilish"
        ],
        "togri": "Tayyor shablonlar asosida sifatli grafik dizayn va onlayn taqdimotlar yaratish"
    },
    {
        "savol": "Kompyuter viruslaridan himoyalanishning eng samarali usuli qaysi?",
        "variantlar": [
            "Kompyuterni har kuni format qilish",
            "Litsenziyali antivirus dasturlaridan foydalanish va ularni doimiy yangilash",
            "Faqat brauzerni yopib qo‘yish",
            "Kompyuterga umuman ma’lumot yozmaslik"
        ],
        "togri": "Litsenziyali antivirus dasturlaridan foydalanish va ularni doimiy yangilash"
    },
    {
        "savol": "Ijtimoiy muhandislik (Social engineering) nima?",
        "variantlar": [
            "Kompyuter tarmoqlarini jismoniy montaj qilish",
            "Insonlarni aldash va psixologik manipulyatsiya orqali maxfiy ma’lumotlarni qo‘lga kiritish",
            "Faqat yangi bino loyihasini chizish",
            "Dasturchilarning ijtimoiy tarmoqlardagi guruhlari"
        ],
        "togri": "Insonlarni aldash va psixologik manipulyatsiya orqali maxfiy ma’lumotlarni qo‘lga kiritish"
    },
    {
        "savol": "Onlayn taqdimotlar yaratish uchun eng ommabop zamonaviy bulutli vosita qaysi?",
        "variantlar": [
            "Excel, Access, Notepad",
            "Google Slides, Canva, Prezi",
            "WinRAR, 7-Zip, Total Commander",
            "Photoshop, Premiere Pro, Audacity"
        ],
        "togri": "Google Slides, Canva, Prezi"
    }
];
