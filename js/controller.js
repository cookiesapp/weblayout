function MyAppCtrl($scope)  {
    
        $scope.items = [
            {Name: "AAAAAAAAA", check: "null", Quantity: null },
			{Name: "Soap", check: "null", Quantity: "10"},
            {Name: "Shaving cream", check: "null", Quantity: "15" },
			{Name: "Shampoo", check: "null", Quantity: "5"}
		];
	
    
       $scope.items1 = [
			{Name: "XA Bong", Price: "50", Quantity: "10"},
			{Name: "xa bong kem", Price: "50", Quantity: "15" },
			{Name: "Dau goi", Price: "100", Quantity: "5"}
		];
        
        		
		$scope.mySortFunction = function(item) {
			if(isNaN(item[$scope.sortExpression]))
				return item[$scope.sortExpression];
			return parseInt(item[$scope.sortExpression]);
		}
        
     
}

function ScrollCtrl ($scope,$location,$anchorScroll,$rootScope,$routeParams){
  $scope.scrolltoHref = function (id){
    
    // set the location.hash to the id of
            // the element you wish to scroll to.
            console.log("Scroll " + id);
            $location.hash(id);
            // call $anchorScroll()
            $anchorScroll();
    
    /*
          $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            console.log("Scroll " + id);
            $location.hash($routeParams.scrollTo);
            //asides-usage
            //$location.hash('asides-usage');
            $anchorScroll();  
          });
      */  
      };
        
}

