const e="94list-frontend",t="0.1.8",i="module",n={dev:"vite",build:'run-p type-check "build-only {@}" --',preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --build --force",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",format:"prettier --write src/"},s={"@element-plus/icons-vue":"^2.3.1","@vueuse/core":"^10.9.0",axios:"^1.6.7",clipboard:"^2.0.11","element-plus":"^2.6.1",pinia:"^2.1.7",vue:"^3.4.21","vue-router":"^4.3.0"},p={sass:"^1.72.0","unplugin-auto-import":"^0.17.5","unplugin-vue-components":"^0.26.0","@rushstack/eslint-patch":"^1.3.3","@tsconfig/node20":"^20.1.2","@types/node":"^20.11.25","@vitejs/plugin-vue":"^5.0.4","@vue/eslint-config-prettier":"^8.0.0","@vue/eslint-config-typescript":"^12.0.0","@vue/tsconfig":"^0.5.1",eslint:"^8.49.0","eslint-plugin-vue":"^9.17.0","npm-run-all2":"^6.1.2",prettier:"^3.0.3",typescript:"~5.4.0",vite:"^5.1.5","vue-tsc":"^2.0.6"},c={name:e,version:t,private:!0,type:i,scripts:n,dependencies:s,devDependencies:p};export{c as default,s as dependencies,p as devDependencies,e as name,n as scripts,i as type,t as version};
