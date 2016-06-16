//create object with properties
function car(make, model, colour){
    this.make = make;
    this.model = model;
    this.colour = colour;

    };



//create new object
var newCar = new car("Nissan", "Micra", "Green");


document.getElementById("demo").innerHTML = "Make: " + newCar.make + "<br>" + "Model: " + newCar.model + "<br>" + "Colour: " + newCar.colour;

