const surahs = [
  { number: 1, name: { ar: "الفاتحة", en: "Al-Fatihah", fa: "فاتحه" }, ayahs: 7, revelation: "meccan" },
  { number: 2, name: { ar: "البقرة", en: "Al-Baqarah", fa: "بقره" }, ayahs: 286, revelation: "medinan" },
  { number: 3, name: { ar: "آل عمران", en: "Aal Imran", fa: "آل عمران" }, ayahs: 200, revelation: "medinan" },
  { number: 4, name: { ar: "النساء", en: "An-Nisa", fa: "نساء" }, ayahs: 176, revelation: "medinan" },
  { number: 5, name: { ar: "المائدة", en: "Al-Ma'idah", fa: "مائده" }, ayahs: 120, revelation: "medinan" },
  { number: 6, name: { ar: "الأنعام", en: "Al-An'am", fa: "انعام" }, ayahs: 165, revelation: "meccan" },
  { number: 7, name: { ar: "الأعراف", en: "Al-A'raf", fa: "اعراف" }, ayahs: 206, revelation: "meccan" },
  { number: 8, name: { ar: "الأنفال", en: "Al-Anfal", fa: "انفال" }, ayahs: 75, revelation: "medinan" },
  { number: 9, name: { ar: "التوبة", en: "At-Tawbah", fa: "توبه" }, ayahs: 129, revelation: "medinan" },
  { number: 10, name: { ar: "يونس", en: "Yunus", fa: "یونس" }, ayahs: 109, revelation: "meccan" },
  { number: 11, name: { ar: "هود", en: "Hud", fa: "هود" }, ayahs: 123, revelation: "meccan" },
  { number: 12, name: { ar: "يوسف", en: "Yusuf", fa: "یوسف" }, ayahs: 111, revelation: "meccan" },
  { number: 13, name: { ar: "الرعد", en: "Ar-Ra'd", fa: "رعد" }, ayahs: 43, revelation: "medinan" },
  { number: 14, name: { ar: "إبراهيم", en: "Ibrahim", fa: "ابراهیم" }, ayahs: 52, revelation: "meccan" },
  { number: 15, name: { ar: "الحجر", en: "Al-Hijr", fa: "حجر" }, ayahs: 99, revelation: "meccan" },
  { number: 16, name: { ar: "النحل", en: "An-Nahl", fa: "نحل" }, ayahs: 128, revelation: "meccan" },
  { number: 17, name: { ar: "الإسراء", en: "Al-Isra", fa: "اسراء" }, ayahs: 111, revelation: "meccan" },
  { number: 18, name: { ar: "الكهف", en: "Al-Kahf", fa: "کهف" }, ayahs: 110, revelation: "meccan" },
  { number: 19, name: { ar: "مريم", en: "Maryam", fa: "مریم" }, ayahs: 98, revelation: "meccan" },
  { number: 20, name: { ar: "طه", en: "Taha", fa: "طه" }, ayahs: 135, revelation: "meccan" },
  { number: 21, name: { ar: "الأنبياء", en: "Al-Anbiya", fa: "انبیاء" }, ayahs: 112, revelation: "meccan" },
  { number: 22, name: { ar: "الحج", en: "Al-Hajj", fa: "حج" }, ayahs: 78, revelation: "medinan" },
  { number: 23, name: { ar: "المؤمنون", en: "Al-Mu'minun", fa: "مؤمنون" }, ayahs: 118, revelation: "meccan" },
  { number: 24, name: { ar: "النور", en: "An-Nur", fa: "نور" }, ayahs: 64, revelation: "medinan" },
  { number: 25, name: { ar: "الفرقان", en: "Al-Furqan", fa: "فرقان" }, ayahs: 77, revelation: "meccan" },
  { number: 26, name: { ar: "الشعراء", en: "Ash-Shu'ara", fa: "شعراء" }, ayahs: 227, revelation: "meccan" },
  { number: 27, name: { ar: "النمل", en: "An-Naml", fa: "نمل" }, ayahs: 93, revelation: "meccan" },
  { number: 28, name: { ar: "القصص", en: "Al-Qasas", fa: "قصص" }, ayahs: 88, revelation: "meccan" },
  { number: 29, name: { ar: "العنكبوت", en: "Al-Ankabut", fa: "عنکبوت" }, ayahs: 69, revelation: "meccan" },
  { number: 30, name: { ar: "الروم", en: "Ar-Rum", fa: "روم" }, ayahs: 60, revelation: "meccan" },
  { number: 31, name: { ar: "لقمان", en: "Luqman", fa: "لقمان" }, ayahs: 34, revelation: "meccan" },
  { number: 32, name: { ar: "السجدة", en: "As-Sajdah", fa: "سجده" }, ayahs: 30, revelation: "meccan" },
  { number: 33, name: { ar: "الأحزاب", en: "Al-Ahzab", fa: "احزاب" }, ayahs: 73, revelation: "medinan" },
  { number: 34, name: { ar: "سبأ", en: "Saba", fa: "سبا" }, ayahs: 54, revelation: "meccan" },
  { number: 35, name: { ar: "فاطر", en: "Fatir", fa: "فاطر" }, ayahs: 45, revelation: "meccan" },
  { number: 36, name: { ar: "يس", en: "Ya-Sin", fa: "یس" }, ayahs: 83, revelation: "meccan" },
  { number: 37, name: { ar: "الصافات", en: "As-Saffat", fa: "صافات" }, ayahs: 182, revelation: "meccan" },
  { number: 38, name: { ar: "ص", en: "Sad", fa: "ص" }, ayahs: 88, revelation: "meccan" },
  { number: 39, name: { ar: "الزمر", en: "Az-Zumar", fa: "زمر" }, ayahs: 75, revelation: "meccan" },
  { number: 40, name: { ar: "غافر", en: "Ghafir", fa: "غافر" }, ayahs: 85, revelation: "meccan" },
  { number: 41, name: { ar: "فصلت", en: "Fussilat", fa: "فصلت" }, ayahs: 54, revelation: "meccan" },
  { number: 42, name: { ar: "الشورى", en: "Ash-Shura", fa: "شورا" }, ayahs: 53, revelation: "meccan" },
  { number: 43, name: { ar: "الزخرف", en: "Az-Zukhruf", fa: "زخرف" }, ayahs: 89, revelation: "meccan" },
  { number: 44, name: { ar: "الدخان", en: "Ad-Dukhan", fa: "دخان" }, ayahs: 59, revelation: "meccan" },
  { number: 45, name: { ar: "الجاثية", en: "Al-Jathiyah", fa: "جاثیه" }, ayahs: 37, revelation: "meccan" },
  { number: 46, name: { ar: "الأحقاف", en: "Al-Ahqaf", fa: "احقاف" }, ayahs: 35, revelation: "meccan" },
  { number: 47, name: { ar: "محمد", en: "Muhammad", fa: "محمد" }, ayahs: 38, revelation: "medinan" },
  { number: 48, name: { ar: "الفتح", en: "Al-Fath", fa: "فتح" }, ayahs: 29, revelation: "medinan" },
  { number: 49, name: { ar: "الحجرات", en: "Al-Hujurat", fa: "حجرات" }, ayahs: 18, revelation: "medinan" },
  { number: 50, name: { ar: "ق", en: "Qaf", fa: "ق" }, ayahs: 45, revelation: "meccan" },
  { number: 51, name: { ar: "الذاريات", en: "Adh-Dhariyat", fa: "ذاریات" }, ayahs: 60, revelation: "meccan" },
  { number: 52, name: { ar: "الطور", en: "At-Tur", fa: "طور" }, ayahs: 49, revelation: "meccan" },
  { number: 53, name: { ar: "النجم", en: "An-Najm", fa: "نجم" }, ayahs: 62, revelation: "meccan" },
  { number: 54, name: { ar: "القمر", en: "Al-Qamar", fa: "قمر" }, ayahs: 55, revelation: "meccan" },
  { number: 55, name: { ar: "الرحمن", en: "Ar-Rahman", fa: "رحمان" }, ayahs: 78, revelation: "medinan" },
  { number: 56, name: { ar: "الواقعة", en: "Al-Waqi'ah", fa: "واقعه" }, ayahs: 96, revelation: "meccan" },
  { number: 57, name: { ar: "الحديد", en: "Al-Hadid", fa: "حدید" }, ayahs: 29, revelation: "medinan" },
  { number: 58, name: { ar: "المجادلة", en: "Al-Mujadila", fa: "مجادله" }, ayahs: 22, revelation: "medinan" },
  { number: 59, name: { ar: "الحشر", en: "Al-Hashr", fa: "حشر" }, ayahs: 24, revelation: "medinan" },
  { number: 60, name: { ar: "الممتحنة", en: "Al-Mumtahanah", fa: "ممتحنه" }, ayahs: 13, revelation: "medinan" },
  { number: 61, name: { ar: "الصف", en: "As-Saff", fa: "صف" }, ayahs: 14, revelation: "medinan" },
  { number: 62, name: { ar: "الجمعة", en: "Al-Jumu'ah", fa: "جمعه" }, ayahs: 11, revelation: "medinan" },
  { number: 63, name: { ar: "المنافقون", en: "Al-Munafiqun", fa: "منافقون" }, ayahs: 11, revelation: "medinan" },
  { number: 64, name: { ar: "التغابن", en: "At-Taghabun", fa: "تغابن" }, ayahs: 18, revelation: "medinan" },
  { number: 65, name: { ar: "الطلاق", en: "At-Talaq", fa: "طلاق" }, ayahs: 12, revelation: "medinan" },
  { number: 66, name: { ar: "التحريم", en: "At-Tahrim", fa: "تحریم" }, ayahs: 12, revelation: "medinan" },
  { number: 67, name: { ar: "الملك", en: "Al-Mulk", fa: "ملک" }, ayahs: 30, revelation: "meccan" },
  { number: 68, name: { ar: "القلم", en: "Al-Qalam", fa: "قلم" }, ayahs: 52, revelation: "meccan" },
  { number: 69, name: { ar: "الحاقة", en: "Al-Haqqah", fa: "حاقه" }, ayahs: 52, revelation: "meccan" },
  { number: 70, name: { ar: "المعارج", en: "Al-Ma'arij", fa: "معارج" }, ayahs: 44, revelation: "meccan" },
  { number: 71, name: { ar: "نوح", en: "Nuh", fa: "نوح" }, ayahs: 28, revelation: "meccan" },
  { number: 72, name: { ar: "الجن", en: "Al-Jinn", fa: "جن" }, ayahs: 28, revelation: "meccan" },
  { number: 73, name: { ar: "المزمل", en: "Al-Muzzammil", fa: "مزمل" }, ayahs: 20, revelation: "meccan" },
  { number: 74, name: { ar: "المدثر", en: "Al-Muddathir", fa: "مدثر" }, ayahs: 56, revelation: "meccan" },
  { number: 75, name: { ar: "القيامة", en: "Al-Qiyamah", fa: "قیامت" }, ayahs: 40, revelation: "meccan" },
  { number: 76, name: { ar: "الانسان", en: "Al-Insan", fa: "انسان" }, ayahs: 31, revelation: "medinan" },
  { number: 77, name: { ar: "المرسلات", en: "Al-Mursalat", fa: "مرسلات" }, ayahs: 50, revelation: "meccan" },
  { number: 78, name: { ar: "النبأ", en: "An-Naba", fa: "نبأ" }, ayahs: 40, revelation: "meccan" },
  { number: 79, name: { ar: "النازعات", en: "An-Nazi'at", fa: "نازعات" }, ayahs: 46, revelation: "meccan" },
  { number: 80, name: { ar: "عبس", en: "Abasa", fa: "عبس" }, ayahs: 42, revelation: "meccan" },
  { number: 81, name: { ar: "التكوير", en: "At-Takwir", fa: "تکویر" }, ayahs: 29, revelation: "meccan" },
  { number: 82, name: { ar: "الانفطار", en: "Al-Infitar", fa: "انفطار" }, ayahs: 19, revelation: "meccan" },
  { number: 83, name: { ar: "المطففين", en: "Al-Mutaffifin", fa: "مطففین" }, ayahs: 36, revelation: "meccan" },
  { number: 84, name: { ar: "الانشقاق", en: "Al-Inshiqaq", fa: "انشقاق" }, ayahs: 25, revelation: "meccan" },
  { number: 85, name: { ar: "البروج", en: "Al-Buruj", fa: "بروج" }, ayahs: 22, revelation: "meccan" },
  { number: 86, name: { ar: "الطارق", en: "At-Tariq", fa: "طارق" }, ayahs: 17, revelation: "meccan" },
  { number: 87, name: { ar: "الأعلى", en: "Al-A'la", fa: "اعلی" }, ayahs: 19, revelation: "meccan" },
  { number: 88, name: { ar: "الغاشية", en: "Al-Ghashiyah", fa: "غاشیه" }, ayahs: 26, revelation: "meccan" },
  { number: 89, name: { ar: "الفجر", en: "Al-Fajr", fa: "فجر" }, ayahs: 30, revelation: "meccan" },
  { number: 90, name: { ar: "البلد", en: "Al-Balad", fa: "بلد" }, ayahs: 20, revelation: "meccan" },
  { number: 91, name: { ar: "الشمس", en: "Ash-Shams", fa: "شمس" }, ayahs: 15, revelation: "meccan" },
  { number: 92, name: { ar: "الليل", en: "Al-Layl", fa: "لیل" }, ayahs: 21, revelation: "meccan" },
  { number: 93, name: { ar: "الضحى", en: "Ad-Duha", fa: "ضحی" }, ayahs: 11, revelation: "meccan" },
  { number: 94, name: { ar: "الشرح", en: "Ash-Sharh", fa: "شرح" }, ayahs: 8, revelation: "meccan" },
  { number: 95, name: { ar: "التين", en: "At-Tin", fa: "تین" }, ayahs: 8, revelation: "meccan" },
  { number: 96, name: { ar: "العلق", en: "Al-Alaq", fa: "علق" }, ayahs: 19, revelation: "meccan" },
  { number: 97, name: { ar: "القدر", en: "Al-Qadr", fa: "قدر" }, ayahs: 5, revelation: "meccan" },
  { number: 98, name: { ar: "البينة", en: "Al-Bayyinah", fa: "بینّه" }, ayahs: 8, revelation: "medinan" },
  { number: 99, name: { ar: "الزلزلة", en: "Az-Zalzalah", fa: "زلزله" }, ayahs: 8, revelation: "medinan" },
  { number: 100, name: { ar: "العاديات", en: "Al-Adiyat", fa: "عادیات" }, ayahs: 11, revelation: "meccan" },
  { number: 101, name: { ar: "القارعة", en: "Al-Qari'ah", fa: "قارعه" }, ayahs: 11, revelation: "meccan" },
  { number: 102, name: { ar: "التكاثر", en: "At-Takathur", fa: "تکاثر" }, ayahs: 8, revelation: "meccan" },
  { number: 103, name: { ar: "العصر", en: "Al-Asr", fa: "عصر" }, ayahs: 3, revelation: "meccan" },
  { number: 104, name: { ar: "الهمزة", en: "Al-Humazah", fa: "همزه" }, ayahs: 9, revelation: "meccan" },
  { number: 105, name: { ar: "الفيل", en: "Al-Fil", fa: "فیل" }, ayahs: 5, revelation: "meccan" },
  { number: 106, name: { ar: "قريش", en: "Quraysh", fa: "قریش" }, ayahs: 4, revelation: "meccan" },
  { number: 107, name: { ar: "الماعون", en: "Al-Ma'un", fa: "ماعون" }, ayahs: 7, revelation: "meccan" },
  { number: 108, name: { ar: "الكوثر", en: "Al-Kawthar", fa: "کوثر" }, ayahs: 3, revelation: "meccan" },
  { number: 109, name: { ar: "الكافرون", en: "Al-Kafirun", fa: "کافرون" }, ayahs: 6, revelation: "meccan" },
  { number: 110, name: { ar: "النصر", en: "An-Nasr", fa: "نصر" }, ayahs: 3, revelation: "medinan" },
  { number: 111, name: { ar: "المسد", en: "Al-Masad", fa: "مسد" }, ayahs: 5, revelation: "meccan" },
  { number: 112, name: { ar: "الإخلاص", en: "Al-Ikhlas", fa: "اخلاص" }, ayahs: 4, revelation: "meccan" },
  { number: 113, name: { ar: "الفلق", en: "Al-Falaq", fa: "فلق" }, ayahs: 5, revelation: "meccan" },
  { number: 114, name: { ar: "الناس", en: "An-Nas", fa: "ناس" }, ayahs: 6, revelation: "meccan" }
];

