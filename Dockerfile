# Step 1: Build the static files
FROM node:18-alpine3.17 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN npm run export  # outputs static site to /out by default

# Step 2: Serve with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

