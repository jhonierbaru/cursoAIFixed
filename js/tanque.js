   
function   setup() {
    createCanvas(300, 300);
    angleMode(DEGREES);
    background(200);}
    let posXtanque = 0
  function draw (){
    rotate(45);
    rect(150, 150, 50, 50 );
    rect(157, 150, 35, 50 );
    rect(157, 160, 35, 30);
    rect(163, 165, 24, 20);
    rect(170, 170, 10, 50, 10);
}
if (keyIsDown(32)) {
    if (cooldown != 0) {
        cooldown--;
    } else {
        disparos.push({ posX: posXtanque + 60, posY: 720, vy: -5 })
        cooldown = 1;
    }
    keydown();
}

  
 
   function keydown() {

    if (keyIsDown(37) && posXtanque> (0)) {
        posXtanque = posXtanque-10;
     }
     if(keyIsDown(39) && posXtanque> (30 - 60)) {
        posXtanque = posXtanque+10;
     }
     
     if (keyIsDown(38) && posYtanque> (0)) {
        posYtanque = posYtanque-10;
     }
     if(keyIsDown(40) && posYtanque> (30 - 60)) {
        posYtanque = posYtanque+10;
      
    }}
  
  
    
