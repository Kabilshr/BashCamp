window.LESSONS = [
  {
    "id": 1,
    "level": "Basics",
    "title": "Bash Fundamentals",
    "blurb": "Core concepts: shells, commands, paths, help.",
    "html": "<h2>Bash Fundamentals</h2><p>Core concepts: shells, commands, paths, help.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Print 'hello'",
          "expect": [
            "echo hello"
          ]
        },
        {
          "prompt": "Show current dir",
          "expect": [
            "pwd"
          ]
        },
        {
          "prompt": "List files incl. hidden",
          "expect": [
            "ls -a",
            "ls -al",
            "ls -la"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 2,
    "level": "Basics",
    "title": "Shell",
    "blurb": "What is a shell? Interactive vs. non\u2011interactive; login vs. non\u2011login.",
    "html": "<h2>Shell</h2><p>What is a shell? Interactive vs. non\u2011interactive; login vs. non\u2011login.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Print 'hello'",
          "expect": [
            "echo hello"
          ]
        },
        {
          "prompt": "Show current dir",
          "expect": [
            "pwd"
          ]
        },
        {
          "prompt": "List files incl. hidden",
          "expect": [
            "ls -a",
            "ls -al",
            "ls -la"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 3,
    "level": "Basics",
    "title": "Bash shell",
    "blurb": "Why Bash? Features, history, common distributions.",
    "html": "<h2>Bash shell</h2><p>Why Bash? Features, history, common distributions.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Print 'hello'",
          "expect": [
            "echo hello"
          ]
        },
        {
          "prompt": "Show current dir",
          "expect": [
            "pwd"
          ]
        },
        {
          "prompt": "List files incl. hidden",
          "expect": [
            "ls -a",
            "ls -al",
            "ls -la"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 4,
    "level": "Basics",
    "title": "CLI and GUI",
    "blurb": "Command Line vs Graphical Interface; when to use each.",
    "html": "<h2>CLI and GUI</h2><p>Command Line vs Graphical Interface; when to use each.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Print 'hello'",
          "expect": [
            "echo hello"
          ]
        },
        {
          "prompt": "Show current dir",
          "expect": [
            "pwd"
          ]
        },
        {
          "prompt": "List files incl. hidden",
          "expect": [
            "ls -a",
            "ls -al",
            "ls -la"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 5,
    "level": "Basics",
    "title": "Job Automation",
    "blurb": "Cron, at, systemd timers; scheduling tasks safely.",
    "html": "<h2>Job Automation</h2><p>Cron, at, systemd timers; scheduling tasks safely.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Open crontab editor",
          "expect": [
            "crontab -e"
          ]
        },
        {
          "prompt": "List user crontab",
          "expect": [
            "crontab -l"
          ]
        },
        {
          "prompt": "Cron: run /usr/local/bin/backup.sh daily at 01:00",
          "expect": [
            "0 1 * * * /usr/local/bin/backup.sh"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 6,
    "level": "Basics",
    "title": "Navigating the Linux file system",
    "blurb": "pwd, ls, cd, relative vs absolute paths.",
    "html": "<h2>Navigating the Linux file system</h2><p>pwd, ls, cd, relative vs absolute paths.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Show current directory",
          "expect": [
            "pwd"
          ]
        },
        {
          "prompt": "List all files including hidden",
          "expect": [
            "ls -a",
            "ls -al",
            "ls -la"
          ]
        },
        {
          "prompt": "Move to parent directory",
          "expect": [
            "cd .."
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 7,
    "level": "Basics",
    "title": "Basic bash scripting",
    "blurb": "Shebangs, execution, permissions, script structure.",
    "html": "<h2>Basic bash scripting</h2><p>Shebangs, execution, permissions, script structure.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Create hello.sh",
          "expect": [
            "touch hello.sh"
          ]
        },
        {
          "prompt": "Make it executable",
          "expect": [
            "chmod +x hello.sh"
          ]
        },
        {
          "prompt": "Run it from here",
          "expect": [
            "./hello.sh"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 8,
    "level": "Basics",
    "title": "Shell script",
    "blurb": "Script anatomy, args ($0,$1\u2026), exit codes.",
    "html": "<h2>Shell script</h2><p>Script anatomy, args ($0,$1\u2026), exit codes.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Create hello.sh",
          "expect": [
            "touch hello.sh"
          ]
        },
        {
          "prompt": "Make it executable",
          "expect": [
            "chmod +x hello.sh"
          ]
        },
        {
          "prompt": "Run it from here",
          "expect": [
            "./hello.sh"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 9,
    "level": "Basics",
    "title": "Declaring and using variables",
    "blurb": "Shell vs env vars, export, quoting, expansion.",
    "html": "<h2>Declaring and using variables</h2><p>Shell vs env vars, export, quoting, expansion.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Create variable NAME=Sam",
          "expect": [
            "NAME=Sam"
          ]
        },
        {
          "prompt": "Print variable NAME",
          "expect": [
            "echo $NAME"
          ]
        },
        {
          "prompt": "Export PATH_EXTRA=/opt/bin",
          "expect": [
            "export PATH_EXTRA=/opt/bin"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 10,
    "level": "Basics",
    "title": "Basic logic",
    "blurb": "Tests, conditionals, loops, case.",
    "html": "<h2>Basic logic</h2><p>Tests, conditionals, loops, case.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Check if file.txt exists (print yes)",
          "expect": [
            "[ -f file.txt ] && echo yes",
            "test -f file.txt && echo yes"
          ]
        },
        {
          "prompt": "For loop over 1..3 printing each",
          "expect": [
            "for i in 1 2 3; do echo $i; done"
          ]
        },
        {
          "prompt": "Use case statement (default branch)",
          "expect": [
            "case $x in *) echo default;; esac"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 11,
    "level": "Basics",
    "title": "Writing scripts executable",
    "blurb": "chmod +x, PATH, ./script vs sh script.sh.",
    "html": "<h2>Writing scripts executable</h2><p>chmod +x, PATH, ./script vs sh script.sh.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Make script.sh executable",
          "expect": [
            "chmod +x script.sh"
          ]
        },
        {
          "prompt": "Run script.sh from current dir",
          "expect": [
            "./script.sh"
          ]
        },
        {
          "prompt": "Add current dir to PATH temporarily",
          "expect": [
            "export PATH=$PATH:."
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": 12,
    "level": "Basics",
    "title": "Automating File or Log Creation",
    "blurb": "touch, date in filenames, redirects, simple rotation.",
    "html": "<h2>Automating File or Log Creation</h2><p>touch, date in filenames, redirects, simple rotation.</p>",
    "game": {
      "tasks": [
        {
          "prompt": "Open crontab editor",
          "expect": [
            "crontab -e"
          ]
        },
        {
          "prompt": "List user crontab",
          "expect": [
            "crontab -l"
          ]
        },
        {
          "prompt": "Cron: run /usr/local/bin/backup.sh daily at 01:00",
          "expect": [
            "0 1 * * * /usr/local/bin/backup.sh"
          ]
        }
      ]
    },
    "quiz": [
      {
        "text": "Which command prints the working directory?",
        "choices": [
          "ls",
          "pwd",
          "cd",
          "whoami"
        ],
        "answer": 1
      },
      {
        "text": "Which symbol appends output?",
        "choices": [
          ">",
          ">>",
          "|",
          "<"
        ],
        "answer": 1
      },
      {
        "text": "Which command shows the current user?",
        "choices": [
          "whoami",
          "who",
          "users",
          "id -G"
        ],
        "answer": 0
      }
    ]
  }
];