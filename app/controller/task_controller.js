angular.module("todo").controller("TaskController",["$scope", "$http", "Task", "List",
    function($scope, $http, Task, List){
        console.log(List.currentList);
        $scope.currentList = function(){
            return List.currentList;
        }
        $scope.$watch($scope.currentList, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists/"+newValue.id;
                $http.get(url, {
                    headers: {
                        "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                    }
                }).then(function(response){
                    $scope.tasks = [];
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

        // On ajoute une tâche
        $scope.addTask = function(){
            return Task.addTask;
        }
        $scope.$watch($scope.addTask, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists/"+newValue[1]+"/todos";
                $http.post(url, {
                        "text": newValue[0]
                    },
                    {
                        headers: {
                            "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                        }
                }).then(function(response){
                    $scope.refresh(newValue, oldValue);
                },function(error){
                    console.log(error);
                });
            }
        });

        // On supprime une tâche
        $scope.deleteTask = function(){
            return Task.deleteTask;
        }
        $scope.$watch($scope.deleteTask, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists/"+newValue.parent+"/todos/"+newValue.id;
                $http.delete(url, {
                    headers: {
                        "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                    }
                }).then(function(response){
                    $scope.refresh([newValue, newValue.parent], oldValue);
                },function(error){
                    console.log(error);
                });
            }
        });

        // On modifie une tâche
        $scope.modifyTask = function(){
            return Task.modifyTask;
        }
        $scope.$watch($scope.modifyTask, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists/"+newValue.parent+"/todos/"+newValue.id;
                $http.put(url, {
                        "text": newValue.text
                    },
                    {
                        headers: {
                            "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                        }
                }).then(function(response){
                    $scope.refresh([newValue, newValue.parent], oldValue);
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit le template
        $scope.refresh = function(newValue, oldValue){
            $http.get("http://todos.api.netlor.fr/lists/"+newValue[1]+"/todos",{
                headers: {
                    "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                }
            }).then(function(response){
                $scope.tasks = [];
                response.data.forEach(function(data){
                    var newTask = new Task(data);
                    $scope.tasks.push(newTask);
                });
            },function(error){
                console.log(error);
            });
        }

    }
]);
