class Raindrop {
    constructor(x,y,width,height) {
      var options = {
          friction:10000000.0,
          gravity:1000000.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        for(var i=-1000;i<600;i=i+300){
        image(this.image1, 0, i,200,200);
        }
        for(var i=-800;i<500;i=i+300){
          image(this.image2, 0, i,200,200);
          }
        pop();
      
    }
  };