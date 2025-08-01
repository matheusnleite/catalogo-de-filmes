// Dentro do seu arquivo postcss.config.mjs

const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Usando o plugin correto conforme a mensagem de erro
    "autoprefixer": {},
  },
};

export default config;
