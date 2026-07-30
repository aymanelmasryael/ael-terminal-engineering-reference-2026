# AEL Terminal Engineering Reference 2026

> A comprehensive interactive reference for Terminal Engineering.

**Version 1.0.0** · 220+ Commands · 20 Categories · Zero Dependencies

## 📚 Learning Metadata

| | |
|---|---|
| **Learning Level** | Beginner → Advanced |
| **Estimated Duration** | Self-paced (220+ commands, 20 categories) |
| **Prerequisites** | Basic command line familiarity |
| **Learning Outcomes** | Master 220+ terminal commands across 20 categories, navigate via interactive learning roadmap, track mastery progress |

---

## Features

- 220+ terminal commands organized into 20 categories
- Interactive Learning Roadmap (Beginner → Intermediate → Advanced)
- Difficulty levels (Beginner / Intermediate / Advanced) on every command
- Expandable command cards with flags, examples, tips, related commands, and references
- Learning progress tracking (Unread / Learning / Mastered) saved to localStorage
- Favorites system with localStorage persistence
- Instant full-text search with smart ranking
- Platform badges (macOS, Linux, Bash, Zsh, POSIX, GNU, BSD)
- Cross-references between related commands
- Export to PDF (print), Markdown, or JSON
- Glossary of 15 terminal terms
- Responsive design (desktop, tablet, mobile)
- Dark mode with glassmorphism UI
- Zero dependencies — pure HTML, CSS, and JavaScript

## Categories

| Category | Commands |
|----------|----------|
| Navigation | pwd, ls, cd, pushd, popd, dirs |
| Files & Folders | touch, mkdir, cp, mv, rm, ln, readlink |
| View Content | cat, head, tail, less, tail -f, wc |
| Search & Find | grep, find, fd, rg, locate, which, whereis |
| Permissions & Config | chmod, chown, chgrp, umask, alias, export |
| Processes | ps, top, htop, kill, killall, bg, fg, jobs |
| Network | curl, wget, ping, traceroute, ssh, scp |
| Archives | tar, zip, unzip, gzip, gunzip |
| System | uname, df, du, free, uptime, whoami, env, date |
| Shell Features | history, alias, source, exit, clear, echo, printf |
| Globbing & Expansion | *, ?, [], {}, ~ |
| Redirection & Pipes | >, >>, <, |, tee, xargs |
| Text Processing | sed, awk, cut, sort, uniq, tr, paste, column |
| Editors | vim, nano, code |
| Git | 15 git commands |
| JavaScript / Node | node, npm, npx, yarn, pnpm, bun, deno, tsc |
| macOS Specific | open, pbcopy, pbpaste, screencapture, launchctl, defaults |
| Keyboard Shortcuts | Ctrl+C, Ctrl+D, Ctrl+Z, Ctrl+R, and more |
| Useful Combos | Common command combinations |
| Platform Notes | apt, yum, brew, pacman, snap, flatpak |

## Live Demo

[https://aymanelmasryael.github.io/ael-terminal-engineering-reference-2026/](https://aymanelmasryael.github.io/ael-terminal-engineering-reference-2026/)

## Quick Start

No build step required. Open `index.html` in any modern browser.

```bash
git clone https://github.com/aymanelmasryael/ael-terminal-engineering-reference-2026.git
cd ael-terminal-engineering-reference-2026
open index.html
```

## Project Structure

```
├── index.html              # Main HTML file
├── terminal_book.css       # Styles (dark mode, glassmorphism, responsive)
├── terminal_book.js        # Logic (data, search, progress, export, expandable cards)
├── ael-logo.svg            # AEL logo
├── apple-touch-icon.png    # Apple touch icon
├── site.webmanifest        # Web app manifest
├── assets/
│   └── og-image.png        # Open Graph image
├── LICENSE                 # MIT License
├── CHANGELOG.md            # Version history
└── README.md               # This file
```

## Built With

- HTML5
- CSS3 (Custom Properties, Glassmorphism, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Zero external dependencies

## Author

**Ayman Elmasry** — AEL Digital Studio

- Website: [aymanelmasry.me](https://aymanelmasry.me)
- GitHub: [@aymanelmasryael](https://github.com/aymanelmasryael)
- LinkedIn: [aymanelmasryael](https://linkedin.com/in/aymanelmasryael)
- X (Twitter): [@aymanelmasryael](https://x.com/aymanelmasryael)

---

## 🔗 Related Resources

- [AEL Learning Catalog](https://github.com/aymanelmasryael/ael-learning-catalog) — Central entry point to all AEL courses
- [Learn GitHub](https://github.com/aymanelmasryael/ael-learn-github-course) — Master Git, GitHub workflows, CI/CD, and open source contribution
- [Learn OpenCode](https://github.com/aymanelmasryael/ael-learn-opencode-course) — From zero to professional with OpenCode agentic coding

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

> "If you want to understand something, start by building it from scratch."
