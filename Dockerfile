# Stage 1: Build environment
FROM node:20.17.0-alpine AS builder

# Install required dependencies
RUN apk add --no-cache \
    jq \
    curl \
    libressl \
    ca-certificates

# Install pnpm via npm
RUN npm install -g pnpm

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build application
RUN pnpm run build && test -d dist

# Stage 2: Production environment
FROM node:20.17.0-alpine

# Install pnpm via npm
RUN npm install -g pnpm

WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/vite.config.js /app
COPY package.json pnpm-lock.yaml ./
EXPOSE 5173
CMD ["pnpm", "run", "preview"]