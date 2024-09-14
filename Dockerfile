# Use a imagem base
FROM node:16

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do projeto
COPY package*.json ./
RUN npm install
COPY . .

# Exponha a porta que o backend vai usar
EXPOSE 3333

# Comando para iniciar o backend
CMD [ "npm", "start" ]
