angular.module("todo").controller("ListController",["$scope", "$http", "List",
    function($scope, $http, List){
        $http.get("http://todos.api.netlor.fr/lists",{
            headers: {
                "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
            }
        }).then(function(response){
            $scope.lists = [];
            response.data.forEach(function(data){
                var newList = new List(data);
                $scope.lists.push(newList);
            });
        },function(error){
            console.log(error);
        });

        // On supprime une liste
        $scope.deleteList = function(){
            return List.deleteList;
        }
        $scope.$watch($scope.deleteList, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists/"+newValue.id;
                $http.delete(url, {
                    headers: {
                        "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                    }
                }).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On ajoute une liste
        $scope.addList = function(){
            return List.addList;
        }
        $scope.$watch($scope.addList, function(newValue, oldValue){
            if (newValue) {
                var url = "http://todos.api.netlor.fr/lists";
                $http.post(url, {
                    headers: {
                        "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                    },
                    data: {
                        "label": newValue
                    }
                }).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit la page
        $scope.refresh = function(){
            $http.get("http://todos.api.netlor.fr/lists",{
                headers: {
                    "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
                }
            }).then(function(response){
                $scope.lists = [];
                response.data.forEach(function(data){
                    var newList = new List(data);
                    $scope.lists.push(newList);
                });
            },function(error){
                console.log(error);
            });
        }
    }
]);
