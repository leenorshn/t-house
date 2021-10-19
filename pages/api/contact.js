import Contact from "../../models/contact";

export default function handler(req, res) {
    if (req.method === 'POST') {
      return Contact.create(req.body);
    } else {
      return Contact.find({});
    }
  }