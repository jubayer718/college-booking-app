import connectDB from "@/lib/mongodb";
import college from "@/models/college";
import { NextResponse,NextRequest } from "next/server";

export async function GET() {
 try {
   await connectDB();
   const colleges = await college.find();
   return NextResponse.json(colleges)
 } catch (error) {
  console.log('error from get college',error)
 }
}


export async function POST(req:NextRequest) {
  try {
    await connectDB();
    const collegeInfo = await req.json();
    const newCollege = await college.create(collegeInfo);
    return NextResponse.json({
      success: true,
      message: 'college create successfully',
      data: newCollege,
    }, { status: 201 });
  } catch (error){
    return NextResponse.json({
      success: false,
      message: "Failed to fetch colleges",
      error: error
    }, { status: 500 });
  }
}