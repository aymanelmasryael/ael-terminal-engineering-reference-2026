/* ============================================================
   AEL Terminal Engineering Reference 2026
   Complete Terminal Command Reference — terminal_book.js
   ============================================================ */

const categories = [
  { id: "navigation", name: "Navigation", icon: "📁", color: "#00FF88" },
  { id: "files", name: "Files & Folders", icon: "🗂", color: "#FFD700" },
  { id: "view", name: "View Content", icon: "👁", color: "#A78BFA" },
  { id: "search", name: "Search & Find", icon: "🔍", color: "#00BFFF" },
  { id: "permissions", name: "Permissions & Config", icon: "🔐", color: "#FF8C42" },
  { id: "processes", name: "Processes", icon: "⚙️", color: "#F472B6" },
  { id: "network", name: "Network", icon: "🌐", color: "#00FFCC" },
  { id: "archives", name: "Archives", icon: "📦", color: "#FFD700" },
  { id: "system", name: "System", icon: "💻", color: "#94A3B8" },
  { id: "shell", name: "Shell Features", icon: "🐚", color: "#6C47FF" },
  { id: "glob", name: "Globbing & Expansion", icon: "🎯", color: "#FF4D8D" },
  { id: "redirect", name: "Redirection & Pipes", icon: "🔀", color: "#00BFFF" },
  { id: "textproc", name: "Text Processing", icon: "📝", color: "#00FF88" },
  { id: "editors", name: "Editors", icon: "✏️", color: "#A78BFA" },
  { id: "git", name: "Git", icon: "🌿", color: "#FF4D8D" },
  { id: "javascript", name: "JavaScript / Node", icon: "⬢", color: "#A78BFA" },
  { id: "macos", name: "macOS Specific", icon: "🍎", color: "#7DD3FC" },
  { id: "shortcuts", name: "Keyboard Shortcuts", icon: "⌨️", color: "#FFD700" },
  { id: "combos", name: "Useful Combos", icon: "🧩", color: "#FF4D8D" },
  { id: "platforms", name: "Platform Notes", icon: "🖥", color: "#94A3B8" }
];

