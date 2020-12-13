class Division{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        //    restitution:1,
          //  friction:1
        }
        //this.x=x;
        //this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       // push()
       // translate(pos.x,pos.y);
      //  rotate(this.body.angle);
   rectMode(CENTER);
        fill("blue");
rect(pos.x,pos.y,this.width,this.height);
    
}
}