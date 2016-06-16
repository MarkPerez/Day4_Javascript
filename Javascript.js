//create object with properties
function car(make, model, colour){
    this.make = make;
    this.model = model;
    this.colour = colour;
    //create property with method
    this.price = function(cost, discount){
        return cost - discount;
    };

};

//create new object
var newCar = new car("Nissan", "Micra", "Green");

//acces the method
var carPrice = newCar.price(5000, 200);

document.getElementById("demo").innerHTML = "Make: " + newCar.make + "<br>" + "Model: " + newCar.model + "<br>" + "Colour: " + newCar.colour + "<br>" + "Price: " + carPrice;

