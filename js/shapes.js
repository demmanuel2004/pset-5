window.onload = function() {

document.getElementById("hello-sample").onclick = sayHelloStaff;
document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
document.getElementById("triangle-sample").onclick = drawTriangleStaff;
document.getElementById("smile-sample").onclick = drawFaceStaff;
document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

// this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
//
// document.getElementById("some-id") <-- you need to give each button a unique ID
// and access it in this manner
//
// onclick is an event that is fired when you click something (in our case, a button).
// when we give onclick a value, we're telling JavaScript what to do when we click the button.
// you should set onclick equal to your function names (i.e., sayHello).
//
// there are six event listeners being added for the staff solutions. you'll have an
// equivalent set of six event listeners for your solutions. the first one is done for you.

document.getElementById("hello").onclick = sayHello;
 document.getElementById("rectangle").onclick = drawRectangle;
document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
document.getElementById("triangle").onclick = drawTriangle;
}

/*
* Exercise 1.
*/

const sayHello = function () {


let flag = true;
while ( flag ) {
let text = prompt("Message: ");
if (text.length <= 50 && text.length >= 1) {
let ctx = document.getElementById("student-canvas-1").getContext('2d');
ctx.font = "48px sans-serif";
ctx.clearRect(0, 0, 1024, 128);
ctx.strokeText(text, 30, 70, 994); //1024-30
flag = false;
} else {
if( text.length > 50) {
alert('Your message is too long. Keep it under 50 characters.');
} else {
alert('You did not enter anything');
}
}
}
}
/*
 * Exercise 2.
 */

const drawRectangle = function () {

let flag = true;
while (flag) {
let width = prompt("Width: ");
let height = prompt("Height: ");
let xfactor = prompt("X: ");
let yfactor = prompt("Y: ");

if (isNaN(width) || isNaN(height) || isNaN(xfactor) || isNaN(yfactor)) {
alert('One of your values is not a number');
continue;
}

if (width.length == 0) {
alert('Width must be between 1 and 1024');
continue;
}

if (height.length == 0) {
alert('Height must be between 1 and 512');
continue;
}

if (xfactor.length == 0) {
alert('X can not be less than 1');
continue;
}

if (yfactor.length == 0) {
alert('Y can not be less than 1');
continue;
}

width = parseInt(width);
height = parseInt(height);
xfactor = parseInt(xfactor);
yfactor = parseInt(yfactor);

if (width < 1 || width > 1024) {
alert('Width must be between 1 and 1024');
continue;
}

if (height < 1 || height > 512) {
alert('Height must be between 1 and 512');
continue;
}

if (xfactor < 1) {
alert('X can not be less than 1');
continue;
}

if (yfactor < 1) {
alert('Y can not be less than 1');
continue;
}

var lLimit = width + xfactor; // 36 +4=40 // (x,y)=(10,20) , width =40 ,40+10
var hLimit = height + yfactor;

if (hLimit > 512 || lLimit > 1024) {
alert("Your rectangle won't fit on the canvas.");
continue;
}

const canvas = document.getElementById('canvas');

const ctx = document.getElementById("student-canvas-2").getContext('2d');
ctx.clearRect(0, 0, 1024, 512);
ctx.strokeRect(xfactor, yfactor, width, height);
flag = false;
}
};
/*
 * Exercise 3.
 */
const drawColoredRectangle = function() {
  
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var color = prompt("Color: ");
    if (color == null) {
      break;
    }
    color = String(color)
    var color_upper = color.toUpperCase()
    if (color_upper != "GREEN" && color_upper != "BLACK" && color_upper != "BLUE" && color_upper != "ORANGE" && color_upper!= "PURPLE" && color_upper != "RED" && color_upper != "YELLOW") {
      alert(color + " is not a supported color.")
    }
  } while (color_upper != "GREEN" && color_upper != "BLACK" && color_upper != "BLUE" && color_upper != "ORANGE" && color_upper != "PURPLE" && color_upper != "RED" && color_upper != "YELLOW")

  if (color != null) {
    ctx.fillStyle = color_upper;
    ctx.fillRect(10, 10, 100, 50);
  }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
