import "/engine/engine.js"
let enemy_num = 3
let num_destroy = 0


//-----------------------------------------------------
//Start

class StartController extends Component {
    name = "StartController"
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

  
  class StartScene extends Scene {
    constructor(){
        super("black")
    }
    start() {
        
        this.addGameObject(new GameObject("StartControllerGameObject")).addComponent(new StartController())
        this.addGameObject(new GameObject("StartTextGameObject_1").addComponent(new GUIText("Death", "Green", "8px Courier")), new Vector2(35, 20))
        this.addGameObject(new GameObject("StartTextGameObject_2").addComponent(new GUIText("Before Dismount", "Green", "8px Courier")), new Vector2(15, 30))
        this.addGameObject(new GameObject("StartTextGameObject_3").addComponent(new GUIText("(press \'a\' to start)", "Green", "8px Courier")), new Vector2(3, 40))
        
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

  class WaveNumComponent extends Component{
    name = "WaveNumComponent"
    start(){
        this.parent.doNotDestroyOnLoad()
        this.parent.num = 1
    }
  }
  
  class WaveScene extends Scene {
    constructor(){
        super("black")
    }
    start() {
        this.addGameObject(new GameObject("WaveNumGameObject")).addComponent(new WaveNumComponent())
        
        this.addGameObject(new GameObject("WaveControllerGameObject")).addComponent(new WaveController())
        this.addGameObject(new GameObject("WaveTextGameObject_1").addComponent(new GUIText("Wave " + GameObject.getObjectByName("WaveNumGameObject").num, "Red", "8px Courier")), new Vector2(30, 25))
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

class TrackComponent extends Component{
    name = "TrackComponent"
    start(){
        
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

        if (this.transform.x <= -47){
            this.transform.x = -47
        }
        if (this.transform.x >= 47){
            this.transform.x = 47
        }
        if (this.transform.y <= -25.1){
            this.transform.y = -25.1
        }
        if (this.transform.y >= 25.1){
            this.transform.y = 25.1
        }
    }
    
}

class TurretComponent extends Component{
    name = "TurretComponent"
    start(){
        this.position = 3
        this.transform.x = -5
        this.transform.y = .1
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

        if (this.transform.x <= -47){
            this.transform.x = -47
        }
        if (this.transform.x >= 47){
            this.transform.x = 47
        }
        if (this.transform.y <= -25){
            this.transform.y = -25
        }
        if (this.transform.y >= 25.2){
            this.transform.y = 25.2
        }
    }
    
}

class GunComponent extends Component{
    name = "GunComponent"
    start(){
        this.position = 3
        this.transform.sy = 2
        this.transform.sx = 1
        this.transform.x = -5
        this.transform.y = 2.8
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

        if (this.transform.x <= -49.5){
            this.transform.x = -49.5
        }
        if (this.transform.x >= 49.5){
            this.transform.x = 49.5
        }
        if (this.transform.y <= -27.7){
            this.transform.y = -27.7
        }
        if (this.transform.y >= 27.9){
            this.transform.y = 27.9
        }

        let trackGameObject = GameObject.getObjectByName("TrackGameObject")
        let trackComponent = trackGameObject.getComponent("TrackComponent")
        
        if (this.position != trackComponent.position){

            this.position = trackComponent.position

        if (trackComponent.position == 2){
            this.transform.x =  trackComponent.transform.x
            this.transform.y = trackComponent.transform.y + 2.5
            this.transform.sx = 1
            this.transform.sy = 2
        }
        else if (trackComponent.position == 0){
            this.transform.x =  trackComponent.transform.x
            this.transform.y = trackComponent.transform.y - 2.5
            this.transform.sx = 1
            this.transform.sy = 2
        }
        else if (trackComponent.position == 3){
            
            this.transform.x =  trackComponent.transform.x - 2.7
            this.transform.y = trackComponent.transform.y +.2
            this.transform.sx = 2
            this.transform.sy = 1
        }
        else if (trackComponent.position == 1){
            
            this.transform.x =  trackComponent.transform.x + 2.7
            this.transform.y = trackComponent.transform.y +.2
            this.transform.sx = 2
            this.transform.sy = 1
        }
    }

    }
    // draw(ctx){
    //     let trackGameObject = GameObject.getObjectByName("TrackGameObject")
    //     let trackComponent = trackGameObject.getComponent("TrackComponent")
    //     ctx.fillStyle = "green"
        
    //     if (trackComponent.position == 2){
    //         ctx.fillRect(this.transform.x - 2.5, this.transform.y-1, this.gunHeight, this.gunLength)
    //     }
    //     else if (trackComponent.position == 0){
    //         ctx.fillRect(this.transform.x-2.5, this.transform.y-5, this.gunHeight, this.gunLength)
    //     }
    //     else if (trackComponent.position == 3){
    //         ctx.fillRect(this.transform.x-5, this.transform.y-2.5, this.gunLength, this.gunHeight)
    //     }
    //     else if (trackComponent.position == 1){
    //         ctx.fillRect(this.transform.x-1, this.transform.y-2.5, this.gunLength, this.gunHeight)
    //     }
        
    // }
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
    // draw(ctx){
    //     if (this.fired == true){
            
    //         ctx.fillStyle = "white"
    //         if (this.position == 0){
    //             ctx.fillRect(this.transform.x-2.2, this.transform.y-4.5, .5, .5)
    //         }
    //         else if (this.position == 1){
    //             ctx.fillRect(this.transform.x+.1, this.transform.y-2.2, .5, .5)
    //         }
    //         else if (this.position == 2){
    //             ctx.fillRect(this.transform.x-2.2, this.transform.y, .5, .5)
    //         }
    //         else if (this.position == 3){
    //             ctx.fillRect(this.transform.x-4.4, this.transform.y-2.2, .5, .5)
    //         }
    //     }
    // }
        
}

class HPComponent extends Component{
    name = "HPComponent"
    start(){
        this.transform.x = -34
        this.transform.y = -26
        this.transform.sx = 30
        this.hp = 3
        
    }
    update(){
        let antiHPGameObject = GameObject.getObjectByName("AntiHPGameObject")
        let antiHPComponent = antiHPGameObject.getComponent("AntiHPComponent")
        let waveNumGameObject = GameObject.getObjectByName("WaveNumGameObject")
        
        if (this.hp == 0){
            
            enemy_num = 3
            waveNumGameObject.num = 1
            num_destroy = 0
            SceneManager.changeScene(3)
        }
        if (this.hp == 1){
            antiHPComponent.transform.x = -29
            antiHPComponent.transform.y = -26
            antiHPComponent.transform.sx = 20
            antiHPComponent.transform.sy = 1
            this.extraX = 20
        }
        if (this.hp == 2){
            antiHPComponent.transform.x = -24
            antiHPComponent.transform.y = -26
            antiHPComponent.transform.sx = 10
            antiHPComponent.transform.sy = 1
            this.extraX = 10
        }
    }
    // draw(ctx){
    //     ctx.fillStyle = `rgb(57, 235, 20)`
    //     ctx.fillRect(this.transform.x, this.transform.y, 30-this.extraX , 2)
    //     if(this.hp < 3){
    //         ctx.fillStyle = "red"
    //         ctx.fillRect(this.transform.x+30-this.extraX, this.transform.y, this.extraX, 2)
    //     }
    // }
}

class AntiHPComponent extends Component{
    start(){
        this.transform.x = -19
        this.transform.y = -26
        this.transform.sx = 0
        this.transform.sy = 0
    }    
}

class EnemyNumComponent extends Component{
    name = "EnemyNumComponent"
    start(){
        this.parent.doNotDestroyOnLoad()
        this.parent.num = 3
    }
}

class CrunchyBulletComponent extends Component{
    name = "CrunchyBulletComponent"
    num = 0
    start(){
        let crunchyGameObject = GameObject.getObjectByName("CrunchyGameObject_" + this.num)
        let crunchyComponent = crunchyGameObject.getComponent("CrunchyComponent")
        this.transform.x = crunchyComponent.transform.x
        this.transform.y = crunchyComponent.transform.y
        this.fired = false
    }
    update(){
        let crunchyGameObject = GameObject.getObjectByName("CrunchyGameObject_" + this.num)
        let crunchyComponent = crunchyGameObject.getComponent("CrunchyComponent")
        if (this.fired == false){
        this.transform.x = crunchyComponent.transform.x
        this.transform.y = crunchyComponent.transform.y
        }
        if (this.fired == true){
            if (crunchyComponent.position == 0){
                this.transform.y -= .6
            }
            if (crunchyComponent.position == 1){
                this.transform.x += .6
            }
            if (crunchyComponent.position == 2){
                this.transform.y += .6
            }
            if (crunchyComponent.position == 3){
                this.transform.x -= .6
            }
        }
        let turretGameObject = GameObject.getObjectByName("TurretGameObject")
        let turretComponent = turretGameObject.getComponent("TurretComponent")
        if (this.transform.x < -50){
            this.fired = false
            this.transform.x = crunchyComponent.transform.x
            this.transform.y = crunchyComponent.transform.y
        }
        if (this.transform.x > 50){
            this.fired = false
            this.transform.x = crunchyComponent.transform.x
            this.transform.y = crunchyComponent.transform.y
        }
        if (this.transform.y < -30){
            this.fired = false
            this.transform.x = crunchyComponent.transform.x
            this.transform.y = crunchyComponent.transform.y
        }
        if (this.transform.y > 30){
            this.fired = false
            this.transform.x = crunchyComponent.transform.x
            this.transform.y = crunchyComponent.transform.y
        }
        if(this.fired == true && ((this.transform.x <= turretComponent.transform.x+3.5 && this.transform.x >= turretComponent.transform.x-3.5) && (this.transform.y <= turretComponent.transform.y+1.5 && this.transform.y >= turretComponent.transform.y-1.5))){
            let hpGameObject = GameObject.getObjectByName("HPGameObject")
            let hpComponent = hpGameObject.getComponent("HPComponent")
            this.fired = false
            hpComponent.hp -= 1
        }
    }
}

class CrunchyComponent extends Component{
    name = "CrunchyComponent"
    num = 0
    start(){
        // this.fired = false
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

        let waveNumGameObject = GameObject.getObjectByName("WaveNumGameObject")
        
        let crunchyBulletGameObject = GameObject.getObjectByName("CrunchyBulletGameObject_" + this.num)
        let crunchyBulletComponent = crunchyBulletGameObject.getComponent("CrunchyBulletComponent")

        this.goTofire += 1

        // if (this.fired == false){
        //     this.transform.sx = this.transform.x
        //     this.transform.sy = this.transform.y
        // }
        if (turretComponent.transform.y > this.transform.y){
            this.transform.y += 0.2
        }
        if (turretComponent.transform.y < this.transform.y){
            this.transform.y -= 0.2
        }
        if (turretComponent.transform.x > this.transform.x){
            this.transform.x += 0.2
            if (crunchyBulletComponent.fired == false){
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
            if (crunchyBulletComponent.fired == false){
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
            crunchyBulletComponent.parent.destroy()
            this.parent.destroy()
            if (num_destroy == enemy_num){
                num_destroy = 0 
                enemy_num += 1
                waveNumGameObject.num +=1
                SceneManager.changeScene(1)
            }
        }

        if ((crunchyBulletComponent.fired == false) && ((this.goTofire % 75) == 0)){
            crunchyBulletComponent.fired = true
        }

        // if (this.fired == true){
        //     if (this.position == 0){
        //         this.transform.sy -= .6
        //     }
        //     if (this.position == 1){
        //         this.transform.sx += .6
        //     }
        //     if (this.position == 2){
        //         this.transform.sy += .6
        //     }
        //     if (this.position == 3){
        //         this.transform.sx -= .6
        //     }
        // }

        if (bulletComponent.fired == true && ((bulletComponent.transform.x >= this.transform.x-1 && bulletComponent.transform.x <= this.transform.x+5) && ((bulletComponent.transform.y >= this.transform.y-1) && (bulletComponent.transform.y <= this.transform.y+5)))){
            num_destroy += 1
            crunchyBulletComponent.parent.destroy()
            this.parent.destroy()
            bulletComponent.fired = false
            if (num_destroy == enemy_num){
                num_destroy = 0 
                enemy_num += 1
                waveNumGameObject.num +=1
                SceneManager.changeScene(1)
            }

        }
        // if (this.transform.sx < -50){
        //     this.fired = false
        //     this.transform.sx = this.transform.x
        //     this.transform.sy = this.transform.y
        // }
        // if (this.transform.sx > 50){
        //     this.fired = false
        //     this.transform.sx = this.transform.x
        //     this.transform.sy = this.transform.y
        // }
        // if (this.transform.sy < -30){
        //     this.fired = false
        //     this.transform.sx = this.transform.x
        //     this.transform.sy = this.transform.y
        // }
        // if (this.transform.sy > 30){
        //     this.fired = false
        //     this.transform.sx = this.transform.x
        //     this.transform.sy = this.transform.y
        // }
        // if(this.fired == true && ((this.transform.sx <= turretComponent.transform.x+3.5 && this.transform.sx >= turretComponent.transform.x-3.5) && (this.transform.sy <= turretComponent.transform.y+1.5 && this.transform.sy >= turretComponent.transform.y-1.5))){
        //     this.fired = false
        //     hpComponent.hp -= 1
        // }
    }
    // draw(ctx){
        
    //     ctx.fillStyle = "Yellow"
    //     ctx.fillRect(this.transform.x, this.transform.y, this.cubeSide, this.cubeSide)

    //     if (this.fired == true){
    //         ctx.fillStyle = "white"
    //         if (this.position == 0){
    //             ctx.fillRect(this.transform.sx+1, this.transform.sy, .5, .5)
    //         }
    //         else if (this.position == 1){
    //             ctx.fillRect(this.transform.sx+2, this.transform.sy+1, .5, .5)
    //         }
    //         else if (this.position == 2){
    //             ctx.fillRect(this.transform.sx+1, this.transform.sy+2, .5, .5)
    //         }
    //         else if (this.position == 3){
    //             ctx.fillRect(this.transform.sx, this.transform.sy+1, .5, .5)
    //         }
    //     }
    // }
}

class MainScene extends Scene {
    constructor(){
        super("tan")
    }
    start() {
        this.addGameObject(new GameObject("MainControllerGameObject")).addComponent(new MainController())
        this.addGameObject(new GameObject("WaveNumGameObject")).addComponent(new WaveNumComponent())
        
        for (let i = 0; i < enemy_num; i++){
        

        this.addGameObject(
            new GameObject("CrunchyGameObject_" + i)
                .addComponent(new CrunchyComponent())
                .addComponent(new Rectangle("Yellow", "Yellow", 2)))
        GameObject.getObjectByName("CrunchyGameObject_" + i).getComponent("CrunchyComponent").num = i

        this.addGameObject(
            new GameObject("CrunchyBulletGameObject_" + i)
                .addComponent(new CrunchyBulletComponent())
                .addComponent(new Rectangle("White", "White", .1)))
        GameObject.getObjectByName("CrunchyBulletGameObject_" + i).getComponent("CrunchyBulletComponent").num = i
        GameObject.getObjectByName("CrunchyBulletGameObject_" + i).layer = -1
        }

        

        this.addGameObject(
            new GameObject("TrackGameObject")
                .addComponent(new TrackComponent())
                .addComponent(new Rectangle("Gray", "Gray", 5)))

        
        

        this.addGameObject(
            new GameObject("TurretGameObject")
                .addComponent(new TurretComponent())
                .addComponent(new Rectangle("Green", "Green", 2)))
                


        this.addGameObject(
            new GameObject("GunGameObject")
                .addComponent(new GunComponent())
                .addComponent(new Rectangle("Green", "Green", .5)))


        this.addGameObject(
            new GameObject("BulletGameObject")
                .addComponent(new BulletComponent())
                .addComponent(new Rectangle("White", "White", .1)))
        GameObject.getObjectByName("BulletGameObject").layer = -1

        let hpGameObject = new GameObject("HPGameObject")
        hpGameObject.addComponent(new HPComponent())
        this.addGameObject(hpGameObject)

        this.addGameObject(
            new GameObject("HPGameObject")
                .addComponent(new HPComponent())
                .addComponent(new Rectangle(`rgb(57, 235, 20)`, `rgb(57, 235, 20)`, 1)))
        GameObject.getObjectByName("HPGameObject").layer = 1
        this.addGameObject(
            new GameObject("AntiHPGameObject")
                .addComponent(new AntiHPComponent())
                .addComponent(new Rectangle("red", "red", 1)))
        GameObject.getObjectByName("AntiHPGameObject").layer = 2
        

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


class EndScene extends Scene {
    constructor(){
        super("black")
    }
    start(){
    this.addGameObject(new GameObject("EndControllerGameObject")).addComponent(new EndController)
    this.addGameObject(new GameObject("EndTextGameObject_1").addComponent(new GUIText("Game Over", "Red", "8px Courier")), new Vector2(30, 25))
    this.addGameObject(new GameObject("EndTextGameObject_2").addComponent(new GUIText("Press \'a\' to restart", "Red", "8px Courier")), new Vector2(2, 35))
    
    }
}

let startScene = new StartScene()
let waveScene = new WaveScene()
let mainScene = new MainScene()
let endScene = new EndScene()

window.allScenes = [startScene, waveScene, mainScene, endScene]