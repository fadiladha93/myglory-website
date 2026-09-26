const STOKIS_COUNTRIES = [
  { id: "my", name: { en: "Malaysia", ms: "Malaysia", zh: "马来西亚", ta: "மலேசியா", ar: "ماليزيا" } },
  { id: "dz", name: { en: "Algeria", ms: "Algeria", zh: "阿尔及利亚", ta: "அல்ஜீரியா", ar: "الجزائر" } },
  { id: "ao", name: { en: "Angola", ms: "Angola", zh: "安哥拉", ta: "அங்கோலா", ar: "أنغولا" } },
  { id: "bj", name: { en: "Benin", ms: "Benin", zh: "贝宁", ta: "பெனின்", ar: "بنين" } },
  { id: "bw", name: { en: "Botswana", ms: "Botswana", zh: "博茨瓦纳", ta: "போட்ஸ்வானா", ar: "بوتسوانا" } },
  { id: "bf", name: { en: "Burkina Faso", ms: "Burkina Faso", zh: "布基纳法索", ta: "புர்கினா ஃபாசோ", ar: "بوركينا فاسو" } },
  { id: "bi", name: { en: "Burundi", ms: "Burundi", zh: "布隆迪", ta: "புருண்டி", ar: "بوروندي" } },
  { id: "cm", name: { en: "Cameroon", ms: "Cameroon", zh: "喀麦隆", ta: "கமரூன்", ar: "الكاميرون" } },
  { id: "cv", name: { en: "Cape Verde", ms: "Tanjung Verde", zh: "佛得角", ta: "கேப் வெர்டே", ar: "الرأس الأخضر" } },
  { id: "td", name: { en: "Chad", ms: "Chad", zh: "乍得", ta: "சாட்", ar: "تشاد" } },
  { id: "km", name: { en: "Comoros", ms: "Comoros", zh: "科摩罗", ta: "கொமொரோஸ்", ar: "جزر القمر" } },
  { id: "dj", name: { en: "Djibouti", ms: "Djibouti", zh: "吉布提", ta: "ஜிபூட்டி", ar: "جيبوتي" } },
  { id: "cd", name: { en: "DR Congo", ms: "Republik Demokratik Congo", zh: "刚果民主共和国", ta: "ஜனநாயக காங்கோ குடியரசு", ar: "جمهورية الكونغو الديمقراطية" } },
  { id: "er", name: { en: "Eritrea", ms: "Eritrea", zh: "厄立特里亚", ta: "எரித்திரியா", ar: "إريتريا" } },
  { id: "sz", name: { en: "Eswatini", ms: "Eswatini", zh: "斯威士兰", ta: "எசுவாத்தினி", ar: "إسواتيني" } },
  { id: "ga", name: { en: "Gabon", ms: "Gabon", zh: "加蓬", ta: "கேபான்", ar: "الغابون" } },
  { id: "gm", name: { en: "Gambia", ms: "Gambia", zh: "冈比亚", ta: "கம்பியா", ar: "غامبيا" } },
  { id: "gh", name: { en: "Ghana", ms: "Ghana", zh: "加纳", ta: "கானா", ar: "غانا" } },
  { id: "gn", name: { en: "Guinea", ms: "Guinea", zh: "几内亚", ta: "கினி", ar: "غينيا" } },
  { id: "gq", name: { en: "Equatorial Guinea", ms: "Guinea Khatulistiwa", zh: "赤道几内亚", ta: "எக்குவடோரியல் கினி", ar: "غينيا الاستوائية" } },
  { id: "gw", name: { en: "Guinea-Bissau", ms: "Guinea-Bissau", zh: "几内亚比绍", ta: "கினி-பிஸாவு", ar: "غينيا بيساو" } },
  { id: "et", name: { en: "Ethiopia", ms: "Habsyah", zh: "埃塞俄比亚", ta: "எத்தியோப்பியா", ar: "إثيوبيا" } },
  { id: "ci", name: { en: "Ivory Coast", ms: "Pantai Gading", zh: "科特迪瓦", ta: "ஐவரி கோஸ்ட்", ar: "ساحل العاج" } },
  { id: "ke", name: { en: "Kenya", ms: "Kenya", zh: "肯尼亚", ta: "கென்யா", ar: "كينيا" } },
  { id: "ls", name: { en: "Lesotho", ms: "Lesotho", zh: "莱索托", ta: "லெசோத்தோ", ar: "ليسوتو" } },
  { id: "lr", name: { en: "Liberia", ms: "Liberia", zh: "利比里亚", ta: "லைபீரியா", ar: "ليبيريا" } },
  { id: "ly", name: { en: "Libya", ms: "Libya", zh: "利比亚", ta: "லிபியா", ar: "ليبيا" } },
  { id: "mg", name: { en: "Madagascar", ms: "Madagascar", zh: "马达加斯加", ta: "மடகாஸ்கர்", ar: "مدغشقر" } },
  { id: "ma", name: { en: "Morocco", ms: "Maghribi", zh: "摩洛哥", ta: "மொராக்கோ", ar: "المغرب" } },
  { id: "mw", name: { en: "Malawi", ms: "Malawi", zh: "马拉维", ta: "மலாவி", ar: "مالاوي" } },
  { id: "ml", name: { en: "Mali", ms: "Mali", zh: "马里", ta: "மாலி", ar: "مالي" } },
  { id: "mr", name: { en: "Mauritania", ms: "Mauritania", zh: "毛里塔尼亚", ta: "மூரித்தானியா", ar: "موريتانيا" } },
  { id: "mu", name: { en: "Mauritius", ms: "Mauritius", zh: "毛里求斯", ta: "மொரீஷியஸ்", ar: "موريشيوس" } },
  { id: "eg", name: { en: "Egypt", ms: "Mesir", zh: "埃及", ta: "எகிப்து", ar: "مصر" } },
  { id: "mz", name: { en: "Mozambique", ms: "Mozambique", zh: "莫桑比克", ta: "மொசாம்பிக்", ar: "موزمبيق" } },
  { id: "na", name: { en: "Namibia", ms: "Namibia", zh: "纳米比亚", ta: "நமீபியா", ar: "ناميبيا" } },
  { id: "ne", name: { en: "Niger", ms: "Niger", zh: "尼日尔", ta: "நைஜர்", ar: "النيجر" } },
  { id: "ng", name: { en: "Nigeria", ms: "Nigeria", zh: "尼日利亚", ta: "நைஜீரியா", ar: "نيجيريا" } },
  { id: "cf", name: { en: "Central African Republic", ms: "Republik Afrika Tengah", zh: "中非共和国", ta: "மத்திய ஆப்பிரிக்கக் குடியரசு", ar: "جمهورية أفريقيا الوسطى" } },
  { id: "rw", name: { en: "Rwanda", ms: "Rwanda", zh: "卢旺达", ta: "ருவாண்டா", ar: "رواندا" } },
  { id: "eh", name: { en: "Western Sahara", ms: "Sahara Barat", zh: "西撒哈拉", ta: "மேற்கு சஹாரா", ar: "الصحراء الغربية" } },
  { id: "st", name: { en: "São Tomé and Príncipe", ms: "Sao Tome dan Principe", zh: "圣多美和普林西比", ta: "சாவோ தொமே மற்றும் பிரின்சிபே", ar: "ساو تومي وبرينسيبي" } },
  { id: "sn", name: { en: "Senegal", ms: "Senegal", zh: "塞内加尔", ta: "செனகல்", ar: "السنغال" } },
  { id: "sc", name: { en: "Seychelles", ms: "Seychelles", zh: "塞舌尔", ta: "சீஷெல்ஸ்", ar: "سيشل" } },
  { id: "sl", name: { en: "Sierra Leone", ms: "Sierra Leone", zh: "塞拉利昂", ta: "சியெரா லியோனி", ar: "سيراليون" } },
  { id: "so", name: { en: "Somalia", ms: "Somalia", zh: "索马里", ta: "சோமாலியா", ar: "الصومال" } },
  { id: "za", name: { en: "South Africa", ms: "Afrika Selatan", zh: "南非", ta: "தென்னாப்பிரிக்கா", ar: "جنوب أفريقيا" } },
  { id: "ss", name: { en: "South Sudan", ms: "Sudan Selatan", zh: "南苏丹", ta: "தெற்கு சூடான்", ar: "جنوب السودان" } },
  { id: "sd", name: { en: "Sudan", ms: "Sudan", zh: "苏丹", ta: "சூடான்", ar: "السودان" } },
  { id: "tz", name: { en: "Tanzania", ms: "Tanzania", zh: "坦桑尼亚", ta: "தான்சானியா", ar: "تنزانيا" } },
  { id: "tg", name: { en: "Togo", ms: "Togo", zh: "多哥", ta: "டோகோ", ar: "توغو" } },
  { id: "tn", name: { en: "Tunisia", ms: "Tunisia", zh: "突尼斯", ta: "துனீசியா", ar: "تونس" } },
  { id: "ug", name: { en: "Uganda", ms: "Uganda", zh: "乌干达", ta: "உகாண்டா", ar: "أوغندا" } },
  { id: "zm", name: { en: "Zambia", ms: "Zambia", zh: "赞比亚", ta: "சாம்பியா", ar: "زامبيا" } },
  { id: "zw", name: { en: "Zimbabwe", ms: "Zimbabwe", zh: "津巴布韦", ta: "சிம்பாப்வே", ar: "زيمبابوي" } },
  { id: "id", name: { en: "Indonesia", ms: "Indonesia", zh: "印度尼西亚", ta: "இந்தோனேசியா", ar: "إندونيسيا" } },
  { id: "ph", name: { en: "Philippines", ms: "Filipina", zh: "菲律宾", ta: "பிலிப்பைன்ஸ்", ar: "الفلبين" } },
  { id: "sg", name: { en: "Singapore", ms: "Singapura", zh: "新加坡", ta: "சிங்கப்பூர்", ar: "سنغافورة" } },
  { id: "th", name: { en: "Thailand", ms: "Thailand", zh: "泰国", ta: "தாய்லாந்து", ar: "تايلاند" } },
  { id: "vn", name: { en: "Vietnam", ms: "Vietnam", zh: "越南", ta: "வியட்நாம்", ar: "فييتنام" } }
];

