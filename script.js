// Active section highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Back-to-top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Language Toggle ===
const langToggle = document.getElementById("langToggle");

// 中文 & 英文資料
const translations = {
  zh: {
    navAbout: "關於我",
    navEducation: "學經歷",
    navProjects: "專案作品",
    navContact: "聯絡方式",
    aboutTitle: "關於我",
    aboutText: "您好，我是林小明，就讀於國立台灣大學醫學工程所，研究方向為人工智慧與醫學影像處理。",
    eduTitle: "學經歷",
    eduMaster: "碩士 — 國立台灣大學 醫學工程 (2023-2025)",
    eduBachelor: "學士 — XXX大學 工程學系 (2019-2023)",
    projTitle: "專案作品",
    proj1Title: "專案一：低劑量PET影像增強",
    proj1Text: "利用深度學習方法提升低劑量影像品質，改善臨床應用的準確度。",
    proj2Title: "專案二：醫學影像可視化工具",
    proj2Text: "以 Python 與 Matplotlib 開發的可視化套件，支援DICOM與NIfTI格式。",
    contactTitle: "聯絡方式",
  },
  en: {
    navAbout: "About",
    navEducation: "Education",
    navProjects: "Projects",
    navContact: "Contact",
    aboutTitle: "About Me",
    aboutText: "Hello! I'm Ming Lin, a Master's student at National Taiwan University specializing in AI and medical image processing.",
    eduTitle: "Education",
    eduMaster: "M.Sc. — National Taiwan University, Medical Engineering (2023-2025)",
    eduBachelor: "B.Eng. — XXX University, Department of Engineering (2019-2023)",
    projTitle: "Projects",
    proj1Title: "Project 1: Low-dose PET Enhancement",
    proj1Text: "Applied deep learning to improve image quality of low-dose PET for better clinical reliability.",
    proj2Title: "Project 2: Medical Image Visualization Tool",
    proj2Text: "Developed a Python package with Matplotlib supporting DICOM and NIfTI visualization.",
    contactTitle: "Contact",
  }
};

let currentLang = "zh";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  const dict = translations[currentLang];

  // 更新文字
  Object.keys(dict).forEach((key) => {
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) {
      el.textContent = dict[key];
    }
  });

  // 切換按鈕顯示
  langToggle.textContent = currentLang === "zh" ? "English" : "中文";
});
