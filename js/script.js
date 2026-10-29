const doctorConfig = {
  name: "ডা. আবু জাফর মোং নেছারুদ্দিন",
  chamberName: "Kader Unity Medical Centre",
  phoneNumber: "01627010250",
  whatsappNumber: "8801627010250",
  facebookUrl: "https://www.facebook.com/prince.nesaruddin.1",
  address: "",
  googleMapsUrl: "",
  visitingHours: "প্রতিদিন সকাল ৯টা থেকে রাত ৮টা পর্যন্ত"
};

const appointmentMessage = {
  bn: "আসসালামু আলাইকুম। আমি ডা. আবু জাফর মোং নেছারুদ্দিন স্যারের অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে চাই।",
  en: "Hello. I would like to know about an appointment with Dr. Abu Zafar Md. Nesaruddin."
};

const copy = {
  bn: {
    "[data-skip]": "মূল কনটেন্টে যান",
    ".site-header nav": { attr: "aria-label", value: "প্রধান নেভিগেশন" },
    ".brand strong": "ডা. নেছারুদ্দিন",
    ".brand small": "ব্যক্তিগত পোর্টফোলিও",
    ".nav-menu > a[href='#home']": "হোম",
    ".nav-menu > a[href='#about']": "ডাক্তারের পরিচিতি",
    ".nav-menu > a[href='#services']": "সেবাসমূহ",
    ".nav-menu > a[href='#chamber']": "চেম্বার ও সময়",
    ".nav-menu > a[href='#contact']": "যোগাযোগ",
    ".nav-cta": "অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন <span aria-hidden='true'>↗</span>",
    ".hero h1": "আপনার সুস্বাস্থ্য<br><em>ও কল্যাণে আন্তরিক</em>",
    ".hero-intro": "রোগীর প্রয়োজনকে গুরুত্ব দিয়ে পেশাদার চিকিৎসা পরামর্শ ও যত্ন।",
    ".doctor-name h2": "ডা. আবু জাফর মোং নেছারুদ্দিন",
    ".doctor-name p": "এম.বি.বি.এস (চট্টগ্রাম মেডিকেল বিশ্ববিদ্যালয়) <span>·</span> পিজিটি (অর্থোপেডিক সার্জারি)",
    ".credentials span:first-child": "জেনারেল ফিজিশিয়ান",
    ".credentials span:last-child": "বিএমডিসি নিবন্ধন: A-144229",
    ".hero-actions .button-primary": "অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন <span>↗</span>",
    ".hero-actions .button-quiet": "ডাক্তারের পরিচিতি <span>↓</span>",
    ".about-copy .section-title": "ডাক্তারের<br><em>পরিচিতি</em>",
    ".about-copy .body-copy": "ডা. আবু জাফর মোং নেছারুদ্দিন চট্টগ্রাম মেডিকেল বিশ্ববিদ্যালয় থেকে এম.বি.বি.এস সম্পন্ন করেছেন এবং অর্থোপেডিক সার্জারিতে পিজিটি প্রশিক্ষণ নিয়েছেন। তিনি একজন জেনারেল ফিজিশিয়ান। তাঁর পরামর্শের ক্ষেত্রের মধ্যে রয়েছে সাধারণ মেডিসিন, দুর্ঘটনা ও আঘাতজনিত সমস্যা, হাড়-জয়েন্ট ও পেশিসংক্রান্ত উপসর্গ, কোমর ও হাঁটুর ব্যথা, জয়েন্ট ও বাতজনিত ব্যথা, শিশুদের সাধারণ স্বাস্থ্য সমস্যা এবং শ্বাসতন্ত্রের উপসর্গ। তিনি রোগীর কথা মনোযোগ দিয়ে শোনেন এবং স্পষ্ট, প্রাসঙ্গিক পরামর্শ দেন।",
    ".qualifications > div:nth-child(1) strong": "এম.বি.বি.এস",
    ".qualifications > div:nth-child(1) small": "চট্টগ্রাম মেডিকেল বিশ্ববিদ্যালয়",
    ".qualifications > div:nth-child(2) strong": "পিজিটি",
    ".qualifications > div:nth-child(2) small": "অর্থোপেডিক সার্জারি",
    ".qualifications > div:nth-child(3) strong": "বিএমডিসি A-144229",
    ".qualifications > div:nth-child(3) small": "নিবন্ধন নম্বর",
    ".about-copy .text-link": "যোগাযোগের তথ্য দেখুন <span>↗</span>",
    ".services-section .section-title": "চিকিৎসাসেবা",
    ".service-card:nth-child(1) h3": "সাধারণ মেডিসিন",
    ".service-card:nth-child(1) p": "সাধারণ স্বাস্থ্য সমস্যা ও মেডিসিন বিষয়ে পরামর্শ।",
    ".service-card:nth-child(2) h3": "দুর্ঘটনা ও আঘাতজনিত সমস্যা",
    ".service-card:nth-child(2) p": "দুর্ঘটনা ও আঘাতের পর চিকিৎসা-পরামর্শ।",
    ".service-card:nth-child(3) h3": "অর্থোপেডিক-সংক্রান্ত সমস্যা",
    ".service-card:nth-child(3) p": "হাড়, জয়েন্ট ও চলাচল-সংক্রান্ত উপসর্গে পরামর্শ।",
    ".service-card:nth-child(4) h3": "কোমর ব্যথা",
    ".service-card:nth-child(4) p": "কোমর ব্যথা ও অস্বস্তি নিয়ে পরামর্শ।",
    ".service-card:nth-child(5) h3": "জয়েন্ট ও বাতজনিত ব্যথা",
    ".service-card:nth-child(5) p": "বাতজনিত ও দীর্ঘস্থায়ী জয়েন্টের ব্যথা মূল্যায়ন।",
    ".service-card:nth-child(6) h3": "হাঁটুর ব্যথা",
    ".service-card:nth-child(6) p": "হাঁটুর ব্যথা ও চলাচলে অস্বস্তি নিয়ে পরামর্শ।",
    ".service-card:nth-child(7) h3": "জয়েন্টের ব্যথা",
    ".service-card:nth-child(7) p": "জয়েন্টের ব্যথা ও সংশ্লিষ্ট উপসর্গে পরামর্শ।",
    ".service-card:nth-child(8) h3": "শিশুদের সাধারণ চিকিৎসা",
    ".service-card:nth-child(8) p": "শিশুদের সাধারণ স্বাস্থ্য সমস্যায় পরামর্শ।",
    ".service-card:nth-child(9) h3": "শ্বাসতন্ত্রের সমস্যা ও শ্বাসকষ্ট",
    ".service-card:nth-child(9) p": "শ্বাসকষ্ট ও শ্বাসতন্ত্রের উপসর্গ নিয়ে পরামর্শ।",
    ".service-note": "গুরুতর বা জীবন-ঝুঁকিপূর্ণ জরুরি অবস্থায় নিকটস্থ উপযুক্ত হাসপাতালের জরুরি বিভাগে অবিলম্বে যান।",
    ".chamber-heading .section-title": "চেম্বার ও<br><em>রোগী দেখার সময়</em>",
    ".chamber-heading > p": "ডা. আবু জাফর মোং নেছারুদ্দিন কাদের ইউনিটি মেডিকেল সেন্টারে রোগী দেখেন।",
    ".hours-top": "<span class='mini-icon'>◷</span><span>রোগী দেখার সময়</span><span class='open-pill'><i></i> প্রতিদিন</span>",
    ".hours-time": "সকাল ৯টা <span>—</span><br>রাত ৮টা",
    ".hours-card > .hours-detail:nth-child(4) span": "চেম্বার",
    ".hours-card > .hours-detail:nth-child(4) strong": "কাদের ইউনিটি মেডিকেল সেন্টার",
    ".hours-card .button": "অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন <span>↗</span>",
    ".contact-main .section-title": "যোগাযোগ<br><em>করুন</em>",
    ".contact-main .lead": "অ্যাপয়েন্টমেন্ট বা চেম্বারের তথ্য জানতে ফোন করুন বা বার্তা পাঠান।",
    ".contact-doctor strong": "ডা. আবু জাফর মোং নেছারুদ্দিন",
    ".contact-doctor small": "অ্যাপয়েন্টমেন্ট ও চেম্বারের তথ্য",
    ".call-action small": "অ্যাপয়েন্টমেন্ট",
    ".call-action strong": "ফোন করে যোগাযোগ করুন",
    ".whatsapp-action small": "অ্যাপয়েন্টমেন্ট",
    ".whatsapp-action strong": "হোয়াটসঅ্যাপে যোগাযোগ করুন",
    ".facebook-action small": "সোশ্যাল প্রোফাইল",
    ".facebook-action strong": "ফেসবুক প্রোফাইল",
    ".contact-hours": "<span class='status-dot'></span> প্রতিদিন সকাল ৯টা থেকে রাত ৮টা পর্যন্ত",
    ".footer-links a:nth-child(1)": "ডাক্তারের পরিচিতি",
    ".footer-links a:nth-child(2)": "চিকিৎসাসেবা",
    ".footer-links a:nth-child(3)": "চেম্বার ও সময়",
    ".footer-links a:nth-child(4)": "যোগাযোগ",
    ".footer-social": "f <span>ফেসবুক</span> ↗",
    ".footer-bottom > span:first-child": "© <span id='year'></span> ডা. নেছারুদ্দিন",
    ".footer-bottom > span:nth-child(2)": "জেনারেল ফিজিশিয়ান · বিএমডিসি A-144229",
    ".floating-whatsapp": "<svg viewBox='0 0 24 24'><path d='M20 11.7a8.1 8.1 0 0 1-11.9 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20 11.7Z'/><path d='M9 8.5c.3 2.4 2.1 4.2 4.5 4.5l1-1 2 .8-.2 1.5c-.1.6-.7 1-1.3.9-4-.6-6.8-3.4-7.4-7.4-.1-.6.3-1.2.9-1.3L10 6.3l.8 2-1 .2Z'/></svg>",
    "[data-set-language='bn']": { attr: "aria-pressed", value: "true" },
    "[data-set-language='en']": { attr: "aria-pressed", value: "false" }
  },
  en: {
    "[data-skip]": "Skip to main content",
    ".site-header nav": { attr: "aria-label", value: "Main navigation" },
    ".brand strong": "Dr Nesaruddin",
    ".brand small": "Personal Portfolio",
    ".nav-menu > a[href='#home']": "Home",
    ".nav-menu > a[href='#about']": "About the Doctor",
    ".nav-menu > a[href='#services']": "Services",
    ".nav-menu > a[href='#chamber']": "Chamber & Hours",
    ".nav-menu > a[href='#contact']": "Contact",
    ".nav-cta": "Contact for an Appointment <span aria-hidden='true'>↗</span>",
    ".hero h1": "Dedicated to Your<br><em>Health and Wellbeing</em>",
    ".hero-intro": "Professional medical consultation with a patient-focused approach to care.",
    ".doctor-name h2": "Dr. Abu Zafar Md. Nesaruddin",
    ".doctor-name p": "MBBS (Chattogram Medical University) <span>·</span> PGT (Orthopaedic Surgery)",
    ".credentials span:first-child": "General Physician",
    ".credentials span:last-child": "BMDC Registration: A-144229",
    ".hero-actions .button-primary": "Contact for an Appointment <span>↗</span>",
    ".hero-actions .button-quiet": "Learn About the Doctor <span>↓</span>",
    ".about-copy .section-title": "About<br><em>the Doctor</em>",
    ".about-copy .body-copy": "Dr. Abu Zafar Md. Nesaruddin holds an MBBS from Chattogram Medical University and has PGT training in Orthopaedic Surgery. He is a General Physician. His consultation areas include general medicine, accident and trauma-related concerns, orthopaedic-related complaints, back, knee, joint and rheumatic pain, general paediatric concerns, and respiratory symptoms. He listens carefully and provides clear, relevant guidance.",
    ".qualifications > div:nth-child(1) strong": "MBBS",
    ".qualifications > div:nth-child(1) small": "Chattogram Medical University",
    ".qualifications > div:nth-child(2) strong": "PGT",
    ".qualifications > div:nth-child(2) small": "Orthopaedic Surgery",
    ".qualifications > div:nth-child(3) strong": "BMDC A-144229",
    ".qualifications > div:nth-child(3) small": "Registration number",
    ".about-copy .text-link": "View contact information <span>↗</span>",
    ".services-section .section-title": "Medical Services",
    ".service-card:nth-child(1) h3": "General Medicine",
    ".service-card:nth-child(1) p": "Consultation for common health concerns and medical conditions.",
    ".service-card:nth-child(2) h3": "Accident & Trauma-Related Consultation",
    ".service-card:nth-child(2) p": "Consultation for concerns following an accident or injury.",
    ".service-card:nth-child(3) h3": "Orthopaedic-Related Complaints",
    ".service-card:nth-child(3) p": "Consultation for bone, joint and mobility symptoms.",
    ".service-card:nth-child(4) h3": "Lower Back Pain",
    ".service-card:nth-child(4) p": "Consultation for back pain and discomfort.",
    ".service-card:nth-child(5) h3": "Joint & Rheumatic Pain",
    ".service-card:nth-child(5) p": "Assessment of rheumatic and persistent joint pain.",
    ".service-card:nth-child(6) h3": "Knee Pain",
    ".service-card:nth-child(6) p": "Consultation for knee pain and discomfort with movement.",
    ".service-card:nth-child(7) h3": "Joint Pain",
    ".service-card:nth-child(7) p": "Consultation for joint pain and related symptoms.",
    ".service-card:nth-child(8) h3": "General Paediatric Consultation",
    ".service-card:nth-child(8) p": "Consultation for common health concerns in children.",
    ".service-card:nth-child(9) h3": "Respiratory Complaints & Breathing Difficulties",
    ".service-card:nth-child(9) p": "Consultation for breathing difficulties and respiratory symptoms.",
    ".service-note": "For severe or life-threatening emergencies, seek immediate emergency care at an appropriate hospital.",
    ".chamber-heading .section-title": "Chamber &<br><em>Consultation Hours</em>",
    ".chamber-heading > p": "Dr. Abu Zafar Md. Nesaruddin sees patients at Kader Unity Medical Centre.",
    ".hours-top": "<span class='mini-icon'>◷</span><span>Consultation hours</span><span class='open-pill'><i></i> Daily</span>",
    ".hours-time": "9:00 AM <span>—</span><br>8:00 PM",
    ".hours-card > .hours-detail:nth-child(4) span": "Chamber",
    ".hours-card > .hours-detail:nth-child(4) strong": "Kader Unity Medical Centre",
    ".hours-card .button": "Contact for an Appointment <span>↗</span>",
    ".contact-main .section-title": "Get in<br><em>touch</em>",
    ".contact-main .lead": "Call or message for appointments and chamber information.",
    ".contact-doctor strong": "Dr. Abu Zafar Md. Nesaruddin",
    ".contact-doctor small": "Appointment and chamber information",
    ".call-action small": "Appointment",
    ".call-action strong": "Call the Chamber",
    ".whatsapp-action small": "Appointment",
    ".whatsapp-action strong": "Contact via WhatsApp",
    ".facebook-action small": "Social profile",
    ".facebook-action strong": "View Facebook Profile",
    ".contact-hours": "<span class='status-dot'></span> Consultation hours: Daily, 9:00 AM–8:00 PM",
    ".footer-links a:nth-child(1)": "About the Doctor",
    ".footer-links a:nth-child(2)": "Services",
    ".footer-links a:nth-child(3)": "Chamber & Hours",
    ".footer-links a:nth-child(4)": "Contact",
    ".footer-social": "f <span>Facebook</span> ↗",
    ".footer-bottom > span:first-child": "© <span id='year'></span> Dr Nesaruddin",
    ".footer-bottom > span:nth-child(2)": "General Physician · BMDC A-144229",
    ".floating-whatsapp": "<svg viewBox='0 0 24 24'><path d='M20 11.7a8.1 8.1 0 0 1-11.9 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20 11.7Z'/><path d='M9 8.5c.3 2.4 2.1 4.2 4.5 4.5l1-1 2 .8-.2 1.5c-.1.6-.7 1-1.3.9-4-.6-6.8-3.4-7.4-7.4-.1-.6.3-1.2.9-1.3L10 6.3l.8 2-1 .2Z'/></svg>",
    "[data-set-language='bn']": { attr: "aria-pressed", value: "false" },
    "[data-set-language='en']": { attr: "aria-pressed", value: "true" }
  }
};

