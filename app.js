/* =========================================================
   app.js — Educational Games in Martial Arts Sports
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA  (extracted from data_G.txt)
   Entries 1-9 are complete. The remaining entries are the
   placeholders that ship with the original file; they are
   hidden by default via the "hide incomplete" toggle.
   Replace REAL_GAMES whenever data_G.txt is updated.
   --------------------------------------------------------- */

const REAL_GAMES = [
  {
    id: 1,
    en_n: "1-Move Forwards under a partner’s weight",
    fr_n: "1- Se deplace en avant en portant le partenaire",
    ar_n: "1- التنقل إلى الأمام مع حمل الزميل",
    en_d: "The first player holds his partner by his middle, his head under the arm, lifts him up and moves forwards.",
    fr_d: "Porter le partenaire sur controle tronc-bras et se deplacer en avant",
    ar_d: "التحرك إلى الأمام تحت وزن الشريك. يحمل اللاعب الأول شريكه من منتصفه ورأسه تحت الذراع ويرفعه ويتقدم للأمام.",
    picture: "game1.png"
  },
  {
    id: 2,
    en_n: "2-Move Forwards under a partner’s weight",
    fr_n: "2- Se deplace en avant en portant le partenaire",
    ar_n: "2- التنقل إلى الأمام مع حمل الزميل",
    en_d: "The first player holds his partner, lifts him up and moves forwards.",
    fr_d: "Porter le partenaire en ceinture tronc-bras par devant et se deplacer en avant",
    ar_d: "التحرك إلى الأمام تحت وزن الشريك. يحمل اللاعب الأول شريكه مع تطويق الجذع و اليد ويرفعه ويتقدم للأمام.",
    picture: "game2.png"
  },
  {
    id: 3,
    en_n: "3- Balance standing on the partner’s back",
    fr_n: "3- Garder son equilibre",
    ar_n: "3- المحافظة على التوازن",
    en_d: "The player should keep his balance in the initial position while his partner is moving forwards.",
    fr_d: "Le joueur doit garder son equilibre debout sur le dos de son partenaire",
    ar_d: "يحاول اللاعب المحافظة على توازنه وقوفا فوق ظهر الزميل الذي يتنقل أماما.",
    picture: "game3.png"
  },
  {
    id: 4,
    en_n: "4 -Move Forwards under a partner’s weight",
    fr_n: "4 - Se deplace en avant en portant le partenaire",
    ar_n: "4- التنقل إلى الأمام مع حمل الزميل",
    en_d: "The first player holds his partner, lifts him up and moves forwards.",
    fr_d: "Porter le partenaire en ceinture des jambes par devant et se deplacer en avant",
    ar_d: "التحرك إلى الأمام تحت وزن الشريك. يحمل اللاعب الأول شريكه مع الرجلين ويرفعه ويتقدم للأمام.",
    picture: "game4.png"
  },
  {
    id: 5,
    en_n: "5- Who wins in the fireman lift",
    fr_n: "5- Qui gagne dans le porté du pompier",
    ar_n: "5- رفع رجل الإطفاء",
    en_d: "2 Players. A 12m finish line. Once the signal is given, the first player lifts the second player on his shoulders and moves forwards. The second player tries to get rid of that position before player 1 reaches the line. In competition: who achieves his mission wins.",
    fr_d: "2 joueurs. Une ligne d'arrivée à 12 m. Au signal, le premier joueur hisse le second sur ses épaules et avance. Le second tente de se dégager avant que le premier n'atteigne la ligne. En compétition : celui qui remplit sa mission gagne.",
    ar_d: "2 لاعبين. خط النهاية 12م. بمجرد إعطاء الإشارة، يرفع اللاعب الأول اللاعب الثاني على كتفيه ويتقدم للأمام. يحاول اللاعب الثاني التخلص من هذا الموقف قبل أن يصل اللاعب الأول إلى الخط. في المنافسة: من يحقق مهمته يفوز.",
    picture: "game5.png"
  },
  {
    id: 6,
    en_n: "6- Race: 5",
    fr_n: "6- Course : 5",
    ar_n: "6- سباق: 5",
    en_d: "2 Players. Partners. A 12m finish line. The first player lifts his partner on his shoulders, both of them should cooperate to reach the line. In competition: which two partners reach the line first.",
    fr_d: "2 joueurs. Partenaires. Une ligne d'arrivée à 12 m. Le premier joueur hisse son partenaire sur ses épaules ; les deux doivent coopérer pour atteindre la ligne. En compétition : quel duo arrive le premier.",
    ar_d: "2 لاعبين. الشركاء. خط النهاية 12م. يرفع اللاعب الأول شريكه على كتفيه، ويتعاون كل منهما للوصول إلى الخط. في المنافسة: أي شريكين يصلان إلى الخط أولاً.",
    picture: "game6.png"
  },
  {
    id: 7,
    en_n: "7- Moving backwards with lifting a partner 1",
    fr_n: "7- Marche arrière avec porté du partenaire 1",
    ar_n: "7- التحرك للخلف مع رفع شريك 1",
    en_d: "Two players, Partners. In standing position as illustrated in the picture. A 12m finish line. The first player holds his partner from his middle, lifts him up and moves backwards. In competition: which two partners reach the line first.",
    fr_d: "Deux joueurs, partenaires. En position debout comme illustré. Une ligne d'arrivée à 12 m. Le premier joueur saisit son partenaire par la taille, le soulève et recule. En compétition : quel duo arrive le premier.",
    ar_d: "لاعبين اثنين، شركاء. في وضع الوقوف كما هو موضح في الصورة. خط النهاية 12م. يحمل اللاعب الأول شريكه من منتصفه، ويرفعه للأعلى ويتحرك للخلف. في المنافسة: أي شريكين يصلان إلى الخط أولاً.",
    picture: "game7.png"
  },
  {
    id: 8,
    en_n: "8- Moving backwards with lifting a partner 2",
    fr_n: "8- Marche arrière avec porté du partenaire 2",
    ar_n: "8- التحرك للخلف مع رفع شريك 2",
    en_d: "Two players, Partners. In standing position as illustrated in the picture. A 12m finish line. The first player holds his partner from his middle, lifts him up and moves backwards. In competition: which two partners reach the line first.",
    fr_d: "Deux joueurs, partenaires. En position debout comme illustré. Une ligne d'arrivée à 12 m. Le premier joueur saisit son partenaire par la taille, le soulève et recule. En compétition : quel duo arrive le premier.",
    ar_d: "لاعبين اثنين، شركاء. في وضع الوقوف كما هو موضح في الصورة. خط النهاية 12م. يحمل اللاعب الأول شريكه من منتصفه، ويرفعه للأعلى ويتحرك للخلف. في المنافسة: أي شريكين يصلان إلى الخط أولاً.",
    picture: "game8.png"
  },
  {
    id: 9,
    en_n: "9- Moving backwards with lifting an opponent",
    fr_n: "9- Marche arrière avec porté de l'adversaire",
    ar_n: "9- التحرك للخلف مع رفع الخصم",
    en_d: "Two players, Partners. In standing position as illustrated in the picture. A 12m finish line. The first player holds his partner from his middle, lifts him up and moves backwards. In competition: Player 2 tries to get rid of that position before player 1 reaches the line. Who achieves his mission wins.",
    fr_d: "Deux joueurs, partenaires. En position debout comme illustré. Une ligne d'arrivée à 12 m. Le premier joueur saisit son partenaire par la taille, le soulève et recule. En compétition : le joueur 2 tente de se dégager avant que le joueur 1 n'atteigne la ligne. Celui qui remplit sa mission gagne.",
    ar_d: "لاعبين اثنين، شركاء. في وضع الوقوف كما هو موضح في الصورة. خط النهاية 12م. يحمل اللاعب الأول شريكه من منتصفه، ويرفعه للأعلى ويتحرك للخلف. في المنافسة: يحاول اللاعب 2 التخلص من هذا الموقف قبل وصول اللاعب 1 إلى الخط. من يحقق مهمته يفوز.",
    picture: "game9.png"
  }
];

