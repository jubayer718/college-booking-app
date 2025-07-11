import connectDB from "@/lib/mongodb";
import college from "@/models/college";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, { params }: { params: { id: string } }) {
  try {
   
    await connectDB();
    const College = await college.findById(params.id)
    if (!college) {
      return NextResponse.json({ success: false, message: 'College not found' }, { status: 404 });
    }

    return NextResponse.json(College, { status: 200 });
  } catch (error) {
    console.log("error from get data by id ",error);
  }
}