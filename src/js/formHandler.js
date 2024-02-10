import { openModal, closeModal } from "./modalHandler";

export default function sendForm() {
  let formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  fetch("http://localhost:9090/api/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("modalText").innerHTML =
          "Error: " + response.statusText;
        openModal("modal");
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === "success") {
        ["name", "phone", "email", "message"].forEach(
          (id) => (document.getElementById(id).value = "")
        );
        document.getElementById("modalText").innerHTML = data.message;
        openModal("modal");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
