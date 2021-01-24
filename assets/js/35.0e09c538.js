(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{244:function(t,e,s){"use strict";s.r(e);var a=s(6),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("Paving the way to what might be your first AssemblyScript module.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("The following assumes that a "),s("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("recent version of Node.js"),s("OutboundLink")],1),t._v(" and its package manager "),s("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(" (comes with Node.js) are installed, with the commands below executed in a command prompt. Basic knowledge about writing and working with TypeScript modules, which is very similar, is a plus.")]),t._v(" "),s("h2",{attrs:{id:"setting-up-a-new-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-new-project"}},[t._v("#")]),t._v(" Setting up a new project")]),t._v(" "),s("p",[t._v("To get started with AssemblyScript, switch to a new directory and initialize a new node module:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n")])])]),s("p",[t._v("Now install both the "),s("RouterLink",{attrs:{to:"/loader.html"}},[t._v("loader")]),t._v(" and the "),s("RouterLink",{attrs:{to:"/compiler.html"}},[t._v("compiler")]),t._v(" using npm. Let's assume that the compiler is not required in production and make it a development dependency:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save @assemblyscript/loader\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev assemblyscript\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you need a "),s("a",{attrs:{href:"https://github.com/AssemblyScript/assemblyscript/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("specific version"),s("OutboundLink")],1),t._v(" of the loader and/or the compiler, append the respective version number as usual.")])]),t._v(" "),s("p",[t._v("Once installed, the compiler provides a handy scaffolding utility to quickly set up a new AssemblyScript project, for example in the directory of the just initialized node module:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("npx asinit "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("It automatically creates the recommended directory structure and configuration files:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This command will make sure that the following files exist in the project\ndirectory '/path/to/mymodule':\n\n  ./assembly\n  Directory holding the AssemblyScript sources being compiled to WebAssembly.\n\n  ./assembly/tsconfig.json\n  TypeScript configuration inheriting recommended AssemblyScript settings.\n\n  ./assembly/index.ts\n  Example entry file being compiled to WebAssembly to get you started.\n\n  ./build\n  Build artifact directory where compiled WebAssembly files are stored.\n\n  ./build/.gitignore\n  Git configuration that excludes compiled binaries from source control.\n\n  ./index.js\n  Main file loading the WebAssembly module and exporting its exports.\n\n  ./tests/index.js\n  Example test to check that your module is indeed working.\n\n  ./asconfig.json\n  Configuration file defining both a 'debug' and a 'release' target.\n\n  ./package.json\n  Package info containing the necessary commands to compile to WebAssembly.\n\nDo you want to proceed? [Y/n]\n")])])]),s("p",[t._v("Once initialized, edit the sources in "),s("code",[t._v("assembly/")]),t._v(", tweak "),s("RouterLink",{attrs:{to:"/compiler.html"}},[t._v("compiler options")]),t._v(" in "),s("code",[t._v("asconfig.json")]),t._v(" to fit your needs, and run the build command to compile your module to WebAssembly:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run asbuild\n")])])]),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),s("p",[t._v("Once compiled, you may run the tests in "),s("code",[t._v("tests/index.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("p",[t._v("add "),s("RouterLink",{attrs:{to:"/exports-and-imports.html#imports"}},[t._v("imports")]),t._v(" to the generated "),s("code",[t._v("index.js")]),t._v(" (instantiates the module and re-exports it):")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assembly/index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("declarredImportedFunction")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("and ultimately use your WebAssembly module like a normal node module:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/mymodule"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Your module's exports only understand integers and floats for now, with strings and objects being passed as pointers, but we'll get into that later when covering the "),s("RouterLink",{attrs:{to:"/loader.html"}},[t._v("loader")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("Read on to "),s("RouterLink",{attrs:{to:"/basics.html"}},[t._v("learn more")]),t._v("!")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);