define(
  [
  'jquery',
  'underscore',
  'backbone',
  'models/ImageModel',
  ],
  function($, _, Backbone) {
  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },

    main: function() {
      console.log("Welcome to your route.");
    }

  });

  var init = function(){
    var app_router = new Router;
    Backbone.history.start();
  }

  return{
    init: init
  }
});
