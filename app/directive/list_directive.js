angular.module("todo").directive("lists", [
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/lists.html",
            link: function(scope, element, attrs){
                scope.deleteList = function(list){
                    list.deleteList();
                },
                scope.detailList = function(list){
                    list.detailList();
                },
                scope.addList = function(l){
                     l[0].addList(this.list_name);
                },
                scope.modifyList = function(list){
                    list.label = this.new_list_name;
                    list.modifyList();
                }
            }
        };
    }
]);
