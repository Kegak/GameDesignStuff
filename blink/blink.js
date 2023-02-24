class BlinkComponent extends Component{
    start(){
        let time = 0
        let up = true
    }
    update(){
        if(this.up){
            this.time++;
            if(this.time >=255){
                this.up = false
            }
            }
            else{
                this.time--;
                if(this.time<=0){
                    this.up = true
                }
            }
    }
    draw(ctx){
    ctx.fillStyle = `rgb(0,${time},0)`

    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
    }
}
class BlinkGameObject extends GameObject{
    start(){
        let blinkComponent = new BlinkComponent();
        this.addComponent(blinkComponent);
    }
}

let mainScene = new Scene();
mainScene.start = function(){
    let blinkGameObject = new BlinkGameObject()
    this.addGameObject(blinkGameObject)
}

SceneManager.addScene(mainScene)