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

//create the table and pictures
const fragment = document.createDocumentFragment();

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
  fragment.appendChild(row);
  tbody.appendChild(fragment);
}
table.appendChild(tbody);
element.appendChild(table);

//hide images after 10 seconds
function hideImages() {
  const cells = document.querySelectorAll("td img");
  cells.forEach((cell) => {
    cell.style.visibility = "hidden";
  });
}

let firstGuess = null;
let secondGuess = null;

function startGuessing() {
  const cells = document.querySelectorAll("td img");

  cells.forEach((cell) => {
    cell.parentElement.addEventListener("click", () => {
      if (!firstGuess) {
        firstGuess = cell;
        cell.style.visibility = "visible";
      } else if (!secondGuess && cell !== firstGuess) {
        secondGuess = cell;
        cell.style.visibility = "visible";

        if (firstGuess.dataset.src === secondGuess.dataset.src) {
          alert("Correct! you gussed the correct image!!!!");
          firstGuess = null;
          secondGuess = null;
        } else {
          setTimeout(() => {
            firstGuess.style.visibility = "hidden";
            secondGuess.style.visibility = "hidden";
            firstGuess = null;
            secondGuess = null;
          }, 1000);
        }

        numberOfTry--;
        updateHeaderMessage();
        if (numberOfTry === 0) {
          alert("Game over!");
          window.location.reload(); // Restart the game //BOM usage
        }
      }
    });
  });
}
// Show images for 10 seconds, then hide them
setTimeout(hideImages, 10000);
setTimeout(startGuessing, 10000);

//form

function createForm() {
  const formEl = document.getElementById("form");
  const form = document.createElement("form");
  form.classList.add("p-4", "bg-light", "border", "rounded", "shadow");

  // Name input
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  nameLabel.classList.add("form-label", "mt-3");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.classList.add("form-control");
  nameInput.required = true;

  // Email input
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.classList.add("form-label", "mt-3");
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.classList.add("form-control");
  emailInput.required = true;

  // Phone input
  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone:";
  phoneLabel.classList.add("form-label", "mt-3");
  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.name = "phone";
  phoneInput.classList.add("form-control");
  phoneInput.required = true;

  // Date of birth input
  const dobLabel = document.createElement("label");
  dobLabel.textContent = "Date of Birth:";
  dobLabel.classList.add("form-label", "mt-3");
  const dobInput = document.createElement("input");
  dobInput.type = "date";
  dobInput.name = "dob";
  dobInput.classList.add("form-control");
  dobInput.required = true;

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("btn", "btn-primary", "mt-4");

  // Append all elements to the form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(phoneLabel);
  form.appendChild(phoneInput);
  form.appendChild(dobLabel);
  form.appendChild(dobInput);
  form.appendChild(submitButton);

  formEl.appendChild(form);

  // Form submission event
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const phoneValue = phoneInput.value;

    if (!validateEmail(emailValue)) {
      alert("Invalid email format");
    } else if (!validatePhone(phoneValue)) {
      alert("Invalid phone number");
    } else {
      alert("Form submitted successfully");
      form.reset();
      window.location.reload();
    }
  });
}

createForm();

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email); // Using .test method for regex
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone); // Using .test method for regex
}