const commands = [

  // ──────────────────────────────────────────────────────────
  // NAVIGATION (6)
  // ──────────────────────────────────────────────────────────
  {
    name: "pwd",
    syntax: "pwd",
    desc: "Print the current working directory",
    category: "navigation",
    difficulty: "beginner",
    flags: [
      { flag: "-L", desc: "Print the logical path (default, follows symlinks)" },
      { flag: "-P", desc: "Print the physical path (resolves symlinks)" }
    ],
    examples: [
      { label: "Print current directory", code: "pwd" },
      { label: "Print physical path", code: "pwd -P" }
    ],
    tip: "pwd stands for 'print working directory'. Essential in scripts to know where you are.",
    related: ["cd", "ls", "dirs"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — pwd", url: "https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html" },
      { label: "man pwd", url: "https://man7.org/linux/man-pages/man1/pwd.1.html" }
    ]
  },
  {
    name: "ls",
    syntax: "ls [options] [dir]",
    desc: "List directory contents",
    category: "navigation",
    difficulty: "beginner",
    flags: [
      { flag: "-l", desc: "Long format (permissions, owner, size, date)" },
      { flag: "-a", desc: "Show hidden files (entries starting with .)" },
      { flag: "-la", desc: "Long format including hidden files" },
      { flag: "-h", desc: "Human-readable sizes (K, M, G)" },
      { flag: "-R", desc: "List recursively (include subdirectories)" },
      { flag: "-t", desc: "Sort by modification time, newest first" },
      { flag: "-S", desc: "Sort by file size, largest first" },
      { flag: "-1", desc: "One entry per line" },
      { flag: "-d", desc: "List directories themselves, not their contents" },
      { flag: "-G", desc: "Colorize output (macOS/BSD)" },
      { flag: "--color", desc: "Colorize output (GNU/Linux)" },
      { flag: "-F", desc: "Append indicator (/, *, =, @, |)" },
      { flag: "-i", desc: "Show inode numbers" },
      { flag: "-r", desc: "Reverse sort order" },
      { flag: "-X", desc: "Sort by extension" }
    ],
    examples: [
      { label: "List files in long format", code: "ls -la" },
      { label: "Human-readable sizes, sorted by time", code: "ls -lht" },
      { label: "Recursive listing with colors", code: "ls -R --color=auto" },
      { label: "List one file per line", code: "ls -1" },
      { label: "Show hidden files only", code: "ls -d .*" }
    ],
    tip: "Combine flags: ls -lah gives long format, all files, human-readable sizes.",
    related: ["find", "tree", "dir"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — ls", url: "https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html" },
      { label: "man ls", url: "https://man7.org/linux/man-pages/man1/ls.1.html" }
    ]
  },
  {
    name: "cd",
    syntax: "cd [dir]",
    desc: "Change the current working directory",
    category: "navigation",
    difficulty: "beginner",
    flags: [
      { flag: "cd ~", desc: "Go to home directory" },
      { flag: "cd -", desc: "Go to previous directory" },
      { flag: "cd ..", desc: "Go up one directory" },
      { flag: "cd /", desc: "Go to root directory" },
      { flag: "cd ~/path", desc: "Go to a path relative to home" }
    ],
    examples: [
      { label: "Go to home directory", code: "cd ~" },
      { label: "Go back to previous directory", code: "cd -" },
      { label: "Change to specific directory", code: "cd /usr/local/bin" },
      { label: "Go up two levels", code: "cd ../.." },
      { label: "Go to home subdirectory", code: "cd ~/Documents" }
    ],
    tip: "cd - is incredibly useful for toggling between two directories.",
    related: ["pwd", "pushd", "popd", "dirs"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — cd", url: "https://www.gnu.org/software/bash/manual/bash.html#index-cd" }
    ]
  },
  {
    name: "pushd",
    syntax: "pushd [dir]",
    desc: "Push a directory onto the directory stack and change to it",
    category: "navigation",
    difficulty: "intermediate",
    flags: [
      { flag: "+N", desc: "Bring the Nth directory to the front" },
      { flag: "-N", desc: "Bring the Nth directory from the end to the front" },
      { flag: "-n", desc: "Suppress changing directory (just manipulate stack)" }
    ],
    examples: [
      { label: "Push current dir and switch", code: "pushd /tmp" },
      { label: "Rotate stack", code: "pushd +1" },
      { label: "Show stack after push", code: "pushd /var/log" }
    ],
    tip: "Use pushd/popd to quickly navigate between directories without losing your place.",
    related: ["popd", "dirs", "cd"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Directory Stack", url: "https://www.gnu.org/software/bash/manual/bash.html#Directory-Stack-Builtins" }
    ]
  },
  {
    name: "popd",
    syntax: "popd [options]",
    desc: "Remove a directory from the stack and change to it",
    category: "navigation",
    difficulty: "intermediate",
    flags: [
      { flag: "+N", desc: "Remove the Nth directory from the stack" },
      { flag: "-N", desc: "Remove the Nth directory from the end" },
      { flag: "-n", desc: "Suppress changing directory (just manipulate stack)" }
    ],
    examples: [
      { label: "Pop last pushed directory", code: "popd" },
      { label: "Remove 2nd entry from stack", code: "popd +1" }
    ],
    tip: "Always use pushd instead of cd when you want to remember where you came from.",
    related: ["pushd", "dirs", "cd"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Directory Stack", url: "https://www.gnu.org/software/bash/manual/bash.html#Directory-Stack-Builtins" }
    ]
  },
  {
    name: "dirs -v",
    syntax: "dirs -v",
    desc: "Display the directory stack with index numbers",
    category: "navigation",
    difficulty: "intermediate",
    flags: [
      { flag: "-v", desc: "Print each entry with its stack index" },
      { flag: "-l", desc: "Print full pathname" },
      { flag: "+N", desc: "Print the Nth entry from the stack" },
      { flag: "-N", desc: "Print the Nth entry from the end" }
    ],
    examples: [
      { label: "Show directory stack with indices", code: "dirs -v" },
      { label: "Show current stack entry", code: "dirs +0" }
    ],
    tip: "Combine with pushd/popd +N to navigate the directory stack by index.",
    related: ["pushd", "popd", "cd"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Directory Stack", url: "https://www.gnu.org/software/bash/manual/bash.html#Directory-Stack-Builtins" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // FILES & FOLDERS (7)
  // ──────────────────────────────────────────────────────────
  {
    name: "touch",
    syntax: "touch [options] file...",
    desc: "Create empty files or update timestamps",
    category: "files",
    difficulty: "beginner",
    flags: [
      { flag: "-a", desc: "Change only access time" },
      { flag: "-m", desc: "Change only modification time" },
      { flag: "-r ref_file", desc: "Use timestamp from ref_file" },
      { flag: "-c", desc: "Do not create file if it doesn't exist" },
      { flag: "--date=STRING", desc: "Set timestamp using string description" }
    ],
    examples: [
      { label: "Create empty file", code: "touch newfile.txt" },
      { label: "Create multiple files", code: "touch file1.txt file2.txt file3.txt" },
      { label: "Update timestamp to now", code: "touch existingfile.txt" },
      { label: "Create files with braces", code: "touch file_{01..10}.txt" }
    ],
    tip: "touch is the fastest way to create empty files. Also essential for build systems that check modification times.",
    related: ["mkdir", "rm", "ls"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — touch", url: "https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html" },
      { label: "man touch", url: "https://man7.org/linux/man-pages/man1/touch.1.html" }
    ]
  },
  {
    name: "mkdir",
    syntax: "mkdir [options] dir...",
    desc: "Create directories",
    category: "files",
    difficulty: "beginner",
    flags: [
      { flag: "-p", desc: "Create parent directories as needed (no error if exists)" },
      { flag: "-v", desc: "Verbose — print directory names as created" },
      { flag: "-m MODE", desc: "Set file mode (permissions) like chmod" }
    ],
    examples: [
      { label: "Create a directory", code: "mkdir mydir" },
      { label: "Create nested directories", code: "mkdir -p a/b/c/d" },
      { label: "Create with specific permissions", code: "mkdir -m 755 mydir" },
      { label: "Create multiple directories", code: "mkdir dir1 dir2 dir3" },
      { label: "Verbose creation", code: "mkdir -pv project/src/components" }
    ],
    tip: "Always use -p to avoid errors when creating nested paths.",
    related: ["rmdir", "touch", "rm"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — mkdir", url: "https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html" },
      { label: "man mkdir", url: "https://man7.org/linux/man-pages/man1/mkdir.1.html" }
    ]
  },
  {
    name: "cp",
    syntax: "cp [options] source... dest",
    desc: "Copy files and directories",
    category: "files",
    difficulty: "beginner",
    flags: [
      { flag: "-r, -R", desc: "Copy directories recursively" },
      { flag: "-i", desc: "Prompt before overwriting" },
      { flag: "-f", desc: "Force overwrite without prompting" },
      { flag: "-p", desc: "Preserve permissions, timestamps, ownership" },
      { flag: "-v", desc: "Verbose — show files being copied" },
      { flag: "-a", desc: "Archive mode (= -rpP, preserves everything)" },
      { flag: "-u", desc: "Copy only when source is newer than destination" },
      { flag: "-n", desc: "Do not overwrite existing files" },
      { flag: "-l", desc: "Create hard links instead of copying" },
      { flag: "-s", desc: "Create symbolic links instead of copying" }
    ],
    examples: [
      { label: "Copy file", code: "cp source.txt dest.txt" },
      { label: "Copy directory recursively", code: "cp -r src/ dest/" },
      { label: "Archive copy (preserves all)", code: "cp -a /etc/config /backup/" },
      { label: "Copy multiple files to directory", code: "cp *.txt /tmp/backup/" },
      { label: "Copy with verbose output", code: "cp -rv src/* dest/" }
    ],
    tip: "Use trailing slashes carefully: cp src/ dest/ vs cp src dest/ behave differently. -a is ideal for backups.",
    related: ["mv", "rsync", "rm"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — cp", url: "https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html" },
      { label: "man cp", url: "https://man7.org/linux/man-pages/man1/cp.1.html" }
    ]
  },
  {
    name: "mv",
    syntax: "mv [options] source... dest",
    desc: "Move or rename files and directories",
    category: "files",
    difficulty: "beginner",
    flags: [
      { flag: "-i", desc: "Prompt before overwriting" },
      { flag: "-f", desc: "Force overwrite without prompting" },
      { flag: "-n", desc: "Do not overwrite existing files" },
      { flag: "-v", desc: "Verbose — show files being moved" },
      { flag: "-u", desc: "Move only when source is newer" }
    ],
    examples: [
      { label: "Rename a file", code: "mv oldname.txt newname.txt" },
      { label: "Move file to directory", code: "mv file.txt /tmp/" },
      { label: "Move multiple files", code: "mv *.jpg /home/user/Pictures/" },
      { label: "Move parent directory contents", code: "mv dir1/* dir2/" }
    ],
    tip: "mv is also used to rename. To rename a directory: mv olddir newdir.",
    related: ["cp", "rm", "rename"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — mv", url: "https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html" },
      { label: "man mv", url: "https://man7.org/linux/man-pages/man1/mv.1.html" }
    ]
  },
  {
    name: "rm",
    syntax: "rm [options] file...",
    desc: "Remove files and directories",
    category: "files",
    difficulty: "beginner",
    flags: [
      { flag: "-r, -R", desc: "Remove directories and their contents recursively" },
      { flag: "-f", desc: "Force — ignore nonexistent files, no prompts" },
      { flag: "-i", desc: "Prompt before every removal" },
      { flag: "-I", desc: "Prompt once before removing more than three files" },
      { flag: "-v", desc: "Verbose — show files being removed" }
    ],
    examples: [
      { label: "Remove a file", code: "rm file.txt" },
      { label: "Remove directory and contents", code: "rm -rf mydir/" },
      { label: "Interactive remove", code: "rm -i *.log" },
      { label: "Verbose removal", code: "rm -rv old_build/" }
    ],
    tip: "WARNING: rm -rf / will destroy your system. Always double-check paths.",
    related: ["rmdir", "unlink", "find"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — rm", url: "https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html" },
      { label: "man rm", url: "https://man7.org/linux/man-pages/man1/rm.1.html" }
    ]
  },
  {
    name: "ln -s",
    syntax: "ln -s target link_name",
    desc: "Create a symbolic (soft) link to a file or directory",
    category: "files",
    difficulty: "intermediate",
    flags: [
      { flag: "-s", desc: "Create a symbolic link (soft link)" },
      { flag: "-f", desc: "Force — remove existing destination files" },
      { flag: "-n", desc: "Treat link_name as normal file if symlink to dir" },
      { flag: "-v", desc: "Verbose — print each link name" }
    ],
    examples: [
      { label: "Create symlink", code: "ln -s /usr/local/bin/python3 /usr/bin/python" },
      { label: "Create symlink in current dir", code: "ln -s /path/to/real/file linkname" },
      { label: "Force overwrite existing link", code: "ln -sf /new/target old_link" },
      { label: "Directory symlink", code: "ln -s ~/Projects/myapp /var/www/app" }
    ],
    tip: "Use readlink -f to find where a symlink actually points. Relative symlinks are more portable.",
    related: ["readlink -f", "unlink", "ls -l"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — ln", url: "https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html" },
      { label: "man ln", url: "https://man7.org/linux/man-pages/man1/ln.1.html" }
    ]
  },
  {
    name: "readlink -f",
    syntax: "readlink -f file",
    desc: "Print the resolved (canonical) path of a symlink",
    category: "files",
    difficulty: "intermediate",
    flags: [
      { flag: "-f", desc: "Canonicalize — resolve all symlinks and normalize" },
      { flag: "-e", desc: "Check that file exists" },
      { flag: "-n", desc: "Suppress trailing newline" },
      { flag: "-m", desc: "No trailing newline, no error on missing" }
    ],
    examples: [
      { label: "Resolve full path of symlink", code: "readlink -f /usr/bin/python" },
      { label: "Get directory of script", code: "readlink -f $(dirname $0)" },
      { label: "Resolve and suppress newline", code: "readlink -fn /some/link" }
    ],
    tip: "readlink -f is essential in scripts. Not available on macOS by default — use greadlink from coreutils.",
    related: ["ln -s", "realpath", "file"],
    platforms: ["Linux", "Bash", "Zsh", "GNU"],
    refs: [
      { label: "GNU Coreutils — readlink", url: "https://www.gnu.org/software/coreutils/manual/html_node/readlink-invocation.html" },
      { label: "man readlink", url: "https://man7.org/linux/man-pages/man1/readlink.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // VIEW CONTENT (6)
  // ──────────────────────────────────────────────────────────
  {
    name: "cat",
    syntax: "cat [options] [file...]",
    desc: "Concatenate and display file contents",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-n", desc: "Number all output lines" },
      { flag: "-b", desc: "Number non-blank lines only" },
      { flag: "-s", desc: "Squeeze multiple blank lines into one" },
      { flag: "-T", desc: "Display tabs as ^I" },
      { flag: "-E", desc: "Display line endings as $" }
    ],
    examples: [
      { label: "Display file contents", code: "cat file.txt" },
      { label: "Display with line numbers", code: "cat -n file.txt" },
      { label: "Concatenate multiple files", code: "cat file1.txt file2.txt > combined.txt" },
      { label: "Show non-printing chars", code: "cat -A filename" }
    ],
    tip: "For large files, use less or head/tail instead. cat is best for small files or concatenation.",
    related: ["head", "tail", "less"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — cat", url: "https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html" },
      { label: "man cat", url: "https://man7.org/linux/man-pages/man1/cat.1.html" }
    ]
  },
  {
    name: "head",
    syntax: "head [options] [file...]",
    desc: "Display the first lines of a file",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-n NUM", desc: "Print first NUM lines (default 10)" },
      { flag: "-c NUM", desc: "Print first NUM bytes" },
      { flag: "-q", desc: "Quiet — suppress filenames" },
      { flag: "-v", desc: "Verbose — always print filenames" }
    ],
    examples: [
      { label: "First 10 lines (default)", code: "head file.txt" },
      { label: "First 20 lines", code: "head -n 20 file.txt" },
      { label: "First 100 bytes", code: "head -c 100 file.txt" },
      { label: "First 5 lines of multiple files", code: "head -n 5 *.log" }
    ],
    tip: "head -c is useful for reading binary file headers.",
    related: ["tail", "cat", "less"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — head", url: "https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html" },
      { label: "man head", url: "https://man7.org/linux/man-pages/man1/head.1.html" }
    ]
  },
  {
    name: "tail",
    syntax: "tail [options] [file...]",
    desc: "Display the last lines of a file",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-n NUM", desc: "Print last NUM lines (default 10)" },
      { flag: "-n +NUM", desc: "Start from line NUM" },
      { flag: "-c NUM", desc: "Print last NUM bytes" },
      { flag: "-f", desc: "Follow — continuously watch file for new lines" },
      { flag: "-F", desc: "Follow by name (retry if file is rotated)" },
      { flag: "-s NUM", desc: "Sleep interval between iterations (seconds)" },
      { flag: "--pid=PID", desc: "Terminate after process PID exits" }
    ],
    examples: [
      { label: "Last 10 lines (default)", code: "tail file.txt" },
      { label: "Last 50 lines", code: "tail -n 50 file.txt" },
      { label: "Follow log file", code: "tail -f /var/log/syslog" },
      { label: "Follow from line 100", code: "tail -n +100 file.txt" },
      { label: "Follow with grep filter", code: "tail -f log.txt | grep ERROR" }
    ],
    tip: "tail -f is essential for watching log files. Combine with grep for filtered monitoring.",
    related: ["head", "cat", "less"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — tail", url: "https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html" },
      { label: "man tail", url: "https://man7.org/linux/man-pages/man1/tail.1.html" }
    ]
  },
  {
    name: "less",
    syntax: "less [options] [file]",
    desc: "View file contents with scrolling (more featured than more)",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-N", desc: "Display line numbers" },
      { flag: "-S", desc: "Chop long lines (no wrapping)" },
      { flag: "-X", desc: "Don't clear screen on exit" },
      { flag: "-F", desc: "Quit if file fits on one screen" },
      { flag: "-R", desc: "Pass through ANSI color codes" },
      { flag: "+/pattern", desc: "Start at first occurrence of pattern" },
      { flag: "+NUM", desc: "Start at line NUM" },
      { flag: "-i", desc: "Case-insensitive search" }
    ],
    examples: [
      { label: "View a file", code: "less file.txt" },
      { label: "View with line numbers", code: "less -N file.txt" },
      { label: "Search for pattern on open", code: "less +/error logfile.txt" },
      { label: "View with color support", code: "ls -la | less -R" }
    ],
    tip: "Inside less: /search, n=next, N=prev, g=start, G=end, q=quit. F follows like tail -f.",
    related: ["more", "cat", "head", "tail"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "less Manual", url: "https://www.greenwoodsoftware.com/less/" },
      { label: "man less", url: "https://man7.org/linux/man-pages/man1/less.1.html" }
    ]
  },
  {
    name: "tail -f",
    syntax: "tail -f [options] file...",
    desc: "Follow a file in real-time, displaying new lines as they are written",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-f", desc: "Follow the file (keep watching for new data)" },
      { flag: "-F", desc: "Follow by name (reopens file if rotated)" },
      { flag: "-n NUM", desc: "Start NUM lines from end" },
      { flag: "--retry", desc: "Keep trying to open file if unavailable" }
    ],
    examples: [
      { label: "Watch system log", code: "tail -f /var/log/syslog" },
      { label: "Watch multiple logs", code: "tail -f /var/log/app*.log" },
      { label: "Follow and filter errors", code: "tail -f server.log | grep -i error" },
      { label: "Start from line 500, follow", code: "tail -n +500 -f logfile.txt" }
    ],
    tip: "Press Ctrl+C to stop following. Use F (capital F) inside less for similar behavior.",
    related: ["tail", "grep", "less"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Coreutils — tail", url: "https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html" }
    ]
  },
  {
    name: "wc",
    syntax: "wc [options] [file...]",
    desc: "Count lines, words, and bytes in files",
    category: "view",
    difficulty: "beginner",
    flags: [
      { flag: "-l", desc: "Count lines" },
      { flag: "-w", desc: "Count words (whitespace-delimited)" },
      { flag: "-c", desc: "Count bytes" },
      { flag: "-m", desc: "Count characters (multibyte-aware)" },
      { flag: "-L", desc: "Print length of longest line" }
    ],
    examples: [
      { label: "Count lines in file", code: "wc -l file.txt" },
      { label: "Count lines, words, bytes", code: "wc file.txt" },
      { label: "Count lines via pipe", code: "cat file.txt | wc -l" },
      { label: "Longest line length", code: "wc -L file.txt" },
      { label: "Count matching lines", code: "grep -c 'error' logfile.txt" }
    ],
    tip: "wc -l is commonly used with pipes. For counting matching lines, use grep -c instead.",
    related: ["cat", "grep", "awk"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — wc", url: "https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html" },
      { label: "man wc", url: "https://man7.org/linux/man-pages/man1/wc.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // SEARCH & FIND (7)
  // ──────────────────────────────────────────────────────────
  {
    name: "grep",
    syntax: "grep [options] pattern [file...]",
    desc: "Search for patterns in files using regular expressions",
    category: "search",
    difficulty: "beginner",
    flags: [
      { flag: "-i", desc: "Case-insensitive matching" },
      { flag: "-r, -R", desc: "Recursive search through directories" },
      { flag: "-n", desc: "Show line numbers" },
      { flag: "-l", desc: "Show only filenames with matches" },
      { flag: "-c", desc: "Show count of matching lines" },
      { flag: "-v", desc: "Invert match (show non-matching lines)" },
      { flag: "-w", desc: "Match whole words only" },
      { flag: "-A NUM", desc: "Show NUM lines After match" },
      { flag: "-B NUM", desc: "Show NUM lines Before match" },
      { flag: "-C NUM", desc: "Show NUM lines of Context before and after" },
      { flag: "-E", desc: "Extended regex (same as egrep)" },
      { flag: "-P", desc: "Perl-compatible regex (PCRE)" },
      { flag: "--include=GLOB", desc: "Only search files matching GLOB" },
      { flag: "--exclude=GLOB", desc: "Skip files matching GLOB" },
      { flag: "-o", desc: "Print only the matched parts" }
    ],
    examples: [
      { label: "Search for pattern in file", code: "grep 'error' logfile.txt" },
      { label: "Case-insensitive recursive search", code: "grep -ri 'TODO' src/" },
      { label: "Show line numbers", code: "grep -n 'function' script.js" },
      { label: "Count occurrences", code: "grep -c 'GET' access.log" },
      { label: "Search with context", code: "grep -C 3 'exception' app.log" },
      { label: "Invert match", code: "grep -v '^#' config.txt" },
      { label: "Extended regex", code: "grep -E 'err(or|no)' log.txt" },
      { label: "Search only JS files", code: "grep -rn --include='*.js' 'require' ." }
    ],
    tip: "Use grep -ri for case-insensitive recursive searches. Combine with --include to filter file types.",
    related: ["find", "rg", "fd", "sed", "awk"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Grep Manual", url: "https://www.gnu.org/software/grep/manual/grep.html" },
      { label: "man grep", url: "https://man7.org/linux/man-pages/man1/grep.1.html" }
    ]
  },
  {
    name: "find",
    syntax: "find [path] [expression]",
    desc: "Search for files and directories by attributes",
    category: "search",
    difficulty: "intermediate",
    flags: [
      { flag: "-name PATTERN", desc: "Match filename (use quotes for globs)" },
      { flag: "-iname PATTERN", desc: "Case-insensitive name match" },
      { flag: "-type f/d/l", desc: "Match by type: file, directory, symlink" },
      { flag: "-size ±Nc/k/M/G", desc: "Match by size" },
      { flag: "-mtime ±N", desc: "Match by modification time (days)" },
      { flag: "-mmin ±N", desc: "Match by modification time (minutes)" },
      { flag: "-user NAME", desc: "Match by owner" },
      { flag: "-perm MODE", desc: "Match by permissions" },
      { flag: "-empty", desc: "Match empty files or directories" },
      { flag: "-exec CMD {} +", desc: "Execute command on each result" },
      { flag: "-print0", desc: "Print results delimited by NUL" },
      { flag: "-maxdepth N", desc: "Limit directory traversal depth" },
      { flag: "-newer FILE", desc: "Match files newer than FILE" },
      { flag: "-not, -and, -or", desc: "Boolean operators" },
      { flag: "-delete", desc: "Delete matching files (dangerous!)" }
    ],
    examples: [
      { label: "Find all .txt files", code: "find . -name '*.txt'" },
      { label: "Find files larger than 100MB", code: "find / -size +100M -type f" },
      { label: "Find recently modified files", code: "find . -mtime -1" },
      { label: "Find and execute command", code: "find . -name '*.log' -exec rm {} +" },
      { label: "Find empty directories", code: "find . -type d -empty" },
      { label: "Find with max depth", code: "find . -maxdepth 3 -name 'config*'" },
      { label: "Find and pipe to xargs", code: "find . -name '*.tmp' -print0 | xargs -0 rm" }
    ],
    tip: "Always quote globs: -name '*.txt' not -name *.txt. Use -print0 with xargs -0 for filenames with spaces.",
    related: ["grep", "fd", "locate", "xargs"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Findutils Manual", url: "https://www.gnu.org/software/findutils/manual/html_node/find_html/index.html" },
      { label: "man find", url: "https://man7.org/linux/man-pages/man1/find.1.html" }
    ]
  },
  {
    name: "fd",
    syntax: "fd [options] [pattern] [path]",
    desc: "A user-friendly alternative to find (fast, respects .gitignore)",
    category: "search",
    difficulty: "intermediate",
    flags: [
      { flag: "-e, --extension EXT", desc: "Filter by file extension" },
      { flag: "-t, --type f/d/l/x", desc: "Filter by type" },
      { flag: "-s, --case-sensitive", desc: "Case-sensitive search" },
      { flag: "-i, --ignore-case", desc: "Case-insensitive search" },
      { flag: "-H, --hidden", desc: "Include hidden files" },
      { flag: "-I, --no-ignore", desc: "Show ignored files (from .gitignore)" },
      { flag: "-d, --max-depth N", desc: "Maximum search depth" },
      { flag: "-x, --one-file-system", desc: "Stay on same filesystem" },
      { flag: "-0, --print0", desc: "NUL-delimited output" }
    ],
    examples: [
      { label: "Find all JS files", code: "fd -e js" },
      { label: "Find directories named src", code: "fd -t d src" },
      { label: "Find with hidden files", code: "fd -H config" },
      { label: "Case-insensitive search", code: "fd -i readme" }
    ],
    tip: "fd is faster than find and uses regex by default. It respects .gitignore. Install: brew install fd / cargo install fd-find.",
    related: ["find", "rg", "locate"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "fd GitHub Repository", url: "https://github.com/sharkdp/fd" }
    ]
  },
  {
    name: "rg",
    syntax: "rg [options] [pattern] [path]",
    desc: "Ripgrep — blazingly fast recursive grep (respects .gitignore)",
    category: "search",
    difficulty: "intermediate",
    flags: [
      { flag: "-i", desc: "Case-insensitive search" },
      { flag: "-w", desc: "Whole word match" },
      { flag: "-l, --files-with-matches", desc: "Show only filenames" },
      { flag: "-c, --count", desc: "Count matches per file" },
      { flag: "-e, --regexp PATTERN", desc: "Specify pattern" },
      { flag: "-t, --type TYPE", desc: "Filter by file type" },
      { flag: "-g, --glob GLOB", desc: "Include/exclude with glob" },
      { flag: "--hidden", desc: "Search hidden files" },
      { flag: "--no-ignore", desc: "Don't respect .gitignore" },
      { flag: "-z, --null", desc: "NUL-delimited output" },
      { flag: "-U, --multiline", desc: "Enable multiline matching" },
      { flag: "-o, --only-matching", desc: "Print only matched parts" }
    ],
    examples: [
      { label: "Search for pattern", code: "rg 'TODO'" },
      { label: "Case-insensitive search", code: "rg -i 'error' src/" },
      { label: "Search only TypeScript files", code: "rg -t ts 'interface'" },
      { label: "Show only filenames", code: "rg -l 'import'" },
      { label: "Search with glob filter", code: "rg -g '!node_modules' 'require'" }
    ],
    tip: "rg is much faster than grep -r. It ignores .gitignore by default. Use --no-ignore to search everything.",
    related: ["grep", "fd", "ag"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Ripgrep GitHub", url: "https://github.com/BurntSushi/ripgrep" },
      { label: "Ripgrep Manual", url: "https://ripgrep.dev/documentation/" }
    ]
  },
  {
    name: "locate",
    syntax: "locate [options] pattern",
    desc: "Find files using a pre-built database index (very fast)",
    category: "search",
    difficulty: "beginner",
    flags: [
      { flag: "-i", desc: "Case-insensitive search" },
      { flag: "-r, --regex", desc: "Use regex instead of glob" },
      { flag: "-c, --count", desc: "Show count of matches" },
      { flag: "-l, --limit NUM", desc: "Limit results to NUM" },
      { flag: "--basename", desc: "Match only the filename (not full path)" }
    ],
    examples: [
      { label: "Find files by name", code: "locate nginx.conf" },
      { label: "Case-insensitive search", code: "locate -i readme" },
      { label: "Regex search", code: "locate -r '\\\\.jpg$'" },
      { label: "Count matches", code: "locate -c '.py'" },
      { label: "Update database first", code: "sudo updatedb && locate filename" }
    ],
    tip: "locate uses a database that must be updated periodically. Run sudo updatedb to refresh.",
    related: ["find", "fd", "whereis"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "mlocate Manual", url: "https://mlocate.poly.edu/" },
      { label: "man locate", url: "https://man7.org/linux/man-pages/man1/locate.1.html" }
    ]
  },
  {
    name: "which",
    syntax: "which [options] command...",
    desc: "Locate the executable file that would be run by a command",
    category: "search",
    difficulty: "beginner",
    flags: [
      { flag: "-a", desc: "Print all matching PATH entries" },
      { flag: "-s", desc: "Silent mode (no output, just exit status)" }
    ],
    examples: [
      { label: "Find executable path", code: "which python3" },
      { label: "Find all matching executables", code: "which -a node" },
      { label: "Check if command exists", code: "which git && echo 'git is installed'" }
    ],
    tip: "which only finds executables in PATH. Use type to also find aliases and functions.",
    related: ["whereis", "type", "command"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "man which", url: "https://man7.org/linux/man-pages/man1/which.1.html" }
    ]
  },
  {
    name: "whereis",
    syntax: "whereis [options] command",
    desc: "Locate binary, source, and manual page files for a command",
    category: "search",
    difficulty: "beginner",
    flags: [
      { flag: "-b", desc: "Search only for binary executables" },
      { flag: "-m", desc: "Search only for manual pages" },
      { flag: "-s", desc: "Search only for source files" },
      { flag: "-u", desc: "Show entries that are not a single type" }
    ],
    examples: [
      { label: "Find all associated files", code: "whereis ls" },
      { label: "Find only binary", code: "whereis -b python" },
      { label: "Find manual page", code: "whereis -m grep" }
    ],
    tip: "whereis searches standard Linux directories. Useful for finding where a command's files are installed.",
    related: ["which", "find", "locate"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man whereis", url: "https://man7.org/linux/man-pages/man1/whereis.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // PERMISSIONS & CONFIG (7)
  // ──────────────────────────────────────────────────────────
  {
    name: "chmod",
    syntax: "chmod [mode] file...",
    desc: "Change file or directory permissions",
    category: "permissions",
    difficulty: "intermediate",
    flags: [
      { flag: "u=rwx,g=rx,o=r", desc: "Symbolic mode for user/group/other" },
      { flag: "755", desc: "Octal mode (rwxr-xr-x)" },
      { flag: "+x", desc: "Add execute permission" },
      { flag: "-x", desc: "Remove execute permission" },
      { flag: "+w", desc: "Add write permission" },
      { flag: "a+r", desc: "Add read for all" },
      { flag: "u+s", desc: "Set SUID bit" },
      { flag: "g+s", desc: "Set SGID bit" },
      { flag: "+t", desc: "Set sticky bit" },
      { flag: "-R", desc: "Recursive — apply to all files and subdirectories" }
    ],
    examples: [
      { label: "Make executable", code: "chmod +x script.sh" },
      { label: "Set specific permissions", code: "chmod 755 file.txt" },
      { label: "Remove write for others", code: "chmod o-w file.txt" },
      { label: "Recursive permission change", code: "chmod -R 755 project/" },
      { label: "Set read-only for everyone", code: "chmod 444 file.txt" }
    ],
    tip: "Common modes: 755 (executables/dirs), 644 (regular files), 700 (private dirs), 600 (private files).",
    related: ["chown", "chgrp", "umask", "ls -l"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — chmod", url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html" },
      { label: "man chmod", url: "https://man7.org/linux/man-pages/man1/chmod.1.html" }
    ]
  },
  {
    name: "chown",
    syntax: "chown [owner][:group] file...",
    desc: "Change file or directory owner and group",
    category: "permissions",
    difficulty: "intermediate",
    flags: [
      { flag: "-R", desc: "Recursive — apply to all files and subdirectories" },
      { flag: "-L", desc: "Follow symlinks" },
      { flag: "-P", desc: "Do not follow symlinks (default)" },
      { flag: "-c", desc: "Report like verbose but only on changes" },
      { flag: "-v", desc: "Verbose — show changes" }
    ],
    examples: [
      { label: "Change owner", code: "sudo chown john file.txt" },
      { label: "Change owner and group", code: "sudo chown john:staff file.txt" },
      { label: "Recursive ownership change", code: "sudo chown -R www-data:www-data /var/www/" },
      { label: "Change only group", code: "sudo chown :developers project/" }
    ],
    tip: "Use chown -R carefully on system directories.",
    related: ["chmod", "chgrp", "whoami"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — chown", url: "https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html" },
      { label: "man chown", url: "https://man7.org/linux/man-pages/man1/chown.1.html" }
    ]
  },
  {
    name: "chgrp",
    syntax: "chgrp group file...",
    desc: "Change the group ownership of files or directories",
    category: "permissions",
    difficulty: "intermediate",
    flags: [
      { flag: "-R", desc: "Recursive — apply to all files and subdirectories" },
      { flag: "-L", desc: "Follow symlinks" },
      { flag: "-c", desc: "Report changes only" },
      { flag: "-v", desc: "Verbose output" }
    ],
    examples: [
      { label: "Change group", code: "sudo chgrp staff file.txt" },
      { label: "Recursive group change", code: "sudo chgrp -R developers project/" },
      { label: "Change group for multiple files", code: "sudo chgrp admins *.conf" }
    ],
    tip: "chown user:group can change both owner and group at once.",
    related: ["chown", "chmod", "groups"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — chgrp", url: "https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html" },
      { label: "man chgrp", url: "https://man7.org/linux/man-pages/man1/chgrp.1.html" }
    ]
  },
  {
    name: "umask",
    syntax: "umask [mode]",
    desc: "Set the default file creation permissions mask",
    category: "permissions",
    difficulty: "intermediate",
    flags: [
      { flag: "022", desc: "Default mask: dirs=755, files=644" },
      { flag: "077", desc: "Private mask: dirs=700, files=600" },
      { flag: "002", desc: "Group-writable: dirs=775, files=664" },
      { flag: "-S", desc: "Symbolic output" }
    ],
    examples: [
      { label: "Show current umask", code: "umask" },
      { label: "Set umask to private", code: "umask 077" },
      { label: "Set umask symbolic", code: "umask u=rwx,g=rx,o=" }
    ],
    tip: "umask subtracts from max permissions (666 for files, 777 for dirs). A umask of 022 gives 644/755.",
    related: ["chmod", "chown"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Umask", url: "https://www.gnu.org/software/bash/manual/bash.html#index-umask" },
      { label: "man umask", url: "https://man7.org/linux/man-pages/man2/umask.2.html" }
    ]
  },
  {
    name: "alias",
    syntax: "alias name='command'",
    desc: "Create or display command aliases",
    category: "permissions",
    difficulty: "beginner",
    flags: [
      { flag: "alias name='cmd'", desc: "Create an alias" },
      { flag: "alias", desc: "List all aliases" },
      { flag: "alias name", desc: "Show specific alias" }
    ],
    examples: [
      { label: "Create simple alias", code: "alias ll='ls -la'" },
      { label: "Create complex alias", code: "alias gs='git status'" },
      { label: "List all aliases", code: "alias" },
      { label: "Show specific alias", code: "alias ll" }
    ],
    tip: "Put aliases in ~/.bashrc or ~/.zshrc for persistence. Use functions for more complex shortcuts.",
    related: ["unalias", "export", "source"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Aliases", url: "https://www.gnu.org/software/bash/manual/bash.html#Aliases" }
    ]
  },
  {
    name: "unalias",
    syntax: "unalias name",
    desc: "Remove an alias definition",
    category: "permissions",
    difficulty: "beginner",
    flags: [
      { flag: "name", desc: "Remove the alias with the given name" },
      { flag: "-a", desc: "Remove all aliases" }
    ],
    examples: [
      { label: "Remove a specific alias", code: "unalias ll" },
      { label: "Remove all aliases", code: "unalias -a" }
    ],
    tip: "Use unalias when you need to run the original command instead of the alias.",
    related: ["alias", "type", "command"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Aliases", url: "https://www.gnu.org/software/bash/manual/bash.html#Aliases" }
    ]
  },
  {
    name: "export",
    syntax: "export VAR=value",
    desc: "Set environment variables for the current shell and child processes",
    category: "permissions",
    difficulty: "beginner",
    flags: [
      { flag: "export VAR=value", desc: "Set and export a variable" },
      { flag: "export -p", desc: "List all exported variables" },
      { flag: "export -n VAR", desc: "Remove export attribute" }
    ],
    examples: [
      { label: "Set environment variable", code: "export EDITOR=vim" },
      { label: "Add to PATH", code: "export PATH=$PATH:/usr/local/bin" },
      { label: "Set multiple variables", code: "export NODE_ENV=production PORT=3000" },
      { label: "Export for single command", code: "NODE_ENV=test npm test" }
    ],
    tip: "Exported variables are inherited by child processes. Put exports in shell config files for persistence.",
    related: ["alias", "env", "source"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Environment Variables", url: "https://www.gnu.org/software/bash/manual/bash.html#Environment-Variables" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // PROCESSES (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "ps",
    syntax: "ps [options]",
    desc: "Report a snapshot of current processes",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "aux", desc: "BSD style: all users, full format" },
      { flag: "-ef", desc: "System V style: all processes, full format" },
      { flag: "--sort=-%cpu", desc: "Sort by CPU usage" },
      { flag: "--sort=-%mem", desc: "Sort by memory usage" },
      { flag: "-p PID", desc: "Show specific process by PID" },
      { flag: "-u USER", desc: "Show processes for a specific user" },
      { flag: "-f", desc: "Full format listing" },
      { flag: "-o", desc: "Custom output format" }
    ],
    examples: [
      { label: "Show all running processes", code: "ps aux" },
      { label: "Show processes for current user", code: "ps -u $USER" },
      { label: "Find specific process", code: "ps aux | grep nginx" },
      { label: "Show top CPU consumers", code: "ps aux --sort=-%cpu | head -10" },
      { label: "Show process tree", code: "ps auxf" }
    ],
    tip: "ps aux | grep is classic but use pgrep for cleaner searches.",
    related: ["top", "htop", "kill"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man ps", url: "https://man7.org/linux/man-pages/man1/ps.1.html" }
    ]
  },
  {
    name: "top",
    syntax: "top [options]",
    desc: "Display and update information about top CPU processes in real-time",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "-d SEC", desc: "Set refresh interval in seconds" },
      { flag: "-n NUM", desc: "Number of iterations before exiting" },
      { flag: "-p PID", desc: "Monitor specific process IDs" },
      { flag: "-u USER", desc: "Show only processes of a user" },
      { flag: "-b", desc: "Batch mode (non-interactive)" }
    ],
    examples: [
      { label: "Start top", code: "top" },
      { label: "Custom refresh interval", code: "top -d 2" },
      { label: "Show only specific processes", code: "top -p 1234,5678" },
      { label: "Batch mode for logging", code: "top -bn 1 > top_output.txt" }
    ],
    tip: "Inside top: M=sort by memory, P=sort by CPU, k=kill process, q=quit.",
    related: ["htop", "ps", "kill"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Linux top manual", url: "https://man7.org/linux/man-pages/man1/top.1.html" }
    ]
  },
  {
    name: "htop",
    syntax: "htop [options]",
    desc: "Interactive process viewer (enhanced top with colors and mouse support)",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "-d SEC", desc: "Set refresh delay (tenths of seconds)" },
      { flag: "-u USER", desc: "Show only processes of a user" },
      { flag: "-p PID", desc: "Show only given PIDs" },
      { flag: "-t", desc: "Tree view" },
      { flag: "-s COLUMN", desc: "Sort by COLUMN" },
      { flag: "-H", desc: "Show threads" }
    ],
    examples: [
      { label: "Start htop", code: "htop" },
      { label: "Tree view", code: "htop -t" },
      { label: "Filter by user", code: "htop -u postgres" },
      { label: "Sort by memory", code: "htop -s PERCENT_MEM" }
    ],
    tip: "htop is more user-friendly than top. F5=tree, F6=sort, F9=kill, F10=quit. Install: brew install htop.",
    related: ["top", "ps", "kill"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "htop GitHub", url: "https://github.com/htop-dev/htop" }
    ]
  },
  {
    name: "kill",
    syntax: "kill [options] PID...",
    desc: "Send a signal to a process (usually to terminate it)",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "-9, -KILL", desc: "Force kill (SIGKILL — cannot be caught)" },
      { flag: "-15, -TERM", desc: "Graceful termination (SIGTERM — default)" },
      { flag: "-1, -HUP", desc: "Hangup signal (often causes restart/reload)" },
      { flag: "-2, -INT", desc: "Interrupt signal (like Ctrl+C)" },
      { flag: "-18, -CONT", desc: "Continue a stopped process" },
      { flag: "-19, -STOP", desc: "Stop (pause) a process" },
      { flag: "-l", desc: "List all signal names" }
    ],
    examples: [
      { label: "Gracefully terminate process", code: "kill 1234" },
      { label: "Force kill process", code: "kill -9 1234" },
      { label: "Send SIGHUP to reload config", code: "kill -HUP $(cat /var/run/nginx.pid)" },
      { label: "List all signals", code: "kill -l" },
      { label: "Stop a process", code: "kill -STOP 1234" },
      { label: "Continue a stopped process", code: "kill -CONT 1234" }
    ],
    tip: "Always try SIGTERM (15) first before SIGKILL (9). SIGTERM lets the process clean up.",
    related: ["killall", "pkill", "ps"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Linux kill man page", url: "https://man7.org/linux/man-pages/man1/kill.1.html" }
    ]
  },
  {
    name: "killall",
    syntax: "killall [options] name...",
    desc: "Kill all processes matching a name",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "-9", desc: "Force kill (SIGKILL)" },
      { flag: "-15, -TERM", desc: "Graceful termination (default)" },
      { flag: "-u USER", desc: "Kill only processes owned by user" },
      { flag: "-i", desc: "Interactive — prompt before killing" },
      { flag: "-e", desc: "Require exact name match" }
    ],
    examples: [
      { label: "Kill process by name", code: "killall firefox" },
      { label: "Force kill by name", code: "killall -9 chrome" },
      { label: "Kill processes of specific user", code: "killall -u john node" },
      { label: "Interactive kill", code: "killall -i python" }
    ],
    tip: "killall kills ALL processes with that name. Be careful on shared systems.",
    related: ["kill", "pkill", "ps"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "man killall", url: "https://man7.org/linux/man-pages/man1/killall.1.html" }
    ]
  },
  {
    name: "bg",
    syntax: "bg [job_id]",
    desc: "Resume a stopped job in the background",
    category: "processes",
    difficulty: "intermediate",
    flags: [
      { flag: "bg", desc: "Resume the most recent stopped job" },
      { flag: "bg %N", desc: "Resume job number N" }
    ],
    examples: [
      { label: "Send last stopped job to background", code: "bg" },
      { label: "Resume specific job in background", code: "bg %2" },
      { label: "Start command in background", code: "long_command &" }
    ],
    tip: "Use Ctrl+Z to stop a foreground job, then bg to resume in background.",
    related: ["fg", "jobs", "nohup"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Job Control", url: "https://www.gnu.org/software/bash/manual/bash.html#Job-Control-Builtins" }
    ]
  },
  {
    name: "fg",
    syntax: "fg [job_id]",
    desc: "Bring a background or stopped job to the foreground",
    category: "processes",
    difficulty: "intermediate",
    flags: [
      { flag: "fg", desc: "Bring the most recent job to foreground" },
      { flag: "fg %N", desc: "Bring job number N to foreground" }
    ],
    examples: [
      { label: "Bring last job to foreground", code: "fg" },
      { label: "Bring specific job to foreground", code: "fg %1" }
    ],
    tip: "fg is the opposite of bg. Use jobs to see numbered jobs, then fg %N.",
    related: ["bg", "jobs", "nohup"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Job Control", url: "https://www.gnu.org/software/bash/manual/bash.html#Job-Control-Builtins" }
    ]
  },
  {
    name: "jobs",
    syntax: "jobs [options]",
    desc: "List background jobs for the current shell session",
    category: "processes",
    difficulty: "beginner",
    flags: [
      { flag: "-l", desc: "List PIDs along with job numbers" },
      { flag: "-p", desc: "List only PIDs" },
      { flag: "-r", desc: "Show only running jobs" },
      { flag: "-s", desc: "Show only stopped jobs" }
    ],
    examples: [
      { label: "List all background jobs", code: "jobs" },
      { label: "List with PIDs", code: "jobs -l" },
      { label: "Show only running jobs", code: "jobs -r" },
      { label: "Show only stopped jobs", code: "jobs -s" }
    ],
    tip: "Jobs are specific to the current terminal session. Use disown or nohup to make them survive closing the terminal.",
    related: ["bg", "fg", "nohup"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Job Control", url: "https://www.gnu.org/software/bash/manual/bash.html#Job-Control-Builtins" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // NETWORK (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "curl",
    syntax: "curl [options] URL",
    desc: "Transfer data to or from a server using various protocols",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-X METHOD", desc: "Specify HTTP method (GET, POST, PUT, DELETE)" },
      { flag: "-H 'Header: Value'", desc: "Add request header" },
      { flag: "-d DATA", desc: "Send POST data" },
      { flag: "-F 'field=@file'", desc: "Send multipart form data" },
      { flag: "-o FILE", desc: "Write output to file" },
      { flag: "-O", desc: "Save with remote filename" },
      { flag: "-L", desc: "Follow redirects" },
      { flag: "-k, --insecure", desc: "Allow insecure SSL connections" },
      { flag: "-v", desc: "Verbose output" },
      { flag: "-s, --silent", desc: "Silent mode (no progress)" },
      { flag: "-S, --show-error", desc: "Show errors in silent mode" },
      { flag: "-I, --head", desc: "Fetch headers only" },
      { flag: "-u user:pass", desc: "Basic auth" },
      { flag: "-A agent", desc: "Set User-Agent" }
    ],
    examples: [
      { label: "GET request", code: "curl https://api.example.com/data" },
      { label: "POST with JSON", code: "curl -X POST -H 'Content-Type: application/json' -d '{\"key\":\"val\"}' url" },
      { label: "Download file", code: "curl -O https://example.com/file.zip" },
      { label: "Follow redirects and download", code: "curl -L -O https://example.com/file.zip" },
      { label: "Check HTTP headers", code: "curl -I https://example.com" },
      { label: "Upload file", code: "curl -F 'file=@upload.txt' https://example.com/upload" }
    ],
    tip: "curl is the universal HTTP client. Use -s for scripts, -v for debugging, -L to follow redirects.",
    related: ["wget", "http"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "curl Documentation", url: "https://curl.se/docs/" },
      { label: "man curl", url: "https://man7.org/linux/man-pages/man1/curl.1.html" }
    ]
  },
  {
    name: "wget",
    syntax: "wget [options] URL",
    desc: "Download files from the web (supports HTTP, HTTPS, FTP)",
    category: "network",
    difficulty: "beginner",
    flags: [
      { flag: "-O FILE", desc: "Save to specified file" },
      { flag: "-c", desc: "Continue interrupted download" },
      { flag: "-q", desc: "Quiet mode" },
      { flag: "-r, --recursive", desc: "Download recursively" },
      { flag: "-np, --no-parent", desc: "Don't ascend to parent directory" },
      { flag: "--limit-rate=RATE", desc: "Limit download speed" }
    ],
    examples: [
      { label: "Download file", code: "wget https://example.com/file.zip" },
      { label: "Download and rename", code: "wget -O myfile.zip https://example.com/file.zip" },
      { label: "Resume download", code: "wget -c https://example.com/largefile.iso" },
      { label: "Recursive download", code: "wget -r -np https://example.com/docs/" }
    ],
    tip: "wget is better for resuming downloads and recursive site mirroring. curl is more versatile for APIs.",
    related: ["curl", "aria2c"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Wget Manual", url: "https://www.gnu.org/software/wget/manual/wget.html" },
      { label: "man wget", url: "https://man7.org/linux/man-pages/man1/wget.1.html" }
    ]
  },
  {
    name: "ping",
    syntax: "ping [options] host",
    desc: "Send ICMP echo requests to test network connectivity",
    category: "network",
    difficulty: "beginner",
    flags: [
      { flag: "-c COUNT", desc: "Stop after COUNT replies" },
      { flag: "-i INTERVAL", desc: "Wait INTERVAL seconds between pings" },
      { flag: "-s SIZE", desc: "Set packet size in bytes" },
      { flag: "-W timeout", desc: "Set timeout in seconds" },
      { flag: "-4", desc: "Use IPv4 only" },
      { flag: "-6", desc: "Use IPv6 only" },
      { flag: "-q", desc: "Quiet output (show summary only)" }
    ],
    examples: [
      { label: "Basic connectivity test", code: "ping google.com" },
      { label: "Ping 5 times", code: "ping -c 5 google.com" },
      { label: "Ping with interval", code: "ping -c 10 -i 2 google.com" },
      { label: "Ping with large packets", code: "ping -c 5 -s 1024 google.com" }
    ],
    tip: "macOS pings forever by default — use -c to limit. Linux pings 4 times by default.",
    related: ["traceroute", "nslookup", "dig"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man ping", url: "https://man7.org/linux/man-pages/man8/ping.8.html" }
    ]
  },
  {
    name: "traceroute",
    syntax: "traceroute [options] host",
    desc: "Trace the network route to a destination host",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-m MAX_HOPS", desc: "Set maximum number of hops" },
      { flag: "-n", desc: "Don't resolve hostnames (faster)" },
      { flag: "-I", desc: "Use ICMP echo (instead of UDP)" },
      { flag: "-T", desc: "Use TCP SYN (bypasses some firewalls)" },
      { flag: "-p PORT", desc: "Use specific destination port" }
    ],
    examples: [
      { label: "Basic traceroute", code: "traceroute google.com" },
      { label: "Faster (no DNS)", code: "traceroute -n google.com" },
      { label: "Use ICMP packets", code: "traceroute -I google.com" },
      { label: "TCP traceroute", code: "traceroute -T -p 443 google.com" }
    ],
    tip: "Use traceroute -T -p 443 to trace through firewalls that block ICMP/UDP.",
    related: ["ping", "mtr", "nslookup"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "man traceroute", url: "https://man7.org/linux/man-pages/man8/traceroute.8.html" }
    ]
  },
  {
    name: "ifconfig",
    syntax: "ifconfig [interface] [options]",
    desc: "Configure and display network interface parameters",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-a", desc: "Show all interfaces including down" },
      { flag: "interface up", desc: "Bring interface up" },
      { flag: "interface down", desc: "Bring interface down" },
      { flag: "inet addr", desc: "Set IP address" },
      { flag: "netmask mask", desc: "Set subnet mask" }
    ],
    examples: [
      { label: "Show all interfaces", code: "ifconfig -a" },
      { label: "Show specific interface", code: "ifconfig en0" },
      { label: "Set IP address", code: "sudo ifconfig en0 192.168.1.100 netmask 255.255.255.0" },
      { label: "Disable interface", code: "sudo ifconfig en0 down" }
    ],
    tip: "On modern Linux, prefer ip addr over ifconfig. On macOS, ifconfig is still the standard.",
    related: ["ip", "netstat"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "man ifconfig", url: "https://man7.org/linux/man-pages/man8/ifconfig.8.html" }
    ]
  },
  {
    name: "netstat",
    syntax: "netstat [options]",
    desc: "Display network connections, routing tables, and interface statistics",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-t", desc: "Show TCP connections" },
      { flag: "-u", desc: "Show UDP connections" },
      { flag: "-l", desc: "Show only listening sockets" },
      { flag: "-n", desc: "Show numeric addresses (no DNS)" },
      { flag: "-p", desc: "Show PID and program name" },
      { flag: "-a", desc: "Show all sockets" },
      { flag: "-s", desc: "Show protocol statistics" },
      { flag: "-r", desc: "Show routing table" }
    ],
    examples: [
      { label: "Show all listening ports", code: "netstat -tlnp" },
      { label: "Show all TCP connections", code: "netstat -tan" },
      { label: "Show program using port", code: "netstat -tlnp | grep :80" },
      { label: "Show statistics", code: "netstat -s" }
    ],
    tip: "On modern Linux, ss is preferred over netstat. Use netstat -tlnp | grep :PORT to find what's using a port.",
    related: ["ss", "lsof", "ip"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "man netstat", url: "https://man7.org/linux/man-pages/man8/netstat.8.html" }
    ]
  },
  {
    name: "ssh",
    syntax: "ssh [options] [user@]hostname [command]",
    desc: "Secure Shell — connect to a remote machine securely",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-p PORT", desc: "Connect to specific port" },
      { flag: "-i KEY", desc: "Use specific identity/key file" },
      { flag: "-l USER", desc: "Specify login user" },
      { flag: "-v", desc: "Verbose mode (debug connection)" },
      { flag: "-C", desc: "Enable compression" },
      { flag: "-L port:host:port", desc: "Local port forwarding" },
      { flag: "-R port:host:port", desc: "Remote port forwarding" },
      { flag: "-D port", desc: "Dynamic SOCKS proxy" },
      { flag: "-N", desc: "Don't execute remote command (forwarding only)" }
    ],
    examples: [
      { label: "Connect to remote server", code: "ssh user@192.168.1.100" },
      { label: "Connect with specific key", code: "ssh -i ~/.ssh/mykey.pem user@server.com" },
      { label: "Connect on specific port", code: "ssh -p 2222 user@server.com" },
      { label: "Execute remote command", code: "ssh user@server 'ls -la /var/log'" },
      { label: "Local port forwarding", code: "ssh -L 8080:localhost:80 user@server.com" },
      { label: "SOCKS proxy", code: "ssh -D 1080 user@server.com" }
    ],
    tip: "Set up SSH keys with ssh-keygen and ssh-copy-id for passwordless login. Use ~/.ssh/config for host aliases.",
    related: ["scp", "rsync", "ssh-keygen"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "OpenSSH Manual", url: "https://www.openssh.com/manual.html" },
      { label: "man ssh", url: "https://man7.org/linux/man-pages/man1/ssh.1.html" }
    ]
  },
  {
    name: "scp",
    syntax: "scp [options] source... dest",
    desc: "Securely copy files between hosts over SSH",
    category: "network",
    difficulty: "intermediate",
    flags: [
      { flag: "-r", desc: "Recursive — copy directories" },
      { flag: "-P PORT", desc: "Specify SSH port (capital P)" },
      { flag: "-i KEY", desc: "Use specific identity/key file" },
      { flag: "-p", desc: "Preserve modification times and permissions" },
      { flag: "-C", desc: "Enable compression" },
      { flag: "-v", desc: "Verbose mode" }
    ],
    examples: [
      { label: "Copy file to remote", code: "scp file.txt user@server:/remote/path/" },
      { label: "Copy file from remote", code: "scp user@server:/remote/file.txt ./" },
      { label: "Copy directory recursively", code: "scp -r localdir/ user@server:/remote/path/" },
      { label: "Copy with specific port", code: "scp -P 2222 file.txt user@server:/path/" }
    ],
    tip: "rsync is generally preferred over scp for repeated transfers — it supports resuming and differential sync.",
    related: ["ssh", "rsync", "sftp"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "man scp", url: "https://man7.org/linux/man-pages/man1/scp.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // ARCHIVES (5)
  // ──────────────────────────────────────────────────────────
  {
    name: "tar",
    syntax: "tar [options] archive.tar [files...]",
    desc: "Archive files into a tarball (tape archive)",
    category: "archives",
    difficulty: "intermediate",
    flags: [
      { flag: "-c, --create", desc: "Create a new archive" },
      { flag: "-x, --extract", desc: "Extract files from archive" },
      { flag: "-t, --list", desc: "List contents of archive" },
      { flag: "-v, --verbose", desc: "Verbose output" },
      { flag: "-f FILE", desc: "Archive file name" },
      { flag: "-z, --gzip", desc: "Compress with gzip (.tar.gz)" },
      { flag: "-j, --bzip2", desc: "Compress with bzip2 (.tar.bz2)" },
      { flag: "-J, --xz", desc: "Compress with xz (.tar.xz)" },
      { flag: "--strip-components=N", desc: "Strip N leading path components" },
      { flag: "-C DIR", desc: "Change to directory DIR before extracting" },
      { flag: "--exclude=PATTERN", desc: "Exclude files matching pattern" }
    ],
    examples: [
      { label: "Create gzip archive", code: "tar -czf archive.tar.gz /path/to/dir/" },
      { label: "Extract gzip archive", code: "tar -xzf archive.tar.gz" },
      { label: "Create bzip2 archive", code: "tar -cjf archive.tar.bz2 /path/to/dir/" },
      { label: "List archive contents", code: "tar -tzf archive.tar.gz" },
      { label: "Extract to specific directory", code: "tar -xzf archive.tar.gz -C /target/dir/" },
      { label: "Create archive excluding files", code: "tar -czf backup.tar.gz --exclude='*.log' project/" },
      { label: "Strip components on extract", code: "tar -xzf archive.tar.gz --strip-components=1" }
    ],
    tip: "Remember: c=create, x=extract, t=list, z=gzip, j=bzip2, f=file. Mnemonic: 'CeXtract the Zip File'.",
    related: ["gzip", "gunzip", "zip", "unzip"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Tar Manual", url: "https://www.gnu.org/software/tar/manual/" },
      { label: "man tar", url: "https://man7.org/linux/man-pages/man1/tar.1.html" }
    ]
  },
  {
    name: "zip",
    syntax: "zip [options] zipfile files...",
    desc: "Create a compressed ZIP archive",
    category: "archives",
    difficulty: "beginner",
    flags: [
      { flag: "-r", desc: "Recurse directories" },
      { flag: "-q", desc: "Quiet mode" },
      { flag: "-e", desc: "Encrypt with password" },
      { flag: "-P password", desc: "Set password directly" },
      { flag: "-x PATTERN", desc: "Exclude files" },
      { flag: "-j, --junk-paths", desc: "Store just filenames, no paths" }
    ],
    examples: [
      { label: "Create zip archive", code: "zip archive.zip file1 file2" },
      { label: "Create zip of directory", code: "zip -r archive.zip project/" },
      { label: "Add files to existing zip", code: "zip archive.zip newfile.txt" },
      { label: "Exclude patterns", code: "zip -r archive.zip project/ -x '*.git*'" },
      { label: "Encrypt zip", code: "zip -e -r secret.zip project/" }
    ],
    tip: "zip -r is needed to include directories. Use -j to store just files without directory structure.",
    related: ["unzip", "tar", "gzip"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Info-ZIP Home", url: "https://infozip.sourceforge.net/" },
      { label: "man zip", url: "https://man7.org/linux/man-pages/man1/zip.1.html" }
    ]
  },
  {
    name: "unzip",
    syntax: "unzip [options] zipfile",
    desc: "Extract files from a ZIP archive",
    category: "archives",
    difficulty: "beginner",
    flags: [
      { flag: "-l", desc: "List contents without extracting" },
      { flag: "-o", desc: "Overwrite files without prompting" },
      { flag: "-d DIR", desc: "Extract to specified directory" },
      { flag: "-q", desc: "Quiet mode" },
      { flag: "-P password", desc: "Provide password" },
      { flag: "-t", desc: "Test archive integrity" }
    ],
    examples: [
      { label: "Extract zip file", code: "unzip archive.zip" },
      { label: "List contents", code: "unzip -l archive.zip" },
      { label: "Extract to directory", code: "unzip archive.zip -d /target/dir/" },
      { label: "Overwrite existing files", code: "unzip -o archive.zip" },
      { label: "Test archive integrity", code: "unzip -t archive.zip" }
    ],
    tip: "Use -o to avoid being prompted for each file. Use -d to specify where to extract.",
    related: ["zip", "tar", "gunzip"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Info-ZIP UnZip", url: "https://infozip.sourceforge.net/" },
      { label: "man unzip", url: "https://man7.org/linux/man-pages/man1/unzip.1.html" }
    ]
  },
  {
    name: "gzip",
    syntax: "gzip [options] file...",
    desc: "Compress files using GNU zip (gzip) compression",
    category: "archives",
    difficulty: "beginner",
    flags: [
      { flag: "-d, --decompress", desc: "Decompress (same as gunzip)" },
      { flag: "-k, --keep", desc: "Keep original file" },
      { flag: "-f, --force", desc: "Force overwrite" },
      { flag: "-v, --verbose", desc: "Show compression ratio" },
      { flag: "-l, --list", desc: "List compressed file info" },
      { flag: "-r, --recursive", desc: "Compress recursively" },
      { flag: "-9, --best", desc: "Best compression (slowest)" },
      { flag: "-1, --fast", desc: "Fastest compression" }
    ],
    examples: [
      { label: "Compress a file", code: "gzip file.txt" },
      { label: "Decompress", code: "gzip -d file.txt.gz" },
      { label: "Compress keeping original", code: "gzip -k file.txt" },
      { label: "Show compression ratio", code: "gzip -v file.txt" },
      { label: "Best compression", code: "gzip -9 file.txt" }
    ],
    tip: "gzip replaces the original file. Use -k to keep the original. gunzip is equivalent to gzip -d.",
    related: ["gunzip", "bzip2", "xz", "tar"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Gzip Manual", url: "https://www.gnu.org/software/gzip/manual/gzip.html" },
      { label: "man gzip", url: "https://man7.org/linux/man-pages/man1/gzip.1.html" }
    ]
  },
  {
    name: "gunzip",
    syntax: "gunzip [options] file.gz...",
    desc: "Decompress files compressed with gzip",
    category: "archives",
    difficulty: "beginner",
    flags: [
      { flag: "-f, --force", desc: "Force overwrite" },
      { flag: "-k, --keep", desc: "Keep original compressed file" },
      { flag: "-v, --verbose", desc: "Verbose output" },
      { flag: "-t, --test", desc: "Test archive integrity" }
    ],
    examples: [
      { label: "Decompress gzip file", code: "gunzip file.gz" },
      { label: "Keep compressed file", code: "gunzip -k file.gz" },
      { label: "Test integrity", code: "gunzip -t file.gz" },
      { label: "Verbose decompress", code: "gunzip -v file.gz" }
    ],
    tip: "gunzip is equivalent to gzip -d. It handles .gz, .tgz files.",
    related: ["gzip", "tar", "bunzip2"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Gzip Manual", url: "https://www.gnu.org/software/gzip/manual/gzip.html" },
      { label: "man gunzip", url: "https://man7.org/linux/man-pages/man1/gunzip.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // SYSTEM (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "uname",
    syntax: "uname [options]",
    desc: "Print system information (OS, kernel, architecture)",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-a, --all", desc: "Print all information" },
      { flag: "-s, --sysname", desc: "Kernel name (e.g., Linux, Darwin)" },
      { flag: "-n, --nodename", desc: "Network hostname" },
      { flag: "-r, --release", desc: "Kernel release" },
      { flag: "-v, --version", desc: "Kernel version" },
      { flag: "-m, --machine", desc: "Machine hardware name (e.g., x86_64, arm64)" },
      { flag: "-o, --operating-system", desc: "Operating system name" }
    ],
    examples: [
      { label: "Show all system info", code: "uname -a" },
      { label: "Kernel name only", code: "uname -s" },
      { label: "Architecture", code: "uname -m" },
      { label: "Kernel release", code: "uname -r" }
    ],
    tip: "uname -a gives all info. Use uname -m to check architecture (x86_64 vs arm64/Apple Silicon).",
    related: ["hostname", "arch"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man uname", url: "https://man7.org/linux/man-pages/man1/uname.1.html" }
    ]
  },
  {
    name: "df",
    syntax: "df [options] [file...]",
    desc: "Report disk space usage for filesystems",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-h, --human", desc: "Human-readable sizes (K, M, G)" },
      { flag: "-T, --print-type", desc: "Print filesystem type" },
      { flag: "-t TYPE", desc: "Show only specific filesystem type" },
      { flag: "-x TYPE", desc: "Exclude specific filesystem type" },
      { flag: "-i, --inodes", desc: "Show inode usage instead of blocks" },
      { flag: "--total", desc: "Show a grand total" }
    ],
    examples: [
      { label: "Show all disk usage", code: "df -h" },
      { label: "Show specific filesystem", code: "df -h /" },
      { label: "Show filesystem type", code: "df -hT" },
      { label: "Show inode usage", code: "df -i" },
      { label: "Show with total", code: "df -h --total" }
    ],
    tip: "df -h is the most common usage. Use df -h /path to check specific mount points.",
    related: ["du", "lsblk", "mount"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — df", url: "https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html" },
      { label: "man df", url: "https://man7.org/linux/man-pages/man1/df.1.html" }
    ]
  },
  {
    name: "du",
    syntax: "du [options] [file...]",
    desc: "Estimate disk usage of files and directories",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-h, --human", desc: "Human-readable sizes" },
      { flag: "-s, --summarize", desc: "Show total for each argument" },
      { flag: "-d, --max-depth N", desc: "Limit display depth" },
      { flag: "-a, --all", desc: "Show files (not just directories)" },
      { flag: "-c, --total", desc: "Show grand total" },
      { flag: "--exclude=PATTERN", desc: "Exclude matching files" }
    ],
    examples: [
      { label: "Directory sizes", code: "du -h" },
      { label: "Summarize specific directory", code: "du -sh project/" },
      { label: "Show top 10 largest dirs", code: "du -h --max-depth=2 | sort -rh | head -10" },
      { label: "Show total", code: "du -sh --total dir1/ dir2/" },
      { label: "Exclude .git directories", code: "du -h --exclude='.git'" }
    ],
    tip: "du -sh * is the classic way to find what's eating disk space. Combine with sort -rh for largest first.",
    related: ["df", "ls -lh", "ncdu"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — du", url: "https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html" },
      { label: "man du", url: "https://man7.org/linux/man-pages/man1/du.1.html" }
    ]
  },
  {
    name: "free",
    syntax: "free [options]",
    desc: "Display the amount of free and used memory in the system",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-h, --human", desc: "Human-readable (K, M, G)" },
      { flag: "-m", desc: "Display in megabytes" },
      { flag: "-g", desc: "Display in gigabytes" },
      { flag: "-t, --total", desc: "Display total line" },
      { flag: "-s N", desc: "Continuously print with N-second delay" },
      { flag: "-c NUM", desc: "Print NUM times (with -s)" },
      { flag: "-w, --wide", desc: "Wide output (wide columns)" }
    ],
    examples: [
      { label: "Show memory usage", code: "free" },
      { label: "Human-readable", code: "free -h" },
      { label: "Show in MB", code: "free -m" },
      { label: "Continuous monitoring", code: "free -h -s 2" },
      { label: "Show total", code: "free -ht" }
    ],
    tip: "On macOS, use vm_stat or top -l 1 instead. free is Linux-specific.",
    related: ["top", "vm_stat", "swapon"],
    platforms: ["Linux"],
    refs: [
      { label: "man free", url: "https://man7.org/linux/man-pages/man1/free.1.html" }
    ]
  },
  {
    name: "uptime",
    syntax: "uptime",
    desc: "Show how long the system has been running, users, and load averages",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-p, --pretty", desc: "Show uptime in friendly format" },
      { flag: "-s, --since", desc: "Show system start time" }
    ],
    examples: [
      { label: "Show uptime", code: "uptime" },
      { label: "Friendly format", code: "uptime -p" },
      { label: "Since when running", code: "uptime -s" }
    ],
    tip: "Load averages show 1min, 5min, 15min. A load equal to CPU count means 100% utilization.",
    related: ["w", "who", "top"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man uptime", url: "https://man7.org/linux/man-pages/man1/uptime.1.html" }
    ]
  },
  {
    name: "whoami",
    syntax: "whoami",
    desc: "Print the current effective username",
    category: "system",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Show current user", code: "whoami" },
      { label: "Use in script", code: "echo \"Running as $(whoami)\"" },
      { label: "Compare with id", code: "whoami && id" }
    ],
    tip: "whoami shows the effective user name. id shows UID, GID, and groups.",
    related: ["id", "w", "who"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man whoami", url: "https://man7.org/linux/man-pages/man1/whoami.1.html" }
    ]
  },
  {
    name: "env",
    syntax: "env [options] [name=value...] [command]",
    desc: "Display or run a program in a modified environment",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "-i, --ignore-environment", desc: "Start with empty environment" },
      { flag: "-u, --unset=NAME", desc: "Remove variable from environment" },
      { flag: "-0, --null", desc: "NUL-terminate output" }
    ],
    examples: [
      { label: "Show all environment variables", code: "env" },
      { label: "Run with modified PATH", code: "env PATH=/usr/local/bin:$PATH python3 script.py" },
      { label: "Run with clean environment", code: "env -i /usr/bin/program" },
      { label: "Show specific variable", code: "env | grep HOME" },
      { label: "Set and run", code: "env NODE_ENV=production node server.js" }
    ],
    tip: "env is great for running a command with temporary environment changes. Use printenv for just the environment.",
    related: ["export", "printenv", "set"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — env", url: "https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html" },
      { label: "man env", url: "https://man7.org/linux/man-pages/man1/env.1.html" }
    ]
  },
  {
    name: "date",
    syntax: "date [options] [+format]",
    desc: "Print or set the system date and time",
    category: "system",
    difficulty: "beginner",
    flags: [
      { flag: "+FORMAT", desc: "Display time using custom format" },
      { flag: "-s STRING", desc: "Set time from string" },
      { flag: "-u, --utc", desc: "Show/set UTC time" },
      { flag: "-d, --date=STRING", desc: "Display time described by STRING" },
      { flag: "--iso-8601", desc: "ISO 8601 format" }
    ],
    examples: [
      { label: "Current date/time", code: "date" },
      { label: "Custom format", code: "date '+%Y-%m-%d %H:%M:%S'" },
      { label: "Date only", code: "date '+%Y-%m-%d'" },
      { label: "Unix timestamp", code: "date '+%s'" },
      { label: "UTC time", code: "date -u" },
      { label: "Date string to timestamp", code: "date -d '2026-01-15' '+%s'" }
    ],
    tip: "macOS uses -v for date arithmetic, Linux uses -d. Common codes: %Y=year, %m=month, %d=day, %H=hour.",
    related: ["cal", "hwclock", "timedatectl"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — date", url: "https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html" },
      { label: "man date", url: "https://man7.org/linux/man-pages/man1/date.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // SHELL FEATURES (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "history",
    syntax: "history [options]",
    desc: "Display or manipulate the command history list",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "history", desc: "Show full command history" },
      { flag: "history N", desc: "Show last N commands" },
      { flag: "history -c", desc: "Clear the history list" },
      { flag: "history -d OFFSET", desc: "Delete history entry at OFFSET" },
      { flag: "history -w", desc: "Write history to file" },
      { flag: "history -a", desc: "Append new history entries" },
      { flag: "!!", desc: "Repeat last command" },
      { flag: "!N", desc: "Repeat command at position N" },
      { flag: "!string", desc: "Repeat last command starting with string" },
      { flag: "!?string", desc: "Repeat last command containing string" },
      { flag: "Ctrl+R", desc: "Reverse incremental search" }
    ],
    examples: [
      { label: "Show history", code: "history" },
      { label: "Show last 20 commands", code: "history 20" },
      { label: "Repeat last command", code: "!!" },
      { label: "Search history by prefix", code: "history | grep 'git'" },
      { label: "Clear history", code: "history -c" },
      { label: "Execute command 42", code: "!42" }
    ],
    tip: "Use Ctrl+R for reverse search. !:gs/old/new does search-and-replace on the last command.",
    related: ["alias", "export", "Ctrl+R"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — History", url: "https://www.gnu.org/software/bash/manual/bash.html#Bash-History-Builtins" }
    ]
  },
  {
    name: "source",
    syntax: "source file [arguments]",
    desc: "Execute commands from a file in the current shell context",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "source file", desc: "Execute file in current shell" },
      { flag: ". file", desc: "Same as source (POSIX equivalent)" }
    ],
    examples: [
      { label: "Load shell config", code: "source ~/.bashrc" },
      { label: "Short form", code: ". ~/.bashrc" },
      { label: "Load environment file", code: "source .env" },
      { label: "Load with arguments", code: "source script.sh arg1 arg2" }
    ],
    tip: "source runs the file in the current shell process, unlike executing it as a subprocess.",
    related: ["export", "bash", "sh"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Bourne Shell Builtins", url: "https://www.gnu.org/software/bash/manual/bash.html#Bourne-Shell-Builtins" }
    ]
  },
  {
    name: "exit",
    syntax: "exit [code]",
    desc: "Exit the current shell session",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "exit", desc: "Exit with last command's status" },
      { flag: "exit 0", desc: "Exit with success status" },
      { flag: "exit 1", desc: "Exit with error status" }
    ],
    examples: [
      { label: "Exit shell", code: "exit" },
      { label: "Exit with specific code", code: "exit 1" },
      { label: "Exit with success", code: "exit 0" }
    ],
    tip: "Exit codes: 0=success, non-zero=error. 127=command not found, 130=Ctrl+C.",
    related: ["logout", "Ctrl+D"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Exit Status", url: "https://www.gnu.org/software/bash/manual/bash.html#Exit-Status" }
    ]
  },
  {
    name: "clear",
    syntax: "clear",
    desc: "Clear the terminal screen",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "-x", desc: "Don't clear scrollback buffer" }
    ],
    examples: [
      { label: "Clear terminal", code: "clear" },
      { label: "Clear with Ctrl+L shortcut", code: "Ctrl+L" }
    ],
    tip: "Ctrl+L is a faster alternative to clear.",
    related: ["reset", "Ctrl+L"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "man clear", url: "https://invisible-island.net/ncurses/man/clear.1.html" }
    ]
  },
  {
    name: "echo",
    syntax: "echo [options] [string...]",
    desc: "Display a line of text",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "-e", desc: "Enable interpretation of escape sequences (\\n, \\t, etc.)" },
      { flag: "-n", desc: "Do not output trailing newline" },
      { flag: "-E", desc: "Disable interpretation of escape sequences (default)" }
    ],
    examples: [
      { label: "Print text", code: "echo 'Hello World'" },
      { label: "Print with newline", code: "echo -e 'Line1\\nLine2'" },
      { label: "Print variable", code: "echo $HOME" },
      { label: "Print without newline", code: "echo -n 'Loading...'" },
      { label: "Print to file", code: "echo 'content' > file.txt" }
    ],
    tip: "Use printf instead of echo for complex formatting. echo -e can behave differently across shells.",
    related: ["printf", "cat", "tee"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Echo", url: "https://www.gnu.org/software/bash/manual/bash.html#echo-Builtin" }
    ]
  },
  {
    name: "printf",
    syntax: "printf 'format' [arguments...]",
    desc: "Format and print data (like C's printf)",
    category: "shell",
    difficulty: "intermediate",
    flags: [
      { flag: "%s", desc: "String" },
      { flag: "%d, %i", desc: "Integer" },
      { flag: "%f", desc: "Floating point" },
      { flag: "%x, %X", desc: "Hexadecimal" },
      { flag: "%%", desc: "Literal percent sign" },
      { flag: "\\n", desc: "Newline" },
      { flag: "\\t", desc: "Tab" }
    ],
    examples: [
      { label: "Print formatted string", code: "printf 'Hello, %s!\\n' 'World'" },
      { label: "Print numbers", code: "printf '%d %f %x\\n' 42 3.14 255" },
      { label: "Pad with zeros", code: "printf '%05d\\n' 42" },
      { label: "Width formatting", code: "printf '%-10s %10s\\n' 'left' 'right'" },
      { label: "Output to file", code: "printf 'key=%s\\n' 'value' > config.txt" }
    ],
    tip: "printf is more portable and predictable than echo. Preferred for formatting in scripts.",
    related: ["echo", "cut", "awk"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Printf", url: "https://www.gnu.org/software/bash/manual/bash.html#Printf-Builtin" }
    ]
  },
  {
    name: "alias",
    syntax: "alias name='command'",
    desc: "Create shortcuts for commands",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "alias name='cmd'", desc: "Create alias" },
      { flag: "alias", desc: "List all aliases" },
      { flag: "alias name", desc: "Show specific alias" }
    ],
    examples: [
      { label: "Create alias", code: "alias ll='ls -la'" },
      { label: "Git alias", code: "alias gs='git status'" },
      { label: "List all aliases", code: "alias" }
    ],
    tip: "Put aliases in ~/.bashrc or ~/.zshrc for persistence.",
    related: ["unalias", "export", "source"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Aliases", url: "https://www.gnu.org/software/bash/manual/bash.html#Aliases" }
    ]
  },
  {
    name: "export",
    syntax: "export VAR=value",
    desc: "Make variables available to child processes",
    category: "shell",
    difficulty: "beginner",
    flags: [
      { flag: "export VAR=val", desc: "Set and export variable" },
      { flag: "export -p", desc: "List exported variables" }
    ],
    examples: [
      { label: "Set and export variable", code: "export EDITOR=vim" },
      { label: "Add to PATH", code: "export PATH=$PATH:/usr/local/bin" },
      { label: "List exports", code: "export -p | head -20" }
    ],
    tip: "export makes variables available to child processes.",
    related: ["alias", "env", "source"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Environment Variables", url: "https://www.gnu.org/software/bash/manual/bash.html#Environment-Variables" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // GLOBBING & EXPANSION (5)
  // ──────────────────────────────────────────────────────────
  {
    name: "*",
    syntax: "command *.ext",
    desc: "Glob wildcard — matches zero or more characters in filenames",
    category: "glob",
    difficulty: "beginner",
    flags: [
      { flag: "*.txt", desc: "Match all .txt files" },
      { flag: "file*", desc: "Match files starting with 'file'" },
      { flag: "*test*", desc: "Match files containing 'test'" },
      { flag: "src/**/*.js", desc: "Match all .js files recursively (with **)" }
    ],
    examples: [
      { label: "List all .txt files", code: "ls *.txt" },
      { label: "Copy all PNG files", code: "cp *.png /backup/" },
      { label: "Remove all .log files", code: "rm *.log" },
      { label: "Recursive glob (zsh/bash 4+)", code: "echo src/**/*.js" },
      { label: "Match multiple extensions", code: "ls *.{js,ts,jsx,tsx}" }
    ],
    tip: "* matches everything except / and leading dots. Use ** for recursive matching.",
    related: ["?", "[]", "{}", "~"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Filename Expansion", url: "https://www.gnu.org/software/bash/manual/bash.html#Filename-Expansion" }
    ]
  },
  {
    name: "?",
    syntax: "command file?.ext",
    desc: "Glob wildcard — matches exactly one character",
    category: "glob",
    difficulty: "beginner",
    flags: [
      { flag: "file?.txt", desc: "Match file1.txt, fileA.txt, etc." },
      { flag: "???.log", desc: "Match exactly 3-char name with .log" }
    ],
    examples: [
      { label: "Match single character", code: "ls file?.txt" },
      { label: "Match 3-letter names", code: "ls ???.log" },
      { label: "Use with commands", code: "cat notes_202?.txt" }
    ],
    tip: "Use ? when you need to match exactly one character.",
    related: ["*", "[]", "{}"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Filename Expansion", url: "https://www.gnu.org/software/bash/manual/bash.html#Filename-Expansion" }
    ]
  },
  {
    name: "[]",
    syntax: "command file[0-9].ext",
    desc: "Glob character class — matches one of the listed characters",
    category: "glob",
    difficulty: "intermediate",
    flags: [
      { flag: "[abc]", desc: "Match a, b, or c" },
      { flag: "[0-9]", desc: "Match any digit" },
      { flag: "[a-z]", desc: "Match any lowercase letter" },
      { flag: "[!abc]", desc: "Match anything except a, b, or c" }
    ],
    examples: [
      { label: "Match files with digits", code: "ls file[0-9].txt" },
      { label: "Match letters only", code: "ls [a-z]*" },
      { label: "Exclude pattern", code: "ls [!0-9]*" },
      { label: "POSIX character class", code: "ls [[:upper:]]*" }
    ],
    tip: "Character classes are great for matching ranges. Use POSIX classes: [[:alpha:]], [[:digit:]], [[:alnum:]].",
    related: ["*", "?", "{}"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Filename Expansion", url: "https://www.gnu.org/software/bash/manual/bash.html#Filename-Expansion" }
    ]
  },
  {
    name: "{}",
    syntax: "command {a,b,c}",
    desc: "Brace expansion — generates arbitrary strings from list",
    category: "glob",
    difficulty: "intermediate",
    flags: [
      { flag: "{a,b,c}", desc: "Expand to: a b c" },
      { flag: "{1..10}", desc: "Expand to: 1 2 3 ... 10" },
      { flag: "{a..z}", desc: "Expand to: a b c ... z" },
      { flag: "{01..10}", desc: "Zero-padded: 01 02 ... 10" },
      { flag: "prefix_{a,b}_{x,y}", desc: "Cartesian product expansion" }
    ],
    examples: [
      { label: "Create multiple files", code: "touch file_{a,b,c}.txt" },
      { label: "Number range", code: "mkdir dir_{01..10}" },
      { label: "Combined ranges", code: "touch img_{a..c}_{1..3}.jpg" },
      { label: "Backup files", code: "cp config{,.bak}" },
      { label: "Multiple mkdir", code: "mkdir -p project/{src,lib,bin,docs}" }
    ],
    tip: "Brace expansion is NOT glob expansion — it happens before globbing.",
    related: ["*", "[]", "seq"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Brace Expansion", url: "https://www.gnu.org/software/bash/manual/bash.html#Brace-Expansion" }
    ]
  },
  {
    name: "~",
    syntax: "~[username]",
    desc: "Tilde expansion — shorthand for home directory",
    category: "glob",
    difficulty: "beginner",
    flags: [
      { flag: "~", desc: "Expands to current user's home directory" },
      { flag: "~user", desc: "Expands to user's home directory" },
      { flag: "~+", desc: "Expands to current working directory ($PWD)" },
      { flag: "~-", desc: "Expands to previous working directory ($OLDPWD)" }
    ],
    examples: [
      { label: "Go to home directory", code: "cd ~" },
      { label: "List home files", code: "ls ~/" },
      { label: "Reference other user's home", code: "ls ~otheruser/Documents/" },
      { label: "Go to previous directory", code: "cd ~-" },
      { label: "Copy to home", code: "cp file ~/Documents/" }
    ],
    tip: "~- is a quick way to switch to your last directory.",
    related: ["cd", "pwd"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Tilde Expansion", url: "https://www.gnu.org/software/bash/manual/bash.html#Tilde-Expansion" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // REDIRECTION & PIPES (6)
  // ──────────────────────────────────────────────────────────
  {
    name: ">",
    syntax: "command > file",
    desc: "Redirect stdout to a file (overwrite)",
    category: "redirect",
    difficulty: "beginner",
    flags: [
      { flag: "> file", desc: "Overwrite file with stdout" },
      { flag: "2> file", desc: "Redirect stderr to file" },
      { flag: "&> file", desc: "Redirect both stdout and stderr" },
      { flag: "> /dev/null 2>&1", desc: "Suppress all output" }
    ],
    examples: [
      { label: "Save output to file", code: "ls -la > files.txt" },
      { label: "Overwrite file", code: "echo 'hello' > file.txt" },
      { label: "Redirect stderr", code: "command 2> error.log" },
      { label: "Redirect both streams", code: "command &> output.log" },
      { label: "Suppress all output", code: "command > /dev/null 2>&1" }
    ],
    tip: "> always overwrites the file. Use >> to append. Be very careful — there is no undo!",
    related: [">>", "<", "tee"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Redirections", url: "https://www.gnu.org/software/bash/manual/bash.html#Redirections" }
    ]
  },
  {
    name: ">>",
    syntax: "command >> file",
    desc: "Redirect stdout to a file (append)",
    category: "redirect",
    difficulty: "beginner",
    flags: [
      { flag: ">> file", desc: "Append stdout to file" },
      { flag: "2>> file", desc: "Append stderr to file" },
      { flag: "&>> file", desc: "Append both stdout and stderr" }
    ],
    examples: [
      { label: "Append to file", code: "echo 'new line' >> file.txt" },
      { label: "Append log entries", code: "date >> activity.log" },
      { label: "Collect output from loop", code: "for f in *.txt; do echo $f >> list.txt; done" }
    ],
    tip: ">> appends to the file (creates it if it doesn't exist). > overwrites.",
    related: [">", "<", "tee", "cat"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Redirections", url: "https://www.gnu.org/software/bash/manual/bash.html#Redirections" }
    ]
  },
  {
    name: "<",
    syntax: "command < file",
    desc: "Redirect file contents as stdin to a command",
    category: "redirect",
    difficulty: "beginner",
    flags: [
      { flag: "< file", desc: "Feed file as stdin" },
      { flag: "<<EOF ... EOF", desc: "Here Document — multi-line stdin" },
      { flag: "<<< string", desc: "Here String — feed string as stdin" }
    ],
    examples: [
      { label: "Feed file to command", code: "wc -l < file.txt" },
      { label: "Here Document", code: "cat <<EOF\nLine 1\nLine 2\nEOF" },
      { label: "Here String", code: "grep 'word' <<< 'some word here'" },
      { label: "Sort file contents", code: "sort < unsorted.txt > sorted.txt" }
    ],
    tip: "Here Documents are great for multi-line input. Use <<-EOF for indented heredocs.",
    related: [">", ">>", "|", "tee"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Here Documents", url: "https://www.gnu.org/software/bash/manual/bash.html#Here-Documents" }
    ]
  },
  {
    name: "|",
    syntax: "command1 | command2",
    desc: "Pipe — pass stdout of one command as stdin to another",
    category: "redirect",
    difficulty: "beginner",
    flags: [
      { flag: "cmd1 | cmd2", desc: "Pipe output of cmd1 into cmd2" },
      { flag: "cmd | tee file", desc: "Pipe and save to file simultaneously" },
      { flag: "cmd1 | cmd2 | cmd3", desc: "Chain multiple pipes" }
    ],
    examples: [
      { label: "Pipe to less", code: "ls -la | less" },
      { label: "Count files", code: "ls | wc -l" },
      { label: "Filter with grep", code: "ps aux | grep node" },
      { label: "Chain commands", code: "cat file.txt | sort | uniq | wc -l" },
      { label: "Find largest files", code: "du -sh * | sort -rh | head -10" }
    ],
    tip: "Pipes are the backbone of Unix philosophy. Combine small tools for powerful pipelines.",
    related: ["xargs", "tee", ">"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "Bash Manual — Pipelines", url: "https://www.gnu.org/software/bash/manual/bash.html#Pipelines" }
    ]
  },
  {
    name: "tee",
    syntax: "tee [options] file...",
    desc: "Read from stdin and write to both stdout and files",
    category: "redirect",
    difficulty: "beginner",
    flags: [
      { flag: "-a, --append", desc: "Append to file instead of overwriting" },
      { flag: "-i, --ignore-interrupts", desc: "Ignore interrupt signals" },
      { flag: "-p, --output-error", desc: "Diagnose errors writing to non pipes" }
    ],
    examples: [
      { label: "Save and display", code: "ls -la | tee files.txt" },
      { label: "Append to file", code: "echo 'line' | tee -a logfile.txt" },
      { label: "Write to multiple files", code: "echo 'data' | tee file1.txt file2.txt" },
      { label: "Pipe chain with tee", code: "command | tee step1.log | next_command" },
      { label: "Save filtered output", code: "grep 'error' log.txt | tee errors.txt" }
    ],
    tip: "tee is like a T-splitter for data. It's named after the Unix tee command that splits output.",
    related: ["xargs", "|", "cat"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — tee", url: "https://www.gnu.org/software/coreutils/manual/html_node/tee-invocation.html" },
      { label: "man tee", url: "https://man7.org/linux/man-pages/man1/tee.1.html" }
    ]
  },
  {
    name: "xargs",
    syntax: "xargs [options] [command]",
    desc: "Build and execute command lines from stdin",
    category: "redirect",
    difficulty: "intermediate",
    flags: [
      { flag: "-n NUM", desc: "Use at most NUM arguments per command" },
      { flag: "-I STR", desc: "Replace STR in command with each line of input" },
      { flag: "-0, --null", desc: "Input items are delimited by NUL" },
      { flag: "-P NUM", desc: "Run up to NUM processes in parallel" },
      { flag: "-d DELIM", desc: "Use DELIM as input delimiter" },
      { flag: "-t", desc: "Print command before executing" },
      { flag: "-r, --no-run-if-empty", desc: "Don't run if input is empty" },
      { flag: "-a FILE", desc: "Read from FILE instead of stdin" }
    ],
    examples: [
      { label: "Delete files from find", code: "find . -name '*.tmp' -print0 | xargs -0 rm" },
      { label: "Run command per line", code: "cat urls.txt | xargs -I {} curl -O {}" },
      { label: "Parallel download", code: "cat urls.txt | xargs -P 4 -I {} curl -O {}" },
      { label: "Delete matching files", code: "ls *.log | xargs rm" },
      { label: "One file per command", code: "find . -name '*.jpg' | xargs -n 1 mv -t /images/" },
      { label: "Show command before running", code: "echo 'file1 file2' | xargs -t rm" }
    ],
    tip: "Always use -print0 with xargs -0 for filenames with spaces. -I {} is useful for command templates.",
    related: ["find", "grep", "tee", "parallel"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU xargs Manual", url: "https://www.gnu.org/software/findutils/manual/html_node/findutils_xargs.html" },
      { label: "man xargs", url: "https://man7.org/linux/man-pages/man1/xargs.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // TEXT PROCESSING (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "sed",
    syntax: "sed [options] 'command' [file...]",
    desc: "Stream editor for filtering and transforming text",
    category: "textproc",
    difficulty: "intermediate",
    flags: [
      { flag: "-e 'cmd'", desc: "Add script/command" },
      { flag: "-i[SUFFIX]", desc: "Edit files in-place (backup with SUFFIX)" },
      { flag: "-n, --quiet", desc: "Suppress automatic printing" },
      { flag: "-E, -r", desc: "Use extended regular expressions" },
      { flag: "s/old/new/", desc: "Substitute first occurrence" },
      { flag: "s/old/new/g", desc: "Substitute all occurrences" },
      { flag: "s/old/new/gi", desc: "Substitute all (case-insensitive)" },
      { flag: "/pattern/d", desc: "Delete matching lines" },
      { flag: "/pattern/p", desc: "Print matching lines" },
      { flag: "2a\\text", desc: "Append text after line 2" },
      { flag: "3i\\text", desc: "Insert text before line 3" }
    ],
    examples: [
      { label: "Replace text in file", code: "sed 's/old/new/g' file.txt" },
      { label: "Edit file in-place", code: "sed -i 's/foo/bar/g' file.txt" },
      { label: "Delete lines matching pattern", code: "sed '/^#/d' config.txt" },
      { label: "Delete blank lines", code: "sed '/^$/d' file.txt" },
      { label: "Insert text after line", code: "sed '3a\\New line of text' file.txt" },
      { label: "Print specific lines", code: "sed -n '5,10p' file.txt" },
      { label: "Remove leading whitespace", code: "sed 's/^[[:space:]]*//' file.txt" },
      { label: "macOS in-place edit", code: "sed -i '' 's/old/new/g' file.txt" }
    ],
    tip: "macOS sed requires -i '' (empty string) for in-place editing. Linux sed just uses -i. Always test without -i first.",
    related: ["awk", "grep", "cut", "tr"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Sed Manual", url: "https://www.gnu.org/software/sed/manual/sed.html" },
      { label: "man sed", url: "https://man7.org/linux/man-pages/man1/sed.1.html" }
    ]
  },
  {
    name: "awk",
    syntax: "awk 'pattern { action }' [file...]",
    desc: "Pattern scanning and processing language",
    category: "textproc",
    difficulty: "intermediate",
    flags: [
      { flag: "-F CHR", desc: "Set field separator" },
      { flag: "-v VAR=VAL", desc: "Set variable before execution" },
      { flag: "{ print $0 }", desc: "Print entire line" },
      { flag: "{ print $1 }", desc: "Print first field" },
      { flag: "{ print $NF }", desc: "Print last field" },
      { flag: "NR", desc: "Number of current record (line)" },
      { flag: "NF", desc: "Number of fields in current record" },
      { flag: "BEGIN { }", desc: "Execute before processing" },
      { flag: "END { }", desc: "Execute after processing" }
    ],
    examples: [
      { label: "Print first column", code: "awk '{print $1}' file.txt" },
      { label: "Custom field separator", code: "awk -F: '{print $1, $3}' /etc/passwd" },
      { label: "Print line numbers", code: "awk '{print NR, $0}' file.txt" },
      { label: "Sum a column", code: "awk '{sum += $1} END {print sum}' numbers.txt" },
      { label: "Count lines", code: "awk 'END {print NR}' file.txt" },
      { label: "Filter by condition", code: "awk '$3 > 100' data.txt" },
      { label: "Print last field", code: "awk '{print $NF}' file.txt" },
      { label: "CSV processing", code: "awk -F, '{print $2}' data.csv" }
    ],
    tip: "awk is incredibly powerful for column-based text processing. $0=whole line, $1=first field, NF=field count, NR=line number.",
    related: ["sed", "cut", "sort", "grep"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Awk Manual", url: "https://www.gnu.org/software/gawk/manual/gawk.html" },
      { label: "man awk", url: "https://man7.org/linux/man-pages/man1/awk.1.html" }
    ]
  },
  {
    name: "cut",
    syntax: "cut [options] [file...]",
    desc: "Remove sections from each line of files",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-d CHR", desc: "Use CHR as field delimiter" },
      { flag: "-f LIST", desc: "Select fields (e.g., 1,3 or 2-5)" },
      { flag: "-c LIST", desc: "Select characters" },
      { flag: "-b LIST", desc: "Select bytes" },
      { flag: "--complement", desc: "Invert field/byte selection" },
      { flag: "--output-delimiter=STR", desc: "Use STR as output delimiter" }
    ],
    examples: [
      { label: "Cut first field (colon-delimited)", code: "cut -d: -f1 /etc/passwd" },
      { label: "Cut fields 1 and 3", code: "cut -d: -f1,3 /etc/passwd" },
      { label: "Cut characters 1-5", code: "cut -c1-5 file.txt" },
      { label: "Cut CSV column", code: "cut -d, -f2 data.csv" },
      { label: "Cut with tab delimiter", code: "cut -f2 data.tsv" },
      { label: "Exclude field", code: "cut -d: -f2- --complement /etc/passwd" }
    ],
    tip: "cut is simple and fast for column extraction. For more complex processing, use awk.",
    related: ["awk", "sed", "paste", "column"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — cut", url: "https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html" },
      { label: "man cut", url: "https://man7.org/linux/man-pages/man1/cut.1.html" }
    ]
  },
  {
    name: "sort",
    syntax: "sort [options] [file...]",
    desc: "Sort lines of text files",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-n, --numeric-sort", desc: "Sort by numeric value" },
      { flag: "-r, --reverse", desc: "Reverse sort order" },
      { flag: "-f, --ignore-case", desc: "Fold lowercase to uppercase" },
      { flag: "-h, --human-numeric-sort", desc: "Sort by human-readable numbers (K, M, G)" },
      { flag: "-k, --key=KEY", desc: "Sort by KEY (field position)" },
      { flag: "-t, --field-separator=SEP", desc: "Use SEP as field separator" },
      { flag: "-u, --unique", desc: "Output only unique lines" },
      { flag: "-V, --version-sort", desc: "Sort by version number" },
      { flag: "-R, --random-sort", desc: "Random sort" },
      { flag: "-M, --month-sort", desc: "Sort by month name" }
    ],
    examples: [
      { label: "Alphabetical sort", code: "sort names.txt" },
      { label: "Reverse sort", code: "sort -r names.txt" },
      { label: "Numeric sort", code: "sort -n numbers.txt" },
      { label: "Human-readable sort", code: "du -sh * | sort -hr" },
      { label: "Sort by specific column", code: "sort -k2,2 data.txt" },
      { label: "Sort unique", code: "sort -u names.txt" },
      { label: "Sort with custom separator", code: "sort -t: -k3,3n /etc/passwd" },
      { label: "Version sort", code: "sort -V files*.txt" }
    ],
    tip: "sort -h is essential for human-readable sizes. -u removes duplicates. -V sorts version numbers correctly.",
    related: ["uniq", "cut", "awk", "tr"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — sort", url: "https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html" },
      { label: "man sort", url: "https://man7.org/linux/man-pages/man1/sort.1.html" }
    ]
  },
  {
    name: "uniq",
    syntax: "uniq [options] [input [output]]",
    desc: "Filter adjacent matching lines from input",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-c, --count", desc: "Prefix lines by count" },
      { flag: "-d, --repeated", desc: "Print only repeated lines" },
      { flag: "-u, --unique", desc: "Print only unique lines" },
      { flag: "-i, --ignore-case", desc: "Ignore case when comparing" },
      { flag: "-f NUM", desc: "Skip NUM fields when comparing" },
      { flag: "-s NUM", desc: "Skip NUM characters when comparing" },
      { flag: "-w NUM", desc: "Compare at most NUM characters" }
    ],
    examples: [
      { label: "Remove duplicates", code: "sort file.txt | uniq" },
      { label: "Count occurrences", code: "sort file.txt | uniq -c" },
      { label: "Count and sort by frequency", code: "sort file.txt | uniq -c | sort -rn" },
      { label: "Show only duplicates", code: "sort file.txt | uniq -d" },
      { label: "Show only unique lines", code: "sort file.txt | uniq -u" },
      { label: "Count words by frequency", code: "cat file.txt | tr ' ' '\\n' | sort | uniq -c | sort -rn" }
    ],
    tip: "uniq only removes ADJACENT duplicates — always pipe through sort first unless you want to keep adjacent duplicates.",
    related: ["sort", "grep", "awk", "cut"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — uniq", url: "https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html" },
      { label: "man uniq", url: "https://man7.org/linux/man-pages/man1/uniq.1.html" }
    ]
  },
  {
    name: "tr",
    syntax: "tr [options] SET1 [SET2]",
    desc: "Translate or delete characters from standard input",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-d, --delete", desc: "Delete characters in SET1" },
      { flag: "-s, --squeeze-repeats", desc: "Replace each input string of repeated chars with a single char" },
      { flag: "-c, -C, --complement", desc: "Complement SET1" },
      { flag: "-t, --truncate-set1", desc: "Truncate SET1 to length of SET2" }
    ],
    examples: [
      { label: "Replace characters", code: "echo 'hello' | tr 'a-z' 'A-Z'" },
      { label: "Replace spaces with newlines", code: "echo 'a b c' | tr ' ' '\\n'" },
      { label: "Delete characters", code: "echo 'abc123' | tr -d '[:digit:]'" },
      { label: "Squeeze whitespace", code: "cat file.txt | tr -s ' '" },
      { label: "Delete specific chars", code: "echo 'hello world' | tr -d 'aeiou'" },
      { label: "Replace tabs with spaces", code: "cat file.txt | tr '\\t' ' '" }
    ],
    tip: "tr is great for quick character-level transformations. Use tr '[:upper:]' '[:lower:]' for case conversion.",
    related: ["sed", "awk", "cut", "sort"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — tr", url: "https://www.gnu.org/software/coreutils/manual/html_node/tr-invocation.html" },
      { label: "man tr", url: "https://man7.org/linux/man-pages/man1/tr.1.html" }
    ]
  },
  {
    name: "paste",
    syntax: "paste [options] [file...]",
    desc: "Merge lines of files side by side",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-d LIST", desc: "Use characters from LIST as delimiters" },
      { flag: "-s, --serial", desc: "Paste one file at a time (serial, not parallel)" },
      { flag: "-z, --zero-terminated", desc: "Line delimiter is NUL, not newline" }
    ],
    examples: [
      { label: "Merge files side by side", code: "paste file1.txt file2.txt" },
      { label: "Merge with comma delimiter", code: "paste -d, file1.txt file2.txt" },
      { label: "Merge vertically (serial)", code: "paste -s file1.txt" },
      { label: "Create CSV from columns", code: "paste -d, col1.txt col2.txt col3.txt > output.csv" },
      { label: "Number lines", code: "nl file.txt || paste -sd'\\n' <(seq $(wc -l < file.txt) | paste -sd'\\n') file.txt" }
    ],
    tip: "paste is the opposite of cut — it combines columns instead of extracting them.",
    related: ["cut", "column", "join", "awk"],
    platforms: ["macOS", "Linux", "Bash", "Zsh", "POSIX"],
    refs: [
      { label: "GNU Coreutils — paste", url: "https://www.gnu.org/software/coreutils/manual/html_node/paste-invocation.html" },
      { label: "man paste", url: "https://man7.org/linux/man-pages/man1/paste.1.html" }
    ]
  },
  {
    name: "column",
    syntax: "column [options] [file]",
    desc: "Format input into multiple columns",
    category: "textproc",
    difficulty: "beginner",
    flags: [
      { flag: "-t, --table", desc: "Create a table (auto-detect columns)" },
      { flag: "-s SEP", desc: "Specify input separator" },
      { flag: "-c WIDTH", desc: "Truncate output to WIDTH" },
      { flag: "-e, --table-expand", desc: "Expand long lines" },
      { flag: "-J, --json", desc: "Output as JSON" }
    ],
    examples: [
      { label: "Format into columns", code: "mount | column -t" },
      { label: "CSV to table", code: "cat data.csv | column -t -s," },
      { label: "Format /etc/passwd", code: "cat /etc/passwd | column -t -s:" },
      { label: "List in columns", code: "ls /usr/bin | column" },
      { label: "JSON output", code: "mount | column -t -J" }
    ],
    tip: "column -t is perfect for making output more readable. Great for terminal display of structured data.",
    related: ["cut", "paste", "awk", "sort"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "man column", url: "https://man7.org/linux/man-pages/man1/column.1.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // EDITORS (3)
  // ──────────────────────────────────────────────────────────
  {
    name: "vim",
    syntax: "vim [options] [file]",
    desc: "Vi Improved — powerful modal text editor",
    category: "editors",
    difficulty: "advanced",
    flags: [
      { flag: "+NUM", desc: "Open file at line NUM" },
      { flag: "+/PATTERN", desc: "Open file at first match of PATTERN" },
      { flag: "-R, --readonly", desc: "Open in read-only mode" },
      { flag: "-d, --diff", desc: "Open in diff mode" },
      { flag: "-e, --ex", desc: "Open in Ex mode" },
      { flag: "-c CMD", desc: "Execute CMD after opening" },
      { flag: "-S SESSION", desc: "Source SESSION after opening" },
      { flag: "-w SCRIPT", desc: "Write all edited files to SCRIPT" }
    ],
    examples: [
      { label: "Open file", code: "vim file.txt" },
      { label: "Open at line 42", code: "vim +42 file.txt" },
      { label: "Open at pattern", code: "vim +/function file.js" },
      { label: "Read-only mode", code: "vim -R important.conf" },
      { label: "Diff two files", code: "vim -d file1.txt file2.txt" }
    ],
    tip: "Essential vim modes: i=insert, Esc=normal, v=visual, :=command. :w=save, :q=quit, :wq=save+quit, :q!=force quit.",
    related: ["nano", "vi", "code"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Vim Official Site", url: "https://www.vim.org/" },
      { label: "Vim Documentation", url: "https://vimhelp.org/" },
      { label: "man vim", url: "https://man7.org/linux/man-pages/man1/vim.1.html" }
    ]
  },
  {
    name: "nano",
    syntax: "nano [options] [file]",
    desc: "Simple, modeless text editor for the terminal",
    category: "editors",
    difficulty: "beginner",
    flags: [
      { flag: "+NUM", desc: "Open file at line NUM" },
      { flag: "-B, --backup", desc: "Create backups of modified files" },
      { flag: "-c, --constantshow", desc: "Show cursor position at all times" },
      { flag: "-m, --mouse", desc: "Enable mouse support" },
      { flag: "-i, --autoindent", desc: "Auto-indent new lines" },
      { flag: "-l, --nofollow", desc: "Don't follow symlinks" },
      { flag: "-p, --preserve", desc: "Preserve XON/XOFF" },
      { flag: "-r, --fill=NUM", desc: "Set line wrap at NUM columns" }
    ],
    examples: [
      { label: "Open file", code: "nano file.txt" },
      { label: "Open at specific line", code: "nano +42 file.txt" },
      { label: "With auto-indent", code: "nano -i script.sh" },
      { label: "With line wrap", code: "nano -r 80 README.md" },
      { label: "Enable mouse", code: "nano -m file.txt" }
    ],
    tip: "nano is beginner-friendly with on-screen shortcuts. ^ means Ctrl: ^O=save, ^X=exit, ^W=search, ^K=cut line.",
    related: ["vim", "code", "ed"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Nano Manual", url: "https://www.nano-editor.org/dist/" },
      { label: "man nano", url: "https://man7.org/linux/man-pages/man1/nano.1.html" }
    ]
  },
  {
    name: "code",
    syntax: "code [options] [file...]",
    desc: "Visual Studio Code — open files or folders from terminal",
    category: "editors",
    difficulty: "beginner",
    flags: [
      { flag: "-g, --goto FILE:LINE:COL", desc: "Open file at specific line and column" },
      { flag: "-d, --diff", desc: "Open diff editor" },
      { flag: "-w, --wait", desc: "Wait for files to be closed before returning" },
      { flag: "-n, --new-window", desc: "Force new window" },
      { flag: "-r, --reuse-window", desc: "Force reuse of last window" },
      { flag: "-a, --add", desc: "Add folder to last active window" },
      { flag: "-e, --extensions-dir", desc: "Set extensions directory" },
      { flag: "-s, --locale", desc: "Set display language" }
    ],
    examples: [
      { label: "Open file", code: "code file.txt" },
      { label: "Open current directory", code: "code ." },
      { label: "Open at specific line", code: "code -g src/index.ts:42" },
      { label: "Open in diff mode", code: "code -d file1.txt file2.txt" },
      { label: "Wait for file to close", code: "code -w file.txt" },
      { label: "Open multiple files", code: "code file1.txt file2.txt file3.txt" },
      { label: "Force new window", code: "code -n ." },
      { label: "Open and wait (for scripts)", code: "code -w --new-window ." }
    ],
    tip: "Add 'code' to PATH from VS Code: Cmd+Shift+P > 'Shell Command: Install code command in PATH'.",
    related: ["vim", "nano", "subl"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "VS Code CLI Documentation", url: "https://code.visualstudio.com/docs/editor/command-line" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // GIT (15)
  // ──────────────────────────────────────────────────────────
  {
    name: "git init",
    syntax: "git init [directory]",
    desc: "Initialize a new Git repository",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "directory", desc: "Create repository in specified directory" },
      { flag: "--bare", desc: "Create a bare repository (for servers)" },
      { flag: "--initial-branch=NAME", desc: "Set initial branch name (default: main)" },
      { flag: "-q, --quiet", desc: "Quiet mode" }
    ],
    examples: [
      { label: "Init in current directory", code: "git init" },
      { label: "Init in new directory", code: "git init my-project" },
      { label: "Init bare repository", code: "git init --bare repo.git" },
      { label: "Init with custom branch", code: "git init --initial-branch=develop" }
    ],
    tip: "Use --initial-branch to set your preferred default branch name instead of main/master.",
    related: ["git clone", "git add", "git commit"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git init", url: "https://git-scm.com/docs/git-init" },
      { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2" }
    ]
  },
  {
    name: "git clone",
    syntax: "git clone [options] <repository> [directory]",
    desc: "Clone a repository into a new directory",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "-b, --branch", desc: "Clone specific branch" },
      { flag: "--depth N", desc: "Create shallow clone with N commits" },
      { flag: "--recursive", desc: "Clone submodules recursively" },
      { flag: "--shallow-submodules", desc: "Clone submodules shallowly" },
      { flag: "--single-branch", desc: "Clone only one branch" },
      { flag: "--no-checkout", desc: "Don't checkout working tree" }
    ],
    examples: [
      { label: "Clone repository", code: "git clone https://github.com/user/repo.git" },
      { label: "Clone specific branch", code: "git clone -b develop https://github.com/user/repo.git" },
      { label: "Shallow clone (faster)", code: "git clone --depth 1 https://github.com/user/repo.git" },
      { label: "Clone with submodules", code: "git clone --recursive https://github.com/user/repo.git" },
      { label: "Clone into specific directory", code: "git clone https://github.com/user/repo.git my-dir" }
    ],
    tip: "Use --depth 1 for faster clones when you don't need history. --single-branch saves bandwidth too.",
    related: ["git init", "git pull", "git remote"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git clone", url: "https://git-scm.com/docs/git-clone" }
    ]
  },
  {
    name: "git add",
    syntax: "git add [options] [path...]",
    desc: "Add file contents to the staging area (index)",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: ".", desc: "Stage all changes in current directory" },
      { flag: "-A, --all", desc: "Stage all changes (tracked and untracked)" },
      { flag: "-p, --patch", desc: "Interactively select hunks to stage" },
      { flag: "-u, --update", desc: "Stage only modified/deleted tracked files" },
      { flag: "-f, --force", desc: "Force add (even ignored files)" },
      { flag: "-n, --dry-run", desc: "Show what would be staged" }
    ],
    examples: [
      { label: "Stage all changes", code: "git add ." },
      { label: "Stage specific files", code: "git add file1.txt file2.txt" },
      { label: "Stage interactively", code: "git add -p" },
      { label: "Stage only tracked files", code: "git add -u" },
      { label: "Stage all (including untracked)", code: "git add -A" },
      { label: "Dry run", code: "git add -n ." }
    ],
    tip: "git add -p is great for partial commits. Use git add -A to stage everything including untracked files.",
    related: ["git commit", "git status", "git diff"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git add", url: "https://git-scm.com/docs/git-add" }
    ]
  },
  {
    name: "git commit",
    syntax: "git commit [options] [-m message]",
    desc: "Record changes to the repository",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "-m, --message MSG", desc: "Use MSG as the commit message" },
      { flag: "-a, --all", desc: "Stage all modified/deleted files automatically" },
      { flag: "--amend", desc: "Amend the last commit" },
      { flag: "-v, --verbose", desc: "Show diff in editor" },
      { flag: "--no-edit", desc: "Use selected commit message without opening editor" },
      { flag: "--author=AUTHOR", desc: "Override author" },
      { flag: "--date=DATE", desc: "Override date" },
      { flag: "-S, --signoff", desc: "Add Signed-off-by trailer" }
    ],
    examples: [
      { label: "Commit with message", code: "git commit -m 'Add new feature'" },
      { label: "Stage and commit all", code: "git commit -am 'Fix bug'" },
      { label: "Amend last commit", code: "git commit --amend -m 'Better message'" },
      { label: "Amend with new changes", code: "git commit --amend --no-edit" },
      { label: "Commit with signoff", code: "git commit -s -m 'Fix security issue'" }
    ],
    tip: "Write clear commit messages. Use imperative mood: 'Add feature' not 'Added feature'. Keep subject under 72 chars.",
    related: ["git add", "git status", "git log"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git commit", url: "https://git-scm.com/docs/git-commit" }
    ]
  },
  {
    name: "git push",
    syntax: "git push [options] [remote] [branch]",
    desc: "Update remote refs with local commits",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "origin main", desc: "Push to origin main branch" },
      { flag: "-u, --set-upstream", desc: "Set upstream branch for future pushes" },
      { flag: "--force", desc: "Force push (use with caution!)" },
      { flag: "--force-with-lease", desc: "Force push only if remote ref matches expected" },
      { flag: "--all", desc: "Push all branches" },
      { flag: "--tags", desc: "Push all tags" },
      { flag: "-f, --force", desc: "Force push" },
      { flag: "--delete", desc: "Delete remote branch" },
      { flag: "--dry-run", desc: "Show what would be pushed" }
    ],
    examples: [
      { label: "Push with upstream tracking", code: "git push -u origin main" },
      { label: "Push to specific remote", code: "git push origin main" },
      { label: "Force push (dangerous!)", code: "git push --force origin main" },
      { label: "Push all branches", code: "git push --all origin" },
      { label: "Push tags", code: "git push --tags origin" },
      { label: "Delete remote branch", code: "git push origin --delete feature-branch" },
      { label: "Safe force push", code: "git push --force-with-lease origin main" }
    ],
    tip: "Always prefer --force-with-lease over --force. Use -u to set upstream tracking on first push.",
    related: ["git pull", "git remote", "git fetch"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git push", url: "https://git-scm.com/docs/git-push" }
    ]
  },
  {
    name: "git pull",
    syntax: "git pull [options] [remote] [branch]",
    desc: "Fetch and integrate from another repository or branch",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "origin main", desc: "Pull from origin main" },
      { flag: "--rebase, --no-rebase", desc: "Rebase instead of merge" },
      { flag: "--ff-only", desc: "Only fast-forward merge" },
      { flag: "--no-ff", desc: "Always create merge commit" },
      { flag: "--autostash, --no-autostash", desc: "Stash/unstash local changes automatically" },
      { flag: "--depth N", desc: "Shallow fetch with depth N" }
    ],
    examples: [
      { label: "Pull with rebase", code: "git pull --rebase origin main" },
      { label: "Fast-forward only", code: "git pull --ff-only origin main" },
      { label: "Auto-stash local changes", code: "git pull --autostash origin main" },
      { label: "Shallow pull", code: "git pull --depth 1 origin main" }
    ],
    tip: "git pull --rebase keeps a cleaner history. Set it as default: git config --global pull.rebase true.",
    related: ["git push", "git fetch", "git merge"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git pull", url: "https://git-scm.com/docs/git-pull" }
    ]
  },
  {
    name: "git status",
    syntax: "git status [options]",
    desc: "Show the working tree status",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "-s, --short", desc: "Short format output" },
      { flag: "-b, --branch", desc: "Show branch and tracking info" },
      { flag: "--porcelain", desc: "Machine-readable output" },
      { flag: "--ignored", desc: "Show ignored files too" },
      { flag: "-u, --untracked-files", desc: "Show untracked files (no, normal, all)" }
    ],
    examples: [
      { label: "Full status", code: "git status" },
      { label: "Short status", code: "git status -s" },
      { label: "Show branch info", code: "git status -b" },
      { label: "Show all untracked", code: "git status -u all" }
    ],
    tip: "git status -s gives a concise view. Short codes: M=modified, A=added, ??=untracked, D=deleted.",
    related: ["git diff", "git add", "git log"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git status", url: "https://git-scm.com/docs/git-status" }
    ]
  },
  {
    name: "git diff",
    syntax: "git diff [options] [commit] [--] [path...]",
    desc: "Show changes between commits, working tree, and index",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "HEAD", desc: "Diff working tree against last commit" },
      { flag: "--staged, --cached", desc: "Diff index against HEAD" },
      { flag: "commit1..commit2", diff: "Diff between two commits" },
      { flag: "--stat", desc: "Show diffstat (summary)" },
      { flag: "--name-only", desc: "Show only file names" },
      { flag: "--name-status", desc: "Show names and status" },
      { flag: "--color-words", desc: "Color word-level diff" },
      { flag: "-w, --ignore-all-space", desc: "Ignore whitespace changes" },
      { flag: "--word-diff", desc: "Word-level diff" }
    ],
    examples: [
      { label: "Show unstaged changes", code: "git diff" },
      { label: "Show staged changes", code: "git diff --staged" },
      { label: "Diff two commits", code: "git diff abc123..def456" },
      { label: "Diff with stat summary", code: "git diff --stat HEAD~3" },
      { label: "Diff specific file", code: "git diff -- file.txt" },
      { label: "Word-level diff", code: "git diff --word-diff" }
    ],
    tip: "git diff shows unstaged changes. git diff --staged shows staged changes. git diff HEAD shows both.",
    related: ["git status", "git log", "git show"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git diff", url: "https://git-scm.com/docs/git-diff" }
    ]
  },
  {
    name: "git log",
    syntax: "git log [options] [commit...] [--] [path...]",
    desc: "Show commit logs",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "--oneline", desc: "Compact one-line per commit" },
      { flag: "--graph", desc: "Show ASCII graph of branches" },
      { flag: "--all", desc: "Show all branches" },
      { flag: "--decorate", desc: "Show branch and tag refs" },
      { flag: "-n NUM, --max-count", desc: "Limit to NUM commits" },
      { flag: "--author=NAME", desc: "Filter by author" },
      { flag: "--since=DATE", desc: "Show commits since date" },
      { flag: "--until=DATE", desc: "Show commits until date" },
      { flag: "--grep=PATTERN", desc: "Search commit messages" },
      { flag: "-p, --patch", desc: "Show diffs for each commit" },
      { flag: "--stat", desc: "Show diffstat for each commit" },
      { flag: "--format=FMT", desc: "Custom format string" },
      { flag: "--no-merges", desc: "Don't show merge commits" }
    ],
    examples: [
      { label: "Compact log", code: "git log --oneline" },
      { label: "Graph with branches", code: "git log --oneline --graph --all" },
      { label: "Last 10 commits", code: "git log -10 --oneline" },
      { label: "Author filter", code: "git log --author='John'" },
      { label: "Search messages", code: "git log --grep='fix'" },
      { label: "Date range", code: "git log --since='2 weeks ago'" },
      { label: "Custom format", code: "git log --pretty=format:'%h %an %s'" },
      { label: "Show with diffs", code: "git log -p --follow -- file.txt" }
    ],
    tip: "git log --oneline --graph --all --decorate is the most useful log command. Create an alias for it!",
    related: ["git show", "git diff", "git blame"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git log", url: "https://git-scm.com/docs/git-log" }
    ]
  },
  {
    name: "git branch",
    syntax: "git branch [options] [branchname]",
    desc: "List, create, or delete branches",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "-a, --all", desc: "List all branches (local and remote)" },
      { flag: "-r, --remotes", desc: "List remote branches" },
      { flag: "-v, --verbose", desc: "Show commit hash and message" },
      { flag: "-d, --delete", desc: "Delete branch" },
      { flag: "-D", desc: "Force delete branch" },
      { flag: "-m, --move", desc: "Rename branch" },
      { flag: "-M", desc: "Force rename branch" },
      { flag: "--merged", desc: "Show merged branches" },
      { flag: "--no-merged", desc: "Show unmerged branches" },
      { flag: "--sort=COMMITDATE", desc: "Sort branches by date" }
    ],
    examples: [
      { label: "List branches", code: "git branch" },
      { label: "List all branches", code: "git branch -a" },
      { label: "Create new branch", code: "git branch feature/new-login" },
      { label: "Delete branch", code: "git branch -d feature/old" },
      { label: "Force delete branch", code: "git branch -D feature/abandoned" },
      { label: "Rename branch", code: "git branch -m old-name new-name" },
      { label: "Show merged branches", code: "git branch --merged" },
      { label: "List with last commit", code: "git branch -v" }
    ],
    tip: "Use git branch -d to delete (safe) vs -D to force delete. Always check what you're deleting first.",
    related: ["git checkout", "git merge", "git stash"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git branch", url: "https://git-scm.com/docs/git-branch" }
    ]
  },
  {
    name: "git checkout",
    syntax: "git checkout [options] [branch]",
    desc: "Switch branches or restore working tree files",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "branch", desc: "Switch to branch" },
      { flag: "-b, --new-branch", desc: "Create and switch to new branch" },
      { flag: "-B", desc: "Create/reset branch and switch" },
      { flag: "--orphan", desc: "Create orphan branch" },
      { flag: "-f, --force", desc: "Force checkout (discard local changes)" },
      { flag: "--track", desc: "Set up tracking for remote branch" },
      { flag: "-p, --patch", desc: "Interactively select hunks to restore" },
      { flag: "-- FILE", desc: "Restore specific file(s)" }
    ],
    examples: [
      { label: "Switch to branch", code: "git checkout main" },
      { label: "Create and switch", code: "git checkout -b feature/new" },
      { label: "Force checkout (discard changes)", code: "git checkout -f main" },
      { label: "Restore file from commit", code: "git checkout HEAD -- file.txt" },
      { label: "Track remote branch", code: "git checkout --track origin/feature" },
      { label: "Create orphan branch", code: "git checkout --orphan gh-pages" }
    ],
    tip: "git switch and git restore are newer, more intuitive alternatives to git checkout.",
    related: ["git branch", "git merge", "git switch"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git checkout", url: "https://git-scm.com/docs/git-checkout" }
    ]
  },
  {
    name: "git merge",
    syntax: "git merge [options] <branch>",
    desc: "Join two or more development histories together",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "--no-ff", desc: "Create merge commit even for fast-forward" },
      { flag: "--squash", desc: "Squash all commits into one before merging" },
      { flag: "--ff-only", desc: "Only allow fast-forward merge" },
      { flag: "--abort", desc: "Abort the current merge" },
      { flag: "--continue", desc: "Continue merge after resolving conflicts" },
      { flag: "--no-commit", desc: "Don't auto-commit the merge" },
      { flag: "-m MSG", desc: "Use custom merge message" }
    ],
    examples: [
      { label: "Merge feature branch", code: "git merge feature/login" },
      { label: "Merge with no fast-forward", code: "git merge --no-ff feature/admin" },
      { label: "Squash merge", code: "git merge --squash feature/fix" },
      { label: "Abort merge", code: "git merge --abort" },
      { label: "Continue after conflict", code: "git merge --continue" }
    ],
    tip: "Use --no-ff to preserve branch history. --squash is great for cleaning up many small commits.",
    related: ["git branch", "git checkout", "git rebase"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git merge", url: "https://git-scm.com/docs/git-merge" }
    ]
  },
  {
    name: "git stash",
    syntax: "git stash [options]",
    desc: "Stash local changes temporarily to work on something else",
    category: "git",
    difficulty: "intermediate",
    flags: [
      { flag: "stash", desc: "Stash current changes" },
      { flag: "stash pop", desc: "Apply and remove most recent stash" },
      { flag: "stash apply", desc: "Apply stash without removing" },
      { flag: "stash drop", desc: "Remove most recent stash" },
      { flag: "stash list", desc: "List all stashes" },
      { flag: "stash show", desc: "Show stash contents" },
      { flag: "-u, --include-untracked", desc: "Stash untracked files too" },
      { flag: "-a, --all", desc: "Stash all (including ignored)" },
      { flag: "stash clear", desc: "Remove all stashes" },
      { flag: "-m, --message MSG", desc: "Stash with a message" }
    ],
    examples: [
      { label: "Stash changes", code: "git stash" },
      { label: "Stash with message", code: "git stash push -m 'WIP: login feature'" },
      { label: "Pop stash (apply + remove)", code: "git stash pop" },
      { label: "Apply stash (keep in stash)", code: "git stash apply" },
      { label: "List all stashes", code: "git stash list" },
      { label: "Show stash diff", code: "git stash show -p" },
      { label: "Stash including untracked", code: "git stash -u" },
      { label: "Drop a specific stash", code: "git stash drop stash@{2}" }
    ],
    tip: "stash pop applies and removes. stash apply only applies (stash stays). Use stash push -m for messages.",
    related: ["git checkout", "git branch", "git stash"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git stash", url: "https://git-scm.com/docs/git-stash" }
    ]
  },
  {
    name: "git tag",
    syntax: "git tag [options] [tagname] [commit]",
    desc: "Create, list, delete, or verify tags",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "tagname", desc: "Create lightweight tag" },
      { flag: "-a, --annotated", desc: "Create annotated tag" },
      { flag: "-m, --message MSG", desc: "Tag message" },
      { flag: "-d, --delete", desc: "Delete tag" },
      { flag: "-l, --list", desc: "List tags" },
      { flag: "--sort=VERSION", desc: "Sort by version" },
      { flag: "-v, --verify", desc: "Verify tag GPG signature" }
    ],
    examples: [
      { label: "Create lightweight tag", code: "git tag v1.0.0" },
      { label: "Create annotated tag", code: "git tag -a v1.0.0 -m 'Release v1.0.0'" },
      { label: "Tag a specific commit", code: "git tag -a v0.9 abc123" },
      { label: "List all tags", code: "git tag -l" },
      { label: "List with pattern", code: "git tag -l 'v1.*'" },
      { label: "Delete tag", code: "git tag -d v1.0.0" },
      { label: "Push tags to remote", code: "git push origin --tags" }
    ],
    tip: "Use annotated tags (-a) for releases. Lightweight tags are just pointers. Push tags separately with git push --tags.",
    related: ["git push", "git log", "git stash"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git tag", url: "https://git-scm.com/docs/git-tag" }
    ]
  },
  {
    name: "git remote",
    syntax: "git remote [options] [remote]",
    desc: "Manage set of tracked repositories (remotes)",
    category: "git",
    difficulty: "beginner",
    flags: [
      { flag: "-v, --verbose", desc: "Show remote URLs" },
      { flag: "add NAME URL", desc: "Add a new remote" },
      { flag: "remove NAME", desc: "Remove a remote" },
      { flag: "rename OLD NEW", desc: "Rename a remote" },
      { flag: "set-url NAME NEW_URL", desc: "Change remote URL" },
      { flag: "show NAME", desc: "Show remote info" }
    ],
    examples: [
      { label: "List remotes", code: "git remote -v" },
      { label: "Add remote", code: "git remote add origin https://github.com/user/repo.git" },
      { label: "Remove remote", code: "git remote remove origin" },
      { label: "Change URL to SSH", code: "git remote set-url origin git@github.com:user/repo.git" },
      { label: "Show remote info", code: "git remote show origin" },
      { label: "Rename remote", code: "git remote rename origin upstream" }
    ],
    tip: "Use SSH URLs (git@github.com:...) for authentication without tokens. origin is the conventional default name.",
    related: ["git clone", "git push", "git pull"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Git Documentation — git remote", url: "https://git-scm.com/docs/git-remote" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // JAVASCRIPT / NODE (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "node",
    syntax: "node [options] [file.js] [arguments]",
    desc: "Execute JavaScript with Node.js runtime",
    category: "javascript",
    difficulty: "beginner",
    flags: [
      { flag: "-e, --eval CODE", desc: "Evaluate JavaScript code string" },
      { flag: "-p, --print", desc: "Print result of evaluation" },
      { flag: "-i, --interactive", desc: "Open REPL" },
      { flag: "--inspect", desc: "Enable inspector (debugger)" },
      { flag: "--watch", desc: "Watch for changes and restart" },
      { flag: "--experimental-vm-modules", desc: "Enable VM modules" },
      { flag: "--experimental-strip-types", desc: "Strip TypeScript types (Node 23+)" }
    ],
    examples: [
      { label: "Run script", code: "node app.js" },
      { label: "Evaluate expression", code: "node -e 'console.log(2 + 2)'" },
      { label: "Print expression", code: "node -p 'Date.now()'" },
      { label: "Open REPL", code: "node -i" },
      { label: "Debug mode", code: "node --inspect app.js" },
      { label: "Watch mode", code: "node --watch app.js" },
      { label: "Run with arguments", code: "node app.js --port 3000" }
    ],
    tip: "Node 22+ supports --watch mode natively. Use --inspect with Chrome DevTools for debugging.",
    related: ["npm", "npx", "deno", "bun"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Node.js Documentation", url: "https://nodejs.org/docs/latest/api/" },
      { label: "Node.js CLI Docs", url: "https://nodejs.org/api/cli.html" }
    ]
  },
  {
    name: "npm",
    syntax: "npm [command] [options]",
    desc: "Node Package Manager — install and manage packages",
    category: "javascript",
    difficulty: "beginner",
    flags: [
      { flag: "install, i", desc: "Install packages" },
      { flag: "install -g", desc: "Install globally" },
      { flag: "install --save-dev, -D", desc: "Install as devDependency" },
      { flag: "uninstall, rm", desc: "Remove packages" },
      { flag: "update, up", desc: "Update packages" },
      { flag: "run", desc: "Run package scripts" },
      { flag: "init", desc: "Initialize package.json" },
      { flag: "init -y", desc: "Init with defaults" },
      { flag: "list, ls", desc: "List installed packages" },
      { flag: "outdated", desc: "Show outdated packages" },
      { flag: "ci", desc: "Clean install from lock file" },
      { flag: "audit", desc: "Security audit" },
      { flag: "publish", desc: "Publish package" },
      { flag: "exec, x", desc: "Execute package binary" }
    ],
    examples: [
      { label: "Install package", code: "npm install express" },
      { label: "Install dev dependency", code: "npm install -D typescript" },
      { label: "Install all dependencies", code: "npm install" },
      { label: "Global install", code: "npm install -g nodemon" },
      { label: "Run scripts", code: "npm run build" },
      { label: "Check outdated", code: "npm outdated" },
      { label: "Security audit", code: "npm audit" },
      { label: "Fix vulnerabilities", code: "npm audit fix" },
      { label: "Clean install", code: "rm -rf node_modules && npm ci" },
      { label: "Init with defaults", code: "npm init -y" }
    ],
    tip: "Use npm ci in CI/CD (faster, deterministic). Use npm audit fix to patch vulnerabilities.",
    related: ["node", "npx", "yarn", "pnpm"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "npm Documentation", url: "https://docs.npmjs.com/" },
      { label: "npm CLI Commands", url: "https://docs.npmjs.com/cli" }
    ]
  },
  {
    name: "npx",
    syntax: "npx [options] <command> [args]",
    desc: "Execute npm package binaries (without global install)",
    category: "javascript",
    difficulty: "beginner",
    flags: [
      { flag: "package", desc: "Run package binary" },
      { flag: "--no-install", desc: "Don't install if not found" },
      { flag: "--yes, -y", desc: "Auto-confirm package install" },
      { flag: "--package PKG", desc: "Specify package name explicitly" },
      { flag: "--call CMD", desc: "Call command in package context" }
    ],
    examples: [
      { label: "Run package without installing", code: "npx create-react-app my-app" },
      { label: "Run with auto-confirm", code: "npx -y package-name" },
      { label: "Run TypeScript compiler", code: "npx tsc --version" },
      { label: "Run ESLint", code: "npx eslint ." },
      { label: "Run specific version", code: "npx prettier@3.0.0 --check ." }
    ],
    tip: "npx is great for running tools without installing globally. It temporarily downloads and runs them.",
    related: ["npm", "node", "bunx"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "npx Documentation", url: "https://docs.npmjs.com/cli/v10/commands/npx" }
    ]
  },
  {
    name: "yarn",
    syntax: "yarn [command] [options]",
    desc: "Fast, reliable, and secure dependency management (alternative to npm)",
    category: "javascript",
    difficulty: "beginner",
    flags: [
      { flag: "add", desc: "Install a package" },
      { flag: "add -D", desc: "Install as dev dependency" },
      { flag: "remove", desc: "Remove a package" },
      { flag: "install, i", desc: "Install all dependencies" },
      { flag: "upgrade", desc: "Upgrade packages" },
      { flag: "run", desc: "Run a script" },
      { flag: "list", desc: "List installed packages" },
      { flag: "info", desc: "Show package info" },
      { flag: "cache clean", desc: "Clear global cache" }
    ],
    examples: [
      { label: "Install dependencies", code: "yarn install" },
      { label: "Add package", code: "yarn add lodash" },
      { label: "Add dev dependency", code: "yarn add -D jest" },
      { label: "Remove package", code: "yarn remove lodash" },
      { label: "Run script", code: "yarn dev" },
      { label: "Upgrade packages", code: "yarn upgrade" },
      { label: "Add exact version", code: "yarn add --exact react" }
    ],
    tip: "Yarn v1 (Classic) vs Yarn Berry (v2+): different commands. Use corepack to manage package managers.",
    related: ["npm", "npx", "pnpm", "bun"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Yarn Documentation", url: "https://yarnpkg.com/docs" },
      { label: "Classic vs Berry", url: "https://yarnpkg.com/migration/guide" }
    ]
  },
  {
    name: "pnpm",
    syntax: "pnpm [command] [options]",
    desc: "Fast, disk-efficient package manager (uses content-addressable store)",
    category: "javascript",
    difficulty: "intermediate",
    flags: [
      { flag: "install, i", desc: "Install dependencies" },
      { flag: "add", desc: "Add a package" },
      { flag: "add -D", desc: "Add as dev dependency" },
      { flag: "remove, rm", desc: "Remove a package" },
      { flag: "update", desc: "Update packages" },
      { flag: "run", desc: "Run a script" },
      { flag: "list", desc: "List packages" },
      { flag: "store status", desc: "Show store status" },
      { flag: "-r, --recursive", desc: "Run in workspace recursively" }
    ],
    examples: [
      { label: "Install dependencies", code: "pnpm install" },
      { label: "Add package", code: "pnpm add express" },
      { label: "Add dev dependency", code: "pnpm add -D typescript" },
      { label: "Remove package", code: "pnpm remove express" },
      { label: "Run script", code: "pnpm run build" },
      { label: "Workspace install", code: "pnpm install -r" },
      { label: "Add to workspace", code: "pnpm -F my-package add lodash" }
    ],
    tip: "pnpm saves disk space by using hard links. Strict dependency resolution prevents phantom dependencies.",
    related: ["npm", "yarn", "bun", "node"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "pnpm Documentation", url: "https://pnpm.io/motivation" },
      { label: "pnpm CLI", url: "https://pnpm.io/cli/install" }
    ]
  },
  {
    name: "bun",
    syntax: "bun [command] [options]",
    desc: "Fast all-in-one JavaScript runtime, bundler, and package manager",
    category: "javascript",
    difficulty: "intermediate",
    flags: [
      { flag: "run", desc: "Run a script or file" },
      { flag: "install, i", desc: "Install dependencies" },
      { flag: "add", desc: "Add a package" },
      { flag: "remove, rm", desc: "Remove a package" },
      { flag: "test", desc: "Run tests" },
      { flag: "build", desc: "Bundle JavaScript/TypeScript" },
      { flag: "x", desc: "Execute a package (like npx)" },
      { flag: "--hot", desc: "Hot reload" },
      { flag: "--bun", desc: "Force Bun runtime in package.json scripts" }
    ],
    examples: [
      { label: "Run a script", code: "bun run index.ts" },
      { label: "Install dependencies", code: "bun install" },
      { label: "Add package", code: "bun add express" },
      { label: "Run tests", code: "bun test" },
      { label: "Bundle app", code: "bun build ./index.ts --outdir ./dist" },
      { label: "Execute package", code: "bunx eslint ." },
      { label: "Run with hot reload", code: "bun --hot run dev.ts" }
    ],
    tip: "Bun is dramatically faster than Node for many workloads. It's a drop-in replacement for Node.js in many cases.",
    related: ["node", "npm", "npx", "deno"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Bun Documentation", url: "https://bun.sh/docs" },
      { label: "Bun GitHub", url: "https://github.com/oven-sh/bun" }
    ]
  },
  {
    name: "deno",
    syntax: "deno [command] [options]",
    desc: "Secure runtime for JavaScript and TypeScript",
    category: "javascript",
    difficulty: "intermediate",
    flags: [
      { flag: "run, r", desc: "Run a script" },
      { flag: "eval, e", desc: "Evaluate code" },
      { flag: "compile", desc: "Compile to executable" },
      { flag: "bundle", desc: "Bundle into single file (deprecated)" },
      { flag: "install", desc: "Install executable" },
      { flag: "test", desc: "Run tests" },
      { flag: "lint", desc: "Lint source files" },
      { flag: "fmt", desc: "Format source files" },
      { flag: "cache", desc: "Cache dependencies" },
      { flag: "info", desc: "Show info about modules" },
      { flag: "--allow-net", desc: "Allow network access" },
      { flag: "--allow-env", desc: "Allow env access" },
      { flag: "--allow-read", desc: "Allow read access" },
      { flag: "--allow-write", desc: "Allow write access" },
      { flag: "--allow-run", desc: "Allow subprocess access" },
      { flag: "-A, --allow-all", desc: "Allow all permissions" },
      { flag: "--node-modules-dir", desc: "Use node_modules" }
    ],
    examples: [
      { label: "Run script", code: "deno run main.ts" },
      { label: "Run with permissions", code: "deno run --allow-net --allow-env main.ts" },
      { label: "Run from URL", code: "deno run https://deno.land/std/examples/welcome.ts" },
      { label: "Compile to binary", code: "deno compile main.ts" },
      { label: "Format files", code: "deno fmt" },
      { label: "Lint files", code: "deno lint" },
      { label: "Run tests", code: "deno test" },
      { label: "Cache dependencies", code: "deno cache main.ts" }
    ],
    tip: "Deno is secure by default — no network or file access unless explicitly allowed. Use -A to allow all for development.",
    related: ["node", "bun", "npm"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Deno Manual", url: "https://docs.deno.com/runtime/" },
      { label: "Deno by Example", url: "https://examples.deno.land/" }
    ]
  },
  {
    name: "tsc",
    syntax: "tsc [options] [files]",
    desc: "TypeScript compiler — compile TypeScript to JavaScript",
    category: "javascript",
    difficulty: "intermediate",
    flags: [
      { flag: "file.ts", desc: "Compile specific file" },
      { flag: "-p, --project DIR", desc: "Compile project from tsconfig.json" },
      { flag: "--init", desc: "Create tsconfig.json" },
      { flag: "--noEmit", desc: "Type-check without emitting files" },
      { flag: "--watch, -w", desc: "Watch mode" },
      { flag: "--outDir DIR", desc: "Output directory" },
      { flag: "--declaration", desc: "Generate .d.ts declaration files" },
      { flag: "--sourceMap", desc: "Generate source maps" },
      { flag: "--target TARGET", desc: "Target ECMAScript version" },
      { flag: "--strict", desc: "Enable all strict type-checking" },
      { flag: "--esModuleInterop", desc: "Enable ES module interop" },
      { flag: "--skipLibCheck", desc: "Skip type checking of declaration files" },
      { flag: "--listFiles", desc: "List compiled files" }
    ],
    examples: [
      { label: "Compile project", code: "tsc" },
      { label: "Compile single file", code: "tsc index.ts" },
      { label: "Initialize tsconfig", code: "tsc --init" },
      { label: "Type-check only", code: "tsc --noEmit" },
      { label: "Watch mode", code: "tsc --watch" },
      { label: "Compile with declaration", code: "tsc --declaration --outDir dist" },
      { label: "Compile for specific target", code: "tsc --target ES2020" }
    ],
    tip: "Use --noEmit for quick type-checking. Create tsconfig.json with tsc --init for project configuration.",
    related: ["node", "npm", "npx"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/" },
      { label: "TypeScript CLI", url: "https://www.typescriptlang.org/docs/handbook/compiler-options.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // macOS SPECIFIC (7)
  // ──────────────────────────────────────────────────────────
  {
    name: "open",
    syntax: "open [options] [file...]",
    desc: "Open files, directories, and URLs with their default application (macOS)",
    category: "macos",
    difficulty: "beginner",
    flags: [
      { flag: "-a APP", desc: "Open with specified application" },
      { flag: "-e", desc: "Open with TextEdit" },
      { flag: "-t", desc: "Open with default text editor" },
      { flag: "-f", desc: "Open file from stdin" },
      { flag: "-W, --wait-apps", desc: "Wait until applications close" },
      { flag: "-R, --reveal", desc: "Reveal in Finder" },
      { flag: "-g", desc: "Open with Services (Contextual menu)" },
      { flag: "-h", desc: "Search for headers in framework" },
      { flag: "--args", desc: "Pass arguments to application" },
      { flag: "-n, --new", desc: "Open a new instance" },
      { flag: "-b, --bundle-id", desc: "Open by bundle identifier" },
      { flag: "--background", desc: "Open in background" }
    ],
    examples: [
      { label: "Open file with default app", code: "open document.pdf" },
      { label: "Open in specific app", code: "open -a 'Visual Studio Code' file.ts" },
      { label: "Open URL in browser", code: "open https://github.com" },
      { label: "Open in Finder", code: "open ." },
      { label: "Reveal file in Finder", code: "open -R file.txt" },
      { label: "Open with TextEdit", code: "open -e file.txt" },
      { label: "Open image in Preview", code: "open -a Preview image.png" },
      { label: "Open and wait", code: "open -W document.pdf" },
      { label: "Open folder in new Finder", code: "open -n ~/Downloads" }
    ],
    tip: "open . opens the current directory in Finder. open -R reveals a specific file. Very useful in scripts.",
    related: ["pbcopy", "pbpaste", "screencapture"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS open man page", url: "https://ss64.com/mac/open.html" }
    ]
  },
  {
    name: "pbcopy",
    syntax: "pbcopy [file]",
    desc: "Copy input to the macOS clipboard",
    category: "macos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Copy text to clipboard", code: "echo 'Hello' | pbcopy" },
      { label: "Copy file contents", code: "cat file.txt | pbcopy" },
      { label: "Copy command output", code: "ls -la | pbcopy" },
      { label: "Copy variable", code: "MY_VAR='test' && echo $MY_VAR | pbcopy" }
    ],
    tip: "pbcopy is macOS only. On Linux use xclip or xsel. On Windows use clip or Set-Clipboard.",
    related: ["pbpaste", "xclip", "clip"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS pbcopy man page", url: "https://ss64.com/mac/pbcopy.html" }
    ]
  },
  {
    name: "pbpaste",
    syntax: "pbpaste",
    desc: "Output the contents of the macOS clipboard to stdout",
    category: "macos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Paste clipboard to file", code: "pbpaste > file.txt" },
      { label: "Paste to command", code: "pbpaste | grep 'search'" },
      { label: "Paste to variable", code: "VAR=$(pbpaste)" },
      { label: "Output clipboard contents", code: "pbpaste" }
    ],
    tip: "pbpaste is the inverse of pbcopy. Works with text, not images.",
    related: ["pbcopy", "xclip"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS pbpaste man page", url: "https://ss64.com/mac/pbpaste.html" }
    ]
  },
  {
    name: "screencapture",
    syntax: "screencapture [options] [file]",
    desc: "Capture screen or window to a file (macOS)",
    category: "macos",
    difficulty: "beginner",
    flags: [
      { flag: "-c", desc: "Copy to clipboard" },
      { flag: "-C", desc: "Include cursor" },
      { flag: "-d", desc: "Display dialog" },
      { flag: "-i", desc: "Interactive capture (select area/window)" },
      { flag: "-m", desc: "Capture main monitor only" },
      { flag: "-p", desc: "Capture screen as PDF" },
      { flag: "-s", desc: "Capture with shadow" },
      { flag: "-T seconds", desc: "Delay screenshot" },
      { flag: "-t format", desc: "Image format (png, jpg, pdf, tiff)" },
      { flag: "-w", desc: "Capture active window" },
      { flag: "-W", desc: "Capture window (interactive)" }
    ],
    examples: [
      { label: "Capture entire screen", code: "screencapture screenshot.png" },
      { label: "Interactive area selection", code: "screencapture -i screenshot.png" },
      { label: "Capture to clipboard", code: "screencapture -c" },
      { label: "Capture active window", code: "screencapture -w window.png" },
      { label: "Delayed capture", code: "screencapture -T 5 delayed.png" },
      { label: "Capture as JPEG", code: "screencapture -t jpg screenshot.jpg" }
    ],
    tip: "Cmd+Shift+3/4/5 are keyboard shortcuts for screenshots. screencapture is great for scripted captures.",
    related: ["open", "pbcopy"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS screencapture man page", url: "https://ss64.com/mac/screencapture.html" }
    ]
  },
  {
    name: "launchctl",
    syntax: "launchctl [command] [options]",
    desc: "Manage macOS launch daemons and services",
    category: "macos",
    difficulty: "advanced",
    flags: [
      { flag: "load path", desc: "Load a launch daemon/agent" },
      { flag: "unload path", desc: "Unload a launch daemon/agent" },
      { flag: "start label", desc: "Start a service" },
      { flag: "stop label", desc: "Stop a service" },
      { flag: "list", desc: "List all services" },
      { flag: "list label", desc: "List specific service" },
      { flag: "remove label", desc: "Remove service from launchd" },
      { flag: "print-disabled user", desc: "List disabled services" },
      { flag: "enable user/service", desc: "Enable a service" },
      { flag: "disable user/service", desc: "Disable a service" },
      { flag: "bootstrap domain target", desc: "Bootstrap service (modern)" },
      { flag: "bootout domain target", desc: "Bootout service (modern)" }
    ],
    examples: [
      { label: "List all services", code: "launchctl list" },
      { label: "Find specific service", code: "launchctl list | grep com.apple" },
      { label: "Load service", code: "launchctl load ~/Library/LaunchAgents/com.user.agent.plist" },
      { label: "Unload service", code: "launchctl unload ~/Library/LaunchAgents/com.user.agent.plist" },
      { label: "Stop service", code: "launchctl stop com.user.agent" },
      { label: "Start service", code: "launchctl start com.user.agent" },
      { label: "Remove service", code: "launchctl remove com.user.agent" }
    ],
    tip: "Modern macOS uses launchctl bootstrap/bootout instead of load/unload. Check which version your system uses.",
    related: ["defaults", "open"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS launchd man page", url: "https://man7.org/linux/man-pages/man8/launchd.8.html" },
      { label: "Apple LaunchDaemons Guide", url: "https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html" }
    ]
  },
  {
    name: "defaults",
    syntax: "defaults [command] [domain] [key] [value]",
    desc: "Read, write, and delete macOS user preferences (defaults system)",
    category: "macos",
    difficulty: "advanced",
    flags: [
      { flag: "read [domain] [key]", desc: "Read preferences" },
      { flag: "write domain key value", desc: "Write preference" },
      { flag: "delete domain [key]", desc: "Delete preference" },
      { flag: "domains", desc: "List all domains" },
      { flag: "find domain key", desc: "Find key in domain" },
      { flag: "help", desc: "Show help" }
    ],
    examples: [
      { label: "Read all preferences for domain", code: "defaults read com.apple.finder" },
      { label: "Read specific key", code: "defaults read com.apple.dock tilesize" },
      { label: "Write preference", code: "defaults write com.apple.finder AppleShowAllFiles -bool YES" },
      { label: "Delete preference", code: "defaults delete com.apple.dock tilesize" },
      { label: "List all domains", code: "defaults domains" },
      { label: "Search for key", code: "defaults find NSNavPanelExpandedSizeForSaveMode" },
      { label: "Apply changes", code: "killall Finder && killall Dock" }
    ],
    tip: "After changing defaults, some apps need to be restarted. killall Finder/Dock for system preferences.",
    related: ["launchctl", "open"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS defaults man page", url: "https://ss64.com/mac/defaults.html" },
      { label: "defaults write Cheatsheet", url: "https://macos-defaults.com/" }
    ]
  },
  {
    name: "mdls",
    syntax: "mdls [options] [file...]",
    desc: "Display the metadata attributes for a file (macOS Spotlight)",
    category: "macos",
    difficulty: "intermediate",
    flags: [
      { flag: "-name ATTR", desc: "List specific attribute" },
      { flag: "-raw", desc: "Raw output (no field names)" },
      { flag: "-plist ATTR", desc: "Output in plist format" },
      { flag: "-plist -", desc: "Output all attributes as plist to stdout" },
      { flag: "file", desc: "File to inspect" }
    ],
    examples: [
      { label: "Show all metadata", code: "mdls file.txt" },
      { label: "Show specific attribute", code: "mdls -name kMDItemDisplayName file.txt" },
      { label: "Show creation date", code: "mdls -name kMDItemContentCreationDate file.txt" },
      { label: "Show file type", code: "mdls -name kMDItemContentType file.txt" },
      { label: "Raw output", code: "mdls -raw -name kMDItemTextContent file.txt" },
      { label: "Show dimensions", code: "mdls -name kMDItemPixelWidth -name kMDItemPixelHeight image.png" }
    ],
    tip: "mdls uses Spotlight metadata. Useful for checking dates, dimensions, and content types. Use mdfind to search by metadata.",
    related: ["mdfind", "open"],
    platforms: ["macOS"],
    refs: [
      { label: "macOS mdls man page", url: "https://ss64.com/mac/mdls.html" },
      { label: "Spotlight Metadata Attributes", url: "https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utags/understand_utags_cover/understand_utags_cover.html" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // KEYBOARD SHORTCUTS (10)
  // ──────────────────────────────────────────────────────────
  {
    name: "Ctrl+C",
    syntax: "Ctrl+C",
    desc: "Send SIGINT to the current foreground process (interrupt)",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Stop running command", code: "Ctrl+C" },
      { label: "Cancel current input", code: "Ctrl+C" },
      { label: "Exit tail -f", code: "Ctrl+C" }
    ],
    tip: "Ctrl+C sends SIGINT (signal 2). If a process ignores SIGINT, use Ctrl+\\ (SIGQUIT) or kill -9.",
    related: ["Ctrl+Z", "Ctrl+D", "kill"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Signals", url: "https://www.gnu.org/software/bash/manual/bash.html#Signals" }
    ]
  },
  {
    name: "Ctrl+D",
    syntax: "Ctrl+D",
    desc: "Send EOF (End of File) — close stdin / exit shell",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Exit shell", code: "Ctrl+D" },
      { label: "Close stdin pipe", code: "Ctrl+D" },
      { label: "Exit SSH session", code: "Ctrl+D" }
    ],
    tip: "Ctrl+D sends EOF. On empty prompt, it exits the shell. In a pipe, it signals end of input.",
    related: ["Ctrl+C", "exit"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+Z",
    syntax: "Ctrl+Z",
    desc: "Suspend the current foreground process (send SIGTSTP)",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Suspend running process", code: "Ctrl+Z" },
      { label: "Then resume in background", code: "bg" },
      { label: "Resume in foreground", code: "fg" }
    ],
    tip: "Ctrl+Z suspends (pauses) a process. Use fg to bring it back or bg to continue in background.",
    related: ["Ctrl+C", "bg", "fg", "jobs"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Job Control", url: "https://www.gnu.org/software/bash/manual/bash.html#Job-Control" }
    ]
  },
  {
    name: "Ctrl+R",
    syntax: "Ctrl+R",
    desc: "Reverse incremental search through command history",
    category: "shortcuts",
    difficulty: "intermediate",
    flags: [],
    examples: [
      { label: "Search history interactively", code: "Ctrl+R" },
      { label: "Type to search, Enter to execute", code: "Ctrl+R then type 'git'" },
      { label: "Cycle through matches", code: "Ctrl+R repeatedly" }
    ],
    tip: "Start typing after Ctrl+R to search. Press Ctrl+R again to find next match. Enter to execute, Esc to edit.",
    related: ["history", "Ctrl+A", "Ctrl+E"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+A",
    syntax: "Ctrl+A",
    desc: "Move cursor to the beginning of the line",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Go to start of line", code: "Ctrl+A" },
      { label: "Go to start then select", code: "Ctrl+A then Shift+Right" }
    ],
    tip: "Ctrl+A jumps to the start of the line. Much faster than holding Left arrow.",
    related: ["Ctrl+E", "Ctrl+U", "Ctrl+K"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+E",
    syntax: "Ctrl+E",
    desc: "Move cursor to the end of the line",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Go to end of line", code: "Ctrl+E" },
      { label: "Go to end and edit", code: "Ctrl+E then Backspace" }
    ],
    tip: "Ctrl+E jumps to the end of the line. Complement to Ctrl+A.",
    related: ["Ctrl+A", "Ctrl+U", "Ctrl+K"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+U",
    syntax: "Ctrl+U",
    desc: "Cut text from cursor to beginning of line",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Delete entire line (before cursor)", code: "Ctrl+U" },
      { label: "Cut to start and paste after", code: "Ctrl+U then Ctrl+Y" },
      { label: "Clear current line completely", code: "Ctrl+U" }
    ],
    tip: "Ctrl+U cuts text before cursor. Ctrl+K cuts after cursor. Ctrl+Y pastes (yank).",
    related: ["Ctrl+K", "Ctrl+A", "Ctrl+Y"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+K",
    syntax: "Ctrl+K",
    desc: "Cut text from cursor to end of line",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Delete rest of line", code: "Ctrl+K" },
      { label: "Cut to end and paste elsewhere", code: "Ctrl+K then navigate then Ctrl+Y" }
    ],
    tip: "Ctrl+K cuts from cursor to end of line. Ctrl+U cuts from cursor to start.",
    related: ["Ctrl+U", "Ctrl+E", "Ctrl+Y"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Ctrl+W",
    syntax: "Ctrl+W",
    desc: "Delete the word before the cursor",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Delete previous word", code: "Ctrl+W" },
      { label: "Delete multiple words", code: "Ctrl+W Ctrl+W Ctrl+W" }
    ],
    tip: "Ctrl+W deletes the word to the left of the cursor. Very useful for quick corrections.",
    related: ["Ctrl+U", "Ctrl+K", "Ctrl+A"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Readline", url: "https://www.gnu.org/software/bash/manual/bash.html#Readline-Init-File-Format" }
    ]
  },
  {
    name: "Tab",
    syntax: "Tab",
    desc: "Autocomplete commands, file names, and arguments",
    category: "shortcuts",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Autocomplete command", code: "git ch<Tab>" },
      { label: "Autocomplete filename", code: "cat /etc/h<Tab>" },
      { label: "Show all matches", code: "Tab Tab" },
      { label: "Autocomplete path", code: "cd ~/Doc<Tab>" }
    ],
    tip: "Double-Tab shows all completions. Enable programmable completion with complete/compgen for better tab-completion.",
    related: ["Ctrl+R", "alias"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — Programmable Completion", url: "https://www.gnu.org/software/bash/manual/bash.html#Programmable-Completion" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // USEFUL COMBOS (8)
  // ──────────────────────────────────────────────────────────
  {
    name: "find + xargs batch delete",
    syntax: "find . -name '*.tmp' -print0 | xargs -0 rm",
    desc: "Batch delete files matching a pattern, handling spaces in filenames",
    category: "combos",
    difficulty: "intermediate",
    flags: [],
    examples: [
      { label: "Delete all .tmp files", code: "find . -name '*.tmp' -print0 | xargs -0 rm" },
      { label: "Delete empty directories", code: "find . -type d -empty -delete" },
      { label: "Delete old files", code: "find . -type f -mtime +30 -print0 | xargs -0 rm" }
    ],
    tip: "Always use -print0 with xargs -0 for filenames with spaces. The null delimiter is safe for all filenames.",
    related: ["find", "xargs", "rm"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Findutils Manual", url: "https://www.gnu.org/software/findutils/" }
    ]
  },
  {
    name: "grep + awk extract column",
    syntax: "grep 'pattern' file | awk '{print $2}'",
    desc: "Filter lines and extract a specific column",
    category: "combos",
    difficulty: "intermediate",
    flags: [],
    examples: [
      { label: "Extract IPs from access log", code: "cat access.log | awk '{print $1}' | sort -u" },
      { label: "Extract PIDs from ps", code: "ps aux | grep nginx | awk '{print $2}'" },
      { label: "Get port numbers", code: "netstat -tlnp | awk '{print $4}' | cut -d: -f2 | sort -n" }
    ],
    tip: "Combining grep and awk is one of the most common terminal patterns for text processing.",
    related: ["grep", "awk", "cut", "sort"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Awk Manual", url: "https://www.gnu.org/software/gawk/manual/gawk.html" }
    ]
  },
  {
    name: "tail + grep real-time monitor",
    syntax: "tail -f logfile | grep --line-buffered 'ERROR'",
    desc: "Monitor a log file in real-time, filtering for specific patterns",
    category: "combos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Monitor for errors", code: "tail -f /var/log/syslog | grep --line-buffered 'error'" },
      { label: "Monitor multiple patterns", code: "tail -f app.log | grep --line-buffered -E 'ERROR|WARN|CRIT'" },
      { label: "Monitor and count", code: "tail -f access.log | awk '{count[$9]++} END {for(c in count) print c, count[c]}'" },
      { label: "Colorize output", code: "tail -f app.log | grep --line-buffered --color=always 'ERROR'" }
    ],
    tip: "Use --line-buffered with grep in pipes to avoid delayed output. Without it, grep buffers line output.",
    related: ["tail", "grep", "awk"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Grep Manual", url: "https://www.gnu.org/software/grep/manual/grep.html" }
    ]
  },
  {
    name: "sort + uniq frequency count",
    syntax: "sort file | uniq -c | sort -rn",
    desc: "Count occurrences and sort by frequency (most common first)",
    category: "combos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Top 10 most frequent lines", code: "sort file.txt | uniq -c | sort -rn | head -10" },
      { label: "Top IP addresses in log", code: "awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -20" },
      { label: "Word frequency", code: "cat file.txt | tr ' ' '\\n' | sort | uniq -c | sort -rn | head -20" },
      { label: "Top error types", code: "grep 'error' app.log | sort | uniq -c | sort -rn" }
    ],
    tip: "The sort | uniq -c | sort -rn pipeline is the classic way to find frequency distributions in text.",
    related: ["sort", "uniq", "awk", "cut"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Coreutils — sort", url: "https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html" },
      { label: "GNU Coreutils — uniq", url: "https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html" }
    ]
  },
  {
    name: "du + sort largest dirs",
    syntax: "du -h --max-depth=1 | sort -rh | head -10",
    desc: "Find the largest directories in the current location",
    category: "combos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Top 10 largest directories", code: "du -h --max-depth=1 | sort -rh | head -10" },
      { label: "Largest files in directory", code: "find . -type f -exec ls -lh {} \\; | awk '{print $5, $9}' | sort -rh | head -10" },
      { label: "Disk usage summary", code: "du -sh /var/* 2>/dev/null | sort -rh | head -5" }
    ],
    tip: "du -h --max-depth=1 shows only top-level. Increase depth for more granularity.",
    related: ["du", "sort", "df"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Coreutils — du", url: "https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html" }
    ]
  },
  {
    name: "sed batch replace",
    syntax: "sed -i 's/old/new/g' *.txt",
    desc: "Replace text across multiple files at once",
    category: "combos",
    difficulty: "intermediate",
    flags: [],
    examples: [
      { label: "Replace in all .txt files", code: "sed -i 's/foo/bar/g' *.txt" },
      { label: "Remove blank lines from files", code: "sed -i '/^$/d' *.txt" },
      { label: "Add line after match", code: "sed -i '/^server/a\\    charset utf-8' nginx.conf" },
      { label: "macOS in-place replace", code: "sed -i '' 's/foo/bar/g' *.txt" }
    ],
    tip: "Always test without -i first. On macOS use -i '' (empty string), on Linux use just -i.",
    related: ["sed", "grep", "find"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "GNU Sed Manual", url: "https://www.gnu.org/software/sed/manual/sed.html" }
    ]
  },
  {
    name: "curl + jq JSON processing",
    syntax: "curl -s https://api.example.com/data | jq '.key'",
    desc: "Fetch JSON from an API and process it with jq",
    category: "combos",
    difficulty: "intermediate",
    flags: [],
    examples: [
      { label: "Fetch and pretty-print JSON", code: "curl -s https://api.github.com/users/octocat | jq '.'" },
      { label: "Extract specific field", code: "curl -s https://api.github.com/users/octocat | jq '.name'" },
      { label: "Extract array items", code: "curl -s https://api.github.com/repos/owner/repo/issues | jq '.[].title'" },
      { label: "Filter with condition", code: "curl -s https://api.github.com/repos/owner/repo/issues | jq '.[] | select(.state==\"open\") | .title'" }
    ],
    tip: "Install jq: brew install jq / apt install jq. It's the swiss army knife of JSON processing.",
    related: ["curl", "awk", "grep"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "jq Manual", url: "https://stedolan.github.io/jq/manual/" },
      { label: "jq Play (interactive)", url: "https://jqplay.org/" }
    ]
  },
  {
    name: "history + grep alias workflow",
    syntax: "history | grep 'git' | tail -20",
    desc: "Search command history for repeated tasks to create aliases",
    category: "combos",
    difficulty: "beginner",
    flags: [],
    examples: [
      { label: "Find common git commands", code: "history | grep 'git' | sort | uniq -c | sort -rn | head -10" },
      { label: "Find most used commands", code: "history | awk '{print $1}' | sort | uniq -c | sort -rn | head -20" },
      { label: "Find long commands to alias", code: "history | grep -E 'docker|kubectl' | sort | uniq -c | sort -rn | head -10" }
    ],
    tip: "Analyze your command history to find patterns worth aliasing. Create aliases for commands you type frequently.",
    related: ["history", "alias", "grep"],
    platforms: ["macOS", "Linux", "Bash", "Zsh"],
    refs: [
      { label: "Bash Manual — History", url: "https://www.gnu.org/software/bash/manual/bash.html#Bash-History-Builtins" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // PLATFORM NOTES (6)
  // ──────────────────────────────────────────────────────────
  {
    name: "apt",
    syntax: "apt [command] [package]",
    desc: "Advanced Package Tool — Debian/Ubuntu package manager",
    category: "platforms",
    difficulty: "beginner",
    flags: [
      { flag: "install", desc: "Install packages" },
      { flag: "remove", desc: "Remove packages" },
      { flag: "purge", desc: "Remove packages and config files" },
      { flag: "update", desc: "Update package lists" },
      { flag: "upgrade", desc: "Upgrade all packages" },
      { flag: "full-upgrade", desc: "Upgrade with dependency changes" },
      { flag: "autoremove", desc: "Remove unused dependencies" },
      { flag: "search", desc: "Search for packages" },
      { flag: "show", desc: "Show package info" },
      { flag: "list --installed", desc: "List installed packages" },
      { flag: "clean", desc: "Clean package cache" }
    ],
    examples: [
      { label: "Update package lists", code: "sudo apt update" },
      { label: "Install package", code: "sudo apt install nginx" },
      { label: "Remove package", code: "sudo apt remove nginx" },
      { label: "Upgrade all packages", code: "sudo apt upgrade" },
      { label: "Search for packages", code: "apt search python3" },
      { label: "Show package info", code: "apt show nginx" },
      { label: "List installed packages", code: "apt list --installed" },
      { label: "Autoremove unused", code: "sudo apt autoremove" }
    ],
    tip: "Always run apt update before apt upgrade. Use apt autoremove to clean up unused dependencies.",
    related: ["yum", "brew", "pacman", "snap", "flatpak"],
    platforms: ["Linux", "Debian", "Ubuntu"],
    refs: [
      { label: "APT Documentation", url: "https://help.ubuntu.com/community/AptGet/Howto" },
      { label: "Debian Wiki — Apt", url: "https://wiki.debian.org/Apt" }
    ]
  },
  {
    name: "yum",
    syntax: "yum [command] [package]",
    desc: "Yellowdog Updater Modified — RHEL/CentOS/Fedora package manager",
    category: "platforms",
    difficulty: "beginner",
    flags: [
      { flag: "install", desc: "Install packages" },
      { flag: "remove", desc: "Remove packages" },
      { flag: "update", desc: "Update all packages" },
      { flag: "search", desc: "Search for packages" },
      { flag: "info", desc: "Show package info" },
      { flag: "list", desc: "List packages" },
      { flag: "clean", desc: "Clean cache" },
      { flag: "groupinstall", desc: "Install package group" },
      { flag: "-y", desc: "Automatic yes to prompts" }
    ],
    examples: [
      { label: "Install package", code: "sudo yum install nginx" },
      { label: "Update all packages", code: "sudo yum update" },
      { label: "Search for packages", code: "yum search python3" },
      { label: "Show package info", code: "yum info nginx" },
      { label: "Remove package", code: "sudo yum remove nginx" },
      { label: "Install package group", code: "sudo yum groupinstall 'Development Tools'" },
      { label: "Clean cache", code: "sudo yum clean all" }
    ],
    tip: "Fedora uses dnf (dandified yum) as a modern replacement. Both work similarly. Use -y to skip prompts.",
    related: ["apt", "brew", "pacman"],
    platforms: ["Linux", "RHEL", "CentOS", "Fedora"],
    refs: [
      { label: "YUM Documentation", url: "https://yum.baseurl.org/" },
      { label: "Fedora — Using DNF", url: "https://dnf.readthedocs.io/" }
    ]
  },
  {
    name: "brew",
    syntax: "brew [command] [formula]",
    desc: "Homebrew — The Missing Package Manager for macOS (and Linux)",
    category: "platforms",
    difficulty: "beginner",
    flags: [
      { flag: "install", desc: "Install a formula or cask" },
      { flag: "uninstall", desc: "Uninstall a formula or cask" },
      { flag: "update", desc: "Update Homebrew and formulas" },
      { flag: "upgrade", desc: "Upgrade outdated packages" },
      { flag: "search", desc: "Search for packages" },
      { flag: "info", desc: "Show package info" },
      { flag: "list", desc: "List installed packages" },
      { flag: "outdated", desc: "Show outdated packages" },
      { flag: "doctor", desc: "Check system for issues" },
      { flag: "cleanup", desc: "Clean old versions and cache" },
      { flag: "services", desc: "Manage background services" },
      { flag: "cask", desc: "Install macOS GUI applications" }
    ],
    examples: [
      { label: "Install command-line tool", code: "brew install ripgrep" },
      { label: "Install GUI app", code: "brew install --cask firefox" },
      { label: "Update Homebrew", code: "brew update" },
      { label: "Upgrade all packages", code: "brew upgrade" },
      { label: "Search for packages", code: "brew search python" },
      { label: "Show package info", code: "brew info node" },
      { label: "List installed", code: "brew list" },
      { label: "Check for issues", code: "brew doctor" },
      { label: "Start a service", code: "brew services start postgresql" },
      { label: "Clean up", code: "brew cleanup" }
    ],
    tip: "Use brew install for CLI tools, brew install --cask for GUI apps. Run brew update && brew upgrade regularly.",
    related: ["apt", "yum", "pacman"],
    platforms: ["macOS", "Linux"],
    refs: [
      { label: "Homebrew Documentation", url: "https://docs.brew.sh/" },
      { label: "Homebrew Formulae", url: "https://formulae.brew.sh/" },
      { label: "Homebrew GitHub", url: "https://github.com/Homebrew/brew" }
    ]
  },
  {
    name: "pacman",
    syntax: "pacman [options] [package]",
    desc: "Package manager for Arch Linux and derivatives",
    category: "platforms",
    difficulty: "intermediate",
    flags: [
      { flag: "-S, --sync", desc: "Synchronize packages" },
      { flag: "-R, --remove", desc: "Remove packages" },
      { flag: "-Rs", desc: "Remove with unused dependencies" },
      { flag: "-Syu", desc: "Full system upgrade" },
      { flag: "-Ss, --search", desc: "Search remote packages" },
      { flag: "-Si, --info", desc: "Show package info (remote)" },
      { flag: "-Qi", desc: "Show package info (local)" },
      { flag: "-Q, --query", desc: "Query local packages" },
      { flag: "-Qe", desc: "List explicitly installed packages" },
      { flag: "-Sc", desc: "Clean package cache" },
      { flag: "-Scc", desc: "Clean all package cache" },
      { flag: "-Ss", desc: "Search for packages" },
      { flag: "-Y, --refresh", desc: "Refresh package database" }
    ],
    examples: [
      { label: "Install package", code: "sudo pacman -S neovim" },
      { label: "Full system upgrade", code: "sudo pacman -Syu" },
      { label: "Remove package", code: "sudo pacman -R firefox" },
      { label: "Remove with deps", code: "sudo pacman -Rs firefox" },
      { label: "Search packages", code: "pacman -Ss python" },
      { label: "Show package info", code: "pacman -Si neovim" },
      { label: "List installed", code: "pacman -Q" },
      { label: "List explicitly installed", code: "pacman -Qe" },
      { label: "Clean cache", code: "sudo pacman -Sc" }
    ],
    tip: "Always use -Syu for system upgrades. Use -Rs to remove packages with their unneeded dependencies.",
    related: ["apt", "yum", "brew"],
    platforms: ["Linux", "Arch", "Manjaro", "EndeavourOS"],
    refs: [
      { label: "Arch Wiki — Pacman", url: "https://wiki.archlinux.org/title/pacman" },
      { label: "Pacman Manual", url: "https://man.archlinux.org/man/pacman.8" }
    ]
  },
  {
    name: "snap",
    syntax: "snap [command] [package]",
    desc: "Universal package manager (Snaps) — works across Linux distributions",
    category: "platforms",
    difficulty: "beginner",
    flags: [
      { flag: "install", desc: "Install a snap" },
      { flag: "remove", desc: "Remove a snap" },
      { flag: "list", desc: "List installed snaps" },
      { flag: "refresh", desc: "Refresh all snaps" },
      { flag: "find", desc: "Search for snaps" },
      { flag: "info", desc: "Show snap info" },
      { flag: "enable", desc: "Enable a disabled snap" },
      { flag: "disable", desc: "Disable a snap" }
    ],
    examples: [
      { label: "Install snap", code: "sudo snap install code --classic" },
      { label: "Remove snap", code: "sudo snap remove code" },
      { label: "List installed snaps", code: "snap list" },
      { label: "Search for snaps", code: "snap find discord" },
      { label: "Show snap info", code: "snap info code" },
      { label: "Refresh all snaps", code: "sudo snap refresh" }
    ],
    tip: "Use --classic flag for snaps that need full system access. Snaps are sandboxed by default.",
    related: ["apt", "flatpak", "brew"],
    platforms: ["Linux", "Ubuntu", "Fedora", "Arch"],
    refs: [
      { label: "Snapcraft Documentation", url: "https://snapcraft.io/docs" },
      { label: "Snap Store", url: "https://snapcraft.io/store" }
    ]
  },
  {
    name: "flatpak",
    syntax: "flatpak [command] [ref]",
    desc: "Universal package manager for Linux desktops (sandboxed apps)",
    category: "platforms",
    difficulty: "beginner",
    flags: [
      { flag: "install", desc: "Install a flatpak" },
      { flag: "uninstall", desc: "Uninstall a flatpak" },
      { flag: "list", desc: "List installed flatpaks" },
      { flag: "search", desc: "Search for flatpaks" },
      { flag: "remote-add", desc: "Add a remote repository" },
      { flag: "remote-delete", desc: "Remove a remote repository" },
      { flag: "update", desc: "Update flatpaks" },
      { flag: "run", desc: "Run a flatpak" },
      { flag: "info", desc: "Show flatpak info" }
    ],
    examples: [
      { label: "Install flatpak", code: "flatpak install flathub org.mozilla.firefox" },
      { label: "Uninstall flatpak", code: "flatpak uninstall org.mozilla.firefox" },
      { label: "List installed", code: "flatpak list" },
      { label: "Search for apps", code: "flatpak search discord" },
      { label: "Run flatpak", code: "flatpak run org.mozilla.firefox" },
      { label: "Update all", code: "flatpak update" },
      { label: "Add Flathub remote", code: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo" }
    ],
    tip: "Flathub is the main flatpak repository. Flatpaks are fully sandboxed and work across most Linux distros.",
    related: ["snap", "apt", "brew"],
    platforms: ["Linux", "Fedora", "Ubuntu", "Arch"],
    refs: [
      { label: "Flatpak Documentation", url: "https://docs.flatpak.org/" },
      { label: "Flathub", url: "https://flathub.org/" }
    ]
  }
];

// ──────────────────────────────────────────────────────────
// GLOSSARY
// ──────────────────────────────────────────────────────────
const glossary = [
  { term: "PATH", desc: "Environment variable listing directories to search for executables" },
  { term: "STDIN", desc: "Standard input stream (file descriptor 0)" },
  { term: "STDOUT", desc: "Standard output stream (file descriptor 1)" },
  { term: "STDERR", desc: "Standard error stream (file descriptor 2)" },
  { term: "Pipe", desc: "Mechanism to pass output of one command as input to another using |" },
  { term: "Signal", desc: "Software interrupt sent to a process (e.g., SIGTERM, SIGKILL)" },
  { term: "Process", desc: "A running instance of a program" },
  { term: "TTY", desc: "Teletypewriter — terminal device for I/O" },
  { term: "Shell", desc: "Command-line interpreter (bash, zsh, fish, etc.)" },
  { term: "Environment Variable", desc: "Dynamic named value that affects process behavior" },
  { term: "Daemon", desc: "Background process that runs without user interaction" },
  { term: "Symlink", desc: "Symbolic link — a file that points to another file" },
  { term: "Glob Pattern", desc: "Wildcard pattern for filename expansion (*, ?, [])" },
  { term: "Here Document", desc: "Multi-line string literal passed as input (<<EOF)" },
  { term: "Exit Code", desc: "Integer returned by a command indicating success (0) or failure (non-zero)" }
];

// ──────────────────────────────────────────────────────────
// STATE & STORAGE
// ──────────────────────────────────────────────────────────
const STORAGE_KEYS = {
  PROGRESS: "ael-terminal-progress",
  FAVORITES: "ael-terminal-favorites"
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(data));
}

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [];
  } catch { return []; }
}

