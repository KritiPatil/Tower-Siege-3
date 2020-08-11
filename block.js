class Block{
    constructor(x, y, width, height, color) {
        var options = {
          'isStatic': false,
            'restitution':1,
            'friction':0.1,
            'density':1.2
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.color = color;
        this.visibilty = 255;
      }

      score() {
        if(this.visibilty <3 && this.visibilty >- 305) {
          score++;
        }
      }

      show(){
        var angle = this.body.angle;

        if(this.body.speed < 3) { push();
          fill (this.color);
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
       }else {
         World .remove(world, this.body);
         push ();
         this.visibilty = this.visibilty - 5;
         //tint (255, this.visibilty );
         pop ();
       };
      }
}