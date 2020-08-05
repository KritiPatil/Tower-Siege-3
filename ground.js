class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
      }
      show(){
        var angle = this.body.angle;
        push();
        fill ("black");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}