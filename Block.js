/*class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :1.0,
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibilty = 255;
        World.add(world, this.body);
      }
      display(){

        var angle = this.body.angle;
        var pos= this.body.position;
        
    if (this.body.speed<3){
        this.Visibilty = 255
    }
    else {
        World.remove(world, this.body); 
        push();
        this.Visibilty = this.Visibilty-5;
        tint(255, this.Visibilty);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
      }
}*/
class Block{
    constructor(x, y, width, height,color) {
        var options = {
          isStatic: false    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
