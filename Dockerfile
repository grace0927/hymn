FROM node:8-alpine

# Create app directory
WORKDIR /var/www

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json yarn.lock /var/www/

RUN apk add yarn\
    && yarn install --production

# Bundle app source
COPY . /var/www/

EXPOSE 80

CMD [ "yarn", "start" ]