# Arquitetura do projeto

## :earth_americas: Pacotes instalados no projeto

+ npm --------- Comando de instalação ` npm init -y` :heavy_check_mark:
+ express ---- Comando de instalação `npm stall express` :heavy_check_mark:
+ body-parse --------- Comando de instalação `npm install body-parse` :heavy_check_mark:
+ nodemon --------- Comando de instalação `npm install --save-dev nodemon` :heavy_check_mark:
+ mysql2 --------- Comando de instalação `npm install mysql2` :heavy_check_mark:
+ sequelize ------ Comando de instalação `npm install sequelize sequelize-cli path` :heavy_check_mark:
+ ESLint --------- Comando de instalação `npm init @eslint/config` :heavy_check_mark:
+ criando um modelo --------- Comando de instalação `npx sequelize-cli init` :heavy_check_mark:

+ npx eslint ./api --fix

## Comando para interagir com o banco de dados

+ comando para subir o mysql  ------ ``sudo mysql -u root -p`` :heavy_check_mark:
+ comando para criar uma tabela  ------ ``create database nome_da_tabela`` :heavy_check_mark:
+ comando para criar um modelo  ------ 
``````
npx sequelize-cli model create --name Pessoas --attributes nome:string,ativo:boolean,em
ail:string,role:string

``````


## Conceituação

### O que é um ORM?

O ORM (Object-Relational Mapping) funcionam para facilitar o cotidiano de desenvolvimento. Dessa forma o Sequelize suporta diversos bancos de dados relacionais como PostgreSQL, MySQL, SQLite e MSSQL. Com o Sequelize, é possível mapear objetos do JavaScript para tabelas do banco de dados e realizar operações de CRUD (Create, Read, Update, Delete) utilizando apenas JavaScript, sem a necessidade de escrever queries em SQL.


## metodo associate

## Normalização de tabela

Alguns jeitos de criar tabelas funcionam melhor do que outros, quando falamos de performance de banco, repetição desnecessária de informações, etc. O processo de otimizar as tabelas de acordo com a necessidade do negócio é o que chamamos de normalização.

## Migração

Acontece quando nós fazemos a migração de dados de uma plataforma para a outra, exemplo disso são trocas de tipos de bancos. A migração em ORM se refere a alterações incrementais que podem ser rastreadas , como se fosse a linha do tempo de commits no guit por exemplo.

