define(
  [
  'jquery',
  'underscore',
  'backbone',
  'models/ImageModel',
  'models/ImageCollection',
  'views/ImageTile',
  'views/ImageListView',
  'views/ModalView',
  'dispatcher',
  'util'
  ],
  function($, _, Backbone, imageModel, ImageCollection, ImageTile, ImageListView, ModalView, dispatcher,Util) {


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
      // })6814033999958531
      var listView = new ImageListView

    })

    dispatcher.on("showmodal", function(){
      console.log("show modal event fired");
      var modal = new ModalView
    })

    Backbone.history.start();
  }

  return{
    init: init
  }
});
