// console.log(moment().format("LLL"));

// const apiKey = "2a75df114c3808db73405dca2f046501"


// we need to add a for loop 
//that goes through each item in array

let city = "austin"


let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a75df114c3808db73405dca2f046501`

// console.log(moment().format("LL"));




$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(responseWeatherAPI){
    // console.log(responseWeatherAPI);

    const cityName = responseWeatherAPI.name
    const currentDate = moment().format("LL")
    const temp = responseWeatherAPI.main.temp
    const humidity = responseWeatherAPI.main.humidity
    const windSpeed = responseWeatherAPI.wind.speed




    $(".current-city").text(`${cityName} ${currentDate}`)
    $('.temp').text(`Temperature: ${temp}`);
    $('.humidity').text(`Humidity: ${humidity}`)
    $('.wind').text(`Wind Speed: ${windSpeed}`)
})











// var queryURL5 = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2a75df114c3808db73405dca2f046501`

// let queryURLUV = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=2a75df114c3808db73405dca2f046501`

// const tempFaren = (temp - 273.15) * 1.8 + 32
// const longitude = responseWeatherAPI.coord.lon
// const latitude = responseWeatherAPI.coord.lat
// const descrption = responseWeatherAPI.weather[0].descrption


