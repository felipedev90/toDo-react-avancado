# todo-react-avancado

Aplicação de **Todo List** desenvolvida com React, com foco em recursos avançados: **Hooks**, **Hook customizado**, **Context API** e **Memoization**.

## Funcionalidades

- Adicionar uma nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas: **todas**, **concluídas** e **pendentes**
- Persistência no **localStorage** (mantém as tarefas após recarregar a página)

## Tecnologias e conceitos

- **React** + **Vite**
- **Tailwind CSS** (estilização)
- **Hooks**: `useState`, `useEffect`
- **Context API**: `createContext`, `useContext`
- **Hook customizado**: `useLocalStorageState` (persistência)
- **Memoization**: `useMemo`, `React.memo`, `useCallback`

## Estrutura de pastas

```txt
src/
  components/
    Header.jsx
    Todo.jsx
    TodoFilters.jsx
    TodoForm.jsx
  context/
    TodoContext.js
    TodoProvider.jsx
    useTodos.js
  hooks/
    useLocalStorageState.js
  App.jsx
  main.jsx
```

## Como rodar localmente

Pré-requisitos

- Node.js (recomendado: v18+)
- npm

Passos

- npm install
- npm run dev

A aplicação ficará disponível no endereço mostrado no terminal (geralmente http://localhost:5173).

## Observações

- As tarefas são salvas no localStorage usando a chave "todos".
- O estado global (tarefas e filtro) é gerenciado via Context API para evitar prop drilling e centralizar regras.
