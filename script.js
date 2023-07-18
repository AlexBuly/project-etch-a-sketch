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
const sixteenGrid = () => {
  // FOR i = gridSquares; i is less than or equal to 16; i++; 16 times
  for (let i = 0; i < 256; ++i) {
    let squareDivs = document.createElement("div");
    squareDivs.classList.add("squareDivs");
    container.appendChild(squareDivs);
    squareDivs.style.cssText = "background-color: white; height: calc(100% / 16); width: calc(100% / 16); display: inline-flex; margin-bottom: -4px; flex-wrap: wrap; border: 1px solid black; box-sizing: border-box"
  }
    container.addEventListener("mouseover", (event) => {
      let target = event.target
      target.style.backgroundColor = "black";
    });
    // add click event listener for buttons
    let eraser = document.querySelector(".erase");
    eraser.addEventListener("click", () => {
      container.addEventListener("mouseover", (event) => {
        var target = event.target;
        target.style.backgroundColor = "white";
        container.style.backgroundColor = "black";
      });
    });

    let reset = document.querySelector(".eraseAll");
    reset.addEventListener("click", () => {
      let squares = document.querySelectorAll(".squareDivs");
      squares.forEach((item) => {
        item.style.backgroundColor = "white";
    });
    });

    let draw = document.querySelector(".pen");
    draw.addEventListener("click", () => {
      container.addEventListener("mouseover", (event) => {
        var target = event.target;
        target.style.backgroundColor = "black";
      });
    });
  }
  sixteenGrid();

  let adjustSize = document.querySelector(".adjustSize");
  let squares = document.querySelectorAll(".squareDivs");
  adjustSize.addEventListener("click", () => {
    squares.forEach((item) => {
      item.remove();
    });
    let size = Number(prompt("Enter a number."));
    let n = 0;
    if (size < 100) {
      while (n < size * size) {
        ++n;
        var gridSquares = document.createElement("div");
        gridSquares.classList.add("squareDivs");
        container.appendChild(gridSquares);
        gridSquares.style.cssText = `background-color: white; height: calc(100% / ${size}); width: calc(100% / ${size}); display: inline-flex; margin-bottom: -4px; box-sizing: border-box; border: 1px solid black;`
        }
      } 
    if (size > 100) {
        alert("Number too large.");
        sixteenGrid();
      }
  });

  

// prompt("Number of squares")
// IF number > 100 
    //alert("Number is too large")
// grow by X && shrink by X 
// add appropriate numbers of squares 

