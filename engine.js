let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d");

let keysDown = []
let mouseX;
let mouseY

//Not the strings has to be all lowercase, e.g. keydown not keyDown or KeyDown
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

//0 is start scene, 1 main scene, 2 is dead scene
let scene = 0;

let pause = false

function mouseDown(e){
    //console.log("mouseDown: " + e.clientX + " " + e.clientY)
  }
function mouseUp(e){
    //console.log("mouseUp: " + e.clientX + " " + e.clientY)
  }
function mouseMove(e){
    //console.log("mouseMove: " + e.clientX + " " + e.clientY)
  }
  function keyUp(e) {
    keysDown[e.key] = false
    //console.log(e)
    if (e.key == "ArrowLeft") {
      console.log("Up Left")
    }
    if (e.key == "ArrowRight") {
      console.log("Up Right")
    }
    if(e.key == "p"){
        pause = !pause
    }
    
  }

  function keyDown(e) {
    keysDown[e.key] = true
    //console.log(e)
    if (e.key == "ArrowLeft") {
      console.log("Down Left")
    }
    if (e.key == "ArrowRight") {
      console.log("Down Right")
    }
    //To prevent scrolling (if needed)
    //This has to be in keyDown, not keyup
    if(e.key == " "){
      e.preventDefault()
    }
  }

  function engineUpdate(){
    if(pause) return
    update()
  }
  function engineDraw(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    draw()
  }

  function start(title){
    document.title = title
    function gameLoop() {
        engineUpdate()
        engineDraw()
      }
  
      setInterval(gameLoop, 1000 / 25)
  }

function Q_InvSqrt(num){
  //got from here: https://medium.com/@adrien.za/fast-inverse-square-root-in-go-and-javascript-for-fun-6b891e74e5a8
  //inspration from: https://en.wikipedia.org/wiki/Fast_inverse_square_root
  buffer = new ArrayBuffer(4)
  view = new DataView(buffer)
  var y, x2 = num * 0.5, threehalfs = 1.5
  view.setFloat32(0, num) //evil floating point bit level hacking
  view.setUint32(0, 0x5F375A86 - (view.getUint32(0) >> 1)) //what the duck?
  y = view.getFloat32(0)
  y *= (threehalfs - (x2 * y * y)) //1st iteration
  //y *= (threehalfs - (x2 * y * y)) //2nd iteration, this can be removed
  return y
}
