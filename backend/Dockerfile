FROM node:12-alpine

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY . .
RUN npm install

CMD [ "npm", "run", "start" ]
