FROM node:lts-alpine3.20

#node js heap file
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN passwd -d root
RUN npm install -g pnpm

#add make file
RUN apk add --no-cache make

USER root
WORKDIR /appc