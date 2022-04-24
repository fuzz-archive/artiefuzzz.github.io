FROM node:alpine

WORKDIR /opt/website

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
