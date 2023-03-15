var bg, bgImg;
var player, shooterImg, shooter_shooting;
var bullet, bulletImg;
var zombie, zombieImg;

function preload() {
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bullet.png")
  zombieImg = loadImage("assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

  // Creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg);
  player.scale = 0.3;
  player.setCollider("rectangle", 0, 0, 300, 300);

}

function draw() {
  background(0, 0, 255); 

  // Clear the previous frame
  clear();

  // Draw the sprites
  drawSprites();

  // Moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30;
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30;
  }

  // Release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {
    player.addImage(shooter_shooting);
    showBullet();
  }

  // Player goes back to original standing image once we stop pressing the space bar
  else if (keyDown("space")) {
    player.addImage(shooterImg);
  }

  showZombie();
}

function showBullet() {
  bullet = createSprite(player.x, player.y, 20, 20);
  bullet.addImage(bulletImg);
  bullet.scale = 0.14;
  bullet.velocityX = 6;
}

function showZombie() {
  zombie = createSprite(windowWidth - 50, windowHeight / 2, 50, 50);
  zombie.addImage(zombieImg);
  zombie.scale = 0.2;
  zombie.velocityX = -2;
}
