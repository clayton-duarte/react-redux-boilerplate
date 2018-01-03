# Visão Geral

Projeto [nome do seu projeto] responsável por [o que seu projeto faz?].

## Responsáveis

- Seu Nome <seu@email.com>
- Colega de Time <colega@email.com>

## Rodando o projeto

- `npm start`: inicia o servidor em desenvolvimento.

## Rodando os testes

- `npm test`: roda os testes.

## Preparando para produção

- `npm run build`: prepara um pacote otimizado para produção.

## Gerenciando variáveis de ambiente

Renomeie o arquivo .env.example para .env, as variáveis criadas com o prefixo REACT_APP automaticamente podem ser acessadas de qualquer lugar da aplicação via process.env.REACT_APP_SECRET_CODE_EXAMPLE. 
Todo e qualquer conteúdo sensível como chaves de acesso a aplicação, banco de dados, etc, devem ser armazenados neste arquivo que não deve ser commitado.
Por padrão, nesta versão inicial, estamos considerando apenas o ambiente de desenvolvimento e o deploy para produção, mas podem ser criados novos environments conforme a necessidade.

## Urls

### Homologação

- [http://url.homologacao](http://url.homologacao)

### Produção

- [http://url.producao](http://url.producao)

## Servidores de aplicação

### Homologação

- servidor-de-homologacao

### Produção

- servidor-de-producao-1
- servidor-de-producao-2
- servidor-de-producao-3
- servidor-de-producao-4
- servidor-de-producao-5

## Jenkins

- [Deploy da Master](http://jenkins/job/...)
- [Deploy de releases](http://jenkins/job/...)
- [Restart da aplicação](http://jenkins/job/...)