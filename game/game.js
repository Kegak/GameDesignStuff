
//-----------------------------------------------------
//Start

class StartController extends Component {
    start() {
        this.freezeTime = 0
        this.maxFreezeTime = 1
    }
    update() {
        this.freezeTime += 25 / 1000
        if (keysDown["a"] && this.freezeTime >= this.maxFreezeTime) {
            SceneManager.changeScene(1)
        }
    }
  }
  class StartDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "green";
        ctx.font = "40px Courier"
        ctx.fillText("Game", 140, 100);
        ctx.fillText("(press \"a\" to start)", 0, 150);
        
    }
  }
  class StartControllerGameObject extends GameObject {
    start() {
        this.addComponent(new StartController())
    }
  
  }
  
  class StartDrawGameObject extends GameObject {
    start() {
        this.addComponent(new StartDrawComponent());
    }
  
  }
  
  class StartScene extends Scene {
    start() {
        this.addGameObject(new StartControllerGameObject())
        this.addGameObject(new StartDrawGameObject())
    }
  }

//-----------------------------------------------------
//Main

class MainController extends Component {
    start(){
        this.margin = 20
        this.size = 100
    }
    update(){
        this.margin = 20
        this.size = 100
    }
    
}

class MainDrawComponent extends Component{
    draw(ctx){
        this.margin = 20
        this.size = 100
        ctx.fillStyle = "rgb(135, 206, 235)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.strokeStyle = "black"
        ctx.beginPath()
        ctx.moveTo(this.margin, this.margin)
        ctx.lineTo(this.margin + this.size, this.margin)
        ctx.lineTo(this.margin + this.size, this.margin + this.size)
        ctx.moveTo(this.margin, this.margin + this.size)
        ctx.lineTo(this.margin, this.margin)
        ctx.stroke()
    }
}

class MainControllerGameObject extends GameObject{
    start(){
        this.addComponent(new MainController())
    }
}

class MainDrawGameObject extends GameObject{
    start(){
        this.addComponent(new MainDrawComponent())
    }
}

class MainScene extends Scene {
    start() {
        this.addGameObject(new MainControllerGameObject())
        this.addGameObject(new MainDrawGameObject())
    }
}

let startScene = new StartScene()
let mainScene = new MainScene()

SceneManager.addScene(startScene)
SceneManager.addScene(mainScene)