
var app = angular.module("app", []);
 // Task1 Sorting Array Item by name or values
 // Arrange Array According to their Values||Order by Name 
angular.module('myApp', []).directive('numbersOnly', function()
{
    var testData = {
        a:{name:"Anwar", ID: 2},
        b:{name:"Bashar", ID: 1},
        c:{name:"Rahman", ID: 3}
    };
    $scope.testData = _.map(testData, function(vValue, vKey) {
        return { key:vKey, value:vValue };
    }) ;
    $scope.sortMe = function() {
        return function(object) {
            return object.value.order;
        }
    }
}]);


  //Code For Restrict The Input Types of a input form 
  // implementing angularjs_numbersOnly_directives to take only numbered data
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


    //ui-route to have multiple ​ ​ui-views in the same page
    //implementing Route controller
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});