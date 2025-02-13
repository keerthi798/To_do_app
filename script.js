document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const totalTasks = document.getElementById('total-tasks');

    function updateTotalTasks() {
        totalTasks.textContent = taskList.children.length;
    }

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            updateTotalTasks();
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
                updateTotalTasks();
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
            updateTotalTasks();
        });

        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});