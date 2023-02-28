atribuir = function () {
    var attr = window.document.querySelector("#atribuicao");

   let html = window.document

    html.addEventListener('load', function () {
        
        attr.style.color = "greenyellow"

    });
}

atribuir()

index = function () {
    var txt1 = window.document.querySelector("#option1")

    var txt2 = window.document.querySelector("#option2")

    var txt3 = window.document.querySelector("#option3")

    var botao1 = window.document.querySelector("#botao1")

    var botao2 = window.document.querySelector("#botao2")

    var botao3 = window.document.querySelector("#botao3")

    var text = window.document.querySelector("#resposta")

    txt1.addEventListener('click', function () {
        
        this.style.color = "greenyellow";
        txt2.style.color = "white";
        txt3.style.color = "white";

        botao1.style.backgroundColor = "greenyellow";
        botao2.style.background = "none";
        botao3.style.background = "none";

        text.innerText = "Sim, somos muito confiáveis, conosco você não sofrerá risco de golpe, trabalhamos limpo, não devemos nada a justiça, não há irregulariedades em nossos serviços, talvez, por nosso serviço ser barato algumas pessoas acabam achando que estamos mentindo ou que somos um 'golpe', mas não somos! Prezamos pela nossa imagem e pelos nossos clientes"
    });

    txt2.addEventListener('click', function () {
        
        this.style.color = "greenyellow";
        txt1.style.color = "white";
        txt3.style.color = "white";

        botao2.style.backgroundColor = "greenyellow";
        botao1.style.background = "none";
        botao3.style.background = "none";

        text.innerText = "Somos uma empresa focada em acessibilidade digital, cremos que a tecnologia é para todos, independentemente de cor, lingua, sexo e credo. As máquinas da rede devem englobar o mundo da diversidade e compartilhar dados sem barreiras, por isso nunca colocamos um preço fixo em nossos serviços, sempre fazemos um acordo com o cliente para fazer o melhor preço de acordo com seus recursos e necessidades"
    });    

    txt3.addEventListener('click', function () {
        
        this.style.color = "greenyellow";
        txt1.style.color = "white";
        txt2.style.color = "white";

        botao3.style.backgroundColor = "greenyellow";
        botao1.style.background = "none";
        botao2.style.background = "none";

        text.innerText = "Não! Se você procura uma empresa que oferece serviços de sites com animações que além de interagir com o seu usuário ainda mostram seu produto, então crê no nosso slogam e conte com a gente! Nosso foco são funcionalidades, interações e animações no HTML, à preço baixo."
    });    
}

index()