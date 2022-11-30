FROM node:16


WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

ENV DEBUG=playground:*

USER node

CMD ["npm","run","dev"]
