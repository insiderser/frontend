'use strict'

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=a770cdb7b77029835cfd32d70f3077ca&q='

function getUrl(city) {
    return URL + encodeURIComponent(city)
}

[].slice.apply(document.getElementsByClassName('city-name')).forEach(doc => {
    const city = doc.innerText
    console.log(city)
    doc.onclick = (ev) => {
        ev.stopPropagation()
        fetch(getUrl(city))
            .then(resp => resp.json())
            .then(data => displayData(data, doc))
    }
})

function displayData(data, doc) {
    const detailsDoc = document.getElementById('weather-details-template').cloneNode(true)
    detailsDoc.classList.add('weather-details-container')
    doc.appendChild(detailsDoc)

    detailsDoc.querySelector('.temperature').innerText = kelvinToCelsius(data.main.temp)
    detailsDoc.querySelector('.temperature-feels').innerText = kelvinToCelsius(data.main.feels_like)
    detailsDoc.querySelector('.pressure').innerText = kelvinToCelsius(data.main.pressure)
    detailsDoc.querySelector('.humidity').innerText = kelvinToCelsius(data.main.humidity)
}

function kelvinToCelsius(kelvin) {
    return kelvin - 270
}
