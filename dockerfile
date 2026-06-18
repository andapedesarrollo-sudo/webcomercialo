# Etapa de build
FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@10.26.2 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm run build

# Etapa de producción
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]