# Stage 1: Build environment
FROM node:20.17.0-alpine AS builder
WORKDIR /app

# Install pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
COPY package*.json ./
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build application
RUN pnpm run build

# Stage 2: Production environment
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]