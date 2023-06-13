import mongoose from "mongoose";

const dbURI =
  "mongodb+srv://rylephoenix:ryle123@cluster0.9sy7br8.mongodb.net/Ecommerce?retryWrites=true&w=majority";

const db = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to db`);
  } catch (error) {
    console.error("DB error", error);
  }
};

module.exports = db;