const STOKIS_STOCKISTS = {
  my: {
    master: [
      {
        title: "Sarawak",
        cards: [
          {
            image: "assets/images/ALAMI68.png",
            username: "ALAMI68",
            name: "Abdul Lamit Bin Ismail",
            phone: "0108476032",
            address: "Lot 2081 Kampung Limpaong, 98700 Limbang, Sarawak"
          }
        ]
      }
    ],
    mobile: [
      {
        title: "Ipoh",
        cards: [
          {
            image: "assets/images/NORLISURI.png",
            username: "NORLISURI",
            name: "Norlia Binti Zainuddin",
            phone: "0185753255",
            address: "No 25 Laluan Klebang Restu 1, Medan Klebang Restu, 31200 Chemor, Perak"
          }
        ]
      },
      {
        title: "Kuala Lumpur",
        cards: [
          {
            image: "assets/images/LADYBOS.png",
            username: "LADYBOS",
            name: "Chu Maya Binti Mat Rashid",
            phone: "0192125733",
            address: "No 12-02 Melati Impian Apartment, Jln Madrasah, 53000 Kuala Lumpur, WP Kuala Lumpur, Malaysia"
          }
        ]
      },
      {
        title: "MANJUNG",
        cards: [
          {
            image: "assets/images/manjung.jpg",
            username: "BONDAAZIKAYA",
            name: "POZIAH BINTI ABU HASSIN",
            phone: "01155068802",
            address: "No 20 Taman Seri Mawar, Kampong cina, 32000 Sitiawan, Perak, Malaysia"
          }
        ]
      },
      {
        title: "TEMERLOH",
        cards: [
          {
            image: "assets/images/temerloh.jpg",
            username: "ZKMAKMUR60",
            name: "ZAITON BT KAMARUDDIN",
            phone: "0179359607",
            address: "No 333 blok 4, 28500 Lanchang, Pahang, Malaysia"
          }
        ]
      },
      {
        title: "KOTA BHARU",
        cards: [
          {
            image: "assets/images/kota bharu.png",
            username: "IZANJUTAWAN",
            name: "NORIZAN BINTI MUHAMMAD",
            phone: "0106630994",
            address: "497 KAMPUNG BENDANG PULAU, PALEKBANG, 16040 Wakaf Bharu, Kelantan, Malaysia"
          }
        ]
      }
    ]
  }
};