function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(data));
}

// ──────────────────────────────────────────────────────────
// SEARCH WITH RANKING
// ──────────────────────────────────────────────────────────
function searchCommands(query) {
  if (!query || query.trim() === "") return commands;
  const q = query.toLowerCase().trim();
  const scored = commands.map(cmd => {
    let score = 0;
    if (cmd.name.toLowerCase().includes(q)) score += 100;
    if (cmd.syntax.toLowerCase().includes(q)) score += 90;
    if (cmd.flags && cmd.flags.some(f => f.flag.toLowerCase().includes(q))) score += 80;
    if (cmd.related && cmd.related.some(r => r.toLowerCase().includes(q))) score += 60;
    if (cmd.desc.toLowerCase().includes(q)) score += 40;
    if (cmd.examples && cmd.examples.some(e => e.code.toLowerCase().includes(q) || e.label.toLowerCase().includes(q))) score += 30;
    if (cmd.platforms && cmd.platforms.some(p => p.toLowerCase().includes(q))) score += 20;
    return { cmd, score };
  });
  return scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).map(s => s.cmd);
}

// ──────────────────────────────────────────────────────────
// RENDERING
// ──────────────────────────────────────────────────────────
function getCategoryById(id) {
  return categories.find(c => c.id === id) || { name: "Unknown", icon: "❓", color: "#666" };
}

