const container = document.querySelector(".container");

const sixteenGrid = () => {
  // FOR i = gridSquares; i is less than or equal to 16; i++; 16 times
  for (let i = 0; i < 256; ++i) {
    let squareDivs = document.createElement("div");
    squareDivs.classList.add("squareDivs");
    container.appendChild(squareDivs);
    squareDivs.style.cssText = "background-color: white; height: calc(100% / 16); width: calc(100% / 16); display: inline-flex; border: 1px solid black; box-sizing: border-box"
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
        let target = event.target;
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
      container.textContent = '';
  });
    // prompt("Number of squares")
    let size = Number(prompt("Enter a number."));
    let n = 0;
    if (size <= 100) {
      while (n < size * size) {
        ++n;
        let gridSquares = document.createElement("div");
        gridSquares.classList.add("squareDivs");
        container.appendChild(gridSquares);
        gridSquares.style.cssText = `background-color: white; height: calc(100% / ${size}); width: calc(100% / ${size}); display: inline-flex; box-sizing: border-box; border: 1px solid black;`;
        }
      } else if (size > 100) {
          alert("Number is too large.");
          sixteenGrid();
      } else {
          alert("Not a number.");
          sixteenGrid();
      }
  });
