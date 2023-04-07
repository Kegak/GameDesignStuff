//The code for our example game
class PlayerComponent extends Component {
    name = "PlayerComponent"
    speed = 20
    start() {
    }
    update() {
        if(keysDown["ArrowLeft"]){
            this.transform.x -=this.speed*Time.deltaTime
        }
        if(keysDown["ArrowRight"]){
            this.transform.x +=this.speed*Time.deltaTime
        }
    }
    draw(ctx) {
      ctx.fillStyle = `rgb(0, 0,255)`
      ctx.fillRect(-10, 0, 100, 100)
    }
  }
class ControllerComponent extends Component{
    start(){
        Camera.main.fillStyle = "gray"
    }
    update(){
        if (Math.random() > .99){
            SceneManager.getActiveScene
            .addGameObject(
                new CloudGameObject()
                )
            new Vector2(-55,0)
            new Vector2(5,5)
            }
        }
        //Update Camera Location
        let camera = Camera.main
        let player = GameObject.getObjectByName("PlayerGameObject").getComponet("PlayerComponent")
        camera.transform.x = player.transform.x
    }

class CloudComponent extends Component{
    start(){
        this.parent.layer = -1
    }
    update(){
        this.transform.x += 5 * Time.deltaTime
    }
}

class CloudGameObject extends GameObject{
    start(){
        this.layer = -1
        this.addComponent(new Circle())
        this.addComponent(new CloudComponent())
    }
  }
  class ExampleScene extends Scene {
    start() {
        this.addGameObject(
            new GameObject("BoxGameObject")
              .addComponent(new PlayerComponent()).addComponent(new Rectangle("blue")),
              new Vector2(0,0),
              new Vector2(10,10)
          )
      this.addGameObject(
        new GameObject("PlayerGameObject")
          .addComponent(new PlayerComponent()).addComponent(new Rectangle("blue")),
          new Vector2(0,0),
          new Vector2(10,10)
      )
    this.addGameObject(
        new GameObject("ControllerGameObject")
        .addComponent(new ControllerComponent())
      )
    }
  }
  
  //export the main scene so the .html file can run the game.
  export default new ExampleScene();