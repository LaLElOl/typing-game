FROM node:18-alpine
WORKDIR /typing-game/

COPY public/ /typing-game/public
COPY src/ /typing-game/src
COPY package.json /typing-game/

RUN npm install --verbose

RUN npm run build

ENV PORT = 8000

EXPOSE 3000

CMD ["npm", "start"]