const tasks = [];

function addTask() {
    const taskName = document.getElementById("taskInput").value;
    const priority = document.getElementById("priorityInput").value;

    if (taskName === "") {
        alert("please enter task");
        return
    }
    tasks.push({ name: taskName, priority, completed: false });
    displayTasks();
    document.getElementById("taskInput").value;

}

function displayTasks() {
    const taskTableBody = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
    taskTableBody.innerHTML = "";

    for (const task of tasks) {
        const row = taskTableBody.insertRow();

        // Task Name Cell
        const taskCell = row.insertCell();
        taskCell.textContent = task.name;

        // Priority Cell
        const priorityCell = row.insertCell();
        priorityCell.textContent = task.priority;
        priorityCell.style.color = task.priority === "High" ? "#ff0000" : task.priority === "Medium" ? "orange" : " #00e673";

        // Status Cell with Dropdown
        const statusCell = row.insertCell();
        const statusSelect = document.createElement("select");
        statusSelect.classList.add("status-dropdown");

        // Options for dropdown
        const incompleteOption = document.createElement("option");
        incompleteOption.value = "Incomplete";
        incompleteOption.textContent = "Incomplete";
        statusSelect.appendChild(incompleteOption);

        const completeOption = document.createElement("option");
        completeOption.value = "Complete";
        completeOption.textContent = "Complete";
        statusSelect.appendChild(completeOption);

        statusSelect.value = task.completed ? "Complete" : "Incomplete";
        statusSelect.onchange = () => updateTaskStatus(task.name, statusSelect.value);
        statusCell.appendChild(statusSelect);
    }
}

function updateTaskStatus(taskName, status) {
    for (const task of tasks) {
        if (task.name === taskName) {
            task.completed = (status === "Complete");
            break;
        }
    }
}
