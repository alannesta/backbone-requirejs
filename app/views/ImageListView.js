define(['underscore', 'backbone', 'models/ImageModel', 'models/ImageCollection', 'views/ImageTile', 'dispatcher'], function(_, Backbone, ImageModel, ImageCollection, ImageTile, dispatcher) {

  var ImageList = Backbone.View.extend({
  	// tagName:  'div',
  	el: '.image-list',

	// The DOM events specific to an item.
	events: {
		'click': 'clickHandler'
	},

	initialize: function(){
		
		this.images = new ImageCollection;
		this.clicked = false;

		this.listenTo(this.images, 'add', this.addOne);
		this.listenTo(this.images, 'reset', this.resetHandler);
		
		var image1 = new ImageModel({src: "app/img/1.JPG"});
		var image2 = new ImageModel({src: "app/img/2.JPG"});
		var image3 = new ImageModel({src: "app/img/3.JPG"});
		var image4 = new ImageModel({src: "app/img/4.JPG"});
		var image5 = new ImageModel({src: "app/img/5.JPG"});
		var image6 = new ImageModel({src: "app/img/6.JPG"});
		var image7 = new ImageModel({src: "app/img/0.png"});
		var imgArr = [image1, image2, image3, image6, image5, image4, image7];

		this.images.add(imgArr);
		this.images.reset();	//fire the collection reset event;

	},


	render: function(){
		if (this.images.length>0){
			this.waterFall('.image-list', '.image-list li');
		}
	},

	resetHandler: function(){
		this.waterFall('.image-list', '.image-list li');
	},

	addOne: function(image){
		// console.log("add one");
		var imageTile = new ImageTile({
			model: image
		});

		this.$el.append(imageTile.render().el);
	},

	clickHandler: function(){
		var that = this
		if (this.clicked){
			return
		}

		dispatcher.trigger('showmodal');
		this.clicked = true;
		dispatcher.on("modalview:confirm", function(args){
      		var image1 = new ImageModel({src: "app/img/1.JPG"});
			var image2 = new ImageModel({src: "app/img/2.JPG"});
			var image3 = new ImageModel({src: "app/img/3.JPG"});
			var image4 = new ImageModel({src: "app/img/4.JPG"});
			var image5 = new ImageModel({src: "app/img/5.JPG"});
			var image6 = new ImageModel({src: "app/img/6.JPG"});
			var image7 = new ImageModel({src: "app/img/0.png"});
			// var image7 = new ImageModel({src: "app/img/1.png"});
			var imgArr = [image1, image2, image3, image6, image5, image4, image7];

			that.images.add(imgArr.shuffle());
			that.images.reset();
			that.clicked = false;
    	})

    	dispatcher.on("modalview:cancel", function(args){
    		that.clicked = false;
    	})
		
	},

	waterFall: function(parent, child){
		//TODO: check whether parent is a dom object

		var that = this;
		var heightCounter = {}	
		var windowWidth = $(parent).width(); 
		var eleWidth = $(child)[0].offsetWidth;
		// var eleWidth = document.getElementsByTagName('li')[0].offsetWidth;
		// console.log(eleWidth);
		var tilesperLine = Math.floor(windowWidth/eleWidth);
		// console.log(tilesperLine);
		that.imageDoms = [];

		$(child).each(function(index){
		
			var key = index%tilesperLine;
			if (heightCounter[key] != undefined){
				// console.log(that.imageDoms[index-tilesperLine].offsetHeight);
				heightCounter[key] += that.imageDoms[index-tilesperLine].offsetHeight;
			}else{
				heightCounter[key] = 0;
			}
			
			$(this).css({
				"position": "absolute",
				"left": key*eleWidth,
				"top": heightCounter[key]
			});

			that.imageDoms.push(this);
		})
		// console.log(that.imageDoms);
	}

  });

  return ImageList;
});