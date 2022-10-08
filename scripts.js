function validateEmail() {
    let email = document.getElementById("email");
    var error_email = document.querySelector(".error_email");
    var input = document.querySelector(".input");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
      return true;
  
    } else {
        input.style.borderColor = "red"
        error_email.style.display = "flex";

      return false;
    }
  }