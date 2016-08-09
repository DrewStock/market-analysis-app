var imagePanel = document.getElementById("images-holder");

// Event listener to call recordClick() on click event: function records image that is voted on by click
imagePanel.addEventListener("click", recordClick, false);

// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector);

// Event listener to call continueOn() on click event: function resets click counter to zero and changes visibility property of chart to "hidden"
document.getElementById("continue-button").addEventListener("click", continueOn, false);

// Event listener to call viewAll() on click event: function displays chart with all voting results
document.getElementById("results-button").addEventListener("click", viewAll, false);

// Event listener to call returnToVoting() on click event: function hides chart and returns to image voting
document.getElementById("clear-results-button").addEventListener("click", returnToVoting, false);

// Event listener to load images on window load
window.addEventListener("load", loadImages);
