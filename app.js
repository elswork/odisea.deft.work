/* ==========================================================================
   odisea.deft.work — Motor de Lectura Multilingüe y Conversión ICE
   ========================================================================== */

const BOOK_DATA = {
  es: {
    brandTitle: "La Odisea del .ia",
    sidebarHeading: "Índice de Capítulos",
    sidebarSubtitle: "Crónica real de la Iniciativa Ciudadana Europea ECI(2026)000012",
    themeBtnLabel: "Cambiar tema de lectura",
    chapterPill: "Capítulo 1 de 10",
    readingTime: "Lectura: 4 min · Por Eloy López Sánchez",
    title: "La isla que alquiló el futuro",
    lead: "Por qué la tecnología más poderosa de nuestro tiempo lleva el sello de un paraíso caribeño y cómo nació la idea de crear la Denominación de Origen .ia.",
    chaptersList: [
      { num: "Capítulo 1", title: "La isla que alquiló el futuro", active: true },
      { num: "Capítulo 2", title: "El reloj sumergido en el Egeo (Por qué Anticitera)", active: false },
      { num: "Capítulo 3", title: "Siete llaves para abrir Bruselas", active: false },
      { num: "Capítulo 4", title: "El día que la Comisión Europea dijo «Sí»", active: false },
      { num: "Capítulo 5", title: "Qué es una Denominación de Origen para la IA", active: false },
      { num: "Capítulo 6", title: "Un día cualquiera en el mundo con .ia", active: false },
      { num: "Capítulo 7", title: "La mentira de que Europa siempre llega tarde", active: false },
      { num: "Capítulo 8", title: "Por qué un clic no vale nada y tu DNI lo vale todo", active: false },
      { num: "Capítulo 9", title: "La Escalera de los Siete Países", active: false },
      { num: "Capítulo 10", title: "El 6 de abril de 2027 (La página que escribes tú)", active: false }
    ],
    bodyHtml: `
      <p>La primera vez que me hice la pregunta, pensé que la respuesta sería obvia.</p>
      <p>Cada día abrimos decenas de páginas web, aplicaciones médicas, asistentes financieros, herramientas educativas o servicios de noticias que terminan en las mismas dos letras: <strong><code>.ai</code></strong>. Damos por hecho que ese sufijo significa <em>Artificial Intelligence</em>. Asumimos, casi sin pensarlo, que detrás de esas dos letras hay algún tipo de registro tecnológico internacional, alguna institución que verifica que aquello que estamos usando es realmente inteligencia artificial y que cumple unas reglas mínimas de seguridad.</p>
      <p>Pero no hay nada de eso.</p>
      <p>En 1995, cuando se repartieron los códigos geográficos de Internet, a cada territorio del planeta se le asignaron dos letras: <code>.es</code> para España, <code>.fr</code> para Francia, <code>.de</code> para Alemania. A <strong>Anguila</strong>, un pequeño territorio británico de ultramar situado en el Caribe, de apenas noventa kilómetros cuadrados y quince mil habitantes, le tocó por azar el código <strong><code>.ai</code></strong>.</p>
      <p>Durante casi treinta años, ese dominio apenas interesó a nadie fuera de aquella isla famosa por sus playas de coral y su régimen fiscal libre de impuestos. Hasta que estalló la fiebre de la inteligencia artificial. De la noche a la mañana, miles de empresas, laboratorios y especuladores de todo el planeta empezaron a pagar millones de dólares por alquilar direcciones terminadas en <code>.ai</code> únicamente porque, en inglés, coincidían con las siglas de moda.</p>
      <p>Hoy, una parte gigantesca de la nueva economía digital opera bajo el pabellón de una isla caribeña que cobra un peaje millonario por cada registro, pero que no exige <strong>ni una sola garantía</strong> a quien compra el dominio. Da igual si detrás de una web <code>.ai</code> hay un equipo científico legítimo, un sistema que comercia en secreto con los datos médicos de tus hijos o una estafa automatizada incapaz de rendir cuentas ante ningún juez europeo. Mientras pagues la cuota anual, llevas la misma etiqueta en la puerta.</p>

      <h2>Lo que aprendimos hace siglos en una mesa cualquiera</h2>
      <p>Cuando descubrí cómo funcionaba realmente aquel mercado, pensé en algo mucho más cercano y cotidiano.</p>
      <p>En Europa llevamos generaciones protegiendo aquello que entra en nuestra casa. Cuando compras una botella de aceite de oliva, un vino o un queso con <strong>Denominación de Origen</strong>, no necesitas ser ingeniero agrónomo ni analizar el producto en un laboratorio antes de dárselo a tu familia. Ese sello en la etiqueta te dice tres cosas de forma inmediata:</p>
      <ol>
        <li><strong>Tiene una calidad intrínseca demostrada</strong>, fruto de unas normas claras de elaboración.</li>
        <li><strong>Existe trazabilidad</strong>, desde el origen hasta tus manos.</li>
        <li><strong>Hay alguien responsable</strong>, sometido a inspecciones reales y a nuestras leyes, que pierde el sello si engaña al consumidor.</li>
      </ol>
      <p>Imagina por un momento un supermercado donde cualquier fabricante del mundo pudiera estampar las palabras «Denominación de Origen» en un envase simplemente por pagar cincuenta dólares a una oficina en el Caribe, sin pasar un solo control sanitario. Nos parecería intolerable.</p>
      <p>Sin embargo, eso es exactamente lo que estamos permitiendo con la tecnología que ya redacta contratos, filtra currículums, diagnostica enfermedades, educa a nuestros adolescentes y moldea la opinión pública. Hemos llenado Internet de botellas sin control sanitario y hemos dejado que se disfracen con el apellido de una isla tropical.</p>

      <h2>Dos letras que nos pertenecen: <code>.ia</code></h2>
      <p>Fue entonces cuando reparé en una segunda anomalía, aún más llamativa si cabe.</p>
      <p>Más de seiscientos millones de personas en el mundo —y cientos de millones de ciudadanos dentro de la Unión Europea— hablamos lenguas donde esta tecnología ni siquiera se abrevia <em>AI</em>. En <strong>español, francés, italiano, portugués o rumano</strong>, decimos <strong>Inteligencia Artificial (<code>IA</code>)</strong>.</p>
      <p>Busqué el dominio <strong><code>.ia</code></strong> en el mapa oficial de Internet. No pertenecía a ningún país. No estaba alquilado a ningún paraíso fiscal. Estaba vacío, en un limbo técnico, esperando a que alguien planteara para qué debía existir.</p>
      <p>Y ahí nació la idea que ya no me dejó dormir tranquilo:</p>
      <p>¿Y si, en lugar de usar <code>.ia</code> para vender direcciones web al mejor postor, la Unión Europea reclamara y creara el dominio <strong><code>.ia</code></strong> como la primera <strong>Denominación de Origen digital del mundo</strong>?</p>
      <p>Un espacio en Internet donde llevar la extensión <code>.ia</code> no fuera una cuestión de talonario, sino un sello de <strong>calidad intrínseca</strong>: la garantía inmediata para cualquier ciudadano de que ese servicio cumple con estándares reales de transparencia, respeta la privacidad humana, identifica con honestidad cuándo interactúas con una máquina y responde legalmente en territorio europeo.</p>

      <h2>De la idea en un papel a las puertas de Estrasburgo</h2>
      <p>Podría haberme limitado a escribir un artículo sobre esto, publicarlo en redes sociales, recibir unas cuantas palmadas en la espalda y ver cómo la idea se olvidaba en cuarenta y ocho horas.</p>
      <p>Pero en los tratados de la Unión Europea existe una herramienta que muy poca gente conoce y que todavía menos gente se atreve a activar: la <strong>Iniciativa Ciudadana Europea (ICE)</strong>. No es una recogida de firmas simbólica en una web privada. Es un mecanismo legislativo oficial: si un grupo de ciudadanos de al menos siete países logra que la Comisión Europea admita a trámite su propuesta y reúne <strong>un millón de firmas verificadas</strong> con documento de identidad, el Gobierno de Europa está obligado por ley a responder y a abrir la vía parlamentaria.</p>
      <p>Me dijeron que era prácticamente imposible que la Comisión Europea registrara una propuesta así viniendo de ciudadanos de a pie, sin un partido político, sin un grupo de presión en Bruselas y sin grandes corporaciones detrás.</p>
      <p>Se equivocaban.</p>
      <p>El <strong>6 de octubre de 2026</strong>, reunido en Estrasburgo, el Colegio de Comisarios de la Unión Europea aprobó formalmente la Decisión <strong><code>C(2026) 7098 final</code></strong>, registrando nuestra iniciativa bajo el código oficial <strong><code>ECI(2026)000012</code></strong> y habilitando la urna electrónica donde se decidirá si el dominio <code>.ia</code> se convierte en ley europea.</p>
      <div class="next-chapter-teaser">
        <strong>En el próximo capítulo (Capítulo 2):</strong> Te contaré por qué todo este viaje empezó mirando hacia un barco hundido hace dos mil años en el mar Egeo, y cómo siete desconocidos de siete países distintos nos unimos para girar la primera llave de Bruselas.
      </div>
    `,
    ctaTitle: "Sé parte de esta historia y ayúdanos a conseguir el millón de firmas",
    ctaDesc: "Este relato se escribe capítulo a capítulo hasta alcanzar el millón de firmas ciudadanas que obligarán a Europa a crear la Denominación de Origen .ia.",
    card1Title: "1. Recibe el Capítulo 2 en tu correo",
    card1Desc: "Te enviaremos cada nuevo capítulo y el aviso directo en el instante en que se abra la urna oficial de votación.",
    emailLabel: "Tu correo electrónico",
    emailHint: "Formato: nombre@ejemplo.com (sin spam, solo capítulos y aviso de firma)",
    emailError: "Por favor, introduce una dirección de correo válida.",
    subscribeBtn: "Suscribirme al relato (.ia)",
    subscribeSuccess: "¡Gracias! Te hemos registrado para recibir el Capítulo 2 y el aviso oficial de firma.",
    card2Title: "2. Urna Oficial de la Unión Europea",
    card2Desc: "En España y en la UE basta con tu Nombre y DNI (lleva menos de 45 segundos). Conoce la iniciativa oficial y comprométete con el 6 de abril.",
    euBtnText: "Ir a la Plataforma Oficial ICE →"
  },
  en: {
    brandTitle: "The .ia Odyssey",
    sidebarHeading: "Chapter Index",
    sidebarSubtitle: "True chronicle of European Citizens' Initiative ECI(2026)000012",
    themeBtnLabel: "Toggle reading theme",
    chapterPill: "Chapter 1 of 10",
    readingTime: "4 min read · By Eloy López Sánchez",
    title: "The Island That Rented Out the Future",
    lead: "Why the most powerful technology of our time wears the label of a Caribbean tax haven, and how the idea of creating the .ia Designation of Origin was born.",
    chaptersList: [
      { num: "Chapter 1", title: "The Island That Rented Out the Future", active: true },
      { num: "Chapter 2", title: "The Clock Sunk in the Aegean (Why Antikythera)", active: false },
      { num: "Chapter 3", title: "Seven Keys to Open Brussels", active: false },
      { num: "Chapter 4", title: "The Day the European Commission Said 'Yes'", active: false },
      { num: "Chapter 5", title: "What a Designation of Origin Means for AI", active: false },
      { num: "Chapter 6", title: "An Ordinary Day in a World with .ia", active: false },
      { num: "Chapter 7", title: "The Lie That Europe Always Arrives Late", active: false },
      { num: "Chapter 8", title: "Why a Social Click Means Nothing and Your ID Means Everything", active: false },
      { num: "Chapter 9", title: "The Staircase of the Seven Countries", active: false },
      { num: "Chapter 10", title: "April 6, 2027 (The Page Written by You)", active: false }
    ],
    bodyHtml: `
      <p>The first time I asked myself the question, I thought the answer would be obvious.</p>
      <p>Every single day we open dozens of websites, medical apps, financial assistants, educational tools, or news services ending in the same two letters: <strong><code>.ai</code></strong>. We take for granted that this suffix stands for <em>Artificial Intelligence</em>. Almost without thinking, we assume that behind those two letters stands some international technological registry—an institution verifying that what we are using is genuine artificial intelligence and that it abides by basic safety rules.</p>
      <p>There is nothing of the sort.</p>
      <p>Back in 1995, when Internet country codes were handed out, every territory on Earth was assigned two letters: <code>.es</code> for Spain, <code>.fr</code> for France, <code>.de</code> for Germany. <strong>Anguilla</strong>, a tiny British Overseas Territory in the Caribbean spanning barely ninety square kilometers with fifteen thousand inhabitants, was randomly assigned <strong><code>.ai</code></strong>.</p>
      <p>For nearly thirty years, hardly anyone outside that island—famous for its coral beaches and zero-tax regime—cared about that domain. Until the artificial intelligence gold rush erupted. Overnight, thousands of companies, labs, and speculators across the globe began paying tens of millions of dollars to rent web addresses ending in <code>.ai</code> simply because, in English, those letters happened to match the acronym of the century.</p>
      <p>Today, a massive share of the new digital economy operates under the flag of a Caribbean island that collects a multi-million-dollar toll for every registration while demanding <strong>not a single guarantee</strong> from the buyer. It makes no difference whether behind a <code>.ai</code> website stands a legitimate scientific team, an opaque system secretly trading your children's medical records, or an automated scam accountable to no European court. As long as you pay the annual fee, you wear the exact same badge on the door.</p>

      <h2>What We Learned Centuries Ago Around the Dinner Table</h2>
      <p>When I discovered how that market actually worked, I thought of something much closer to everyday life.</p>
      <p>In Europe, we have spent generations protecting what comes into our homes. When you buy a bottle of olive oil, wine, or cheese bearing a <strong>Protected Designation of Origin</strong>, you do not need to be an agricultural engineer or test the product in a laboratory before serving it to your family. That seal on the label tells you three things immediately:</p>
      <ol>
        <li><strong>It possesses proven intrinsic quality</strong>, the result of clear production standards.</li>
        <li><strong>There is full traceability</strong>, from its origin to your hands.</li>
        <li><strong>Someone is legally accountable</strong>, subject to real inspections and European law, who loses the seal the moment they deceive the public.</li>
      </ol>
      <p>Imagine a supermarket where any manufacturer in the world could stamp "Designation of Origin" on a bottle simply by wiring fifty dollars to a Caribbean office, without passing a single health inspection. We would find it outrageous.</p>
      <p>Yet that is precisely what we are allowing with the technology that already drafts contracts, filters job applications, diagnoses illnesses, tutors our teenagers, and shapes public opinion. We have flooded the Internet with unlabeled bottles and let them disguise themselves under the name of a tropical island.</p>

      <h2>Two Letters That Belong to Us: <code>.ia</code></h2>
      <p>That was when I noticed a second anomaly, even more striking than the first.</p>
      <p>Over six hundred million people worldwide—and hundreds of millions of citizens across the European Union—speak languages in which this technology is not even abbreviated <em>AI</em>. In <strong>Spanish, French, Italian, Portuguese, and Romanian</strong>, it is called <strong>Inteligencia Artificial / Intelligence Artificielle / Intelligenza Artificiale (<code>IA</code>)</strong>.</p>
      <p>I looked up the <strong><code>.ia</code></strong> domain on the official map of the Internet. It belonged to no country. It was not leased to any tax haven. It sat empty in a technical limbo, waiting for someone to define why it should exist.</p>
      <p>And that was the spark that kept me awake at night:</p>
      <p>What if, instead of using <code>.ia</code> to auction off web addresses to the highest bidder, the European Union claimed and established the <strong><code>.ia</code></strong> domain as the <strong>world's first digital Designation of Origin</strong>?</p>
      <p>A space on the Internet where carrying the <code>.ia</code> extension would not be a matter of checkbooks, but a seal of <strong>intrinsic quality</strong>: an immediate guarantee to every citizen that the service meets genuine transparency standards, respects human privacy, honestly discloses when you are interacting with a machine, and is legally accountable on European soil.</p>

      <h2>From a Sketch on Paper to the Doors of Strasbourg</h2>
      <p>I could have simply written an op-ed about this, posted it on social media, received a few polite pats on the back, and watched the idea fade away within forty-eight hours.</p>
      <p>Instead, tucked inside the treaties of the European Union lies an instrument very few people know about—and even fewer dare to use: the <strong>European Citizens' Initiative (ECI)</strong>. It is not a symbolic petition on a private website. It is an official legislative mechanism: if a committee of citizens from at least seven EU Member States persuades the European Commission to register their proposal and gathers <strong>one million verified signatures</strong>, the executive branch of Europe is legally bound to respond and open the legislative pathway.</p>
      <p>People told me it was virtually impossible for the European Commission to register such a proposal coming from ordinary citizens—without a political party, without a Brussels lobbying firm, and without tech giants behind us.</p>
      <p>They were wrong.</p>
      <p>On <strong>October 6, 2026</strong>, meeting in Strasbourg, the College of Commissioners of the European Union formally adopted Decision <strong><code>C(2026) 7098 final</code></strong>, registering our initiative under the official code <strong><code>ECI(2026)000012</code></strong> and provisioning the official electronic ballot box where citizens will decide whether the <code>.ia</code> domain becomes European law.</p>
      <div class="next-chapter-teaser">
        <strong>In the next chapter (Chapter 2):</strong> I will tell you why this entire journey began by looking back at a shipwreck sunk two thousand years ago in the Aegean Sea—and how seven strangers across seven countries joined forces to turn the first key in Brussels.
      </div>
    `,
    ctaTitle: "Be part of this story and help us reach one million signatures",
    ctaDesc: "This chronicle unfolds chapter by chapter to gather the one million citizen signatures needed to establish the European .ia Designation of Origin.",
    card1Title: "1. Receive Chapter 2 in your inbox",
    card1Desc: "We will send you each new chapter plus a priority alert the moment the official EU ballot box opens.",
    emailLabel: "Your email address",
    emailHint: "Format: you@example.com (zero spam, only new chapters & ballot alert)",
    emailError: "Please enter a valid email address.",
    subscribeBtn: "Subscribe to the Chronicle (.ia)",
    subscribeSuccess: "Thank you! You are registered to receive Chapter 2 and the official voting alert.",
    card2Title: "2. Official European Union Ballot Box",
    card2Desc: "Signing an official European Citizens' Initiative takes less than 45 seconds with your national ID. Explore the official initiative and join the April 6 launch.",
    euBtnText: "Go to Official ECI Campaign →"
  }
};

