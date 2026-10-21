# Node 24.22.1 includes the 2026-10-21 security release
# (CVE-2026-111497 Brotli RCE, TLS hostname bypasses).
# https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
FROM node:24.22.1-slim

ENV NODE_ENV=production

WORKDIR /app

## Copy package.json and package-lock.json before copy other files for better build caching
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./ ./

RUN npm install

RUN ls -l

CMD ["npm", "start"]