const translations = {
  ar: {
    surahLabel: "اختر السورة",
    ayahLabel: "رقم الآية",
    getAyahText: "احصل على الآية",
    loadingText: "... جاري التحميل",
    surahTypeLabel: "نوع السورة",
    ayahsLabel: "عدد الآيات",
    revelationLabel: "مكان النزول",
    meccan: "مكية",
    medinan: "مدنية",
    audioNotSupported: "المتصفح لا يدعم تشغيل الصوت",
    errorMessage: "حدث خطأ أثناء جلب البيانات. يرجى المحاولة مرة أخرى.",
    missingAyah: "هذه الآية غير متوفرة في سورة"
  },
  en: {
    surahLabel: "Select Surah",
    ayahLabel: "Ayah Number",
    getAyahText: "Get Ayah",
    loadingText: "Loading...",
    surahTypeLabel: "Surah Type",
    ayahsLabel: "Number of Ayahs",
    revelationLabel: "Revelation Place",
    meccan: "Meccan",
    medinan: "Medinan",
    audioNotSupported: "Your browser does not support audio playback",
    errorMessage: "An error occurred while fetching data. Please try again.",
    missingAyah: "This ayah is not available in Surah"
  },
  fa: {
    surahLabel: "سوره را انتخاب کنید",
    ayahLabel: "شماره آیه",
    getAyahText: "دریافت آیه",
    loadingText: "... در حال بارگذاری",
    surahTypeLabel: "نوع سوره",
    ayahsLabel: "تعداد آیات",
    revelationLabel: "محل نزول",
    meccan: "مکی",
    medinan: "مدنی",
    audioNotSupported: "مرورگر شما پخش صدا را پشتیبانی نمی کند",
    errorMessage: "خطایی در دریافت داده ها رخ داد. لطفا دوباره تلاش کنید.",
    missingAyah: "این آیه موجود نیست در سوره"
  }
};

