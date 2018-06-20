alert("connected!");


var animalBtns = ["cow", "dog", "cat", "donkey", "rabbit", "skunk", "parrot", "beaver", "eagle"];

var animal = $(this).attr("data-name");

function displayGifs(animal) {

 
  console.log(animal);

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qYVT6phufVUaWUoCVaZ4s9DJkEe1VJvB";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.data);
    var animalDiv = $("<div class='animal'>");

    //loop through all the gifs provided
    for (var i = 0; i < response.data.length; i++) {
      //retrieves URL for image
      var stillImgURL = response.data[i].images.fixed_height_still.url;
      var movImgURL = response.data[i].images.fixed_height.url;
      var rating = response.data[i].rating;


      // creates image 
      var image = $("<img>").attr("src", stillImgURL);
      image.attr("data-state", "still");
      image.attr("data-animate", movImgURL);
      image.addClass("gif");
      var p =  $("<p>").text("Rating " + rating);
      //

      // var movImage = $("<img>").attr("src", movImgURL);
      // movImage.attr("data-state", "animate");

      // Aattachs the images
      animalDiv.append(image);
      //$("#popGifs").prepend(animalDiv);
      animalDiv.append(p);

      // adds to div 
    }
    $("#popGifs").html(animalDiv);
  })
}


$(document).on("click", ".gif", function () {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});



// render buttons 
function renderButtons() {

  $("#animalButtons").empty();

  // Looping through the array of animals
  for (var i = 0; i < animalBtns.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("animal-btn");
    // Adding a data-attribute
    a.attr("data-name", animalBtns[i]);
    // Providing the initial button text
    a.text(animalBtns[i]);
    // Adding the button to the buttons-view div
    $("#animalButtons").append(a);
  }
}

//create buttons from input
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var newAnimal = $("#gif-input").val();
  // The movie from the textbox is then added to our array
  animalBtns.push(newAnimal);

  // calling renderButtons which handles the processing of our movie array
  renderButtons();
});




// Calling renderButtons which handles the processing of our movie array



// Adding a click to add gifs after btns are rendered
$(document).on("click", ".animal-btn", function (){
  var buttonText = $(this).text();
  console.log(buttonText);
  displayGifs(buttonText);
})


//called functions 
renderButtons();
displayGifs();