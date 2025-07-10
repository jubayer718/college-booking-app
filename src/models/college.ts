import { collegeSchema } from "@/schemas/collegeSchema";
import mongoose from "mongoose";

export const College = mongoose.model('College', collegeSchema);