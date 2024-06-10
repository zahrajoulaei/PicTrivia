const element = document.getElementById("app");

let timeRemained = 10;
const header = document.createElement("h2");
element.appendChild(header);

function updateHeaderMessage() {
  header.textContent = `You have ${timeRemained} seconds remaining to remember the pictures`;
}
updateHeaderMessage();


const countdownInterval = setInterval(() => {
  timeRemained--;
  updateHeaderMessage();
  if (timeRemained <= 0) {
    clearInterval(countdownInterval);
    hideImages();
    startGuessing();
  }
}, 1000);

const table = document.createElement("table");
const tbody = document.createElement("tbody");

const images = [
  "https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718002125137-5582481c462f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712371962783-62c7f951951f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717705415192-f031916a6a8e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683134624076-547318577f63?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564277287253-934c868e54ea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526758097130-bab247274f58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1459664018906-085c36f472af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515540468442-bcec79e94728?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1667520245581-3024538bf044?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508726295872-0b87b9999406?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const duplicatedImages = images.concat(images); // Create pairs of images
duplicatedImages.sort(() => 0.5 - Math.random()); // Shuffle the images

let number = 0;
for (let i = 0; i < 5; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement("td");
    number++;
    const img = document.createElement("img");
    img.src = duplicatedImages[number - 1];
    img.style.width = "100px";
    img.style.height = "150px";
    img.dataset.number = number;
    img.dataset.src = duplicatedImages[number - 1];
    cell.appendChild(img);

    row.appendChild(cell);
  }
  tbody.appendChild(row);
}
table.appendChild(tbody);
element.appendChild(table);

function hideImages() {
  const cells = document.querySelectorAll("td img");
  cells.forEach(cell => {
    cell.style.visibility = 'hidden'; 
  });
}


let firstGuess = null;
let secondGuess = null;

function startGuessing() {
  const cells = document.querySelectorAll("td img");

  cells.forEach(cell => {
    cell.parentElement.addEventListener('click', () => {
      if (!firstGuess) {
        firstGuess = cell;
        cell.style.visibility = 'visible';
      } else if (!secondGuess && cell !== firstGuess) {
        secondGuess = cell;
        cell.style.visibility = 'visible';

        if (firstGuess.dataset.src === secondGuess.dataset.src) {
          alert("Correct!");
          firstGuess = null;
          secondGuess = null;
        } else {
          setTimeout(() => {
            firstGuess.style.visibility = 'hidden';
            secondGuess.style.visibility = 'hidden';
            firstGuess = null;
            secondGuess = null;
          }, 1000);
        }

        numberOfTry--;
        updateHeaderMessage();
        if (numberOfTry === 0) {
          alert("Game over!");
          window.location.reload(); // Restart the game
        }
      }
    });
  });
}

// Show images for 40 seconds, then hide them
setTimeout(hideImages, 10000);
setTimeout(startGuessing, 10000);
