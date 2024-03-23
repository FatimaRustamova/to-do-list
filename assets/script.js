let text = document.querySelector(".text");
let inputText = document.querySelector("input[type=text]");
let add = document.querySelector("#add");
let clear = document.querySelector("#clear");
let todo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []

function createToDo(value) {
    let total = document.createElement("div");
    total.className = "total";
    let upper = document.createElement("div");
    upper.className = "upper"
    let check = document.createElement("div");
    check.className = "check";
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    let date = document.createElement("span");
    let i = document.createElement("i");
    i.className = "bi bi-trash-fill";

    span.innerHTML = value;
    todo.push(value);
    date.innerHTML = new Date().toLocaleString()

    text.appendChild(total);
    total.appendChild(upper);
    upper.appendChild(check);
    upper.appendChild(date)
    check.appendChild(input);
    check.appendChild(span);
    total.appendChild(i);

    i.addEventListener("click", (e) => {
        e.target.parentElement.remove()
    })
}

function addToDo() {
    let value = inputText.value.trim();
    if (value) {
        createToDo(value);
        inputText.value = "";
        localStorage.setItem("todo", JSON.stringify(todo))
    }
}

function clearAllToDo() {

}

function getFromStorage() {
    todo.forEach(el => {
        createToDo(el)
    })
}

add.addEventListener("click", addToDo);
window.addEventListener("keypress", (e)=> {
    if(e.keyCode == 13){
        addToDo()
    }
})
clear.addEventListener("click", clearAllToDo);
document.addEventListener("DOMContentLoaded", getFromStorage);