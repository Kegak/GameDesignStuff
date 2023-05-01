//The code for our example game
class ControllerComponent extends Component {
    start() {
        this.addCircle()
    }
    update(){
        if(InputDeviceInfo.mouseUp){
            let screenX = Input.mouse.x
            let screenY = Input.mouse.y
            circleGameObject = GameObject.getObjectByName("CircleGameObject")
            let circleCenterX = circleGameObject.transform.x
            let circleCenterY = circleGameObject.transform.y

            let distance = Math.sqrt((screenX-circleCenterX))
        }
    }
    addCircle(){
        let circle = GameObject.instantiate(new CircleGameObject())
        circle.transform.sx = 2
        circle.transform.sy = 3
    }
  }

  class CircleGameObject extends GameObject{
    name="CircleGameObject"
    start(){
        this.addComponent(new Circle("blue"))
    }

  }
  
  class ExampleScene extends Scene {
    start() {
      this.addGameObject(
        new GameObject("ControllerGameObject")
          .addComponent(new ControllerComponent())
      )
    }
  }
  
  //export the main scene so the .html file can run the game.
  export default new ExampleScene();