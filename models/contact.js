import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var contact = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

mongoose.models = {};

var Contact = mongoose.model('Contact', contact);

export default Contact;