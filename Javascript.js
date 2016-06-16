//create object with properties
function person(firstName, surName){
    this.firstName = firstName;
    this.surName = surName;
    this.fullName = function(){
        return firstName + " " + surName;
        }
    };


//create new object
var newPerson = new person("Mark", "Perez");

var newName = newPerson.fullName();

document.getElementById("demo").innerHTML = newName;

