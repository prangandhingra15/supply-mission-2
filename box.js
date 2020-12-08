class Box{
    constructor(x,y,w,h){
        var box_options ={
            restitution: 1.0
        }
    
        this.box = Bodies.rectangle(x,y,w,h,box_options);

        this.width=w
        this.height=h

        World.add(world,this.box);
    }
    display(){
       var p=this.box.position
       var angle=this.box.angle
       
       rectMode(CENTER)
       fill("red")
       rect(p.x,p.y,this.width,this.height)
    
    }

}