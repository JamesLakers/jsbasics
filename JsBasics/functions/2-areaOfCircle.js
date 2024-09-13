//get the area of a circle with read only property (area = pie * radius squared)

//get without set make property ready only
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area); //3.141592653589793