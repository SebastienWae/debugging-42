"use strict";(self.webpackChunk_42_debuggers=self.webpackChunk_42_debuggers||[]).push([[956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="GCC Static Analyzer",l={unversionedId:"static-analyzers/gcc_static_analyzer",id:"static-analyzers/gcc_static_analyzer",title:"GCC Static Analyzer",description:"Static analyzer are not magic, they will not catch all errors and can report false positives.",source:"@site/docs/static-analyzers/gcc_static_analyzer.md",sourceDirName:"static-analyzers",slug:"/static-analyzers/gcc_static_analyzer",permalink:"/debugging-42/static-analyzers/gcc_static_analyzer",draft:!1,editUrl:"https://github.com/SebastienWae/debugging-42/tree/main/docs/static-analyzers/gcc_static_analyzer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Clang Static Analyzer",permalink:"/debugging-42/static-analyzers/clang_static_analyzer"}},c={},s=[{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p=(d="Godbolt",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gcc-static-analyzer"},"GCC Static Analyzer"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Static analyzer are not magic, they will not catch all errors and can report false positives."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"GCC 10 is required, it is not shipped by default on macOS."),(0,r.kt)("p",{parentName:"div"},"This project is still considered as experimental",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", and C++ is not yet supported.",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))))),(0,r.kt)("p",null,"Since its version 10, GCC  has a static analyzer that can be enabled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-fanalyzer")," flag."),(0,r.kt)("p",null,"It can find issues such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Double free"),(0,r.kt)("li",{parentName:"ul"},"Use after free"),(0,r.kt)("li",{parentName:"ul"},"Source leaks"),(0,r.kt)("li",{parentName:"ul"},"Uninitialized value")),(0,r.kt)("p",null,"More features can be toggled on, like a taint mode to track untrusted variable, or off to reduce the compilation time increase or hide false positive. (for a list of all options, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html"},"GCC manual"),") "),(0,r.kt)("p",null,"On average, your compilation time will increase by 2x."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(p,{url:"https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:'%23include+%3Csetjmp.h%3E%0A%23include+%3Cstdlib.h%3E%0A%0Astatic+jmp_buf+env%3B%0A%0Astatic+void+inner(void)%0A%7B%0A++longjmp(env,+1)%3B%0A%7D%0A%0Astatic+void+middle(void)%0A%7B%0A++void+*ptr+%3D+malloc(1024)%3B%0A++inner()%3B%0A++free(ptr)%3B%0A%7D%0A%0Avoid+outer(void)%0A%7B%0A++int+i%3B%0A%0A++i+%3D+setjmp(env)%3B%0A++if+(i+%3D%3D+0)%0A++++middle()%3B%0A%7D%0A%0Aint+main(void)+%0A%7B%0A++outer()%3B%0A%7D'),l:'5',n:'0',o:'C+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg121,compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-fanalyzer',source:1,stdinPanelShown:'1',tree:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+12.1+(C,+Editor+%231)',t:'0')),header:(),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4",mdxType:"Godbolt"}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/wiki/DavidMalcolm/StaticAnalyzer"},"https://gcc.gnu.org/wiki/DavidMalcolm/StaticAnalyzer"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://developers.redhat.com/articles/2022/04/12/state-static-analysis-gcc-12-compiler"},"https://developers.redhat.com/articles/2022/04/12/state-static-analysis-gcc-12-compiler"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/bugzilla/showdependencytree.cgi?id=97110"},"https://gcc.gnu.org/bugzilla/showdependencytree.cgi?id=97110"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);