import "/engine/engine.js"

class StartController extends Component {
    start() {
        this.freezeTime = 0
        this.maxFreezeTime = 1

    }
    update() {
        this.freezeTime += Time.deltaTime
        if (keysDown["a"] && this.freezeTime >= this.maxFreezeTime) {
            SceneManager.changeScene(1)
        }

    }

}

class StartCameraComponent extends Component {
    start() {

    }
    update() {
        this.parent.transform.x += 0;
        // this.parent.transform.sx = 10;
        // this.parent.transform.sy = 10;
    }
}

class StartScene extends Scene {
    constructor() {
        super("black")
    }
    start() {
        this.addGameObject(new GameObject("StartControllerGameObject").addComponent(new StartController()))
        this.addGameObject(new GameObject("MicrovaniaGameObject").addComponent(new Text("Dogvania", "red")), new Vector2(-55, 10))
        
        Camera.main.parent.addComponent(new StartCameraComponent());
    }
}

class PlayerComponent extends Component {
    start(){
        this.transform.x = 0
        this.transform.y = 0
    }
    update(){
        if(keysDown["ArrowLeft"]){
            this.transform.x -= 1
        }
        else if(keysDown["ArrowRight"]){
            this.transform.x += 1
        }
    }
}

class MomentumBoundaryTrackerComponent extends Component {
    update() {
      let playerGameObject = GameObject
        .getObjectByName("PlayerGameObject")
  
      let maxDifference = 10;
      let difference = playerGameObject.transform.x - this.transform.x;
  
      if (difference > maxDifference) {
        //The player is to the right
        this.transform.x += .1 * (difference - maxDifference)
      }
      else if (difference < -maxDifference) {
        //The player is to the left
        this.transform.x += .1 * (difference + maxDifference)
      }

      maxDifference = 20;
      difference = playerGameObject.transform.y - this.transform.y;
  
      if (difference > maxDifference) {
        //The player is to the right
        this.transform.y += .1 * (difference - maxDifference)
      }
      else if (difference < -maxDifference) {
        //The player is to the left
        this.transform.y += .1 * (difference + maxDifference)
      }


    }
  }



class FloorComponent extends Component{
    start(){
        this.transform.x = 0
        this.transform.y = 12
        this.transform.sx = 300
    }

}



class DoorComponent extends Component{
    name = "DoorComponent"
    start(){
        this.transform.x = 130
        this.transform.y = -6
        this.transform.sy = 10
        this.parent.doNotDestroyOnLoad()
        this.doornum = 1
    }
    update(){
        let playerGameObject = GameObject.getObjectByName("PlayerGameObject")
        let playerComponent = playerGameObject.getComponent("PlayerComponent")
        if ((playerComponent.transform.x >= this.transform.x-5 && playerComponent.transform.x <= this.transform.x+5) && keysDown["ArrowUp"]){
            this.doornum += 1
            if (this.doornum == 3){
                this.transform.y = -200
            }

            SceneManager.changeScene(this.doornum)
        }
    }
}

class DogComponent extends Component{
    name = "DogComponent"
    start(){
        this.transform.x = 75
        this.transform.y = 0
        this.pet = false
        this.parent.doNotDestroyOnLoad()
    }
    update(){
        let playerGameObject = GameObject.getObjectByName("PlayerGameObject")
        let playerComponent = playerGameObject.getComponent("PlayerComponent")
        if ((playerComponent.transform.x >= this.transform.x-5 && playerComponent.transform.x <= this.transform.x+5) && keysDown["e"]){
            this.pet = true
        }
    }
}

class FirstScene extends Scene {
    constructor() {
        super(`rgb(90,90,90)`)
    }
    start(){
        this.addGameObject(new GameObject("FloorGameObject")).addComponent(new FloorComponent()).addComponent(new Rectangle("black", "black", 15))
        this.addGameObject(new GameObject("PlayerGameObject")).addComponent(new PlayerComponent()).addComponent(new Rectangle("red", "red", 10))
        this.addGameObject(new GameObject("DoorGameObject")).addComponent(new DoorComponent()).addComponent(new Rectangle("brown", "brown", 10))
        GameObject.getObjectByName("DoorGameObject").layer = -1
        Camera.main.parent.addComponent(new MomentumBoundaryTrackerComponent())
    }
}

class SecondScene extends Scene{
    constructor() {
        super(`rgb(90,90,90)`)
    }
    start(){
        this.addGameObject(new GameObject("FloorGameObject")).addComponent(new FloorComponent()).addComponent(new Rectangle("black", "black", 15))
        this.addGameObject(new GameObject("PlayerGameObject")).addComponent(new PlayerComponent()).addComponent(new Rectangle("red", "red", 10))
        this.addGameObject(new GameObject("DogGameObject")).addComponent(new DogComponent()).addComponent(new Rectangle("tan", "tan", 10)).addComponent(new Rectangle("Black", "black", .5))
        GameObject.getObjectByName("PlayerGameObject").layer = +1
        // this.addGameObject(new GameObject("DoorGameObject")).addComponent(new DoorComponent()).addComponent(new Rectangle("brown", "brown", 10))
        
        Camera.main.parent.addComponent(new MomentumBoundaryTrackerComponent())
    }
}

class EndTextComponent extends Component{
    start(){
        let dogGameObject = GameObject.getObjectByName("DogGameObject")
        let dogComponent = dogGameObject.getComponent("DogComponent")
        // let doorGameObject = GameObject.getObjectByName("DoorGameObject")
        // let doorComponent = doorGameObject.getComponent("DoorComponent")
        dogComponent.transform.y = -200
        // doorComponent.transform.y = -200
        if (dogComponent.pet == true){
            this.parent.getComponent("Text").string = "Good Ending: You pet the dog"
        }
        else{
            this.parent.getComponent("Text").string = "Bad Ending: You didn't pet the dog"
        }
    }
}

class EndScene extends Scene {
    constructor() {
        super("black")
    }
    start() {

        this.addGameObject(new GameObject("PlayerGameObject")).addComponent(new PlayerComponent())

        // this.addGameObject(new GameObject("DoorGameObject")).addComponent(new DoorComponent())

        this.addGameObject(new GameObject("DogGameObject")).addComponent(new DogComponent())

        this.addGameObject(new GameObject("EndTextGameObject").addComponent(new EndTextComponent).addComponent(new Text("", "red", "13px Courier")), new Vector2(-130, 10))
        

        Camera.main.parent.addComponent(new StartCameraComponent());
    }
}
let startScene = new StartScene()
let firstScene = new FirstScene()
let secondScene = new SecondScene()
let endScene = new EndScene()

window.allScenes = [startScene, firstScene, secondScene, endScene]