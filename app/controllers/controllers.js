app.controller('TabataController', function ($scope, $timeout, $location) {

    $scope.timer = 7;
    $scope.disablePlus = false;
    $scope.disableMinus = false;


    $scope.plus = function () {
        $scope.timer++;
        $scope.disableMinus = false;
        if ($scope.timer === 20) {
            $scope.disablePlus = true;
        }
    }
    $scope.minus = function () {
        $scope.timer--;
        $scope.disablePlus = false;
        if ($scope.timer === 5) {
            $scope.disableMinus = true;
        }
    }

    // for the timer
    $scope.timeLimit = 3;
    var timer = null;
    $scope.startTimer = function () {
        $scope.timeLimit--;

        timer = $timeout($scope.startTimer, 1000);
        if ($scope.timeLimit === 0) {
            $timeout.cancel(timer);
            // route me to first exercise
            $location.path('/jumpingjacks');
        }
    };

});

app.controller('JumpingjacksController', function ($scope, $timeout, $location) {
    $scope.timeLimit = 90;
    var timer = null;
    (function startTimer(){
        $scope.timeLimit--;

        timer = $timeout(startTimer, 1000);
        if($scope.timeLimit === 0){
            $timeout.cancel(timer);
            $location.path('/rest');
        }
    })();
});

app.controller('RestController', function ($scope, $timeout, $location){
    $scope.timeLimit = 15;
    var timer = null;
    (function startTimer(){
        $scope.timeLimit--;

        timer = $timeout(startTimer, 1000);
        if($scope.timeLimit === 0){
            $timeout.cancel(timer);
            $location.path('/squats');
        }
    })();
});





