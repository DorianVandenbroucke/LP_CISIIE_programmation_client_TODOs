angular.module("todo").directive("tasks",[
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/tasks.html",
            // link: function(scope, element, attrs){
            //     scope.deleteList = function(){
            //         // TODO: Recup element clické
            //         console.log(element);
            //     }
            //     scope.detailList = function(){
            //         console.log(this.list.id);
            //     }
            // }
        };
    }
]);
