# Informações do Projeto
`Idiomatize`  

`Ciência da Computação`

## Participantes

> Os membros do grupo são: 
> - Gabriel Bruno Borges
> - Isabela França Prates 
> - Tulio Resende Melgaço 

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

No nosso projeto focamos em estudar a fundo o problema de estudar uma nova língua, quem sente essa dor, o porquê dessa dor, como é possivel amenizar essa dor e o que as pessoas gostariam de ter como ferramenta para auxilia-las. Assim, estamos desevolvendo uma solução, carinhosamente chamada de "Idiomatize", para que quem enfrenta essa questão de sofrer para aprender uma língua seja amparado.

## Problema

A cada dia que passa o mundo se torna mais e mais globalizado, tendo isso em vista muitas pessoas se veem em um cenário no qual saber uma única língua é insuficiente, seja por oportunidades no mercado de trabalho, sonho de morar fora, comunicar com pessoas de outros países, consumir conteúdo em outra língua, viajar, entre outras várias coisas. Ademais, quem que não falam inglês e desejam aprender uma língua (ex Mandarim) não encontram nenhum material traduzido para estudar, tornando quase impossível esse processo de aprendizagem. Sem falar que, dependendo da língua, mesmo sendo fluente em inglês é extremamente difícil encontrar bons materiais. Por fim, muitas dessas pessoas não tem como pagar financeiramente para ter acesso a um ensino bom ou recursos de qualidade.

## Objetivos

O objetivo do nosso grupo é desenvolver um software que facilite o aprendizado de linguas para quem tem interesse ou necessita aprender um novo idioma. Temos como foco a criação de algo que possa ser acessível a todos, e que os usários tenham como exercitar o aprendizado em qualquer lugar e a qualquer momento de forma simples, prática, mas ao mesmo tempo eficiente. Vale enfatizar que pretendemos dar luz a um projeto dinâmico, tendo em vista que durante entrevistas com possíveis futuros usúarios averiguamos que o maior empecilho para o aprendizado de um novo idioma é a falta de tempo, que se faz cada vez mais frequente no atual mundo globalizado.

## Justificativa

Nós escolhemos este tema justamente por que achamos que é algo muito importante tanto na formação acadêmica de qualquer pessoa quanto na vida dela, é um assunto muito importante e queremos ajudar como resolvê-lo.
O objetivo do nosso grupo é desenvolver um software que facilite o aprendizado de linguas para quem tem interesse ou necessita aprender um novo idioma. Temos como foco a criação de algo que possa ser acessível a todos, e que os usários tenham como exercitar o aprendizado em qualquer lugar e a qualquer momento de forma simples, prática, mas ao mesmo tempo eficiente.
A cada dia que se passa a nessecidade de aprender novas linguas aumenta mais, sendo por qualquer motivo, a vontade de aprender ou por que precisa aprender, e ja que o nosso problema é "Aprender Linguas" logo identificamos nosso publico alvo, que seriam pessoas que querem ou precisam aprender línguas, pessoas que estão insatisfeitas com as ferramentas que usam para aprender línguas, alunos que praticam o estudo de outras linguas, os professores que irão aprender para depois ensinar para outras pessoas, pessoas que irão mudar de país e precisam conhecer uma nova lingua, seja ela qual for e é claro as Instituições de ensino.
Nossa fonte e onde nosso trabalho foi baseado são em entrevistas com nosso público alvo e conversas, pois eles são a melhor fonte que podemos ter sobre nosso problema!

## Público-Alvo
Nosso publico alvo são pessoas de qualquer idade, que sabem acessar sites e que querem, precisam ou já estão aprendendo outras línguas. Assim pessoas que estão insatisfeitas com as ferramentas que usam para aprender línguas, alunos que praticam o estudo de outras linguas, pessoas que buscam novas oporunidades no emprego ou na faculdade e pessoas que irão mudar de país são nosso foco para esse trabalho.

