# ---- Development ----
FROM node:20.2.0 AS development

WORKDIR /app

COPY package.json pnpm-lock.yml ./

RUN pnpm install --frozen-lock-file

COPY . .

CMD ["pnpm", "dev"]

# ---- Build ----
FROM development AS build

RUN pnpm build

# ---- Nginx setup ----
FROM nginx:1.23.3-alpine AS nginx

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]