// Select the button and .row elements
const changeBackgroundBtn = document.getElementById("change-background-btn");
const rowElement = document.querySelector(".bg");

// Add event listener to the button to change the background color of .row when clicked
changeBackgroundBtn.addEventListener("click", function() {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Set the background color of .row to the random color
  rowElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
