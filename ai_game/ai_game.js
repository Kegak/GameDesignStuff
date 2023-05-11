import "/engine/engine.js"

class PlayerComponent extends Component{
    name = "PlayerComponent"
    start(){
        this.max_y = false
        this.previous_x = 0
        this.previous_y = 0
        this.transform.x = -41.5
        this.transform.y = 21.5
        this.win = false
        this.truelist = [[],[-41.5],[21.5]]
        this.templist = [[],[],[]]
        this.moves = ["Up", "Down", "Left", "Right"]
        this.i = 0
        this.j = Math.floor(Math.random() * 4)
        this.less_j = 0
        this.dead = false
        
    }
    update(){
        
        let goalGameObject = GameObject.getObjectByName("GoalGameObject")
        let goalComponent = goalGameObject.getComponent("GoalComponent")
        let genGameObject = GameObject.getObjectByName("GenGameObject")
        let genComponent = genGameObject.getComponent("GenComponent")
        // if (keysDown["ArrowLeft"]) {
        //     this.transform.x -= .5;
        // }
        // else if (keysDown["ArrowRight"]) {
        //     this.transform.x += .5
        // }   
        // else if (keysDown["ArrowUp"]) {
        //     this.transform.y -= .5
        // }
        // else if (keysDown["ArrowDown"]) {
        //     this.transform.y += .5
        // }

        // this.transform.x = 30
        // this.transform.y = -21.5
        // Win transforms
        
        

        if (this.truelist[0].length == this.i){
        if (this.moves[this.j] == "Left") {
            this.transform.x -= .5;
            this.templist[0].push("Left")
            this.templist[1].push(this.transform.x)

        }
        else if (this.moves[this.j] == "Right") {
            this.transform.x += .5
            this.templist[0].push("Right")
            this.templist[1].push(this.transform.x)
        } 
        else if (this.moves[this.j] == "Up") {
            this.transform.y -= .5
            this.templist[0].push("Up")
            this.templist[2].push(this.transform.y)
        }
        else if (this.moves[this.j] == "Down") {
            this.transform.y += .5
            this.templist[0].push("Down")
            this.templist[2].push(this.transform.y)
        }


        if (this.dead == true){ 
            this.j = Math.floor(Math.random() * 4)
            this.less_j = 0
            this.moves = ["Up", "Down", "Left", "Right"]
            this.templist = [[],[],[]]
            this.i = 0
            this.dead = false
            this.truelist[1][0] = this.previous_x
            this.truelist[2][0] = this.previous_y
            this.truelist[0].pop()
            genComponent.num -= 1
            this.transform.x = -41.5
            this.transform.y = 21.5
        }

        else if (((this.templist[1][0] > this.truelist[1][0]) && this.transform.x < goalComponent.transform.x)){
            this.previous_x = this.truelist[1][0]
            this.truelist[1].pop()
            this.truelist[1].push(this.templist[1][0])
            this.truelist[0].push(this.moves[this.j])
            this.i = 0
            this.j = Math.floor(Math.random() * 4)
            this.templist = [[],[],[]]
            this.transform.x = -41.5
            this.transform.y = 21.5
            this.less_j = 0
            this.moves = ["Up", "Down", "Left", "Right"]
            genComponent.num += 1
        }
        else if ((this.templist[2][0] < this.truelist[2][0]) && this.transform.y > goalComponent.transform.y){
            this.previous_y = this.truelist[2][0]
            this.truelist[2].pop()
            this.truelist[2].push(this.templist[2][0])
            this.truelist[0].push(this.moves[this.j])
            this.i = 0
            this.j = Math.floor(Math.random() * 4)
            this.templist = [[],[],[]]
            this.transform.x = -41.5
            this.transform.y = 21.5
            this.less_j = 0
            this.moves = ["Up", "Down", "Left", "Right"]
            genComponent.num += 1
        }
        else{
            this.less_j += 1
            let x = this.moves.splice(this.j, 1)
            this.j = Math.floor(Math.random() * (4 - this.less_j))
            this.templist = [[],[],[]]
            this.i = 0
            this.transform.x = -41.5
            this.transform.y = 21.5
            
            
        }
    }

    else{
        if (this.truelist[0][this.i] == "Left") {
            this.transform.x -= .5;
            this.templist[0].push("Left")

        }
        else if (this.truelist[0][this.i] == "Right") {
            this.transform.x += .5
            this.templist[0].push("Right")
            
        }   
        else if (this.truelist[0][this.i] == "Up") {
            this.transform.y -= .5
            this.templist[0].push("Up")

        }
        else if (this.truelist[0][this.i] == "Down") {
            this.transform.y += .5
            this.templist[0].push("Down")
        }
        this.i += 1
    }
    
    


        if (this.transform.x <= -48.5){
            this.transform.x = -48.5
        }
        if (this.transform.x >= 48.5){
            this.transform.x = 48.5
        }
        if (this.transform.y <= -26.5){
            this.transform.y = -26.5
        }
        if (this.transform.y >= 26.5){
            this.transform.y = 26.5
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
        //playerComponent.transform.x >= this.transform.x - 10 && playerComponent.transform.x <= this.transform.x + 5
        if ((playerComponent.transform.y >= this.transform.y-24) && playerComponent.transform.x >= this.transform.x - 11 && playerComponent.transform.x <= this.transform.x + 11){
            playerComponent.dead = true
        }
    }
}

class GoalComponent extends Component{
    name = "GoalComponent"
    start(){
        this.transform.x = 30
        this.transform.y = -21.5
    }
    update(){
        let playerGameObject = GameObject.getObjectByName("PlayerGameObject")
        let playerComponent = playerGameObject.getComponent("PlayerComponent")
        //playerComponent.transform.y <= this.transform.y+5
        //playerComponent.transform.y <= this.transform.y-5
        //playerComponent.transform.x >= this.transform.x-5
        if ((playerComponent.transform.x <= this.transform.x+2 && playerComponent.transform.x >= this.transform.x-2) && (playerComponent.transform.y >= this.transform.y-2 && playerComponent.transform.y <= this.transform.y+2)){
            playerComponent.transform.x = -41.5
            playerComponent.transform.y = 21.5  
            playerComponent.win = true 
        }
    }
}

class GenComponent extends Component{
    name = "GenComponent"
    start(){
        this.transform.x = 25
        this.transform.y = 21.5
        this.num = 0
    }
    update(){
        this.parent.getComponent("Text").string = "Generation: " + this.num;
    }

}

class StartComponent extends Component{
    name = "StartComponent"
    start(){
        this.transform.x = -41.5
        this.transform.y = 21.5
    }
   
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
            this.addGameObject(
                new GameObject("GoalGameObject")
                    .addComponent(new GoalComponent())
                    .addComponent(new Rectangle("Green", "Green", 5)))
            GameObject.getObjectByName("GoalGameObject").layer = -1
            this.addGameObject(
                new GameObject("StartGameObject")
                    .addComponent(new StartComponent())
                    .addComponent(new Rectangle("Red", "Red", 5)))
            GameObject.getObjectByName("StartGameObject").layer = -1
            this.addGameObject(
                new GameObject("GenGameObject")
                    .addComponent(new GenComponent())).addComponent(new Text("", "White", "3px Arial"))
                    
    }
}

let startScene = new StartScene()
window.allScenes = [startScene]