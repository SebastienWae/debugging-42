---
sidebar_position: 1
---

# Clang Static Analyzer

:::caution
Static analyzer are not magic, they will not catch all errors and can report false positives.
:::

[Clang Static Analyzer](https://clang-analyzer.llvm.org/) can help you find issues such as:
- Uninitialized arguments
- Division by zero
- Null function pointer
- Dereferences of null pointers

On top of the default checker, you can also toggle some experimental checkers that can help find your more bugs. For a list of all options refer to the [Clang manual](https://clang.llvm.org/docs/analyzer/checkers.html).

You can use Clang static analyzer directly through Clang, but the more ergonomic way is with tools such as [Scan-Build](https://clang-analyzer.llvm.org/scan-build.html) or [CodeChecker](https://codechecker.readthedocs.io/en/latest/).

## Scan-Build

Scan-Build is the old but also simplest way to use Clang Static Analyzer, no installation needed as it's part of the LLVM project.


### Scanning files

It works by replacing the `CC` of `CXX` variable in your build system. No need to change your Makefile, you only need to pass your build command as an argument:

```shell
$ scan-build make
```

For a smaller project, you can also pass your compilation command:

```shell
$ scan-build gcc -c my_code.c
 ```

### Viewing the results

The terminal output of `scan-build` is quite sparse, but you can generate HTML files that give you more information. 

By default, the files are saved in the `/tmp` directory and can be opened with the `scan-view` command. You can also choose a different directory with the `-o` flag or automatically open the HTML files with the `-V` flag.

### Example

```c
// bad_code.c
#include <stdlib.h>

struct link { struct link *next; };

void free_a_list_badly(struct link *n)
{
  while (n) {
    free(n);
    n = n->next;
  }
}
```

```shell
$ scan-build clang -c bad_code.c
scan-build: Using '/usr/bin/clang-13' for static analysis
bad_code.c:9:9: warning: Use of memory after it is freed [unix.Malloc]
    n = n->next;
        ^~~~~~~
1 warning generated.
scan-build: Analysis run complete.
scan-build: 1 bug found.
scan-build: Run 'scan-view /tmp/scan-build-2022-06-19-123309-28897-1' to examine bug reports.
```

<Iframe url="/reports/scan-build.html" />

## CodeChecker

CodeChecker is the more modern way to interact with Clang Static Analyzer. It has more features, a better interface and can even work with multiple languages (such as Java, Python, JS).

It’s a very complex tool, so we will only cover the basis. For more information, you can read their [documentation](https://codechecker.readthedocs.io).

### Instalation

On 42's computers, the easiest way to install CodeChecker is with `pip`:

```shell
$ pip3 install --user codechecker
```

It can also be built from source: https://codechecker.readthedocs.io/en/latest/install_macosx/

### Compilation database

Before being able to use CodeChecker you need to create a compilation database. It’s a JSON file that lists all the required commands to build your project.

Build tools like CMake can auto-generate it, but for Makefiles you will need an extra utility.

I recommend using [Bear](https://github.com/rizsotto/Bear). It can be installed with Homebrew and is very easy to use.

```shell
$ brew install bear
$ bear -- make
```

CodeChecker has a built-in tool to do it too, but it can output inaccurate results.

```shell
$ CodeChecker log --build "make" --output ./compile_commands.json
```

### Analyze

CodeChecker offers a lot of customization regarding the analyses available. We won’t go in details into them here but they have a very detailed [documentation](https://codechecker.readthedocs.io) if you are interested.

Once your compilation database is ready, and every time you want to check your code, you will have to analyze it first.

```shell
$ CodeChecker analyze --ctu ./compile_commands.json --output ./reports
```
#### Cross Translation Unit Analysis

The `--ctu` flag enable Cross Translation Unit (CTU) Analysis, which is not available with Scan-Build.

In simple terms, it will allow error checking for code that is not written in the same file.

For example, without CTU, it would not catch the division by zero in the following example:
```c
// foo.c
int bar();

int foo() {
  return 3 / bar();
}
```

```c
// bar.c
int bar() {
  return 0;
}
```

### Parse

Now that your code has been analyzed, you can output the results into different format. By default it will print in your terminal.

```shell
$ CodeChecker parse ./reports
Found no defects in foo.c
Found no defects in ctu.c
[HIGH] /home/seb/tmp/ex/ctu.c:5:12: Division by zero [core.DivideZero]
  return 3 / foo();
           ^

Found 1 defect(s) in ctu.c


----==== Severity Statistics ====----
----------------------------
Severity | Number of reports
----------------------------
HIGH     |                 1
----------------------------
----=================----

----==== Checker Statistics ====----
----------------------------------------------
Checker name    | Severity | Number of reports
----------------------------------------------
core.DivideZero | HIGH     |                 1
----------------------------------------------
----=================----

----==== File Statistics ====----
-----------------------------
File name | Number of reports
-----------------------------
ctu.c     |                 1
-----------------------------
----=================----

----======== Summary ========----
---------------------------------------------
Number of processed analyzer result files | 4
Number of analyzer reports                | 1
---------------------------------------------
----=================----
```

You can also make it create HTML files for better readability.

```shell
$ CodeChecker parse --export html --output ./reports_html ./reports
```

<Iframe url="/reports/codechecker/index.html" />

Other output formats are available, as well as the possibility to save the reports in a database but we will not cover them here.

### Visual Studio Code

CodeChecker also has an extension for Visual Studio Code, it will automatically scan the file you are editing and highlight the error it founds.

The detailed reports are shown in the sidebar.

https://marketplace.visualstudio.com/items?itemName=codechecker.vscode-codechecker

![img](https://github.com/Ericsson/CodeCheckerVSCodePlugin/raw/HEAD/media/codechecker-splash.png)

## Resources

- https://clang.llvm.org/docs/ClangStaticAnalyzer.html
- https://clang-analyzer.llvm.org
- https://clang-analyzer.llvm.org/scan-build.html