function getDifficultyColor(diff) {
  switch (diff) {
    case "beginner": return "#00FF88";
    case "intermediate": return "#FFD700";
    case "advanced": return "#FF4D8D";
    default: return "#94A3B8";
  }
}

function getProgressSymbol(progress) {
  switch (progress) {
    case "learning": return "◐";
    case "mastered": return "●";
    default: return "○";
  }
}

function getProgressClass(progress) {
  switch (progress) {
    case "learning": return "progress-learning";
    case "mastered": return "progress-mastered";
    default: return "progress-unread";
  }
}

function renderCategories(filteredCommands) {
  const container = document.getElementById("commands-container");
  if (!container) return;

  const grouped = {};
  filteredCommands.forEach(cmd => {
    if (!grouped[cmd.category]) grouped[cmd.category] = [];
    grouped[cmd.category].push(cmd);
  });

  let html = "";
  categories.forEach(cat => {
    const cmds = grouped[cat.id];
    if (!cmds || cmds.length === 0) return;

    html += `<section class="category-section" id="cat-${cat.id}">`;
    html += `<h2 class="category-title" style="color: ${cat.color}; border-left: 4px solid ${cat.color}; padding-left: 12px;">`;
    html += `${cat.icon} ${cat.name} <span class="command-count">(${cmds.length})</span></h2>`;
    html += `<div class="commands-grid">`;

    cmds.forEach(cmd => {
      const progress = loadProgress();
      const favorites = loadFavorites();
      const currentProgress = progress[cmd.name] || "unread";
      const isFav = favorites.includes(cmd.name);

      html += `<div class="cmd-card" id="cmd-${cmd.name}" data-category="${cmd.category}">`;

      // Header
      html += `<div class="cmd-card-header" onclick="toggleCard(this)">`;
      html += `<div class="cmd-header-left">`;
      html += `<span class="cmd-name">${cmd.name}</span>`;
      html += `<span class="difficulty-badge" style="background: ${getDifficultyColor(cmd.difficulty)}">${cmd.difficulty}</span>`;
      if (cmd.platforms) {
        cmd.platforms.slice(0, 3).forEach(p => {
          html += `<span class="platform-badge">${p}</span>`;
        });
        if (cmd.platforms.length > 3) {
          html += `<span class="platform-badge more-badge">+${cmd.platforms.length - 3}</span>`;
        }
      }
      html += `</div>`;
      html += `<div class="cmd-header-right">`;
      html += `<button class="progress-btn ${getProgressClass(currentProgress)}" onclick="event.stopPropagation(); toggleProgress('${cmd.name}')" title="Progress: ${currentProgress}">${getProgressSymbol(currentProgress)}</button>`;
      html += `<button class="fav-btn ${isFav ? 'fav-active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${cmd.name}')" title="Favorite">${isFav ? '★' : '☆'}</button>`;
      html += `</div>`;
      html += `</div>`;

      // Body (collapsed by default)
      html += `<div class="cmd-card-body">`;

      // Syntax
      html += `<div class="cmd-syntax"><code>${cmd.syntax}</code></div>`;

      // Description
      html += `<p class="cmd-desc">${cmd.desc}</p>`;

      // Flags
      if (cmd.flags && cmd.flags.length > 0) {
        html += `<div class="cmd-section">`;
        html += `<h4 class="section-label">Flags</h4>`;
        html += `<div class="flags-table">`;
        cmd.flags.forEach(f => {
          html += `<div class="flag-row"><code class="flag-name">${f.flag}</code> <span class="flag-desc">${f.desc}</span></div>`;
        });
        html += `</div></div>`;
      }

      // Examples
      if (cmd.examples && cmd.examples.length > 0) {
        html += `<div class="cmd-section">`;
        html += `<h4 class="section-label">Examples</h4>`;
        cmd.examples.forEach(ex => {
          html += `<div class="example-block">`;
          html += `<div class="example-label">${ex.label}</div>`;
          html += `<div class="example-code"><code>${ex.code}</code>`;
          html += ` <button class="copy-btn" onclick="copyCode(this)" title="Copy">📋</button></div>`;
          html += `</div>`;
        });
        html += `</div>`;
      }

      // Tip
      if (cmd.tip) {
        html += `<div class="cmd-tip"><strong>💡 Tip:</strong> ${cmd.tip}</div>`;
      }

      // Related
      if (cmd.related && cmd.related.length > 0) {
        html += `<div class="cmd-section">`;
        html += `<h4 class="section-label">Related</h4>`;
        html += `<div class="related-list">`;
        cmd.related.forEach(r => {
          html += `<a href="#cmd-${r}" class="related-link">${r}</a> `;
        });
        html += `</div></div>`;
      }

      // References
      if (cmd.refs && cmd.refs.length > 0) {
        html += `<div class="cmd-section">`;
        html += `<h4 class="section-label">References</h4>`;
        html += `<div class="refs-list">`;
        cmd.refs.forEach(ref => {
          html += `<a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="ref-link">${ref.label} ↗</a> `;
        });
        html += `</div></div>`;
      }

      html += `</div>`; // end body
      html += `</div>`; // end card
    });

    html += `</div></section>`;
  });

  container.innerHTML = html;
}

