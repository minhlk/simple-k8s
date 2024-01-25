FROM node:alpine3.19

WORKDIR /var/www

COPY node ./
RUN npm install && npm install express && npm install mysql2
RUN apk add curl && apk add mysql-client && apk add --no-cache mariadb-connector-c

CMD [ "node", "index.js" ]

# EXPOSE 3000
