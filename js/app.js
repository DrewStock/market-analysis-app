var imageObjectConstructor = function(name, source) {
  this.imageSource = source;
  this.forVotes = 0;
  this.name = name;
};

var possibleImages = [
  new imageObjectConstructor("bag", "img/bag.jpg"),
  new imageObjectConstructor("banana", "img/banana.jpg"),
  new imageObjectConstructor("boots", "img/boots.jpg"),
  new imageObjectConstructor("chair", "img/chair.jpg"),
  new imageObjectConstructor("cthulhu", "img/cthulhu.jpg"),
  new imageObjectConstructor("dragon", "img/dragon.jpg"),
  new imageObjectConstructor("pen", "img/pen.jpg"),
  new imageObjectConstructor("scissors", "img/scissors.jpg"),
  new imageObjectConstructor("shark", "img/shark.jpg"),
  new imageObjectConstructor("sweep", "img/sweep.jpg"),
  new imageObjectConstructor("unicorn", "img/unicorn.jpg"),
  new imageObjectConstructor("usb", "img/usb.jpg"),
  new imageObjectConstructor("water_can", "img/water_can.jpg"),
  new imageObjectConstructor("wine_glass", "img/wine_glass.jpg"),
];

var chosenImages = [];
document.getElementById("images-holder").addEventListener("click", recordClick);


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
    }
  }
}

randomImageSelector();
