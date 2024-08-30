# React + Vite + Tailwind

1. 安装 vite 脚手架

   ```bash
   yarn create vite
   ```

2. create a project “my-website”

   ```bash
   Project name: ... my-website
   Select a framework: » React
   Select a variant: » JavaScript
   ```

3. 进入项目 文件夹，初始化项目，启动项目

   ```bash
   cd my-website
   yarn
   yarn dev
   ```

4. 安装一些库并初始化

   ```bash
   yarn add tailwindcss -d
   yarn add postcss
   yarn add autoprefixer

   yarn tailwind init
   ```

5. Add the paths to all of your template files in your `tailwind.config.js` file.

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

6. 创建一个文件“postcss.config.js” 并添加如下代码

   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

7. Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file (index.css)

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
