// MAKE SURE TO REMEMBER to CREATE a div
// with this id where the cities go
// function clear() {

//     $('#city-section').empty();
// }
// clear();



$(".material-icons").on("click", function() {
    let newCity = $('#search').val()
    let newLi = $("<li>").addClass("collection-item").text(function(){
        // maybe add an if statement that stops user from entering same city
        // and stops from creating an empty li tag
        // and when the user presses enter it also logs
        return newCity;
    });




    $("#city-section").prepend(newLi);
});





// let cityArray = [];



// $(".material-icons").on("click", function (event) {
//     let newCity = $('#search').val().toLower().trim();
//     cityArray.push(newCity);

// event.preventDefault();




// });
