class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke("#312015")
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x, pointA.y, pointB.x+20, pointB.y);
            pop()
        }
        image(this.sling1,200,50)
        image(this.sling2,170,50)

    }
    
}