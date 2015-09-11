define(['underscore', 'backbone', "./ImageModel"], function(_, Backbone, ImageModel) {

  var ImageCollection = Backbone.Collection.extend({
    model: ImageModel
  });
  
  return ImageCollection;
});
