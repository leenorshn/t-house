import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var client = new Schema({
  phone: {
    type: String,
    required: true
  },
 
});

mongoose.models = {};

var Client = mongoose.model('Client', client);

export default Client;