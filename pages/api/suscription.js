import connectDB from "../../middleware/db";
import Client from "../../models/client";

 async function handler(req, res) {
    if (req.method === 'POST') {
       // console.log(req.body);
     const ss=await Client.create(req.body);
     return res.json(ss)
    } else {
      // Handle any other HTTP method
      const cc=await Client.find({});
      return res.json(cc)
    }
  }

export default connectDB(handler);
