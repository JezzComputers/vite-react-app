# Use an official Node.js image based on Alpine Linux
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package.json ./

# Install dependencies and generate package-lock.json if it doesn't exist
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["sh", "-c", "echo 'Starting Vite preview server...' && npm run preview"]