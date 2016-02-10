(function(){
	"use strict";
		
	var Moosipurk = function(){
				
		if(Moosipurk.instance){
			return Moosipurk.instance;
		}
		Moosipurk.instance = this; // this viitam 
			
		console.log('moosipugri sees');
			
	};
		
	window.onload = function(){
		var app = new Moosipurk();
	
		
		
	};
		
})();