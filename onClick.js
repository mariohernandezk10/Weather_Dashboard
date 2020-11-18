let cityArray = [];



$(".material-icons").on("click", function () {
    // value of the search input
    let newCity = $('#search').val().toLower().trim();
    cityArray.push(newCity);




});
