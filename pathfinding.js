class Pathfinder {
  constructor() {

  }

  navigate(x1,y1,x2,y2){
    console.log("going from " +x1+ ","+y1+" to " + x2+","+y2);
    let start = createVector(x1,y1);
    let goal = createVector(x2,y2);
    fill(0,255,0);
    circle(x1 * ratioW + ratioW / 2, y1 * ratioH + ratioH / 2, 10);
    fill(0,0,255);
    circle(x2 * ratioW + ratioW / 2, y2 * ratioH + ratioH / 2, 10);

    let dir = p5.Vector.sub(goal,start);
    dir.normalize();

    console.log(dir.heading());
    let angle = dir.heading();

      if(angle > QUARTER_PI && angle < 3*QUARTER_PI){
        console.log("down");
      } else if ((angle > 3*QUARTER_PI && angle <= PI )||(angle <= -PI && angle > -3*QUARTER_PI)) {
        console.log("left");
      } else if (angle > -3*QUARTER_PI && angle < -QUARTER_PI) {
        console.log("up");
      } else if (angle > -QUARTER_PI && angle < QUARTER_PI) {
        console.log("right");
      } else if (angle == 3*QUARTER_PI) {
        console.log("random left,down");
      } else if (angle == -3*QUARTER_PI) {
        console.log("random left,up");
      } else if (angle == -QUARTER_PI) {
        console.log("random right,up");
      }else if (angle == QUARTER_PI) {
        console.log("random right,down");
      }




  }

  nextStep(x1,y1,x2,y2){
    

  }



}
