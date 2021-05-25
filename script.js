let dino = document.querySelector('.dino');
let pontuacao = document.querySelector('.pontuacao');
pontuacao = Number();

let dinoPosition = 0;
let cactoPosition = 1350;


function comecaJogo(){
    const inicia = document.querySelector('.start')
    inicia.addEventListener('click', () =>{
        document.body.removeChild(inicia);
        constroiCacto()
        //let randomTime = Math.random() * 1000;
       // setTimeout(constroiCacto(), 100);
    })
}

function constroiCacto(){
    setTimeout(() =>{
        let cacto = document.createElement('div')
        document.body.appendChild(cacto);
        cacto.innerHTML = '<img src="imagens/cacto.png" alt="imagem cacto">'
        cacto.classList.add('cacto');
        cacto.style.left = cactoPosition + 'px';
        cactoAnda(cacto);
    }, 1000)
}
    
function cactoAnda(cacto){
    setInterval(() => {

    if (cactoPosition == dinoPosition){
        clearInterval(cactoAnda);

        const gameOver = document.createElement('p');
        document.body.appendChild(gameOver);
        gameOver.classList.add('game-over');
        gameOver.innerText = "Game Over";

        const reinicia = document.createElement('button');
        document.body.appendChild(reinicia);
        reinicia.classList.add('reinicia');
        reinicia.innerText = "Reiniciar";
        reinicia.addEventListener('click',() =>{
            window.location.reload();
        })

    }else if(cactoPosition <= 1350 && cactoPosition > -50){
        cactoPosition -=10;
        cacto.style.left = cactoPosition + 'px';
        console.log(cactoPosition);
        clearInterval();

    }else if(cactoPosition == -50){
        pontuacao += 10;
        //console.log(pontuacao);
        //cacto.remove();
        clearInterval(cactoAnda);
        console.log(document.body.childNodes)
        //document.body.removeChild(cacto);

    }
}, 30);
}

function dinoPula(){
    addEventListener("keyup", dinoMovimenta => {
        if(dinoMovimenta.keyCode === 32){
           dinoSobe();
           dinoDesce();
        }
    })
}

function dinoSobe (){
    let subida = setTimeout(() => {
        if(dinoPosition <= 149){
            dinoPosition += 150;
            dino.style.bottom = dinoPosition + 'px';
    }
}, 100)
}

function dinoDesce(){
    let descida = setTimeout(() => {
        if(dinoPosition = 149){  
        dinoPosition -= 149;
        dino.style.bottom = dinoPosition + 'px';
     }
 }, 600) 
} 

comecaJogo();
dinoPula();

