import Client from "../../models/client";

export default function handler(req, res) {
    if (req.method === 'POST') {
     return Client.create(req.body);
    } else {
      // Handle any other HTTP method
      return Client.find({});
    }
  }