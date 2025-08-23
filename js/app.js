// ===== BashCamp core (no modules, no theme switching) =====

// Render lessons from data/lesson.json into #lessons-grid
window.renderLessons = async function () {
  try {
    let lessons = window.LESSONS || null;
    if (!lessons) {
      const res = await fetch('data/lesson.json');
      lessons = await res.json();
    }
    const grid = document.getElementById('lessons-grid');
    if (!grid) return;
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
  } catch (e) {
    console.error(e);
  }
};

// URL param helper
window.qs = k => new URLSearchParams(location.search).get(k);

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

// Public helpers (attached to window, not modules)
window.addXP = function addXP(n){
  const xp = Number(localStorage.getItem('xp')||0) + n;
  localStorage.setItem('xp', xp);
  const badge = document.querySelector('#xp-badge');
  if (badge) badge.textContent = `XP: ${xp}`;
};
window.getProgress = function getProgress(){
  try { return JSON.parse(localStorage.getItem('progress')||'{}'); }
  catch(e){ return {}; }
};
window.setProgress = function setProgress(obj){
  localStorage.setItem('progress', JSON.stringify(obj));
};

// Footer year nicety
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