// los otros 6 idiomas estratégicos (FR, IT, PT, EL, RO, HU) usan EN/ES como base hasta que se cierre la validación de cada capítulo
["fr", "it", "pt", "ro"].forEach((lang) => {
  BOOK_DATA[lang] = BOOK_DATA.es;
});
["el", "hu"].forEach((lang) => {
  BOOK_DATA[lang] = BOOK_DATA.en;
});

function renderLanguage(langCode) {
  const data = BOOK_DATA[langCode] || BOOK_DATA.es;
  document.documentElement.lang = langCode;

  document.getElementById("brand-title").textContent = data.brandTitle;
  document.getElementById("sidebar-heading").textContent = data.sidebarHeading;
  document.getElementById("sidebar-subtitle").textContent = data.sidebarSubtitle;
  document.getElementById("theme-toggle").setAttribute("aria-label", data.themeBtnLabel);

  document.getElementById("chapter-pill").textContent = data.chapterPill;
  document.getElementById("reading-time").textContent = data.readingTime;
  document.getElementById("chapter-title").textContent = data.title;
  document.getElementById("chapter-lead").textContent = data.lead;
  document.getElementById("chapter-body").innerHTML = data.bodyHtml;

  const listEl = document.getElementById("chapter-list");
  listEl.innerHTML = "";
  data.chaptersList.forEach((ch) => {
    const li = document.createElement("li");
    li.className = `chapter-item ${ch.active ? "is-active" : "is-upcoming"}`;
    li.innerHTML = `<span class="chapter-num">${ch.num}</span>${ch.title}`;
    listEl.appendChild(li);
  });

  document.getElementById("cta-title").textContent = data.ctaTitle;
  document.getElementById("cta-desc").textContent = data.ctaDesc;
  document.getElementById("card1-title").textContent = data.card1Title;
  document.getElementById("card1-desc").textContent = data.card1Desc;
  document.getElementById("email-label").textContent = data.emailLabel;
  document.getElementById("email-hint").textContent = data.emailHint;
  document.getElementById("email-error-text").textContent = data.emailError;
  document.getElementById("subscribe-btn").textContent = data.subscribeBtn;
  document.getElementById("card2-title").textContent = data.card2Title;
  document.getElementById("card2-desc").textContent = data.card2Desc;
  document.getElementById("eu-btn").textContent = data.euBtnText;
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
  renderLanguage(langSelect.value);

  langSelect.addEventListener("change", (e) => {
    renderLanguage(e.target.value);
  });

  initThemeToggle();
  initScrollProgressFallback();

  const form = document.getElementById("subscribe-form");
  UserInvalidFallback.init(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
      emailInput.focus();
      return;
    }
    const lang = langSelect.value;
    const data = BOOK_DATA[lang] || BOOK_DATA.es;
    const feedback = document.getElementById("subscribe-feedback");
    feedback.textContent = data.subscribeSuccess;
    feedback.hidden = false;
    form.reset();
  });
});