/* Placeholder entries that exist in data_G.txt (numbers present in
   the file). They are generated so the file stays readable. */
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

const PLACEHOLDER_IDS = [
  ...range(10, 65),
  ...range(162, 177),
  180, 182, 183, 186, 187,
  ...range(189, 202),
  204
];

const PLACEHOLDER_GAMES = PLACEHOLDER_IDS.map(n => ({
  id: n,
  en_n: `${n}- Moving`,
  fr_n: "Hockey",
  ar_n: "التحرك للخلف مع رفع الخصم",
  en_d: "Two .",
  fr_d: "Un sport d'équipe.",
  ar_d: "لاعبين اثن مهمته يفوز.",
  picture: `game${n}.png`
}));

const DATA = [...REAL_GAMES, ...PLACEHOLDER_GAMES];

/* ---------------------------------------------------------
   2. UI TRANSLATIONS
   --------------------------------------------------------- */
const I18N = {
  en: {
    title: "Educational Games in Martial Arts Sports",
    subtitle: "Full-contact sports · technical & tactical games",
    chooseLanguage: "Choose your language to continue",
    btnEnglish: "Continue in English",
    btnFrench: "Continuer en français",
    btnArabic: "المتابعة بالعربية",
    back: "Home",
    gamesTitle: "Games Library",
    search: "Search a game…",
    hideIncomplete: "Hide incomplete entries",
    showing: (shown, total) => `Showing ${shown} of ${total} games`,
    noResults: "No games match your search.",
    imageNA: "Image not available",
    close: "Close"
  },
  fr: {
    title: "Jeux éducatifs en sports d'arts martiaux",
    subtitle: "Sports de contact · jeux techniques et tactiques",
    chooseLanguage: "Choisissez votre langue pour continuer",
    btnEnglish: "Continue in English",
    btnFrench: "Continuer en français",
    btnArabic: "المتابعة بالعربية",
    back: "Accueil",
    gamesTitle: "Bibliothèque des jeux",
    search: "Rechercher un jeu…",
    hideIncomplete: "Masquer les fiches incomplètes",
    showing: (shown, total) => `Affichage de ${shown} sur ${total} jeux`,
    noResults: "Aucun jeu ne correspond à votre recherche.",
    imageNA: "Image non disponible",
    close: "Fermer"
  },
  ar: {
    title: "ألعاب تعليمية في الرياضات القتالية",
    subtitle: "رياضات الاحتكاك الكامل · ألعاب تقنية وتكتيكية",
    chooseLanguage: "اختر لغتك للمتابعة",
    btnEnglish: "Continue in English",
    btnFrench: "Continuer en français",
    btnArabic: "المتابعة بالعربية",
    back: "الرئيسية",
    gamesTitle: "مكتبة الألعاب",
    search: "ابحث عن لعبة…",
    hideIncomplete: "إخفاء البطاقات غير المكتملة",
    showing: (shown, total) => `عرض ${shown} من ${total} لعبة`,
    noResults: "لا توجد ألعاب مطابقة لبحثك.",
    imageNA: "الصورة غير متوفرة",
    close: "إغلاق"
  }
};

