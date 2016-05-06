var esgsDirectory = angular.module( 'esgsDirectory', [ ] );

esgsDirectory.controller( 'ESGSController', [ '$scope', '$http', function( $scope, $http ) {
    $http.get( '_js/directory.json' ).success(function( data ) {
        $scope.people = data;
        
        $scope.filters = { };
    });
}]);