new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === '') return;
            this.tasks.push(this.newTask);
            this.newTask = '';
            this.saveTasksToLocalStorage();
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            this.saveTasksToLocalStorage();
        },
        saveTasksToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        loadTasksFromLocalStorage() {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
            }
        }
    },
    mounted() {
        this.loadTasksFromLocalStorage();
    }
});
