import{d,A as f,B as t,H as v,e as y,ak as a,i as r,ar as m}from"./B1iFoKiH.js";const u={"package.json":"i-vscode-icons-file-type-node","tsconfig.json":"i-vscode-icons-file-type-tsconfig",".npmrc":"i-vscode-icons-file-type-npm",".editorconfig":"i-vscode-icons-file-type-editorconfig",".eslintrc":"i-vscode-icons-file-type-eslint",".eslintrc.cjs":"i-vscode-icons-file-type-eslint",".eslintignore":"i-vscode-icons-file-type-eslint","eslint.config.js":"i-vscode-icons-file-type-eslint","eslint.config.mjs":"i-vscode-icons-file-type-eslint","eslint.config.cjs":"i-vscode-icons-file-type-eslint",".gitignore":"i-vscode-icons-file-type-git","yarn.lock":"i-vscode-icons-file-type-yarn",".env":"i-vscode-icons-file-type-dotenv",".env.example":"i-vscode-icons-file-type-dotenv",".vscode/settings.json":"i-vscode-icons-file-type-vscode",nuxt:"i-vscode-icons-file-type-nuxt",".nuxtrc":"i-vscode-icons-file-type-nuxt",".nuxtignore":"i-vscode-icons-file-type-nuxt","nuxt.config.js":"i-vscode-icons-file-type-nuxt","nuxt.config.ts":"i-vscode-icons-file-type-nuxt","nuxt.schema.ts":"i-vscode-icons-file-type-nuxt","tailwind.config.js":"i-vscode-icons-file-type-tailwind","tailwind.config.ts":"i-vscode-icons-file-type-tailwind",vue:"i-vscode-icons-file-type-vue",ts:"i-vscode-icons-file-type-typescript",tsx:"i-vscode-icons-file-type-typescript",mjs:"i-vscode-icons-file-type-js",cjs:"i-vscode-icons-file-type-js",js:"i-vscode-icons-file-type-js",jsx:"i-vscode-icons-file-type-js",md:"i-vscode-icons-file-type-markdown",py:"i-vscode-icons-file-type-python",cs:"i-vscode-icons-file-type-csharp",asm:"i-vscode-icons-file-type-assembly",f:"i-vscode-icons-file-type-fortran",hs:"i-vscode-icons-file-type-haskell",fs:"i-vscode-icons-file-type-fsharp",kt:"i-vscode-icons-file-type-kotlin",rs:"i-vscode-icons-file-type-rust",rb:"i-vscode-icons-file-type-ruby",lsp:"i-vscode-icons-file-type-lisp",ps1:"i-vscode-icons-file-type-powershell",psd1:"i-vscode-icons-file-type-powershell",psm1:"i-vscode-icons-file-type-powershell",go:"i-vscode-icons-file-type-go",gleam:"i-vscode-icons-file-type-gleam",bicep:"i-vscode-icons-file-type-bicep",bicepparam:"i-vscode-icons-file-type-bicep",exs:"i-vscode-icons-file-type-elixir",erl:"i-vscode-icons-file-type-erlang",sbt:"i-vscode-icons-file-type-scala",h:"i-vscode-icons-file-type-cppheader",ino:"i-vscode-icons-file-type-arduino",pl:"i-vscode-icons-file-type-perl",jl:"i-vscode-icons-file-type-julia",dart:"i-vscode-icons-file-type-dartlang",ico:"i-vscode-icons-file-type-favicon",npm:"i-vscode-icons-file-type-npm",pnpm:"i-vscode-icons-file-type-pnpm",npx:"i-vscode-icons-file-type-npm",yarn:"i-vscode-icons-file-type-yarn",bun:"i-vscode-icons-file-type-bun",yml:"i-vscode-icons-file-type-yaml",terminal:"i-lucide-terminal"},g=d({__name:"CodeIcon",props:{icon:{},filename:{}},setup(l){const s=l,p=f(),c=t(()=>{var e,i;return m(((i=(e=p.uiPro)==null?void 0:e.prose)==null?void 0:i.codeIcon)||{},u)}),n=t(()=>{if(s.icon)return s.icon;if(!s.filename)return;const e=s.filename.replace(/\s*\(.*\)\s*$/,""),i=e.includes(".")&&e.split(".").pop(),o=e.split("/").pop();return(o&&c.value[o.toLowerCase()])??(i&&(c.value[i]??`i-vscode-icons-file-type-${i}`))});return(e,i)=>{const o=a;return n.value?(r(),v(o,{key:0,name:n.value},null,8,["name"])):y("",!0)}}}),j=Object.assign(g,{__name:"ProseCodeIcon"});export{j as default};