/* ---------------------------------------------------------
   3. DOM REFERENCES
   --------------------------------------------------------- */
const screens      = { home: document.getElementById('screen-home'),
                       games: document.getElementById('screen-games') };
const grid         = document.getElementById('grid');
const searchInput  = document.getElementById('search');
const hideToggle   = document.getElementById('hide-incomplete');
const countEl      = document.getElementById('count');
const toTopBtn     = document.getElementById('to-top');
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const lightboxCap  = document.getElementById('lightbox-caption');
const lightboxClose= document.getElementById('lightbox-close');

/* ---------------------------------------------------------
   4. STATE
   --------------------------------------------------------- */
let lang = 'en';

/* ---------------------------------------------------------
   5. HELPERS
   --------------------------------------------------------- */
const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const t = (key, ...args) => {
  const v = I18N[lang][key];
  return typeof v === 'function' ? v(...args) : v;
};

/** Localised field with graceful fallback to English. */
const field = (game, suffix) =>
  game[`${lang}_${suffix}`] || game[`en_${suffix}`] || '';

/** Numeric badge shown on the card. */
function gameNumber(game) {
  const m = String(game.en_n || '').match(/(\d+)/);
  if (m) return m[1];
  const p = String(game.picture || '').match(/(\d+)/);
  return p ? p[1] : '?';
}

