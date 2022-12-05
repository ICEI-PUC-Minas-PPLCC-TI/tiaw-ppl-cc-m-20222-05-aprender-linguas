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