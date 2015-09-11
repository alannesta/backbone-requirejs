define(['underscore', 'backbone', 'jquery', '../EventDispatcher'], function(_, Backbone, $, dispatcher) {

  var ModalView = Backbone.View.extend({
  	tagName:  'div',
  	className: 'modal',
  	id: 'modal',
	// Cache the template function for a single item.
	template: _.template($('#modal-template').html()),

	// The DOM events specific to an item.
	events: {
		'click button.confirm': 'confirmHandler',
		'click button.cancel': 'cancelHandler'
	},

	// new View will call the initialize function, other stuff remains unchanged
	initialize: function(){
		this.topics = {}	//only define instance variables in the initialize function?

		// this.onFire("confirm", function(){
		// 	console.log("confirm fired");
		// }).onFire("cancel", function(){
		// 	console.log("cancel fired");
		// }).onFire("confirm", function(){
		// 	console.log("2nd confirm");
		// })
		this.render();
	},

	render: function(){
		var modal = {
          title: "Are you sure?",
          body: "Please Select",
          footer: "<button class='btn btn-large confirm'>Confirm</button>"+
          "<button class='btn btn-large cancel'>Cancel</button>"
        }
        var dom = this.$el.html(this.template(modal));
		dom.appendTo($("body"));
		dom.show();
		return this;
	},

	destroy: function(){
		this.remove();
	},

	onFire: function(topic, callback){
		this.topics[topic] = this.topics[topic] || [];
		this.topics[topic].push(callback);
		return this;
	},

	fire: function(topic, args){
		// console.log(this.topics);
		if (this.topics[topic]&&this.topics[topic].length>0){
			for (var i = 0; i<this.topics[topic].length; i++){
				this.topics[topic][i].call(this, args);
			}
		}
		
	},

	confirmHandler: function(){
		dispatcher.trigger("modalview:confirm", {data: "confirm"})
		this.fire("confirm");
		this.destroy();
	},

	cancelHandler: function(){
		dispatcher.trigger("modalview:cancel", {data: "confirm"})
		this.fire("cancel");
		this.destroy();
	}

  });

  return ModalView;
});