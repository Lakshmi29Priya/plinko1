class Particle
{
	constructor(x,y,r)
	{
		var options={
		
			restitution:0.4
			
			}

		this.r=r
		this.body=Bodies.circle(x, y, this.r, options)
       this.color=color(random(50,80),random(200,250),random(100,150));
        World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			var angle=this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
	 rotate(angle);
	 noStroke();
            fill(this.color);
			//strokeWeight(4);
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
