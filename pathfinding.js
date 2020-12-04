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




  }

  nextStep(x1,y1,x2,y2){
    let now = createVector(x1,y1);
    let next = createVector(x1,y1);
    let goal = createVector(x2,y2);
    let dir = p5.Vector.sub(goal,now);
    let angle = dir.heading();

    if(angle > QUARTER_PI && angle < 3*QUARTER_PI){
      console.log("down");
      next.y += 1;
    } else if ((angle > 3*QUARTER_PI && angle <= PI )||(angle <= -PI && angle > -3*QUARTER_PI)) {
      console.log("left");
      next.x -= 1;
    } else if (angle > -3*QUARTER_PI && angle < -QUARTER_PI) {
      console.log("up");
      next.y -=1;
    } else if (angle > -QUARTER_PI && angle < QUARTER_PI) {
      console.log("right");
      next.x += 1;
    } else if (angle == 3*QUARTER_PI) {
      console.log("random left,down");
      if(random([true,false])){
        next.x-=1;
      }else {
        next.y+=1;
      }
    } else if (angle == -3*QUARTER_PI) {
      console.log("random left,up");
      if(random([true,false])){
        next.x-=1;
      }else {
        next.y-=1;
      }
    } else if (angle == -QUARTER_PI) {
      console.log("random right,up");
      if(random([true,false])){
        next.x+=1;
      }else {
        next.y-=1;
      }
    }else if (angle == QUARTER_PI) {
      console.log("random right,down");
      if(random([true,false])){
        next.x+=1;
      }else {
        next.y+=1;
      }
    }
    if (map.map[next.x][next.y]) {
      console.log("we need to do somthing here");

    }
    fill(0,255,120);
    circle(next.x * ratioW + ratioW / 2, next.y * ratioH + ratioH / 2, 10);
    return next;

  }



}
