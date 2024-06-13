var posXNave = 610;
var posYNave = 700;
var posXPixel1 = 50;
var posYPixel1 = 50;
var posXPixel2 = 900;
var posYPixel2 = 50;
var vxbala = 2;
var vybala = -2;
function preload() {
    imagenNave = loadImage('../assets/navecita.png');
    imagenPixel1 = loadImage('../assets/pixel1.png');
    imagenPixel2 = loadImage('../assets/pixel2.png');
    imagenbala = loadImage('../assets/bala.png');
}
function comprobarSiChocaConpixeles(Pixeles) {
    Pixeles.forEach(posYPixel1 => {
        if (!imagenPixel1.isBroken) {
            if ((posYPixel1.y == posYBala && posXBala >= posYPixel1.x) && posXBala <= pixelY.x + 128) {
                pixelY.isBroken = true;
                vybala = vybala * -1;



            }

        }
    })
}
function setup() {
    createCanvas(1280, 900)
    colorMode(RGB)


}
var disparos = [];
var Pixeles = [];
var cooldown = 1;
function draw() {
    background(244, 141, 48)



    pixelX = 64;
    pixelY = 0;
    comprobarSiChocaConpixeles(Pixeles)
    for (let i = 0; i < 9; i++) {
        if (i % 2 == 0) {
            image(imagenPixel1, pixelX, posYPixel1, 120, 120)

        } else {
            image(imagenPixel2, pixelX, posYPixel2, 120, 120)
        }
        pixelX =pixelX+ 128;
    }

    image(imagenNave, posXNave, posYNave, 120, 120)

    disparos.forEach(disparo => {
        image(imagenbala, disparo.posX, disparo.posY, 10, 20)
        disparo.posY = disparo.posY + disparo.vy;




    });

    if (keyIsDown(32)) {
        if (cooldown != 0) {
            cooldown--;
        } else {
            disparos.push({ posX: posXNave + 60, posY: 720, vy: -5 })
            cooldown = 1;
        }
        keydown();
    }
}


function keydown() {

    if (keyIsDown(37) && posXNave > (0)) {
        posXNave = posXNave-10;
     }
      if (keyIsDown(39) && posXNave < (1280 - 60)){
        posXNave = posXNave +10;
     }

}
