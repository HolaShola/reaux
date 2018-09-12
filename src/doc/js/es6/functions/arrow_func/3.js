let task = {
    id: 123,
    done: function() {
        return () => console.log(this.id);
    }
};

let anotherTask = {
    id: 987
};

task.done().bind(anotherTask)();
task.done().call(anotherTask);
task.done().apply(anotherTask);