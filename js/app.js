// Object constructor for product images
var Image = function(name, source) {
  this.imageSource = source;
  this.forVotes = 0;
  this.name = name;
  this.y = this.forVotes;
  this.label = name;
};

// Array of product image objects
var possibleImages = [];

var marketerResults = [];

var storedImages = JSON.parse(localStorage.getItem("images"));

// var marketerResults = JSON.parse(localStorage.getItem("allResults"));

function loadImages() {
  if (localStorage.getItem("images") == null) {
  // if ((localStorage.getItem("images") == null) && (localStorage.getItem("allResults") == null)) {
   possibleImages.push(new Image("R2D2 Bag", "img/bag.jpg"));
   possibleImages.push(new Image("Banana Slicer", "img/banana.jpg"));
   possibleImages.push(new Image("Yelow Boots", "img/boots.jpg"));
   possibleImages.push(new Image("Red Chair", "img/chair.jpg"));
   possibleImages.push(new Image("Cthulhu", "img/cthulhu.jpg"));
   possibleImages.push(new Image("Dragon Meat", "img/dragon.jpg"));
   possibleImages.push(new Image("Cutlery Pen", "img/pen.jpg"));
   possibleImages.push(new Image("Pizza Scissors", "img/scissors.jpg"));
   possibleImages.push(new Image("Shark Sleeping Bag", "img/shark.jpg"));
   possibleImages.push(new Image("Baby Sweeping Pajamas", "img/sweep.jpg"));
   possibleImages.push(new Image("Unicorn Meat", "img/unicorn.jpg"));
   possibleImages.push(new Image("Tentacle USB", "img/usb.jpg"));
   possibleImages.push(new Image("Watering Can of Futility", "img/water_can.jpg"));
   possibleImages.push(new Image("Egg Shaped Wine Glass", "img/wine_glass.jpg"));
  //  marketerResults.push(new Image("R2D2 Bag", "img/bag.jpg"));
  //  marketerResults.push(new Image("Banana Slicer", "img/banana.jpg"));
  //  marketerResults.push(new Image("Yelow Boots", "img/boots.jpg"));
  //  marketerResults.push(new Image("Red Chair", "img/chair.jpg"));
  //  marketerResults.push(new Image("Cthulhu", "img/cthulhu.jpg"));
  //  marketerResults.push(new Image("Dragon Meat", "img/dragon.jpg"));
  //  marketerResults.push(new Image("Cutlery Pen", "img/pen.jpg"));
  //  marketerResults.push(new Image("Pizza Scissors", "img/scissors.jpg"));
  //  marketerResults.push(new Image("Shark Sleeping Bag", "img/shark.jpg"));
  //  marketerResults.push(new Image("Baby Sweeping Pajamas", "img/sweep.jpg"));
  //  marketerResults.push(new Image("Unicorn Meat", "img/unicorn.jpg"));
  //  marketerResults.push(new Image("Tentacle USB", "img/usb.jpg"));
  //  marketerResults.push(new Image("Watering Can of Futility", "img/water_can.jpg"));
  //  marketerResults.push(new Image("Egg Shaped Wine Glass", "img/wine_glass.jpg"));
  } else {
      var storedImages = JSON.parse(localStorage.getItem("images"));
      for (var i = 0; i < storedImages.length; i++) {
        var image = storedImages[i];
        var tracker = new Image(image.name, image.imageSource);
        tracker.forVotes = image.forVotes;
        possibleImages.push(tracker);
      }
    //   var allResults = JSON.parse(localStorage.getItem("allResults"));
      // for (var j = 0; j < allResults.length; j++) {
      //   var image = storedImages[j];
      //   var marketerTracker = new Image(image.name, image.imageSource);
      //   marketerTracker.forVotes = image.forVotes;
      //   marketerTracker.y = image.forVotes;
      //   marketerResults.push(marketerTracker);
    //   }
    }
  randomImageSelector();
};

var chosenImages = [];

var clickCounter = 0;

// Function randomly selects three images to display
function randomImageSelector() {
  chosenImages = [];
  for (var imageId = 1; imageId <= 3; imageId++) {
    do {
      var index = Math.floor(Math.random() * 14);
    } while (chosenImages.indexOf(index) >= 0);
    var source = possibleImages[index].imageSource;
    document.getElementById("image"+imageId).src = source;
    chosenImages.push(index);
  }
  var clickDisplay = document.getElementById("click-counter");
  clickDisplay.innerHTML = "";
  var clickDisplayNode = document.createTextNode("You have voted " + clickCounter + " times.");
  clickDisplay.appendChild(clickDisplayNode);
};