/** Inline SVG placeholder used when a photo is missing. */
function placeholderSrc(game) {
  const n = gameNumber(game);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#e8eef7"/>
    <circle cx="400" cy="215" r="78" fill="none" stroke="#c2d2e8" stroke-width="8"/>
    <text x="400" y="245" font-family="Manrope, Arial, sans-serif" font-size="76"
          font-weight="700" fill="#9db4d0" text-anchor="middle">${n}</text>
    <text x="400" y="360" font-family="Manrope, Arial, sans-serif" font-size="26"
          fill="#9db4d0" text-anchor="middle">Image not available</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------------------------------------------------------
   6. RENDERING
   --------------------------------------------------------- */
function getFilteredGames() {
  const q = searchInput.value.trim().toLowerCase();
  const hideIncomplete = hideToggle.checked;

  return DATA.filter((g) => {
    if (hideIncomplete && String(g.en_d || '').trim().length < 20) return false;
    if (!q) return true;
    const haystack = [
      g.en_n, g.fr_n, g.ar_n,
      g.en_d, g.fr_d, g.ar_d
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

function render() {
  const games = getFilteredGames();
  const total = DATA.length;

  countEl.textContent = t('showing', games.length, total);

  if (!games.length) {
    grid.innerHTML = `<p class="empty">${esc(t('noResults'))}</p>`;
    return;
  }

  const frag = document.createDocumentFragment();
  const wrap = document.createElement('div');
  wrap.innerHTML = games.map((g) => {
    const title = field(g, 'n');
    const desc  = field(g, 'd');
    const num   = gameNumber(g);

    return `
      <article class="card" data-id="${esc(g.id)}">
        <div class="card__media">
          <img class="card__img"
               src="photos/${esc(g.picture)}"
               alt="${esc(title)}"
               loading="lazy"
               data-num="${esc(num)}">
          <span class="card__badge">${esc(num)}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${esc(title)}</h3>
          <p class="card__desc">${esc(desc)}</p>
        </div>
      </article>`;
  }).join('');

  while (wrap.firstChild) frag.appendChild(wrap.firstChild);
  grid.innerHTML = '';
  grid.appendChild(frag);
}

/* ---------------------------------------------------------
   7. LANGUAGE
   --------------------------------------------------------- */
function applyLanguage(next) {
  lang = next;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Static UI strings
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[lang][key] !== undefined) el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Active state on the language switch
  document.querySelectorAll('#lang-switch button').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });

  document.title = t('title');
  render();
}

/* ---------------------------------------------------------
   8. SCREEN NAVIGATION
   --------------------------------------------------------- */
function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) =>
    el.classList.toggle('is-active', key === name));
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------------------------------------------------------
   9. LIGHTBOX
   --------------------------------------------------------- */
function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCap.textContent = caption;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

/* ---------------------------------------------------------
   10. EVENT WIRING
   --------------------------------------------------------- */

// Home – language choice
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
    showScreen('games');
  });
});

// Games – language switch
document.querySelectorAll('#lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Back to home
document.getElementById('btn-back').addEventListener('click', () => showScreen('home'));

// Search
searchInput.addEventListener('input', render);

// Hide incomplete toggle
hideToggle.addEventListener('change', render);

// Image fallback + lightbox (delegated)
grid.addEventListener('error', (e) => {
  const img = e.target;
  if (img.tagName === 'IMG' && img.classList.contains('card__img')) {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = '1';
    img.src = placeholderSrc({ picture: `game${img.dataset.num}.png` });
  }
}, true);

grid.addEventListener('click', (e) => {
  const img = e.target.closest('.card__img');
  if (!img) return;
  const card = img.closest('.card');
  const title = card.querySelector('.card__title').textContent;
  openLightbox(img.src, title);
});

// Lightbox close
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});

// To-top button
window.addEventListener('scroll', () => {
  toTopBtn.classList.toggle('is-visible', window.scrollY > 400);
}, { passive: true });

toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------------------------------------------------------
   11. BOOT
   --------------------------------------------------------- */
applyLanguage('en');
showScreen('home');