# Dr. Linktree — React + Framer Motion

Site de linktree premium dark para médico, construído com React, Framer Motion e Tailwind CSS.

## Tecnologias

- **React 18** — componentes funcionais com hooks
- **Framer Motion 11** — animações com spring physics
- **Tailwind CSS 3** — utilitários de estilo
- **Vite 5** — build ultra-rápido

## Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build
```

## Personalização

Toda configuração do Dr. está em **`src/data/config.js`**:

```js
export const doctor = {
  name: 'Dr. Lucas Coracini',   // Nome completo
  initials: 'LC',              // Iniciais (aparece no avatar)
  crm: 'CRM',       // CRM
  specialty: 'Cardiologista',  // Especialidade
  subspecialties: 'Arritmologia · Insuf. Cardíaca',
  photo: '/foto-dr.jpg',       // Foto (opcional, coloque na pasta /public)
  available: true,             // Ponto verde de "disponível"
  stats: [...]                 // Números de destaque
}

export const links = [...]   // Botões do linktree
export const socials = [...]  // Ícones de redes sociais
```

## Adicionar foto

1. Coloque a foto do Dr. na pasta `/public/` com o nome `foto-dr.jpg`
2. Em `src/data/config.js`, descomente a linha:
   ```js
   photo: '/foto-dr.jpg',
   ```

## Deploy no Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Ou arraste a pasta do projeto para [vercel.com/new](https://vercel.com/new).

## Estrutura do projeto

```
dr-linktree/
├── public/              # Arquivos estáticos (foto, favicon)
├── src/
│   ├── components/
│   │   ├── Avatar.jsx       # Avatar com pulse ring animado
│   │   ├── Background.jsx   # Grain + glow de fundo
│   │   ├── Header.jsx       # Nome, CRM, tag de especialidade
│   │   ├── Icons.jsx        # Todos os SVG icons
│   │   ├── LinkCard.jsx     # Card de link com shimmer e spring
│   │   ├── MagneticButton.jsx # Efeito magnético nos social icons
│   │   ├── Socials.jsx      # Linha de ícones sociais
│   │   └── StatsBar.jsx     # Barra de estatísticas
│   ├── data/
│   │   └── config.js        # ← EDITE AQUI para personalizar
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # CSS global + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```
