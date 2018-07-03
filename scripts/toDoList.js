import { Task, ToDoList } from './modules.js';

window.onload = function () {
    init();

    var storage = new StorageManager();
    var toDoListStorage = storage.getObject("ToDoListStorage");    

    var toDoList = new ToDoList();
    if (toDoListStorage) {
        toDoList = toDoListStorage;
    } else {
        toDoList.addTask("TEST 1");
        toDoList.addTask("TEST 2");
        toDoList.addTask("TEST 3");
        toDoList.addTask("TEST 4");
        // localStorage.setItem("ToDoListStorage", toDoList);
        storage.addObject("ToDoListStorage", toDoList);
    }

    var myUL = document.getElementById("myUL")
    myUL.model = toDoList;
    render(toDoList);
};

function init() {
    attachFormSubmit();
}

function attachFormSubmit() {
    var theForm = document.getElementById("addTaskForm");

    if (theForm.addEventListener) {
        theForm.addEventListener('submit', addTask, false);
    } else if (theForm.attachEvent) {
        theForm.attachEvent('onsubmit', addTask);
    }
}

function clearToDoList() {
    delete localStorage["ToDoListStorage"]
}


function getToDoList() {
    return document.getElementById("myUL").model;
}

function render(toDoList) {
    var toDoListElement = document.getElementById("myUL");
    while (toDoListElement.firstChild) toDoListElement.removeChild(toDoListElement.firstChild);

    toDoList.allTasks.forEach(task => {
        generateTaskHtml(task);
    });
};

function generateTaskHtml(task) {
    var taskDesc = task.taskName
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(taskDesc);
    span.appendChild(txt);

    var li = document.createElement("li");
    li.appendChild(span);
    li.appendChild(getEditTaskControl());
    li.appendChild(getRemoveButton());
    li.appendChild(getEditButton());
    li.model = task;
    document.getElementById("myUL").appendChild(li);
};

function addTask() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Task description is required");
    } else {
        var toDoList = getToDoList();
        toDoList.addTask(inputValue);
        render(toDoList);
    }

    var storage = new StorageManager();
    storage.addObject("ToDoListStorage", toDoList);
    document.getElementById("myInput").value = "";
}

function removeTask() {
    var task = this.parentElement.model;
    var toDoList = getToDoList();
    toDoList.removeTask(task);

    var storage = new StorageManager();
    storage.addObject("ToDoListStorage", toDoList);

    render(toDoList);
};

function editTask(id) {
    var listItem = this.parentNode;
    var task = this.parentNode.model;

    var editInput = listItem.querySelector('input[type=text]');
    var label = listItem.querySelector("span");
    var isHide = editInput.className == "hide";
    if (isHide) {
        editInput.className = "show";
        label.className = "hide";
        editInput.value = task.taskName;//label.innerText;
        this.value = "Save";
    } else {

        editInput.className = "hide";
        label.className = "show";
        label.innerText = editInput.value;
        task.taskName = editInput.value;
        this.value = "Edit";
    }

    
    var toDoList = getToDoList();
    var storage = new StorageManager();
    storage.addObject("ToDoListStorage", toDoList);
};

function getEditTaskControl() {
    var editText = document.createElement("input");
    editText.type = "text";
    editText.className = "hide"
    return editText;
};

function getRemoveButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Delete";
    button.onclick = removeTask;
    return button;
}

function getEditButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Edit";
    button.onclick = editTask;
    return button;
};

class StorageManager {

    addObject(key, object) {
        var serialized = JSON.stringify(object);
        localStorage.setItem(key, serialized);
    }

    getObject(key) {
        var stringifiedObject = localStorage.getItem(key);
        if (!stringifiedObject)
            return undefined;
        var obj = JSON.parse(stringifiedObject);
        return new ToDoList(obj.tasks);
    }
}


// function submitWait(){ 	
// 	if (document.all || document.getElementById) {
// 		for (let i = 0; i < this.length; i++) {
// 		var formElement = this.elements[i];
// 			if (formElement.type == "submit") {
// 				formElement.disabled = true;
// 			}
// 		}
// 	}
// }