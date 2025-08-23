// js/games.js

// Game engine with regex + simulated output.
// Do NOT auto-init here. games.html calls window.initGame() once.
window.initGame = async function () {
  const id = new URLSearchParams(location.search).get('id') || '1';
  let tasks = [];
  try {
    let lessons = (window.LESSONS || null);
    if (!lessons) {
      const res = await fetch('data/lesson.json', { cache: 'no-store' });
      lessons = await res.json();
    }
    const lesson = lessons.find(x => String(x.id) === String(id));
    if (lesson?.game?.tasks) tasks = lesson.game.tasks;
    if (lesson) {
      const t = document.getElementById('game-title');
      const s = document.getElementById('game-sub');
      if (t) t.textContent = `${lesson.title} — Mini‑Game`;
      if (s) s.textContent = lesson.blurb || '';
    }
  } catch (e) {
    console.error(e);
  }

  const taskEl = document.getElementById('task');
  const cmdEl  = document.getElementById('cmd');
  const outEl  = document.getElementById('output');
  const runBtn = document.getElementById('runBtn');
  if (!taskEl || !cmdEl || !outEl || !runBtn) return;

  let i = 0;

  // Simulated environment
  const state = { cwd: '/home/user', files: ['file.txt', 'hello.sh'] };

  function promptLine(cmd) {
    return `user@bashcamp:${state.cwd}$ ${cmd}`;
  }

  function showTask() {
    taskEl.textContent = tasks[i]
      ? `Task ${i + 1} of ${tasks.length}: ${tasks[i].prompt}`
      : 'No tasks found.';
  }

  // Simulate minimal command set
  function simulate(cmd) {
    if (/^pwd$/i.test(cmd)) return state.cwd;
    if (/^ls(\s+-[al]+)?$/i.test(cmd)) return state.files.join('\n');
    if (/^echo\s+(.+)/i.test(cmd)) return cmd.replace(/^echo\s+/i, '');
    if (/^cd\s+\.\.$/i.test(cmd)) { state.cwd = '/home'; return ''; }
    return '';
  }

  function normalize(s) { return s.trim().replace(/\s+/g, ' '); }

  function toRegex(expectStr) {
    const escaped = expectStr
      .trim()
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\s+/g, '\\s+');
    return new RegExp(`^${escaped}$`, 'i');
  }

  let running = false;

  function runOnce() {
    if (running) return;
    running = true;
    setTimeout(() => (running = false), 0);

    if (!tasks[i]) return;

    const raw = cmdEl.value;
    const v = normalize(raw);
    if (!v) return;

    // 1) Write prompt + command
    outEl.textContent += `${promptLine(v)}\n`;

    // 2) Show simulated output
    const result = simulate(v);
    if (result) outEl.textContent += result + '\n';

    // 3) Validate AFTER output
    const expects = tasks[i].expect || [];
    let ok = false;
    for (const exp of expects) {
      if (toRegex(exp).test(v)) { ok = true; break; }
    }

    if (ok) {
      outEl.textContent += `✅ Correct\n\n`;
      i++;
      if (i < tasks.length) {
        showTask();
      } else {
        outEl.textContent += `🎉 All tasks complete! Try the quiz next.\n`;
        taskEl.textContent = 'All tasks done!';
      }
    } else {
      const hint = (expects[0] || '').split(/\s+/)[0] || 'the right command';
      outEl.textContent += `❌ Not quite. Hint: try ${hint}\n\n`;
    }

    cmdEl.value = '';
    outEl.scrollTop = outEl.scrollHeight;
  }

  runBtn.addEventListener('click', runOnce);
  cmdEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runOnce();
    }
  });

  showTask();
};
