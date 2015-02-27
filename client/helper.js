Template.registerHelper('isOwner', function(){
  // if (user === Meteor.userId()){
    return Meteor.user();
});

Template.registerHelper("getImage", function(picture){
  return Images.findOne(picture).url();
});
