import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
  nameEn: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
  nameRu: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
  nameTr: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
});

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: Map,
//     of: String,
//     required: true,
//     unique: true,
//   },
// });

export default mongoose.model("Category", categorySchema);
