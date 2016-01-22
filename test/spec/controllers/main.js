'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  //beforeEach(module('mytodoApp'));

  
  var MainCtrl,
    scope;

  beforeEach(function(){
    //setup
    module('LocalStorageModule');
    module('mytodoApp');

/*
    inject(function (_localStorage_) {
        localStorageWidgetService = _localStorage_;
    });
*/
    // Mock localStorage
    //spyOn(localStorageService, 'getItem').and.CallFake(function(key) {
      //return store[key];
    //});

/*
    spyOn(window.localStorage, 'getItem').and.CallFake(function (key) {
      return store[key];
    });
    
    spyOn(window.localStorage, 'setItem').and.CallFake(function (key, value) {
      return store[key] = value + '';
    });
    spyOn(localStorage, 'clear').andCallFake(function () {
        store = {};
    });
*/
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items from the start', function(){
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function(){
    scope.todo = 'Test1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should remove items from the list', function(){ 
    scope.todo = 'Test1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
