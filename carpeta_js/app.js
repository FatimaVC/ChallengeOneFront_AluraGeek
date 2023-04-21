import { valida } from "./validaciones.js";
// console.log("Validaciones");

// creamos una constante que nos selecione todos los elementos inputs

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

