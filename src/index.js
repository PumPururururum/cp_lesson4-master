import { MiniMaple } from "./miniMaple";
document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('difResult').onclick = difResult;
}

/* function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = `I was created by JS! There are already ${count} of my friends!`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
} */
function difResult(){
    const expression = document.getElementById("expression").value;
    const variable = document.getElementById("variable").value;
    try {
        const result = new MiniMaple().difPolynom(expression, variable);
        document.getElementById("result").innerText = result;
      } catch (error) {
        document.getElementById("result").innerText = error.message;
      }
}