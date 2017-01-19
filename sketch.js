var honeycomblist = [];
var honeycomblist2 = [];
var c = ('#ffffff')
var a = 8;
var n = 40;
var t = 10;
var strokec = 120;
var r, l, rt, lt, rb, lb, pond, index, honeycomb;
var u, d, rt2, lt2, rb2, lb2, pond2, index2, honeycomb2;



function setup() {

  createCanvas(windowWidth,windowHeight);
  background(c);

  // frameRate(10);

  multiple = round(random(40));

  r = createVector(a, 0, 0);
  l = createVector(-1 * a, 0, 0);
  rt = createVector(a, -2 * a, 0);
  lt = createVector(-1 * a, -2 * a, 0);
  rb = createVector(a, 2 * a, 0);
  lb = createVector(-1 * a, 2 * a, 0);

  u = createVector(0, -1 * a, 0);
  d = createVector(0, a, 0);
  rt2 = createVector(2 * a, -1 * a, 0);
  lt2 = createVector(-2 * a, -1 * a, 0);
  rb2 = createVector(2 * a, a, 0);
  lb2 = createVector(-2 * a, a, 0);

  index = round(random(6));

  pond = [r, l, rt, lt, rb, lb];

  index2 = round(random(6));
  pond2 = [u, d, rt2, lt2, rb2, lb2];

  for (var i = 0; i < t; i++) {
    honeycomb = {
        x: width / 2,
        y: height / 2,
        v0: pond[1],
        drawlines: function() {
          console.log("ORIGINAL" + this.v0);
          stroke(strokec,n);

          update1(this.v0);
          console.log("DRAWLINESVVVVVV::::::" + v);
          console.log("THISV" + this.v0);
          line(this.x, this.y, this.x + v.x, this.y + v.y);

          this.x += v.x;
          this.y += v.y;
          // fill(255,20);
          // ellipse(this.x, this.y, 2, 2);
          this.v0 = v;
        },
        // updatelines: function(){
        //   if (this.x >= width || this.x <= 0){
        //     this.x = width/2
        //   };
        //   if (this.y >= height || this.y <=0){
        //     this.y = height/2;
        //   }
        // }
      }
      //end of obj
    honeycomblist[i] = honeycomb;
  }
  //end of for


  for (var i = 0; i < t; i++) {
    honeycomb2 = {
        x: (width / 2) + a / 2,
        y: (height / 2) + 5 * a / 2,
        v2_: pond2[1],
        drawlines: function() {
          // console.log("ORIGINAL" + this.v0);
          stroke(strokec,n);

          update2(this.v2_);
          // console.log("DRAWLINESVVVVVV::::::" + v);
          // console.log("THISV" + this.v0);
          line(this.x, this.y, this.x + v2.x, this.y + v2.y);
          this.x += v2.x;
          this.y += v2.y;
          this.v2_ = v2;
          // fill(255,20);
          // ellipse(this.x, this.y, 2, 2);
        },
        //         updatelines: function(){
        //   if (this.x >= width || this.x <= 0){
        //     this.x = (width / 2) + a / 2
        //   };
        //   if (this.y >= height || this.y <=0){
        //     this.y = (height / 2) + 5 * a / 2
        //   }
        // }
      }
      //end of obj
    honeycomblist2[i] = honeycomb2;
  }
  //end of for

}

function draw() {


  for (var i = 0; i < honeycomblist.length; i++) {
    honeycomblist[i].drawlines();
    // honeycomblist[i].updatelines();
    honeycomblist2[i].drawlines();
    // honeycomblist2[i].updatelines();

  }
  
  // if (n >= 0 && n<=160){
  //   n -= 1;
  // }else if (n <= 0){
  //   n += 1;
  // }
}



function update1(v) {

  //right
  if (v.equals(r)) {
    console.log("right");
    if (random(1) >= 0.5) {
      v = createVector(a, 2 * a, 0);
      console.log("1")
    } else {
      v = createVector(a, -2 * a, 0);
      console.log("2")
    }
  }

  //left
  else if (v.equals(l)) {
    console.log("left")
    if (random(1) >= 0.5) {
      v = createVector(-1 * a, 2 * a, 0);
      console.log('1')
    } else {
      v = createVector(-1 * a, -2 * a, 0);
      console.log('2')
    }
  }

  //rightbottom
  else if (v.equals(rb)) {
    console.log("rightbottom")
    if (random(1) >= 0.5) {
      console.log("1")
      v = createVector(a, 0, 0);
    } else {
      console.log("2");
      v = createVector(-1 * a, 2 * a, 0);
    }
  }

  //leftbottom
  else if (v.equals(lb)) {
    console.log("leftbottom")
    if (random(1) >= 0.5) {
      console.log("1")
      v = createVector(-1 * a, 0, 0);
    } else {
      console.log('2')
      v = createVector(a, 2 * a, 0);
    }
  }

  //lefttop
  else if (v.equals(lt)) {
    console.log("lefttop")
    if (random(1) >= 0.5) {
      console.log("1")
      v = createVector(-1 * a, 0, 0);
    } else {
      console.log('2')
      v = createVector(a, -2 * a, 0);
    }
  }

  //righttop
  else if (v.equals(rt)) {
    console.log("righttp")
    if (random(1) >= 0.5) {
      console.log("1")
      v = createVector(a, 0, 0);
    } else {
      console.log("2")
      v = createVector(-1 * a, -2 * a, 0);
    }
  }

  console.log("v:::::" + v);
  this.v = v;
  console.log("this.v::::::" + this.v);

}

function update2(v2) {

  //up
  if (v2.equals(u)) {
    console.log("up");
    if (random(1) >= 0.5) {
      v2 = createVector(2 * a, -1 * a, 0);
      console.log("1")
    } else {
      v2 = createVector(-2 * a, -1 * a, 0);
      console.log("2")
    }
  }

  //down
  else if (v2.equals(d)) {
    console.log("down")
    if (random(1) >= 0.5) {
      v2 = createVector(-2 * a, 1 * a, 0);
      console.log('1')
    } else {
      v2 = createVector(2 * a, 1 * a, 0);
      console.log('2')
    }
  }

  //rightbottom2
  else if (v2.equals(rb2)) {
    console.log("rightbottom2")
    if (random(1) >= 0.5) {
      console.log("1")
      v2 = createVector(0, a, 0);
    } else {
      console.log("2");
      v2 = createVector(2 * a, -1 * a, 0);
    }
  }

  //leftbottom2
  else if (v2.equals(lb2)) {
    console.log("leftbottom2")
    if (random(1) >= 0.5) {
      console.log("1")
      v2 = createVector(0, 1 * a, 0);
    } else {
      console.log('2')
      v2 = createVector(-2 * a, -1 * a, 0);
    }
  }

  //lefttop2
  else if (v2.equals(lt2)) {
    console.log("lefttop2")
    if (random(1) >= 0.5) {
      console.log("1")
      v2 = createVector(0, -1 * a, 0);
    } else {
      console.log('2')
      v2 = createVector(-2 * a, 1 * a, 0);
    }
  }

  //righttop2
  else if (v2.equals(rt2)) {
    console.log("righttp2")
    if (random(1) >= 0.5) {
      console.log("1")
      v2 = createVector(0, -1 * a, 0);
    } else {
      console.log("2")
      v2 = createVector(2 * a, 1 * a, 0);
    }
  }

  console.log("v:::::" + v2);
  this.v2 = v2;
  console.log("this.v::::::" + this.v2);

}