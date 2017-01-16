angular.module("todo").directive("lists",[
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/lists.html",
            link: function(scope, element, attrs){
                scope.deleteList = function(){
                    console.log(element);
                },
                scope.detailList = function(){
                    scope.lists.detailList();
                },
                scope.addList = function() {
                    console.log(this.listName);
                }
            }
        };
    }
]);
