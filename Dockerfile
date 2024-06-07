FROM node:lts-alpine3.20

RUN passwd -d root
RUN npm install -g pnpm

#add make file
RUN apk add --no-cache make

USER root
WORKDIR /app