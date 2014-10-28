define(['underscore', 'backbone', 'models/ImageModel', 'models/ImageCollection', 'views/ImageTile'], function(_, Backbone, ImageModel, ImageCollection, ImageTile) {

  var ImageList = Backbone.View.extend({
  	// tagName:  'div',
  	el: '.image-list',

	// Cache the template function for a single item.

	// The DOM events specific to an item.
	events: {
		'click': 'clickHandler'
	},

	initialize: function(){
		console.log('image list init');
		var images = new ImageCollection;
		this.listenTo(images, 'add', this.addOne);
		this.listenTo(images, 'all', this.render);
		
		var image1 = new ImageModel({src: "app/img/1.JPG"});
		var image2 = new ImageModel({src: "app/img/2.JPG"});
		var image3 = new ImageModel({src: "app/img/3.JPG"});
		var image4 = new ImageModel({src: "app/img/4.JPG"});
		var image5 = new ImageModel({src: "app/img/5.JPG"});

		// images.add([image1, image2, image3, image4, image5]);
		images.add(image1);
		images.add(image2);
		images.add(image3);
		images.add(image4);
		images.add(image5);

		// this.render();
	},

	render: function(){
		// this.$el.html(this.template(this.model.toJSON()));
		// dom.appendTo($("#main"));
		console.log('image list render');
		this.$el.show();
	},

	addOne: function(image){
		var imageTile = new ImageTile({
			model: image
		});

		this.$el.append(imageTile.render().el);
		// this.$el.append($('<div>Test</div>'));

	},


	clickHandler: function(){
		console.log("image list clicked");
	}

  });

  return ImageList;
});