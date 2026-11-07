/* ==========================================================================
   odisea.deft.work — Motor Interactivo HOMERO (Karaoke Inverso, Audio y RRSS)
   ========================================================================== */

const UI_STRINGS = {
  es: {
    brandTitle: "La Odisea del .ia",
    sidebarHeading: "Índice de Capítulos",
    sidebarSubtitle: "Crónica real de la Iniciativa Ciudadana Europea ECI(2026)000012",
    downloadsHeading: "Formatos Abiertos (Homero)",
    sideEpub: "📖 Descargar eBook (.epub)",
    sidePdf: "📄 Descargar Libro (.pdf)",
    sideMp3: "🎧 Descargar Audiolibro (.mp3)",
    themeBtnLabel: "Cambiar tema de lectura",
    chapterPill: "Capítulo 1",
    readingTimePrefix: "Lectura:",
    byAuthor: "Por Eloy López Sánchez",
    audiobookLabel: "🎧 Audiolibro con Lectura Sincronizada («Karaoke Inverso»)",
    audiobookHint: "Haz clic en cualquier frase del texto para saltar a ese segundo",
    playText: "▶ Escuchar capítulo",
    pauseText: "⏸ Pausar narración",
    autoscrollText: "Seguir lectura",
    shareTitle: "Comparte este capítulo",
    shareDesc: "Cada persona que lee o escucha esta historia nos acerca al millón de firmas en Europa.",
    copyLinkText: "🔗 Copiar enlace",
    copiedText: "✅ ¡Enlace copiado!",
    sponsorTitle: "Patrocina la Odisea (.ia)",
    sponsorDesc: "Impulsa de forma independiente la campaña europea y el desarrollo abierto de Homero.",
    sponsorBtn: "💳 Patrocinar con PayPal / Tarjeta",
    sponsorQrLabel: "Escanear para donar",
    chaptersList: [
      { num: "Capítulo 1", title: "La idea más importante de mi vida", active: true },
      { num: "Capítulo 2", title: "El nacimiento del proyecto Anticitera", active: false }
    ],
    nextTeaser: `<div class="next-chapter-teaser"><strong>En el próximo capítulo (Capítulo 2):</strong> El nacimiento del proyecto Anticitera. Cómo aquel primer artículo en el blog encendió los motores de lo que hoy es una iniciativa ciudadana oficial ante la Unión Europea.</div>`,
    ctaTitle: "Sé parte de esta historia y ayúdanos a conseguir el millón de firmas",
    ctaDesc: "Este relato se escribe capítulo a capítulo hasta alcanzar el millón de firmas ciudadanas que obligarán a Europa a crear la Denominación de Origen .ia.",
    card1Title: "1. Recibe el Capítulo 3 en tu correo",
    card1Desc: "Te enviaremos el Capítulo 3 («El asalto a Bruselas») y el aviso directo en el instante en que se abra la urna oficial de votación.",
    emailLabel: "Tu correo electrónico",
    emailHint: "Formato: nombre@ejemplo.com (sin spam, solo capítulos y aviso de firma)",
    emailError: "Por favor, introduce una dirección de correo válida.",
    subscribeBtn: "Suscribirme al relato (.ia)",
    subscribeLoading: "⏳ Registrando suscripción...",
    subscribeSuccess: "✅ ¡Suscripción confirmada! Te enviaremos el Capítulo 3 y el aviso prioritario de firma.",
    subscribeError: "❌ No se pudo registrar. Por favor, inténtalo de nuevo en unos momentos.",
    card2Title: "2. Urna Oficial de la Unión Europea",
    card2Desc: "En España y en la UE basta con tu Nombre y DNI (lleva menos de 45 segundos). Conoce la iniciativa oficial y comprométete con el 6 de abril.",
    euBtnText: "Ir a la Plataforma Oficial ICE →"
  },
  en: {
    brandTitle: "The .ia Odyssey",
    sidebarHeading: "Chapter Index",
    sidebarSubtitle: "True chronicle of European Citizens' Initiative ECI(2026)000012",
    downloadsHeading: "Open Formats (Homero)",
    sideEpub: "📖 Download eBook (.epub)",
    sidePdf: "📄 Download Book (.pdf)",
    sideMp3: "🎧 Download Audiobook (.mp3)",
    themeBtnLabel: "Toggle reading theme",
    chapterPill: "Chapter 1",
    readingTimePrefix: "Read time:",
    byAuthor: "By Eloy López Sánchez",
    audiobookLabel: "🎧 Audiobook with Synchronized Read-Along ('Inverse Karaoke')",
    audiobookHint: "Click on any sentence in the text to jump to that exact moment",
    playText: "▶ Listen to chapter",
    pauseText: "⏸ Pause narration",
    autoscrollText: "Auto-scroll",
    shareTitle: "Share this chapter",
    shareDesc: "Every reader or listener brings us closer to one million signatures across Europe.",
    copyLinkText: "🔗 Copy link",
    copiedText: "✅ Link copied!",
    sponsorTitle: "Sponsor the Odyssey (.ia)",
    sponsorDesc: "Support the independent European campaign and open-source development of Homero.",
    sponsorBtn: "💳 Sponsor via PayPal / Card",
    sponsorQrLabel: "Scan to donate",
    chaptersList: [
      { num: "Chapter 1", title: "The Most Important Idea of My Life", active: true },
      { num: "Chapter 2", title: "The Birth of the Antikythera Project", active: false }
    ],
    nextTeaser: `<div class="next-chapter-teaser"><strong>In the next chapter (Chapter 2):</strong> The birth of the Antikythera project. How that first blog post ignited the engines of what is now an official European Citizens' Initiative.</div>`,
    ctaTitle: "Be part of this story and help us reach one million signatures",
    ctaDesc: "This chronicle unfolds chapter by chapter to gather the one million citizen signatures needed to establish the European .ia Designation of Origin.",
    card1Title: "1. Receive Chapter 3 in your inbox",
    card1Desc: "We will send you Chapter 3 ('Storming Brussels') and a priority alert the moment the official EU ballot box opens.",
    emailLabel: "Your email address",
    emailHint: "Format: you@example.com (zero spam, only new chapters & ballot alert)",
    emailError: "Please enter a valid email address.",
    subscribeBtn: "Subscribe to the Chronicle (.ia)",
    subscribeLoading: "⏳ Registering subscription...",
    subscribeSuccess: "✅ Subscription confirmed! We will send you Chapter 2 and the priority signing alert.",
    subscribeError: "❌ Could not register. Please try again in a few moments.",
    card2Title: "2. Official European Union Ballot Box",
    card2Desc: "Signing an official European Citizens' Initiative takes less than 45 seconds with your national ID. Explore the official initiative and join the April 6 launch.",
    euBtnText: "Go to Official ECI Campaign →"
  }
};

