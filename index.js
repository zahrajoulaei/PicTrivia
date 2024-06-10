// Create your game here!

const element = document.getElementById("app");

let numberOfTry = 10;

const header = document.createElement("h2");
element.appendChild(header);

function updateHeaderMessage() {
  header.textContent = `You have ${numberOfTry} guesses remaining.`;
}
updateHeaderMessage();

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

let number = 0;
for (let i = 0; i < 5; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement("td");
    number++;
    const img = document.createElement("img");
    img.src = images[number - 1];
    img.style.width = "100px";
    img.style.height= "100px";
    img.dataset.number = number;
    cell.appendChild(img);
    row.appendChild(cell);
  }
  tbody.appendChild(row);
}
table.appendChild(tbody);
element.appendChild(table);

const RandomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Target number: ${RandomNum}`);

// function nextGuess() {
//   if (numberOfTry > 0) {
//     setTimeout(() => {
//       const guess = parseInt(
//         window.prompt(
//           `Guess a number between 1 and 100. You have ${numberOfTry} guesses remaining.`
//         ),
//         10
//       );

//       if (isNaN(guess) || guess < 1 || guess > 100) {
//         alert("Please enter a valid number between 1 and 100.");
//         nextGuess();
//         return;
//       }

//       const cells = document.querySelectorAll("td");
//       let correctGuess = false;

//       cells.forEach((cell) => {
//         const cellNumber = parseInt(cell.dataset.number, 10);
//         if (cellNumber === guess) {
//           if (cellNumber === RandomNum) {
//             cell.classList.add("correct");
//             alert("Correct!!!");
//             correctGuess = true;
//           } else {
//             cell.classList.add("incorrect");
//           }
//         }
//       });

//       if (correctGuess) {
//         return;
//       } else {
//         alert(
//           `Incorrect! The target number is ${
//             RandomNum > guess ? "higher" : "lower"
//           } than ${guess}.`
//         );
//       }

//       numberOfTry--;
//       updateHeaderMessage();

//       setTimeout(nextGuess, 100);
//     }, 10);
//   } else {
//     alert(`Game over! The target number was ${RandomNum}.`);
//   }
// }

// setTimeout(nextGuess, 4000);
