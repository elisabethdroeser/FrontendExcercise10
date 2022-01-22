'use strict';

/*Plocka ut height, mass, gender och hair_color och använd dem för att bygga en sträng 
med hjälp av template literals (bakåtvända fnuttar). 
Exempel: let s = `Value 1: ${value1}, Value 2: ${value2}`;
*/
const btn = document.querySelector('#btn');

const getApi = () => {  
    fetch('https://www.swapi.tech/api/people/') 
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log('Error ' + err));
}

btn.addEventListener('click', getApi);
     /*
        .then(res => {
            console.log(res); //Response {type: 'basic', url: 'http://127.0.0.1:5501/JS/ED.16Fetch/json.json', redirected: false, status: 200, ok: true, …}
            //const data = res.json();
            //console.log(data); 
            return res.json();
        })

        .then(data => console.log(data));
    fetch('https://www.swapi.tech/api/people/1')
        .then(res => {
            console.log(res)
        })
    }   */

