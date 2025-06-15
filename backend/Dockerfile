FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000

# Development
CMD [ "npx", "nodemon", "server.js" ]

# Production
# CMD ["node", "server.js"]
