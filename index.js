//NOTES:
//Completed 31/12/25 12:00

const fullch = 800;
const fullcw = 800;
const ch = fullch - 10;
const cw = fullcw - 10;
const buttonR = 25;
const row1 = ["Q","W","E","R","T","Z","U","I","O"];
const row2 = ["A","S","D","F","G","H","J","K"];
const row3 = ["P","Y","X","C","V","B","N","M","L"];
let buttonsRow1 = [];
let buttonsRow2 = [];
let buttonsRow3 = [];
let lampsRow1 = [];
let lampsRow2 = [];
let lampsRow3 = [];
let plugsRow1 = [];
let plugsRow2 = [];
let plugsRow3 = [];
let buffer = "";
var r1,r2,r3;
let wood_grain , blackSparkle;

function preload() {
  wood_grain = loadImage("wood_grain.png");
  blackSparkle = loadImage("leather_background.png");
}

// The x,y coordinates and the dimensions are all trial and error, pls do not change them.
function setup() {
  createCanvas(fullcw * 2, fullch);

  //--------------------------------------DISPLAY PORTION -----------------------------------------
  for(let i = 0; i < row1.length ; i++) {
    if(i == 0) {
      buttonsRow1[i] = new Button(buttonR + 26 + 30, 13*ch/16, buttonR, row1[i]);
      continue;
    }
    buttonsRow1[i] = new Button((i+2)*buttonR + i*53 + 30, 13*ch/16, buttonR, row1[i]);
  }
  
  for(let i=0 ; i < row2.length; i++) {
    if(i == 0) {
      buttonsRow2[i] = new Button(40 + buttonR*2 + 30, 14*ch/16 + 8, buttonR, row2[i]);
      continue;
    }
    buttonsRow2[i] = new Button((i+2)*buttonR + i*53 + 40 + 34, 14*ch/16 + 8, buttonR, row2[i]);
  }
  
  for(let i=0 ; i < row3.length; i++) {
    if(i == 0) {
      buttonsRow3[i] = new Button(buttonR + 26 + 25, 15*ch/16 + 10, buttonR, row3[i]);
      continue;
    }
    buttonsRow3[i] = new Button((i+2)*buttonR + i*53 + 30, 15*ch/16 + 10, buttonR, row3[i]);
  }
  
  //-----------------------------------------LAMP PORTION----------------------------------------------
  for(let i = 0; i < row1.length ; i++) {
    if(i == 0) {
      lampsRow1[i] = new Lamp(buttonR + 60, 13*ch/16 - ch/4, buttonR, row1[i]);
      continue;
    }
    lampsRow1[i] = new Lamp((i+2)*buttonR + i*53 + 30, 13*ch/16 - ch/4, buttonR, row1[i]);
  }
  
  for(let i=0 ; i < row2.length; i++) {
    if(i == 0) {
      lampsRow2[i] = new Lamp(40 + buttonR*2 + 30, 14*ch/16 - ch/4 + 8, buttonR, row2[i]);
      continue;
    }
    lampsRow2[i] = new Lamp((i+2)*buttonR + i*53 + 40 + 30, 14*ch/16 - ch/4 + 8, buttonR, row2[i]);
  }
  
  for(let i=0 ; i < row3.length; i++) {
    if(i == 0) {
      lampsRow3[i] = new Lamp(buttonR + 60, 15*ch/16 + 10 - ch/4, buttonR, row3[i]);
    }
    lampsRow3[i] = new Lamp((i+2)*buttonR + i*53 + 30, 15*ch/16 + 10 - ch/4, buttonR, row3[i]);
  }
  
  //---------------------------------------ROTOR PORTION-----------------------------------------------------------------
  r2 = new Rotor(380,50);
  r3 = new Rotor(170,50);
  r1 = new Rotor(570,50);
  
  //-----------------------------------------PLUGBOARD-------------------------------------------------------------------
  for(let i = 0; i < row1.length ; i++) {
    if(i == 0) {
      plugsRow1[i] = new Plug(buttonR + 26 + 20 + 800, 13*ch/16 - 150, buttonR, row1[i]);
      continue;
    }
    plugsRow1[i] = new Plug((i+2)*buttonR + i*53 + 20 + 800, 13*ch/16 - 150, buttonR, row1[i]);
  }
  
  for(let i=0 ; i < row2.length; i++) {
    if(i == 0) {
      plugsRow2[i] = new Plug(40 + buttonR*2 + 20 + 800, 14*ch/16 - 80, buttonR, row2[i]);
      continue;
    }
    plugsRow2[i] = new Plug((i+2)*buttonR + i*53 + 40 + 20 + 800, 14*ch/16 - 80, buttonR, row2[i]);
  }
  
  for(let i=0 ; i < row3.length; i++) {
    if(i == 0) {
      plugsRow3[i] = new Plug(buttonR + 26 + 20 + 800, 15*ch/16 - 10, buttonR, row3[i]);
      continue;
    }
    plugsRow3[i] = new Plug((i+2)*buttonR + i*53 + 20 + 800, 15*ch/16 - 10, buttonR, row3[i]);
  }
}

