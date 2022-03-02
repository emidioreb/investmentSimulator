# Bem vindo ao Repositório do Simulador de Investimento
Aplicação desenvolvida para usuários que tem como intuito realizar uma simulação de rendimentos de acordo com o tipo de indexação e tipo de rendimento escolhido.

## Sumário
* Quem sou eu?
* O que foi desenvolvido?
* Protótipo de projeto.
* Estratégias utilizadas.
* Tecnologias e habilidades utilizadas.
* Demonstração da aplicação.
* Como acessar o projeto?
* Requisitos do projeto.
* Quais foram os principais desafios desse projeto.
* Destaque desse projeto.
* Observações sobre o projeto.

## Quem sou eu?
Olá, me chamo Emídio. Eu sou desenvolvedor Front-End React Jr. formado pela @trybe.

Eu sou aquela pessoa que sempre gostei de exercitar minha lógica. De maneira geral, eu sempre quis escolher alguma profissão que eu pudesse exercitar isso, tanto que nos meus 18 anos de idade quando eu fui escolher o curso para entrar na universidade eu escolhi engenharia mecânica por ser algo que fazia muito sentindo para mim na época.

Felizmente consegui me formar, hoje eu sou Engenheiro Mecânico formado pela UFC. No entanto, não foi algo que me completou. Eu queria buscar uma profissão que eu pudesse ter 3 coisas:
1- liberdade geográfica
2 - eu pudesse trabalhar com lógica de programação
3 - E que eu pudesse fazer a diferença na vida das pessoas.

Foi a partir daí que eu decidi me dedicar a um futuro focado em tecnologia.

## O que foi desenvolvido?
Foi construido um front-end para um Simulador de Investimentos. A aplicação permite ao usuário realizar uma simulação de rendimentos de acordo com o tipo de indexação e tipo de rendimento escolhido. O front-end deve ser construído utilizando  React e seguindo os wireframes apresentados abaixo.

## Estratégias utilizadas.
Primeiramente eu desenvolvi a aplicação no figma, que é uma software de prototipagem para interfaces, com isso eu tive mais facilidade no desenvolvimento do CSS, já que o figma disponibiliza os comandos CSS do protótipo desenvolvido. Foi usado ESlint para o melhor desenvolvimento do projeto. Eu utilizei React para o desenvolvimento da aplicação. Separei a aplicação em 5 componentes: InvestmentHeader, InvestmentSimulator, Simulator, SimulatorColumnLeft e SimulatorColumnLRight. InvestmentHeader é aonde está o título da aplicação. Simulator é parte da aplicação aonde vai ser recebidos os valores nos inputs e nos botões. Lembrando que o Simulator é o componente pai do SimulatorColumnLeft e do SimulatorColumnLRight. O SimulatorColumnLeft contém os campos de input e de botões da esquerda do simulador e o SimulatorColumnLRight contém os campos de input e de botões da direita do simulador. O InvestmentSimulator são os campos referentes do resultado da simulação. A pasta CSS está organizada dessa mesma forma. Outra estratégia utilizada foi a utilização de hooks para o compartilhamento de estado dos componentes. Assim fica mais organizado para criação dos componente e da manutenção dos próprios componentes. Após a organização das pastas e componentes eu realizei a lógica da aplicação. Após eu terminar a lógica, eu parti para o desenvolvimento da estilização da aplicação. Lembrando também que foi feita a requisição através de um fetch da api disponibilizada no projeto. Toda essa requisição esta na pasta hooks arquivo UseApiSimulation.jsx. E por fim, o desenvolvimento dos test em RTL.

## 🛠 Tecnologias e habilidades utilizadas.
- Figma para o desenvolvimento da interface.
- Desenvolvimento Front-end: JavaScript, React, css e Hooks.

## Demonstração da aplicação.
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/83843425/156385440-5823c548-e219-428c-b2a1-cf83aaf80602.gif)


## Como acessar o projeto?
1. Para API funcionar

- Clone o repositório `https://github.com/eqi-investimentos/desafio-fake-api`.
- Entre na pasta do repositório que você acabou de clonar.
- Execute `npm install` e `npx json-server db.json`. A API fica localizada em http://localhost:3000.


2. Rodando o projeto

- Clone o repositório `https://github.com/emidioreb/investmentSimulator`.
- Entre na pasta do repositório que você acabou de clonar.
- Execute `npm install` e `npm start`. A aplicação vai ficar localizada em http://localhost:3001, pois http://localhost:3000 está sendo utilizado pela API.



## Protótipo do projeto.
https://www.figma.com/file/z5XXvkLLmLDo7QfdBqr0Qr/Untitled?node-id=0%3A1

## Requisitos do projeto.
### Desenvolvimento das telas de Simulador de Investimento.
- [x] Configuração do eslint.
- [x] Desenvolvimento da aplicação no figma.
- [x] Título - "Simulador de Investimentos"
- [x] Subtítulo - "Simulador"
- [x] botões bruto e líquido com label rendimento
- [x] Campo "Aposte Inicial", apenas número é valor válido.
- [x] Campo "Prazo(em meses)", apenas número é valor válido.
- [x] Campo "IPCA(ao ano)", apenas número é valor válido.
- [x] botões "PRÉ", "PÓS" e  "FIXADO" com label "Tipos de indexação"
- [x] Campo "Aporte Mensal", apenas número é valor válido.
- [x] Campo "Rentabilidade", apenas número é valor válido.
- [x] Campo "CDI(ao ano)", apenas número é valor válido.
- [x] Botão "Limpar campos".
- [x] Botão "Simular".
- [x] Subtítulo - "Resultado Simulação"
- [x] Campo "Valor final bruto".
- [x] Campo "Alíquota do IR".
- [x] Campo "Valor pago em IR".
- [x] Campo "Valor Final Líquido".
- [x] Campo "Valor Total Investido".
- [x] Campo "Ganho Líquido".
- [x] Adição de hooks personalizados para melhor manipulação do estado da aplicação.

## Quais foram os principais desafios desse projeto ?
Principal desafio desse projeto foi o desenvolvimento dos teste(EM ANDAMENTO). Estou tendo dificuldade pois o projeto tem estado compartilhado através de hook. Então no desenvolvimento do teste eu estou tendo esse entrave, pois o teste não está conseguindo renderizar as páginas devido a esse estado compartilhado. Já estou tomando providências para resolver esse entrave, pois entendo da importância dos teste na aplicação.

## Destaque desse projeto.
A capacidade de seguir a especificação fornecida (wireframe);

## Observações sobre o Projeto.
No readme do desafio foi pedido para realizar uma validação nos inputs para validar o tipo dos campos se por ventura fosse preenchido algo sem ser número e em caso de erro mostrar uma mensagem e colocar o label em vermelho.
Eu preferi fazer de outra forma. Prefiri colocar no próprio input o type="number", assim ele já impossibilita qualquer outra entrada que não seja número. Economizando linhas de códigos e forçando o usuário preencher com números. Além disso eu coloquei um placeholder mostrando exemplos de como o valor deve ser preenchido. Dessa forma, o usuário como deve ser preenchido o campo.
Além disso, outra mudança que realizei foi na mudança da tonalidade do laranja. Prefiri usar um laranja de cor mais viva(#E64519), sendo mais atraente para o usuário.

  
