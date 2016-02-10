(function(){
	"use strict";
		
	var Moosipurk = function(){
				
		if(Moosipurk.instance){
			return Moosipurk.instance;
		}
		Moosipurk.instance = this; // this viitam 
			
		console.log(this);
		//consloe.log('moosipurk')
		//panen rakk t��ma
		this.init();
	};
		
		//koik moosiporgi funct-d tulevad siia sees
	Moosipurk.prototype = {
		init: function(){
			console.log('rakendus k�ivetus');
			//Siia tuleb esialgne Loogika
			//hakka kuulama hiirkl�pse
			this.bindMouseEvents();
		},
		
		bindMouseEvents: function(){
			document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
		},
		addNewClick: function(event){
			console.log(event);
			
		}
		
	};
		
		
	window.onload = function(){
		var app = new Moosipurk();
	
		
		
	};
		
})();