const total = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let contador = 0;

total.textContent = contador;

btnSomar.addEventListener("click", () => {
    contador++;
    total.textContent = contador;
});
btnZerar.addEventListener("click", () => {
  contador = 0;
  total.textContent = contador;
});