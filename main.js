var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
    $scope.sid = "20MCA085";
    $scope.sname = "Meet Patel";

/*========================================================================*/
    /*========Question 1========*/
    $scope.userList = [];
    /*========End of Question 1========*/

/*========================================================================*/
    /*========Question 3========*/
    $scope.id = 0;    
    $scope.addToList = function () {
        $scope.flagcheck_fun();
        if ($scope.flagcheck) {
            $scope.totMarks = $scope.maths + $scope.science + $scope.english;
            $scope.userList.push({ 
                    id: ++$scope.id,
                    fname: $scope.fname,
                    lname: $scope.lname,
                    maths: $scope.maths,
                    science: $scope.science, 
                    english: $scope.english, 
                    total: $scope.totMarks, 
                    grace: ($scope.totMarks < 150) ? 150 - $scope.totMarks : "No Grace Required" 
                });
            $scope.fname = $scope.lname = $scope.maths = $scope.science = $scope.english = "";
            $scope.ToogleView();
        } else {
            alert("Inappropriate Data! Please check the data again.");
        }
    }

    $scope.flagcheck_fun = function () {
        $scope.flagcheck = true;
        if ($scope.fname == null || $scope.lname == null || $scope.maths == null || $scope.maths >= 101 || 
            $scope.science == null || $scope.science >= 101 || $scope.english == null || $scope.english >= 101)
            $scope.flagcheck = false;
    };
    /*========End of Question 3========*/

/*========================================================================*/
    /*========Question 4========*/
    $scope.DeleteRow = function (aa) {
        $scope.userList.splice($scope.userList.indexOf(aa), 1);
    }
    /*========End of Question 4========*/

/*========================================================================*/
    /*========Question 5========*/
    $scope.orderVar = "$id";
    $scope.tog = 1;
    $scope.OrderTable = function (base) {
        if ($scope.tog == 1) {
            $scope.orderVar = base;
            $scope.tog = -1;
        } else {
            $scope.orderVar = '-' + base;
            $scope.tog = 1;
        }
    }
    /*========End of Question 5========*/

/*========================================================================*/
    /*========Question 6========*/
    $scope.ToogleView = function () {
        if (document.getElementById('divDisp').style.display === "none") {
            document.getElementById('divForm').style.display = "None";
            document.getElementById('divDisp').style.display = "block";
            document.getElementById('btnSwitch').value = "Insert";
        } else {
            document.getElementById('divForm').style.display = "block";
            document.getElementById('divDisp').style.display = "none";
            document.getElementById('btnSwitch').value = "Display";
        }
    }
    /*========End of Question 6========*/
});