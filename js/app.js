// Object constructor for product images
var imageObjectConstructor = function(name, source) {
  this.imageSource = source;
  this.forVotes = 0;
  this.name = name;
};

// Array of product image objects
var possibleImages = [
  new imageObjectConstructor("R2D2 Bag", "img/bag.jpg"),
  new imageObjectConstructor("Banana Slicer", "img/banana.jpg"),
  new imageObjectConstructor("Yelow Boots", "img/boots.jpg"),
  new imageObjectConstructor("Red Chair", "img/chair.jpg"),
  new imageObjectConstructor("Cthulhu", "img/cthulhu.jpg"),
  new imageObjectConstructor("Dragon Meat", "img/dragon.jpg"),
  new imageObjectConstructor("Cutlery Pen", "img/pen.jpg"),
  new imageObjectConstructor("Pizza Scissors", "img/scissors.jpg"),
  new imageObjectConstructor("Shark Sleeping Bag", "img/shark.jpg"),
  new imageObjectConstructor("Baby Sweeping Pajamas", "img/sweep.jpg"),
  new imageObjectConstructor("Unicorn Meat", "img/unicorn.jpg"),
  new imageObjectConstructor("Tentacle USB", "img/usb.jpg"),
  new imageObjectConstructor("Watering Can of Futility", "img/water_can.jpg"),
  new imageObjectConstructor("Egg Shaped Wine Glass", "img/wine_glass.jpg"),
];

// Event listener to call randomImageSelector() on window load event: function selects three images randomly to display
window.addEventListener("load", randomImageSelector);

var imagePanel = document.getElementById("images-holder");

// Event listener to call recordClick() on click event: function records image that is voted on by click
imagePanel.addEventListener("click", recordClick, false);
// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector, false);

// Event listner to call seeResults() on click event: function displays voting results in a table
document.getElementById("results-button").addEventListener("click", seeResults, false);

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
};

// CODE THAT IS NOT CURRENTLY WORKING AS INTENDED
// var userPicks = [];

// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  console.log(clickedImage);
  var clickedImageSource = clickedImage.src;
  console.log("Clicked SRC: "+clickedImageSource);
  for (var index = 0; index < possibleImages.length; index++) {
    console.log("  Compare to: "+possibleImages[index].imageSource);
    if (clickedImageSource.indexOf(possibleImages[index].imageSource) >= 0) {
      possibleImages[index].forVotes++;
      console.log("    Clicked Item: "+possibleImages[index].name);
      console.log(possibleImages[index].forVotes);
    }
  }
  // CODE THAT IS CURRENTLY NOT WORKING AS INTENDED
  // userPicks = [];
  // for (var k = 0; userPicks.length < 15; k++) {
  //     userPicks.push(clickedImageSource);
  //     var feedback = document.getElementById("voting-feedback");
  //     feedback.innerHTML = "You have picked " + k + " images";
  //     break;
  //   }
};

// Function that creates a table to display image voting results and adds the table to the document using DOM manipulation
function seeResults(event) {
    var positionVR = document.getElementById("voting-results");
    var newTable = document.createElement("table");
    newTable.id = "vote-totals";
    positionVR.appendChild(newTable);
    // Creates table header
    var table = document.getElementById("vote-totals");
    var tableHeader = document.createElement("tr");
    var tableHeaderCell = document.createElement("th");
    tableHeaderCell.setAttribute("colspan", "2");
    var tableHeaderName = document.createTextNode("User Vote Totals");
    tableHeaderCell.appendChild(tableHeaderName);
    tableHeader.appendChild(tableHeaderCell);
    table.appendChild(tableHeader);
    // Creates column headers
    var tableHeaderRow = document.createElement("tr");
    tableHeaderCell = document.createElement("th");
    var tableHeaderData = document.createTextNode("Product Name")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    tableHeaderCell = document.createElement("th");
    tableHeaderData = document.createTextNode("Votes")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    table.appendChild(tableHeaderRow);
    for (var j = 0; j <= 13; j++) {
      var newImageRow = document.createElement("tr");
      var imageNameCell = document.createElement("td");
      var imageNameCellData = document.createTextNode(possibleImages[j].name);
      imageNameCell.appendChild(imageNameCellData);
      newImageRow.appendChild(imageNameCell);
      var imageVoteCell = document.createElement("td");
      var imageVoteCellData = document.createTextNode(possibleImages[j].forVotes);
      imageVoteCell.appendChild(imageVoteCellData);
      newImageRow.appendChild(imageVoteCell);
      table.appendChild(newImageRow);
    }
  };
