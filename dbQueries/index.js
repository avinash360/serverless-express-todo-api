const firebase = require("../firebase");

const tasksRef = firebase.database().ref("tasks");

const getTasks = (taskId) => {
    const tasks = taskId ? tasksRef.child(taskId) : tasksRef;
    return tasks.once('value')
        .then(function (snapshot) {
            return snapshot.val();
        });
}

const addTask = (task) => {
    return tasksRef.push(task, (error) => {
        return !error;
    });
}

const updateTask = (taskId, data) => {
    const task = tasksRef.child(taskId);
    return task.update(data, (error) => {
        return !error;
    });
}

const deleteTask = (taskId) => {
    const task = tasksRef.child(taskId);
    return task.remove((error) => {
        return !error;
    });
}

export {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
};