// ──────────────────────────────────────────────────────────
// EXPAND / COLLAPSE
// ──────────────────────────────────────────────────────────
function toggleCard(header) {
  const card = header.closest(".cmd-card");
  card.classList.toggle("expanded");
}

// ──────────────────────────────────────────────────────────
// PROGRESS TRACKING
// ──────────────────────────────────────────────────────────
function toggleProgress(cmdName) {
  const progress = loadProgress();
  const current = progress[cmdName] || "unread";
  let next;
  switch (current) {
    case "unread": next = "learning"; break;
    case "learning": next = "mastered"; break;
    case "mastered": next = "unread"; break;
    default: next = "unread";
  }
  progress[cmdName] = next;
  saveProgress(progress);

  const card = document.getElementById(`cmd-${cmdName}`);
  if (card) {
    const btn = card.querySelector(".progress-btn");
    if (btn) {
      btn.className = `progress-btn ${getProgressClass(next)}`;
      btn.textContent = getProgressSymbol(next);
      btn.title = `Progress: ${next}`;
    }
  }

  updateProgressStats();
}

function updateProgressStats() {
  const progress = loadProgress();
  const total = commands.length;
  let mastered = 0, learning = 0, unread = 0;
  commands.forEach(cmd => {
    const p = progress[cmd.name] || "unread";
    if (p === "mastered") mastered++;
    else if (p === "learning") learning++;
    else unread++;
  });

  const statsEl = document.getElementById("progress-stats");
  if (statsEl) {
    const pct = Math.round(((mastered + learning * 0.5) / total) * 100);
    statsEl.innerHTML = `Progress: <span style="color:#00FF88">● ${mastered}</span> mastered, <span style="color:#FFD700">◐ ${learning}</span> learning, <span style="color:#94A3B8">○ ${unread}</span> unread — ${pct}% complete`;
  }

  const barEl = document.getElementById("progress-bar-fill");
  if (barEl) {
    const pct = Math.round(((mastered + learning * 0.5) / total) * 100);
    barEl.style.width = pct + "%";
  }
}

