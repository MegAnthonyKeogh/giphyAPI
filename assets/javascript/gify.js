alert("connected!");


var animalBtns = ["cow", "dog", "cat", "donkey", "rabbit", "skunk", "parrot", "beaver", "eagle"];
animal = ;


function displayGifs() {

 var animal = $(this).attr("data-name");
  
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qYVT6phufVUaWUoCVaZ4s9DJkEe1VJvB";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
            var animalDiv = $("<div class='animal'>");
          
            //loop through all the gifs provided
            for (var i = 0; i< response.data.length; i++){
          //retrieves URL for image
            var imgURL = response.data[i].images.original.url;
            // creates image 
            var image = $("<img>").attr("src", imgURL);
          
            // Aattachs the images
             animalDiv.append(image);
          
            // adds to div 
           $("#popGifs").prepend(animalDiv);
          }
          })
 


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
  }

  //create buttons from input
 
  $("#add-gif").on("click", function(event){
    event.preventDefault();
    // This line grabs the input from the textbox
    var newAnimal = $(this).val().trim();
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("animal-btn");
    a.addClass("animal")
    // Adding a data-attribute
    a.attr("data-name", animalBtns[i]);
    a.att("data-name", animal[i]);
    // Providing the initial button text
    a.text(animalBtns[i]);
    // Adding the button to the buttons-view div
    $("#animalButtons").append(a);

    // Adding animal to the animal buttons array 
    animalsBtns.push(newAnimal);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  }

  // Adding a click to add gifs after btns are rendered
  $(document).on("click", ".animal", displayGifs);


//called functions 
  renderButtons();
  displayGifs();
  createGifs();

    
