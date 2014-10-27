define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },

    main: function() {
      console.log("Welcome to your route.");
    }
  });

  module.exports = Router;
});
