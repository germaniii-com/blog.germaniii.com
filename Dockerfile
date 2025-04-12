FROM node:22-slim AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json* .
RUN npm ci

FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/ /app/
COPY . .
CMD ["npm", "run", "serve"]
