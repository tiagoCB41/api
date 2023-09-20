# Use uma imagem Node.js como base
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e yarn.lock para o contêiner
COPY package.json yarn.lock ./

# Instale as dependências com yarn
RUN yarn

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Exponha a porta em que o aplicativo Nest.js está ouvindo
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
