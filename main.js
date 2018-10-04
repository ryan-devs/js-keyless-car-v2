"use strict";

let age = prompt("How old are you?");
if(age == 18)
    {alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {    
(age > 18) ? alert("Powering On. Enjoy the ride!") : alert("Sorry, you are too young to drive this car. Powering off");
}

function checkDriverAge(){
    let ageCheck = prompt("How old are you again, punk?");
    if(ageCheck == 18)
    {alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {    
(ageCheck > 18) ? alert("Powering On. Enjoy the ride!") : alert("Sorry, you are too young to drive this car. Powering off");
}
}

checkDriverAge();

var ageChecker = function(){
    let ageCheck = prompt("How old are you again, you liar?!?");
    if(ageCheck == 18)
    {alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {    
(ageCheck > 18) ? alert("Powering On. Enjoy the ride!") : alert("Sorry, you are too young to drive this car. Powering off");
}
}

ageChecker();