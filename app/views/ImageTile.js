define(['underscore', 'backbone', 'models/ImageModel', 'models/ImageCollection', 'dispatcher'], function(_, Backbone, ImageModel, ImageCollection, dispatcher) {

  var ImageTile = Backbone.View.extend({
  	tagName:  'li',
  	className: 'image-container',
	// Cache the template function for a single item.
	template: _.template($('#image-template').html()),

	// The DOM events specific to an item.
	events: {
		'click': 'clickHandler'
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		// dom.appendTo($("#main"));
		return this;
	},

	clickHandler: function(){
		dispatcher.trigger('showmodal');
	}

  });

  return ImageTile;
});