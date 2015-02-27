Application = new Mongo.Collection('applications');

Application.attachSchema(new SimpleSchema({


name:{
  type: String,
  label: "FullName",
  max: 200
},
gender:{
    type: String,
    label: "Gender",
    autoform: {
      options: function(){
              return [
                  {value: 'Female', label: 'Female'},
                  {value: 'Male', label: 'Male'}
              ]
          }
      }
  },
age:{
  type: Number,
  label: "Age",
  max: 2
},
phone:{
  type: Number,
  label:"E.g (0540003888)",
  max: 16
},
email:{
  type: String,
  label: "E-mail Address",
  max: 50
},
qualification:{
  type: String,
  label: "Qualification",
  autoform: {
    options: function(){
            return [
                {value: 'OND', label: 'OND'},
                {value: 'HND', label: 'HND'},
                {value: 'Bsc/BA', label: 'Bsc/BA'},
                {value: 'Msc/MBA', label: 'Msc/MBA'},
                {value: 'Phd', label: 'Phd'}
            ]
        }
    }

},

expertise:{
  type: String,
  label: "Expertise",
  max: 50
},
experience:{
  type: Number,
  label: "Years of Experience",
  autoform:{
    options: function(){
      return [
        {value: "0-2", label: "0-2"},
        {value: "3-5", label: "3-5"},
        {value: "6-10", label: "6-10"},
        {value: "11 and above", label: "11 and above"}
      ]
    }
  }
},
location:{
  type: String,
  label: "Location",
  max: 200
},
picture: {
  type: String,
  autoform: {
    afFieldInput: {
      type: 'fileUpload',
      collection: 'Images'
    }
  },
  label: 'Choose file'
},
comment: {
  type: String,
  label: "Leave a Comment",
  max: 700,
  autoform: {
    rows:6
  }
}
}));
