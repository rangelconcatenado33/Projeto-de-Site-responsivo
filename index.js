main = () => {
    /*Estes códigos são responsáveis pela mudança de cor 
    do botao WhatsApp, mediante ações de entrada e saída do mouse
    e toque na tela*/
    corDeEntrada = 'white'

    corDeSaida = 'greenyellow'

    var botaoWhastApp = window.document.querySelector("#img1")
    
    botaoWhastApp.addEventListener('mouseenter', function () {
        
        botaoWhastApp.style.backgroundColor = corDeEntrada

    });

    botaoWhastApp.addEventListener('mouseleave', function () {
        
        botaoWhastApp.style.backgroundColor = corDeSaida
    })

    botaoWhastApp.addEventListener('touchmove', function () {
        
        botaoWhastApp.style.backgroundColor = corDeEntrada
    })

    //Códigos para mudar o Style do Botao FaceBoock, com eventos//

    const botaoFaceBoock = window.document.querySelector("#img2")
    botaoFaceBoock.addEventListener('mouseenter', function () {
        
        botaoFaceBoock.style.backgroundColor = corDeEntrada

    })

    botaoFaceBoock.addEventListener('mouseleave', function () {
        botaoFaceBoock.style.backgroundColor = corDeSaida
    })

    botaoFaceBoock.addEventListener('touchmove', function () {

        botaoFaceBoock.style.backgroundColor = corDeEntrada
    })
    //Códigos para mudar o Style do Botao Call, com eventos//

   const callButton = window.document.querySelector("#img3")
   callButton.addEventListener('mousemove', function () {
    
    callButton.style.backgroundColor = corDeEntrada
   })

   callButton.addEventListener('mouseleave', function () {

        callButton.style.backgroundColor = corDeSaida

   })

   callButton.addEventListener('touchmove', function () {

        callButton.style.backgroundColor = corDeEntrada
   })
   }
main()

main2 = function () {
    const botaoMenu = window.document.querySelector("#BotaoMenuToggle")

   botaoMenu.addEventListener('click', function () {
        botaoMenu.style.backgroundColor = "white"
   })

   botaoMenu.addEventListener('mouseleave', function () {

        botaoMenu.style.backgroundColor = corDeSaida
   })

   botaoMenu.addEventListener('touchmove', function () {
    
    botaoMenu.style.backgroundColor = corDeEntrada

})
    botaoMenu.addEventListener('touchend', function () {
        
        botaoMenu.style.backgroundColor = corDeSaida
    })

}

main2()
/*Códigos usados para a criação de anuncios dinâmicos*/

anunciosDinamicos = function () {

    const anuncio = window.document.getElementById("anuncio")


    terceiroAnuncio = function () {
        
       pausa2 =  function () {
            
        anuncio.innerText = "Divulgue sua marca com a gente! Tenha um site com assistente virtual"

        }

        setTimeout(pausa2,2000)
    }

    segundoAnuncio = function () {
       
        anuncio2 = "Então nos contate e faça o seu orçamento"

        pausa1 = function () {
            
            anuncio.innerText = anuncio2
        }

        setTimeout(pausa1,2000)

    }
    
    primeiroAnuncio = function () {
        
        pausa = function () {
            anuncio.innerText = "Quer um site para a sua marca ou negócio?"  
        } 

        pausa()
    } 

    primeiroAnuncio()

    setTimeout(segundoAnuncio,2000)

    setTimeout(terceiroAnuncio,4000)
}

setInterval(anunciosDinamicos, 10000)

/*Código para a Criação do astronauta flutuante*/

astronautaFlutua = function () {
    
    astronauta = window.document.querySelector("#imagemDeFundo")
    
    subir = function () {
        
        astronauta.style.marginTop = "-10%"
    }

    descer = function () {
        
        astronauta.style.marginTop = "10%"
    }

    subir()

    setTimeout(descer,5000)
}

setInterval(astronautaFlutua,10000)

//Esse Código faz animação no texto "Mais"
animacaoChamativa = function () {
    
    const text = window.document.querySelector("#titulo2")

    aumentarText = function () {

        aumentarText2 = function () {
            text.style.fontSize = "50px"
        }
        aumentarText2()
    }

    textNormal = function () {

        textNormal2 = function () {

            text.style.fontSize = "20px"  
        } 
       setTimeout(textNormal2,3000)
    }
    textNormal()

    setTimeout(aumentarText,6000)
}

setInterval(animacaoChamativa, 9000)

//Código da cor do link de redirecionamento de página
corDosLinks = function () {
    const documento = window.document
    const botaoNextPage = window.document.querySelector("#a1")
    
    documento.addEventListener('load', function () {
        
       botaoNextPage.style.color = "greenyellow"
}   
    )   
}  

corDosLinks()
