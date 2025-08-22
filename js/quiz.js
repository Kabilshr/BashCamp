
class Quiz {
  constructor(questions){ this.questions = questions; this.index = 0; this.correct = 0; }
  current(){ return this.questions[this.index]; }
  answer(choice){ if(choice === this.current().answer){ this.correct++; } this.index++; return this.index >= this.questions.length; }
  score(){ return Math.round((this.correct / this.questions.length) * 100); }
}

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
    q.choices.forEach((c, idx) => {
      const a = document.createElement('button');
      a.className = "list-group-item list-group-item-action bg-dark text-light border-secondary";
      a.textContent = c;
      a.onclick = () => {
        [...choicesDiv.children].forEach(b => b.classList.remove('active'));
        a.classList.add('active');
        nextBtn.disabled = false;
        nextBtn.dataset.choice = idx;
      };
      choicesDiv.appendChild(a);
    });
    nextBtn.disabled = true;
  }
  nextBtn.onclick = () => {
    const choice = parseInt(nextBtn.dataset.choice, 10);
    const done = quiz.answer(choice);
    render();
  };
  render();
})();
