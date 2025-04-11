const submitBtn = document.getElementById("submit-btn");
const emailInput = document.querySelector(".email-text");
const emailError= document.querySelector(".email-label .error"
);
const nameInput = document.querySelector(".name-text");
const nameError = document.querySelector(".name-label .error");
const messageInput = document.querySelector('.message-text');
const messageError = document.querySelector("#message .error")
const form = document.querySelector("#form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    nameInput.classList.add("error");
    valid = false;
  } else {
    nameInput.classList.remove("error");
  };
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email address";
    emailInput.classList.add("error");
    valid = false;
  } else {
    emailInput.classList.remove("error")
  };
  if(messageInput.value === ""){
    messageError.textContent = "Please write a message";
    messageInput.classList.add("error");
    valid = false;
  } else{
    messageInput.classList.remove("error");
  };
  if(valid){
    alert("Form submitted successfully");
    form.reset();
  };
});
