class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			//density:0.8
			
			}
	
		this.r=10
		this.body=Bodies.circle(x, y, this.r, options)
       this.color=color(random(50,80)),(random(200,250)),(random(100,150));
        World.add(world, this.body);

	}
	display()
	{
			
            var paperpos=this.body.position;
		var angle=this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			imageMode(CENTER)
            fill("white");
			noStroke();
			//strokeWeight(4);
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
		ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}