ARG NODE_VERSION

FROM node:${NODE_VERSION} 
WORKDIR /app
#ENV PATH /usr/src/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY src/ ./src/

CMD ["node", "src/server.js"]







