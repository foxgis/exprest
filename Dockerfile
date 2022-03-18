FROM node:12.22.10-alpine3.15 AS exprest
WORKDIR /exprest
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn dist

FROM alpine:3.15.1
WORKDIR /exprest
COPY --from=exprest /exprest/dist .
EXPOSE 1234
CMD ["./exprest"]