import connectDB from "../../middleware/db";
import Client from "../../models/client";

 function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
     return Client.create(req.body);
    } else {
      // Handle any other HTTP method
      return Client.find({});
    }
  }

export default connectDB(handler);
