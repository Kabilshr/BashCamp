window.LESSONS = [
  {
    "id": 1,
    "level": "Basics",
    "title": "Bash Fundamentals",
    "blurb": "Start here. Learn what a shell is, how commands are found and executed, how PATH works, absolute vs relative paths, and where to get help with man pages and --help. Practice reading command output, checking exit codes, and finding binaries with type/which.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Bash Fundamentals</h2><p class=\"text-secondary\">Bash is both a <strong>command interpreter</strong> and a <strong>scripting language</strong>. You type a command, Bash locates it, runs it, and shows output.</p><h3 class=\"h6\">Running commands</h3><ul><li><code>type ls</code> or <code>which ls</code> shows where a command comes from.</li><li><code>echo $PATH</code> lists directories Bash searches for executables.</li><li>Absolute path: starts with <code>/</code> (e.g., <code>/usr/bin/ls</code>). Relative: from current directory.</li></ul><pre><code># where am I?\npwd\n# what's here?\nls -la\n# run a program by absolute path\n/usr/bin/printf \"OK\\n\"\n</code></pre><h3 class=\"h6\">Getting help</h3><ul><li><code>man ls</code> opens the manual page.</li><li>Many tools support <code>--help</code>.</li><li>Search man page names: <code>apropos archive</code>.</li></ul><h3 class=\"h6\">Exit status</h3><p class=\"text-secondary\">Every command returns an exit code in <code>$?</code>. <code>0</code>=success, non‑zero=error.</p><pre><code>false\necho $?\n</code></pre></section>",
    "game": {
      "tasks": [
        { "prompt": "Print 'hello'", "expect": ["echo hello"] },
        { "prompt": "Show current dir", "expect": ["pwd"] },
        { "prompt": "List files incl. hidden", "expect": ["ls -a", "ls -al", "ls -la"] }
      ]
    },
    "quiz": [
      { "text": "Which command prints the working directory?", "choices": ["ls", "pwd", "cd", "whoami"], "answer": 1 },
      { "text": "Which symbol appends output to a file?", "choices": [">", ">>", "|", "<"], "answer": 1 },
      { "text": "Which command shows the current user?", "choices": ["whoami", "who", "users", "id -G"], "answer": 0 },
      { "text": "Who released Bash initially and in which year?", "choices": ["Brian Fox — 1989", "Chet Ramey — 1990", "Ken Thompson — 1977", "Richard Stallman — 1984"], "answer": 0 },
      { "text": "Which variable lists directories searched for executables?", "choices": ["HOME", "SHELL", "PATH", "PWD"], "answer": 2 }
    ]
  },
  {
    "id": 2,
    "level": "Basics",
    "title": "Shell",
    "blurb": "Understand what a shell is, how it reads input, interactive vs non‑interactive modes, and login vs non‑login sessions. Know which startup files are read and where to put aliases vs environment.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Shell</h2><p class=\"text-secondary\">A <strong>shell</strong> reads commands from your keyboard or a script file and executes them. Bash is one popular shell; others include <code>zsh</code> and <code>fish</code>.</p><h3 class=\"h6\">Interactive vs non‑interactive</h3><ul><li>Interactive: prompt is visible; <code>$-</code> contains <code>i</code>.</li><li>Non‑interactive: running a script or piped input; no prompt.</li></ul><pre><code>echo $-\n# contains 'i' when interactive\n</code></pre><h3 class=\"h6\">Login vs non‑login</h3><ul><li>Login shells read files like <code>/etc/profile</code>, <code>~/.bash_profile</code> or <code>~/.profile</code>.</li><li>Non‑login interactive shells usually read <code>~/.bashrc</code>.</li></ul><pre><code>echo \"$0\"   # shell name\nps -p $$     # see parent process for context\n</code></pre><p class=\"text-secondary mb-0\">Put aliases and prompt tweaks in <code>~/.bashrc</code>; keep exported env in login files.</p></section>",
    "game": {
      "tasks": [
        { "prompt": "Print 'hello'", "expect": ["echo hello"] },
        { "prompt": "Show current dir", "expect": ["pwd"] },
        { "prompt": "List files incl. hidden", "expect": ["ls -a", "ls -al", "ls -la"] }
      ]
    },
    "quiz": [
      { "text": "Which property indicates an interactive shell?", "choices": ["Presence of $ in PS1", "$- contains i", "SHELL=/bin/bash", "PWD=/home/user"], "answer": 1 },
      { "text": "Which file is commonly read by non‑login interactive Bash shells?", "choices": ["~/.bashrc", "~/.bash_profile", "/etc/shells", "~/.profile"], "answer": 0 },
      { "text": "Which command prints the shell’s name as invoked?", "choices": ["echo $0", "which bash", "type bash", "ps -ef"], "answer": 0 }
    ]
  },
  {
    "id": 3,
    "level": "Basics",
    "title": "Bash shell",
    "blurb": "Why Bash is common, key features like history, completion, variables, globbing, and how to check your Bash version. Know the difference between builtins and external commands.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Bash shell</h2><p class=\"text-secondary\">Bash stands for <em>Bourne Again SHell</em>. It extends <code>sh</code> with history, job control, arrays, completion, and more.</p><h3 class=\"h6\">Core features</h3><ul><li><strong>History</strong>: arrow keys, <code>history</code>, <code>!n</code>.</li><li><strong>Completion</strong>: hit <kbd>Tab</kbd> to complete files/commands.</li><li><strong>Globbing</strong>: <code>*</code>, <code>?</code>, <code>[a-z]</code> for filename patterns.</li><li><strong>Builtins</strong> vs external programs: <code>help cd</code>, <code>type echo</code>.</li></ul><pre><code>bash --version\nshopt | grep glob\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Print 'hello'", "expect": ["echo hello"] },
        { "prompt": "Show current dir", "expect": ["pwd"] },
        { "prompt": "List files incl. hidden", "expect": ["ls -a", "ls -al", "ls -la"] }
      ]
    },
    "quiz": [
      { "text": "Bash expands filename patterns like *.log. What is that feature called?", "choices": ["Regexing", "Globbing", "Hashing", "Quoting"], "answer": 1 },
      { "text": "Which command shows whether a command is a builtin or external?", "choices": ["which", "whereis", "type", "hash"], "answer": 2 },
      { "text": "Which command prints the Bash version?", "choices": ["bash -v", "bash --version", "version", "help bash"], "answer": 1 }
    ]
  },
  {
    "id": 4,
    "level": "Basics",
    "title": "CLI and GUI",
    "blurb": "Compare the command line with graphical tools. Know when CLI wins for automation, reproducibility, and remote work, and when GUIs are better for visual tasks and discovery.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">CLI and GUI</h2><p class=\"text-secondary\">The <strong>CLI</strong> excels at scripting, automation, reproducibility, and remote servers. <strong>GUIs</strong> shine for visual tasks and exploration.</p><div class=\"row g-3\"><div class=\"col-md-6\"><div class=\"card bg-dark border-secondary h-100\"><div class=\"card-body\"><h3 class=\"h6\">CLI strengths</h3><ul><li>Fast repetitive tasks</li><li>Automatable and scriptable</li><li>Works over SSH</li><li>Composable via pipes</li></ul></div></div></div><div class=\"col-md-6\"><div class=\"card bg-dark border-secondary h-100\"><div class=\"card-body\"><h3 class=\"h6\">GUI strengths</h3><ul><li>Visual feedback</li><li>Discoverability</li><li>Lower barrier for new users</li></ul></div></div></div></div><pre><code># count 404s in server logs\ncat access.log | grep 404 | wc -l\n</code></pre><p class=\"text-secondary mb-0\">Choose the tool that minimizes time and mistakes.</p></section>",
    "game": {
      "tasks": [
        { "prompt": "Print 'hello'", "expect": ["echo hello"] },
        { "prompt": "Show current dir", "expect": ["pwd"] },
        { "prompt": "List files incl. hidden", "expect": ["ls -a", "ls -al", "ls -la"] }
      ]
    },
    "quiz": [
      { "text": "Which symbol creates a pipeline between two commands?", "choices": ["&", "|", ">", "<"], "answer": 1 },
      { "text": "Which scenario is a better fit for CLI?", "choices": ["Color-correcting photos", "Automating a nightly server job", "Designing a slide deck", "Editing a diagram"], "answer": 1 },
      { "text": "Which command counts lines from stdin?", "choices": ["wc -l", "nl", "cat -n", "lines"], "answer": 0 }
    ]
  },
  {
    "id": 5,
    "level": "Basics",
    "title": "Job Automation",
    "blurb": "Schedule work with cron and at; understand crontab format, simple logging, and safe practices for environment and PATH in scheduled jobs.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Job Automation</h2><p class=\"text-secondary\">Automate recurring tasks with <code>cron</code> and one‑off jobs with <code>at</code>. Cron uses a five‑field schedule expression.</p><h3 class=\"h6\">Crontab format</h3><pre><code># m h dom mon dow  command\n0 1 * * * /usr/local/bin/backup.sh >> \"$HOME/logs/backup.log\" 2>&1\n</code></pre><ul><li>Edit with <code>crontab -e</code>; list with <code>crontab -l</code>.</li><li>Always use absolute paths and capture output.</li><li>Set required env (e.g., <code>PATH</code>) at the top of the crontab.</li></ul><h3 class=\"h6\">One‑off with at</h3><pre><code>echo \"echo run once\" | at now + 2 minutes\natq   # queue\natrm 1\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Open crontab editor", "expect": ["crontab -e"] },
        { "prompt": "List user crontab", "expect": ["crontab -l"] },
        { "prompt": "Cron: run /usr/local/bin/backup.sh daily at 01:00", "expect": ["0 1 * * * /usr/local/bin/backup.sh"] }
      ]
    },
    "quiz": [
      { "text": "How many time fields are in a standard cron expression (excluding the command)?", "choices": ["4", "5", "6", "7"], "answer": 1 },
      { "text": "Which command edits the current user’s crontab?", "choices": ["cron -e", "crontab -e", "at -e", "systemctl edit"], "answer": 1 },
      { "text": "Which redirect appends both stdout and stderr safely to a file?", "choices": ["> file 2>&1", ">> file 2>&1", "2> file", "1> file"], "answer": 1 }
    ]
  },
  {
    "id": 6,
    "level": "Basics",
    "title": "Navigating the Linux file system",
    "blurb": "Master pwd, ls, cd. Understand absolute vs relative paths, home (~), parent (..), and dot (.). Use globbing and tab completion to move fast.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Navigating the Linux file system</h2><p class=\"text-secondary\">The shell tracks a current directory. Use these to move quickly and see where you are.</p><pre><code>pwd                # print current directory\nls -la             # list files incl. hidden\ncd /etc            # absolute path\ncd -               # jump back\ncd ~/projects      # home subdir\n</code></pre><h3 class=\"h6\">Absolute vs relative</h3><ul><li>Absolute begins with <code>/</code> from the root.</li><li>Relative is resolved from the current directory.</li></ul><h3 class=\"h6\">Globbing</h3><pre><code>ls *.log\nls src/*.{c,h}\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Show current directory", "expect": ["pwd"] },
        { "prompt": "List all files including hidden", "expect": ["ls -a", "ls -al", "ls -la"] },
        { "prompt": "Move to parent directory", "expect": ["cd .."] }
      ]
    },
    "quiz": [
      { "text": "Which path is absolute?", "choices": ["../bin", "./script.sh", "/usr/local/bin", "docs/readme.md"], "answer": 2 },
      { "text": "What does ~ expand to in a typical shell?", "choices": ["Root directory", "Home directory", "Current directory", "Previous directory"], "answer": 1 },
      { "text": "Which command lists hidden files?", "choices": ["ls -h", "ls -a", "ls *", "ls --hidden"], "answer": 1 }
    ]
  },
  {
    "id": 7,
    "level": "Basics",
    "title": "Basic bash scripting",
    "blurb": "Create a script with a shebang, make it executable, run it, and understand minimal safe defaults like set -euo pipefail and file permissions.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Basic bash scripting</h2><p class=\"text-secondary\">A Bash script is a text file of commands executed top‑to‑bottom.</p><h3 class=\"h6\">Hello script</h3><pre><code>nano hello.sh\n</code></pre><pre><code>#!/usr/bin/env bash\nset -euo pipefail\nprintf \"Hello from a script!\\n\"\n</code></pre><pre><code>chmod +x hello.sh\n./hello.sh\n</code></pre><ul><li><code>set -euo pipefail</code> is a safe default for small scripts.</li><li>Use <code>chmod</code> to make it executable.</li></ul><h3 class=\"h6\">Permissions</h3><pre><code>ls -l hello.sh\nchmod u+x hello.sh\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Create hello.sh", "expect": ["touch hello.sh"] },
        { "prompt": "Make it executable", "expect": ["chmod +x hello.sh"] },
        { "prompt": "Run it from here", "expect": ["./hello.sh"] }
      ]
    },
    "quiz": [
      { "text": "What is the purpose of a shebang like #!/usr/bin/env bash?", "choices": ["Specify interpreter", "Comment line", "Mark file as binary", "Increase speed"], "answer": 0 },
      { "text": "Which command makes a script executable by the user?", "choices": ["chmod +x script.sh", "chown +x script.sh", "exec script.sh", "run script.sh"], "answer": 0 },
      { "text": "What does set -euo pipefail aim to do?", "choices": ["Enable colors", "Harden scripts against common errors", "Run in background", "Speed up loops"], "answer": 1 }
    ]
  },
  {
    "id": 8,
    "level": "Basics",
    "title": "Shell script",
    "blurb": "Understand script anatomy: the shebang, arguments ($0, $1, $@), exit codes, functions, and comments. Validate inputs and return proper statuses.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Shell script</h2><p class=\"text-secondary\">Scripts accept <strong>arguments</strong> and return an <strong>exit code</strong>. Structure them with functions.</p><pre><code>#!/usr/bin/env bash\nset -euo pipefail\nusage(){ echo \"Usage: $0 NAME\"; }\nmain(){ local name=${1:-}; [[ -z ${name} ]] && { usage; return 2; }\n  echo \"Hello, ${name}\" }\nmain \"$@\"\n</code></pre><ul><li><code>$0</code> is the script name; <code>$1</code>, <code>$2</code>… are arguments.</li><li><code>$@</code> expands to all args safely.</li><li>Return with <code>exit</code> or a function <code>return</code> code.</li></ul><pre><code>./greeter.sh Sam\necho $?\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Create hello.sh", "expect": ["touch hello.sh"] },
        { "prompt": "Make it executable", "expect": ["chmod +x hello.sh"] },
        { "prompt": "Run it from here", "expect": ["./hello.sh"] }
      ]
    },
    "quiz": [
      { "text": "What does $0 expand to inside a script?", "choices": ["The current user", "The first argument", "The script name", "The exit code"], "answer": 2 },
      { "text": "Which expands to all arguments correctly?", "choices": ["$*", "$@", "${*}", "$$@"], "answer": 1 },
      { "text": "A function returns status using:", "choices": ["print", "echo", "return", "yield"], "answer": 2 }
    ]
  },
  {
    "id": 9,
    "level": "Basics",
    "title": "Declaring and using variables",
    "blurb": "Create shell variables, export environment variables, understand quoting and parameter expansion, and avoid spaces around = in assignments.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Declaring and using variables</h2><p class=\"text-secondary\">Variables are <code>name=value</code> with no spaces. Use quotes to handle spaces and special characters.</p><pre><code>NAME=\"Bash\"\necho \"Hello, $NAME\"\nexport PATH_EXTRA=/opt/bin\nPATH=\"$PATH:$PATH_EXTRA\"\n</code></pre><h3 class=\"h6\">Quoting</h3><ul><li>Double quotes expand vars: <code>\"$HOME\"</code>.</li><li>Single quotes are literal: <code>'$HOME'</code>.</li></ul><h3 class=\"h6\">Parameter expansion</h3><pre><code>echo \"User: ${USER:-unknown}\"\nfile=${1:?\"missing filename\"}\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Create variable NAME=Sam", "expect": ["NAME=Sam"] },
        { "prompt": "Print variable NAME", "expect": ["echo $NAME"] },
        { "prompt": "Export PATH_EXTRA=/opt/bin", "expect": ["export PATH_EXTRA=/opt/bin"] }
      ]
    },
    "quiz": [
      { "text": "Which quoting expands variables?", "choices": ["Single quotes", "Double quotes", "Backticks", "No quotes"], "answer": 1 },
      { "text": "Which assignment is valid?", "choices": ["NAME = Sam", "NAME=Sam", "NAME= Sam", "NAME =Sam"], "answer": 1 },
      { "text": "What does ${VAR:-default} do?", "choices": ["Always prints default", "Errors if unset", "Uses default if VAR is unset or empty", "Exports VAR"], "answer": 2 }
    ]
  },
  {
    "id": 10,
    "level": "Basics",
    "title": "Basic logic",
    "blurb": "Write conditionals and loops with test/[[]], if/elif/else, for/while, and case. Learn common numeric, string, and file tests.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Basic logic</h2><p class=\"text-secondary\">Control flow lets scripts make decisions and iterate.</p><h3 class=\"h6\">Tests</h3><pre><code>[ -f file.txt ] && echo yes\n[[ $x == \"foo\" ]] || echo not-foo\n</code></pre><h3 class=\"h6\">If / elif / else</h3><pre><code>if [[ -d logs ]]; then\n  echo \"dir exists\"\nelif [[ -e logs ]]; then\n  echo \"path exists\"\nelse\n  echo \"missing\"\nfi\n</code></pre><h3 class=\"h6\">Loops</h3><pre><code>for i in 1 2 3; do echo \"$i\"; done\nwhile read -r line; do echo \"$line\"; done &lt; file.txt\n</code></pre><h3 class=\"h6\">Case</h3><pre><code>case \"$1\" in\n  start) echo start;;\n  stop)  echo stop;;\n  *)     echo usage;;\nesac\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Check if file.txt exists (print yes)", "expect": ["[ -f file.txt ] && echo yes", "test -f file.txt && echo yes"] },
        { "prompt": "For loop over 1..3 printing each", "expect": ["for i in 1 2 3; do echo $i; done"] },
        { "prompt": "Use case statement (default branch)", "expect": ["case $x in *) echo default;; esac"] }
      ]
    },
    "quiz": [
      { "text": "Which operator is commonly used for string equality in [[ ... ]] in Bash?", "choices": ["===", "==", "=", "eq"], "answer": 1 },
      { "text": "Which test checks if a regular file exists?", "choices": ["-d", "-e", "-f", "-x"], "answer": 2 },
      { "text": "Which loop reads lines from a file safely?", "choices": ["for line in file.txt", "while read -r line; do ...; done < file.txt", "cat file.txt | for line", "read file.txt while"], "answer": 1 }
    ]
  },
  {
    "id": 11,
    "level": "Basics",
    "title": "Writing scripts executable",
    "blurb": "Make scripts runnable with chmod +x, understand ./script vs sh script.sh, and add a scripts directory to PATH safely for convenience.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Writing scripts executable</h2><p class=\"text-secondary\">To run a script directly, it needs the execute bit and a correct shebang.</p><pre><code>echo '#!/usr/bin/env bash' > script.sh\necho 'echo run' >> script.sh\nchmod +x script.sh\n./script.sh\n</code></pre><ul><li><code>./script.sh</code> uses the shebang.</li><li><code>sh script.sh</code> forces <code>sh</code> semantics, which may differ.</li></ul><h3 class=\"h6\">Adding to PATH</h3><pre><code>mkdir -p \"$HOME/bin\"\nmv script.sh \"$HOME/bin/\"\nexport PATH=\"$HOME/bin:$PATH\"\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Make script.sh executable", "expect": ["chmod +x script.sh"] },
        { "prompt": "Run script.sh from current dir", "expect": ["./script.sh"] },
        { "prompt": "Add current dir to PATH temporarily", "expect": ["export PATH=$PATH:."] }
      ]
    },
    "quiz": [
      { "text": "What does the execute bit (+x) change?", "choices": ["Owner", "Permissions to run", "File type", "Interpreter path"], "answer": 1 },
      { "text": "Which command runs using the shebang interpreter?", "choices": ["sh script.sh", "./script.sh", "source script.sh", "bash -c script.sh"], "answer": 1 },
      { "text": "Which line correctly prepends $HOME/bin to PATH?", "choices": ["PATH=$HOME/bin:$PATH", "export $HOME/bin:$PATH", "PATH=$PATH:$HOME/bin", "export PATH:$HOME/bin"], "answer": 0 }
    ]
  },
  {
    "id": 12,
    "level": "Basics",
    "title": "Automating File or Log Creation",
    "blurb": "Create files with touch, timestamp names with date, redirect output with > and >>, and rotate simple logs safely. Combine with cron for recurring jobs.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">Automating File or Log Creation</h2><p class=\"text-secondary\">Many scripts generate logs or data files. Use timestamps and redirection to manage them cleanly.</p><h3 class=\"h6\">Create and append</h3><pre><code>touch app.log\nprintf \"%s\\n\" \"started\" >> app.log\n</code></pre><h3 class=\"h6\">Timestamped filenames</h3><pre><code>stamp=$(date +%Y-%m-%d_%H-%M-%S)\nlog=\"logs/run_${stamp}.log\"\nmkdir -p logs\nmyjob > \"$log\" 2>&1\n</code></pre><h3 class=\"h6\">Simple rotation</h3><pre><code>gzip -9 app.log\nmv app.log app.log.1.gz\n: > app.log\n</code></pre>",
    "game": {
      "tasks": [
        { "prompt": "Open crontab editor", "expect": ["crontab -e"] },
        { "prompt": "List user crontab", "expect": ["crontab -l"] },
        { "prompt": "Cron: run /usr/local/bin/backup.sh daily at 01:00", "expect": ["0 1 * * * /usr/local/bin/backup.sh"] }
      ]
    },
    "quiz": [
      { "text": "Which redirection appends output to a file?", "choices": [">", ">>", "2>", "<"], "answer": 1 },
      { "text": "What does : > file do?", "choices": ["Deletes file", "Truncates file to zero bytes", "Appends to file", "Renames file"], "answer": 1 },
      { "text": "Which cron line runs a job every day at 01:00?", "choices": ["0 1 * * * cmd", "1 0 * * * cmd", "0 * 1 * * cmd", "* 1 * * * cmd"], "answer": 0 }
    ]
  },
  {
    "id": 13,
    "level": "Basics",
    "title": "What is Bash",
    "blurb": "A quick primer on the Bash shell: what it is, why it’s everywhere, and how it powers your command line and automation.",
    "html": "<section class=\"panel p-4 p-md-5 mb-4\"><h2 class=\"h3 mb-2\">What is Bash?</h2><p class=\"text-secondary\">Bash (Bourne Again SHell) is a widely used shell for Unix‑like systems. It is both a command interpreter and a scripting language.</p><h3 class=\"h6\">Why Bash?</h3><ul><li>Default on many Linux distributions and available on macOS and Windows (via WSL, Git Bash).</li><li>Powerful for system administration and automation.</li><li>Compatible with POSIX <code>sh</code>, with many useful extensions.</li></ul><h3 class=\"h6\">Core concepts</h3><p class=\"text-secondary\">Navigate the filesystem, manipulate text, control processes, and automate with scripts. Combine tools via pipes and redirection.</p><pre><code># Print working directory\npwd\n\n# List files including hidden\nls -a\n\n# Echo a message\necho \"Hello, Bash!\"\n</code></pre></section>",
    "game": {
      "tasks": [
        { "prompt": "Print 'Hello Bash!'", "expect": ["echo Hello Bash!", "echo \"Hello Bash!\""] },
        { "prompt": "Show your current directory", "expect": ["pwd"] },
        { "prompt": "List all files including hidden", "expect": ["ls -a", "ls -al", "ls -la"] }
      ]
    },
    "quiz": [
      { "text": "What does Bash stand for?", "choices": ["Basic Shell", "Bourne Again Shell", "Binary Shell", "Built‑in Advanced Shell"], "answer": 1 },
      { "text": "Who initially developed Bash?", "choices": ["Chet Ramey", "Brian Fox", "Ken Thompson", "Dennis Ritchie"], "answer": 1 },
      { "text": "Which command prints text to the terminal?", "choices": ["ls", "echo", "pwd", "cat"], "answer": 1 }
    ]
  }
]
