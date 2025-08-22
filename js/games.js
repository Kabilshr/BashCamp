// Game engine: loads tasks for lesson id from lesson.json
window.initGame = async function(){
  const id = new URLSearchParams(location.search).get('id') || '1';
  let tasks = [];
  try {
    let lessons = (window.LESSONS || null);
    if(!lessons){ const res = await fetch('data/lesson.json'); lessons = await res.json(); }
    const lesson = lessons.find(x => String(x.id) === String(id));
    if(lesson && lesson.game && lesson.game.tasks){
      tasks = lesson.game.tasks;
    }
    if(lesson){
      document.getElementById('game-title').textContent = lesson.title + " — Mini‑Game";
      document.getElementById('game-sub').textContent = lesson.blurb || "";
    }
  } catch(e){ console.error(e); }

  const taskEl = document.getElementById('task');
  const cmdEl = document.getElementById('cmd');
  const outEl = document.getElementById('output');
  const runBtn = document.getElementById('runBtn');
  let i = 0;
  function showTask(){
    if(tasks[i]){
      taskEl.textContent = "Task " + (i+1) + " of " + tasks.length + ": " + tasks[i].prompt;
    } else {
      taskEl.textContent = "No tasks found.";
    }
  }
  function run(){
    if(!tasks[i]) return;
    const v = cmdEl.value.trim();
    if(tasks[i].expect.includes(v)){
      outEl.textContent += "✅ Correct: " + v + "\n";
      i++;
      if(i < tasks.length){
        showTask();
      } else {
        outEl.textContent += "\n🎉 All tasks complete! Try the quiz next.";
        taskEl.textContent = "All tasks done!";
      }
    } else {
      outEl.textContent += "❌ Not quite. Hint: try " + tasks[i].expect[0].split(" ")[0] + "\n";
    }
    cmdEl.value = "";
  }
  runBtn.addEventListener('click', run);
  cmdEl.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ run(); }});
  showTask();
}
// auto-init
window.addEventListener('DOMContentLoaded', ()=>{ window.initGame(); });
