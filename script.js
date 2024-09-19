let playerMelee;
let projectile;
let border, crate;
let tileMap; 
let tileSize = 10
let enemy; 
let armour; 
let weapon; 
let levelState = 0 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  playerMelee = new Sprite(100,100);
  playerMelee.drag = 0;
  playerMelee.friction = 0;
  playerMelee.rotationLock = true
  playerMelee.w = tileSize
  playerMelee.h = tileSize

  border = new Group();
  border.collider = 's'
  border.w = tileSize
  border.h = tileSize

  wall = new border.Group()
  wall.tile = 'b'

  crate = new border.Group()
  crate.tile = 'c'
  
  
  tileMap = new 
  Tiles(["bbbbbbbbbbbbbbbbbbbbbbbb",
  "b......b........b......b",
  "b......b........b......b",
  "b......c........c......b",
  "b......c........c......b",
  "b......c........c......b",
  "b......b........b......b",
  "bbbbbbbb........bbbbbbbb",
  "b......................b",
  "b......................b",
  "b.......................",
  "b..........bb...........",
  "b..........bb...........",
  "b.......................",
  "b......................b",
  "b......................b",
  "bbbbbbbb........bbbbbbbb",
  "b......b........b......b",
  "b...............c......b",
  "b...............c......b",
  "b...............c......b",
  "b......b........b......b",
  "b......b........b......b",
  "bbbbbbbbbbbbbbbbbbbbbbbb",],0,0,tileSize, tileSize)
} //first level/ room design 

function draw() {
  
}


