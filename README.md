# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Commands

Install dependencies (create package.json)

```bash
pnpm install
```

Start

```bash
pnpm run dev
```

Manual Docker creation/running (+ remove old containers/images)

```bash
docker-compose -f "docker-compose.yml" down && docker-compose -f "docker-compose.yml" build && docker-compose -f "docker-compose.yml" up -d
```