function draw() {
  
  background(220);  
  
  fill(220);
  noStroke();
  rect(0,0,cw,ch)  

  image(wood_grain,0,0,cw ,ch);
  image(blackSparkle,10,10,cw-20,ch-20);
  //-----------------------------------------DISPLAY PORTION------------------------------------------
  fill(0);
  var ench = ch/2;
  rect(cw,0,cw,ench); 
  image(wood_grain,cw + 5,0,cw,ench)

  // TextBox
  fill(235,213,179);
  rect(cw + 50 , ench/4 - 50, 2*cw/4 + 300, 2*ench/4 + 100);
  fill(0);
  textFont("Courier New");
  textSize(20);
  textAlign(CENTER, CENTER);
  text(buffer,cw + 50 , ench/4 - 50, 2*cw/4 + 300, 2*ench/4 + 100);

  //--------------------------------------KEYBOARD PORTION-----------------------------------------------
  for(let i = 0; i < row1.length ; i++) {
    buttonsRow1[i].show();
  }

  for(let i=0 ; i < row2.length; i++) {
    buttonsRow2[i].show();
  }

  for(let i=0 ; i < row3.length; i++) {
    buttonsRow3[i].show();
  }  

  for(let i = 0; i < row1.length ; i++) {
    lampsRow1[i].show();
    lampsRow1[i].updateLen();
  }

  for(let i=0 ; i < row2.length; i++) {
    lampsRow2[i].show();
    lampsRow2[i].updateLen();
  }

  for(let i=0 ; i < row3.length; i++) {
    lampsRow3[i].show();
    lampsRow3[i].updateLen();  
  }  
  
  //------------------------------------ROTOR PORTION-----------------------------------------
  r1.show();
  r2.show();
  r3.show();

  //----------------------------------PLUG BOARD----------------------------------------------
  fill(0);
  noStroke();
  rect(cw - 5,ch/2 - 5,cw - 10,ch/2);
  image(wood_grain,cw,ch/2,cw + 5,ch/2);
  image(blackSparkle,cw + 10,ch/2 + 10 ,cw - 20,ch/2 - 20)

  for(let i = 0; i < row1.length ; i++) {
    plugsRow1[i].show();
  }

  for(let i=0 ; i < row2.length; i++) {
    plugsRow2[i].show();
  }

  for(let i=0 ; i < row3.length; i++) {
    plugsRow3[i].show();
  }
}  

function mousePressed() {
  for(let i = 0; i < buttonsRow1.length; i++) buttonsRow1[i].click();
  for(let i = 0; i < buttonsRow2.length; i++) buttonsRow2[i].click();
  for(let i = 0; i < buttonsRow3.length; i++) buttonsRow3[i].click();

  for(let i = 0; i < lampsRow1.length; i++) lampsRow1[i].light_up();
  for(let i = 0; i < lampsRow2.length; i++) lampsRow2[i].light_up();
  for(let i = 0; i < lampsRow3.length; i++) lampsRow3[i].light_up();
 
  r1.rotateUp();
  r1.rotateDown();
  r2.rotateUp();
  r2.rotateDown();
  r3.rotateUp();
  r3.rotateDown();

  for(let i = 0; i < plugsRow1.length; i++) plugsRow1[i].click();
  for(let i = 0; i < plugsRow2.length; i++) plugsRow2[i].click();
  for(let i = 0; i < plugsRow3.length; i++) plugsRow3[i].click();
}

