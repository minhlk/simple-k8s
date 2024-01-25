FROM node:alpine3.19

WORKDIR /var/www

COPY node ./
RUN npm install && npm install express && npm install mysql2

CMD [ "node", "index.js" ]
