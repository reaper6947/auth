const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const btn = document.getElementById("submitBtn");



username.addEventListener("input", () => {
  const usernameValue = username.value.trim();
  
  if (
    usernameValue.length == 0  ||
    usernameValue === undefined ||
	  usernameValue === null
  ) {
    setErrorFor(username, "Username cannot be blank or undefined");
  } else {
    setSuccessFor(username);
  }
  allcorrect()
});

password.addEventListener("input", () => {
  const passwordValue = password.value.trim();
  if (passwordValue.length == 0) {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
  allcorrect()
});

password2.addEventListener("input", () => {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (password2Value !== passwordValue) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
  allcorrect()
})


function allcorrect() {
  const divs = document.getElementsByClassName("form-control");
  function checkSuccess(elem) {
    return elem.classList.contains("success");
  }
  
  if (divs[0].classList.contains("success") && divs[1].classList.contains("success") && divs[2].classList.contains("success")) {
   
    btn.style.visibility = "visible";
  }
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  input.setCustomValidity(message);
  input.reportValidity();
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  input.setCustomValidity("");
  input.reportValidity();
  formControl.className = "form-control success";
}


