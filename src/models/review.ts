import { reviewSchema } from "@/schemas/reviewSchema";
import mongoose from "mongoose";
const ReviewModel = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default ReviewModel;