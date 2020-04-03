FROM node:current-slim

WORKDIR /skateapi

COPY package*.json ./
RUN npm install
COPY . /skateapi 
EXPOSE 9000 
CMD ["npm", "start"]