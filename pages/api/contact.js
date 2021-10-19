import connectDB from "../../middleware/db";
import Contact from "../../models/contact";

 function handler(req, res) {
    if (req.method === 'POST') {
      return Contact.create(req.body);
    } else {
      return Contact.find({});
    }
  }


  export default connectDB(handler);