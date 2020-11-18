function getStorage() {
	// Get the data stored at Local Storage
	cityArray = JSON.parse(localStorage.getItem("cityArray"));
	console.log(cityArray);
};

getStorage();



function setStorage() {
	// Set the data stored at Local Storage

    localStorage.setItem("cityArray", JSON.stringify(cityArray));
};

setStorage();
