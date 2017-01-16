angular.module("todo").controller("TaskController",["$scope", "$http", "Task", "List",
    function($scope, $http, Task, List){
        console.log(List.currentList);
        $scope.currentList = function(){
            return List.currentList;
        }
        $scope.$watch($scope.currentList, function(newValue, oldValue){
            if (newValue) {
                url = "http://todos.api.netlor.fr/lists/"+newValue.id;
                $http.get(url,{
                    headers: {
                        "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                    }
                }).then(function(response){
                    $scope.tasks = [];
                    // console.log(response.data.todos);
                    if (response.data.todos) {
                        response.data.todos.forEach(function(data){
                            var newTask = new Task(data);
                            $scope.tasks.push(newTask);
                        });
                    }
                },function(error){
                    console.log(error);
                });
            }
            // console.log(newValue);
            // console.log(oldValue);
        });

    }
]);
