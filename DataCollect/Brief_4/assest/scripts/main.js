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
 