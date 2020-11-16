// console.log(moment().format("LLL"));

const apiKey = "2a75df114c3808db73405dca2f046501"


// var queryURL5 = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`

// var queryURLUV = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${APIKey}`

function getWeatherInfo (city){

    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a75df114c3808db73405dca2f046501`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
}

getWeatherInfo("austin")
