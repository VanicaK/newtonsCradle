class Rope{
	constructor(body1, body2, pointA, pointB)
	{
		/*this.pointA=point1
		this.pointB=point2*/
		this.bodyA=body1
		this.bodyB=body2
		this.pointB=pointB
		this.pointA=pointA

	//create rope constraint here
		/*var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.point1,y:this.point2}
		}*/
		
		this.con=Constraint.create({
		bodyA:this.bodyA,
		bodyB:this.bodyB,
		pointA:{x:0,y:0},
		//pointB:{x:point1,y:point2},
		pointB:{x:this.pointA,y:this.pointB},
		length:250,
		stiffness:0.01,
		
		})
		
		World.add(world,this.con);
	}


    //create display() here 
	display(){
		let posA=this.bodyA.position
		let posB=this.bodyB.position
		let pointA=this.pointA
		let pointB=this.pointB

		push();
		translate(posB.x,posB.y);
		line((posA.x)-400,(posA.y)-100,this.pointA,this.pointB);
		pop();
	}

}
