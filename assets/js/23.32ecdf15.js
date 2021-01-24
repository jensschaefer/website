(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{231:function(e,n,t){"use strict";t.r(n);var i=t(6),a=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"game-of-life-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game-of-life-example"}},[e._v("#")]),e._v(" Game of Life example")]),e._v(" "),t("p",[e._v("Continuously updates a slightly modified variant of "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Conway's_Game_of_Life",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conway's Game of Life"),t("OutboundLink")],1),e._v(" and visualizes its state on a canvas.")]),e._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("ul",[t("li",[e._v("Exporting functions from a WebAssembly module.")]),e._v(" "),t("li",[e._v("Calling functions exported from WebAssembly.")]),e._v(" "),t("li",[e._v("Importing configuration values from JavaScript.")]),e._v(" "),t("li",[e._v("Instantiating the module's memory in JavaScript and import it using "),t("code",[e._v("--importMemory")]),e._v(".")]),e._v(" "),t("li",[e._v("Speeding up a program by forcing helper functions in a hot path to always "),t("code",[e._v("@inline")]),e._v(".")]),e._v(" "),t("li",[e._v("Utilizing JavaScript's "),t("code",[e._v("Math")]),e._v(" instead of native libm to reduce module size via "),t("code",[e._v("--use Math=JSMath")]),e._v(".")]),e._v(" "),t("li",[e._v("Reacting to user input by directly modifying an input image buffer.")]),e._v(" "),t("li",[e._v("Finding out about WebAssembly's unintuitive byte order.")]),e._v(" "),t("li",[e._v("And finally: Continuously updating an input to an output image buffer and rendering the output image buffer.")]),e._v(" "),t("li",[e._v("Featuring: Clicking and drawing lots of "),t("em",[e._v("stuff")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language-editor extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#!optimize=speed&runtime=none&importMemory&use=Math=JSMath\n// Configuration imported from JS\ndeclare const BGR_ALIVE: u32;\ndeclare const BGR_DEAD: u32;\ndeclare const BIT_ROT: u32;\n\nvar width: i32, height: i32, offset: i32;\n\n/** Gets an input pixel in the range [0, s]. */\n@inline\nfunction get(x: u32, y: u32): u32 {\n  return load<u32>((y * width + x) << 2);\n}\n\n/** Sets an output pixel in the range [s, 2*s]. */\n@inline\nfunction set(x: u32, y: u32, v: u32): void {\n  store<u32>((offset + y * width + x) << 2, v);\n}\n\n/** Sets an output pixel in the range [s, 2*s] while fading it out. */\n@inline\nfunction rot(x: u32, y: u32, v: u32): void {\n  var alpha = max<i32>((v >> 24) - BIT_ROT, 0);\n  set(x, y, (alpha << 24) | (v & 0x00ffffff));\n}\n\n/** Initializes width and height. Called once from JS. */\nexport function init(w: i32, h: i32): void {\n  width  = w;\n  height = h;\n  offset = w * h;\n\n  // Start by filling output with random live cells.\n  for (let y = 0; y < h; ++y) {\n    for (let x = 0; x < w; ++x) {\n      let c = Math.random() > 0.1\n        ? BGR_DEAD  & 0x00ffffff\n        : BGR_ALIVE | 0xff000000;\n      set(x, y, c);\n    }\n  }\n}\n\n/** Performs one step. Called about 30 times a second from JS. */\nexport function step(): void {\n  var w = width,\n      h = height;\n\n  var hm1 = h - 1, // h - 1\n      wm1 = w - 1; // w - 1\n\n  // The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square\n  // "cells", each of which is in one of two possible states, alive or dead.\n  for (let y = 0; y < h; ++y) {\n    let ym1 = y == 0 ? hm1 : y - 1,\n        yp1 = y == hm1 ? 0 : y + 1;\n    for (let x = 0; x < w; ++x) {\n      let xm1 = x == 0 ? wm1 : x - 1,\n          xp1 = x == wm1 ? 0 : x + 1;\n\n      // Every cell interacts with its eight neighbours, which are the cells that are horizontally,\n      // vertically, or diagonally adjacent. Least significant bit indicates alive or dead.\n      let aliveNeighbors = (\n        (get(xm1, ym1) & 1) + (get(x, ym1) & 1) + (get(xp1, ym1) & 1) +\n        (get(xm1, y  ) & 1)                     + (get(xp1, y  ) & 1) +\n        (get(xm1, yp1) & 1) + (get(x, yp1) & 1) + (get(xp1, yp1) & 1)\n      );\n\n      let self = get(x, y);\n      if (self & 1) {\n        // A live cell with 2 or 3 live neighbors rots on to the next generation.\n        if ((aliveNeighbors & 0b1110) == 0b0010) rot(x, y, self);\n        // A live cell with fewer than 2 or more than 3 live neighbors dies.\n        else set(x, y, BGR_DEAD | 0xff000000);\n      } else {\n        // A dead cell with exactly 3 live neighbors becomes a live cell.\n        if (aliveNeighbors == 3) set(x, y, BGR_ALIVE | 0xff000000);\n        // A dead cell with fewer or more than 3 live neighbors just rots.\n        else rot(x, y, self);\n      }\n    }\n  }\n}\n\n/** Fills the row and column indicated by `x` and `y` with random live cells. */\nexport function fill(x: u32, y: u32, p: f64): void {\n  for (let ix = 0; ix < width; ++ix) {\n    if (Math.random() < p) set(ix, y, BGR_ALIVE | 0xff000000);\n  }\n  for (let iy = 0; iy < height; ++iy) {\n    if (Math.random() < p) set(x, iy, BGR_ALIVE | 0xff000000);\n  }\n}\n\n#!html\n<canvas id="canvas" style="width: 100%; height: 100%; background: #000; cursor: crosshair"></canvas>\n<script>\n// Configuration\nconst RGB_ALIVE = 0xD392E6;\nconst RGB_DEAD  = 0xA61B85;\nconst BIT_ROT   = 10;\n\n// Set up the canvas with a 2D rendering context\nconst canvas = document.getElementById("canvas");\nconst boundingRect = canvas.getBoundingClientRect();\nconst ctx = canvas.getContext("2d");\n\n// Compute the size of the universe (2 pixels per cell)\nconst width = boundingRect.width >>> 1;\nconst height = boundingRect.height >>> 1;\nconst size = width * height;\nconst byteSize = (size + size) << 2; // input & output (4 bytes per cell)\n\ncanvas.width = width;\ncanvas.height = height;\ncanvas.style.imageRendering = "pixelated";\nctx.imageSmoothingEnabled = false;\n\n// Compute the size of and instantiate the module\'s memory\nconst memory = new WebAssembly.Memory({ initial: ((byteSize + 0xffff) & ~0xffff) >>> 16 });\n\n// Fetch and instantiate the module\nloader.instantiate(module_wasm, {\n  env: {\n    memory\n  },\n  module: {\n    BGR_ALIVE : rgb2bgr(RGB_ALIVE) | 1, // LSB set indicates alive\n    BGR_DEAD  : rgb2bgr(RGB_DEAD) & ~1, // LSB not set indicates dead\n    BIT_ROT\n  }\n}).then(({ exports }) => {\n  // Initialize the module with the universe\'s width and height\n  exports.init(width, height);\n\n  var buffer = new Uint32Array(memory.buffer);\n\n  // Update about 30 times a second\n  (function update() {\n    setTimeout(update, 1000 / 30);\n    buffer.copyWithin(0, size, size + size);   // copy output to input\n    exports.step();                            // perform the next step\n  })();\n\n  // Keep rendering the output at [size, 2*size]\n  var imageData = ctx.createImageData(width, height);\n  var argb = new Uint32Array(imageData.data.buffer);\n  (function render() {\n    requestAnimationFrame(render);\n    argb.set(buffer.subarray(size, size + size)); // copy output to image buffer\n    ctx.putImageData(imageData, 0, 0);            // apply image buffer\n  })();\n\n  // When clicked or dragged, fill the current row and column with random live cells\n  var down = false;\n  [ [canvas, "mousedown"],\n    [canvas, "touchstart"]\n  ].forEach(eh => eh[0].addEventListener(eh[1], e => down = true));\n  [ [document, "mouseup"],\n    [document, "touchend"]\n  ].forEach(eh => eh[0].addEventListener(eh[1], e => down = false));\n  [ [canvas, "mousemove"],\n    [canvas, "touchmove"],\n    [canvas, "mousedown"]\n  ].forEach(eh => eh[0].addEventListener(eh[1], e => {\n    if (!down) return;\n    var loc;\n    if (e.touches) {\n      if (e.touches.length > 1) return;\n      loc = e.touches[0];\n    } else {\n      loc = e;\n    }\n    const currentBoundingRect = canvas.getBoundingClientRect();\n    exports.fill(\n      ((loc.clientX - currentBoundingRect.left) / currentBoundingRect.width * boundingRect.width) >>> 1,\n      ((loc.clientY - currentBoundingRect.top) / currentBoundingRect.height * boundingRect.height) >>> 1,\n      0.5\n    );\n  }));\n});\n\n/** Bitshifts an RGB color to BGR instead (WebAssembly is little endian). */\nfunction rgb2bgr(rgb) {\n  return ((rgb >>> 16) & 0xff) | (rgb & 0xff00) | (rgb & 0xff) << 16;\n}\n<\/script>\n')])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The example makes a couple assumptions. For instance, using the entire memory of the program as the image buffer as in this example is only possible because we know that no interferring static memory segments will be created, which is achieved by")]),e._v(" "),t("ul",[t("li",[e._v("using JavaScript's Math instead of native libm (usually adds lookup tables),")]),e._v(" "),t("li",[e._v("not using a more sophisticated runtime (typically adds bookkeeping) and")]),e._v(" "),t("li",[e._v("the rest of the example being relatively simple (i.e. no strings or similar).")])]),e._v(" "),t("p",[e._v("As soon as these conditions are no longer met, one would instead either reserve some space by specifying a suitable "),t("code",[e._v("--memoryBase")]),e._v(" or export a dynamically instantiated chunk of memory, like an "),t("code",[e._v("Uint32Array")]),e._v(", and utilize it as the input and output image buffers both in WebAssembly and in JavaScript.")])]),e._v(" "),t("h2",{attrs:{id:"running-locally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-locally"}},[e._v("#")]),e._v(" Running locally")]),e._v(" "),t("p",[e._v("Instructions are identical to "),t("RouterLink",{attrs:{to:"/examples/mandelbrot.html#running-locally"}},[e._v("those of the Mandelbrot example")]),e._v(".")],1)])}),[],!1,null,null,null);n.default=a.exports}}]);