import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect("mongodb+srv://leenorshn:SU5inlRbb4KDJeyR@cluster0.xhwvl.gcp.mongodb.net/gloria?authSource=admin&replicaSet=atlas-fdxdca-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  return handler(req, res);
};

export default connectDB;