define(['underscore', 'backbone', 'models/ImageModel', 'models/ImageCollection'], function(_, Backbone, ImageModel, ImageCollection) {

  var ImageView = Backbone.View.extend({
  	// tagName:  'div',
  	el: '.main-container',

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
		var dom = this.$el.html(this.template(this.model.toJSON()));
		dom.appendTo($("#main"));
	},

	clickHandler: function(){
		console.log("clicked");
	}

  });

  return ImageView;
});