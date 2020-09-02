# build stage
FROM nikolaik/python-nodejs:latest
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]