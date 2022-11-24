
#Build Steps
FROM node:16-alpine as build-step

RUN mkdir /appregiones
WORKDIR /appregiones
RUN npm install -g @angular/cli@14.2.0
COPY package.json /appregiones
RUN npm install
COPY . /appregiones

RUN npm run build -- --configuration production

#Run Steps
FROM nginxinc/nginx-unprivileged  
RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
###RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist /usr/share/nginx/html

EXPOSE 8081:8081
CMD ["nginx", "-g", "daemon off;"]


