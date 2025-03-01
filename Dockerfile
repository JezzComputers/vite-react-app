# Use an official Node.js image based on Alpine Linux
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package.json ./

# Generate package-lock.json if it doesn't exist and install dependencies
RUN if [ ! -f package-lock.json ]; then npm install --package-lock-only; fi
COPY package-lock.json ./
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the Vite React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["sh", "-c", "echo 'Starting Vite preview server...' && npm run preview"]