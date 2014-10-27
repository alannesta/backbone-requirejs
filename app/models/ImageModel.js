define(['underscore', 'backbone'], function(_, Backbone) {
  var ImageModel = Backbone.Model.extend({

    // Default attributes for the todo.
    defaults: {
      src: "loading.png"
    },

    // Ensure that each todo created has `content`.
    initialize: function() {
      
    }

  });
  return ImageModel;
});