import mongoose from "mongoose";

export const collegeSchema = new mongoose.Schema({
  name: String,
  image: String,
  admissionDates: String,
  events: [String],
  research: [String],
  sports: [String],
  rating: Number,
},{timestamps: true})