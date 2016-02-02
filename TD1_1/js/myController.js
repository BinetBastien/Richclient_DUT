angular.module("myApp")
.controller("myController",[
  function(){
    this.messageNote="";
    this.info="";
    this.save="";
    this.count=function(){
      return 100 - this.messageNote.length;
    };

    this.saveFunc=function(){
      console.log('test');
      this.save=this.messageNote;
      this.info="Message sauvegardé";
    };

    this.clear=function(){
      this.messageNote="";
      this.info="";
    };

  }
]);