let currentLang = localStorage.getItem("lang") || "ar";
let audio = document.getElementById("audioElement");
let quranData = null;
let likeCount = localStorage.getItem("likeCount") || 0;
let isLiked = localStorage.getItem("isLiked") === "true";

document.addEventListener("DOMContentLoaded", async function() {
  setupLanguage();
  await loadQuranData();
  populateSurahSelect();
  setupEventListeners();
  updateLikeButton();
});

async function loadQuranData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/DK3MK/quran-api/master/data/quran.json');
    quranData = await response.json();
  } catch (error) {
    console.error("Error loading Quran data:", error);
    showAlert(translations[currentLang].errorMessage);
  }
}

function setupLanguage() {
  updateTexts(currentLang);
  
  document.getElementById("langBtn").addEventListener("click", function(e) {
    document.getElementById("clickSound1").play();
    const langMenu = document.getElementById("langMenu");
    langMenu.style.display = "flex";
    e.stopPropagation();
  });

  document.querySelectorAll("#langMenu button").forEach(btn => {
    btn.addEventListener("click", function() {
      document.getElementById("clickSound2").play();
      currentLang = this.dataset.lang;
      localStorage.setItem("lang", currentLang);
      updateTexts(currentLang);
      document.getElementById("langMenu").style.display = "none";
    });
  });

  document.addEventListener("click", function() {
    document.getElementById("langMenu").style.display = "none";
  });
}

