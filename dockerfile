FROM node:14-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

RUN npm run build

CMD [ "node", "build/bin/server.js" ]