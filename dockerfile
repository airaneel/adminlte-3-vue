# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY ./dist ./

# Expose the port the app runs on
EXPOSE 3000

# Set the default command for the container
ENTRYPOINT ["npm"]

# Set the default arguments for the entrypoint
CMD ["run", "start"]