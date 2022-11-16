"use strict";

let roast3 = "";



 function renderCoffee(coffee) {
     var html = '<div class="coffee">';
     html += '<h3>' + coffee.name + '</h3>';
     html += '<p>' + coffee.roast + '</p>';
     html += '</div>';


     return html;
 }

function renderCoffees(coffees) {
    console.log(coffees)
    var html = '';
    for(let i = 0; i < coffees.length; i++){
        html += renderCoffee(coffees[i]);
    }

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];



    coffees.forEach(function (coffee) {

        if ( selectedRoast=== 'all'  && coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
            filteredCoffees.push(coffee);
            console.log(coffeeName.value);
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);


}





function addNewCoffee () {
    let newCoffee = {};
    let addId = (coffees.length)+1;
      newCoffee.name =   newCoffee2.value;
      newCoffee.roast = roast3;
      newCoffee.id = addId;

    coffees.push(newCoffee);
    console.log(coffees, newCoffee)

    tbody.innerHTML = renderCoffees(coffees);

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector("#coffee-box");

var newCoffee2 = document.querySelector("#coffee-box2");
const roastInput = document.querySelector(`#roast-selection2`);


tbody.innerHTML = renderCoffees(coffees);




submitButton.addEventListener('click', updateCoffees);

submitButton2.addEventListener('click', addNewCoffee);
coffeeName.addEventListener("keyup" , updateCoffees);
roastInput.addEventListener(`change`, function (){

    if (roastInput.value === `1`){
        roast3 = `light`;
    }
    if (roastInput.value === `2`){
        roast3 = `medium`;
    }
    if (roastInput.value === `3`){
        roast3 = `dark`;
    }
})

