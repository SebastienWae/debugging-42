---
sidebar_position: 2
---


# GCC Static Analyzer

:::caution
Static analyzer are not magic, they will not catch all errors and can report false positives.
:::

:::info
GCC 10 is required, it is not shipped by default on macOS.

This project is still considered as experimental[^1], and C++ is not yet supported.[^2]
:::

Since its version 10, GCC  has a static analyzer that can be enabled with the `-fanalyzer` flag.

It can find issues such as:
- Double free
- Use after free
- Source leaks
- Uninitialized value

More features can be toggled o or off to reduce the compilation time increase or hide false positive, like a taint mode to track untrusted variables. For a list of all options, refer to the [GCC manual](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html).

On average, your compilation time will increase by 2x.

## Example

<Godbolt url="https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:'%23include+%3Csetjmp.h%3E%0A%23include+%3Cstdlib.h%3E%0A%0Astatic+jmp_buf+env%3B%0A%0Astatic+void+inner(void)%0A%7B%0A++longjmp(env,+1)%3B%0A%7D%0A%0Astatic+void+middle(void)%0A%7B%0A++void+*ptr+%3D+malloc(1024)%3B%0A++inner()%3B%0A++free(ptr)%3B%0A%7D%0A%0Avoid+outer(void)%0A%7B%0A++int+i%3B%0A%0A++i+%3D+setjmp(env)%3B%0A++if+(i+%3D%3D+0)%0A++++middle()%3B%0A%7D%0A%0Aint+main(void)+%0A%7B%0A++outer()%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg121,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-fanalyzer',source:1,stdinPanelShown:'1',tree:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+12.1+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4" />


## Resources

- https://gcc.gnu.org/wiki/DavidMalcolm/StaticAnalyzer

[^1]: https://developers.redhat.com/articles/2022/04/12/state-static-analysis-gcc-12-compiler
[^2]: https://gcc.gnu.org/bugzilla/showdependencytree.cgi?id=97110
