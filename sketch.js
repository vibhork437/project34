var dog, happyDog  
var database, foodS;
var foodStock,readStock;
var img,img2
var Dog

function preload(){
  
  //load images here
  img = loadImage("Dog.png");
  img2 = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  Dog = createSprite(420, 320, 40, 40);
  Dog.addImage(img);
  img.resize(200, 200);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("red");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(img2);
    img2.resize(200,200)
  }

  
    
  
  drawSprites();
  //add styles here
  textSize(16);
text("Milk Bottles Left" + foodS,390,500);
text("Press up arrow key to feed Drago milk",200,200);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;

  }else{
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })

}

