define(['underscore', 'backbone', 'jquery', 'dispatcher'], function(_, Backbone, $, dispatcher) {

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

	initialize: function(){
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
		this.$el.remove();
	},

	confirmHandler: function(){
		// console.log('confirm button clicked');
		dispatcher.trigger("modalview:confirm", {data: "confirm"})
		this.destroy();
	},

	cancelHandler: function(){
		console.log('cancel button clicked');
		this.destroy();
	}

  });

  return ModalView;
});