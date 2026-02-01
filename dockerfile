FROM node:22.16-alpine as build
WORKDIR /app/src
COPY ./ .
RUN npm install -force
RUN npm run build

FROM node:22.16-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/test-angular/ ./
CMD node server/server.mjs
EXPOSE 4000