function setLanguage(language) {
  const table = copy[language];
  for (const [selector, value] of Object.entries(table)) {
    document.querySelectorAll(selector).forEach(element => {
      if (typeof value === "string") element.innerHTML = value;
      else element.setAttribute(value.attr, value.value);
    });
  }
  document.documentElement.lang = language;
  document.title = language === "bn"
    ? "ডা. নেছারুদ্দিন | ব্যক্তিগত পোর্টফোলিও"
    : "Dr Nesaruddin";
  document.querySelector('meta[name="description"]').content = language === "bn"
    ? "ডা. আবু জাফর মোং নেছারুদ্দিনের পরিচিতি, চিকিৎসাসেবা ও অ্যাপয়েন্টমেন্টের যোগাযোগের তথ্য।"
    : "Meet Dr. Abu Zafar Md. Nesaruddin and learn about his professional services and appointment options.";
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = language === "bn"
    ? "ডা. আবু জাফর মোং নেছারুদ্দিনের ব্যক্তিগত পোর্টফোলিও, চিকিৎসাসেবা ও চেম্বারের তথ্য।"
    : "Personal portfolio, medical services and chamber information for Dr. Abu Zafar Md. Nesaruddin.";
  document.querySelector(".menu-toggle").setAttribute("aria-label", language === "bn" ? "মেনু খুলুন" : "Open menu");
  document.querySelector(".floating-whatsapp").setAttribute("aria-label", language === "bn" ? "হোয়াটসঅ্যাপে অ্যাপয়েন্টমেন্টের জন্য যোগাযোগ করুন" : "Contact us on WhatsApp about an appointment");
  document.querySelector(".brand").setAttribute("aria-label", language === "bn" ? "ডা. নেছারুদ্দিন — ব্যক্তিগত পোর্টফোলিও" : "Dr Nesaruddin — Personal Portfolio");
  document.querySelectorAll("[data-facebook]").forEach(link => link.setAttribute("aria-label", language === "bn" ? "ফেসবুক প্রোফাইল খুলুন" : "Open Facebook profile"));
  document.querySelector(".hero-photo-frame img").alt = language === "bn" ? "ডা. আবু জাফর মোং নেছারুদ্দিন, চিকিৎসকের পোশাকে" : "Dr. Abu Zafar Md. Nesaruddin in his white coat";
  document.querySelector(".about-photo img").alt = language === "bn" ? "ডা. আবু জাফর মোং নেছারুদ্দিনের পোর্ট্রেট" : "Portrait of Dr. Abu Zafar Md. Nesaruddin";
  document.querySelector(".language-switch").setAttribute("aria-label", language === "bn" ? "ভাষা নির্বাচন" : "Select language");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = `https://wa.me/${doctorConfig.whatsappNumber}?text=${encodeURIComponent(appointmentMessage[language])}`;
  });
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  try { localStorage.setItem("doctor-nesaruddin-language", language); } catch { /* Browser storage may be disabled for local files. */ }
}

document.querySelectorAll("[data-phone]").forEach(link => link.href = `tel:${doctorConfig.phoneNumber}`);
document.querySelectorAll("[data-facebook]").forEach(link => link.href = doctorConfig.facebookUrl);
document.querySelectorAll("[data-set-language]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
});
let savedLanguage = "bn";
try { savedLanguage = localStorage.getItem("doctor-nesaruddin-language") || "bn"; } catch { /* Keep Bengali as the default. */ }
setLanguage(savedLanguage);

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#site-menu");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? (document.documentElement.lang === "bn" ? "মেনু খুলুন" : "Open menu") : (document.documentElement.lang === "bn" ? "মেনু বন্ধ করুন" : "Close menu"));
    menu.classList.toggle("is-open", !isOpen);
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", document.documentElement.lang === "bn" ? "মেনু খুলুন" : "Open menu");
    menu.classList.remove("is-open");
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", document.documentElement.lang === "bn" ? "মেনু খুলুন" : "Open menu");
      menu.classList.remove("is-open");
      menuButton.focus();
    }
  });
}



