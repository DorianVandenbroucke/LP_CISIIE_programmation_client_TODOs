angular.module("todo").service("List",["$http",
    function($http){
        var List = function(data){
            this.label = data.label;
            this.id = data.id;
        }

        List.prototype.detailList = function(){
            List.currentList = this;
        }

        List.prototype.deleteList = function(){
            List.deleteList = this;
        }

        return List;
    }
]);
