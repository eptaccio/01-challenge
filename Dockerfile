FROM node:10-alpine

WORKDIR /app

ENV PORT=3001

EXPOSE 3001

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["npm", "start"]