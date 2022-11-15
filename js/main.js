"use strict"

 function renderCoffee(coffee) {
     var html = '<div class="coffee">';
     html += '<h3>' + coffee.name + '</h3>';
     html += '<p>' + coffee.roast + '</p>';
     html += '</div>';

     return html;
 }

function renderCoffees(coffees) {
    var html = '';
    for(let i = 0; i < coffees.length; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}




function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var value = 'all';
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
        coffeeName.innerHTML = renderCoffees();
        }else if (coffee.roast === selectedRoast && coffee.name.toUpperCase().includes(coffeeName.value)) {
                    filteredCoffees.push(coffee);
                    console.log(coffeeName.value);
                } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeName.value)) {
                    filteredCoffees.push(coffee);
            }else{
        }
    });
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }




function newCoffee(inputCoffee){
    var newCoffee = (" ");

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
var newCoffee = document.querySelector("#coffee-box2");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', updateCoffees);
coffeeName.addEventListener("keyup" , updateCoffees);
newCoffee.addEventListener("keyup",updateCoffees );