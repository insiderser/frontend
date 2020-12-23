'use strict'

function deepClone(obj) {
    const result = {}
    for (const propName in obj) {
        const prop = obj[propName]
        const type = typeof prop
        let copy
        if (type === 'object') {
            copy = deepClone(prop)
        } else if (Array.isArray(prop)) {
            copy = prop.slice()
        } else { // Primitive
            copy = prop
        }
        result[propName] = copy
    }
    return result
}

const obj = {
    coord: {lon: 24.55, lat: 48.46},
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    base: 'stations',
    main: {temp: 3.94, feels_like: -1.02, temp_min: 3.89, temp_max: 4, pressure: 1022, humidity: 69},
    visibility: 10000,
    wind: {speed: 4, deg: 130},
    clouds: {all: 0},
    dt: 1608634819,
    sys: {type: 1, id: 8906, country: 'UA', sunrise: 1608617487, sunset: 1608647370},
    timezone: 7200,
    id: 688455,
    name: 'Yaremche',
    cod: 200
}

const newObj = deepClone(obj)

console.log(newObj === obj) // false
console.log(newObj.coord === obj.coord) // false
console.log(newObj.weather === obj.weather)  // false
console.log(newObj.weather[0] === obj.weather[0])  // false
console.log(newObj.main === obj.main)  // false
console.log(newObj.wind === obj.wind)  // false
console.log(newObj.clouds === obj.clouds)  // false
console.log(newObj.sys === obj.sys)  // false
