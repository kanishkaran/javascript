// Select elements
var addButton = document.getElementById("addButton");
var textBox = document.getElementById("textBox");
var listItems = document.getElementById("listItems");

// Load saved tasks from local storage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        addTaskToDOM(task);
    });
}

// Save tasks to local storage
function saveTasks() {
    var tasks = [];
    listItems.querySelectorAll("li").forEach(function(li) {
        tasks.push(li.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to the DOM
function addTaskToDOM(task) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    listItems.appendChild(li);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteButton);
    listItems.appendChild(li);
}

// Add event listener to the button
addButton.addEventListener("click", function() {
    var text = textBox.value.trim();
    if (text !== "") {
        addTaskToDOM(text);
        saveTasks();
        textBox.value = "";
    }

    
});

// Load tasks on page load
loadTasks();
