var marks = [30,40,45,35];
var sum = 0;

for (var i=0; i<marks.length; i++) {
  console.log(marks[i]);
}

for (var i=0; i<marks.length; i++) {
  sum += marks[i]
}
console.log(sum/marks.length);

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}