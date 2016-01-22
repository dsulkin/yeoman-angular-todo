'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    //Initialize default todos
    
    //Remove the array for storage
    //$scope.todos = [];

    //local storage
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    //Create new todos
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    //Remove todo
    $scope.removeTodo = function($index) {
      var index = $scope.todos.indexOf($index);
      $scope.todos.splice(index, 1);
    };
  });
