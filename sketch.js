var dog,happyDog
var iogImg
var food,foodStock;
var databaase;
var foodS;
var food=20;
function preload()
{
 dogImg=loadImage("images/dogImg.png")	
 happyDog=loadImage("images/dogImg1.png")
}
function setup() {
  database = firebase.database();
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
	createCanvas(500,500);
  dog=createSprite(300,250,30,20)
  dog.addImage(dogImg)
  dog.scale=0.2;
}
function draw() {  
background("green")
console.log(foodS)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
  }
  if(keyWentDown(DOWN_ARROW)){
    wStock(foodS)
    dog.addImage(dogImg)
    }
  drawSprites();
  
  textSize(20)
  fill("white")
  text("press 'UP ARROW'to feed the dog",50,70)

  textSize(20)
  fill("white")
  text("foodRemaining: "+foodS,170,170)

  
  textSize(20)
  fill("white")
  text("press 'DOWN ARROW'to back",200,400)
}

function readStock(data){
  foodS=data.val()
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}
function wStock(x){

  
    x=x+1;
  
  database.ref("/").update({
    food:x
  })
}

