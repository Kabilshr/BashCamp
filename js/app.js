
// Render lessons from data/lesson.json into #lessons-grid
window.renderLessons = async function(){
  try{
    let lessons = (window.LESSONS || null);
    if(!lessons){ const res = await fetch('data/lesson.json'); lessons = await res.json(); }
    const grid = document.getElementById('lessons-grid');
    if(!grid) return;
    grid.innerHTML = '';
    lessons.forEach(l => {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="card bg-dark border-secondary h-100">
        <div class="card-body d-flex flex-column">
          <span class="badge mb-2">${l.level || 'Lesson'}</span>
          <h3 class="h5">${l.title}</h3>
          <p class="text-secondary flex-grow-1">${l.blurb || ''}</p>
          <div class="d-flex gap-2">
            <a class="btn btn-outline-info btn-sm" href="lesson.html?id=${l.id}">Open Lesson</a>
            ${l.game ? `<a class="btn btn-outline-light btn-sm" href="games.html?id=${l.id}">Play Game</a>` : ''}
            ${l.quiz ? `<a class="btn btn-info btn-sm" href="quiz.html?id=${l.id}">Take Quiz</a>` : ''}
          </div>
        </div>
      </div>`;
      grid.appendChild(card);
    });
  }catch(e){
    console.error(e);
  }
}

// Simple util to read URL params
window.qs = (k) => new URLSearchParams(location.search).get(k);


// ===== BashCamp app.js =====

// Nav highlight + XP badge
(function initNavAndXP(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
  const badge = document.querySelector('#xp-badge');
  if (badge) badge.textContent = `XP: ${Number(localStorage.getItem('xp')||0)}`;
})();

// Public helpers (used by quiz/games)
export function addXP(n){
  const xp = Number(localStorage.getItem('xp')||0) + n;
  localStorage.setItem('xp', xp);
  const badge = document.querySelector('#xp-badge');
  if (badge) badge.textContent = `XP: ${xp}`;
}
export function getProgress(){
  try { return JSON.parse(localStorage.getItem('progress')||'{}'); }
  catch(e){ return {}; }
}
export function setProgress(obj){
  localStorage.setItem('progress', JSON.stringify(obj));
}

// ========= Theme (Auto | Light | Dark) — default: Light =========
const THEME_KEY = 'themeMode';         // 'auto' | 'light' | 'dark'
const mqLight = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;

function applyTheme(mode) {
  if (mode === 'light') document.documentElement.setAttribute('data-theme','light');
  else if (mode === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme'); // auto (follows OS)
  updateBranding(); // keep logo & favicon in sync
}

// return stored mode; set 'light' on first visit
function currentMode(){
  const saved = localStorage.getItem(THEME_KEY);
  if (!saved) { localStorage.setItem(THEME_KEY,'light'); return 'light'; }
  return saved;
}

// effective visual theme (light/dark) after considering 'auto'
function effectiveTheme(){
  const mode = currentMode();
  if (mode === 'auto') return (mqLight && mqLight.matches) ? 'light' : 'dark';
  return mode; // 'light' or 'dark'
}

function mountThemeControl(){
  const nav = document.querySelector('.nav .container');
  if (!nav) return;
  const sel = document.createElement('select');
  sel.className = 'theme-select';
  sel.setAttribute('aria-label','Theme mode');
  sel.innerHTML = `
    <option value="auto">Theme: Auto</option>
    <option value="light">Theme: Light</option>
    <option value="dark">Theme: Dark</option>`;
  sel.value = currentMode();
  sel.onchange = () => {
    const v = sel.value;
    if (v === 'auto') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, v);
    applyTheme(v);
  };
  const xp = document.querySelector('#xp-badge');
  nav.insertBefore(sel, xp || null);
}

// swap header logo + favicon to match theme
function updateBranding(){
  const theme = effectiveTheme(); // 'light' | 'dark'
  const logoSrc = theme === 'light' ? 'assets/logo-light.svg' : 'assets/logo-dark.svg';

  // Header brand image
  const brandImg = document.querySelector('.brand img');
  if (brandImg && brandImg.getAttribute('src') !== logoSrc) {
    brandImg.setAttribute('src', logoSrc);
  }

  // Favicon
  let icon = document.querySelector('link[rel="icon"]');
  if (!icon){
    icon = document.createElement('link');
    icon.rel = 'icon';
    document.head.appendChild(icon);
  }
  // Only change if necessary
  if (!icon.href.endsWith(logoSrc)) icon.href = logoSrc;
}

// Listen for OS theme changes when in 'auto'
function onSystemChange(){
  if (!localStorage.getItem(THEME_KEY)) { // auto
    applyTheme('auto');
  }
}

// Init theme + controls
applyTheme(currentMode());
if (mqLight) mqLight.addEventListener('change', onSystemChange);
document.addEventListener('DOMContentLoaded', mountThemeControl);

// Footer year (small nicety)
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});