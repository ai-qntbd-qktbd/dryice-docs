FROM node:22-alpine AS builder

USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm ci --force

COPY --chown=node:node . .
RUN npm run build-gzip

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/build /nginx-static