FROM node:current-slim

WORKDIR /skateseed

COPY package*.json ./
RUN npm install
COPY . /skateseed  
EXPOSE 27017
CMD ["npm", "run", "seed"]