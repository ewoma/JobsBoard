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
      home:Jobs.find().fetch()
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
      jobs:Jobs.find().fetch()
    }
  }
});

Router.route('/readMore', function(){
  this.render('readMore');
});
