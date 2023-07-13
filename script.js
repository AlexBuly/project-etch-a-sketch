/* The a grid container contains individual grid squares for 16x16 grid. This would be too cumbersome 
to create in the HTML file so it needs to be done using a loop in JavaScript. 

for (let i = gridSquares; i <= 256; i++);
gridContainer.textContent = gridSquares;
gridSquares.style.display: "grid;"
gridSquares.style.cssText = "grid-template-columns: auto * 16; grid-template-rows: auto * 16;"

for (let i = gridSquares; i <= 16; i++ * 16);
display: flex; 
flex-direction: column 

gridContainer.textContent = gridSquares[i] + "<br>";

When mouse hover over each element, the color changes. An eraser removes the color and reverts it back
to white.

A button is used to change the size of the grid squares. A loop is applied to shrink/enlarge the 
squares by so many pixels and add/remove the appropriate number of squares to match the number of 
squares the user wants. 
*/
const container = document.querySelector(".container");
var squareDivs;
// FOR i = gridSquares; i is less than or equal to 16; i++; 16 times
for (i = 0; i < 256; ++i) {
  squareDivs = document.createElement("div");
  squareDivs.classList.add("squareDivs");
  container.appendChild(squareDivs);
  squareDivs.style.cssText = "background-color: white; height: 29.5px; width: 29.5px; border: 3px solid black; border-top: none; border-left: none; display: inline-flex; margin-top: -4px;";
}
  container.addEventListener("mouseover", (event) => {
    var target = event.target;
    if (target.classList.contains("squareDivs")) {
      target.style.backgroundColor = "black";
    }
  });
  // add click event listener for buttons
  var eraser = document.querySelector(".erase");
  eraser.addEventListener("click", () => {
    container.addEventListener("mouseover", (event) => {
      var target = event.target;
      if (target.classList.contains("squareDivs")) {
        target.style.backgroundColor = "white";
      }
    });
  });
  var reset = document.querySelector(".eraseAll");
  reset.addEventListener("click", () => {
    var squares = document.querySelectorAll(".squareDivs");
    squares.forEach((item) => {
      item.style.backgroundColor = "white";
    });
  });
  var draw = document.querySelector(".pen");
  draw.addEventListener("click", () => {
    container.addEventListener("mouseover", (event) => {
      var target = event.target;
      if (target.classList.contains("squareDivs")) {
        target.style.backgroundColor = "black";
      }
    });
  });
  



// add click event listener for buttons
// prompt("Number of squares")
// IF number > 100 
    //alert("Number is too large")
// grow by X && shrink by X 
// add appropriate numbers of squares 

