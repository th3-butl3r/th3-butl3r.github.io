# Dockerfile para desarrollo y producción
FROM node:18-alpine as base

# Instalar dependencias necesarias
RUN apk add --no-cache git

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY bun.lockb ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 8080

# Comando para desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]