# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Commands

### Docker Install

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Add Your User to Docker Group

```bash
sudo usermod -aG docker yourUsername
```

### Verify Docker Install

```bash
docker --version
```

### Docker-Compose Install

```bash
sudo apt install -y docker-compose
```

### Verify Docker-Compose Install

```bash
docker-compose --version
```

### Install Dependencies (Create package.json)

```bash
pnpm install
```

### Start

```bash
pnpm run dev
```

### Manual Docker Creation/Running (+ Remove Old Containers/Images)

```bash
docker-compose -f "docker-compose.yml" down && docker-compose -f "docker-compose.yml" build && docker-compose -f "docker-compose.yml" up -d
```