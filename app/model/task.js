angular.module("todo").service("Task",["$http",
    function($http){
        var Task = function(data){
            this.parent = data.list_id.$oid;
            this.text = data.text;
            this.id = data.id;
        }

        Task.prototype.addTask = function(task_to_add, id_list){
            tab = [task_to_add, id_list];
            Task.addTask = tab;
        }

        return Task;
    }
]);
