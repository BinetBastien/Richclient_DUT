angular.module("Services").controller("controllerServices", [function(){
  var service = [
    {
      name : 'Web Developpement',
      price : 300,
      active : true
    },{
      name : 'Design',
      price : 400,
      active:false
    },{
      name : 'Integration',
      price : 250,
      active : false
    },{
      name : 'Formation',
      price : 220,
      active : false
    }
  ];

  this.services = service;

  this.change = function(service){
    if(service.active==true){
      service.active=false;
    }
    else {
      service.active=true;
    }
  }

}]);
