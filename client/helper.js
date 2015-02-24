Template.registerHelper('isOwner', function(){
  // if (user === Meteor.userId()){
    return Meteor.user();
});
