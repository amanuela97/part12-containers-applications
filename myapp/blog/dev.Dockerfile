FROM node:16


WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

COPY --chown=node:node . .

RUN  rm -rf node_modules && npm install --legacy-peer-deps 

RUN npm uninstall bcrypt --legacy-peer-deps &&  npm install bcrypt --legacy-peer-deps

ARG SECRET DB_URL 

ENV DEBUG=playground:* PORT=3003 SECRET=${SECRET} DB_URL=${DB_URL} NODE_ENV=development

USER node

CMD ["npm","run","dev"]
