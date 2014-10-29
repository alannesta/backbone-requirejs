define(['underscore', 'backbone', 'jquery'], function(_, Backbone, $) {

  var ModalView = Backbone.View.extend({
  	tagName:  'div',
  	className: 'modal',
  	id: 'modal',
	// Cache the template function for a single item.
	template: _.template($('#modal-template').html()),

	// The DOM events specific to an item.
	events: {
		// 'click': 'clickHandler'
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		var modal = {
          title: "Are you sure?",
          body: "Please Select",
          footer: "<button class='btn btn-large'>Confirm</button>"
        }
        var dom = this.$el.html(this.template(modal));
		dom.appendTo($("body"));
		return this;
	},

	clickHandler: function(){
		console.log("image tile clicked");
	}

  });

  return ModalView;
});