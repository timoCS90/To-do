        let todos = [];

        function displayTodos() {
            let todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';
            todos.forEach((todo, index) => {
                let li = document.createElement('li');
                li.textContent = todo;
                });
                todoList.appendChild(li);
            };
        

       
        function addTodo() {
            let todoInput = document.getElementById('todo-input');
            let newTodo = todoInput.value;
            todos.push(newTodo);
            todoInput.value = '';
            displayTodos();
        }

        let addTodoButton = document.getElementById('add-todo');
        addTodoButton.addEventListener('click', addTodo);

      
        displayTodos();