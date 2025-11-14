# FROM node:20-alpine as build-stage
FROM node:lts-alpine
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY ./package.json /app
# RUN cd /app

RUN npm install

# Copy the rest of the application code
COPY . /app

EXPOSE 8083

CMD [ "npm","run","serve:dev" ]
# Build the Vue.js application for production
# RUN npm run serve:dev

# # Stage 2: Serve the built application with Nginx
# FROM nginx:alpine as production-stage

# # Copy the built Vue.js application files from the build-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# # Copy a custom Nginx configuration (if needed)
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose the port Nginx will listen on
# EXPOSE 80

# # Command to start Nginx
# CMD ["nginx", "-g", "daemon off;"]