const btnReestablecer = document.getElementById("btnReestablecer");
const contadorVisitas = document.getElementById("contadorVisitas");

let contador = localStorage.getItem("contador");

if (!contador) {
    contador = 1;
} else {
    contador = Number.parseFloat(contador);
    contador++;
}
localStorage.setItem("contador", contador);

contadorVisitas.textContent = contador;

btnReestablecer.addEventListener("click", () => {
    localStorage.removeItem("contador");
    contadorVisitas.textContent = 0;
});
