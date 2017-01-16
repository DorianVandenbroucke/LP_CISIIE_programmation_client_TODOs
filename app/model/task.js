angular.module("todo").service("Task",["$http",
    function($http){
        var Task = function(data){
            this.text = data.text;
            this.id = data.id;
        }
        return Task;
    }
]);
