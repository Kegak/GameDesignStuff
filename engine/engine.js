class SceneManager {
    static scenes = []
    static currentSceneIndex = 0
    static changedSceneFlag = true
    static addScene(scene) {
        SceneManager.scenes.push(scene)
    }
    static getActiveScene() {
        return SceneManager.scenes[SceneManager.currentSceneIndex];
    }
    static changeScene(index) {
        SceneManager.currentSceneIndex = index
        SceneManager.changedSceneFlag = true
    }
}

class Scene {
    gameObjects = []
    addGameObject(gameObject){
        this.gameObjects.push(gameObject);
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
    }
}

class Component{
    name = ""
    parent
    started = false

    //animal.name = "Fido"  if name is public
    //animal.setName("Fido") coorect Java encapsulation
    //animal.name = "Fido" using properties
    get transform(){
        return this.parent.components[0]
    }
    //no "set transform(newTransform)" makes property effectively read-only
}

class Transform extends Component{
    name = "Transform"
    x = 0
    y = 0
    sx = 1
    sy = 1
    r = 0
}

class Circle extends Component{
    name = "Circle"
    fillStyle = "white"
    draw(ctx) {
        ctx.fillStyle = this.fillStyle

        ctx.beginPath()
        ctx.arc(this.transform.x, this.transform.y, this.transform.sx, 0, Math.PI * 2)
        ctx.fill()
    }
}

class GameObject{
    name = ""
    components = []
    started = false
    constructor(name){
        this.name = name;
        this.addComponent(new Transform());
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component){
        this.components.push(component);
        component.parent = this;
        return this;
    }
    static getObjectByName(name){
        return SceneManager.getActiveScene().gameObjects.find(gameObject=>gameObject.name == name)
    }
    getComponent(name){
        return this.components.find(c=>c.name == name)
    }
}



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

function mouseDown(e) {
    //console.log("mouseDown: " + e.clientX + " " + e.clientY)
}
function mouseUp(e) {
    //console.log("mouseUp: " + e.clientX + " " + e.clientY)
}
function mouseMove(e) {
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
    if (e.key == "p") {
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
    if (e.key == " ") {
        e.preventDefault()
    }
}

function engineUpdate() {
    if (pause) return
    let scene = SceneManager.getActiveScene()
    if (SceneManager.changedSceneFlag && scene.start) {
        scene.gameObjects = []
        scene.start()
        SceneManager.changedSceneFlag = false
    }
    
    for(let gameObject of scene.gameObjects){
        if(gameObject.start && !gameObject.started){
            gameObject.start()
            gameObject.started = true
        }
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start && !component.started){
                component.start()
                component.started = true
            }
        }
    }

    //Handle destroy here

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }

    

}

function engineDraw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let scene = SceneManager.getActiveScene()
    
    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.draw){
                component.draw(ctx)
            }
        }
    }
}

function start(title) {
    document.title = title
    function gameLoop() {
        engineUpdate()

        engineDraw()

    }

    setInterval(gameLoop, 1000 / 25)

}