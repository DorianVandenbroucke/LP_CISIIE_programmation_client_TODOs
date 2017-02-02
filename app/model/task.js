angular.module("todo").service("Task",["$http",
    function($http){
        var Task = function(data){
            this.parent = data.list_id.$oid;
            this.text = data.text;
            this.done = data.done;
            this.id = data.id;
        }

        Task.addTask = function(task_to_add, id_list){
            tab = [task_to_add, id_list];
            Task.add = tab;
        }
        Task.prototype.deleteTask = function(){
            Task.deleteTask = this;
        }
        Task.prototype.modifyTask = function(){
            Task.modifyTask = this;
        }
        Task.prototype.verifyCheck = function(checked){
            Task.checkTask = [this, checked];
        }
        return Task;
    }
]);
