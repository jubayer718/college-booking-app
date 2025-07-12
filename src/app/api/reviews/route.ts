// app/api/reviews/route.ts
import connectDB from "@/lib/mongodb";
import ReviewModel from "@/models/review";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    const saved = await ReviewModel.create(body);
    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Review failed", err }, { status: 500 });
  }
}


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const collegeId = searchParams.get("collegeId");

  try {
    await connectDB();
    const reviews = await ReviewModel.find({ collegeId });
    return NextResponse.json(reviews);
  } catch (err) {
    return NextResponse.json({ error: "Fetch failed", err }, { status: 500 });
  }
}
