const btnReestablecer = document.getElementById("btnReestablecer");
const contadorVisitas = document.getElementById("contadorVisitas");

const getCount = parseInt(localStorage.getItem("visitCount")) || 0;
const setCount = (visit) => localStorage.setItem("visitCount", visit);

let visitCount = getCount;

const updateVisit = () => {
    setCount(visitCount);
    contadorVisitas.textContent = visitCount;
};

const removeCount = () => {
    localStorage.removeItem("visitCount");
    contadorVisitas.textContent = 0;
};

visitCount++;
updateVisit();

btnReestablecer.addEventListener("click", () => {
    removeCount;
});
