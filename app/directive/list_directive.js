angular.module("todo").directive("lists",[
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/lists.html",
            link: function(scope, element, attrs){
                scope.deleteList = function(){
                    // TODO: Recup element clické
                    console.log(element);
                }
            }
        };
    }
]);
