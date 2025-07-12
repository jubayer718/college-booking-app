// components/ReviewList.tsx
"use client";

import { useEffect, useState } from "react";
import { Review } from "@/interfaces/review.interface";


export default function ReviewList({ collegeId }: { collegeId: string }) {

  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`http://localhost:9000/api/reviews?collegeId=${collegeId}`)
      .then((res) => res.json())
      .then(data => setReviews(data.data));
    }, 1000);
    return ()=>clearTimeout(timer)
  }, [collegeId]);

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-xl font-bold">Reviews</h2>
      {reviews.length ? (
        reviews.map((r) => (
          <div key={r._id} className="border p-4 rounded shadow">
            <p className="font-semibold">{r.userName} ({r.rating}/5)</p>
            <p className="text-sm text-gray-600">{new Date(r.date).toDateString()}</p>
            <p>{r.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
