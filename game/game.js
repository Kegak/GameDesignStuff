import "/engine/engine.js"


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
        ctx.fillText("Death", 170, 100);
        ctx.fillText("Before Dismount", 60, 150)
        ctx.fillText("(press \'a\' to start)", 0, 200);
        
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

class TrackComponent extends Component{
    name = "TrackComponent"
    start(){
        this.cubeSide = 40
        this.position = 0
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 3;
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 3;
            this.transform.y += 3
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 3;
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 3;
            this.transform.y += 3
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 3;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 3
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 3
            this.position = 2
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
        ctx.fillStyle = "Gray"
        ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)
    }
}

class TurretComponent extends Component{
    name = "TurretComponent"
    start(){
        this.cubeSide = 20
        this.position = 0
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 3;
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 3;
            this.transform.y += 3
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 3;
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 3;
            this.transform.y += 3
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 3;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 3
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 3
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 3
            this.position = 2
        }

        if (this.transform.x <= 10){
            this.transform.x = 10
        }
        if (this.transform.x >= 470){
            this.transform.x = 470
        }
        if (this.transform.y <= 10){
            this.transform.y = 10
        }
        if (this.transform.y >= 270){
            this.transform.y = 270
        }
    }
    draw(ctx){
        ctx.fillStyle = "Green"
        ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)
    }
}

class GunComponent extends Component{
    name = "GunComponent"
    start(){
        this.gunLength = 20
        this.gunHeight = 10
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

        if (this.transform.x <= 40){
            this.transform.x = 40
        }
        if (this.transform.x >= 500){
            this.transform.x = 500
        }
        if (this.transform.y <= 15){
            this.transform.y = 15
        }
        if (this.transform.y >= 275){
            this.transform.y = 275
        }

    }
    draw(ctx){
        let trackGameObject = GameObject.getObjectByName("TrackGameObject")
        let trackComponent = trackGameObject.getComponent("TrackComponent")
        ctx.fillStyle = "green"
        
        if (trackComponent.position == 2){
            ctx.fillRect(this.transform.x - 25, this.transform.y + 15, this.gunHeight, this.gunLength)
        }
        else if (trackComponent.position == 0){
            ctx.fillRect(this.transform.x - 25, this.transform.y-25, this.gunHeight, this.gunLength)
        }
        else if (trackComponent.position == 3){
            ctx.fillRect(this.transform.x-50, this.transform.y, this.gunLength, this.gunHeight)
        }
        else if (trackComponent.position == 1){
            ctx.fillRect(this.transform.x-10, this.transform.y, this.gunLength, this.gunHeight)
        }
        
    }
}

class BulletComponent extends Component{
    name = "BulletComponent"
    
    start(){
     this.fired = false

     let gunGameObject = GameObject.getObjectByName("GunGameObject")
     let gunComponent = gunGameObject.getComponent("GunComponent")

     this.transform.x = gunComponent.transform.x
     this.transform.y = gunComponent.transform.y

    }
    update(){
        let trackGameObject = GameObject.getObjectByName("TrackGameObject")
        let trackComponent = trackGameObject.getComponent("TrackComponent")

        let gunGameObject = GameObject.getObjectByName("GunGameObject")
        let gunComponent = gunGameObject.getComponent("GunComponent")
        
        if (this.fired == false){
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
     

        if (keysDown[" "] && this.fired == false){
            this.fired = true
            this.position = trackComponent.position
        }


        if (this.fired == true){
            if (this.position == 0){
                this.transform.y -= 5
            }
            if (this.position == 1){
                this.transform.x += 5
            }
            if (this.position == 2){
                this.transform.y += 5
            }
            if (this.position == 3){
                this.transform.x -= 5
            }
        }
        
        if (this.transform.x < 40){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.x > 500){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.y < 15){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.y > 280){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
    }
    draw(ctx){
        if (this.fired == true){
            
            ctx.fillStyle = "white"
            if (this.position == 2){
                ctx.fillRect(this.transform.x - 23, this.transform.y + 30, 5, 5)
            }
            else if (this.position == 0){
                ctx.fillRect(this.transform.x - 23, this.transform.y-25, 5, 5)
            }
            else if (this.position == 3){
                ctx.fillRect(this.transform.x-50, this.transform.y + 2, 5, 5)
            }
            else if (this.position == 1){
                ctx.fillRect(this.transform.x+6, this.transform.y + 2, 5, 5)
            }
        }
    }
        
}



class MainScene extends Scene {
    start() {
        this.addGameObject(new MainControllerGameObject())
        this.addGameObject(new MainDrawGameObject())
        let trackGameObject = new GameObject("TrackGameObject")
        trackGameObject.addComponent(new TrackComponent())
        trackGameObject.transform.x = 230
        trackGameObject.transform.y = 130
        this.addGameObject(trackGameObject)

        
        let turretGameObject = new GameObject("TurretGameObject")
        turretGameObject.addComponent(new TurretComponent())
        turretGameObject.transform.x = 240
        turretGameObject.transform.y = 140
        this.addGameObject(turretGameObject)

        let gunGameObject = new GameObject("GunGameObject")
        gunGameObject.addComponent(new GunComponent())
        gunGameObject.transform.x = 270
        gunGameObject.transform.y = 145
        this.addGameObject(gunGameObject)

        let bulletGameObject = new GameObject("BulletGameObject")
        bulletGameObject.addComponent(new BulletComponent())
        bulletGameObject.transform.x = 270
        bulletGameObject.transform.y = 145
        this.addGameObject(bulletGameObject)
    }
}

let startScene = new StartScene()
let mainScene = new MainScene()

window.allScenes = [startScene, mainScene]