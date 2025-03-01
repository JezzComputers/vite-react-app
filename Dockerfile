# Stage 1: Build environment
FROM node:20.17.0-alpine AS builder
WORKDIR /app

# Install dependencies first for proper caching
COPY package*.json ./
RUN npm ci --production

# Copy source files
COPY . .

# Build application
RUN npm run build

# Stage 2: Production environment
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

# Optional: Add custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]