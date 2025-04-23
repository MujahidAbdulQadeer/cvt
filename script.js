document.getElementById("addButton").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;

        // Add a delete button for each task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("todoList").appendChild(li);
        todoInput.value = ""; // Clear the input after adding
    }
});

document.getElementById("todoInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addButton").click();
    }
});
