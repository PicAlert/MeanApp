angular.module('AlertsCtrl', []).controller('AlertsController', ['$scope', '$http',
    function($scope, $http){ // creates a controller

    /*
    var refresh = function() {

        $http.get('/contactlist').success(function (response) {
            console.log("I got the data I requested");
            $scope.contactlist = response;
        });
    };

    refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            $scope.contactlist.push(response);
        });

    };

    $scope.remove = function(id){
        console.log("removing " + id);
        $http.delete('/contactlist/' + id).success(function(response) {
            console.log(response);
            refresh();
        });
    };

    $scope.edit = function(id){
        console.log("editing");
        $http.get('/contactlist/' + id).success(function(response) {
            $scope.contact = response;
        });
    };

    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
            refresh();
        });
    };

    $scope.deselect = function(){
        console.log("deselecting");
        $scope.contact = "";
    };
    */
    $scope.alerts = [
        {
            time: "05/27/16 12:52pm",
            location: "Front Door",
            picture: "https://tribkcpq.files.wordpress.com/2014/09/thief.jpg?w=770",
        },
        {
            time: "05/27/16 12:55pm",
            location: "Front Door",
            picture: "http://www.homesecurity.bz/wp-content/uploads/2014/03/Burglary-crime-burglar-opening-a-door-183991278.jpg",
        },
        {
            time: "05/27/16 1:15pm",
            location: "Front Porch",
            picture: "https://cammy-marketing.s3.amazonaws.com/2015/02/1424795686/burglar-in-house.jpg",
        },
        {
            time: "05/27/16 1:15pm",
            location: "Front Porch",
            picture: "http://raspi.tv/wp-content/uploads/2013/05/Vid-vs-still-reg-plate-still.jpg",
        },
        {
            time: "05/27/16 1:15pm",
            location: "Front Porch",
            picture: "http://s.hswstatic.com/gif/break-into-house-orig.jpg",
        }
    ];



    // $sign is the glue between app-controller and view
}]);
