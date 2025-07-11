import { college } from "@/interfaces/college.interface";
import { collegeSchema } from "@/schemas/collegeSchema";
import mongoose from "mongoose";

export default mongoose.models.College || mongoose.model<college>("College", collegeSchema);