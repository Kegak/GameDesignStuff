import "/engine/engine.js"
let enemy_num = 3
let num_destroy = 0
let wave_num = 1

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
            SceneManager.changeScene(2)
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
//Wave

  class WaveController extends Component {
    start() {
        this.freezeTime = 0
        this.maxFreezeTime = 2
    }
    update() {
        this.freezeTime += 25 / 1000
        if (this.freezeTime >= this.maxFreezeTime) {
            SceneManager.changeScene(2)
        }
    }
  }
  class WaveDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(-50, -30, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "red";
        ctx.font = "8px Courier"
        ctx.fillText("Wave " + wave_num, -20, -10);
        
        
    }
  }
  class WaveControllerGameObject extends GameObject {
    start() {
        this.addComponent(new WaveController())
    }
  
  }
  
  class WaveDrawGameObject extends GameObject {
    start() {
        this.addComponent(new WaveDrawComponent());
    }
  
  }
  
  class WaveScene extends Scene {
    start() {
        this.addGameObject(new WaveControllerGameObject())
        this.addGameObject(new WaveDrawGameObject())
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
        ctx.fillStyle = "tan"
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
            this.transform.x -= .5;
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= .5;
            this.transform.y += .5
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += .5;
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += .5;
            this.transform.y += .5
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= .5;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += .5
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += .5
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
            this.transform.x -= .5;
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= .5;
            this.transform.y += .5
            this.position = 2
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += .5;
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += .5;
            this.transform.y += .5
            this.position = 2
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= .5;
            this.position = 3
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += .5
            this.position = 1
        }   
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= .5
            this.position = 0
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += .5
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
            this.transform.x -= .5;
            this.transform.y -= .5
        }
        else if (keysDown["ArrowLeft"] && keysDown["ArrowDown"]){
            this.transform.x -= .5;
            this.transform.y += .5
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowUp"]){
            this.transform.x += .5;
            this.transform.y -= .5
        }
        else if (keysDown["ArrowRight"] && keysDown["ArrowDown"]){
            this.transform.x += .5;
            this.transform.y += .5
        }
        else if (keysDown["ArrowLeft"]) {
            this.transform.x -= .5;
        }
        else if (keysDown["ArrowRight"]) {
            this.transform.x += .5
            
        }
        else if (keysDown["ArrowUp"]) {
            this.transform.y -= .5
        }
        else if (keysDown["ArrowDown"]) {
            this.transform.y += .5
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

class HPComponent extends Component{
    name = "HPComponent"
    start(){
        this.transform.x = -49
        this.transform.y = -27
        this.hp = 3
        this.extraX = 0
    }
    update(){
        if (this.hp == 0){
            this.extraX = 30
            enemy_num = 3
            wave_num = 1
            num_destroy = 0
            SceneManager.changeScene(3)
        }
        if (this.hp == 1){
            this.extraX = 20
        }
        if (this.hp == 2){
            this.extraX = 10
        }
    }
    draw(ctx){
        ctx.fillStyle = `rgb(57, 235, 20)`
        ctx.fillRect(this.transform.x, this.transform.y, 30-this.extraX , 2)
        if(this.hp < 3){
            ctx.fillStyle = "red"
            ctx.fillRect(this.transform.x+30-this.extraX, this.transform.y, this.extraX, 2)
        }
    }
}

class CrunchyComponent extends Component{
    name = "CrunchyComponent"
    start(){
        this.fired = false
        this.cubeSide = 2
        //Got the plus or minus from here: https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
        var plusOrMinus_x = Math.random() < 0.5 ? -1 : 1;
        var plusOrMinus_y = Math.random() < 0.5 ? -1 : 1;

        this.transform.x = (Math.random() * 45 + 5) * plusOrMinus_x
        this.transform.y = (Math.random() * 25 + 5) * plusOrMinus_y

        this.position = 0

        this.goTofire = 1
    }
    update(){
        let turretGameObject = GameObject.getObjectByName("TurretGameObject")
        let turretComponent = turretGameObject.getComponent("TurretComponent")
        let bulletGameObject = GameObject.getObjectByName("BulletGameObject")
        let bulletComponent = bulletGameObject.getComponent("BulletComponent")
        let hpGameObject = GameObject.getObjectByName("HPGameObject")
        let hpComponent = hpGameObject.getComponent("HPComponent")

        this.goTofire += 1

        if (this.fired == false){
            this.transform.sx = this.transform.x
            this.transform.sy = this.transform.y
        }
        if (turretComponent.transform.y > this.transform.y){
            this.transform.y += 0.2
        }
        if (turretComponent.transform.y < this.transform.y){
            this.transform.y -= 0.2
        }
        if (turretComponent.transform.x > this.transform.x){
            this.transform.x += 0.2
            if (this.fired == false){
                if ((turretComponent.transform.x - this.transform.x -1) > (turretComponent.transform.y - this.transform.y)){
                    this.position = 1
                }
                else{
                    this.position = 2
                }
            }
        }
        if (turretComponent.transform.x < this.transform.x){
            this.transform.x -= 0.2
            if (this.fired == false){
                if ((turretComponent.transform.x - this.transform.x -1) < (turretComponent.transform.y - this.transform.y)){
                    this.position = 3
                }
                else{
                    this.position = 0
                }
            }
        }
        
        if ((turretComponent.transform.x >= this.transform.x-2 && turretComponent.transform.x <= this.transform.x+2) && (turretComponent.transform.y >= this.transform.y-2 && turretComponent.transform.y <= this.transform.y+2)){
            num_destroy += 1
            this.parent.destroy()
            if (num_destroy == enemy_num){
                num_destroy = 0 
                enemy_num += 1
                wave_num +=1
                SceneManager.changeScene(1)
            }
        }

        if ((this.fired == false) && ((this.goTofire % 75) == 0)){
            this.fired = true
        }

        if (this.fired == true){
            if (this.position == 0){
                this.transform.sy -= .6
            }
            if (this.position == 1){
                this.transform.sx += .6
            }
            if (this.position == 2){
                this.transform.sy += .6
            }
            if (this.position == 3){
                this.transform.sx -= .6
            }
        }

        if (bulletComponent.fired == true && ((bulletComponent.transform.x >= this.transform.x-1 && bulletComponent.transform.x <= this.transform.x+5) && ((bulletComponent.transform.y >= this.transform.y-1) && (bulletComponent.transform.y <= this.transform.y+5)))){
            num_destroy += 1
            this.parent.destroy()
            bulletComponent.fired = false
            if (num_destroy == enemy_num){
                num_destroy = 0 
                enemy_num += 1
                wave_num +=1
                SceneManager.changeScene(1)
            }

        }
        if (this.transform.sx < -50){
            this.fired = false
            this.transform.sx = this.transform.x
            this.transform.sy = this.transform.y
        }
        if (this.transform.sx > 50){
            this.fired = false
            this.transform.sx = this.transform.x
            this.transform.sy = this.transform.y
        }
        if (this.transform.sy < -30){
            this.fired = false
            this.transform.sx = this.transform.x
            this.transform.sy = this.transform.y
        }
        if (this.transform.sy > 30){
            this.fired = false
            this.transform.sx = this.transform.x
            this.transform.sy = this.transform.y
        }
        if(this.fired == true && ((this.transform.sx <= turretComponent.transform.x+3.5 && this.transform.sx >= turretComponent.transform.x-3.5) && (this.transform.sy <= turretComponent.transform.y+1.5 && this.transform.sy >= turretComponent.transform.y-1.5))){
            this.fired = false
            hpComponent.hp -= 1
        }
    }
    draw(ctx){
        
        ctx.fillStyle = "Yellow"
        ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)

        if (this.fired == true){
            ctx.fillStyle = "white"
            if (this.position == 0){
                ctx.fillRect(this.transform.sx+1, this.transform.sy, .5, .5)
            }
            else if (this.position == 1){
                ctx.fillRect(this.transform.sx+2, this.transform.sy+1, .5, .5)
            }
            else if (this.position == 2){
                ctx.fillRect(this.transform.sx+1, this.transform.sy+2, .5, .5)
            }
            else if (this.position == 3){
                ctx.fillRect(this.transform.sx, this.transform.sy+1, .5, .5)
            }
        }
    }
}

