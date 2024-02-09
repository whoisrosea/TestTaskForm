export default function formValidation() {
  let hasError = false;
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());

  const formFields = document.querySelectorAll(
    "#feedback-form input, #feedback-form textarea"
  );
  formFields.forEach((field) => {
    field.classList.remove("inputError");
    if (!field.value.trim()) {
      showError(field, "Это поле обязательно к заполнению");
      hasError = true;
    } else if (field.type === "email" && !isValidEmail(field.value)) {
      showError(field, "Введите корректный адрес электронной почты");
      hasError = true;
    }
  });

  function showError(field, message) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add("error-message"); 
    field.classList.add("inputError"); 
    field.parentNode.insertBefore(errorMessage, field.nextSibling); 
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  return !hasError;
}
