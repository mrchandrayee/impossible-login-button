const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#loginButton");
const zone = document.querySelector("#buttonZone");
const message = document.querySelector("#message");
const togglePassword = document.querySelector("#togglePassword");
const forgot = document.querySelector("#forgot");

let dodgeCount = 0;

function credentialsReady() {
  return email.validity.valid && email.value.trim() !== "" && password.value.length >= 6;
}

function placeButtonAway(pointerX, pointerY) {
  const zoneRect = zone.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const maxX = Math.max(0, zoneRect.width - buttonRect.width - 8);
  const maxY = Math.max(0, zoneRect.height - buttonRect.height - 4);
  let x, y, attempts = 0;
  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    attempts++;
  } while (attempts < 12 &&
    Math.hypot(zoneRect.left + x + buttonRect.width/2 - pointerX,
               zoneRect.top + y + buttonRect.height/2 - pointerY) < 55);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  button.style.transform = "none";
  button.classList.add("dodge");
  dodgeCount++;
  if (dodgeCount >= 2) message.textContent = "Fill in your details to unlock the button!";
}

function resetButton() {
  button.classList.remove("dodge");
  button.style.left = "";
  button.style.top = "";
  button.style.transform = "";
}

button.addEventListener("pointerenter", event => {
  if (!credentialsReady()) placeButtonAway(event.clientX, event.clientY);
});

button.addEventListener("click", event => {
  if (!credentialsReady()) {
    event.preventDefault();
    placeButtonAway(event.clientX, event.clientY);
  }
});

[email, password].forEach(input => {
  input.addEventListener("input", () => {
    message.className = "message";
    message.textContent = "Don't have an account? ";
    const link = document.createElement("a");
    link.href = "#signup";
    link.textContent = "Sign up";
    link.addEventListener("click", e => e.preventDefault());
    message.append(link);
    if (credentialsReady()) resetButton();
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!credentialsReady()) {
    message.className = "message error";
    message.textContent = "Enter a valid email and password (6+ characters).";
    return;
  }
  resetButton();
  message.className = "message success";
  message.textContent = "Demo login successful — connect your backend for real authentication.";
  button.querySelector("span").textContent = "Welcome!";
});

togglePassword.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  togglePassword.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  togglePassword.textContent = showing ? "◉" : "◎";
});

forgot.addEventListener("click", () => {
  message.className = "message";
  message.textContent = "Password reset should be handled by your authentication backend.";
});
