Jobs = new Mongo.Collection("jobs");

Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  compDesc: {
    type: String,
    label: "Company Description",
    max: 700,
    autoform: {
      rows:6
    }
  },
  jobDesc: {
    type: String,
    label: "Job Description",
    max: 700,
    autoform: {
      rows:6
    }
  },
  category: {
      type: String,
      autoform: {
          options: function(){
              return [
                  {value: 'Business', label: 'Business'},
                  {value: 'Management', label: 'Management'},
                  {value: 'CSS', label: 'CSS'},
                  {value: 'Account', label: 'Account'},
                  {value: 'Sales', label: 'Sales'},
                  {value: 'HTML', label: 'HTML'},
                  {value: 'Cleaner', label: 'Cleaner'},
                  {value: 'Customer Care', label: 'Customer Care'},
                  {value: 'Telecommunication', label: 'Telecommunication'},
                  {value: 'Engineering', label: 'Engineering'},
                  {value: 'Teaching', label: 'Teacher'},
                  {value: 'Nursing', label: 'Nurse'}
              ]
          }
      }
  },

  added: {
    type: Date,
    label: "Date added",
    optional: false
  },

  user: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  }
}));
