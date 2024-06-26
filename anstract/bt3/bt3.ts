interface Geometry {
calculateArea():number;
calculatePerimeter():number;
}
class Circle implements Geometry {
private radius:number;
constructor(radius:number) {
this.radius = radius;
    }
calculateArea():number {
return Math.PI * this.radius * this.radius;
    }
calculatePerimeter():number {
return 2 * Math.PI * this.radius;  
    }
}
class Rectangle1 implements Geometry {
private width:number;
private height:number;
constructor(width: number, height:number) {
    this.width = width;
    this.height = height;
    }
calculateArea():number {
    return this.width * this.height;
    }
calculatePerimeter():number {
    return 2 * (this.width + this.height);
    }
}
let circle = new Circle(3);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
let rectangle = new Rectangle1(1, 2);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
