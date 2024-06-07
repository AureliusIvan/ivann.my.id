FROM node:lts-alpine3.20

RUN passwd -d root
RUN npm install -g pnpm

RUN apt-get update && apt-get install -y make

USER root
WORKDIR /app