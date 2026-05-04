var app = angular.module("todoApp", []);

app.controller("todoCtrl", function($scope) {

    $scope.tasks = [];

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({ name: $scope.newTask, editing: false });
            $scope.newTask = "";
        }
    };

    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.updateTask = function(task) {
        task.editing = false;
    };

});