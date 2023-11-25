FROM node:lts-alpine3.18

COPY ./gatsby/package.json      /srv/package.json
COPY ./gatsby/package-lock.json /srv/package-lock.json
COPY ./gatsby/gatsby-config.js  /srv/gatsby-config.js
COPY ./gatsby/tailwind.config.js  /srv/tailwind.config.js
COPY ./gatsby/gatsby-browser.js  /srv/gatsby-browser.js
COPY ./gatsby/gatsby-browser.js  /srv/gatsby-browser.js
COPY ./gatsby/src               /srv/src

WORKDIR /srv
RUN apk add python3 make gcc g++
RUN npm install --legacy-peer-deps