let activeLang = "es";
let activeChapterIndex = 0;
let activeSyncData = null;
let lastActiveSentenceId = null;
let lastActiveWordId = null;
let rafId = null;

function formatSeconds(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function getEffectiveLangKey(langCode) {
  if (window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas && window.HOMERO_BOOK.idiomas[langCode]) {
    return langCode;
  }
  return ["el", "hu", "en"].includes(langCode) ? "en" : "es";
}

function updateRangeSliderFallback(slider) {
  if (!CSS.supports("accent-color", "#003399")) {
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const pct = max > 0 ? (val / max) * 100 : 0;
    slider.style.setProperty("--progress", `${pct}%`);
  }
}

function clearKaraokeHighlights() {
  if (lastActiveSentenceId !== null) {
    const prevS = document.getElementById(`s-${lastActiveSentenceId}`);
    if (prevS) prevS.classList.remove("is-active");
    lastActiveSentenceId = null;
  }
  if (lastActiveWordId !== null) {
    const prevW = document.getElementById(`w-${lastActiveWordId}`);
    if (prevW) prevW.classList.remove("is-active");
    lastActiveWordId = null;
  }
}

function syncKaraokeHighlight(currentTime) {
  if (!activeSyncData) return;

  // 1. Buscar palabra activa mediante búsqueda binaria o lineal rápida
  const words = activeSyncData.words || [];
  let currentWord = null;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (currentTime >= w.start && currentTime <= w.end + 0.06) {
      currentWord = w;
      break;
    }
  }

  // 2. Buscar frase activa
  let currentSentId = currentWord ? currentWord.s : null;
  if (currentSentId === null) {
    const sents = activeSyncData.sentences || [];
    for (let i = 0; i < sents.length; i++) {
      const s = sents[i];
      if (currentTime >= s.start && currentTime <= s.end + 0.15) {
        currentSentId = s.s;
        break;
      }
    }
  }

  if (currentSentId !== lastActiveSentenceId) {
    if (lastActiveSentenceId !== null) {
      const prevS = document.getElementById(`s-${lastActiveSentenceId}`);
      if (prevS) prevS.classList.remove("is-active");
    }
    if (currentSentId !== null) {
      const nextS = document.getElementById(`s-${currentSentId}`);
      if (nextS) {
        nextS.classList.add("is-active");
        const autoscroll = document.getElementById("autoscroll-toggle");
        if (autoscroll && autoscroll.checked) {
          const rect = nextS.getBoundingClientRect();
          const vh = window.innerHeight;
          if (rect.top < 110 || rect.bottom > vh - 120) {
            nextS.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }
    }
    lastActiveSentenceId = currentSentId;
  }

  const nextWordId = currentWord ? currentWord.w : null;
  if (nextWordId !== lastActiveWordId) {
    if (lastActiveWordId !== null) {
      const prevW = document.getElementById(`w-${lastActiveWordId}`);
      if (prevW) prevW.classList.remove("is-active");
    }
    if (nextWordId !== null) {
      const nextW = document.getElementById(`w-${nextWordId}`);
      if (nextW) nextW.classList.add("is-active");
    }
    lastActiveWordId = nextWordId;
  }
}

function attachSentenceClickToSeek() {
  const container = document.querySelector(".chapter-reader");
  const audio = document.getElementById("chapter-audio");
  if (!container || !audio) return;

  container.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const sentEl = e.target.closest(".hm-sentence");
    if (!sentEl || !activeSyncData) return;
    const sId = parseInt(sentEl.getAttribute("data-s"), 10);
    const sentObj = (activeSyncData.sentences || []).find((s) => s.s === sId);
    if (sentObj) {
      audio.currentTime = sentObj.start;
      syncKaraokeHighlight(sentObj.start);
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    }
  });
}

