const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,tree,mango,stone

function preload() {
    boyImg=loadImage("boy.png");
    mangoImg=loadImage("mango.png");
    stoneImg=loadImage("stone.png");
    treeImg=loadImage("tree.png");
}


function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;


}

function draw(){
    var canvas = createCanvas(600,400);
    ground = new Ground(600,height,1200,20);

    boy=createSprite(200, 200, 10,10);
	boy.addImage(boyImg)
	boy.scale=1

    stone=createSprite(220, 200, 10,10);
	stone.addImage(stoneImg)
	stone.scale=0.6

    tree=createSprite(400, 350, 70,10);
	tree.addImage(treeImg)
	tree.scale=3;

    function decolation(stone,mango);
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=stone.body.position;

    var distance=dist(stoneBodyPosition.X,stoneBodyPosition.Y,mangoBodyPosition.X,mangoBodyPosition.Y)
   If(distance<mango+stone)
   {
    Matter.body.setStatic(mango.Body,false);

   }

}




















































































































































































































































































































































































































































































































































































































































































































