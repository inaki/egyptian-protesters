angular.module('egyptApp', [])
  .controller('mainCtrl', ['$scope','$http','SheetItems', function($scope,$http,SheetItems) {
    
    $scope.byMonth = {"April": [],"May": [],"June": [],"July": [],"August": [],"September": [],"October": [],"November": []};

    $scope.months = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

    $attacked = 0; 

    $scope.getCount = function(){
      return 1;
    }

    $http.get("../data")
      .success(function(response) {
        var protests = response;
        
        protests.map(function(item, index){
            switch(item.Month) {
                case 4:
                    $scope.byMonth.April.push(item);
                    break;
                case 5:
                    $scope.byMonth.May.push(item);
                    break;
                case 6:
                    $scope.byMonth.June.push(item);
                    break;
                case 7:
                    $scope.byMonth.July.push(item);
                    break;
                case 8:
                    $scope.byMonth.August.push(item);
                    break;
                case 9:
                    $scope.byMonth.September.push(item);
                    break;
                case 10:
                    $scope.byMonth.October.push(item);
                    break;
                case 11:
                    $scope.byMonth.November.push(item);
                    break;
                default:
                    console.log('no hay mas casos')
            } 
            console.log(item.Month);
          
        });
      });
      


    SheetItems.query(function(data) {
        //data processing can happen here
        // $scope.googleData = data;   
        // console.log(data);
      });

  }])
  .factory('SheetItems', ['$rootScope',
    function($rootScope){
      return {
        query: function(callback) {
          Tabletop.init({
            key: '1cu9KQ3-mHSVDlZeusq6i1QyaMIAWe12c2HtT1yuu004',
            simpleSheet: true,
            parseNumbers: true,
            callback: function(data, tabletop) {
              if(callback && typeof(callback) === "function") {
                $rootScope.$apply(function() {
                  callback(data);
                });
              }
            }
          });
        }
      };
    }])
  .filter('unique', function () {

    return function (items, filterOn) {

      if (filterOn === false) {
        return items;
      }

      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var hashCheck = {}, newItems = [];

        var extractValueToCompare = function (item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };

        angular.forEach(items, function (item) {
          var valueToCheck, isDuplicate = false;

          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }

        });
        items = newItems;
      }
      return items;
    };
  });