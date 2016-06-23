(function(){
    'use strict';

    angular
        .module('restApp')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['$location', '$http', 'constant', '$rootScope', '$scope', '$routeParams'];
    function UserEditController($location, $http, constant, $rootScope, $scope, $routeParams) {
        var userEdit = this;
        userEdit.user = {};
        userEdit.user.userId = $routeParams.userId;
        userEdit.user.username = 'error';
        userEdit.user.role_id;
        userEdit.currentRole = (angular.fromJson(sessionStorage.user)).role;     

        (function(){
            $http.get('rest.php/' + constant.usersQuery + '?userId=' + userEdit.user.userId)
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result) {
                userEdit.user.username = result.data.items[0].username;
                userEdit.user.email = result.data.items[0].email;
                userEdit.user.last_name = result.data.items[0].last_name;
                userEdit.user.first_name = result.data.items[0].first_name;
                userEdit.user.middle_name = result.data.items[0].middle_name;
                userEdit.user.passport_series = result.data.items[0].passport_series;
                userEdit.user.passport_number = result.data.items[0].passport_number;
                userEdit.user.address = result.data.items[0].address;
                userEdit.user.role_name = result.data.items[0].role_name;
                userEdit.user.role_id = result.data.items[0].role_id;
                userEdit.user.community_name = result.data.items[0].community_name;
                userEdit.user.community_id = result.data.items[0].community_id;
                userEdit.user.prefix = result.data.items[0].prefix;
            }
            function errorHandler(result){
                // handler
            }
        }());

        if ($rootScope.currentUser.role === 'commissioner') {
            userEdit.user.community_id = $rootScope.currentUser.communityId;
        } else {
            userEdit.community = {community_id: 0};
            $http.get('rest.php/communities')
                .then(successHandler);
            function successHandler(data) {
                userEdit.itemsList = data.data.items;
            }
        }

        $scope.newRole = function(value) {
            userEdit.user.role_id = value;
        }

        userEdit.editUser = function() {
            if ($rootScope.currentUser.role === 'admin') {
                userEdit.user.community_id = userEdit.community.community_id;
            } else {
                userEdit.user.community_id = $rootScope.currentUser.communityId;
            }
            if(userEdit.user.role_id == 3) {
                userEdit.user.community_id = null;
            }
            $http.post('rest.php/users/edituserdata', JSON.stringify(userEdit.user))
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result) {
                $location.path('/site/users');
            }
            function errorHandler(result){
                alert(result.data.message);
            }
        }
    }
})();