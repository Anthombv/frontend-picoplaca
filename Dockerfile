# Imagen base de Node.js para construir la aplicación
FROM node:16-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación Angular para producción
RUN npm run build

# Segunda etapa: Servidor web para alojar la aplicación
FROM nginx:alpine

# Copia los archivos compilados al servidor Nginx
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