class MainScene extends Scene {
    start() {
        this.addGameObject(new MainControllerGameObject())
        this.addGameObject(new MainDrawGameObject())
        for (let i = 0; i < enemy_num; i++){
        let crunchyGameObject = new GameObject("CrunchyGameObject")
        crunchyGameObject.addComponent(new CrunchyComponent())
        this.addGameObject(crunchyGameObject)
        }

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

        let hpGameObject = new GameObject("HPGameObject")
        hpGameObject.addComponent(new HPComponent())
        this.addGameObject(hpGameObject)
        

    }
}

//-----------------------------------------------------
//End

class EndController extends Component {
    start() {
        this.freezeTime = 0
        this.maxFreezeTime = 1
    }
    update() {
        this.freezeTime += 25 / 1000
        if (keysDown["a"] && this.freezeTime >= this.maxFreezeTime) {
            SceneManager.changeScene(2)
        }
    }
  }
  class EndDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(-50, -30, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "Red";
        ctx.font = "8px Courier"
        ctx.fillText("Game Over", -22, -10);
        ctx.fillText("Press \'a\' to restart", -50, 5);
        
    }
  }
  class EndControllerGameObject extends GameObject {
    start() {
        this.addComponent(new EndController())
    }
  
  }
  
  class EndDrawGameObject extends GameObject {
    start() {
        this.addComponent(new EndDrawComponent());
    }
  
  }
  

class EndScene extends Scene {
    start(){
    this.addGameObject(new EndControllerGameObject())
    this.addGameObject(new EndDrawGameObject())
    }
}

let startScene = new StartScene()
let waveScene = new WaveScene()
let mainScene = new MainScene()
let endScene = new EndScene()

window.allScenes = [startScene, waveScene, mainScene, endScene]