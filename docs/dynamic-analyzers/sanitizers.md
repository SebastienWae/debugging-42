---
sidebar_position: 1
---

# Sanitizers

:::info
Besides UndefinedBehaviorSanitizer, multiple sanitizers cannot be used at the same time.
:::

Sanitizers is a Google project that is part of both Clang and GCC. It encompasses multiple tools that can help you detect and fix hard to find bugs.

It works by adding extra instructions at compile time and a runtime library. It will require you to re-compile your project, but [it can find more bugs](https://llvm.org/devmtg/2011-11/Serebryany_FindingRacesMemoryErrors.pdf) than tools such as Valgrind and has a lower performance impact on your program.

More sanitizers, such as [MemorySanitizer](https://clang.llvm.org/docs/MemorySanitizer.html), are available but not covered here as they are not macOS compatible.

## AddressSanitizer

AddressSanitizer can detect various memory errors, such as:
- Out-of-bounds accesses to heap, stack and global
- Use-after-free
- Use-after-scope
- Double-free, invalid free

You can enable it with the `-fsanitize=address` flag.

It is also recommended to add the `-fno-omit-frame-pointer` and `-fno-optimize-sibling-calls` flags to get more detailed stack traces.

### Example

<Godbolt url="https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:'%23include+%3Cstdio.h%3E%0A%23include+%3Cstdlib.h%3E%0A%23include+%3Cstring.h%3E%0A%0Aint+main(int+argc,+const+char+*argv%5B%5D)+%7B%0A++++char+*s+%3D+malloc(100)%3B%0A++++free(s)%3B%0A++++strcpy(s,+%22Hello+world!!%22)%3B%0A++++printf(%22string+is:+%25s%5Cn%22,+s)%3B%0A++++return+0%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg121,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-g+-fsanitize%3Daddress+-fno-omit-frame-pointer+-fno-optimize-sibling-calls',source:1,stdinPanelShown:'1',tree:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+12.1+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4" />

## LeakSanitizer

:::info
LeakSanitizer does not work with the LLVM shipped by Apple, you will have to [install](/#setup) a newer version with Homebrew.
:::

LeakSanitizer will show you memory leaks. It is included in AdressSanitizer and enabled by default on Linux, on macOS you will need to enable it explicitly.

You can toggle it by changing the value of `detect_leaks` to `0` to disable it or `1` to enable it , in the `ASAN_OPTIONS` variable of your environment.

```shell
$ export ASAN_OPTIONS=detect_leaks=1
$ export ASAN_OPTIONS=detect_leaks=0
```

You can also use the `-fsanitize=leak` flag to use it as a standalone.

### Example

<Godbolt url="https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:20,endLineNumber:1,positionColumn:20,positionLineNumber:1,selectionStartColumn:20,selectionStartLineNumber:1,startColumn:20,startLineNumber:1),source:'%23include+%3Cstdlib.h%3E%0A%0Avoid+f(void)+%7B%0A++int*+x+%3D+malloc(10+*+sizeof(int))%3B%0A++x%5B10%5D+%3D+0%3B%0A%7D%0A%0Aint+main(void)+%7B%0A++f()%3B%0A++return+0%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg121,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-g+-fsanitize%3Dleak',source:1,stdinPanelShown:'1',tree:'1',wrap:'0'),l:'5',n:'0',o:'Executor+x86-64+gcc+12.1+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4" />

## UndefinedBehaviorSanitizer

UndefinedBehaviorSanitizer will show you bugs such as:
- Array subscript out of bounds
- Dereferencing misaligned or null pointers
- Signed integer overflow

You can find the list of all checks in the [documentation](https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html#available-checks)

You can enable it with the `-fsanitize=undefined` flag.

It is the only sanitizer that can be used with other sanitizers. You can do it by separating them with a comma `-fsanitize=address,undefined`.

### Example

<Godbolt url="https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:'int+main(int+argc,+char+**argv)+%7B%0A++return+0x7fffffff+%2B+argc%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg121,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-g+-fsanitize%3Dundefined',source:1,stdinPanelShown:'1',tree:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+12.1+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4" />

## ThreadSanitizer

ThreadSanitizer will detect data races in your program.

You can enable it with the `-fsanitize=thread` flag.

### Example

<Godbolt url="https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:2,endLineNumber:22,positionColumn:2,positionLineNumber:22,selectionStartColumn:2,selectionStartLineNumber:22,startColumn:2,startLineNumber:22),source:'%23include+%3Cpthread.h%3E%0A%23include+%3Cstdio.h%3E%0A%0Aint+Global%3B%0A%0Avoid+*Thread1(void+*x)+%7B%0A++Global%2B%2B%3B%0A++return+NULL%3B%0A%7D%0A%0Avoid+*Thread2(void+*x)+%7B%0A++Global--%3B%0A++return+NULL%3B%0A%7D%0A%0Aint+main()+%7B%0A++pthread_t+t%5B2%5D%3B%0A++pthread_create(%26t%5B0%5D,+NULL,+Thread1,+NULL)%3B%0A++pthread_create(%26t%5B1%5D,+NULL,+Thread2,+NULL)%3B%0A++pthread_join(t%5B0%5D,+NULL)%3B%0A++pthread_join(t%5B1%5D,+NULL)%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cclang1400,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-pthread+-fsanitize%3Dthread',source:1,stdinPanelShown:'1',tree:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+clang+14.0.0+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4" />

## Resources

- https://github.com/google/sanitizers/wiki
- https://developer.apple.com/documentation/xcode/diagnosing-memory-thread-and-crash-issues-early
- https://clang.llvm.org/docs/AddressSanitizer.html
- https://clang.llvm.org/docs/LeakSanitizer.html
- https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html
- https://clang.llvm.org/docs/ThreadSanitizer.html
