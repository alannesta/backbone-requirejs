define(
  [
  'jquery',
  'underscore',
  'backbone',
  'models/ImageModel',
  'models/ImageCollection',
  'views/ImageTile',
  'views/ImageListView'
  ],
  function($, _, Backbone, imageModel, ImageCollection, ImageTile, ImageListView) {
  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },

    main: function() {
      console.log("main route init");
    }

  });

  var init = function(){
    var app_router = new Router;

    app_router.on("route:main", function(){
      console.log("init app");
      // var imageTile = new imageModel;
      // var imageView = new imageList({
      //   model: imageTile
      // })
      var listView = new ImageListView

    })

    Backbone.history.start();
  }

  return{
    init: init
  }
});
