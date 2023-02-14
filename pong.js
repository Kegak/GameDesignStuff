let margin = 20;
let size = 100;



let pongX = (margin + size) * 0.5
let pongY = (margin + size) * 0.5
let pongVX = 3
let pongVY = 2
let paddleX = (margin + size) * 0.5
let paddleWidth = 40;
let points = 0;





function update() {

  if (scene == 0) {
    if(keysDown["a"]){
      scene = 1;
    }
  }
  else if (scene == 1) {

    //Model of MVC
    pongX += pongVX
    pongY += pongVY

    if (pongX > margin + size) {
      pongVX *= -1
    }
    if (pongY > margin + size) {
      //Check for a collision with the paddle
      if (paddleX - paddleWidth * 0.5 <= pongX && paddleX + paddleWidth * 0.5 >= pongX){
        pongVY *= -1
        points++}
      else {
        console.log("You are dead")
        scene = 2;
      }
    }
    if (pongX < margin) {
      pongVX *= -1
    }
    if (pongY < margin) {
      pongVY *= -1
    }

    //Update the paddle based on input
    if (keysDown["ArrowLeft"]) {
      paddleX -= 2;
    }
    else if (keysDown["ArrowRight"]) {
      paddleX += 2
    }

    //Constrain the paddle position
    if (paddleX < margin + paddleWidth * 0.5) {
      paddleX = paddleWidth * 0.5 + margin
    }
    if (paddleX > margin - paddleWidth * 0.5 + size) {
      paddleX = -paddleWidth * 0.5 + margin + size
    }
  }
  else {
    //Scene 2
    if(keysDown["a"]){
      scene = 0;
    }
  }
}

function draw() {


  if (scene == 0) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText("Welcome to Pong", 100, 100);
  }
  else if (scene == 1) {
    //View part of MVC
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(margin, margin)
    ctx.lineTo(margin + size, margin)
    ctx.lineTo(margin + size, margin + size)
    ctx.moveTo(margin, margin + size)
    ctx.lineTo(margin, margin)
    ctx.stroke()

    //Now draw the paddle
    ctx.beginPath()
    ctx.moveTo(paddleX - paddleWidth * 0.5, margin + size)
    ctx.lineTo(paddleX + paddleWidth * 0.5, margin + size)
    ctx.stroke()

    ctx.fillStyle = "blue"

    ctx.beginPath()
    ctx.arc(pongX, pongY, 5, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "white"
    ctx.fillText(points, 0, 10);
  }
  else{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillText("You died", 100, 100);
  }

}