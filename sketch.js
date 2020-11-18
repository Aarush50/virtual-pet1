//Create variables here
var dog,dogImage,happydog,foodStock,foodS,database;
var fedTime,lastFed;
var Foodobj;
var feedpet,addfood;
function preload()
{
  dogImage=loadImage("dogImg.png");
  dogHappy=loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.1;
  foodStock=database.ref('Food');
  foodStock.on("value",readStocks);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  dog.scale=0.1;
}
textSize(18);
text("Note:Press UP_ARROW key to feed drago milk",100,50);
fill("white");
textSize(18);
text("Food remaining:"+foodS,120,20);
  drawSprites();
  //add styles here

}
function readStocks(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


