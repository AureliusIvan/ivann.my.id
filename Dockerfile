FROM node:lts-iron

RUN passwd -d root
RUN npm install -g pnpm

RUN mkdir -p /app/src/storage
RUN chown -R node:node /app/src/storage

USER root
WORKDIR /app