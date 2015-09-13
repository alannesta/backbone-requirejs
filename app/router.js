define(
  [
  'jquery',
  'underscore',
  'backbone',
  './models/ImageModel',
  './models/ImageCollection',
  './views/ImageTile',
  './views/ImageListView',
  './views/ModalView',
  './EventDispatcher',
  './util'
  ],
  function($, _, Backbone, imageModel, ImageCollection, ImageTile, ImageListView, ModalView, dispatcher, Util) {

  var appView;
  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "main",
      "confirm": "confirm"
    },

    main: function() {
      appView = new ImageListView
    },

    confirm: function(){
      console.log("navigate to confirm page");
      // appView.$el.remove('.image-container');
      appView.$el.empty();
    }

  });

  var init = function(){
    var app_router = new Router;
    

    app_router.on("route:main", function(){
       
    });

    app_router.on("route:confirm", function(){

    });

    dispatcher.on("showmodal", function(){
      // console.log("show modal event dispatched");
      
      var modal = new ModalView
    });

    dispatcher.on("modalview:confirm", function(args){
      // console.log(args.data);
      // app_router.navigate(args.data,{trigger: true});
    });

    Backbone.history.start();
  };

  return{
    init: init
  }
});
