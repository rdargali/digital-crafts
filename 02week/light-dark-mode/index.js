//h1 text
let h1Text = document.createElement("h1");
h1Text.innerHTML = "Dark mode or Light mode?";
document.body.appendChild(h1Text);

//Dark mode button
let darkModeBtn = document.createElement("button");
darkModeBtn.innerHTML = "Dark Mode";
darkModeBtn.id = "darkModeBtn";
darkModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

//Light mode button
let lightModeBtn = document.createElement("button");
lightModeBtn.innerHTML = "Light Mode";
lightModeBtn.id = "lightModeBtn";
lightModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});

document.body.appendChild(lightModeBtn);
document.body.appendChild(darkModeBtn);
