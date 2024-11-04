# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
