# 💰 Desafio FlexPag - FrontEnd

<p align="center">
  🚧 Projeto histórico de cotação de moedas | Concluído 🚀 🚧
</p>

## 💻 Sobre o Projeto
<p>
  A aplicação trata-se de um site que tem a finalidade de consultar o histórico de cotação de moedas BRL de acordo com a data e moeda estrangeira.
  O desafio consiste em um consumo de uma API onde recebemos as informações como:
</p>

  - Sigla de moedas
  - Nome de moedas estrangeiras
  - Data de consulta
  - Valor de compra
  - Valor de venda
  - Data e hora de cotação

  Com base nestas informações, foi desenvolvido um site em Angular onde foi criado campos que recebe os seguintes valores:
  - Moeda
  - Data de inicio
  - Data Data Final
  
  Recebendo esses dados, a aplicação faz uma busca no endpoint e mostra em uma tabela com os seguintes dados:
  - Valor de compra
  - Valor de venda
  - Data e hora de cotação
  
  Foi utilizado o moment.js para formatar o campo de datas para um formato reconhecido pelo endpoint. Para validação de campos, foi utilizado o módulo FormModue para criar validações nos campos como:
  - Campo obrigatório!
  - Cores (valid e invalid)
  
  No campo abaixo, foi criado uma função que filtra os resultados na tabela, com objetivo de obter um dado expecifico.
  
  Para enviar requisição e receber resultados, foi ultilizado o Modulo HTTPCLient.
  
  ## 🎨 View
![djongaplaylist](https://raw.githubusercontent.com/ffernandescs/Desafio-FlexPag-FrontEnd/main/src/assets/img/Anima%C3%A7%C3%A3o.gif?token=GHSAT0AAAAAAB2B2IASRL6CGYJS4XAZRJJGY2N4BFQ)

## 💻 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- Angular
- Bootstrap
- HTML5
- CSS
- Moment.js
- HTTP Angular

## 🌐 Link da Aplicação 
<a href="https://coinshistory.netlify.app/" class="navbar-brand" target="_blank">
      <p>Acessar</p>
</a>

