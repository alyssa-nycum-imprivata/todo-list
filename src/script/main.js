const url = "http://localhost:8088/todos";

// const printTodos = (todos) => {
//     todos.forEach(todo => {
//         console.log(todo);
//     });
// };

const todoFactory = todo => {
    let className = "incomplete";
    if (todo.isDone) {
        className = "complete";
    }
    return `<section class="${className}">
                ${todo.text}
            </section>`
};

const addTodoToDom = todoHtml => {
    const container = document.querySelector("#container");
    container.innerHTML += todoHtml;
};

fetch(url)
    .then(resp => resp.json())
    .then(todoData => {
        todoData.forEach(todo => {
            const todoHtml = todoFactory(todo);
            addTodoToDom(todoHtml);
        });
        // printTodos(todoData);
        console.log(todoData);
    });