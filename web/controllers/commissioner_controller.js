(function () {
   'use strict';

   angular
       .module('restApp')
       .controller('CommissionerCtrl', CommissionerCtrl);

   CommissionerCtrl.$inject = ['$scope', '$http', '$routeParams'];
   function CommissionerCtrl($scope, $http, $routeParams) {
       var commissCtrl = this;
       commissCtrl.communId = $routeParams.communityId;
       commissCtrl.name = 'error';

       (function(){
           var get = $http.get('rest.php/communities')
               .then(successHandler)
               .catch(errorHandler);
           function successHandler(result) {
               console.log(result.data);
               for (var i = 0; i < result.data.length; i++) {
                 if (result.data[i].commissioner_id == commissCtrl.communId){
                  commissCtrl.name = result.data[i].name;
                  commissCtrl.prefix = result.data[i].prefix;
                  break;
                 }
               }
               //commissCtrl.name = 'error';
           }
           function errorHandler(result){
               alert(result.data[0].message);
               //console.log(result.data[0].message);
           }

       }());
            

   }
})();