
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
        ctx.fillStyle = "rgb(135, 206, 235)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "black"
        ctx.fillRect(0,0, 500, 300)
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

class PlayCubeComponent extends Component{
    name = "PlayCubeComponent"
    start(){
        this.width = 500
        this.height = 300
        this.cubeSide = 40
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 3;
            this.transform.y -= 3
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 3;
            this.transform.y += 3
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 3;
            this.transform.y -= 3
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 3;
            this.transform.y += 3
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 3;
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 3
        }
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 3
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 3
        }

        if (this.transform.x <= 0){
            this.transform.x = 0
        }
        if (this.transform.x >= 460){
            this.transform.x = 460
        }
        if (this.transform.y <= 0){
            this.transform.y = 0
        }
        if (this.transform.y >= 260){
            this.transform.y = 260
        }
    }
    draw(ctx){
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)
    }
}

class MainScene extends Scene {
    start() {
        this.addGameObject(new MainControllerGameObject())
        this.addGameObject(new MainDrawGameObject())
        let playCubeGameObject = new GameObject("PlayCubeGameObject")
        playCubeGameObject.addComponent(new PlayCubeComponent())
        playCubeGameObject.transform.x = 230
        playCubeGameObject.transform.y = 130
        this.addGameObject(playCubeGameObject)
    }
}

let startScene = new StartScene()
let mainScene = new MainScene()

SceneManager.addScene(startScene)
SceneManager.addScene(mainScene)