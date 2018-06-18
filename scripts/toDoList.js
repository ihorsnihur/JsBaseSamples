window.onload = function () {
    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = getRemoveControl();
        myNodelist[i].appendChild(span);
    }
};


class Task {
    constructor(taskName, isDone) {
        this.taskName = taskName;
        this.isDone = isDone;
    }
}

class ToDoList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(name) {
        if(!this.tasks)
            this.tasks = [];

        this.tasks.push(new Task(name, false));
    }

    removeTask(name) {
        this.tasks = this.tasks.filter(function (item) {
            return item.name != name;
        });
    }
}
// var t = new ToDoList();
// this.alert(t.prop);



// Create a new list item when clicking on the "Add" button
function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = getRemoveControl();
    li.appendChild(span);
}

function getRemoveControl(){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.appendChild(txt);
    span.onclick = removeTask;
    return span;
}

function removeTask() {
    var div = this.parentElement;
    div.style.display = "none";
};