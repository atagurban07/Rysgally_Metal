import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    nameEn: { type: String, required: true },
    nameRu: { type: String, required: true },
    nameTr: { type: String, required: true },
    image: { type: String, required: true },
    // brand: { type: String, required: true },
    // quantity: { type: Number, required: true },
    size: { type: String, required: true },
    structure: { type: String, required: true },
    structureEn: { type: String, required: true },
    structureRu: { type: String, required: true },
    structureTr: { type: String, required: true },
    category: { type: ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    descriptionEn: { type: String, required: true },
    descriptionRu: { type: String, required: true },
    descriptionTr: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    // price: { type: Number, required: true, default: 0 },
    // countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
