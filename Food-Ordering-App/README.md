# React + Vite

- bun create vite
- cd project_name
- bun install
- bun run dev

---

## useEffect

- Do something after rendering the component
- When useEffect is called ?
  > 1. useEffect(() => {}) without depenedency array : on every render
  > 2. useEffect(() => {}, []) with depenedency array : on initial render
  > 3. useEffect(() => {}, [btn]) depenedency array with some value : everytime value is updated

---

## useState

- Never create state variable inside if-else, loops, functions.
- Never create state variables Outside your Component.
- Always create state variables on TOP.

---
