export function square(x) { return x * x; };

export class Task {
    constructor(taskName, isDone) {
        this.taskName = taskName;
        this.isDone = isDone;
    }
}

export class ToDoList {
    constructor(tasks) {
        if(!tasks)
            tasks = [];
        this.tasks = tasks;
    }

    get allTasks() {
        return this.tasks;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(name) {
        if (!this.tasks)
            this.tasks = [];

        this.tasks.push(new Task(name, false));
    }

    // updateTask(oldName, task){
    //     var taskToUpdate = this.tasks.filter(function (item) {
    //         return item.taskName == oldName;
    //     });
    //     if(taskToUpdate.length == 1)
    //         taskToUpdate[0] = task;
    // }

    removeTask(task) {
        this.tasks = this.tasks.filter(function (item) {
            return item.taskName != task.taskName;
        });
    }
}