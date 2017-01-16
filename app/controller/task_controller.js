angular.module("todo").controller("TaskController",["$scope", "$http", "Task",
    function($scope, $http, Task){
        $http.get("http://todos.api.netlor.fr/lists/587753af46e1152dee0027b4",{
            headers: {
                "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
            }
        }).then(function(response){
            console.log(response);
            $scope.tasks = [];
            response.data.todos.forEach(function(data){
                // console.log(data);
                var newTask = new Task(data);
                $scope.tasks.push(newTask);
            });
        },function(error){
            console.log(error);
        });
    }
]);
