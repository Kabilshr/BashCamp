// js/quiz.js

class Quiz {
  constructor(questions){ this.questions = questions; this.index = 0; this.correct = 0; }
  current(){ return this.questions[this.index]; }
  answer(choice){ if(choice === this.current().answer){ this.correct++; } this.index++; return this.index >= this.questions.length; }
  score(){ return Math.round((this.correct / this.questions.length) * 100); }
}

// Inject a tiny style so selection is clearly visible even on dark themes
(function ensureQuizStyles(){
  if (document.getElementById('quiz-style')) return;
  const s = document.createElement('style');
  s.id = 'quiz-style';
  s.textContent = `
    .list-group-item.selected{
      background:#0b1428 !important;
      color:#ffffff !important;
      border-color:#66e3a4 !important;
      box-shadow:0 0 0 .15rem rgba(102,227,164,.25);
    }
  `;
  document.head.appendChild(s);
})();

(async function(){
  const id = window.qs ? window.qs('id') : new URLSearchParams(location.search).get('id');
  let questions = [];
  try {
    let lessons = (window.LESSONS || null);
    if(!lessons){ const res = await fetch('data/lesson.json'); lessons = await res.json(); }
    const lesson = lessons.find(x => String(x.id) === String(id)) || lessons[0];
    questions = (lesson && lesson.quiz) ? lesson.quiz : [
      {text: "Which command prints working directory?", choices: ["ls","pwd","cd","cat"], answer: 1}
    ];
  } catch(e){ console.error(e); }

  const quiz = new Quiz(questions);
  const qtext = document.getElementById('qtext');
  const choicesDiv = document.getElementById('choices');
  const nextBtn = document.getElementById('next');

  function render(){
    const q = quiz.current();
    if(!q){
      document.getElementById('quiz-card').classList.add('d-none');
      const r = document.getElementById('result');
      r.classList.remove('d-none');
      r.innerHTML = "You scored <strong>" + quiz.score() + "%</strong>. " + (quiz.score() >= 70 ? "✅ Pass!" : "❌ Try again.");
      return;
    }

    qtext.textContent = q.text;
    choicesDiv.innerHTML = "";
    nextBtn.disabled = true;
    delete nextBtn.dataset.choice;

    q.choices.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = "list-group-item list-group-item-action bg-dark text-light border-secondary";
      btn.textContent = c;

      btn.onclick = () => {
        // clear previous selection
        for (const el of choicesDiv.children){
          el.classList.remove('active','selected');
          el.setAttribute('aria-pressed','false');
        }
        // mark current as selected
        btn.classList.add('active','selected');
        btn.setAttribute('aria-pressed','true');

        nextBtn.disabled = false;
        nextBtn.dataset.choice = String(idx);
      };

      choicesDiv.appendChild(btn);
    });
  }

  nextBtn.onclick = () => {
    const choice = parseInt(nextBtn.dataset.choice, 10);
    const done = quiz.answer(choice);
    render();
  };

  render();
})();