
FROM node:alpine3.19 AS base

FROM base AS deps

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]