define(['underscore', 'backbone', 'models/ImageModel', 'models/ImageCollection', 'views/ImageTile'], function(_, Backbone, ImageModel, ImageCollection, ImageTile) {

  var ImageList = Backbone.View.extend({
  	// tagName:  'div',
  	el: '.image-list',

	// Cache the template function for a single item.

	// The DOM events specific to an item.
	events: {
		'click': 'clickHandler'
	},

	images: [],

	initialize: function(){
		console.log('image list init');
		this.images = new ImageCollection;
		this.listenTo(this.images, 'add', this.addOne);
		this.listenTo(this.images, 'all', this.render);
		
		var image1 = new ImageModel({src: "app/img/1.JPG"});
		var image2 = new ImageModel({src: "app/img/2.JPG"});
		var image3 = new ImageModel({src: "app/img/3.JPG"});
		var image4 = new ImageModel({src: "app/img/4.JPG"});
		var image5 = new ImageModel({src: "app/img/5.JPG"});
		var image6 = new ImageModel({src: "app/img/0.png"});
		var image7 = new ImageModel({src: "app/img/1.png"});

		var imgArr = [image1, image2, image3, image6, image5, image7, image4];

		this.images.add(imgArr);
		// this.images.add(imgArr.shuffle());
		console.log(this.images);

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
		var image1 = new ImageModel({src: "app/img/1.JPG"});
		var image2 = new ImageModel({src: "app/img/2.JPG"});
		var image3 = new ImageModel({src: "app/img/3.JPG"});
		var image4 = new ImageModel({src: "app/img/4.JPG"});
		var image5 = new ImageModel({src: "app/img/5.JPG"});
		var image6 = new ImageModel({src: "app/img/0.png"});
		var image7 = new ImageModel({src: "app/img/1.png"});
		var imgArr = [image1, image2, image3, image6, image5, image7, image4];

		this.images.add(imgArr.shuffle());
	}

  });

  return ImageList;
});