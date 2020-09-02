# build stage
FROM nikolaik/python-nodejs:latest
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start:prod"]