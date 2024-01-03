## Build stage

FROM node:20.10.0-slim as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

## Production stage

FROM nginx:1.25.3-alpine3.18 as server-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx

EXPOSE 80
