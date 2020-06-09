# 01

# Descrição

O desafio consiste em desenvolver uma API em NodeJS para gerenciar jogos de baralho.

Todos os jogos gerenciados por essa API devem começar com a criação de um baralho. Para isso, deve-se chamar a API e informar a quantidade de baralhos que deseja no jogo. Cada baralho deve seguir o modelo francês de 52 cartas distribuídas em 4 naipes. Essas cartas devem ser embaralhadas e o identificador do baralho retornado na resposta da API. Usando esse identificador, pode-se acessar as demais capacidades da API:

Comprar cartas

A API deve receber o número de cartas que deve ser retirada do topo do baralho e retornar essas cartas na resposta. Além disso, deve-se retornar o número de cartas restantes no jogo.

Reembaralhar as cartas

Todas as cartas restantes devem ser reembaralhadas e a API deverá retornar o número de cartas restantes.

Devolver uma carta ao baralho

Deve-se informar as cartas que serão colocadas de volta no baralho e a posição (em cima do baralho, em baixo ou se será embaralhada no meio). Essa API também deve retornar o número de cartas restantes.

## Requisitos

A API deve ser desenvolvida em Node.JS
O estado de cada jogo deve ser armazenado em um banco de dados
Para rodar a aplicação e banco de dados deve-se utilizar o docker e/ou docker-compose
A API deverá conter testes automatizados para o que for necessário
Disponibilizar o código em um repositório no Github
É permitido adicionar bibliotecas terceiras no projeto

# Solução

Rodar o projeto:
```shel
docker-compose up -d
```

Intalação de dependências:
```shel
npm install
```

Testes:
```shel
npm run test
```

Documentação de uso da API:   
http://eptaccio.dev/01
