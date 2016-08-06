var imagePanel = document.getElementById("images-holder");

// Event listener to call recordClick() on click event: function records image that is voted on by click
imagePanel.addEventListener("click", recordClick, false);

// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector, false);

// Event listner to call reset() on click event: function resets click counter to zero and changes visibility property of chart to "hidden"
document.getElementById("reset-button").addEventListener("click", reset, false);

document.getElementById("results-button").addEventListener("click", viewAll);

document.getElementById("clear-results-button").addEventListener("click", returnToVoting);

window.addEventListener("load", loadImages);
