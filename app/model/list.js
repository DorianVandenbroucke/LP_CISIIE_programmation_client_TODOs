angular.module("todo").service(
  "List",
  [
    "$http",
    function($http){
      var List = function(data){
        this.label = data.label;
      }
      return List;
    }
  ]
);
