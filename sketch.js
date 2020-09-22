var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var wall_1_sprite,wall_2_sprite,wall_3_sprite
var packageBody,ground
var wall_1_body,wall_2_body,wall_3_body
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
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall_1_sprite = createSprite(350,height-65,10,50);
	wall_1_sprite.shapeColor = "red";

	wall_2_sprite = createSprite(425,height-65,10,50);
	wall_2_sprite.shapeColor = "red";

	wall_3_sprite = createSprite(385,height-45,75,10);
	wall_3_sprite.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);
	

	wall_1_body = Bodies.rectangle(350,height-65,10,50)
	Matter.Body.setStatic(wall_1_body,true)
	
	wall_2_body = Bodies.rectangle(350,height-65,10,50)
	Matter.Body.setStatic(wall_2_body,true)

	wall_3_body = Bodies.rectangle(350,height-65,10,50)
	Matter.Body.setStatic(wall_3_body,true)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);	
  
}


function draw() {
  rectMode(LEFT);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  wall_1_sprite.x = wall_1_body.position.x
  wall_1_sprite.y = wall_1_body.position.y

  wall_2_sprite.x = wall_1_body.position.x
  wall_2_sprite.y = wall_1_body.position.y

  wall_3_sprite.x = wall_1_body.position.x
  wall_3_sprite.y = wall_1_body.position.y
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
    
  }
}



