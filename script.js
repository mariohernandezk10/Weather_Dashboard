// console.log(moment().format("LLL"));

// const apiKey = "2a75df114c3808db73405dca2f046501"


// we need to add a for loop 
//that goes through each item in array

let city = "austin"


let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a75df114c3808db73405dca2f046501`




$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(responseWeatherAPI){
    console.log(responseWeatherAPI)
    console.log(responseWeatherAPI.coord)
})









// var queryURL5 = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2a75df114c3808db73405dca2f046501`

// let queryURLUV = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=2a75df114c3808db73405dca2f046501`

// const temp = responseWeatherAPI.main.temp
// const humidity = responseWeatherAPI.main.humidity
// const windSpeed = responseWeatherAPI.wind.speed



