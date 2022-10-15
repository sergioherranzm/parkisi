FROM node:18-bullseye-slim

ADD . /app/parkisi
WORKDIR /app/parkisi

RUN yarn install
RUN yarn run build

ENTRYPOINT [ "yarn", "run", "start" ]