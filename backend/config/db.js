import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sanoj830:Sanoj%40123@cluster0.ssvz3ix.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
