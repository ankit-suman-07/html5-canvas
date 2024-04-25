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


// ctx.rect(10,10, 150,100);
// ctx.strokeRect(10,10, 150,100);
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


// Red rectangle
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.fillRect(5, 5, 290, 140);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

ctx.clearRect(60, 35, 50, 50);


ctx.beginPath();
ctx.arc(95, 50, 40, 0, Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.arc(195, 250, 40, 0, 0.5 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(225, 250, 40, 0, 0.5 * Math.PI, true);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.stroke();

// The bezierCurveTo() method is used to define a cubic Bezier curve.
// cp1x	Required. The x-coordinate of the first control point
// cp1y	Required.The y - coordinate of the first control point
// cp2x	Required.The x - coordinate of the second control point
// cp2y	Required.The y - coordinate of the second control point
// x	Required.The x - coordinate of the end point
// y	Required.The y - coordinate of the end point

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.bezierCurveTo(345, 345, 400, 370, 420, 420);
ctx.stroke();

// createLinearGradient() method is used to define a linear gradient
// x0	Required. The x-coordinate of the start point
// y0	Required.The y - coordinate of the start point
// x1	Required.The x - coordinate of the end point
// y1	Required.The y - coordinate of the end point

// addColorStop() method specifies the color stops, and its position along the gradient.
// The positions can be anywhere between 0 and 1

// Horizontal gradient
const grad = ctx.createLinearGradient(0, 0, 280, 0);
// Vertical
// const grad = ctx.createLinearGradient(0, 0, 0, 130);
// Diagonal
// const grad=ctx.createLinearGradient(0,0, 280,130);
grad.addColorStop(0, "lightblue");
grad.addColorStop(1, "red");

// 3 color gradient
// grad.addColorStop(0, "lightblue");
// grad.addColorStop(0.5, "purple");
// grad.addColorStop(1, "darkblue");

ctx.fillStyle = grad;
ctx.fillRect(20, 20, 280, 130);

// createRadialGradient() method is used to define a radial/circular gradient
// x0	Required. The x-coordinate of the start circle
// y0	Required.The y - coordinate of the start circle
// r0	Required.The radius of the start circle
// x1	Required.The x - coordinate of the end circle
// y1	Required.The y - coordinate of the end circle
// r1	Required.The radius of the end circle
// const grad=ctx.createRadialGradient(150,75,15,150,75,150);