const rotor1 = [
  0,23,14,2,22,12,10,7,3,15,9,21,4,20,1,16,11,24,8,5,25,6,18,13,19,17
]
const rotor2 = [
  9,7,14,5,13,25,1,16,15,4,2,19,24,22,20,21,17,12,23,11,10,0,8,3,6,18
]
const rotor3 = [
  13,23,17,22,9,3,4,19,14,2,11,20,10,25,6,7,15,12,1,18,8,16,21,5,0,24
]
const reflector = [
  24,17,20,7,16,18,11,3,15,23,13,6,14,
  10,12,8,4,1,5,25,2,22,21,9,0,19
]


const rotorOrder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function invertRotor(arr) {
  var invArr = [];
  for(var i=0; i < arr.length; i++) {
    invArr[arr[i]] = i;
  }
  return invArr;
}

var rotor1Inv = invertRotor(rotor1);
var rotor2Inv = invertRotor(rotor2);
var rotor3Inv = invertRotor(rotor3);

function searchPlugPair(c) {
  let char = c;

  for (let i = 0; i < plugPair.length; i++) {
    if (plugPair[i] === char) {
      return (i % 2 === 0) ? plugPair[i + 1] : plugPair[i - 1];
    }
  }
  return char;
}

function encrypt(c) {

  // read from the keyboard
  c = searchPlugPair(c);
  console.log(c);
  var ind;
  for(var i = 0; i< rotorOrder.length; i++) {
    if(c == rotorOrder[i]) ind = i;
  }
  
  //Jumble one way through rotors
  ind = (ind + r1.index) % 26;
  ind = rotor1[ind];
  ind = (ind - r1.index + 26) % 26;
  
  ind = (ind + r2.index) % 26;
  ind = rotor2[ind];
  ind = (ind - r2.index + 26) % 26;
  
  ind = (ind + r3.index) % 26;
  ind = rotor3[ind];
  ind = (ind - r3.index + 26) % 26;
  
  //Reflect the signal
  ind = reflector[ind];
  
  //Jumble other way through rotors
  ind = (ind + r3.index) % 26;
  ind = rotor3Inv[ind];
  ind = (ind - r3.index + 26) % 26;
  
  ind = (ind + r2.index) % 26;
  ind = rotor2Inv[ind];
  ind = (ind - r2.index + 26) % 26;
  
  ind = (ind + r1.index) % 26;
  ind = rotor1Inv[ind];
  ind = (ind - r1.index + 26) % 26;
  
  //toggle again from the plugboard
  c = rotorOrder[ind];
  c = searchPlugPair(c);
  
  //console.log("after encryption: " + c);
  
  return c;
}

var counter = 0;

class Button {
  constructor(x,y,r,t) { 
    this.x = x;
    this.y = y;
    this.r = r;
    this.text = t;
  }
  
  click() {
    var d = dist(this.x,this.y,mouseX,mouseY);
    if(d <= this.r) {
      if(counter != 0 && counter % 5 == 0) {
        buffer += " ";
      }
      counter++;
      
      r1.index = (r1.index + 1) % r1.len;
      if(r1.index == 0){
        r2.index = (r2.index + 1) % r2.len;
        if(r2.index == 0) {
          r3.index = (r3.index + 1) % r3.len;
        }
      }
        
      var output = encrypt(this.text);
      buffer += output;
      lightKey = output;
    }
  }
  
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(0);
    circle(this.x,this.y,this.r*2);
    fill(255);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(this.text,this.x,this.y);
  }
}

var lightKey; //is updated at button.click()

class Lamp {
  constructor(x,y,r,t) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.text = t;
    this.duration = 350;//(ms)
  }
  
  light_up() {
    if(this.text == lightKey && this.len < buffer.length) {
      this.on = true;
      this.time = millis();
    }
  }
  
  show() {
    if(this.on && millis() - this.time < this.duration) {
      fill(255, 187 , 115);
    } else {
      fill(255);
    }
    
    stroke(0);
    strokeWeight(2);
    circle(this.x,this.y,this.r*2);
    fill(0);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(this.text,this.x,this.y);
  }
  
  updateLen() {
    this.len = buffer.length;
  }
}


