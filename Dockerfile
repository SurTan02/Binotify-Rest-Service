FROM node:18-alpine

WORKDIR /usr/src/app

COPY *.json ./
COPY .env ./
COPY src/ src/

RUN apk add git
RUN npm install

CMD ["npm", "run", "dev"]