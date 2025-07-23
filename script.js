const gridContainer = document.getElementById("container");

function getRandomDarkRainbowColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
  const lightness = Math.floor(Math.random() * 15) + 25;  // 25-40%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomDarkRainbowColor();
    });

    gridContainer.appendChild(square);
  }
}

const gridSizeButton = document.getElementById("grdsiz");
const resetButton = document.getElementById("resetBtn");

gridSizeButton.addEventListener("click", () => {
  const size = parseInt(prompt("Enter grid size (1 to 64):"));
  if (isNaN(size) || size < 1 || size > 64) {
    alert("Please enter a valid number between 1 and 64.");
    return;
  }
  createGrid(size);
});

resetButton.addEventListener("click", () => {
  createGrid(16);
});

// Initialize default grid
createGrid(16);
