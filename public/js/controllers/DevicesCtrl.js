angular.module('DevicesCtrl', []).controller('DevicesController', function($scope) {
    $scope.devices: [{
        device_id: "ZX73RFT8922E",
        device_name: "Front Hall",
        secret_key: "secret_key", //Would be given to device by server when registered
        armed: true
    },
    {
        device_id: "TY74I89WXC2Q",
        device_name: "Bedroom",
        secret_key: "secret_key",
        armed: false
    },
    {
        device_id: "RW3T245I98UH", //Comes with device (randomly generated)
        device_name: "Office", //Set by user
        secret_key: "secret_key", //Would be given to device by server when registered
        armed: true
    }],
});
