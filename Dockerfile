FROM node:fermium-alpine3.13

ENV APP_ENV production
ENV NEXT_PUBLIC_APP_ENV production
ENV NEXT_PUBLIC_API_HOST_URL https://dev-api.the-hat-pack.com/v1/
ENV NEXT_PUBLIC_APP_URL http://the-hat-pack.com
ENV API_PORT 3000
ENV NEXT_PUBLIC_API_PORT 3000

# Create app directory
RUN mkdir -p /web-page
WORKDIR /web-page

# Installing dependencies
COPY package.json /web-page/
COPY yarn.lock /web-page/
RUN yarn install --production

# Copying source files
COPY . /web-page

# Building app
RUN yarn run build
EXPOSE 3000

# Running the app
CMD ["yarn", "start"]
