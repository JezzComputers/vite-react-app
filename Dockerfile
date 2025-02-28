# Use an official Ubuntu as a parent image
FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Update the package repository and install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy the application files
COPY . .

# Define the command to run the application
CMD ["echo", "Image created"]
