function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');

    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
    li.onclick = function() {
        li.classList.toggle('completed');
    };
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove();
}
