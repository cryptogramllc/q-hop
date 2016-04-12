angular.module('starter.controllers', ['ionic'])

.controller('BuyCtrl', function($scope, $rootScope) {
     // $rootScope.search = null;
     $scope.searchQuery = function(){
          $rootScope.queryString = angular.element(document.querySelector( '#queryString' )).val();
     }
})

.controller('SellCtrl', function($scope, $rootScope) {
     // $rootScope.search = null;
     $scope.searchQuery = function(){
          $rootScope.queryString = angular.element(document.querySelector( '#queryString' )).val();
     }
})

.controller('OffersCtrl', function($scope, $stateParams, Offers, $rootScope) {
    $scope.offer = Offers.all();
     $scope.selectItem = function(id, price, time, name){

           $rootScope.selectedItem['id'] = id;
           $rootScope.selectedItem['price'] = price; 
           $rootScope.selectedItem['time'] = time;
           $rootScope.selectedItem['user_name'] = name;
           console.log($rootScope.selectedItem);

     };
})

.controller('PaymentCtrl', function($scope, $stateParams, Offers, $rootScope) {
    
     console.log($rootScope.offerID);

     $scope.purchase = function(){
       $window.location.href="#/tab/account";
       
     };
})



.controller('LoginCtrl', function($scope, $stateParams, Offers, $ionicModal, $window, $ionicHistory) {
     $ionicModal.fromTemplateUrl('templates/modal-register.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.data = [];
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });


      $scope.processReg = function(){
        $window.localStorage.setItem("f_name", angular.element(document.querySelector( '#f_name' )).val());
        $window.localStorage.setItem("l_name", angular.element(document.querySelector( '#l_name' )).val());
        $window.localStorage.setItem("email", angular.element(document.querySelector( '#email' )).val());
        $window.localStorage.setItem("password", angular.element(document.querySelector( '#password' )).val());
        $window.localStorage.setItem("confirm", angular.element(document.querySelector( '#confirm' )).val());
        $scope.modal.hide();
        $ionicHistory.goBack(-1);
    } 

})


.controller('OffersDetailCtrl', function($scope, $stateParams, Offers,  $rootScope, $ionicActionSheet, $timeout, $window) {
  $scope.offer = Offers.get($stateParams.offerId);
   // Triggered on a button click, or some other target

   $scope.buyItem = function(offerId) {
      var userEmail = $window.localStorage.getItem('email');
      if(userEmail === null){$window.location.href="#/tab/login"}
      else{
         // Show the action sheet
         var hideSheet = $ionicActionSheet.show({
           buttons: [
             { text: '<b>Buy</b> This' },
           ],
           titleText: 'But this queue position?',
           cancelText: '<font color="red">Cancel</fontn>',
           cancel: function() {
                 hideSheet();
           },
           buttonClicked: function(index) {
               $rootScope.offerID = offerId;
               $window.location.href="#/tab/payment";
           }

         });
      }
    
   };
    
})

.controller('BookingCtrl', function($scope, $stateParams, Bookings, $rootScope) {
    $scope.booking = Bookings.all();
     $scope.selectItem = function(id, price, time, name){

           // $rootScope.selectedItem['id'] = id;
           // $rootScope.selectedItem['price'] = price; 
           // $rootScope.selectedItem['time'] = time;
           // $rootScope.selectedItem['user_name'] = name;
           // console.log($rootScope.selectedItem);

     };
})


.controller('SearchCtrl', function($scope, $http, $rootScope) {
  $scope.data = [];
    $http.post("http://54.69.118.223/yelp.php", { searchQuery: $rootScope.queryString, location: "London, UK" },
      { withCredentials: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded;'} })
        .success(function(data, status, headers, config) {
          angular.forEach(data, function(value, key){
             var thisObj = JSON.parse(value);
             thisObj['tables'] = Math.floor(Math.random() * 6) + 1;    
             this.push(thisObj);
             console.log(thisObj);
          }, $scope.data);

        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });

      $scope.selectItem =  function(name, phone, img){
           
           $rootScope.selectedItem = {name: name, phone: phone, img: img};
           console.log($rootScope.selectedItem);
              
      };      

})




.controller('AccountCtrl', function($scope, $ionicModal, $window, $location) {
     $ionicModal.fromTemplateUrl('templates/modal-register.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.data = [];
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
});


