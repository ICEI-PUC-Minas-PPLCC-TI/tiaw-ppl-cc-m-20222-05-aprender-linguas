let url = new URL(window.location.href)
let id = url.searchParams.get("id")
let tela = document.getElementById("tela");
let conteudo = document.getElementById("conteudo");
let strHtml = "";

let Objpost = JSON.parse(localStorage.getItem("dados")).posts
let post = Objpost.filter((post) => {
  if(post.id == id)
    return post;
})[0]
                                  
strHtml +=`
<!-- Header - set the background image for the header in the line below-->
        <header class="py-5 bg-image-full" style="background-image: url('${post.imagem}')">
            <div class="text-center my-5">
                <h1 class="text-white fs-3 fw-bolder">${post.titulo}</h1>
            </div>
        </header>
        <!-- Content section-->
        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>${post.titulo}</h2>
                        <p class="lead">${post.conteudo}</p>
                        <!--<p class="mb-0">${post.conteudo}</p>-->
                    </div>
                </div>
            </div>
        </section>
        <!-- Image element - set the background image for the header in the line below
        <div class="py-5 bg-image-full" style="background-image: url('${post.imagem}')">-->
            <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!
            <div style="height: 20rem"></div>
        </div>-->
        `;
tela.innerHTML = strHtml;

//document.querySelector("h1").innerHTML = post.titulo
//document.querySelector("img").innerHTML = post.imagem
