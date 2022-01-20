'use strict';

/*Plocka ut height, mass, gender och hair_color och använd dem för att bygga en sträng 
med hjälp av template literals (bakåtvända fnuttar). 
Exempel: let s = `Value 1: ${value1}, Value 2: ${value2}`;
*/
function getApi() {
     
    fetch('https://www.swapi.tech/api/people/?name')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
     

/*
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {

        })
        .catch(err => console.log(err))
        */
}