function updateTexts(lang) {
  const t = translations[lang];
  
  document.getElementById("surah-label").textContent = t.surahLabel;
  document.getElementById("ayah-label").textContent = t.ayahLabel;
  document.getElementById("get-ayah-text").textContent = t.getAyahText;
  document.getElementById("surah-type-label").textContent = t.surahTypeLabel;
  document.getElementById("surah-ayahs-label").textContent = t.ayahsLabel;
  document.getElementById("surah-revelation-label").textContent = t.revelationLabel;
  
  const surahSelect = document.getElementById("surah-select");
  for (let i = 0; i < surahSelect.options.length; i++) {
    surahSelect.options[i].text = surahs[i].name[lang];
  }
  
  if (document.getElementById("ayah-container").style.display !== "none") {
    displayAyahInfo();
  }
}

function populateSurahSelect() {
  const select = document.getElementById("surah-select");
  select.innerHTML = '';
  
  surahs.forEach(surah => {
    const option = document.createElement("option");
    option.value = surah.number;
    option.textContent = surah.name[currentLang];
    select.appendChild(option);
  });
}

function setupEventListeners() {
  document.getElementById("surah-select").addEventListener("change", function() {
    const surahNumber = parseInt(this.value);
    const surah = surahs.find(s => s.number === surahNumber);
    document.getElementById("ayah-input").max = surah.ayahs;
  });

  document.getElementById("get-ayah").addEventListener("click", function() {
    document.getElementById("clickSound2").play();
    getAyah();
  });

  document.getElementById("likeBtn").addEventListener("click", function() {
    toggleLike();
  });

  document.getElementById("playBtn").addEventListener("click", function() {
    audio.play();
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "block";
  });

  document.getElementById("pauseBtn").addEventListener("click", function() {
    audio.pause();
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "block";
  });

  document.getElementById("audioProgress").addEventListener("click", function(e) {
    const rect = this.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  });

  audio.addEventListener("timeupdate", updateAudioProgress);
  audio.addEventListener("ended", function() {
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "block";
  });
  audio.addEventListener("loadedmetadata", updateAudioProgress);
}

function updateAudioProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  document.getElementById("audioProgressBar").style.width = progress + "%";
  
  document.getElementById("currentTime").textContent = formatTime(audio.currentTime);
  if (!isNaN(audio.duration)) {
    document.getElementById("duration").textContent = formatTime(audio.duration);
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleLike() {
  isLiked = !isLiked;
  if (isLiked) {
    likeCount++;
    createHearts();
  } else {
    likeCount--;
  }
  
  localStorage.setItem("isLiked", isLiked);
  localStorage.setItem("likeCount", likeCount);
  updateLikeButton();
}

function updateLikeButton() {
  const likeBtn = document.getElementById("likeBtn");
  const likeIcon = likeBtn.querySelector("i");
  const likeCountEl = document.querySelector(".like-count");
  
  likeCountEl.textContent = likeCount;
  
  if (isLiked) {
    likeBtn.classList.add("liked");
    likeIcon.classList.remove("far");
    likeIcon.classList.add("fas");
  } else {
    likeBtn.classList.remove("liked");
    likeIcon.classList.remove("fas");
    likeIcon.classList.add("far");
  }
}

function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "<i class='fas fa-heart'></i>";
    
    const likeBtn = document.getElementById("likeBtn");
    const rect = likeBtn.getBoundingClientRect();
    const x = rect.left + (rect.width / 2) + (Math.random() * 40 - 20);
    const y = rect.top + (rect.height / 2) + (Math.random() * 40 - 20);
    
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.animationDuration = Math.random() * 2 + 1 + "s";
    heart.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

function showAlert(message) {
  const alertBox = document.getElementById("alertBox");
  alertBox.textContent = message;
  alertBox.style.display = "block";
  
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000);
}

