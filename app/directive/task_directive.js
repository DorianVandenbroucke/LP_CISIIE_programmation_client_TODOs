angular.module("todo").directive("tasks",[
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/tasks.html",
            link: function(scope, element, attrs){
                scope.addTask = function(t){
                     t[0].addTask(this.task_name, t[0].parent);
                },
                scope.deleteTask = function(task){
                    task.deleteTask();
                }
            }
        };
    }
]);
