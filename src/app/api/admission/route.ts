import { NextRequest, NextResponse } from "next/server";


import connectDB from "@/lib/mongodb";
import admission from "@/models/admission";

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // MongoDB connect

    const body = await req.json();

    const newAdmission = await admission.create(body);

    return NextResponse.json({
      success: true,
      message: "Admission data saved successfully",
      data: newAdmission,
    });
  } catch (error) {
    console.error("Error saving admission:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save admission" },
      { status: 500 }
    );
  }
}


