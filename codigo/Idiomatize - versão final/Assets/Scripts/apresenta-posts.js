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
    localStorage.setItem("dados", JSON.stringify(objDados));
  }

  return objDados;
}

function imprimeDados() {
  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = leDados();

  for (i = 0; i < objDados.posts.length; i++) {
  strHtml +=`
    <div class="col">
    <div class="card" id = "${objDados.posts[i].id}">
      <img src="${objDados.posts[i].imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objDados.posts[i].titulo}</h5>
        <p class="card-text">${objDados.posts[i].conteudo.slice(0, 30)}..</p>
      </div>
    </div>
  </div>`;
  }
  tela.innerHTML = strHtml;
  clickCards();
}

imprimeDados();
let n = 0;
function imprimeFiltro(n) {
  if(n == 0){
    imprimeDados();
    return
  }
  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = leDados();
    for (i = 0; i < objDados.posts.length; i++) {
      if(objDados.posts[i].lingua == n){
  strHtml +=`
    <div class="col">
    <div class="card" id = "${objDados.posts[i].id}">
      <img src="${objDados.posts[i].imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objDados.posts[i].titulo}</h5>
        <p class="card-text">${objDados.posts[i].conteudo.slice(0, 30)}..</p>
      </div>
    </div>
  </div>`;
  }
  }
  tela.innerHTML = strHtml;
  clickCards();
}
document.getElementById("seletor").addEventListener("change",(evento) => {
  imprimeFiltro(parseInt(evento.target.value))
});

function clickCards (){
  document.querySelectorAll(".card").forEach((card) => {
  card.onclick = () => {
    window.location.href = `/post.html?id=${card.id}`
  }
})
}

function filtro(){
    var filtro = document.getElementById("textoFiltro").value;
    Pesquisar(filtro.toLowerCase());
}

function Pesquisar(filtroBusca){
    let strHtml = "";
    let objDados = leDados();
    let tela = document.getElementById("tela");
    for (let index = 0; index < objDados.posts.length; index++) {
        if(objDados.posts[index].titulo.toLowerCase().includes(filtroBusca)){
            strHtml += `<div class="col">
    <div class="card" id = "${objDados.posts[index].id}">
      <img src="${objDados.posts[index].imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objDados.posts[index].titulo}</h5>
        <p class="card-text">${objDados.posts[index].conteudo.slice(0, 30)}..</p>
      </div>
    </div>
  </div>`
        }
    }
    tela.innerHTML = strHtml;
}

//sair
const main = document.querySelector('#main')
let isLogged = localStorage.getItem('usuario_logado') !== null ? true : false
function sair(){
  if (isLogged) {
        localStorage.removeItem('usuario_logado')
        document.location.reload(true)
        //alert("funcionou");
}
}
document.getElementById("sair").addEventListener("click", sair);

document.getElementById("pesquisa").addEventListener("click", filtro);

document.getElementById("textoFiltro").addEventListener("input", filtro);