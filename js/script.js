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
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
