import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@inshorts-app.iysffe4.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
