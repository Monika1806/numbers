var n1,n2;


function setup() {
  createCanvas(400, 400);
}

num1= createInput();
num1.position (5,60);

num2= createInput();
num2.position (200,60);

b1 = createButton("ADD");
b1.position(10,200);
b1.mousePresses(add);

b2 = createButton("MULTIPLY");
b2.position(100,200);
b2.mousePresses(mul);


function draw() {
  background(220);
}