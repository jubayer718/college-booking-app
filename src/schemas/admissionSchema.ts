import { Admission } from "@/interfaces/admission.interface";
import mongoose from "mongoose";

export const admissionSchema = new mongoose.Schema<Admission>(
  {
    name: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dob: String,
    image: String,
    collegeId: String,
  },
  { timestamps: true }
);