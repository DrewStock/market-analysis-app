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

var storedImages = JSON.parse(localStorage.getItem("images"));

// Function pushes image objects into possibleImages array
function loadImages() {
  if (localStorage.getItem("images") == null) {
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
} else {
    for (var i = 0; i < storedImages.length; i++) {
      var image = storedImages[i];
      var tracker = new Image(image.name, image.imageSource);
      tracker.forVotes = image.forVotes;
      possibleImages.push(tracker);
      }
    }
  randomImageSelector();
};

var chosenImages = [];

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

var clickCounter = 0;

// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  var clickedImageSource = clickedImage.src;
  clickCounter++;
  for (var index = 0; index < possibleImages.length; index++) {
    if (clickedImageSource.indexOf(possibleImages[index].imageSource) >= 0) {
      possibleImages[index].forVotes++;
      possibleImages[index].y++;
    }
    if (clickCounter < 15) {
      sessionChartQuery.style.display = "none";
    } else if (clickCounter == 15) {
      chart.render();
      imagesHolderQuery.style.display = "none";
      continueButtonQuery.style.display = "block";
      sessionChartQuery.style.display = "block";
      localStorage.setItem("images", JSON.stringify(possibleImages));
    }
  }
};

var marketerResults = [];

var marketerTotals = [];

// Function to view chart with all voting results
function viewAll() {
  sessionChartQuery.style.display = "none";
  imagesHolderQuery.style.display = "none";
  var marketerResults = JSON.parse(localStorage.getItem("images"));
  for (var index = 0; index < marketerResults.length; index++) {
    var image = marketerResults[index];
    marketerTracker = new Image(image.name, image.imageSource);
    marketerTracker.forVotes = image.forVotes;
    marketerTracker.y = image.forVotes;
    marketerTracker.x = index;
    marketerTotals.push(marketerTracker);
    }
    sessionChartQuery.style.display = "none";
    marketerChartQuery.style.display = "block";
    chart2.render();
    resultsButtonQuery.style.display = "none";
    clearResultsQuery.style.display = "block";
};

var continueButtonQuery = document.querySelector("input#continue-button");
continueButtonQuery.style.display = "none";

var resultsButtonQuery = document.querySelector("input#results-button");
resultsButtonQuery.style.display = "none";

var clearResultsQuery = document.querySelector("input#clear-results-button")
clearResultsQuery.style.display = "none";

var imagesHolderQuery = document.querySelector("div#images-holder");

var sessionChartQuery = document.querySelector("div#results-wrapper");

var marketerChartQuery = document.querySelector("div#marketer-wrapper");

var clearResultsQuery = document.querySelector("input#clear-results-button")

// Function to hide marketer chart and return to voting
function returnToVoting() {
  marketerChartQuery.style.display = "none";
  imagesHolderQuery.style.display = "flex";
  clearResultsQuery.style.display = "none";
};

// Function to hide session results chart and continue voting
function continueOn(event) {
  clickCounter = 0;
  randomImageSelector();
  continueButtonQuery.style.display = "none";
  resultsButtonQuery.style.display = "block";
  sessionChartQuery.style.display = "none"; 
  imagesHolderQuery.style.display = "flex";
};
