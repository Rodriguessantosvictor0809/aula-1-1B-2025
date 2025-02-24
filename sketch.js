function setup() {
    createCanvas(400, 400);
  }
  //função draw significa desenhar
  function draw() {
    background(255, 255, 0);
    
    // desenhand0 a linha superior
    circle(50, 50, 100) ;  //primeiro círculo
    circle(150, 50, 100);  //segundo círculo
    circle(250, 50, 100);  //terceiro círculo
    circle(350, 50, 100);  //quarto círculo
    
    // desenhando a linha inferior
    circle(350, 350, 100);  //primeiro círculo
    circle(250, 350, 100); //segundo círculo
    circle(150, 350, 100); //terceiro círculo
    circle(50, 350, 100) ;  //quarto círculo
    if (mouseIsPressed) {
    console.log(mouseX, mouseY);
    }
  }