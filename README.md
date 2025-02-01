# Todo List com API Fake

Este projeto é uma Lista de Tarefas construída com React + TypeScript, utilizando React Query para gerenciamento de estado assíncrono, Axios para requisições HTTP e JSON Server como API Fake.

## 🚀 Funcionalidades

- ✅ Criar novas tarefas
- ✍️ Editar tarefas
- 🔄 Marcar tarefas como concluídas
- 🗑️ Deletar tarefas
- 💾 Persistência de dados
- 📱 Design responsivo
- 🎨 Interface moderna

## 🛠️ Tecnologias Utilizadas

- React - Biblioteca JavaScript para construção de interfaces
- TypeScript - Superset JavaScript com tipagem estática
- Vite - Ferramenta moderna de build e desenvolvimento frontend, rápida e eficiente
- React Query - Gerenciador de estado assíncrono
- Axios - Cliente HTTP baseado em Promises para facilitar requisições assíncronas
- JSON Server - Ferramenta para criação rápida de APIs REST simuladas
- Lucide React - Biblioteca de ícones moderna
- Tailwind CSS - Framework CSS utilitário para estilização rápida e eficiente

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/DevM4rco/todo-list.git
cd todo-list
```

2. Instale as dependências:

```bash
npm install
```

## 🔧 Configuração da API Fake (JSON Server)

O projeto utiliza `JSON Server` para simualar uma api REST.

1. Crie um arquivo `db.json` na raiz do projeto com o seguinte conteúdo inicial:

```json
{
  "todo": []
}
```

2. Inicie o `JSON Server` na porta 3300

```bash
npx json-server --watch db.json --port 3300
# ou
npm run server
```

3. Inicie o servidor local e acesse [`localhost:5173`](http://localhost:5173)

```bash
npm run dev
```

## 📁 Estrutura do Projeto

```bash
todo-list/
├── src/
│ ├── components/
│ │ ├── FormContainer.tsx
│ │ └── ListContainer.tsx
│ ├── hooks/
│ │ ├── useCreateTodo.ts
│ │ ├── useDeleteTodo.ts
│ │ ├── useFetchTodo.ts
│ │ └── useUpdateTodo.ts
│ ├── lib/
│ │ ├── axios.ts
│ │ └── react-query.ts
│ ├── services/
│ │ ├── createTodo.ts
│ │ ├── deleteTodo.ts
│ │ ├── getTodos.ts
│ │ └── updateTodo.ts
│ ├── types/
│ │ └── Todo.ts
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
├── db.json
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ⚙️ Configuração do Tailwind CSS

```ts
// vite.config.js;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* src/index.css */
@import 'tailwindcss';
```

## 👥 Autor

DevM4rco - GitHub