// ──────────────────────────────────────────────────────────
// FAVORITES
// ──────────────────────────────────────────────────────────
function toggleFavorite(cmdName) {
  const favorites = loadFavorites();
  const idx = favorites.indexOf(cmdName);
  if (idx >= 0) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(cmdName);
  }
  saveFavorites(favorites);

  const card = document.getElementById(`cmd-${cmdName}`);
  if (card) {
    const btn = card.querySelector(".fav-btn");
    if (btn) {
      const isFav = favorites.includes(cmdName);
      btn.className = `fav-btn ${isFav ? 'fav-active' : ''}`;
      btn.textContent = isFav ? '★' : '☆';
    }
  }

  updateFavCount();
}

function updateFavCount() {
  const favorites = loadFavorites();
  const favBtn = document.getElementById("favorites-toggle");
  if (favBtn) {
    favBtn.textContent = `★ Favorites (${favorites.length})`;
    favBtn.classList.toggle("fav-filter-active", favBtn.dataset.active === "true");
  }
}

function toggleFavoritesFilter() {
  const btn = document.getElementById("favorites-toggle");
  if (!btn) return;

  const isActive = btn.dataset.active === "true";
  btn.dataset.active = isActive ? "false" : "true";
  btn.classList.toggle("fav-filter-active", !isActive);

  performSearch();
}

