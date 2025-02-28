# Use an official Node.js image based on Debian Bookworm
FROM node:23-bookworm-slim

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm --version
RUN npm install -g npm@latest
RUN npm --version
RUN npm install -g pnpm@latest
RUN pnpm --version

# Copy the application files
COPY . .

# Install dependencies
RUN pnpm install --force

# Build the Vite React app
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["pnpm", "run", "preview"]