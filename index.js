let themeButton = document.getElementById("theme-button");
let form = document.getElementById("sign-petition");
let count = 3;

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

const addSignature = (event) => {
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;

  let newSignature = document.createElement("p");
  newSignature.textContent = "🖊️ " + name + " from " + hometown + " supports this.";
  let signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);

  document.getElementById("counter").innerHTML = `<p>🖊️ ${count += 1} people have signed this petition and support this cause.</p>`
  document.getElementById("name").value = "";
  document.getElementById("hometown").value = "";
  document.getElementById("email").value = "";
  event.preventDefault();
}

themeButton.addEventListener("click", toggleDarkMode);
form.addEventListener("submit", addSignature);
