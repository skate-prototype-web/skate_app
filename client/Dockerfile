FROM node:current-slim

WORKDIR /skateapp

COPY package*.json ./skateapp/
RUN npm install
COPY . /skateapp 
EXPOSE 3283 
CMD ["npm", "start"]