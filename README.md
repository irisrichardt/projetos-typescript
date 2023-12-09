# Informações
Repositório feito para adicionar códigos typescript

## Instruções para criar um projeto
* Crie uma pasta para o projeto e rode os comandos abaixo no diretório raiz

### Verificar a versão do node
### `node -v`

### Criar o package.json
### `npm init`

### Instalar o typescript
### `npm i typescript`

### Criar o arquivo tsconfig.json
### `npx tsc --init`

### Alterar as linhas dentro do arquivo tsconfig.json
* "module": "ESNext",
* "outDir": "./dist",

### Criar o arquivo app.ts, adicionar os códigos que desejar e rodar o comando abaixo:
### `npx tsc`
* será gerada a pasta `dist` com o arquivo `app.js`
* IMPORTANTE: sempre que houver uma modificação, rodar este mesmo comando

### Executar um arquivo utilizando node
### `node ./dist/app.js`
* IMPORTANTE: sempre executar o arquivo gerado dentro da pasta `dist`