function viewAll() {
  sessionChartQuery.style.display = "none";
  var imagesHolderQuery = document.querySelector("div#images-holder");
  imagesHolderQuery.style.display = "none";
  // var marketerChartQuery = document.querySelector("section#marketer-results");
  // blah = [];
  // localStorage.setItem("allResults", JSON.stringify(possibleImages));
  var marketerResults = JSON.parse(localStorage.getItem("images"));
  for (var index = 0; index < marketerResults.length; index++) {
    // marketerResults[index].y = marketerResults[index].forVotes;
      var image = marketerResults[index];
      marketerTracker = new Image(image.name, image.imageSource);
      marketerTracker.forVotes = image.forVotes;
      marketerTracker.y = image.forVotes;
      marketerTracker.x = index;
      blah.push(marketerTracker);
    }
  sessionChartQuery.style.display = "none";
  marketerChartQuery.style.display = "block";
  chart2.render();
  resultsButtonQuery.style.display = "none";
  var returnToVotingQuery = document.querySelector("input#clear-results-button")
  returnToVotingQuery.style.display = "block";
};

// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  console.log(clickedImage);
  var clickedImageSource = clickedImage.src;
  console.log("Clicked SRC: "+clickedImageSource);
  clickCounter++;
  console.log(clickCounter);
  // sessionChartQuery.style.visibility = "visible";
  // chart2.render();
  // var chartQuery = document.querySelector("div.canvasjs-chart-container");
  var imagesHolderQuery = document.querySelector("div#images-holder");
  for (var index = 0; index < possibleImages.length; index++) {
    console.log("  Compare to: "+possibleImages[index].imageSource);
    if (clickedImageSource.indexOf(possibleImages[index].imageSource) >= 0) {
      possibleImages[index].forVotes++;
      possibleImages[index].y++;
      console.log("    Clicked Item: "+possibleImages[index].name);
      console.log(possibleImages[index].forVotes);
      }
    if (clickCounter < 15) {
      sessionChartQuery.style.display = "none";
    } else if (clickCounter == 15) {
      chart.render();
      imagesHolderQuery.style.display = "none";
      resetButtonQuery.style.display = "block";
      // var sessionChartQuery = document.querySelector("section#voting-results");
      sessionChartQuery.style.display = "block";
      localStorage.setItem("images", JSON.stringify(possibleImages));
      // localStorage.setItem("allResults", JSON.stringify(possibleImages));
      // var storedImages = JSON.parse(localStorage.getItem("images"));
    }
  }
};

var resetButtonQuery = document.querySelector("input#reset-button");
resetButtonQuery.style.display = "none";


var resultsButtonQuery = document.querySelector("input#results-button");
resultsButtonQuery.style.display = "none";

var returnToVotingQuery = document.querySelector("input#clear-results-button")
returnToVotingQuery.style.display = "none";

var imagesHolderQuery = document.querySelector("div#images-holder");
var sessionChartQuery = document.querySelector("div#results-wrapper");
var marketerChartQuery = document.querySelector("div#marketer-wrapper");
var returnToVotingQuery = document.querySelector("input#clear-results-button")



function returnToVoting() {
  // var marketerChartQuery = document.querySelector("section#marketer-results");
  marketerChartQuery.style.display = "none";
  // var imagesHolderQuery = document.querySelector("div#images-holder");
  imagesHolderQuery.style.display = "flex";
  returnToVotingQuery.style.display = "none";
};

var marketerResults = JSON.parse(localStorage.getItem("allResults"));

var blah = [];

function reset(event) {
  // blah = [];
  // localStorage.setItem("allResults", JSON.stringify(possibleImages));
  // var marketerResults = JSON.parse(localStorage.getItem("allResults"));
  // for (var index = 0; index < marketerResults.length; index++) {
  //   // marketerResults[index].y = marketerResults[index].forVotes;
  //     var image = marketerResults[index];
  //     marketerTracker = new Image(image.name, image.imageSource);
  //     marketerTracker.forVotes = image.forVotes;
  //     marketerTracker.y = image.forVotes;
  //     blah.push(marketerTracker);
  //   }
  clickCounter = 0;
  randomImageSelector();
  // var storedImages = JSON.parse(localStorage.getItem("images"));
  // for (var index = 0; index < storedImages.length; index++)
  //   var image = storedImages[index];
  //   var tracker = new Image(image.name, image.imageSource);
  //   var marketerTracker = new Image(image.name, image.imageSource);
  //   marketerTracker.forVotes = image.forVotes;
  //   marketerTracker.y = image.forVotes;
  //   marketerResults.push(marketerTracker);

  resetButtonQuery.style.display = "none";
  resultsButtonQuery.style.display = "block";
  // var sessionChartQuery = document.querySelector("section#voting-results");
  sessionChartQuery.style.display = "none";
  // var imagesHolderQuery = document.querySelector("div#images-holder");
  imagesHolderQuery.style.display = "flex";
};
