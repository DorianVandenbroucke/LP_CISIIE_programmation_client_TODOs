angular.module("todo").service("List",["$http",
    function($http){
        var List = function(data){
            this.label = data.label;
            this.id = data.id;
        }

        List.prototype.detailList = function(){
            List.currentList = this;
        }
        List.addList = function(list_to_add){
             List.add = list_to_add;
        }
        List.prototype.deleteList = function(){
            List.deleteList = this;
        }
        List.prototype.modifyList = function(){
            List.modifyList = this;
        }

        return List;
    }
]);
