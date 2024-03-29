const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");


form.addEventListener("submit", (e) => { 
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = input.value;

    if(todoText){
        const todoEl = document.createElement("li");

        todoEl.innerText = todoText;
        
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
        });

        todoEl.addEventListener("contextmenu", (e) =>{
            e.preventDefault();
            todoEl.remove();
        });

        todos.appendChild(todoEl);


        input.value ="";

        updateLS();
    }
}

function updateLS(){
    const todos = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: tofoEl,innerText,
            completed: tofoEl.classList.contains("completed")
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
