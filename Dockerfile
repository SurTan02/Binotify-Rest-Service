FROM node:latest

EXPOSE 80

WORKDIR /usr/src/app

COPY *.json ./
COPY .env ./
COPY src/ src/

RUN npm install

CMD ["npm", "run", "dev"]