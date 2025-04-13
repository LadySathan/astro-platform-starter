import { defineConfig } from 'astro/config';

// Importando o adaptador Netlify
import netlify from '@astro/build-adapter-netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.seusite.com', // Substitua pelo seu domínio
  markdown: {
    // Configure aqui se quiser adicionar suporte de markdown
    syntaxHighlight: 'prism',
  },
  integrations: [
    // Adicione outras integrações do Astro, se necessário
  ],
  build: {
    // Se houver algum ajuste específico para o build, adicione aqui
  },
  output: 'static', // Gera os arquivos estáticos
  adapter: netlify(),
  vite: {
    // Para o Vite, que gerencia os caminhos e otimizações
    resolve: {
      alias: {
        // Ajuste para a resolução de caminhos dos diretórios
        '@styles': '/src/styles',
      },
    },
  },
});


