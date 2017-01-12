angular.module("todo").directive("lists",[
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/lists.html"
        };
    }
]);