async function getAyah() {
  if (!quranData) {
    showAlert(translations[currentLang].errorMessage);
    return;
  }

  const surahNumber = parseInt(document.getElementById("surah-select").value);
  const ayahNumber = parseInt(document.getElementById("ayah-input").value);
  const surah = surahs.find(s => s.number === surahNumber);
  
  if (ayahNumber < 1 || ayahNumber > surah.ayahs) {
    showAlert(`${translations[currentLang].missingAyah} ${surah.name[currentLang]}`);
    return;
  }
  
  const btn = document.getElementById("get-ayah");
  const spinner = document.getElementById("loading-spinner");
  const btnText = document.getElementById("get-ayah-text");
  
  btnText.textContent = translations[currentLang].loadingText;
  spinner.style.display = "block";
  btn.disabled = true;
  
  try {
    const surahData = quranData.find(s => s.number === surahNumber);
    if (!surahData || !surahData.ayahs[ayahNumber - 1]) {
      throw new Error("Ayah not found");
    }

    const ayahData = surahData.ayahs[ayahNumber - 1];
    displayAyah(ayahData.text.ar, ayahData.translation.en, surah, ayahNumber);
    
    if (ayahData.audio && ayahData.audio.url) {
      audio.src = ayahData.audio.url;
      document.getElementById("downloadLink").href = ayahData.audio.url;
      document.getElementById("downloadLink").download = `surah-${surahNumber}-ayah-${ayahNumber}.mp3`;
      
      // Reset audio controls
      document.getElementById("playBtn").style.display = "block";
      document.getElementById("pauseBtn").style.display = "none";
      document.getElementById("audioProgressBar").style.width = "0%";
      document.getElementById("currentTime").textContent = "00:00";
      
      // Load audio metadata
      await new Promise((resolve) => {
        audio.onloadedmetadata = resolve;
        audio.load();
      });
    }
  } catch (error) {
    console.error("Error:", error);
    showAlert(translations[currentLang].errorMessage);
  } finally {
    btnText.textContent = translations[currentLang].getAyahText;
    spinner.style.display = "none";
    btn.disabled = false;
  }
}

