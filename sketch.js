var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var engine,world
var box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world

	box=new Box(400,655,350,10);
	box1=new Box(600,530,10,250);
	box2=new Box(200,525,10,250);
	
	
    var b={
		restitution:0.3
	}

	packageBody= Bodies.rectangle(500,200,50,50,b)
    World.add(world,packageBody)
	//console.log(packageBody)

	var p={
		 isStatic:false
	}
 

  
	ground=Bodies.rectangle(400,390,800,10,p);
    World.add(world,ground);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

    box.display()
	box1.display()
	box2.display()

    
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
   //Matter.Body.setStatic(false)
   Matter.Body.setStatic(packageBody,false)

    
  }
}



