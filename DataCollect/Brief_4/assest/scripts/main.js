function GoToNextPage(){
  window.location.href='/pages/dcollect.html' ;
}
function ferstPrev(){
  window.location.href='../index.html';
}
function showForms(formCount) {
  const form = document.querySelectorAll(".form");
  form.forEach((form) => form.classList.add("d-none"));
  document.getElementById("form" + formCount).classList.remove("d-none");
}

function nextForm(formCount) {
  showForms(formCount);
}

function prevForm(formCount) {
  showForms(formCount);
}
function AlertForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementsByClassName("Grandform").reset();
    showForms(1);
  }
  function validateInput(id, regex, errorId) {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(errorId);

    if (regex.test(input.value.trim())) {
        errorElement.classList.add("d-none"); 
        return true;
    } else {
        errorElement.classList.remove("d-none"); 
        return false;
    }
}
function validateName() {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  return validateInput("nom", nameRegex, "NameError");
}
function validateAge() {
  const ageRegex = /^(?:1[89]|[2-9]\d|1[01]\d|120)$/;
  return validateInput("age", ageRegex, "AgeError");
}
function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return validateInput("email", emailRegex, "emailError");
}

// Phone number validation
function validatePhone() {
  const phoneRegex = /^\d{10,15}$/; 
  return validateInput("tele", phoneRegex, "teleError");
}


function validateComment() {
  const commentRegex = /^.{5,}$/;
  return validateInput("comment", commentRegex, "commentError");
}


function AlertForm(event) {
  event.preventDefault();
  const isValid = validateName() && validateAge() && validateEmail() && validatePhone() && validateComment();

  if (isValid) {
      alert("Form submitted successfully!");
  } else {
      alert("Please fix errors in the form.");
  }
}
