(function(){

  var app = angular.module('store-products', []);

  app.directive('galleryDirective', function(){
      return {
        restrict: 'E',
        templateUrl: 'gallery-directive.html',
        controller: function(){
          this.current = 0;
          this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
          };
        },
        controllerAs: "gallery"
      };
  });

  app.directive('productTittle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tittle.html',
    };
  });

})();