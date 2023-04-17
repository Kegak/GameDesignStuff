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
        ctx.fillRect(-50, -30, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "green";
        ctx.font = "8px Courier"
        ctx.fillText("Death", -20, -10);
        ctx.fillText("Before Dismount", -40, 0)
        ctx.fillText("(press \'a\' to start)", -50, 10);
        
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
        ctx.fillStyle = "black"
        ctx.fillRect(-50,-30, 100, 60)
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
        this.cubeSide = 5
        this.position = 0
        this.transform.x = -5
        this.transform.y -5
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 1;
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 1;
            this.transform.y += 1
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 1;
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 1;
            this.transform.y += 1
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 1;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 1
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 1
            this.position = 2
        }

        if (this.transform.x <= -50){
            this.transform.x = -50
        }
        if (this.transform.x >= 45){
            this.transform.x = 45
        }
        if (this.transform.y <= -28.5){
            this.transform.y = -28.5
        }
        if (this.transform.y >= 23.5){
            this.transform.y = 23.5
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
        this.cubeSide = 2
        this.position = 0
        this.transform.x = -3.5
        this.transform.y = 1.5
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 1;
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 1;
            this.transform.y += 1
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 1;
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 1;
            this.transform.y += 1
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 1;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 1
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 1
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 1
            this.position = 2
        }

        if (this.transform.x <= -48.5){
            this.transform.x = -48.5
        }
        if (this.transform.x >= 46.5){
            this.transform.x = 46.5
        }
        if (this.transform.y <= -27){
            this.transform.y = -27
        }
        if (this.transform.y >= 25){
            this.transform.y = 25
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
        this.gunLength = 2
        this.gunHeight = 1
        this.transform.x = -0.5
        this.transform.y = 4.5
    }
    update(){
        if (keysDown["ArrowLeft"] && keysDown["ArrowUp"]){
            this.transform.x -= 1;
            this.transform.y -= 1
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= 1;
            this.transform.y += 1
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += 1;
            this.transform.y -= 1
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += 1;
            this.transform.y += 1
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= 1;
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += 1
            
        }
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= 1
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += 1
        }

        if (this.transform.x <= -45.5){
            this.transform.x = -45.5
        }
        if (this.transform.x >= 49.5){
            this.transform.x = 49.5
        }
        if (this.transform.y <= -24){
            this.transform.y = -24
        }
        if (this.transform.y >= 28){
            this.transform.y = 28
        }

    }
    draw(ctx){
        let trackGameObject = GameObject.getObjectByName("TrackGameObject")
        let trackComponent = trackGameObject.getComponent("TrackComponent")
        ctx.fillStyle = "green"
        
        if (trackComponent.position == 2){
            ctx.fillRect(this.transform.x - 2.5, this.transform.y-1, this.gunHeight, this.gunLength)
        }
        else if (trackComponent.position == 0){
            ctx.fillRect(this.transform.x-2.5, this.transform.y-5, this.gunHeight, this.gunLength)
        }
        else if (trackComponent.position == 3){
            ctx.fillRect(this.transform.x-5, this.transform.y-2.5, this.gunLength, this.gunHeight)
        }
        else if (trackComponent.position == 1){
            ctx.fillRect(this.transform.x-1, this.transform.y-2.5, this.gunLength, this.gunHeight)
        }
        
    }
}

class BulletComponent extends Component{
    name = "BulletComponent"
    
    start(){
     this.fired = false

     this.transform.x = -0.5
    this.transform.y = 4.5

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
                this.transform.y -= 1
            }
            if (this.position == 1){
                this.transform.x += 1
            }
            if (this.position == 2){
                this.transform.y += 1
            }
            if (this.position == 3){
                this.transform.x -= 1
            }
        }
        
        if (this.transform.x < -50){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.x > 50){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.y < -30){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
        if (this.transform.y > 30){
            this.fired = false
            this.transform.x = gunComponent.transform.x
            this.transform.y = gunComponent.transform.y
        }
    }
    draw(ctx){
        if (this.fired == true){
            
            ctx.fillStyle = "white"
            if (this.position == 0){
                ctx.fillRect(this.transform.x-2.2, this.transform.y-4.5, .5, .5)
            }
            else if (this.position == 1){
                ctx.fillRect(this.transform.x+.1, this.transform.y-2.2, .5, .5)
            }
            else if (this.position == 2){
                ctx.fillRect(this.transform.x-2.2, this.transform.y, .5, .5)
            }
            else if (this.position == 3){
                ctx.fillRect(this.transform.x-4.4, this.transform.y-2.2, .5, .5)
            }
        }
    }
        
}

class CrunchyComponent extends Component{
    name = "CrunchyComponent"
    start(){
        this.cubeSide = 2
        this.transform.x = 20
        this.transform.y = 20
    }
    update(){
        let turretGameObject = GameObject.getObjectByName("TurretGameObject")
        let turretComponent = turretGameObject.getComponent("TurretComponent")
        let bulletGameObject = GameObject.getObjectByName("BulletGameObject")
        let bulletComponet = bulletGameObject.getComponent("BulletComponent")
        if (turretComponent.transform.x > this.transform.x){
            this.transform.x += 0.2
        }
        if (turretComponent.transform.x < this.transform.x){
            this.transform.x -= 0.2
        }
        if (turretComponent.transform.y > this.transform.y){
            this.transform.y += 0.2
        }
        if (turretComponent.transform.y < this.transform.y){
            this.transform.y -= 0.2
        }
        if ((turretComponent.transform.x >= this.transform.x-2 && turretComponent.transform.x <= this.transform.x+2) && (turretComponent.transform.y >= this.transform.y-2 && turretComponent.transform.y <= this.transform.y+2)){
            this.parent.destroy()
        }
        
        
        if (bulletComponet.fired == true && (this.transform.y+2 <= bulletComponet.transform.y && this.transform.x+2 <= bulletComponet.transform.x)){
            this.parent.destroy()
            bulletComponet.fired = false
            
        }
    }
    draw(ctx){
        
        ctx.fillStyle = "Yellow"
        ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)
    }
}

class MainScene extends Scene {
    start() {
        this.addGameObject(new MainControllerGameObject())
        this.addGameObject(new MainDrawGameObject())

        let crunchyGameObject = new GameObject("CrunchyGameObject")
        crunchyGameObject.addComponent(new CrunchyComponent())
        this.addGameObject(crunchyGameObject)

        let trackGameObject = new GameObject("TrackGameObject")
        trackGameObject.addComponent(new TrackComponent())
        
        this.addGameObject(trackGameObject)

        
        let turretGameObject = new GameObject("TurretGameObject")
        turretGameObject.addComponent(new TurretComponent())
        this.addGameObject(turretGameObject)

        let gunGameObject = new GameObject("GunGameObject")
        gunGameObject.addComponent(new GunComponent())
        this.addGameObject(gunGameObject)

        let bulletGameObject = new GameObject("BulletGameObject")
        bulletGameObject.addComponent(new BulletComponent())
        this.addGameObject(bulletGameObject)

        

    }
}

let startScene = new StartScene()
let mainScene = new MainScene()

window.allScenes = [startScene, mainScene]