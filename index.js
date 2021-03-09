// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let sum = (a, c) => a + c;
        return this.sides.reduce(sum);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let product = (a, c) => a * c;
        if (this.sides.reduce(product) == this.sides[0] ** 4) {
            return true;
        }
        else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}