function updateSocialAndSponsorLinks(chapterTitle) {
  const pageUrl = window.location.href.split("#")[0];
  const shareText = `${chapterTitle} — La Odisea del .ia (Iniciativa Ciudadana Europea ECI(2026)000012)`;

  document.getElementById("share-x").href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
  document.getElementById("share-wa").href =
    `https://wa.me/?text=${encodeURIComponent(shareText + " " + pageUrl)}`;
  document.getElementById("share-tg").href =
    `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  document.getElementById("share-in").href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;

  if (window.HOMERO_BOOK && window.HOMERO_BOOK.patrocinio) {
    if (window.HOMERO_BOOK.patrocinio.paypal_url) {
      document.getElementById("sponsor-btn").href = window.HOMERO_BOOK.patrocinio.paypal_url;
      const qrLink = document.querySelector(".sponsor-qr a");
      if (qrLink) qrLink.href = window.HOMERO_BOOK.patrocinio.paypal_url;
    }
    if (window.HOMERO_BOOK.patrocinio.qr_url) {
      const qrImg = document.getElementById("sponsor-qr-img");
      if (qrImg) qrImg.src = window.HOMERO_BOOK.patrocinio.qr_url;
    }
  }
}

function renderLanguage(langCode, chapterIdx) {
  const effKey = getEffectiveLangKey(langCode);
  const ui = UI_STRINGS[effKey] || UI_STRINGS.es;
  activeLang = effKey;
  if (typeof chapterIdx === "number") {
    activeChapterIndex = chapterIdx;
  }
  document.documentElement.lang = langCode;

  const audio = document.getElementById("chapter-audio");
  if (audio && !audio.paused) {
    audio.pause();
  }
  clearKaraokeHighlights();

  const bundleLang =
    window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[effKey] : null;
  const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
  if (activeChapterIndex >= chapters.length) {
    activeChapterIndex = 0;
  }
  const chapter = chapters[activeChapterIndex] || null;

  document.getElementById("brand-title").textContent = ui.brandTitle;
  document.getElementById("sidebar-heading").textContent = ui.sidebarHeading;
  document.getElementById("sidebar-subtitle").textContent = ui.sidebarSubtitle;
  document.getElementById("downloads-heading").textContent = ui.downloadsHeading;
  document.getElementById("side-epub-link").textContent = ui.sideEpub;
  document.getElementById("side-pdf-link").textContent = ui.sidePdf;
  document.getElementById("side-mp3-link").textContent = ui.sideMp3;
  document.getElementById("theme-toggle").setAttribute("aria-label", ui.themeBtnLabel);

  const chNum = chapter ? chapter.capitulo : (activeChapterIndex + 1);
  document.getElementById("chapter-pill").textContent = effKey === "en" ? `Chapter ${chNum}` : `Capítulo ${chNum}`;
  document.getElementById("audiobook-label").textContent = ui.audiobookLabel;
  document.getElementById("audiobook-hint").textContent = ui.audiobookHint;
  document.getElementById("play-pause-btn").textContent = ui.playText;
  document.getElementById("autoscroll-text").textContent = ui.autoscrollText;

  if (chapter) {
    document.getElementById("reading-time").innerHTML =
      `${ui.readingTimePrefix} ${chapter.reading_time} · ${chapter.author_html || ui.byAuthor}`;
    document.getElementById("chapter-title").innerHTML = chapter.title_html || chapter.title;
    document.getElementById("chapter-lead").innerHTML = chapter.subtitle_html || chapter.subtitle;

    let teaserHtml = "";
    if (activeChapterIndex === 0) {
      teaserHtml = effKey === "en"
        ? `<div class="next-chapter-teaser"><strong>In the next chapter (Chapter 2):</strong> The Antikythera Project. The birth of the initiative, the early tech discussions, and the discovery of the "Exceptional Reservation".</div>`
        : `<div class="next-chapter-teaser"><strong>En el próximo capítulo (Capítulo 2):</strong> El proyecto Anticitera. El nacimiento de la iniciativa, el debate con los primeros gigantes tech y el descubrimiento de la «Reserva Excepcional».</div>`;
    } else {
      teaserHtml = effKey === "en"
        ? `<div class="next-chapter-teaser"><strong>In the next chapter (Chapter 3):</strong> Storming Brussels. The legal scrutiny of the European Commission, the negotiations in Strasbourg, and the official registration of ECI(2026)000012.</div>`
        : `<div class="next-chapter-teaser"><strong>En el próximo capítulo (Capítulo 3):</strong> El asalto a Bruselas. El examen jurídico de la Comisión Europea, las negociaciones en Estrasburgo y el registro oficial de la ECI(2026)000012.</div>`;
    }

    document.getElementById("chapter-body").innerHTML = chapter.html + teaserHtml;
    activeSyncData = chapter.sync;

    audio.src = chapter.audio_url;
    document.getElementById("total-time").textContent = formatSeconds(chapter.duration);
    document.getElementById("current-time").textContent = "0:00";
    const slider = document.getElementById("seek-slider");
    slider.max = chapter.duration || 100;
    slider.value = 0;
    updateRangeSliderFallback(slider);

    const epubUrl = bundleLang.epub_url;
    const pdfUrl = bundleLang.pdf_url;
    const mp3Url = chapter.audio_url;

    document.getElementById("top-epub-link").href = epubUrl;
    document.getElementById("side-epub-link").href = epubUrl;
    document.getElementById("top-pdf-link").href = pdfUrl;
    document.getElementById("side-pdf-link").href = pdfUrl;
    document.getElementById("top-mp3-link").href = mp3Url;
    document.getElementById("side-mp3-link").href = mp3Url;

    updateSocialAndSponsorLinks(chapter.title);
  }

  const listEl = document.getElementById("chapter-list");
  listEl.innerHTML = "";
  if (chapters.length > 0) {
    chapters.forEach((ch, idx) => {
      const li = document.createElement("li");
      const isActive = idx === activeChapterIndex;
      li.className = `chapter-item ${isActive ? "is-active" : "is-clickable"}`;
      li.style.cursor = "pointer";
      const numLabel = effKey === "en" ? `Chapter ${ch.capitulo}` : `Capítulo ${ch.capitulo}`;
      li.innerHTML = `<span class="chapter-num">${numLabel}</span>${ch.title}`;
      li.addEventListener("click", () => {
        renderLanguage(activeLang, idx);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      listEl.appendChild(li);
    });

    const upcomingLi = document.createElement("li");
    upcomingLi.className = "chapter-item is-upcoming";
    const upNum = effKey === "en" ? "Chapter 3" : "Capítulo 3";
    const upTitle = effKey === "en" ? "Storming Brussels (Upcoming)" : "El asalto a Bruselas (Próximamente)";
    upcomingLi.innerHTML = `<span class="chapter-num">${upNum}</span>${upTitle}`;
    listEl.appendChild(upcomingLi);
  } else {
    ui.chaptersList.forEach((ch) => {
      const li = document.createElement("li");
      li.className = `chapter-item ${ch.active ? "is-active" : "is-upcoming"}`;
      li.innerHTML = `<span class="chapter-num">${ch.num}</span>${ch.title}`;
      listEl.appendChild(li);
    });
  }

  document.getElementById("share-title").textContent = ui.shareTitle;
  document.getElementById("share-desc").textContent = ui.shareDesc;
  document.getElementById("share-copy").textContent = ui.copyLinkText;
  document.getElementById("sponsor-title").textContent = ui.sponsorTitle;
  document.getElementById("sponsor-desc").textContent = ui.sponsorDesc;
  document.getElementById("sponsor-btn").textContent = ui.sponsorBtn;
  const qrLabelEl = document.getElementById("sponsor-qr-label");
  if (qrLabelEl && ui.sponsorQrLabel) {
    qrLabelEl.textContent = ui.sponsorQrLabel;
  }

  document.getElementById("cta-title").textContent = ui.ctaTitle;
  document.getElementById("cta-desc").textContent = ui.ctaDesc;
  document.getElementById("card1-title").textContent = ui.card1Title;
  document.getElementById("card1-desc").textContent = ui.card1Desc;
  document.getElementById("email-label").textContent = ui.emailLabel;
  document.getElementById("email-hint").textContent = ui.emailHint;
  document.getElementById("email-error-text").textContent = ui.emailError;
  document.getElementById("subscribe-btn").textContent = ui.subscribeBtn;
  document.getElementById("card2-title").textContent = ui.card2Title;
  document.getElementById("card2-desc").textContent = ui.card2Desc;
  document.getElementById("eu-btn").textContent = ui.euBtnText;
}

function initAudiobookPlayer() {
  const audio = document.getElementById("chapter-audio");
  const playBtn = document.getElementById("play-pause-btn");
  const slider = document.getElementById("seek-slider");
  const curTimeEl = document.getElementById("current-time");
  const totTimeEl = document.getElementById("total-time");
  const speedSelect = document.getElementById("speed-select");

  function tickKaraoke() {
    if (!audio.paused) {
      const t = audio.currentTime;
      curTimeEl.textContent = formatSeconds(t);
      slider.value = t;
      updateRangeSliderFallback(slider);
      syncKaraokeHighlight(t);
      rafId = requestAnimationFrame(tickKaraoke);
    }
  }

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    playBtn.textContent = ui.pauseText;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tickKaraoke);
  });

  audio.addEventListener("pause", () => {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    playBtn.textContent = ui.playText;
    cancelAnimationFrame(rafId);
  });

  audio.addEventListener("ended", () => {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    playBtn.textContent = ui.playText;
    cancelAnimationFrame(rafId);
    clearKaraokeHighlights();
  });

  audio.addEventListener("loadedmetadata", () => {
    if (audio.duration && Number.isFinite(audio.duration)) {
      slider.max = audio.duration;
      totTimeEl.textContent = formatSeconds(audio.duration);
    }
  });

  slider.addEventListener("input", (e) => {
    const targetTime = parseFloat(e.target.value) || 0;
    audio.currentTime = targetTime;
    curTimeEl.textContent = formatSeconds(targetTime);
    updateRangeSliderFallback(slider);
    syncKaraokeHighlight(targetTime);
  });

  speedSelect.addEventListener("change", (e) => {
    audio.playbackRate = parseFloat(e.target.value) || 1.0;
  });

  attachSentenceClickToSeek();
}

/* ==========================================================================
   Control de Modo Claro / Oscuro (Two-State Toggle conforme a modern-web-guidance)
   ========================================================================== */
function initThemeToggle() {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const toggleBtn = document.getElementById("theme-toggle");

  function getSystemScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function getRenderedScheme() {
    let stored = null;
    try {
      stored = localStorage.getItem("color-scheme");
    } catch (e) {}
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    return getSystemScheme();
  }

  function updateButtonLabel() {
    const current = getRenderedScheme();
    toggleBtn.textContent = current === "dark" ? "☀️ Modo Claro" : "🌙 Modo Noche";
  }

  toggleBtn.addEventListener("click", () => {
    const currentRendered = getRenderedScheme();
    const targetScheme = currentRendered === "dark" ? "light" : "dark";
    const systemScheme = getSystemScheme();

    try {
      if (targetScheme !== systemScheme) {
        localStorage.setItem("color-scheme", targetScheme);
        meta.content = targetScheme;
      } else {
        localStorage.removeItem("color-scheme");
        meta.content = "light dark";
      }
    } catch (e) {
      meta.content = targetScheme;
    }
    updateButtonLabel();
  });

  window.addEventListener("storage", (e) => {
    if (e.key === "color-scheme") {
      meta.content = e.newValue ?? "light dark";
      updateButtonLabel();
    }
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    updateButtonLabel();
  });

  updateButtonLabel();
}

/* ==========================================================================
   Fallback JS para Barra de Progreso de Lectura (solo si no soporta scroll())
   ========================================================================== */
function initScrollProgressFallback() {
  if (!CSS.supports("animation-timeline", "scroll()")) {
    const progress = document.querySelector("#progress");
    window.addEventListener(
      "scroll",
      () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressPercentage = scrollable > 0 ? scrolled / scrollable : 0;
        progress.style.transform = `scaleX(${progressPercentage})`;
      },
      { passive: true }
    );
  }
}

/* ==========================================================================
   Validación de Formulario Diferida (:user-invalid + ARIA sync + WeakMap fallback)
   ========================================================================== */
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    const isValid = input.checkValidity();
    input.classList.toggle("user-invalid-fallback", !isValid);
    input.classList.toggle("user-valid-fallback", isValid);

    if (!isValid) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  };

  const handleEvent = (event) => {
    const input = event.target;
    if (!input || !input.checkValidity) return;

    if (event.type === "input" || event.type === "change") {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === "blur") {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    const syncAria = (el) => {
      if (el && el.matches) {
        el.setAttribute?.("aria-invalid", el.matches(":user-invalid") ? "true" : "false");
      }
    };

    root.addEventListener("blur", (e) => syncAria(e.target), true);
    root.addEventListener("input", (e) => {
      if (e.target && e.target.hasAttribute && e.target.hasAttribute("aria-invalid")) {
        syncAria(e.target);
      }
    });

    if (CSS.supports("selector(:user-invalid)")) return;

    root.addEventListener("blur", handleEvent, true);
    root.addEventListener("input", handleEvent);
    root.addEventListener("change", handleEvent);
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");

  // Si existe HOMERO_BOOK.idiomas, sincronizar dinámicamente las opciones del selector
  if (window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas && langSelect) {
    const availableCodes = Object.keys(window.HOMERO_BOOK.idiomas);
    if (availableCodes.length > 0) {
      const currentVal = langSelect.value;
      langSelect.innerHTML = "";
      availableCodes.forEach((code) => {
        const info = window.HOMERO_BOOK.idiomas[code];
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = `${info.bandera || ""} ${info.nombre || code} (${code.toUpperCase()})`.trim();
        langSelect.appendChild(opt);
      });
      if (availableCodes.includes(currentVal)) {
        langSelect.value = currentVal;
      } else {
        langSelect.value = availableCodes[0];
      }
    }
  }

  renderLanguage(langSelect.value);

  langSelect.addEventListener("change", (e) => {
    renderLanguage(e.target.value);
  });

  initAudiobookPlayer();
  initThemeToggle();
  initScrollProgressFallback();

  const copyBtn = document.getElementById("share-copy");
  copyBtn.addEventListener("click", () => {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    navigator.clipboard?.writeText(window.location.href).then(() => {
      copyBtn.textContent = ui.copiedText;
      setTimeout(() => {
        copyBtn.textContent = ui.copyLinkText;
      }, 2200);
    });
  });

  const form = document.getElementById("subscribe-form");
  UserInvalidFallback.init(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const subscribeBtn = document.getElementById("subscribe-btn");
    const feedback = document.getElementById("subscribe-feedback");

    if (!emailInput.checkValidity()) {
      emailInput.focus();
      return;
    }

    const email = emailInput.value.trim();
    if (!email) return;

    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    const prevBtnText = subscribeBtn.textContent;
    subscribeBtn.disabled = true;
    subscribeBtn.textContent = ui.subscribeLoading || "⏳...";
    feedback.hidden = true;
    feedback.className = "subscribe-feedback";

    try {
      const response = await fetch("https://us-central1-dominio-deft-work.cloudfunctions.net/subscribeICE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          lang: `${activeLang} | odisea.deft.work`,
          source: "odisea"
        }),
      });

      if (response.ok) {
        feedback.textContent = ui.subscribeSuccess;
        feedback.className = "subscribe-feedback success";
        feedback.hidden = false;
        form.reset();
        try {
          localStorage.setItem("odisea_subscriber_email", email);
        } catch (_) {}
      } else {
        feedback.textContent = ui.subscribeError;
        feedback.className = "subscribe-feedback error";
        feedback.hidden = false;
      }
    } catch (err) {
      console.error("Subscription error:", err);
      feedback.textContent = ui.subscribeError;
      feedback.className = "subscribe-feedback error";
      feedback.hidden = false;
    } finally {
      subscribeBtn.disabled = false;
      subscribeBtn.textContent = prevBtnText;
    }
  });
});
