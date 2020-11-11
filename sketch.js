let map;
let mover;
let ratio;
let tiles = 25;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  ratioW = width / tiles;
  ratioH = height / tiles;
  map = new PlayArea(tiles, tiles);
  mover = new Mover(3, 3);


  noStroke();

}

function draw() {
  // put drawing code here
  background(200);
  map.show();
  mover.show();
}

function keyReleased() {
  switch (keyCode) {
    case UP_ARROW:
      mover.update(0, -1);
      break;
    case DOWN_ARROW:
      mover.update(0, 1);
      break;
    case LEFT_ARROW:
      mover.update(-1, 0);
      break;
    case RIGHT_ARROW:
      mover.update(1, 0);
      break;
    default:

  }
}



class PlayArea {
  constructor(sizeX, sizeY) {
    this.size = createVector(sizeX, sizeY);
    this.map = [];

    this.init(this.size.x, this.size.y);
    //this.shuffle(1,1,1);
  }

  init(sizeX, sizeY) {
    for (let i = 0; i < this.size.x; i++) {
      this.map[i] = [];
      for (let z = 0; z < this.size.y; z++) {
        this.map[i][z] = (i % 2 == 0 && z % 2 == 0) ? true : random([true, false]);



      }
    }
  }
  shuffle(safeX, safeY, safeR) {
    for (var i = 0; i < this.size.x; i++) {

      for (var z = 0; z < this.size.y; z++) {
        //this.map[i][z] = (i%2==0&&z%2==0) ? true : false;

        if (i % 2 == 0 && z % 2 == 0) {
          continue;
        }
        if ((i >= (safeX - safeR) && i <= (safeX + safeR)) && (z >= (safeY - safeR) && z <= (safeY + safeR))) {
          continue;
        }
        this.map[i][z] = random([true, false]);
      }
    }
  }

  show() {
    fill(50);
    rect(0, 0, 50, 50);
    for (let i = 0; i < this.size.x; i++) {

      for (let z = 0; z < this.size.y; z++) {
        //this.map[i][z] = true;
        fill((this.map[i][z]) ? 50 : 150);
        rect(i * ratioW, z * ratioH, ratioW, ratioH);




      }
    }
  }


}

class Mover {
  constructor(startX, startY) {
    this.pos = createVector(startX, startY);

  }
  update(moveX, moveY) {
    if (!map.map[(this.pos.x + moveX)][(this.pos.y + moveY)]) {
      this.pos.x += moveX;
      this.pos.y += moveY;
      map.shuffle(this.pos.x, this.pos.y, 2);
    }

  }
  show() {
    fill(255, 0, 0);
    circle(this.pos.x * ratioW + ratioW / 2, this.pos.y * ratioH + ratioH / 2, 10);
  }
}
