// console.log(moment().format("LLL"));

// const apiKey = "2a75df114c3808db73405dca2f046501"

let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a75df114c3808db73405dca2f046501`

let cityArray = [];


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(){

})






$(".material-icons").on("click", function () {
    // value of the search input
    let newCity = $('#search').val().toLower();
    cityArray.push(newCity);




});



// var queryURL5 = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2a75df114c3808db73405dca2f046501`

// let queryURLUV = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=2a75df114c3808db73405dca2f046501`

// const temp = resp.main.temp
// const humidity = resp.main.humidity
// const windSpeed = resp.wind.speed



