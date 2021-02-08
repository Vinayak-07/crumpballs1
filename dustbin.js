class Dustbin {
    constructor(x, y, width, height ) {
      var options = {
          isStatic:true,
          'restitution':5,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("images/dustbingreen.png");      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);      
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);
    }
  };