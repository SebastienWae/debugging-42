---
sidebar_position: 2
---

# Valgrind

Even though Valgrind is mostly used to find memory leaks, it can do a lot more. It is a made of multiple tools[^1] that can help you find various types of errors in your code.

It works by running your program on a synthetic CPU and dynamically re-compiling it. You do not need to change or re-compile your program to make it compatible, but it comes at the cost of slowing its execution by a factor or 5 to 100.

## macOS

Valgrind is currently [only supporting macOS up to High Sierra](https://valgrind.org/docs/manual/dist.news.html) (10.12). Fortunately there is a fork that works with macOS Catalina (10.15).

https://github.com/LouisBrunner/valgrind-macos

To install it, the easiest way is through Homebrew:

```shell
$ brew tap LouisBrunner/valgrind
$ brew install --HEAD LouisBrunner/valgrind/valgrind
```

Be careful that [not all features are working](https://github.com/LouisBrunner/valgrind-macos#status).

## MemCheck

MemCheck is Valgrind default tool. It’s often only used to check memory leaks, but it can detect a lot of different type of memory error such as:
- Out-of-bounds accesses to heap
- Use-after-free
- Using undefined values

To not miss any leak or error and get more information is I suggest you to always run MemCheck with the flags:
```shell
--leak-check=full --show-leak-kinds=all -s
```

The error messages can be cryptic at first, but the documentation goes through [several examples](https://valgrind.org/docs/manual/mc-manual.html#mc-manual.errormsgs). Use them as a reference until you are familiar with them.

### Example

```c
// leaks.c
#include <stdlib.h>

void f(void) {
  int* x = malloc(10 * sizeof(int));
  x[10] = 0;
}

int main(void) {
  f();
  return 0;
}
```

```shell
$ clang -g leaks.c -o leaks
$ valgrind --leak-check=full --show-leak-kinds=all ./leaks
==40468== Memcheck, a memory error detector
==40468== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.
==40468== Using Valgrind-3.19.0 and LibVEX; rerun with -h for copyright info
==40468== Command: ./leaks
==40468==
==40468== Invalid write of size 4
==40468==    at 0x10915A: f (main.c:5)
==40468==    by 0x109183: main (main.c:9)
==40468==  Address 0x4a8e068 is 0 bytes after a block of size 40 alloc'd
==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==40468==    by 0x109151: f (main.c:4)
==40468==    by 0x109183: main (main.c:9)
==40468==
==40468==
==40468== HEAP SUMMARY:
==40468==     in use at exit: 40 bytes in 1 blocks
==40468==   total heap usage: 1 allocs, 0 frees, 40 bytes allocated
==40468==
==40468== 40 bytes in 1 blocks are definitely lost in loss record 1 of 1
==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==40468==    by 0x109151: f (main.c:4)
==40468==    by 0x109183: main (main.c:9)
==40468==
==40468== LEAK SUMMARY:
==40468==    definitely lost: 40 bytes in 1 blocks
==40468==    indirectly lost: 0 bytes in 0 blocks
==40468==      possibly lost: 0 bytes in 0 blocks
==40468==    still reachable: 0 bytes in 0 blocks
==40468==         suppressed: 0 bytes in 0 blocks
==40468==
==40468== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)
==40468==
==40468== 1 errors in context 1 of 2:
==40468== Invalid write of size 4
==40468==    at 0x10915A: f (main.c:5)
==40468==    by 0x109183: main (main.c:9)
==40468==  Address 0x4a8e068 is 0 bytes after a block of size 40 alloc'd
==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==40468==    by 0x109151: f (main.c:4)
==40468==    by 0x109183: main (main.c:9)
==40468==
==40468== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)
```

## Resources

- https://valgrind.org
- https://valgrind.org/docs/manual/manual.html
