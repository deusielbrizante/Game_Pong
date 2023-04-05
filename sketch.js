//variáveis do jogador
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//variáveis da raquete
let raqueteComprimento = 11;
let raqueteAltura = 80;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let somRaquetada;
let somPontos;
let somTrilhaSonora;

function preload() {
  somTrilhaSonora = loadSound("trilha.mp3");
  somPontos = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  somTrilhaSonora.loop();
}

function draw() {
  background(0);

  mostrarBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoBolinha();
  colisaoBolinhaBorda();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcarPonto();
  bolinhaNaoFicaPresaEsquerda();
  bolinhaNaoFicaPresaDireita();
}

function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinhaBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );

  if (colidiu) {
    velocidadeXBolinha *= -1;
    somRaquetada.play();
  }
}

function movimentaRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }

  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);

  fill(color(255, 140, 0));
  rect(180, 20, 40, 25);
  fill(255);
  text(meusPontos, 200, 40);

  fill(color(255, 140, 0));
  rect(380, 20, 40, 25);
  fill(255);
  text(pontosOponente, 400, 40);
}

function marcarPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    somPontos.play();
  }

  if (xBolinha < 10) {
    pontosOponente += 1;
    somPontos.play();
  }
}


function bolinhaNaoFicaPresaEsquerda(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}

function bolinhaNaoFicaPresaDireita(){
    if (xBolinha - raio > 0){
    XBolinha = 577
    }
}
