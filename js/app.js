var app = angular.module('MyApp',['ngRoute','ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);
/*
app.config(function($modalProvider) {
  angular.extend($modalProvider.defaults, {
    html: true
  });
});

*/

app.config(['$locationProvider','$routeProvider','$modalProvider','$anchorScrollProvider', function($locationProvider, $routeProvider,$modalProvider,$location,$anchorScroll,$rootScope) {
  $routeProvider.

  
      /*
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
      }).*/ 
      
     
      when('/progress-content1', {
        templateUrl: 'partials/progress-content1.html',
        controller: MyAppCtrl
      }).
      when('/signinpage', {
        templateUrl: 'partials/signinpage.htm',
        controller: MyAppCtrl
      }).
      
       when('/comment', {
        templateUrl: 'partials/comment.htm',
        controller: MyAppCtrl
      }).
      
       when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: MyAppCtrl
      }).
      when('/signuppage', {
        templateUrl: 'partials/signuppage.htm',
        controller: MyAppCtrl
      }).
      
      when('/config-config-content', {
        templateUrl: 'partials/config-config-content.html',
        controller: MyAppCtrl
      }).
      when('/editor-content', {
        templateUrl: 'partials/editor-content.html',
        controller: MyAppCtrl
      }).
      //
      when('/help-help-content', {
        templateUrl: 'partials/help-help-content.html',
        controller: ScrollCtrl
      }).
      when('/index-index-content', {
        templateUrl: 'partials/index-index-content.html',
        controller: MyAppCtrl
      }).
      when('/introcontent', {
        templateUrl: 'partials/introcontent.html',
        controller: MyAppCtrl
      }).
      when('/menu', {
        templateUrl: 'partials/menu.html',
        controller: MyAppCtrl
      }).
      when('/menulogin', {
        templateUrl: 'partials/menulogin.html',
        controller: MyAppCtrl
      }).
      //
      when('/index-loggedin', {
        templateUrl: 'partials/index-loggedin.html',
        controller: MyAppCtrl
      }).
      when('/index-main', {
        templateUrl: 'partials/index-index-content1.html',
        controller: MyAppCtrl
      }).
      
      when('/policy123', {
        templateUrl: 'partials/policy123.html',
        controller: MyAppCtrl
      }).
      otherwise({
        redirectTo: '/index-main'
      });
      //$locationProvider.html5Mode(false).hashPrefix('!');
      // 
    $locationProvider.html5Mode(false);
    angular.extend($modalProvider.defaults, {
        html: true
      });
  
}]);

app.factory("DataService", function () {
  
});

/*
app.directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
})



app.directive('a', function() {
    return {
        restrict: 'e',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});
*/

