//The code for our example game
class PlayerComponent extends Component {
    start() {
    }
    update() {
    }
    draw(ctx) {
      ctx.fillStyle = `rgb(0, 0,255)`
      ctx.fillRect(-10, -10, 20, 20)
    }
  }
  
  class ControllerComponent extends Component {
    start() {
      Camera.main.fillStyle = "gray"
    }
    update() {
      if (Math.random() < .1) {
        console.log("Cloud")
        let cloud = GameObject.instantiate(
          new CloudGameObject(),
          new Vector2(0, 0),
          new Vector2(10, 10))
          cloud.layer = -1
      }
    }
  }
  
  class CloudScene extends Scene {
    start() {
      this.addGameObject(
        new GameObject("PlayerGameObject")
          .addComponent(new PlayerComponent())
      )
      this.addGameObject(new GameObject("ControllerGameObject").addComponent(new ControllerComponent))
    }
  }
  
  class CloudComponent extends Component {
    update() {
      this.transform.x += 1 * Time.deltaTime;
    }
  }
  
  class CloudGameObject extends GameObject {
    start() {
      this.addComponent(new CloudComponent());
      this.addComponent(new Circle("white"))
    }
  }
  
  //export the main scene so the .html file can run the game.
  export default new CloudScene();