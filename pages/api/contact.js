import connectDB from "../../middleware/db";
import Contact from "../../models/contact";

async function handler(req, res) {
    if (req.method === 'POST') {
      const t=await Contact.create(req.body);
      return res.json(t)
    } else {
      const a=await Contact.find({});
      return res.json(a)
    }
  }


  export default connectDB(handler);