class Rotor {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.index = 0;
    this.order = rotorOrder;
    this.len = this.order.length;
    this.width = 30;
    this.height = 94;
  }
  
  show() {
    fill(0);
    rect(this.x,this.y,40,300);
    fill(255);
    
    var offset = 5; // offset for the borders of the three rects.
    var lineOffset = 2; //offset between the three rects.
    
    //Top rect of the rotor
    let gradient1 = drawingContext.createLinearGradient(this.x + offset + this.width/2, this.y + offset, this.x + offset + this.width/2,this.y+offset+this.height);
    gradient1.addColorStop(0,color(0));
    gradient1.addColorStop(1,"white");
    drawingContext.fillStyle = gradient1;
    rect(this.x + offset, this.y + offset, this.width, this.height);
    rect(this.x + offset,this.y + offset + this.height + lineOffset, this.width, this.height);
    
    //Bottom rect of the rotor
    let grad2 = drawingContext.createLinearGradient(this.x + offset + this.width/2, this.y + offset + 2*lineOffset + 2*this.height, this.x + offset + this.width/2, this.y + offset + 2*lineOffset + 3*this.height);
    grad2.addColorStop(0,"white");
    grad2.addColorStop(1,color(0));
    drawingContext.fillStyle = grad2;
    rect(this.x + offset, this.y + offset + 2*lineOffset + 2*this.height, this.width, this.height);
    fill(0);
    
    var tmid = this.order[this.index];
    var tup = this.order[(this.index + 1) % this.len];
    var tdown = this.order[(this.index+this.len-1) % this.len];
    textSize(25);
    text(tmid,this.x + offset + this.width/2, this.y + offset + this.height + this.height/2);
    text(tup,this.x + offset + this.width/2, this.y + offset + this.height/2);
    text(tdown,this.x + offset + this.width/2, this.y + offset + 2*this.height + this.height/2);
  }
  
  //The tolerances for the rotate activation was all trial and error, please do not change the magic numbers in the bools.
  rotateDown() {
    var boolx = (mouseX < this.x + this.width + 10) && (mouseX > this.x - 10);
    var booly = (mouseY < this.y + 343) && (mouseY > this.y + 197);
    if(boolx && booly) {
      this.index = (this.index + 1) % this.len;
    }
  }
  
  rotateUp() {
    var boolx = (mouseX < this.x + this.width + 10) && (mouseX > this.x - 10);
    var booly = (mouseY < this.y + 149) && (mouseY > this.y);
    if(boolx && booly) {
      this.index = (this.index+this.len-1) % this.len;
    }
  }
}

var prev;
var plugPair = [];
var pairIndex = -1;

function searchPlug(key, t) {
  for(var i = 0; i < plugsRow1.length; i++) {
    if(plugsRow1[i].t == key) {
      plugsRow1[i].plugged = true;
      plugsRow1[i].key = t;
    }
  }
  for(var i = 0; i < plugsRow2.length; i++) {
    if(plugsRow2[i].t == key) {
      plugsRow2[i].plugged = true;
      plugsRow2[i].key = t;
    }
  }
  for(var i = 0; i < plugsRow3.length; i++) {
    if(plugsRow3[i].t == key) {
      plugsRow3[i].plugged = true;
      plugsRow3[i].key = t;
    }
  } 
  
}

class Plug {
  constructor(x,y,r,t) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.t = t;
    this.plugged = false;
    this.key;
    this.coords;
    this.row;
  }
  
  show() {
    fill(0);
    stroke(255);
    strokeWeight(5);
    circle(this.x,this.y,this.r*2);
    noStroke();
    fill(255);
    textSize(28);
    text(this.t,this.x, this.y - 40,);
    if(this.plugged) {
      fill(255);
      text(this.key,this.x,this.y);
    }
  }
  
  click() {
    var d = dist(this.x,this.y,mouseX,mouseY);
    if(!this.plugged && d < this.r) {
      pairIndex++;
      plugPair.push(this.t); 
      this.indicate();
    }
  }
  
  indicate() {
    if(pairIndex % 2 == 0) {
      prev = this.t;
    } else {
      this.plugged = true;
      this.key = plugPair[pairIndex - 1];
      searchPlug(plugPair[pairIndex - 1], this.t);
    }
  }
}