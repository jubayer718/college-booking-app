/* eslint-disable @next/next/no-img-element */
'use client';

import useAxiosPublic from "@/components/Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

interface Review {
  college: {
    name: string;
    image: string;
    admissionDates: string;
  };
  rating: number;
  comment: string;
  userEmail: string;
  userName: string;
  date: string;
}

const ReviewSection = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await axiosPublic.get("/api/collegeReview");
      setReviews(data.data);
    };
    getReviews();
  }, [axiosPublic]);

  return (
    <div className="my-10 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">User Reviews</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div className="flex flex-col gap-4 mb-4">
              <img
                src={review.college.image}
                alt={review.college.name}
                className=" object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.college.name}</h3>
                <p className="text-sm text-gray-500">{review.college.admissionDates}</p>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong> {review.userName}</p>
              <p><strong>Email:</strong> {review.userEmail}</p>
              <p><strong>Rating:</strong> {review.rating} / 5 ⭐</p>
              <p><strong>Comment:</strong> {review.comment}</p>
              <p className="text-gray-400">
                Date: {new Date(review.date).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
