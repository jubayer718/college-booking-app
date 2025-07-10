import connectDB from "@/lib/mongodb";
import { College } from "@/models/college";
import { NextResponse,NextRequest } from "next/server";

export async function GET() {
 try {
   await connectDB();
   const colleges = await College.find();
   return NextResponse.json(colleges)
 } catch (error) {
  console.log('error from get college',error)
 }
}

export async function POST(req:NextRequest) {
  try {
    await connectDB();
    const collegeInfo = await req.json();
    const newCollege = await College.create(collegeInfo);
    return NextResponse.json(newCollege, { status: 201 });
  } catch (error){
  console.log('error from create a college',error)
  }
}