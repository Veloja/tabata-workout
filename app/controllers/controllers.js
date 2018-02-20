app.controller('TabataController', function ($scope, $timeout) {
    
    $scope.timer = 7;
    $scope.disablePlus = false;
    $scope.disableMinus = false;
    

    $scope.plus = function(){
        $scope.timer++;
        $scope.disableMinus = false;
        if($scope.timer === 20){
            $scope.disablePlus = true;
        }
    }
    $scope.minus = function(){
        $scope.timer--;
        $scope.disablePlus = false;
        if($scope.timer === 5){
            $scope.disableMinus = true;
        }
    }

    // for the timer
	$scope.timeLimit = 3;
    var timer = null;
    $scope.startTimer = function() {
        $scope.timeLimit--;
        
        timer = $timeout($scope.startTimer, 1000);
        if ($scope.timeLimit === 0) {
            $timeout.cancel(timer);
            // give me first exercise!


            
        }
    };

});