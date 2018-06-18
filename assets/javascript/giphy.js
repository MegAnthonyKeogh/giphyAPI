alert("connected!");


var animalBtns = ["cow", "dog", "cat", "donkey", "rabbit", "skunk", "parrot", "beaver", "eagle"];



function displayGifs() {

 var animal = $(this).attr("data-name");
 console.log(animal);
  
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
          })}

  

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


    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  

  // Adding a click to add gifs after btns are rendered
  $(document).on("click", ".animal-btn", displayGifs);


//called functions 
  renderButtons();
  displayGifs();
  

    
