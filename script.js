const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");


// fillStyle	Defines the fill-color of the object/shape
// fillStyle property value can be a color (colorname, RGB, HEX, HSL), a gradient or a pattern.
// ctx.fillStyle = "red";
// Set the opacity to 50% for both the fillStyle and strokeStyle properties
ctx.fillStyle = "rgb(0 255 0 / 50%)";

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(150, 300);
ctx.lineTo(250, 300);
ctx.lineTo(200, 200);
ctx.stroke();


// fillRect(x, y, width, height)
ctx.fillRect(0, 0, 50, 30);


// strokeStyle	Defines the color of the outline of the object/shape
// moveTo(x, y) - defines the starting point of the line
// lineTo(x, y) - defines the ending point of the line
// To actually draw the line, use one of the "ink" methods, like stroke()

ctx.moveTo(20, 20);
ctx.lineTo(100, 100);
ctx.lineWidth = 5;
// strokeStyle property defines the color of the line.
ctx.strokeStyle = "blue";
// lineCap property defines the cap style of the line ("butt", "round" or "square").The default is "butt"
ctx.lineCap = "round";
ctx.stroke();

// draw an outlined rectangle with the strokeRect() method
ctx.strokeRect(70, 70, 150, 200);


// beginPath() - begins a path
// arc(x, y, r, startangle, endangle)
ctx.beginPath();
ctx.arc(50, 60, 20, 0, 90);
ctx.stroke();

// beginPath()	Declares that we are about to draw a new path (without drawing)
// moveTo(x,y)	Sets the start-point of the line in the canvas (without drawing)
// lineTo(x,y)	Sets the end-point of the line in the canvas (without drawing)
// stroke()	Draws the line. The default stroke color is black



