function getRandomImage() {
    var location = document.getElementById('autocomplete').value;

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    var request = {
        query: location,
        fields: ['photos']
    };

    var service = new google.maps.places.PlacesService(document.createElement('div'));

    service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            displayRandomImage(results);
        } else {
            document.getElementById('places').src = ""; // Clear the image if no results found
        }
    });
}

function displayRandomImage(results) {
    var randomResult = results[Math.floor(Math.random() * results.length)];
    var photo = randomResult.photos[0];

    if (photo) {
        var imageUrl = photo.getUrl({ maxWidth: 500, maxHeight: 500 });
        document.getElementById('places').src = imageUrl;
    } else {
        document.getElementById('places').src = ""; // Clear the image if no photo available
    }
}

function resetForm (){

    document.getElementById('autocomplete').value = '';
    document.getElementById('places').src = '';
    return;
}
