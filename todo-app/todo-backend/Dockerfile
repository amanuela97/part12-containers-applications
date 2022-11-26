#use node as the base image
FROM node:16

# set the working directory, * automatically created if it does no exist
WORKDIR /usr/src/app

# copy files from host machine to image. 
# for security reasons, "--chown=node:node" tells the image to copy the files as a less privlidged user rather than as the root user 
# . . copies files from host machine to image
COPY --chown=node:node . .

# install dependecies
# npm ci does the same thing as npm install but deletes the node_module before installation. 
# it follows the package-lock.json and does not alter any files 
RUN npm ci 

EXPOSE 3000

# set env variables
ENV DEBUG=playground:*

# for extra security, set the owner of the image session as node, so less privlidges than the root user
USER node

# run commands
CMD npm start
