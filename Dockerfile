FROM node:lts-alpine3.20

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN passwd -d root
RUN npm install -g pnpm

RUN mkdir -p /app/src/storage
RUN chown -R node:node /app/src/storage

USER root
WORKDIR /app