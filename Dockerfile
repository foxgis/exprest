FROM node:22-alpine3.20 AS exprest
WORKDIR /exprest
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 1234
CMD ["npm", "run", "start"]