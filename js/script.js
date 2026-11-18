const total = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let contador = 0;
// TODO 1: mostre 0 no #total ao carregar a página.
total.textContent = contador;
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
btnSomar.addEventListener("click", () => {
    contador++;
    total.textContent = contador;
});
btnZerar.addEventListener("click", () => {
  contador = 0;
  total.textContent = contador;
});