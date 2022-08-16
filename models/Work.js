const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  hoursworked: {
    type: Number,
    required: true,
  }
  
},
{ collection: 'Work' }
);

const Workmodel = mongoose.model('Work', WorkSchema);

module.exports = Workmodel;
