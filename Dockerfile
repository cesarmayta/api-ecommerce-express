FROM node:16.17

WORKDIR /app

COPY . .

RUN npm install

CMD npm start
