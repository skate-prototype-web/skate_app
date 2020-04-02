FROM node:current-slim

WORKDIR /skateseed

COPY package*.json ./skateseed/
RUN npm install
COPY . /skateseed  
CMD ["npm", "run", "seed"]