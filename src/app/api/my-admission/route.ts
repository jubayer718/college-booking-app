import connectDB from "@/lib/mongodb";
import admission from "@/models/admission";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
  }

  try {
    const data = await admission.find({ email });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error",error }, { status: 500 });
  }
}