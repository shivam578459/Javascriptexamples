
/* class Car{
    //no constructor, no this
    
     brand = "Toyota" //public class field
    color = "Red"

    drive(){

        console.log(`This ${this.color} ${this.brand}` )
    }

}
let dr = new Car()
dr.drive() */

class Car {
  constructor(brand, color) {
    this.brand = brand;    // This does nothing meaningful
    this.color = color;    // These values are not stored
  }

  drive() {
    console.log(`The ${this.color} ${this.brand} is driving.`); //  Error: color is not defined
  }
}

const car1 = new Car("Toyota", "Red");
car1.drive(); //  Error
