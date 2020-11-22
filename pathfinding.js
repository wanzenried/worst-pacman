class Pathfinder {
  constructor() {

  }

  navigate(x1,y1,x2,y2){
    console.log("going from " +x1+ ","+y1+" to " + x2+","+y2);
    let start = createVector(x1,y1);
    let goal = createVector(x2,y2);

    let dir = p5.Vector.sub(goal,start);
    console.log(dir);
  }

}
