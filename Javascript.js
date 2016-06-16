//create object with properties
function address(name, number, road, city){
    this.name = name;
    //create nested object
    this.street = {
        number: number,
        road: road,
    }
    this.city = city;
    };


//create new object
var newHome = new address("Big House", "1", "First Street", "Big City");

//access nested object
var streetName = newHome.street.number + " " + newHome.street.road;

document.getElementById("demo").innerHTML = newHome.name + "<br>" + streetName + "<br>" + newHome.city;

