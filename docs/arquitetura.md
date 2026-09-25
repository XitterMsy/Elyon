# Arquitetura inicial

## Tecnologias

- React + TypeScript + Vite.
- CSS responsivo sem dependência de framework visual.
- `localStorage` para persistência local.

## Organização

- `src/App.tsx`: composição das páginas e componentes da primeira versão.
- `src/calculator.ts`: motor puro de cálculo, separado da interface.
- `src/types.ts`: contratos dos dados.
- `src/format.ts`: conversão e formatação brasileira.
- `src/storage.ts`: persistência do histórico.
- `docs/`: decisões, regras e visão do produto.

## Decisões

- Valores de UCO e filme são globais por cálculo.
- O ajuste de porte é global por padrão e pode ser sobrescrito na linha.
- O procedimento principal é selecionado manualmente.
- A primeira versão não presume uma tabela CBHPM oficial incorporada.
