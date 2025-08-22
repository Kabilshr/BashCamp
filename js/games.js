// Game engine with regex + simulated output
window.initGame = async function () {
  const id = new URLSearchParams(location.search).get('id') || '1';
  let tasks = [];
  try {
    let lessons = (window.LESSONS || null);
    if (!lessons) {
      const res = await fetch('data/lesson.json');
      lessons = await res.json();
    }
    const lesson = lessons.find(x => String(x.id) === String(id));
    if (lesson && lesson.game && lesson.game.tasks) {
      tasks = lesson.game.tasks;
    }
    if (lesson) {
      document.getElementById('game-title').textContent = lesson.title + " — Mini-Game";
      document.getElementById('game-sub').textContent = lesson.blurb || "";
    }
  } catch (e) { console.error(e); }

  const taskEl = document.getElementById('task');
  const cmdEl = document.getElementById('cmd');
  const outEl = document.getElementById('output');
  const runBtn = document.getElementById('runBtn');
  let i = 0;

  // Simulated filesystem state
  const state = { cwd: "/home/user", files: ["file.txt", "hello.sh"] };

  function showTask() {
    if (tasks[i]) {
      taskEl.textContent = "Task " + (i + 1) + " of " + tasks.length + ": " + tasks[i].prompt;
    } else {
      taskEl.textContent = "No tasks found.";
    }
  }

  function simulate(cmd) {
    if (/^pwd$/.test(cmd)) return state.cwd;
    if (/^ls(\s+-[al]*)?$/.test(cmd)) return state.files.join("\n");
    if (/^echo\s+(.+)/.test(cmd)) return cmd.replace(/^echo\s+/, "");
    if (/^cd\s+\.\.$/.test(cmd)) { state.cwd = "/home"; return ""; }
    return "(no output)";
  }

  function run() {
    if (!tasks[i]) return;
    const v = cmdEl.value.trim();
    let ok = false;

    // Check against regex patterns
    for (const exp of tasks[i].expect) {
      const regex = new RegExp("^" + exp.replace(/\s+/g, "\\s+") + "$", "i");
      if (regex.test(v)) { ok = true; break; }
    }

    if (ok) {
      const result = simulate(v);
      outEl.textContent += "✅ " + v + "\n" + (result ? result + "\n" : "");
      i++;
      if (i < tasks.length) {
        showTask();
      } else {
        outEl.textContent += "\n🎉 All tasks complete! Try the quiz next.\n";
        taskEl.textContent = "All tasks done!";
      }
    } else {
      outEl.textContent += "❌ Not quite. Hint: try " + tasks[i].expect[0].split(" ")[0] + "\n";
    }
    cmdEl.value = "";
  }

  runBtn.addEventListener('click', run);
  cmdEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { run(); } });
  showTask();
};

window.addEventListener('DOMContentLoaded', () => { window.initGame(); });
