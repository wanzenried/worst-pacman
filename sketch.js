let map;
let mover;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  map = new PlayArea(25, 25);
  mover = new Mover(5,5);

  noStroke();

}

function draw() {
  // put drawing code here
  background(200);
  map.show();
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
        this.map[i][z] = (i%2==0&&z%2==0) ? true : random([true,false]);



      }
    }
  }
  shuffle(safeX,safeY,safeR){
    for (var i = 0; i < this.size.x; i++) {

      for (var z = 0; z < this.size.y; z++) {
        //this.map[i][z] = (i%2==0&&z%2==0) ? true : false;

        if (i%2==0&&z%2==0){
          continue;
        }
        if((i>=(safeX-safeR)&&i<=(safeX+safeR))&&(z>=(safeY-safeR)&&z<=(safeY+safeR))){
          continue;
        }
        this.map[i][z] = random([true,false]);
      }
    }
  }

  show() {
    fill(50);
    let widthF = width / this.size.x;
    let heightF = height / this.size.y;

    rect(0, 0, 50, 50);
    for (let i = 0; i < this.size.x; i++) {

      for (let z = 0; z < this.size.y; z++) {
        //this.map[i][z] = true;
        fill((this.map[i][z]) ? 50 : 150);
        rect(i*widthF, z*heightF, widthF, heightF);




      }
    }
  }


}

class Mover {
  constructor(startX,startY) {
    this.pos = createVector(startX,startY);

  }
  update(){

  }
  show(){
    fill(255,0,0);
    circle(this.pos.x*map.widthF,this.pos.y*map.heightF,10);
  }
}
