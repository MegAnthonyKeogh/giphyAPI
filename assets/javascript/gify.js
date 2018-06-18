alert("connected!");


var animalBtns = ["cow", "dog", "cat", "donkey", "rabbit", "skunk", "parrot", "beaver", "eagle"];
var animal = "cat";
function displayGifs() {


    //var animal = $(this).attr("data-name");
  
    var queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qYVT6phufVUaWUoCVaZ4s9DJkEe1VJvB");
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log("working");

    });
}
 



// render buttons 
 function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#animalButtons").empty();

    // Looping through the array of movies
    for (var i = 0; i < animalBtns.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("animal-btn");
      // Adding a data-attribute
      a.attr("data-name", animalBtns[i]);
      // Providing the initial button text
      a.text(animalBtns[i]);
      // Adding the button to the buttons-view div
      $("#animalButtons").append(a);
    }

    
  };

  renderButtons();
  displayGifs();
