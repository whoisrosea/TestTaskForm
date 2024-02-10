import "./sass/style.scss";
import Inputmask from "inputmask";
import formValidation from "./js/formValidation";
import sendForm from "./js/formHandler";
import { closeModal } from "./js/modalHandler";

let numberInput = document.getElementById("phone");
let mask = new Inputmask("+375 (99) 999-99-99");
mask.mask(numberInput);

document
  .getElementById("feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (formValidation()) {
     sendForm();
    }
  });

document
  .querySelector(".close-button")
  .addEventListener("click", () => closeModal("modal"));
