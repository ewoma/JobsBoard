Router.configure({
  layoutTemplate: "masterLayout",

})

Router.route('/', function(){
this.render('home');
},
{
  name: 'home',
  data: function(){
    return {
      home:Jobs.find().fetch().reverse()
    }
  }
});

Router.route('/about', function(){
  this.render('about');
},
{
name: 'about'

});

Router.route('/jobs', function(){
  this.render('jobs');
},
{
  name: 'jobs',
  data: function(){
    return{
      jobs:Jobs.find().fetch().reverse()
    }
  }
});

Router.route('/jobs/readMore/:_id', function(){
  this.render('readMore');
},
{
name: 'readMore',
data: function(){
  var _id = this.params._id;
  return{
    jobs:Jobs.findOne(_id)

}
}
})

Router.route('/jobs/:category', function(){

  this.render('jobs');
},
{
name: 'jobsCategory',
data: function(){
  return{
    jobs: Jobs.find({category:this.params.category}).fetch().reverse(),
    pageTitle: 'category:' + this.params.category
  }
}
});

// Router.route('/dashboard', function(){
//   this.render('dashboard');
// },
// {
//   name: 'dashboard',
//   data: function(){
//     return{
//       dashboard:
//     }
//   }
// }
// });
