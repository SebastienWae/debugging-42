"use strict";(self.webpackChunk_42_debuggers=self.webpackChunk_42_debuggers||[]).push([[693],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:2,description:"Valgrind introduction"},i="Valgrind",o={unversionedId:"dynamic-analyzers/valgrind",id:"dynamic-analyzers/valgrind",title:"Valgrind",description:"Valgrind introduction",source:"@site/docs/dynamic-analyzers/valgrind.md",sourceDirName:"dynamic-analyzers",slug:"/dynamic-analyzers/valgrind",permalink:"/debugging-42/dynamic-analyzers/valgrind",draft:!1,editUrl:"https://github.com/SebastienWae/debugging-42/tree/main/docs/dynamic-analyzers/valgrind.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Valgrind introduction"},sidebar:"defaultSidebar",previous:{title:"Sanitizers",permalink:"/debugging-42/dynamic-analyzers/sanitizers"},next:{title:"Static Analyzers",permalink:"/debugging-42/category/static-analyzers"}},s={},c=[{value:"macOS",id:"macos",level:2},{value:"MemCheck",id:"memcheck",level:2},{value:"Example",id:"example",level:3},{value:"Resources",id:"resources",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"valgrind"},"Valgrind"),(0,a.kt)("p",null,"Even though ",(0,a.kt)("a",{parentName:"p",href:"https://valgrind.org/"},"Valgrind")," is mostly used to find memory leaks, it can do a lot more. It is a made of multiple tools that can help you find various types of errors in your code."),(0,a.kt)("p",null,"It works by running your program on a synthetic CPU and dynamically re-compiling it. You do not need to change or re-compile your program to make it compatible, but it comes at the cost of slowing its execution by a factor or 5 to 100."),(0,a.kt)("h2",{id:"macos"},"macOS"),(0,a.kt)("p",null,"Valgrind is currently ",(0,a.kt)("a",{parentName:"p",href:"https://valgrind.org/docs/manual/dist.news.html"},"only supporting macOS up to High Sierra")," (10.12). Thankfully there is a fork that works with macOS Catalina (10.15)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/LouisBrunner/valgrind-macos"},"https://github.com/LouisBrunner/valgrind-macos")),(0,a.kt)("p",null,"The easiest way to install it is through Homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap LouisBrunner/valgrind\n$ brew install --HEAD LouisBrunner/valgrind/valgrind\n")),(0,a.kt)("p",null,"Be careful that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LouisBrunner/valgrind-macos#status"},"not all features are working"),"."),(0,a.kt)("h2",{id:"memcheck"},"MemCheck"),(0,a.kt)("p",null,"MemCheck is Valgrind default tool. It\u2019s often only used to check memory leaks, but it can detect a lot of different type of memory error such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Out-of-bounds accesses to heap"),(0,a.kt)("li",{parentName:"ul"},"Use-after-free"),(0,a.kt)("li",{parentName:"ul"},"Using undefined values")),(0,a.kt)("p",null,"To not miss any leak or error and get more information, I suggest you to always run MemCheck with the flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"--leak-check=full --show-leak-kinds=all -s\n")),(0,a.kt)("p",null,"The error messages can be cryptic at first, but the documentation goes through ",(0,a.kt)("a",{parentName:"p",href:"https://valgrind.org/docs/manual/mc-manual.html#mc-manual.errormsgs"},"several examples"),". Use them as a reference until you are familiar with them."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// leaks.c\n#include <stdlib.h>\n\nvoid f(void) {\n  int* x = malloc(10 * sizeof(int));\n  x[10] = 0;\n}\n\nint main(void) {\n  f();\n  return 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ clang -g leaks.c -o leaks\n$ valgrind --leak-check=full --show-leak-kinds=all ./leaks\n==40468== Memcheck, a memory error detector\n==40468== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.\n==40468== Using Valgrind-3.19.0 and LibVEX; rerun with -h for copyright info\n==40468== Command: ./leaks\n==40468==\n==40468== Invalid write of size 4\n==40468==    at 0x10915A: f (main.c:5)\n==40468==    by 0x109183: main (main.c:9)\n==40468==  Address 0x4a8e068 is 0 bytes after a block of size 40 alloc'd\n==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)\n==40468==    by 0x109151: f (main.c:4)\n==40468==    by 0x109183: main (main.c:9)\n==40468==\n==40468==\n==40468== HEAP SUMMARY:\n==40468==     in use at exit: 40 bytes in 1 blocks\n==40468==   total heap usage: 1 allocs, 0 frees, 40 bytes allocated\n==40468==\n==40468== 40 bytes in 1 blocks are definitely lost in loss record 1 of 1\n==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)\n==40468==    by 0x109151: f (main.c:4)\n==40468==    by 0x109183: main (main.c:9)\n==40468==\n==40468== LEAK SUMMARY:\n==40468==    definitely lost: 40 bytes in 1 blocks\n==40468==    indirectly lost: 0 bytes in 0 blocks\n==40468==      possibly lost: 0 bytes in 0 blocks\n==40468==    still reachable: 0 bytes in 0 blocks\n==40468==         suppressed: 0 bytes in 0 blocks\n==40468==\n==40468== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)\n==40468==\n==40468== 1 errors in context 1 of 2:\n==40468== Invalid write of size 4\n==40468==    at 0x10915A: f (main.c:5)\n==40468==    by 0x109183: main (main.c:9)\n==40468==  Address 0x4a8e068 is 0 bytes after a block of size 40 alloc'd\n==40468==    at 0x4845888: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)\n==40468==    by 0x109151: f (main.c:4)\n==40468==    by 0x109183: main (main.c:9)\n==40468==\n==40468== ERROR SUMMARY: 2 errors from 2 contexts (suppressed: 0 from 0)\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://valgrind.org"},"https://valgrind.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://valgrind.org/docs/manual/manual.html"},"https://valgrind.org/docs/manual/manual.html"))))}m.isMDXComponent=!0}}]);