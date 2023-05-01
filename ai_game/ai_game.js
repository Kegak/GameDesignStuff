import "/engine/engine.js"


class PlayerComponent extends Component{
    name = "PlayerComponent"
    start(){
        this.transform.x = -41.5
        this.transform.y = 21.5
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
}

class LavaComponent extends Component{
    name = "LavaComponent"
    start(){
        this.transform.x = 0
        this.transform.y = 10
        this.transform.sy = -30
    }
    update(){
        let playerGameObject = GameObject.getObjectByName("PlayerGameObject")
        let playerComponent = playerGameObject.getComponent("PlayerComponent")
        if (playerComponent){
            
        }
    }
}

class GoalComponent extends Component{
    
}

class StartScene extends Scene{
    constructor() {
        super("tan")
    }
    start(){
        this.addGameObject(
            new GameObject("PlayerGameObject")
                .addComponent(new PlayerComponent())
                .addComponent(new Rectangle("yellow", "yellow", 2)))
        this.addGameObject(
            new GameObject("LavaGameObject")
                .addComponent(new LavaComponent())
                .addComponent(new Rectangle("orange", "orange", 20)))
            GameObject.getObjectByName("LavaGameObject").layer = -1
    }
}

let startScene = new StartScene()
window.allScenes = [startScene]