// ──────────────────────────────────────────────────────────
// SEARCH
// ──────────────────────────────────────────────────────────
function performSearch() {
  const input = document.getElementById("search-input");
  const countEl = document.getElementById("result-count");
  const favBtn = document.getElementById("favorites-toggle");
  const query = input ? input.value : "";

  let results = searchCommands(query);

  // Apply favorites filter
  if (favBtn && favBtn.dataset.active === "true") {
    const favorites = loadFavorites();
    results = results.filter(cmd => favorites.includes(cmd.name));
  }

  renderCategories(results);

  if (countEl) {
    countEl.textContent = `${results.length} command${results.length !== 1 ? 's' : ''}`;
  }
}

// ──────────────────────────────────────────────────────────
// COPY
// ──────────────────────────────────────────────────────────
function copyCode(btn) {
  const codeEl = btn.closest(".example-code").querySelector("code");
  if (codeEl) {
    const text = codeEl.textContent;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "✅";
      setTimeout(() => { btn.textContent = "📋"; }, 1500);
    }).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      btn.textContent = "✅";
      setTimeout(() => { btn.textContent = "📋"; }, 1500);
    });
  }
}

// ──────────────────────────────────────────────────────────
// EXPORT FUNCTIONS
// ──────────────────────────────────────────────────────────
function exportPDF() {
  window.print();
}

