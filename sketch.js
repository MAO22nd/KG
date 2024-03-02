var bg, bgImg;
var som;
var rei1,rei2,torre,cartas;
var rei1Imag,rei2Img,torreImg,cartasImg
function preload(){
//bgImg = loadImage("");
//rei1Imag = loadImage("");
//rei2Imag = loadImage("");
//torreImg = loadImage("");
//cartasImg = loadImage("");
}





function setup() {
  bg = createCanvas(windowWidth/2, windowHeight);
 // bg.addImage(bgImg,0,0);
 rei1 = createSprite(50,550,50,50);
}

function draw() {
  background("#3D8D3D");

  drawSprites();
}
