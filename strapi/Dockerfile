FROM node:18.2.0-alpine3.15

COPY ./strapi/package.json      /srv/package.json
COPY ./strapi/package-lock.json /srv/package-lock.json
COPY ./strapi/favicon.ico       /srv/favicon.ico
COPY ./strapi/config            /srv/config
COPY ./strapi/database          /srv/database
COPY ./strapi/public            /srv/public
COPY ./strapi/src               /srv/src

WORKDIR /srv
RUN npm install

CMD npm run develop