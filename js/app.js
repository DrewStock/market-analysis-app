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

var storedImages;

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
   randomImageSelector();
 } else {
   var storedImages = JSON.parse(localStorage.getItem("images"));
   for (var index = 0; index < storedImages.length; index++) {
     var image = storedImages[index];
     var tracker = new Image(image.name, image.imageSource);
     tracker.forVotes = image.forVotes;
     possibleImages.push(tracker);
    }
    randomImageSelector();
  }
};


var imagePanel = document.getElementById("images-holder");

// Event listener to call recordClick() on click event: function records image that is voted on by click
imagePanel.addEventListener("click", recordClick, false);

// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector, false);

// Event listner to call reset() on click event: function resets click counter to zero and changes visibility property of chart to "hidden"
document.getElementById("reset-button").addEventListener("click", reset, false);

window.addEventListener("load", loadImages);

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

var resetButtonQuery = document.querySelector("input#reset-button");
resetButtonQuery.style.display = "none";


// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  console.log(clickedImage);
  var clickedImageSource = clickedImage.src;
  console.log("Clicked SRC: "+clickedImageSource);
  clickCounter++;
  console.log(clickCounter);
  var chartQuery = document.querySelector("div.canvasjs-chart-container");
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
      chartQuery.style.visibility = "hidden";
    } else if (clickCounter == 15) {
      imagesHolderQuery.style.display = "none";
      chart.render();
      chartQuery.style.visibility = "visible";
      resetButtonQuery.style.display = "block";
    }
  }
};

function reset(event) {
  localStorage.setItem("images", JSON.stringify(possibleImages));
  clickCounter = 0;
  var chartQuery = document.querySelector("div.canvasjs-chart-container");
  chartQuery.style.visibility = "hidden";
  var imagesHolderQuery = document.querySelector("div#images-holder");
  imagesHolderQuery.style.display = "flex";
  randomImageSelector();
};
