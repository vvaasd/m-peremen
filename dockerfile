FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./

# ---------- установка prod-зависимостей ----------
FROM base AS prod-deps
RUN --mount=type=cache,id=npm,target=/root/.npm \
  npm ci --omit=dev

# ---------- сборка ----------
FROM base AS build
RUN --mount=type=cache,id=npm,target=/root/.npm \
  npm ci
COPY . .
RUN npm run build

# ---------- финальный образ ----------
FROM node:20-slim AS runtime
WORKDIR /app

# копируем прод-зависимости и билд
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package*.json ./

EXPOSE 8000
CMD ["npm", "run", "preview"]
