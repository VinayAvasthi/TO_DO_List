const inputBox = document.querySelector("#taskInput");
const addButton = document.querySelector("#addBtn");
const listContainer = document.querySelector("#taskList");

function createTask(text) {
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Remove</button>
    `;

    const taskText = taskItem.querySelector("span");
    const removeBtn = taskItem.querySelector(".delete-btn");

    taskText.onclick = () => {
        taskText.classList.toggle("completed");
    };

    removeBtn.onclick = () => {
        taskItem.remove();
    };

    listContainer.append(taskItem);
}

function handleTask() {
    const value = inputBox.value.trim();

    if (!value) {
        alert("Task field cannot be empty!");
        return;
    }

    createTask(value);
    inputBox.value = "";
}

addButton.onclick = handleTask;

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleTask();
    }
});
