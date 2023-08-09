//Variavel do Ator
let xAtor=100;
let yAtor=366;
let wAtor=30;
let hAtor=30;
let colisao = false;
let meusPontos = 0;

function mostraAtor (){
    image(imagemDoAtor, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
  
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverEsquerda()){
    xAtor -=3;
    }
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverDireita()){
    xAtor +=3;
    }
  }

}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0 ; i < imagemCarros.length ; i++) {
    colisao = collideRectCircle (xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
  if (colisao){
    voltaAtorParaPosicaoInicial();
    somDaColisao.play();
    if (sePontosMaiorQueZero()){
    meusPontos -= 1;
      }
    }
  }
}

function sePontosMaiorQueZero(){
  return meusPontos > 0
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
  xAtor= 100;
}

function incluiPontos(){
  textAlign (CENTER);
  fill (255,255,0);
  textSize(25);
  text (meusPontos, width / 5, 27);
}

function marcarPontos () {
  if (yAtor < 5) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function podeSeMoverEsquerda(){
  return xAtor > 2;
}

function podeSeMoverDireita(){
  return xAtor < 469;
}


