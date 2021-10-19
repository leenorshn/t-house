import mongoose from 'mongoose'

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
 // mongoose.connect()
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/gloria", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })

      connection.isConnected = db.connections[0].readyState
     
  } catch (error) {
      console.log(error);
  }
  
}

export default dbConnect;