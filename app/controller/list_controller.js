angular.module("todo").controller("ListController",["$scope", "$http", "List",
    function($scope, $http, List){
      $http.get("http://todos.api.netlor.fr/lists",{
            headers: {
                "Authorization": "Token token=47244e6526354e15a3b3f9386de73d24"
            }
        }).then(function(response){
            console.log(response);
            $scope.lists = [];
            response.data.forEach(function(data){
                var newList = new List(data);
                $scope.lists.push(newList);
            });
        },function(error){
            console.log(error);
        });
    }
]);
