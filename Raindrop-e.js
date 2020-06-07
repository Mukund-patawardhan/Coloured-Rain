class Rde extends Raindrop{
    constructor(x,y){
      super(x,y,50,50);
      this.image1 = loadImage("ex with rd.png");
      this.image2 = loadImage("ex rain colorful.png");
    }
    display(){
      super.display();
      if(this.body.position.y>1000){
        Matter.Body.setPosition(this.body,{x:this.body.position.x,y:100});      }
    }
  }