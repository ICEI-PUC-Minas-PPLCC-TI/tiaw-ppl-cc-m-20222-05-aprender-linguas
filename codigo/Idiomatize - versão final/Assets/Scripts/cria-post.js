function leDados() {
  let strDados = localStorage.getItem("dados");
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      posts: [
        {
          id: 0,
          titulo: "Planets!",
          conteudo: "Have you ever wondered what it would be like to live on the moon? What about Mars, or Venus or Mercury? We sure have and that's why we decided to find out what it might be like to live on other worlds in our solar system, from Mercury to Pluto and beyond in a new, weekly 12-part series. For this series, written by Space.com contributor Joseph Castro, we wanted to know what the physical sensation of living on other worlds would be like: What would the gravity be like on Mercury; How long would your day be on Venus?",
          imagem:
            "https://img.freepik.com/vetores-premium/conjunto-de-sistema-solar-de-planetas-dos-desenhos-animados-planetas-do-sistema-solar-do-sistema-solar-com-nomes_87946-585.jpg?w=2000",
          lingua: 1,
        },
        {
          id: 1,
          titulo: "Movie night!",
          conteudo: "Yesterday I went to my grandmother's house and together we watched 'Physical'. And I started to wonder, what would our life be like if no one ever invented movies. So I imagined what would the world be without cinemas, actors, sets, hollywood. And now I wanna ask you: how different do you think the world would be?",
          imagem:
            "https://bhaz.com.br/wp-content/uploads/2016/09/Interno_SalaCinema-2.jpg",
          lingua: 1,
        },
        {
          id: 2,
          titulo: "Learning to cook",
          conteudo: "I learned how to make fried eggs today, it was a super weird experience. First, I almost set everything on fire, I accidently set the stove on insted of the cook top, and when I created the sparkle EVERYTHING almost exploded. Not a fun expirience. But, at the end of the day, I was able to follow the whole recipy and make a decent meal! I'm happy to share this new skill with you now!! What about you Idiomatize fellas, do YOU know how to make an egg",
          imagem:
            "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-ovo-frito.jpg",
          lingua: 1,
        },
        {
          id: 3,
          titulo: "奥运会",
          conteudo: "大家好！ 今天我没有太多消息，但我正在看奥运会，昨天我们赢得了金牌！  “Fadinha”获得银牌，我很喜欢看！ 再见",
          imagem:
            "https://static.poder360.com.br/2021/08/rayssa-prata-toquio.jpeg",
          lingua: 3,
        },
        {
          id: 4,
          titulo: "Faculdade",
          conteudo: "Oi pessoal! Hoje, para práticar meu português vim falar da minha faculdade. Eu estou fazendo Museologia e tenho aprendido muito sobre museus e história! E vocês? Estão na faculdade?",
          imagem:
            "https://clickmuseus.com.br/wp-content/uploads/2021/11/Design-sem-nome-10-1024x538.jpg",
          lingua: 2,
        },
      ],
    };
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem("dados", JSON.stringify(dados));
}

function incluirPost() {
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let strTitulo = document.getElementById("campoTitulo").value;

  if (strTitulo === "") {
    alert("Faltou o título");
    return;
  }

  if (strTitulo.length > 16) {
    alert("Título muito grande");
    return;
  }

  let strConteudo = document.getElementById("campoConteudo").value;
  if (strConteudo === "") {
    alert("Faltou o conteudo");
    return;
  }
  let strImagem = document.getElementById("campoImagem").value;
  if (strImagem === "") {
    strImagem =
      "https://bibliomundi.com/blog/wp-content/uploads/Dicas-para-escrever-um-diario-fict%C3%ADcio-650x427.jpg";
  }
  let id = 0;
  if (objDados.posts.length > 0) {
    id = objDados.posts[objDados.posts.length - 1].id + 1;
  }

  let lingua = document.getElementById("campoLingua").value;
  if(lingua == "Língua..."){
    alert("Selecione uma língua");
    return;
  }
  
  let novoPost = {
    id: id,
    titulo: strTitulo,
    conteudo: strConteudo,
    imagem: strImagem,
    lingua: lingua,
  };
  objDados.posts.push(novoPost);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function deletaDado(id) {
  // Ler os dados do localStorage
  let objDados = leDados();
  let index = parseInt(id.replace("deletar-", ""));
  objDados.posts = objDados.posts.filter((post) => {
    return post.id != index;
  });

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function addEventBotaoDeletar() {
  let allDeletar = document.querySelectorAll(".deletar");
  for (let i = 0; i < allDeletar.length; i++) {
    allDeletar[i].onclick = () => {
      deletaDado(allDeletar[i].id);
    };
  }
}

function alteraDado(id) {
  // Ler os dados do localStorage
  let objDados = leDados();
  let novoTitulo = prompt("Digite o novo título: ");
  if (novoTitulo.length > 16) {
    alert("Título muito grande");
    return;
  }
  let novoConteudo = prompt("Digite o novo conteúdo: ");
  let index = parseInt(id.replace("alterar-", ""));
  let posicao = -1;
  for (let i = 0; i < objDados.posts.length; i++) {
    if (objDados.posts[i].id == index) {
      posicao = i;
      break;
    }
  }

  if (novoTitulo != "") {
    objDados.posts[posicao].titulo = novoTitulo;
  }
  else {
    objDados.posts[posicao].titulo = objDados.posts[posicao].titulo;
  }
  if (novoConteudo != "") {
    objDados.posts[posicao].conteudo = novoConteudo;
  }
  else {
    objDados.posts[posicao].titulo = objDados.posts[posicao].titulo;
  }

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function addEventBotaoAlterar() {
  let allAlterar = document.querySelectorAll(".alterar");
  for (let i = 0; i < allAlterar.length; i++) {
    allAlterar[i].onclick = () => {
      alteraDado(allAlterar[i].id);
    };
  }
}

function imprimeDados() {
  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = leDados();

  for (i = 0; i < objDados.posts.length; i++) {
    strHtml += `
        <article>
        <div class="row" style="margin-bottom: 35px; background-color: rgba(0, 0, 0, 0.2);">
        <div class="row">
                            <div class="col-xs-12 col-12 col-md-6">
                                <img style="width: 100%; height: 100%;"src="${objDados.posts[i].imagem}">
                            </div>
                            <div class="col-xs-12 col-12 col-md-6">
                                <h1 disabled="">${objDados.posts[i].titulo}</h1>
                                <textarea style="width: 100%; resize: none; height: 80%;"disabled="">${objDados.posts[i].conteudo}</textarea>

                            </div>
        </div>

<div style="margin-top: 40px">
  <button style="margin-bottom: 20px;" class="btn btn-primary deletar" id="deletar-${objDados.posts[i].id}" type="button"><i class="fa-solid fa-trash"> </i></button>
        <button style="margin-bottom: 20px;" 
 class="btn btn-primary alterar" id="alterar-${objDados.posts[i].id}" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
</div>

         
        </div>
        </article>
        `;
  }

  tela.innerHTML = strHtml;
  addEventBotaoDeletar();
  addEventBotaoAlterar();
}

// Configura os botões
document.getElementById("publicar").addEventListener("click", incluirPost);