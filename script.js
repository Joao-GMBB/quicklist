const container = document.querySelector(".container");
const button = document.querySelector("button");
let i = 0;
let j = 0;

button.addEventListener("click", addItem, false);

function addItem() {
  i++;
  const input = document.querySelector("input").value;

  if (input === "") {
    return;
  }

  const div = document.createElement("div");
  div.classList.add("item");
  div.id = i;
  div.innerHTML += `<input type="checkbox" /> ${input}`;
  div.innerHTML += `<img src="./trash.svg" alt="trash" onclick="deleteItem(${i})">`;
  container.appendChild(div);
}

function deleteItem(i) {
  j++;
  let item = document.getElementById(i);
  container.removeChild(item);
  let alertWrapper = document.querySelector(".alert-wrapper");
  alertWrapper.innerHTML += `<div class="alert" id="${j}">
  <img src="./warning-circle-filled.svg" alt="alerta" />O item foi removido da lista
  <img src="./delete-small.svg" alt="fechar" onclick="hideAlert(${j})" />
</div>`;

  setTimeout(() => {
    alertWrapper.removeChild(alertWrapper.firstChild);
  }, 1500);
}

function hideAlert(j) {
  let alert = document.getElementById(j);
  alert.remove();
}
