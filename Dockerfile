FROM node:slim

ENV NODE_ENV=production

WORKDIR /app

## Copy package.json and package-lock.json before copy other files for better build caching
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./ ./

RUN npm install

RUN ls -l

CMD ["npm", "start"]