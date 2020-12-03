var dog;
var food,foodS;
var dataBase;

function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  createCanvas(800, 700);
  dataBase = firebase.database();


  foodS = dataBase.ref('Food');
  foodS.on("value",readStock);

  dog = createSprite(400,450,0,0);
  dog.addImage(dog1);
  dog.scale = 0.3;
}


function draw() { 
  
  background("green");
  fill(255,255,0);
  textSize(20);
  text("NOTE : PLEASE PRESS UP ARROW TO FEED THE DOG",100,50);
  
  stroke(255,0,0);
  text("FOOD REMAINING :" + food ,300,100);

  if(keyDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(dog2);
  }

  drawSprites();
}

function readStock(){
food = data.val();
}

function writeStock(FOOD){

if(FOOD <= 0){
  FOOD = 0;
}else{
  FOOD = FOOD - 1;
}

dataBase.ref('/').update({
  Food : FOOD
})

}

