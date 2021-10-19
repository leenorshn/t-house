import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  
  password: {
    type: String,
    required: true
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;