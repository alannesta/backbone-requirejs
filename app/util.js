// Utility functions

(function(){
	Array.prototype.shuffle = function(){
		for (var i = 0; i<this.length/2; i++){
			var j = Math.floor(Math.random()*this.length);
			var temp = this[i];
			this[i] = this[j];
			this[j] = temp;
		}
		return this;
	}
})();

