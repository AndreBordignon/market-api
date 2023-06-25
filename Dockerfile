# Use a imagem base do Node.js 14 com Alpine Linux
FROM node:18-alpine

# Define o diretório de trabalho como 'src'
WORKDIR /src/

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Executa o comando 'npm install' para instalar as dependências do projeto
RUN npm install

# Copia todo o conteúdo da pasta 'src' local para o diretório de trabalho no contêiner
COPY . .

# Executa o comando 'npm run build' para fazer a build do framework NestJS
RUN npm run build

# Define o comando de inicialização do contêiner quando for executado
CMD [ "npm", "run", "start:dev" ]
