class Slingshot{
    constructor(bodyA, pointB){
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,170,20);
        if(this.chain.bodyA){
        
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push();
        strokeWeight(4);
        stroke(84,39,15);
        line(pointA.x - 20, pointA.y, pointB.x - 10 ,pointB.y);
        line(pointA.x - 20,pointA.y,pointB.x + 28,pointB.y);
        image(this.image3,pointA.x - 30,pointA.y - 10,15,30);
        pop();
        
    }
    }
   release() {
       this.chain.bodyA = null;
   }
   join(birdbody) {
       this.chain.bodyA = birdbody;
   }
}