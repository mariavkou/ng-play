'use strict';

describe('Controller: CupsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngPlayApp'));

  var CupsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CupsCtrl = $controller('CupsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CupsCtrl.awesomeThings.length).toBe(3);
  });
});
