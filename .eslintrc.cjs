module.exports = {
  root: true, // root значение true, чтобы указать, что это корневой файл конфигурации.
  env: {
      node: true, // чтобы указать, что среда является средой Node.js.
  },
  extends: [
      "plugin:vue/vue3-essential", //  включает базовые правила Vue 3 (правила с сайта eslint-plugin-vue)
      "eslint:recommended", // включает рекомендуемые правила ESLint.
      "@vue/typescript/recommended", // дополнительными рекомендуемыми правилами TypeScript.
      "prettier", //  включает правила Prettier для ESLint.
      "prettier/@typescript-eslint", // отключает любые конфликтующие правила ESLint из подключаемого модуля TypeScript.
      "prettier/vue", //  отключает любые конфликтующие правила ESLint из плагина Vue.
  ],
  parserOptions: {
      ecmaVersion: 'latest', // указать версию ECMAScript.
  },
  settings: {
    "import/resolver": {
        typescript: {
            "project": 'tsconfig.json'
        }
    }
  },
  rules: {
      //  настраивать правила
  },
};