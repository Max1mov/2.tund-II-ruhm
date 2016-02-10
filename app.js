(function(){
	"use strict";
		
	var Moosipurk = function(){
				
		if(Moosipurk.instance){
			return Moosipurk.instance;
		}
		Moosipurk.instance = this; // this viitam 
			
		console.log(this);
		//consloe.log('moosipurk')
		//panen rakk tööma
		this.init();
		
		
		
		//koik muutujad, mis on üldised on muutujad
		this.click_count = 0;
		
		
	};
		
		//koik moosiporgi funct-d tulevad siia sees
	Moosipurk.prototype = {
		init: function(){
			console.log('rakendus käivetus');
			//Siia tuleb esialgne Loogika
			//hakka kuulama hiirklõpse
			this.bindMouseEvents();
		},
		
		bindMouseEvents: function(){
			document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
		},
		addNewClick: function(event){
			//console.log(event);
			this.click_count++;
			console.log(this.click_count);
			
		}
		
	};
		
		
	window.onload = function(){
		var app = new Moosipurk();
	
		
		
	};
		
})();