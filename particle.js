class Particle{
    constructor(x,y,r){
        var options = {
            'restitution' : 0.8,
            'density' : 0.8,
            'friction' : 1.0 
        }
        this.body = Bodies.circle(x,y,this.r,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }
    display(){
        var parpos = this.body.position
        push(); 
        translate(parpos.x,parpos.y)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("black")
        ellipse(0,0,this.r)
        pop();
    }
    
}