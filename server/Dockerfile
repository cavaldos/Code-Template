FROM node:18.12.1

WORKDIR /usr/src/app

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .
COPY .env ./

RUN yarn build

EXPOSE 3000


CMD ["node", "dist/server.js"]



# docker build -t server .
# docker run -p 3000:3000 server.