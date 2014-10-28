define(
  [
  'jquery',
  'underscore',
  'backbone',
  'models/ImageModel',
  'views/imageList'
  ],
  function($, _, Backbone, imageModel, imageList) {
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
      // console.log("init app");
      var imageTile = new imageModel;
      var imageView = new imageList({
        model: imageTile
      })
    })

    Backbone.history.start();
  }

  return{
    init: init
  }
});