![image](https://user-images.githubusercontent.com/90773483/191873944-93004095-72b7-415f-81fd-e6478c858800.png)


# Especificações do Projeto

## Personas e Mapas de Empatia

![image](https://user-images.githubusercontent.com/113730402/191875415-fc8945ae-ba4e-4c64-9ae2-418a96b155d0.png)
![image](https://user-images.githubusercontent.com/113730402/191875443-c0df3e38-29df-49bd-a67e-dc21a45a9260.png)
![image](https://user-images.githubusercontent.com/113730402/191875457-4199a330-40eb-40b4-bda8-a62038820094.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Treinar minha escuta na língua     | Ser capaz de ter uma comunicação plena |
|Usuário do sistema  | Interagir com outras pessoas       | Engajar no estudo e compartilhar coisas|
|Usuário do sistema  | Ver minha frequencia no site       | Me organzar melhor e ter disciplina    |
|Usuário do sistema  | Fazer questões para me testar      | Ver se estou aprendendo                |
|Usuário do sistema  | Aprender sobre as culturas         | Facilitar a troca internacional        |


>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir a publicação de posts para praticar a escrita | ALTA | 
|RF-002| Acesso via login   | ALTA |
|RF-003| Permitir que o usuário filtre as postagens pela língua do conteúdo   | MÉDIA |
|RF-004| Permitir que o usuário verifique sua aprendizagem com quiz   | MÉDIA |
|RF-005| Permitir que o usuário pesquise posts de tema de seu interesse   | MÉDIA |
|RF-006| Permitir que o usuário veja o post em uma tela de detalhes   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ter uma interface amigável | ALTA | 
|RNF-002| O site deve  funcionar em todos os dispositivos (celular, pc, tablet) | ALTA | 
|RNF-003| O site deve  funcionar de forma rápida (não demorar a carregar) |  MÉDIA | 
|RNF-004| O site deve dar segurança no login através do uso obrigatório de senha |  MÉDIA | 
|RNF-005| O site deve ser fácil de usar|  MÉDIA | 
|RNF-006| O site deve ter fácil navegação com uso de navbar |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03|	O projeto deve respeitar as datas de entrega         |
|04|	Não devera ter ajuda de terceiros no projeto         |


# Projeto de Interface

## User Flow

![image](https://user-images.githubusercontent.com/113730402/191881404-88604584-e225-4a8b-8ac0-04e09d7ddd74.png)

## Wireframes

![16](https://user-images.githubusercontent.com/98985632/192395747-3931fd46-7bb6-4e5d-9755-956f05e9ada5.png)
![17](https://user-images.githubusercontent.com/98985632/192395750-f43eeb28-18fb-49aa-979a-9dd70b8991c5.png)
![18](https://user-images.githubusercontent.com/98985632/192395754-6fe38600-7a61-43fa-bf51-791cf7a9e67a.png)
![19](https://user-images.githubusercontent.com/98985632/192395758-76de016d-2c71-40c5-ac31-8f357b4c63b2.png)
![20](https://user-images.githubusercontent.com/98985632/192395760-14357a03-c061-4694-a556-cd2d802209ee.png)
![155](https://user-images.githubusercontent.com/98985632/192395761-619e495f-efb3-4288-97fb-97945a1ea393.png)
![166](https://user-images.githubusercontent.com/98985632/192395765-204f3b33-6007-4aa5-bbc0-94ed0ae2d5b5.png)
![177](https://user-images.githubusercontent.com/98985632/192395770-52284646-d7b0-47fc-94ee-8225d2d6ac88.png)
![13](https://user-images.githubusercontent.com/98985632/192395772-374448ef-58dd-4c16-bf5e-f8a522179a23.png)
![14](https://user-images.githubusercontent.com/98985632/192395775-9ba2333f-4f4e-4371-9290-86d2af2c997b.png)
![15](https://user-images.githubusercontent.com/98985632/192395743-ea85b192-1718-4c1d-8bbe-5b249cf9d52f.png)



# Metodologia


O grupo resolveu dividir as tarefas de forma que nenhum membro do grupo fique sobrecarregados. Estipulamos datas de entrega e analisamos em grupo as entregas. Assim, para fazer isso usamos a metodologia Scrum, e nos reunimos ao longo da semana para ver o progresso de cada um. Demos preferencia para ferramentas que todos podiam acessar juntos, como o Miro, o Canva e o GitHub.


## Divisão de Papéis

- Github -- Gabriel e Túlio
- Wireframe -- Isabela
- Miro -- Todos


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/welcomeonboard/MzFTTEU2SGF2MWxoTnNLNWxESkZEVkc4Y0tKbWozT2lLcVh1dlk5aHI5ODQ1cTBGT29LMWd4VG9jeldncnF6NnwzNDU4NzY0NTMzMjc3NDAyODUwfDI=?share_link_id=136255874979 | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20222-05-aprender-linguas | 
|Hospedagem do site | Repl.it |  https://idiomatize.isabelap23.repl.co | 
|Wireframe | Canvas |  https://www.canva.com/design/DAFM4NTd_34/8gL2Zb6N7VsakahJSVFmHw/view?utm_content=DAFM4NTd_34&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu |
|Editor de código | Visual Studio Code | https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiirJib5eL7AhUKppUCHQDIDrYQFnoECAkQAQ&url=https%3A%2F%2Fcode.visualstudio.com%2F&usg=AOvVaw15O90sm1ios8AUpw56hCml |

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

Nosso projeto de solução consiste em um softaware, mais precisamente um website, no qual usa requisitos funcionais e não funcionais (Dinâmica Javascript, Apresentação de informação e Cadastros de informações). Assim, com essa ferramenta visamos resolver o problema anteriormente apresentado.

## Tecnologias Utilizadas

Para implementar nossa solução, diversas ferramentas foram usadas. O projeto foi desenvolvido majoritariamente no computador e as linguagens usadas foram HTML, CSS e JavaScript. Para programar as IDE's utilizadas foram o Visual Studio Code e o Repl.it. Para adquirir o conhecimento necessário para a Dinâmica Javascript, Apresentação de informação e Cadastros de informações o grupo assistiu as aulas da disciplina DIW (Desenvolvimento de interface web), e os aulões da disciplina TIAW (Trabalho Interdisciplinar Aplicações Web). A seguir está uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


![image](https://user-images.githubusercontent.com/113730402/191881404-88604584-e225-4a8b-8ac0-04e09d7ddd74.png)
![16](https://user-images.githubusercontent.com/98985632/192395747-3931fd46-7bb6-4e5d-9755-956f05e9ada5.png)
![17](https://user-images.githubusercontent.com/98985632/192395750-f43eeb28-18fb-49aa-979a-9dd70b8991c5.png)
![18](https://user-images.githubusercontent.com/98985632/192395754-6fe38600-7a61-43fa-bf51-791cf7a9e67a.png)
![19](https://user-images.githubusercontent.com/98985632/192395758-76de016d-2c71-40c5-ac31-8f357b4c63b2.png)
![20](https://user-images.githubusercontent.com/98985632/192395760-14357a03-c061-4694-a556-cd2d802209ee.png)
![155](https://user-images.githubusercontent.com/98985632/192395761-619e495f-efb3-4288-97fb-97945a1ea393.png)
![166](https://user-images.githubusercontent.com/98985632/192395765-204f3b33-6007-4aa5-bbc0-94ed0ae2d5b5.png)
![177](https://user-images.githubusercontent.com/98985632/192395770-52284646-d7b0-47fc-94ee-8225d2d6ac88.png)
![13](https://user-images.githubusercontent.com/98985632/192395772-374448ef-58dd-4c16-bf5e-f8a522179a23.png)
![14](https://user-images.githubusercontent.com/98985632/192395775-9ba2333f-4f4e-4371-9290-86d2af2c997b.png)
![15](https://user-images.githubusercontent.com/98985632/192395743-ea85b192-1718-4c1d-8bbe-5b249cf9d52f.png)

## Arquitetura da solução

![diagrama tiaw](https://user-images.githubusercontent.com/113730402/205507983-7155ed71-c820-4cd5-8b50-3905ebad410d.png)



# Avaliação da Aplicação

Os cenários de testes utilizados foram: Cadastro do usuário, login com conta cadastrada, funcionalidade dos quizes, vizualização de conteúdo, funcionalidade dos itens no menu do site.

## Plano de Testes

> 1- Teste de cadastro do usuário: O usuário deve conseguir realizar seu cadastro no site, e o site deve salvar suas informações para que o ligin possa ser realizado posteriormente.
> 2- Login com conta cadastrada: O usuário deve conseguir realizar seu login utilizando os dados cadastrados anteriormente.
> 3- Funcionalidade dos quizes: O usuário deve conseguir realizar os quizes do site sem dificuldades relacionadas a interface.
> 4- Vizualização de conteúdo: O usuário deve ser capaz de vizualizar todos os conteúdos disponíveis a ele sem restrições e sem maiores dificuldades para encontrrar o conteúdo desejado.
> 5- Funcionalidade dos itens do menu do site: Todas as opções de menu devem ser utilizaveis e oferecerem a informação necessária ao usuário.


## Registros de Testes

Além dos testes já feitos nas entregas da Sprint 2 e 3 de cada membro do grupo, também testamos o que foi citado acima. Os testes obtiveram sucesso, porém alguns erros foram detectados durante o processo, como botões do menu que não estavam funcionando, mas agora estão. Assim, essa etapa foi fundamental para melhorar o website desenvolvido. Ademais, os testes de cada sprint também foram cruciais para fazer uma boa entrega.


# Referências

Google: "Como usar local storage" - https://warcontent.com/localstorage-javascript/
Google: "O que é user flow" - https://medium.com/7bits/fluxo-de-usuário-user-flow-o-que-é-como-fazer-79d965872534
Google: "Como usar o GitHub" - https://www.alura.com.br/artigos/o-que-e-git-github?gclid=CjwKCAiAp7GcBhA0EiwA9U0mtihRW1sMNHXeakmHtxKRGer65Ze7FTm12ajKayFe1SL0AwIF4dAp_hoC-zUQAvD_BwE
Google: "Dinâmicas com JavaScript" -https://www.alura.com.br/conteudo/javascript-web-paginas-dinamicas--amp?gclid=CjwKCAiAp7GcBhA0EiwA9U0mth9L5d98NLfoBFrGMYz774UXsRISVmZz5JXqS2nZR2GQ1ZSjEIhx4xoCAmYQAvD_BwE
Google: "Como definir personas" - https://pt.semrush.com/blog/o-que-e-persona/?kw=&cmp=BR_POR_SRCH_DSA_Blog_Core_BU_PT&label=dsa_pagefeed&Network=g&Device=c&utm_content=485541499897&kwid=dsa-897840244969&cmpid=9874598594&agpid=102029997244&BU=Core&extid=&adpos=&gclid=CjwKCAiAp7GcBhA0EiwA9U0mtlfRt2jgzmzdf8XzdrtJsxrS6UY5LLKID8SyCwvJhOqZsUw5fpkkpBoCFPAQAvD_BwE
