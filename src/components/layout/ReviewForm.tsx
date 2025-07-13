/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ReviewForm.tsx
"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

export default function ReviewForm({ collegeId }: { collegeId: string }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  console.log(collegeId)
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9000/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        collegeId,
        comment,
        rating,
        userEmail: session?.user?.email,
        userName: session?.user?.name,
        date: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setComment("");
    alert("✅ Review submitted!");
  };

  if (!session) return <p className="text-gray-500">Login to leave a review.</p>;

  return (
    <div>
      <h4 className="font-semibold my-2">Add review</h4>
       <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <textarea
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 w-20"
      />
        <Button  type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
        Submit Review
      </Button>
    </form>
   </div>
  );
}
