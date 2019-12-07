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

const drawRectangle = function() {
  let height = prompt("Height: ");
  let width = prompt("Width: ");
  let xfactor = prompt("X: ");
  let yfactor = prompt("Y: ");

const canvas = document.getElementById('canvas');

const ctx = document.getElementById("rectangle-sample").getContext('2d');

ctx.fillRect(10, 10, 150, 100);
}
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
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
