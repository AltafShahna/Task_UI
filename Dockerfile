# Dockerfile
# FROM node:16-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install -f
# COPY . .
# RUN npm run  '#{buildversion}#'
# EXPOSE 3000
# CMD ["npm","run", "#{startversion}#"]



# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
