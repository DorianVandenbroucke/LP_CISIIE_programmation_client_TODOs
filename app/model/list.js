angular.module("todo").service("List",["$http",
    function($http){
        var List = function(data){
            this.label = data.label;
            this.id = data.id;
        }

        List.prototype.detailList = function(){
            List.currentList = this;
        }

        // List.prototype.addList = function(){
        //     console.log(this.list_name);
        List.prototype.deleteList = function(){
            List.deleteList = this;
        }

        return List;
    }
]);
