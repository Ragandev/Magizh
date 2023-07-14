var showIcon = document.querySelector(".show-pass");
var passBox = document.querySelector("input[type=password]");

function password() {
  if (passBox.value != "") {
    showIcon.style.display = "block";
  } else {
    showIcon.style.display = "none";
  }
}
setInterval(password, 1000);

function showpass() {
  let pass = passBox.getAttribute("type");
  if (pass == "password") {
    passBox.setAttribute("type", "text");
  } else {
    passBox.setAttribute("type", "password");
  }
}

showIcon.addEventListener("click", () => {
  showpass();
});