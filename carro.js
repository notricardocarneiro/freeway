//Variavel do Carro
//Lista Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let wCarros = 50;
let hCarros = 40;
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

function mostraCarro(){
    for (let i=0 ; i < imagemCarros.length ; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
    }
}

function movimentaCarro(){
    for (let i=0 ; i < imagemCarros.length ; i++){
  xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialCarro(){
  for (let i=0 ; i <imagemCarros.length ; i++){
  if (passouTodaTela(xCarros[i])){
    xCarros[i]=600;
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -50
}





