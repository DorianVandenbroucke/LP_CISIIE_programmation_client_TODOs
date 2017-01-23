angular.module("todo").directive("tasks",
    ["Task",
    function(Task){
        return{
            restrict: "E",
            templateUrl: "app/templates/tasks.html",
            link: function(scope, element, attrs){
                scope.addTask = function(){
                    Task.addTask(scope.task_name, scope.parent_list.id);
                },
                scope.deleteTask = function(task){
                    task.deleteTask();
                },
                scope.modifyTask = function(task){
                    task.text = this.new_task_name;
                    task.modifyTask();
                }
            }
        };
    }
]);
