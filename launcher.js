class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.7,
            length: 10
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(40);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.launcher.bodyA = null;
    }
}