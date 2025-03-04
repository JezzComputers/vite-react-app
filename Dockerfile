# Stage 1: Build environment
FROM node:20.17.0-alpine AS builder

# Install required dependencies
RUN apk add --no-cache \
    jq \
    curl \
    libressl \
    ca-certificates

# Install pnpm via npm
RUN npm install -g npm@latest pnpm

WORKDIR /app

# Install dependencies
COPY project-root/package.json project-root/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY project-root ./

# Build application
RUN pnpm run build && test -d dist

# Stage 2: Production environment
FROM node:20.17.0-alpine

# Install pnpm via npm
RUN npm install -g npm@latest pnpm

WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/vite.config.ts /app/vite.config.ts
COPY project-root/package.json project-root/pnpm-lock.yaml ./
EXPOSE 5173

# Add a health check to verify the server is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:5173/ || exit 1

CMD ["pnpm", "run", "preview"]