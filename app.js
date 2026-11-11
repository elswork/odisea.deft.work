/* ==========================================================================
   odisea.deft.work — Motor Interactivo HOMERO (Karaoke Inverso, Audio y RRSS)
   ========================================================================== */

const UI_STRINGS = {
  es: {
    brandTitle: "La Odisea de la .IA",
    sidebarHeading: "Índice de Capítulos",
    sidebarSubtitle: "Crónica real de la Iniciativa Ciudadana Europea ECI(2026)000012",
    downloadsHeading: "Formatos Abiertos (Homero)",
    sideEpub: "📖 Descargar eBook (.epub)",
    sidePdf: "📄 Descargar Libro (.pdf)",
    sideMp3: "🎧 Descargar Audiolibro (.mp3)",
    githubHeading: "Libro Colaborativo (GitHub)",
    sideEdit: "✏️ Editar capítulo actual",
    sideRepo: "💻 Ver Repositorio en GitHub",
    chapterEditText: "Editar en GitHub",
    collabTitle: "🤝 Obra abierta y colaborativa",
    collabDesc: "¿Has visto una errata o quieres mejorar o ampliar este capítulo? Edítalo directamente en GitHub.",
    bottomEditText: "Editar este capítulo en GitHub",
    bottomRepoText: "Repositorio completo",
    themeBtnLabel: "Cambiar tema de lectura",
    readingModeOn: "📖 Modo Lectura",
    readingModeOff: "✕ Salir de Lectura",
    readingModeAria: "Activar modo lectura sin distracciones (Texto y Voz)",
    readingModeExitAria: "Salir del modo lectura sin distracciones",
    zenPrev: "← Capítulo anterior",
    zenNext: "Siguiente capítulo →",
    chapterPill: "Capítulo 0",
    readingTimePrefix: "Lectura:",
    byAuthor: "Por Eloy López Sánchez",
    audiobookLabel: "🎧 Audiolibro con Lectura Sincronizada («Karaoke Inverso»)",
    audiobookHint: "Haz clic en cualquier frase del texto para saltar a ese segundo",
    playerCollapse: "Minimizar",
    playerExpand: "Mostrar",
    playerCollapseAria: "Ocultar control de reproducción",
    playerExpandAria: "Mostrar control de reproducción",
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
      { num: "Capítulo 0", title: "Prólogo y Agradecimientos", active: true },
      { num: "Capítulo 1", title: "La idea más importante de mi vida", active: false },
      { num: "Capítulo 2", title: "El proyecto Anticitera", active: false },
      { num: "Capítulo 3", title: "La Iniciativa Ciudadana Europea", active: false },
      { num: "Capítulo 4", title: "6 de octubre: La resolución de la Unión Europea", active: false }
    ],
    nextTeaser: `<div class="next-chapter-teaser is-clickable" onclick="goToChapter(1)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); goToChapter(1);}" role="button" tabindex="0" aria-label="Leer Capítulo 2"><div class="next-chapter-header"><strong>En el próximo capítulo (Capítulo 2)</strong><span class="next-chapter-cta-badge">Leer Capítulo 2 →</span></div><div><strong>El proyecto Anticitera</strong>: El nacimiento de la iniciativa, el debate con los primeros gigantes tech y el descubrimiento de la «Reserva Excepcional».</div></div>`,
    ctaTitle: "Sé parte de esta historia y ayúdanos a conseguir el millón de firmas",
    ctaDesc: "Este relato se escribe capítulo a capítulo hasta alcanzar el millón de firmas ciudadanas que obligarán a Europa a crear la Denominación de Origen .ia.",
    card1Title: "1. Apúntate a nuestra lista de correo",
    card1Desc: "Te mantendremos informado de todas las novedades de la iniciativa, nuevos capítulos y el aviso directo en el instante en que se abra la urna oficial de votación.",
    emailLabel: "Tu correo electrónico",
    emailHint: "Formato: nombre@ejemplo.com (sin spam, solo novedades y aviso de firma)",
    emailError: "Por favor, introduce una dirección de correo válida.",
    subscribeBtn: "Apuntarme a la lista (.ia)",
    subscribeLoading: "⏳ Registrando suscripción...",
    subscribeSuccess: "✅ ¡Suscripción confirmada! Te mantendremos informado de todas las novedades y del aviso prioritario de firma.",
    subscribeError: "❌ No se pudo registrar. Por favor, inténtalo de nuevo en unos momentos.",
    card2Title: "2. Urna Oficial de la Unión Europea",
    card2Desc: "En España y en la UE basta con tu Nombre y DNI (lleva menos de 45 segundos). Conoce la iniciativa oficial y comprométete con el 6 de abril.",
    euBtnText: "Ir a la Plataforma Oficial ICE →"
  },
  en: {
    brandTitle: "The .IA Odyssey",
    sidebarHeading: "Chapter Index",
    sidebarSubtitle: "True chronicle of European Citizens' Initiative ECI(2026)000012",
    downloadsHeading: "Open Formats (Homero)",
    sideEpub: "📖 Download eBook (.epub)",
    sidePdf: "📄 Download Book (.pdf)",
    sideMp3: "🎧 Download Audiobook (.mp3)",
    githubHeading: "Collaborative Book (GitHub)",
    sideEdit: "✏️ Edit current chapter",
    sideRepo: "💻 View Repository on GitHub",
    chapterEditText: "Edit on GitHub",
    collabTitle: "🤝 Open & collaborative work",
    collabDesc: "Spotted a typo or want to improve or expand this chapter? Edit it directly on GitHub.",
    bottomEditText: "Edit this chapter on GitHub",
    bottomRepoText: "Full repository",
    themeBtnLabel: "Toggle reading theme",
    readingModeOn: "📖 Reading Mode",
    readingModeOff: "✕ Exit Reading",
    readingModeAria: "Activate distraction-free reading mode (Text & Voice)",
    readingModeExitAria: "Exit distraction-free reading mode",
    zenPrev: "← Previous chapter",
    zenNext: "Next chapter →",
    chapterPill: "Chapter 0",
    readingTimePrefix: "Read time:",
    byAuthor: "By Eloy López Sánchez",
    audiobookLabel: "🎧 Audiobook with Synchronized Read-Along ('Inverse Karaoke')",
    audiobookHint: "Click on any sentence in the text to jump to that exact moment",
    playerCollapse: "Minimize",
    playerExpand: "Show",
    playerCollapseAria: "Hide playback controls",
    playerExpandAria: "Show playback controls",
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
      { num: "Chapter 0", title: "Prologue and Acknowledgments", active: true },
      { num: "Chapter 1", title: "The Most Important Idea of My Life", active: false },
      { num: "Chapter 2", title: "The Antikythera Project", active: false },
      { num: "Chapter 3", title: "The European Citizens' Initiative", active: false },
      { num: "Chapter 4", title: "October 6: The European Union Resolution", active: false }
    ],
    nextTeaser: `<div class="next-chapter-teaser is-clickable" onclick="goToChapter(1)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); goToChapter(1);}" role="button" tabindex="0" aria-label="Read Chapter 2"><div class="next-chapter-header"><strong>In the next chapter (Chapter 2)</strong><span class="next-chapter-cta-badge">Read Chapter 2 →</span></div><div><strong>The Antikythera project</strong>: The birth of the initiative, early tech discussions, and the discovery of the "Exceptional Reservation".</div></div>`,
    ctaTitle: "Be part of this story and help us reach one million signatures",
    ctaDesc: "This chronicle unfolds chapter by chapter to gather the one million citizen signatures needed to establish the European .ia Designation of Origin.",
    card1Title: "1. Join our mailing list",
    card1Desc: "We will keep you informed of all initiative updates, new chapters, and the priority alert the moment the official EU ballot box opens.",
    emailLabel: "Your email address",
    emailHint: "Format: you@example.com (zero spam, only news and ballot alert)",
    emailError: "Please enter a valid email address.",
    subscribeBtn: "Join the mailing list (.ia)",
    subscribeLoading: "⏳ Registering subscription...",
    subscribeSuccess: "✅ Subscription confirmed! We will keep you updated on all news and the priority signing alert.",
    subscribeError: "❌ Could not register. Please try again in a few moments.",
    card2Title: "2. Official European Union Ballot Box",
    card2Desc: "Signing an official European Citizens' Initiative takes less than 45 seconds with your national ID. Explore the official initiative and join the April 6 launch.",
    euBtnText: "Go to Official ECI Campaign →"
  },
  fr: {
    brandTitle: "L'Odyssée de la .IA",
    sidebarHeading: "Index des chapitres",
    sidebarSubtitle: "Chronique réelle de l'Initiative Citoyenne Européenne ECI(2026)000012",
    downloadsHeading: "Formats Ouverts (Homero)",
    sideEpub: "📖 Télécharger eBook (.epub)",
    sidePdf: "📄 Télécharger Livre (.pdf)",
    sideMp3: "🎧 Télécharger Livre audio (.mp3)",
    themeBtnLabel: "Changer de thème",
    chapterPill: "Chapitre 1",
    readingTimePrefix: "Lecture :",
    byAuthor: "Par Eloy López Sánchez",
    audiobookLabel: "🎧 Livre audio synchronisé (« Karaoké inversé »)",
    audiobookHint: "Cliquez sur une phrase pour sauter à ce passage",
    playText: "▶ Écouter le chapitre",
    pauseText: "⏸ Pause",
    autoscrollText: "Défilement auto",
    shareTitle: "Partager ce chapitre",
    shareDesc: "Chaque citoyen qui lit cette histoire nous rapproche du million de signatures en Europe.",
    copyLinkText: "🔗 Copier le lien",
    copiedText: "✅ Lien copié !",
    sponsorTitle: "Soutenez l'Odyssée (.ia)",
    sponsorDesc: "Soutenez la campagne citoyenne européenne et le développement ouvert d'Homero.",
    sponsorBtn: "💳 Soutenir via PayPal / Carte",
    sponsorQrLabel: "Scanner pour donner",
    card1Title: "1. Rejoignez notre liste de diffusion",
    card1Desc: "Nous vous tiendrons informé de toutes les nouveautés de l'initiative, des nouveaux chapitres et de l'alerte prioritaire dès l'ouverture du vote officiel.",
    emailLabel: "Votre adresse e-mail",
    emailHint: "Format : nom@exemple.com (aucun spam, uniquement les actualités)",
    emailError: "Veuillez saisir une adresse e-mail valide.",
    subscribeBtn: "Rejoindre la liste (.ia)",
    subscribeLoading: "⏳ Enregistrement...",
    subscribeSuccess: "✅ Inscription confirmée ! Nous vous tiendrons informé de toutes les actualités.",
    subscribeError: "❌ Erreur. Veuillez réessayer dans quelques instants.",
    card2Title: "2. Urne officielle de l'Union Européenne",
    card2Desc: "Moins de 45 secondes pour signer avec votre identité nationale. Découvrez l'initiative officielle.",
    euBtnText: "Accéder à la plateforme ICE →"
  },
  pt: {
    brandTitle: "A Odisseia da .IA",
    sidebarHeading: "Índice de Capítulos",
    sidebarSubtitle: "Crónica real da Iniciativa de Cidadania Europeia ECI(2026)000012",
    downloadsHeading: "Formatos Abertos (Homero)",
    sideEpub: "📖 Descarregar eBook (.epub)",
    sidePdf: "📄 Descarregar Livro (.pdf)",
    sideMp3: "🎧 Descarregar Audiolivro (.mp3)",
    themeBtnLabel: "Alternar tema de leitura",
    chapterPill: "Capítulo 1",
    readingTimePrefix: "Leitura:",
    byAuthor: "Por Eloy López Sánchez",
    audiobookLabel: "🎧 Audiolivro com Leitura Sincronizada («Karaoke Inverso»)",
    audiobookHint: "Clique em qualquer frase para saltar para esse momento",
    playText: "▶ Ouvir capítulo",
    pauseText: "⏸ Pausar narração",
    autoscrollText: "Seguir leitura",
    shareTitle: "Partilhar este capítulo",
    shareDesc: "Cada pessoa que lê ou ouve esta história aproxima-nos de um milhão de assinaturas na Europa.",
    copyLinkText: "🔗 Copiar ligação",
    copiedText: "✅ Ligação copiada!",
    sponsorTitle: "Patrocine a Odisseia (.ia)",
    sponsorDesc: "Apoie a campanha europeia independente e o desenvolvimento aberto de Homero.",
    sponsorBtn: "💳 Patrocinar via PayPal / Cartão",
    sponsorQrLabel: "Digitalize para doar",
    card1Title: "1. Registe-se na nossa lista de novidades",
    card1Desc: "Mantê-lo-emos informado de todas as novidades da iniciativa, novos capítulos e o aviso prioritário na abertura oficial da votação.",
    emailLabel: "O seu e-mail",
    emailHint: "Formato: nome@exemplo.com (zero spam, apenas novidades e aviso de assinatura)",
    emailError: "Por favor, introduza um endereço de e-mail válido.",
    subscribeBtn: "Entrar na lista (.ia)",
    subscribeLoading: "⏳ A registar...",
    subscribeSuccess: "✅ Inscrição confirmada! Iremos mantê-lo informado.",
    subscribeError: "❌ Não foi possível registar. Tente novamente dentro de momentos.",
    card2Title: "2. Urna Oficial da União Europeia",
    card2Desc: "Assinar a iniciativa cidadã oficial leva menos de 45 segundos com a sua identificação nacional.",
    euBtnText: "Ir para a Plataforma Oficial ICE →"
  },
  el: {
    brandTitle: "Η Οδύσσεια της .ΙΑ",
    sidebarHeading: "Ευρετήριο Κεφαλαίων",
    sidebarSubtitle: "Πραγματικό χρονικό της Ευρωπαϊκής Πρωτοβουλίας Πολιτών ECI(2026)000012",
    downloadsHeading: "Ανοιχτές Μορφές (Homero)",
    sideEpub: "📖 Λήψη eBook (.epub)",
    sidePdf: "📄 Λήψη Βιβλίου (.pdf)",
    sideMp3: "🎧 Λήψη Ηχητικού Βιβλίου (.mp3)",
    themeBtnLabel: "Αλλαγή θέματος",
    chapterPill: "Κεφάλαιο 1",
    readingTimePrefix: "Χρόνος ανάγνωσης:",
    byAuthor: "Από τον Eloy López Sánchez",
    audiobookLabel: "🎧 Ηχητικό βιβλίο με συγχρονισμένη ανάγνωση",
    audiobookHint: "Κάντε κλικ σε οποιαδήποτε πρόταση για να μεταβείτε σε εκείνο το σημείο",
    playText: "▶ Ακρόαση κεφαλαίου",
    pauseText: "⏸ Παύση",
    autoscrollText: "Αυτόματη κύλιση",
    shareTitle: "Μοιραστείτε αυτό το κεφάλαιο",
    shareDesc: "Κάθε πολίτης που διαβάζει αυτή την ιστορία μάς φέρνει πιο κοντά στο ένα εκατομμύριο υπογραφές.",
    copyLinkText: "🔗 Αντιγραφή συνδέσμου",
    copiedText: "✅ Ο σύνδεσμος αντιγράφηκε!",
    sponsorTitle: "Υποστηρίξτε την Οδύσσεια (.ia)",
    sponsorDesc: "Ενισχύστε την ανεξάρτητη ευρωπαϊκή εκστρατεία και την ανοιχτή ανάπτυξη του Homero.",
    sponsorBtn: "💳 Υποστήριξη μέσω PayPal / Κάρτας",
    sponsorQrLabel: "Σαρώστε για δωρεά",
    card1Title: "1. Εγγραφείτε στη λίστα ενημερώσεων",
    card1Desc: "Θα σας κρατάμε ενήμερους για όλα τα νέα της πρωτοβουλίας, τα νέα κεφάλαια και το άνοιγμα της επίσημης ψηφοφορίας.",
    emailLabel: "Το email σας",
    emailHint: "Μορφή: onoma@example.com (χωρίς ανεπιθύμητα μηνύματα)",
    emailError: "Παρακαλώ εισαγάγετε μια έγκυρη διεύθυνση email.",
    subscribeBtn: "Εγγραφή στη λίστα (.ia)",
    subscribeLoading: "⏳ Καταχώριση...",
    subscribeSuccess: "✅ Επιβεβαιώθηκε! Θα σας κρατάμε ενήμερους.",
    subscribeError: "❌ Σφάλμα. Παρακαλώ δοκιμάστε ξανά αργότερα.",
    card2Title: "2. Επίσημη Ευρωπαϊκή Πρωτοβουλία Πολιτών",
    card2Desc: "Η υπογραφή διαρκεί λιγότερο από 45 δευτερόλεπτα με την ταυτότητά σας.",
    euBtnText: "Μετάβαση στην Επίσημη Πλατφόρμα ECI →"
  },
  hu: {
    brandTitle: "A .IA Odüsszeia",
    sidebarHeading: "Fejezetjegyzék",
    sidebarSubtitle: "Az ECI(2026)000012 európai polgári kezdeményezés valós krónikája",
    downloadsHeading: "Nyílt formátumok (Homero)",
    sideEpub: "📖 eBook letöltése (.epub)",
    sidePdf: "📄 Könyv letöltése (.pdf)",
    sideMp3: "🎧 Hangoskönyv letöltése (.mp3)",
    themeBtnLabel: "Téma váltása",
    chapterPill: "1. fejezet",
    readingTimePrefix: "Olvasási idő:",
    byAuthor: "Írta: Eloy López Sánchez",
    audiobookLabel: "🎧 Hangoskönyv szinkronizált olvasással",
    audiobookHint: "Kattintson bármely mondatra a hang odaugrásához",
    playText: "▶ Fejezet meghallgatása",
    pauseText: "⏸ Szünet",
    autoscrollText: "Automatikus görgetés",
    shareTitle: "Oszd meg ezt a fejezetet",
    shareDesc: "Minden olvasó közelebb visz minket az egymillió európai aláíráshoz.",
    copyLinkText: "🔗 Hivatkozás másolása",
    copiedText: "✅ Hivatkozás másolva!",
    sponsorTitle: "Támogasd az Odüsszeiát (.ia)",
    sponsorDesc: "Támogasd a független európai kampányt és a Homero nyílt forráskódú fejlesztését.",
    sponsorBtn: "💳 Támogatás PayPal / Kártya útján",
    sponsorQrLabel: "Beolvasás az adományozáshoz",
    card1Title: "1. Iratkozz fel hírlevelünkre",
    card1Desc: "Értesítünk minden újdonságról, az új fejezetekről és a hivatalos szavazás indulásáról.",
    emailLabel: "E-mail címed",
    emailHint: "Formátum: nev@pelda.hu (nulla spam)",
    emailError: "Kérjük, adj meg érvényes e-mail címet.",
    subscribeBtn: "Feliratkozás a listára (.ia)",
    subscribeLoading: "⏳ Regisztráció...",
    subscribeSuccess: "✅ Sikeres feliratkozás! Értesíteni fogunk minden hírről.",
    subscribeError: "❌ Hiba történt. Kérjük, próbáld újra később.",
    card2Title: "2. Hivatalos Európai Uniós Szavazás",
    card2Desc: "Az aláírás kevesebb mint 45 másodpercet vesz igénybe a személyazonosítóddal.",
    euBtnText: "Ugrás a Hivatalos ECI oldalra →"
  },
  hr: {
    brandTitle: "Odiseja .IA",
    sidebarHeading: "Indeks poglavlja",
    sidebarSubtitle: "Stvarna kronika Europske građanske inicijative ECI(2026)000012",
    downloadsHeading: "Otvoreni formati (Homero)",
    sideEpub: "📖 Preuzmi eBook (.epub)",
    sidePdf: "📄 Preuzmi Knjigu (.pdf)",
    sideMp3: "🎧 Preuzmi Zvučnu knjigu (.mp3)",
    themeBtnLabel: "Promijeni temu",
    chapterPill: "Poglavlje 1",
    readingTimePrefix: "Vrijeme čitanja:",
    byAuthor: "Autor: Eloy López Sánchez",
    audiobookLabel: "🎧 Zvučna knjiga sa sinkroniziranim tekstom",
    audiobookHint: "Kliknite na bilo koju rečenicu za skok",
    playText: "▶ Slušaj poglavlje",
    pauseText: "⏸ Pauza",
    autoscrollText: "Automatsko pomicanje",
    shareTitle: "Podijelite ovo poglavlje",
    shareDesc: "Svaki čitatelj približava nas milijunu potpisa u Europi.",
    copyLinkText: "🔗 Kopiraj poveznicu",
    copiedText: "✅ Poveznica kopirana!",
    sponsorTitle: "Podržite Odiseju (.ia)",
    sponsorDesc: "Podržite neovisnu europsku kampanju i otvoreni razvoj Homera.",
    sponsorBtn: "💳 Podržite putem PayPala / Kartice",
    sponsorQrLabel: "Skenirajte za donaciju",
    card1Title: "1. Prijavite se na našu listu obavijesti",
    card1Desc: "Obavještavat ćemo vas o svim novostima inicijative, novim poglavljima i otvaranju službenog glasovanja.",
    emailLabel: "Vaša e-pošta",
    emailHint: "Format: ime@primjer.hr (bez spama)",
    emailError: "Unesite valjanu adresu e-pošte.",
    subscribeBtn: "Prijavite se na listu (.ia)",
    subscribeLoading: "⏳ Registracija...",
    subscribeSuccess: "✅ Prijava potvrđena! Obavještavat ćemo vas o svim novostima.",
    subscribeError: "❌ Došlo je do pogreške. Pokušajte ponovno uskoro.",
    card2Title: "2. Službena Europska građanska inicijativa",
    card2Desc: "Potpisivanje traje manje od 45 sekundi s vašim osobnim dokumentom.",
    euBtnText: "Idi na službenu ECI platformu →"
  },
  zh: {
    brandTitle: ".IA 奥德赛",
    sidebarHeading: "章节目录",
    sidebarSubtitle: "欧洲公民倡议 ECI(2026)000012 真实记录",
    downloadsHeading: "开放格式 (Homero)",
    sideEpub: "📖 下载电子书 (.epub)",
    sidePdf: "📄 下载图书 (.pdf)",
    sideMp3: "🎧 下载有声书 (.mp3)",
    themeBtnLabel: "切换主题",
    chapterPill: "第 1 章",
    readingTimePrefix: "阅读时间：",
    byAuthor: "作者：埃洛伊·洛佩斯·桑切斯 (Eloy López Sánchez)",
    audiobookLabel: "🎧 逐词同步有声书（反向卡拉OK）",
    audiobookHint: "点击任意句子即可立即跳转到该时刻播放",
    playText: "▶ 播放章节",
    pauseText: "⏸ 暂停朗读",
    autoscrollText: "随读滚动",
    shareTitle: "分享本章故事",
    shareDesc: "每一位读者与听众，都在让我们离欧洲百万民众签名更近一步。",
    copyLinkText: "🔗 复制链接",
    copiedText: "✅ 链接已复制！",
    sponsorTitle: "支持 .ia 史诗计划",
    sponsorDesc: "独立资助欧洲公民倡议行动与 Homero 开源工具开发。",
    sponsorBtn: "💳 通过 PayPal / 信用卡赞助",
    sponsorQrLabel: "扫码支持",
    card1Title: "1. 订阅最新动态邮件列表",
    card1Desc: "我们将第一时间为您推送倡议进展、最新章节以及官方投票箱开启的优先提醒。",
    emailLabel: "您的电子邮箱",
    emailHint: "格式：you@example.com（绝无垃圾邮件，仅限核心动态）",
    emailError: "请输入有效的电子邮箱地址。",
    subscribeBtn: "加入邮件动态列表 (.ia)",
    subscribeLoading: "⏳ 正在提交订阅...",
    subscribeSuccess: "✅ 订阅成功！我们将为您推送最新倡议动态与签名提醒。",
    subscribeError: "❌ 提交失败，请稍后重试。",
    card2Title: "2. 欧盟官方公民倡议投票箱",
    card2Desc: "欧洲公民凭借身份证件签署官方倡议只需不到 45 秒。深入了解并参与 4 月 6 日行动。",
    euBtnText: "前往欧盟官方 ECI 平台 →"
  },
  ru: {
    brandTitle: "Одиссея .IA",
    sidebarHeading: "Оглавление глав",
    sidebarSubtitle: "Реальная хроника Европейской гражданской инициативы ECI(2026)000012",
    downloadsHeading: "Открытые форматы (Homero)",
    sideEpub: "📖 Скачать eBook (.epub)",
    sidePdf: "📄 Скачать Книгу (.pdf)",
    sideMp3: "🎧 Скачать Аудиокнигу (.mp3)",
    themeBtnLabel: "Сменить тему",
    chapterPill: "Глава 1",
    readingTimePrefix: "Время чтения:",
    byAuthor: "Автор: Элой Лопес Санчес (Eloy López Sánchez)",
    audiobookLabel: "🎧 Синхронизированная аудиокнига («Обратное караоке»)",
    audiobookHint: "Нажмите на любое предложение, чтобы перейти к этому моменту",
    playText: "▶ Слушать главу",
    pauseText: "⏸ Пауза",
    autoscrollText: "Автопрокрутка",
    shareTitle: "Поделиться этой главой",
    shareDesc: "Каждый читатель приближает нас к миллиону подписей по всей Европе.",
    copyLinkText: "🔗 Скопировать ссылку",
    copiedText: "✅ Ссылка скопирована!",
    sponsorTitle: "Поддержать Одиссею (.ia)",
    sponsorDesc: "Поддержите независимую европейскую кампанию и открытую разработку Homero.",
    sponsorBtn: "💳 Поддержать через PayPal / Карту",
    sponsorQrLabel: "Сканировать для пожертвования",
    card1Title: "1. Подпишитесь на список рассылки",
    card1Desc: "Мы будем информировать вас обо всех новостях инициативы, новых главах и открытии официального голосования.",
    emailLabel: "Ваш e-mail",
    emailHint: "Формат: name@example.com (без спама, только новости)",
    emailError: "Пожалуйста, введите корректный адрес электронной почты.",
    subscribeBtn: "Подписаться на рассылку (.ia)",
    subscribeLoading: "⏳ Регистрация...",
    subscribeSuccess: "✅ Подписка оформлена! Мы будем держать вас в курсе всех новостей.",
    subscribeError: "❌ Не удалось зарегистрироваться. Попробуйте чуть позже.",
    card2Title: "2. Официальная урна Европейского Союза",
    card2Desc: "Подписание инициативы занимает менее 45 секунд с вашим удостоверением личности.",
    euBtnText: "Перейти на официальную платформу ECI →"
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

  // Guardar progreso de lectura para el marcador
  saveReadingProgress(activeChapterIndex, currentTime);

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
  const shareText = `${chapterTitle} — La Odisea de la .IA (Iniciativa Ciudadana Europea ECI(2026)000012)`;

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

window.goToChapter = function (targetIdx) {
  renderLanguage(activeLang, targetIdx);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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
  if (window.updateReadingModeUI) window.updateReadingModeUI();

  const chNum = (chapter && typeof chapter.capitulo === "number") ? chapter.capitulo : activeChapterIndex;
  const totalPublished = chapters.length || 5;
  const humanIndex = activeChapterIndex + 1;
  document.getElementById("chapter-pill").textContent = effKey === "en"
    ? `Chapter ${chNum} (${humanIndex} of ${totalPublished})`
    : `Capítulo ${chNum} (${humanIndex} de ${totalPublished})`;
  document.getElementById("audiobook-label").textContent = ui.audiobookLabel;
  document.getElementById("audiobook-hint").textContent = ui.audiobookHint;
  updatePlayerToggleUI();
  document.getElementById("play-pause-btn").textContent = ui.playText;
  document.getElementById("autoscroll-text").textContent = ui.autoscrollText;

  const repoUrl = (window.HOMERO_BOOK && window.HOMERO_BOOK.libro && window.HOMERO_BOOK.libro.repositorio_url)
    ? window.HOMERO_BOOK.libro.repositorio_url.replace(/\/$/, "")
    : "https://github.com/elswork/odisea.deft.work";
  const repoBranch = (window.HOMERO_BOOK && window.HOMERO_BOOK.libro && window.HOMERO_BOOK.libro.rama_edicion)
    ? window.HOMERO_BOOK.libro.rama_edicion
    : "main";
  const editUrl = (chapter && chapter.edit_url)
    ? chapter.edit_url
    : `${repoUrl}/edit/${repoBranch}/capitulos/${effKey}/${chapter ? chapter.slug : "00-prologo-y-agradecimientos"}.md`;

  const topRepoEl = document.getElementById("top-repo-link");
  if (topRepoEl) topRepoEl.href = repoUrl;
  const sideRepoEl = document.getElementById("side-repo-link");
  if (sideRepoEl) {
    sideRepoEl.href = repoUrl;
    sideRepoEl.textContent = ui.sideRepo || (effKey === "en" ? "💻 View Repository on GitHub" : "💻 Ver Repositorio en GitHub");
  }
  const sideEditEl = document.getElementById("side-edit-link");
  if (sideEditEl) {
    sideEditEl.href = editUrl;
    sideEditEl.textContent = ui.sideEdit || (effKey === "en" ? "✏️ Edit current chapter" : "✏️ Editar capítulo actual");
  }
  const ghHeadingEl = document.getElementById("github-heading");
  if (ghHeadingEl) {
    ghHeadingEl.textContent = ui.githubHeading || (effKey === "en" ? "Collaborative Book (GitHub)" : "Libro Colaborativo (GitHub)");
  }
  const chEditBtn = document.getElementById("chapter-edit-btn");
  if (chEditBtn) {
    chEditBtn.href = editUrl;
  }
  const chEditText = document.getElementById("chapter-edit-text");
  if (chEditText) {
    chEditText.textContent = ui.chapterEditText || (effKey === "en" ? "Edit on GitHub" : "Editar en GitHub");
  }
  const bottomEditBtn = document.getElementById("bottom-edit-btn");
  if (bottomEditBtn) bottomEditBtn.href = editUrl;
  const bottomRepoBtn = document.getElementById("bottom-repo-btn");
  if (bottomRepoBtn) bottomRepoBtn.href = repoUrl;
  const collabTitleEl = document.getElementById("collab-title");
  if (collabTitleEl) collabTitleEl.textContent = ui.collabTitle || (effKey === "en" ? "🤝 Open & collaborative work" : "🤝 Obra abierta y colaborativa");
  const collabDescEl = document.getElementById("collab-desc");
  if (collabDescEl) collabDescEl.textContent = ui.collabDesc || (effKey === "en" ? "Spotted a typo or want to improve or expand this chapter? Edit it directly on GitHub." : "¿Has visto una errata o quieres mejorar o ampliar este capítulo? Edítalo directamente en GitHub.");
  const bottomEditTextEl = document.getElementById("bottom-edit-text");
  if (bottomEditTextEl) bottomEditTextEl.textContent = ui.bottomEditText || (effKey === "en" ? "Edit this chapter on GitHub" : "Editar este capítulo en GitHub");
  const bottomRepoTextEl = document.getElementById("bottom-repo-text");
  if (bottomRepoTextEl) bottomRepoTextEl.textContent = ui.bottomRepoText || (effKey === "en" ? "Full repository" : "Repositorio completo");

  if (chapter) {
    document.getElementById("reading-time").innerHTML =
      `${ui.readingTimePrefix} ${chapter.reading_time} · ${chapter.author_html || ui.byAuthor}`;
    document.getElementById("chapter-title").innerHTML = chapter.title_html || chapter.title;
    document.getElementById("chapter-lead").innerHTML = chapter.subtitle_html || chapter.subtitle;

    // Actualizar Media Session API (pantalla de bloqueo, coche y auriculares)
    setupMediaSession(chapter);

    let teaserHtml = "";
    const teaserData = {
      es: [
        {
          fromCap: 0,
          num: 1,
          badge: "En el próximo capítulo (Capítulo 1)",
          action: "Leer Capítulo 1",
          title: "La idea más importante de mi vida",
          summary: "¿Por qué la tecnología más poderosa de nuestro tiempo lleva el sello de un paraíso caribeño y cómo nació la idea de crear la Denominación de Origen .ia?"
        },
        {
          fromCap: 1,
          num: 2,
          badge: "En el próximo capítulo (Capítulo 2)",
          action: "Leer Capítulo 2",
          title: "El proyecto Anticitera",
          summary: "El nacimiento de la iniciativa, el debate con los primeros gigantes tech y el descubrimiento de la «Reserva Excepcional»."
        },
        {
          fromCap: 2,
          num: 3,
          badge: "En el próximo capítulo (Capítulo 3)",
          action: "Leer Capítulo 3",
          title: "La Iniciativa Ciudadana Europea",
          summary: "Siete llaves en siete países para obligar a Bruselas a crear la Denominación de Origen .ia."
        },
        {
          fromCap: 3,
          num: 4,
          badge: "En el próximo capítulo (Capítulo 4)",
          action: "Leer Capítulo 4",
          title: "6 de octubre: La resolución de la Unión Europea",
          summary: "El veredicto del Colegio de Comisarios en Estrasburgo y el horizonte del 6 de abril frente al millón de firmas."
        },
        {
          fromCap: 4,
          num: 5,
          badge: "Próximo capítulo (Capítulo 5)",
          upcoming: true,
          badgeUpcoming: "Próximamente",
          title: "La Denominación de Origen que el mundo necesita",
          summary: "Cómo explicar en la mesa de un bar por qué un sello de calidad europeo en la IA protegerá el trabajo, la salud y los datos de nuestros hijos."
        }
      ],
      en: [
        {
          fromCap: 0,
          num: 1,
          badge: "In the next chapter (Chapter 1)",
          action: "Read Chapter 1",
          title: "The Most Important Idea of My Life",
          summary: "Why the most powerful technology of our time bears the stamp of a Caribbean tax haven and how the idea of creating the .ia Designation of Origin was born."
        },
        {
          fromCap: 1,
          num: 2,
          badge: "In the next chapter (Chapter 2)",
          action: "Read Chapter 2",
          title: "The Antikythera Project",
          summary: "The birth of the initiative, the early tech discussions, and the discovery of the \"Exceptional Reservation\"."
        },
        {
          fromCap: 2,
          num: 3,
          badge: "In the next chapter (Chapter 3)",
          action: "Read Chapter 3",
          title: "The European Citizens' Initiative",
          summary: "Seven keys in seven countries to oblige Brussels to create the .ia Designation of Origin."
        },
        {
          fromCap: 3,
          num: 4,
          badge: "In the next chapter (Chapter 4)",
          action: "Read Chapter 4",
          title: "October 6: The European Union Resolution",
          summary: "The legal verdict of the Strasbourg College of Commissioners and the path to April 6 for the one million signatures threshold."
        },
        {
          fromCap: 4,
          num: 5,
          badge: "Upcoming chapter (Chapter 5)",
          upcoming: true,
          badgeUpcoming: "Coming Soon",
          title: "The Designation of Origin the World Needs",
          summary: "How explaining around a bar table why a European quality mark in AI protects our work, health, and children."
        }
      ]
    };

    const langTeasers = teaserData[effKey] || teaserData.es;
    const currentTeaser = langTeasers.find((t) => t.fromCap === chNum);

    if (currentTeaser) {
      const nextIdx = activeChapterIndex + 1;
      const nextChapterObj = chapters[nextIdx] || null;
      const displayTitle = (nextChapterObj && nextChapterObj.title) ? nextChapterObj.title : currentTeaser.title;

      if (!currentTeaser.upcoming && nextIdx < chapters.length) {
        teaserHtml = `
          <div class="next-chapter-teaser is-clickable" onclick="goToChapter(${nextIdx})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); goToChapter(${nextIdx});}" role="button" tabindex="0" aria-label="${currentTeaser.action}: ${displayTitle}">
            <div class="next-chapter-header">
              <strong>${currentTeaser.badge}</strong>
              <span class="next-chapter-cta-badge">${currentTeaser.action} →</span>
            </div>
            <div><strong>${displayTitle}</strong>: ${currentTeaser.summary}</div>
          </div>
        `;
      } else {
        teaserHtml = `
          <div class="next-chapter-teaser is-upcoming-teaser" tabindex="0">
            <div class="next-chapter-header">
              <strong>${currentTeaser.badge}</strong>
              <span class="upcoming-badge">${currentTeaser.badgeUpcoming || (effKey === "en" ? "Coming Soon" : "Próximamente")}</span>
            </div>
            <div><strong>${displayTitle}</strong>: ${currentTeaser.summary}</div>
          </div>
        `;
      }
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
  const completedCaps = getCompletedChapters();
  if (chapters.length > 0) {
    chapters.forEach((ch, idx) => {
      const li = document.createElement("li");
      const isActive = idx === activeChapterIndex;
      const isCompleted = completedCaps.includes(idx);
      li.className = `chapter-item ${isActive ? "is-active" : "is-clickable"}`;
      li.style.cursor = "pointer";
      const numLabel = effKey === "en" ? `Chapter ${ch.capitulo}` : `Capítulo ${ch.capitulo}`;
      const chEditHref = ch.edit_url || `${repoUrl}/edit/${repoBranch}/capitulos/${effKey}/${ch.slug}.md`;
      const editAria = effKey === "en"
        ? `Edit ${numLabel}: ${ch.title} on GitHub`
        : `Editar ${numLabel}: ${ch.title} en GitHub`;
      const completedIcon = isCompleted ? '<span class="chapter-completed-badge" title="Capítulo completado">✓</span>' : '';

      li.innerHTML = `
        <div class="chapter-item-row">
          <div class="chapter-item-main">
            <span class="chapter-num">${numLabel}</span>${ch.title}${completedIcon}
          </div>
          <a href="${chEditHref}" target="_blank" rel="noopener noreferrer" class="chapter-item-edit" aria-label="${editAria}">
            <span aria-hidden="true">✏️</span>
          </a>
        </div>
      `;
      li.addEventListener("click", (e) => {
        if (e.target.closest(".chapter-item-edit")) return;
        renderLanguage(activeLang, idx);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      listEl.appendChild(li);
    });

    const upcomingLi = document.createElement("li");
    upcomingLi.className = "chapter-item is-upcoming";
    const upNum = effKey === "en" ? "Chapter 5" : "Capítulo 5";
    const upTitle = effKey === "en" ? "The Designation of Origin the World Needs (Upcoming)" : "La Denominación de Origen que el mundo necesita (Próximamente)";
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

    // Marcar capítulo como completado
    markChapterCompleted(activeChapterIndex);

    // 1.2 Autoplay continuo al siguiente capítulo si existe
    const bundleLang =
      window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[activeLang] : null;
    const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
    if (activeChapterIndex + 1 < chapters.length) {
      setTimeout(() => {
        goToChapter(activeChapterIndex + 1);
        setTimeout(() => {
          const nextAudio = document.getElementById("chapter-audio");
          if (nextAudio) {
            nextAudio.play().catch(() => {});
          }
        }, 400);
      }, 1000);
    }
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

  initPlayerCollapse();
  attachSentenceClickToSeek();
}

/* ==========================================================================
   Mostrar / Ocultar Control de Reproducción (Two-State Toggle conforme a modern-web-guidance)
   ========================================================================== */
let isPlayerCollapsed = false;

function updatePlayerToggleUI() {
  const toggleBtn = document.getElementById("player-toggle-btn");
  const player = document.getElementById("audiobook-player");
  const toggleText = document.getElementById("player-toggle-text");
  if (!toggleBtn || !player) return;

  const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
  if (isPlayerCollapsed) {
    player.classList.add("is-collapsed");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", ui.playerExpandAria || "Mostrar control de reproducción");
    if (toggleText) toggleText.textContent = ui.playerExpand || "Mostrar";
  } else {
    player.classList.remove("is-collapsed");
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", ui.playerCollapseAria || "Ocultar control de reproducción");
    if (toggleText) toggleText.textContent = ui.playerCollapse || "Minimizar";
  }
}

function initPlayerCollapse() {
  const toggleBtn = document.getElementById("player-toggle-btn");
  if (!toggleBtn) return;

  try {
    const saved = localStorage.getItem("odisea-player-collapsed");
    if (saved === "true") {
      isPlayerCollapsed = true;
    }
  } catch (e) {}

  updatePlayerToggleUI();

  toggleBtn.addEventListener("click", () => {
    isPlayerCollapsed = !isPlayerCollapsed;
    try {
      localStorage.setItem("odisea-player-collapsed", isPlayerCollapsed ? "true" : "false");
    } catch (e) {}
    updatePlayerToggleUI();
  });
}

/* ==========================================================================
   Control de Modo Claro / Oscuro (Two-State Toggle conforme a modern-web-guidance)
   ========================================================================== */
/* ==========================================================================
   Media Session API (Pantalla de Bloqueo, Smartwatch, CarPlay / Android Auto)
   ========================================================================== */
function setupMediaSession(chapter) {
  if (!("mediaSession" in navigator)) return;

  const audio = document.getElementById("chapter-audio");
  const chNum = typeof chapter.capitulo === "number" ? chapter.capitulo : activeChapterIndex;
  const numLabel = activeLang === "en" ? `Chapter ${chNum}` : `Capítulo ${chNum}`;

  navigator.mediaSession.metadata = new MediaMetadata({
    title: `${numLabel}: ${chapter.title}`,
    artist: "Eloy López Sánchez",
    album: "La Odisea de la .IA (ECI(2026)000012)",
    artwork: [
      { src: "img/portada-la-odisea-de-la-ia.jpg", sizes: "512x512", type: "image/jpeg" },
      { src: "img/og-odisea.jpg", sizes: "1200x630", type: "image/jpeg" }
    ]
  });

  navigator.mediaSession.setActionHandler("play", () => {
    audio.play().catch(() => {});
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    audio.pause();
  });
  navigator.mediaSession.setActionHandler("seekbackward", (details) => {
    const skip = details.seekOffset || 10;
    audio.currentTime = Math.max(audio.currentTime - skip, 0);
  });
  navigator.mediaSession.setActionHandler("seekforward", (details) => {
    const skip = details.seekOffset || 10;
    audio.currentTime = Math.min(audio.currentTime + skip, audio.duration || 0);
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    if (activeChapterIndex > 0) {
      goToChapter(activeChapterIndex - 1);
    }
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    const bundleLang =
      window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[activeLang] : null;
    const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
    if (activeChapterIndex + 1 < chapters.length) {
      goToChapter(activeChapterIndex + 1);
    }
  });
}

/* ==========================================================================
   Marcador de Lectura y Capítulos Completados (LocalStorage)
   ========================================================================== */
function getCompletedChapters() {
  try {
    const saved = localStorage.getItem("odisea_completed_chapters");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function markChapterCompleted(chapterIdx) {
  try {
    const list = getCompletedChapters();
    if (!list.includes(chapterIdx)) {
      list.push(chapterIdx);
      localStorage.setItem("odisea_completed_chapters", JSON.stringify(list));
      const li = document.querySelectorAll("#chapter-list .chapter-item")[chapterIdx];
      if (li && !li.querySelector(".chapter-completed-badge")) {
        const titleEl = li.querySelector(".chapter-item-main");
        if (titleEl) {
          titleEl.insertAdjacentHTML("beforeend", '<span class="chapter-completed-badge" title="Capítulo completado">✓</span>');
        }
      }
    }
  } catch (e) {}
}

let lastSaveTime = 0;
function saveReadingProgress(chapterIdx, currentTime) {
  const now = Date.now();
  if (now - lastSaveTime < 3000) return; // guardar máx cada 3s
  lastSaveTime = now;
  try {
    localStorage.setItem(
      "odisea_reading_bookmark",
      JSON.stringify({
        chapterIndex: chapterIdx,
        time: currentTime,
        date: now
      })
    );
  } catch (e) {}
}

function initBookmarkResume() {
  try {
    const savedRaw = localStorage.getItem("odisea_reading_bookmark");
    if (!savedRaw) return;
    const saved = JSON.parse(savedRaw);
    if (typeof saved.chapterIndex !== "number") return;

    const banner = document.getElementById("resume-banner");
    const resumeInfo = document.getElementById("resume-info");
    const resumeBtn = document.getElementById("resume-btn");
    if (!banner || !resumeBtn) return;

    const bundleLang =
      window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[activeLang] : null;
    const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
    const targetChapter = chapters[saved.chapterIndex];
    if (!targetChapter) return;

    const chNum = typeof targetChapter.capitulo === "number" ? targetChapter.capitulo : saved.chapterIndex;
    const timeFormatted = formatSeconds(saved.time || 0);
    resumeInfo.textContent = `Capítulo ${chNum} (${timeFormatted})`;
    banner.hidden = false;

    resumeBtn.addEventListener("click", () => {
      goToChapter(saved.chapterIndex);
      setTimeout(() => {
        const audio = document.getElementById("chapter-audio");
        if (audio && saved.time) {
          audio.currentTime = saved.time;
          syncKaraokeHighlight(saved.time);
        }
      }, 400);
      banner.hidden = true;
    });
  } catch (e) {}
}

/* ==========================================================================
   1.1 Deep-Linking por Frase y Popover de Citas en RRSS
   ========================================================================== */
function initSentenceSharePopover() {
  const popover = document.getElementById("sentence-share-popover");
  const copyBtn = document.getElementById("copy-sentence-link-btn");
  const shareXBtn = document.getElementById("share-sentence-x-btn");
  const shareWaBtn = document.getElementById("share-sentence-wa-btn");
  const tip = document.getElementById("sentence-share-tip");
  if (!popover || !copyBtn) return;

  let currentTargetSentence = null;
  let currentTargetSId = null;

  document.addEventListener("click", (e) => {
    // Si se pulsa dentro del popover, no cerrarlo
    if (e.target.closest("#sentence-share-popover")) return;

    const sent = e.target.closest(".hm-sentence");
    if (!sent) {
      popover.hidden = true;
      return;
    }

    // Si se hace doble clic o clic largo sobre frase, o clic con tecla Alt / toque sostenido
    // Para no entorpecer el salto de audio normal, mostramos popover si se pulsa sobre una frase
    const sId = parseInt(sent.getAttribute("data-s"), 10);
    currentTargetSentence = sent;
    currentTargetSId = sId;

    const rect = sent.getBoundingClientRect();
    popover.style.top = `${window.scrollY + rect.bottom + 6}px`;
    popover.style.left = `${Math.max(10, Math.min(window.scrollX + rect.left, window.innerWidth - 320))}px`;
    popover.hidden = false;
    tip.textContent = "";

    const cleanText = sent.innerText.trim();
    const shareUrl = `${window.location.origin}${window.location.pathname}?cap=${activeChapterIndex}&s=${sId}`;
    const quoteText = `«${cleanText.slice(0, 150)}${cleanText.length > 150 ? "..." : ""}» — La Odisea de la .IA`;

    shareXBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}&url=${encodeURIComponent(shareUrl)}`;
    shareWaBtn.href = `https://wa.me/?text=${encodeURIComponent(quoteText + " " + shareUrl)}`;
  });

  copyBtn.addEventListener("click", async () => {
    if (currentTargetSId === null) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?cap=${activeChapterIndex}&s=${currentTargetSId}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      tip.textContent = "✅ ¡Enlace copiado!";
      setTimeout(() => {
        popover.hidden = true;
        tip.textContent = "";
      }, 1600);
    } catch (err) {
      tip.textContent = "Enlace listo en URL";
    }
  });

  // Salto inicial por URL (?cap=X&s=Y)
  try {
    const params = new URLSearchParams(window.location.search);
    const capParam = params.get("cap");
    const sParam = params.get("s");
    if (capParam !== null) {
      const targetCap = parseInt(capParam, 10);
      if (!isNaN(targetCap)) {
        setTimeout(() => {
          goToChapter(targetCap);
          if (sParam !== null) {
            const targetS = parseInt(sParam, 10);
            setTimeout(() => {
              const targetEl = document.getElementById(`s-${targetS}`);
              if (targetEl) {
                targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
                targetEl.classList.add("is-active");
                if (activeSyncData) {
                  const sObj = (activeSyncData.sentences || []).find((s) => s.s === targetS);
                  if (sObj) {
                    const audio = document.getElementById("chapter-audio");
                    if (audio) {
                      audio.currentTime = sObj.start;
                      syncKaraokeHighlight(sObj.start);
                    }
                  }
                }
              }
            }, 500);
          }
        }, 300);
      }
    }
  } catch (e) {}
}

/* ==========================================================================
   3.1 Muro de Coautores y Colaboradores en GitHub (API Pública)
   ========================================================================== */
async function initGitHubContributors() {
  const container = document.getElementById("contributors-list");
  if (!container) return;

  try {
    const cached = sessionStorage.getItem("odisea_contributors");
    let contributors = cached ? JSON.parse(cached) : null;

    if (!contributors) {
      const res = await fetch("https://api.github.com/repos/elswork/odisea.deft.work/contributors?per_page=20");
      if (res.ok) {
        contributors = await res.json();
        sessionStorage.setItem("odisea_contributors", JSON.stringify(contributors));
      }
    }

    if (Array.isArray(contributors) && contributors.length > 0) {
      container.innerHTML = "";
      contributors.forEach((user) => {
        const chip = document.createElement("a");
        chip.className = "contributor-chip";
        chip.href = user.html_url;
        chip.target = "_blank";
        chip.rel = "noopener noreferrer";
        chip.title = `${user.login} (${user.contributions} aportaciones)`;
        chip.innerHTML = `
          <img src="${user.avatar_url}&s=48" alt="${user.login}" class="contributor-avatar" loading="lazy" width="24" height="24">
          <span>${user.login}</span>
          <span class="contributor-commits">${user.contributions}</span>
        `;
        container.appendChild(chip);
      });
    } else {
      container.innerHTML = '<span class="contributor-loading">Sé el primero en colaborar pulsando «✏️ Editar en GitHub»</span>';
    }
  } catch (err) {
    container.innerHTML = '<a href="https://github.com/elswork/odisea.deft.work/graphs/contributors" target="_blank" rel="noopener" class="contributor-chip">Ver colaboradores en GitHub →</a>';
  }
}

/* ==========================================================================
   3.2 Guardar el 6 de Abril en mi Calendario (.ICS y enlaces directos)
   ========================================================================== */
function initCalendarReminder() {
  const btn = document.getElementById("cal-reminder-btn");
  const status = document.getElementById("cal-reminder-status");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Generar archivo estándar iCalendar (.ics)
    const title = "🗳️ Día D: Firma de la Iniciativa Ciudadana Europea .IA (ECI(2026)000012)";
    const desc = "Apertura oficial de la urna electrónica comunitaria de la Unión Europea para crear la Denominación de Origen digital .ia. Firma con tu DNI en menos de 45 segundos en: https://anticitera.deft.work/6abril/";
    const location = "https://anticitera.deft.work/6abril/";

    // 6 de abril de 2027 a las 09:00 UTC (11:00 CEST)
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Iniciativa Ciudadana Europea .IA//ES",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "SUMMARY:" + title,
      "DESCRIPTION:" + desc,
      "URL:" + location,
      "DTSTART:20270406T090000Z",
      "DTEND:20270406T100000Z",
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-PT1H",
      "ACTION:DISPLAY",
      "DESCRIPTION:Recordatorio: Hoy abre la urna europea de la .IA",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "6-de-abril-urna-eci-ia.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (status) {
      status.textContent = "✅ Evento descargado (.ics). ¡Añadido a tu calendario!";
      setTimeout(() => {
        status.textContent = "";
      }, 4000);
    }
  });
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

function detectBrowserLanguage(availableCodes) {
  // 1. Parámetro en URL (?lang=xx)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qLang = (urlParams.get("lang") || "").toLowerCase().trim();
    if (qLang && availableCodes.includes(qLang)) {
      return qLang;
    }
  } catch (e) {}

  // 2. Preferencia guardada previamente por el usuario
  try {
    const saved = localStorage.getItem("preferred_lang");
    if (saved && availableCodes.includes(saved)) {
      return saved;
    }
  } catch (e) {}

  // 3. Idioma(s) configurados en el navegador del usuario
  const navLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || "es"];

  for (const raw of navLangs) {
    if (!raw) continue;
    const lower = String(raw).toLowerCase().trim();
    // Coincidencia exacta (ej. "es", "zh")
    if (availableCodes.includes(lower)) {
      return lower;
    }
    // Coincidencia por prefijo base (ej. "es-ES" -> "es", "fr-FR" -> "fr", "zh-CN" -> "zh")
    const base = lower.split("-")[0];
    if (availableCodes.includes(base)) {
      return base;
    }
  }

  // 4. Fallback por defecto: español si está disponible, o el primero disponible
  return availableCodes.includes("es") ? "es" : availableCodes[0];
}

/* ==========================================================================
   Modo Lectura Inmersivo (Sin Distracciones · Texto y Voz Sincronizada)
   ========================================================================== */
function initReadingMode() {
  const toggleBtn = document.getElementById("reading-mode-toggle");
  const prevBtn = document.getElementById("zen-prev-btn");
  const nextBtn = document.getElementById("zen-next-btn");
  const indicator = document.getElementById("zen-chapter-indicator");
  const navEl = document.getElementById("reading-mode-nav");

  function isReadingMode() {
    return document.body.classList.contains("reading-mode");
  }

  function setReadingMode(active) {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    if (active) {
      document.body.classList.add("reading-mode");
      if (navEl) navEl.hidden = false;
      if (toggleBtn) {
        toggleBtn.textContent = ui.readingModeOff || "✕ Salir de Lectura";
        toggleBtn.setAttribute("aria-label", ui.readingModeExitAria || "Salir del modo lectura");
        toggleBtn.setAttribute("aria-pressed", "true");
      }
      try { localStorage.setItem("odisea_reading_mode", "true"); } catch (_) {}
    } else {
      document.body.classList.remove("reading-mode");
      if (navEl) navEl.hidden = true;
      if (toggleBtn) {
        toggleBtn.textContent = ui.readingModeOn || "📖 Modo Lectura";
        toggleBtn.setAttribute("aria-label", ui.readingModeAria || "Activar modo lectura sin distracciones");
        toggleBtn.setAttribute("aria-pressed", "false");
      }
      try { localStorage.removeItem("odisea_reading_mode"); } catch (_) {}
    }
    updateZenNav();
  }

  function updateZenNav() {
    const bundleLang = window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[activeLang] : null;
    const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
    const total = chapters.length || 5;
    const current = activeChapterIndex + 1;
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;

    if (indicator) {
      indicator.textContent = activeLang === "en"
        ? `Chapter ${activeChapterIndex} (${current} of ${total})`
        : `Capítulo ${activeChapterIndex} (${current} de ${total})`;
    }
    if (prevBtn) {
      prevBtn.disabled = activeChapterIndex <= 0;
      prevBtn.textContent = ui.zenPrev || "← Capítulo anterior";
    }
    if (nextBtn) {
      nextBtn.disabled = activeChapterIndex >= total - 1;
      nextBtn.textContent = ui.zenNext || "Siguiente capítulo →";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      setReadingMode(!isReadingMode());
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (activeChapterIndex > 0) {
        goToChapter(activeChapterIndex - 1);
        updateZenNav();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const bundleLang = window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas ? window.HOMERO_BOOK.idiomas[activeLang] : null;
      const chapters = bundleLang && bundleLang.chapters ? bundleLang.chapters : [];
      if (activeChapterIndex < chapters.length - 1) {
        goToChapter(activeChapterIndex + 1);
        updateZenNav();
      }
    });
  }

  // Tecla Escape para salir rápidamente del modo lectura
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isReadingMode()) {
      setReadingMode(false);
    }
  });

  // Restaurar preferencia guardada
  try {
    if (localStorage.getItem("odisea_reading_mode") === "true") {
      setReadingMode(true);
    }
  } catch (_) {}

  window.updateReadingModeUI = function () {
    const ui = UI_STRINGS[activeLang] || UI_STRINGS.es;
    if (toggleBtn) {
      if (isReadingMode()) {
        toggleBtn.textContent = ui.readingModeOff || "✕ Salir de Lectura";
        toggleBtn.setAttribute("aria-label", ui.readingModeExitAria || "Salir del modo lectura");
      } else {
        toggleBtn.textContent = ui.readingModeOn || "📖 Modo Lectura";
        toggleBtn.setAttribute("aria-label", ui.readingModeAria || "Activar modo lectura sin distracciones");
      }
    }
    updateZenNav();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");

  let availableCodes = ["es", "en", "fr", "pt", "el", "hu", "hr", "zh", "ru"];
  if (window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas) {
    const fromBook = Object.keys(window.HOMERO_BOOK.idiomas);
    if (fromBook.length > 0) availableCodes = fromBook;
  }

  const initialLang = detectBrowserLanguage(availableCodes);

  // Si existe HOMERO_BOOK.idiomas, sincronizar dinámicamente las opciones del selector
  if (window.HOMERO_BOOK && window.HOMERO_BOOK.idiomas && langSelect) {
    langSelect.innerHTML = "";
    availableCodes.forEach((code) => {
      const info = window.HOMERO_BOOK.idiomas[code];
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = `${info.bandera || ""} ${info.nombre || code} (${code.toUpperCase()})`.trim();
      langSelect.appendChild(opt);
    });
  }

  if (langSelect) {
    langSelect.value = initialLang;
    langSelect.addEventListener("change", (e) => {
      const chosen = e.target.value;
      try {
        localStorage.setItem("preferred_lang", chosen);
      } catch (err) {}
      renderLanguage(chosen);
    });
  }

  renderLanguage(initialLang);

  initAudiobookPlayer();
  initThemeToggle();
  initReadingMode();
  initScrollProgressFallback();
  initBookmarkResume();
  initSentenceSharePopover();
  initGitHubContributors();
  initCalendarReminder();

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

  // Registro de Service Worker para PWA (instalación en móvil/escritorio y lectura offline)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((err) => {
        console.warn("ServiceWorker registration failed:", err);
      });
    });
  }
});
