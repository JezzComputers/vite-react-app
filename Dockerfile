# Use an official Node.js image based on Debian Bookworm
FROM node:23-bookworm-slim

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g npm@latest
RUN npm install -g pnpm@latest

# Copy package.json and pnpm-lock.yaml first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Vite React app
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["sh", "-c", "echo 'Starting Vite preview server...' && pnpm run preview"]