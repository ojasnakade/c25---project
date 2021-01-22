class Paper{
    constructor(x,y){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:0.13
          }
        
          this.body=Bodies.circle(x,y,60,options);
          this.radius=80;
          this.image=loadImage("paper.png")
          World.add(world,this.body);
          
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y) 
        rotate(angle);
        imageMode(RADIUS);
        fill("pink");
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}