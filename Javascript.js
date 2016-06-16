//create object cpnstructor with properties
function address(number, street, city){
    this.number = number;
    //create nested object
    this.street = street;
    this.city = city;
    };


//create new instance
var newHome = new address("1", "First Street", "Big City");

document.getElementById("demo").innerHTML = newHome.number + "<br>" + newHome.street + "<br>" + newHome.city;

