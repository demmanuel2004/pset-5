window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
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
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function () {
     let ctx = document.getElementById("student-canvas-1").getContext('2d');
            ctx.font = "48px sans-serif";
            ctx.clearRect(0, 0, 1024, 128);

    let flag = true;
    while ( flag ) {
        let text = prompt("Message: ");
        if (text.length <= 50 && text.length >= 1) {
           
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

        var lLimit = width + xfactor;  // 36 +4=40    // (x,y)=(10,20) , width =40 ,40+10
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
    // write your exercise 3 code here
  
    let flag = true;
    while (flag) {
        let color = prompt("Color: ");

        //   if( color.length == 0 ) {
        //       alert( color + ' is not a supported color');
        //       continue;
        //   }

        color = color.toLowerCase();
        var colors = ['black', 'blue', 'green', 'orange', 'purple', 'red', 'yellow'];
        if (!colors.includes(color)) {
            alert(color + ' is not a supported color');
            continue;
        }

        const canvas = document.getElementById('canvas');

        const ctx = document.getElementById("student-canvas-3").getContext('2d');
        ctx.clearRect(0, 0, 1024, 128);
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50);
        flag = false;
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
    let flag = true;
    while (flag) {
        let a = prompt("Side 1: ");
        let b = prompt("Side 2: ");
        let c = prompt("Side 3: ");

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert("That's not a valid right triangle");
            continue;
        }

        if (a.length == 0 || b.length == 0 || c.length == 0) {
            alert("That's not a valid right triangle");
            continue;
        }

        //Check if between 1 and 1024
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        if (a < 1 || a > 1024) {
            alert("Please enter value less between 1 and 1024");
            continue;
        }

        if (b < 1 || b > 1024) {
            alert("Please enter value less between 1 and 1024");
            continue;
        }

        if (c < 1 || c > 1024) {
            alert("Please enter value less between 1 and 1024");
            continue;
        }

        //https://www.tutorialrepublic.com/javascript-tutorial/javascript-sorting-arrays.php
        //Get the 3 greatest number
        var numbers = [ a , b, c];
        numbers.sort(function(x, y){return y-x});
       
        //Reassign the numbers, a is largest, c is height, b is base
        a = numbers[0];
        b = numbers[1];
        c = numbers[2];

        //Check if a2 = b2 + c2
        var lhs = Math.pow(a, 2);
        var rhs = Math.pow(b, 2) + Math.pow(c, 2);
        if( lhs != rhs) {
            alert("That's not a valid right triangle");
            continue;
        }

        //Check if it will fit in canvas
        if( c > 999 ) {
            alert("Triangle will not fit in canvas");
            continue;
        } 

        //draw a triangle
        const ctx = document.getElementById("student-canvas-4").getContext('2d');
        ctx.clearRect(0, 0, 1024, 512);
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo( 25, c + 25);
        ctx.lineTo(25 + b , c + 25 );
        ctx.closePath();
        ctx.stroke();
        flag = false;
    }
};


/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
    let flag = true;
    while (flag) {
        let r = prompt("Radius: ");

        if ( isNaN(r) ) {
            alert("Your radius must be at least 32");
            continue;
        }

        if (r.length == 0 ) {
            alert("Your radius must be at least 32");
            continue;
        }

        //Check if between 1 and 1024
        r = parseInt(r);

        if (r < 32 || r > 512) {
            alert("Please enter value less between 32 and 512");
            continue;
        }

        if( r > 256 ) {
            alert("Smiley won't fit into the canvas");
            continue;            
        }


        //draw the circle
        const ctx = document.getElementById("student-canvas-5").getContext('2d');
        ctx.clearRect(0, 0, 1024, 512);
        ctx.beginPath();
        ctx.arc(512, 256, r, 0, 2 * Math.PI);
        ctx.stroke();

        //draw mouth
        ctx.beginPath();
        ctx.arc(512, 256, r * .7, 0, 1 * Math.PI);        
        ctx.stroke();

        //draw left eye
        ctx.beginPath();
        ctx.arc(512 - .4 * r, 256 - .4 * r, r * .15, 0, 2 * Math.PI);        
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(512 + .4 * r, 256 - .4 * r, r * .15, 0, 2 * Math.PI);        
        ctx.stroke();

        flag = false;
    }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
    let flag = true;
    while (flag) {
        let side = prompt("Side: ");

        if ( isNaN( side ) ) {
            alert("Your block size must be at least 1");
            continue;
        }

        if (side.length == 0 ) {
            alert("Your block size must be at least 1");
            continue;
        }

        //Check if between 1 and 1024
        side = parseInt(side);

        if (side < 1 ) {
            alert("Your block size must be at least 1");
            continue;
        }

        if( side > 100 ) {
            alert("Pyramid won't fit into the canvas");
            continue;            
        }


        //draw the pyramid
        const ctx = document.getElementById("student-canvas-6").getContext('2d');
        ctx.clearRect(0, 0, 1024, 512);
        // ctx.strokeRect( 512 - 10 - ( 50 ) , 10 + ( ( 1 - 1 ) * side ) , side, side);
        // return;

        for ( i = 1 ; i <= 5 ; i++) {
            offset = ( i - 1 ) * ( side / 2 ); 
            // console.log(offset);
            for ( j = i ; j <= 5; j++ ) {
                ctx.strokeRect( 10 + ( ( j - 1 ) * side ) - offset, 512 - 10 - ( i  * side ), side, side);
               // console.log( j + ' - ' + i );
            }
        }

        flag = false;
    }
};
