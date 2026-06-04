FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@10.26.2 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build