function exportMarkdown() {
  var NL = "\n";
  var BT = "`";
  var md = "# AEL Terminal Engineering Reference 2026" + NL + NL;
  categories.forEach(function(cat) {
    var cmds = commands.filter(function(c) { return c.category === cat.id; });
    if (cmds.length === 0) return;
    md += "## " + cat.icon + " " + cat.name + NL + NL;
    cmds.forEach(function(cmd) {
      md += "### " + cmd.name + NL + NL;
      md += "**Syntax:** " + BT + cmd.syntax + BT + NL + NL;
      md += "**Description:** " + cmd.desc + NL + NL;
      md += "**Difficulty:** " + cmd.difficulty + NL + NL;
      md += "**Platforms:** " + (cmd.platforms ? cmd.platforms.join(", ") : "N/A") + NL + NL;
      if (cmd.flags && cmd.flags.length > 0) {
        md += "**Flags:**" + NL + NL;
        cmd.flags.forEach(function(f) {
          md += "- " + BT + f.flag + BT + " — " + f.desc + NL;
        });
        md += NL;
      }
      if (cmd.examples && cmd.examples.length > 0) {
        md += "**Examples:**" + NL + NL;
        cmd.examples.forEach(function(ex) {
          md += "- **" + ex.label + ":** " + BT + ex.code + BT + NL;
        });
        md += NL;
      }
      if (cmd.tip) {
        md += "**Tip:** " + cmd.tip + NL + NL;
      }
      if (cmd.related && cmd.related.length > 0) {
        md += "**Related:** " + cmd.related.join(", ") + NL + NL;
      }
      if (cmd.refs && cmd.refs.length > 0) {
        md += "**References:**" + NL + NL;
        cmd.refs.forEach(function(ref) {
          md += "- [" + ref.label + "](" + ref.url + ")" + NL;
        });
        md += NL;
      }
      md += "---" + NL + NL;
    });
  });

  var blob = new Blob([md], { type: "text/markdown" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "ael-terminal-reference-2026.md";
  a.click();
  URL.revokeObjectURL(url);
}

function exportJSON() {
  const json = JSON.stringify({ categories, commands, glossary }, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ael-terminal-reference-2026.json";
  a.click();
  URL.revokeObjectURL(url);
}

// ──────────────────────────────────────────────────────────
// SCROLL SPY
// ──────────────────────────────────────────────────────────
function setupScrollSpy() {
  const sections = document.querySelectorAll(".category-section");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  sections.forEach(section => observer.observe(section));
}

// ──────────────────────────────────────────────────────────
// BACK TO TOP
// ──────────────────────────────────────────────────────────
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ──────────────────────────────────────────────────────────
// PROGRESS BAR
// ──────────────────────────────────────────────────────────
function setupProgressBar() {
  window.addEventListener("scroll", () => {
    const bar = document.getElementById("progress-bar-fill");
    if (!bar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  });
}

// ──────────────────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ──────────────────────────────────────────────────────────
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
      const active = document.activeElement;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) return;
      e.preventDefault();
      const input = document.getElementById("search-input");
      if (input) input.focus();
    }

    if (e.key === "Escape") {
      const input = document.getElementById("search-input");
      if (input && document.activeElement === input) {
        input.value = "";
        input.blur();
        performSearch();
      }
    }
  });
}

// ──────────────────────────────────────────────────────────
// GLOSSARY RENDERING
// ──────────────────────────────────────────────────────────
function renderGlossary() {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  let html = "";
  glossary.forEach(item => {
    html += `<div class="glossary-item">`;
    html += `<span class="glossary-term">${item.term}</span>`;
    html += `<span class="glossary-desc">${item.desc}</span>`;
    html += `</div>`;
  });
  container.innerHTML = html;
}

// ──────────────────────────────────────────────────────────
// INITIALIZE
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(commands);
  renderGlossary();
  updateProgressStats();
  updateFavCount();
  setupScrollSpy();
  setupBackToTop();
  setupProgressBar();
  setupKeyboardShortcuts();

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", performSearch);
  }
});
