
# 执行命令
+ 输出commonjs模块

  `rollup index.js -o dist.cjs.js -f cjs`  

+ 输出es模块

  `rollup index.js -o dist.es.js -f es` 

+ 输出amd模块

  `rollup index.js -o dist.amd.js -f amd`

+ 输出iife模块

  `rollup index.js -n iifeResult -o dist.iife.js  -f iife`

+ 输出umd模块

  `rollup index.js -n umdResult -o dist.umd.js -f umd`  

可以看到当前目录下分别产生了五种模块的打包文件