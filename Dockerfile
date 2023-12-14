FROM node:alpine

WORKDIR /api

COPY . .

RUN npm i -g @nestjs/cli pnpm

RUN cd apps/api && pnpm i && pnpm run build

EXPOSE 8000

CMD ["sh", "-c", "cd apps/api && pnpm run start:prod"]