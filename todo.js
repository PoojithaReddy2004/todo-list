const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = taskText;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.appendChild(taskInput);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        editBtn.addEventListener('click', function () {
            taskInput.disabled = false;
            taskInput.focus();
        });

        taskInput.addEventListener('blur', function () {
            taskInput.disabled = true;
        });

        taskInput.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                taskInput.blur();
            }
        });

        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        taskInput.disabled = true;
        taskInput.addEventListener('input', updateTaskText);

        taskInput.value = '';
    }
}

function updateTaskText() {
    const taskText = this.value.trim();

    if (taskText === '') {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
}
