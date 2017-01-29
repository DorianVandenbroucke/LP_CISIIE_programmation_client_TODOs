angular.module("todo").directive("tasks",
    ["Task",
    function(Task){
        return{
            restrict: "E",
            templateUrl: "app/templates/tasks.html",
            link: function(scope, element, attrs){
                scope.addTask = function(){
                    if(scope.task_name){
                        Task.addTask(scope.task_name, scope.parent_list.id);
                    }else{
                        Task.addTask($("#task_name").val(), scope.parent_list.id);
                    }
                },
                scope.deleteTask = function(task){
                    task.deleteTask();
                },
                scope.modifyTask = function(task){
                    if(this.new_task_name){
                        task.text = this.new_task_name;
                    }
                    task.modifyTask();
                },
                scope.verifyCheck = function(task){
                    task.verifyCheck(this.checked);
                }
            }
        };
    }
]);