function displayAyah(ayahArabic, ayahTranslation, surah, ayahNumber) {
  document.getElementById("ayah-arabic").textContent = ayahArabic;
  document.getElementById("ayah-translation").textContent = ayahTranslation;
  displayAyahInfo(surah, ayahNumber);
  document.getElementById("ayah-container").style.display = "block";
}

function displayAyahInfo(surah, ayahNumber) {
  const t = translations[currentLang];
  
  document.getElementById("ayah-info").textContent = 
    currentLang === "ar" ? `سورة ${surah.name.ar} - الآية ${ayahNumber}` :
    currentLang === "en" ? `Surah ${surah.name.en} - Ayah ${ayahNumber}` :
    `سوره ${surah.name.fa} - آیه ${ayahNumber}`;
  
  document.getElementById("surah-name").textContent = 
    currentLang === "ar" ? `سورة ${surah.name.ar}` :
    currentLang === "en" ? `Surah ${surah.name.en}` :
    `سوره ${surah.name.fa}`;
  
  document.getElementById("surah-type").textContent = 
    surah.revelation === "meccan" ? t.meccan : t.medinan;
  
  document.getElementById("surah-ayahs").textContent = surah.ayahs;
  
  document.getElementById("surah-revelation").textContent =
    surah.revelation === "meccan" ?
    (currentLang === "ar" ? "مكة" : currentLang === "fa" ? "مکه" : "Mecca") :
    (currentLang === "ar" ? "المدينة" : currentLang === "fa" ? "مدینه" : "Medina");
}