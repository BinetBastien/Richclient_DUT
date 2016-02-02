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
  this.nbServs = 0;
  this.services = service;
  this.change = function(service){
    if(service.active==true){
      service.active=false;
    }
    else {
      service.active=true;
    }
  }

  this.calcTotal = function(){
    var taille = this.services.length;
    var total=0;
    var i=0;
    var nb = 0;
    for(i=0;i<taille;i++){
      if(this.services[i].active==true){
        total+= this.services[i].price;
        nb++;
      }
    }
    this.nbServs = nb;
    return total;
  }


}]);
