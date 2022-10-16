


import './css/styles.css';

/* 
const DEBOUNCE_DELAY = 300; */

//9153ea9818454af8838171652221410

// http://api.weatherapi.com/
// http://api.weatherapi.com/v1/forecast.json?key=9153ea9818454af8838171652221410&q=Kharkiv&days=7

const base_url = 'http://api.weatherapi.com/v1'
const KEY = '9153ea9818454af8838171652221410'
const City = 'Kharkiv'

const container = document.querySelector('.list');

const resp = fetch(`${base_url}/forecast.json?key=${KEY}&q=${City}&days=7`);

resp.then(response => { 
    if (!response.ok) { 
        throw new Error()
    }
    return response.json();
}).then(data => { 
    const markup = createMarkup(data.forecast.forecastday)
    container.insertAdjacentHTML ('beforeend', markup)
}).catch(err => console.log(err))

function createMarkup(arr) { 
    return arr.map(item => `<li>
  <h2> Дата: ${item.date}  </h2>
  <img src="${item.day.condition.icon}" alt="${item.day.condition.text}">
    <p>${item.day.condition.text} </p>
    <h3> Средняя температура: ${item.day.avgtemp_c}  </h3>
    </li>`).join('')
}
    
