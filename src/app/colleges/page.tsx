/* eslint-disable @next/next/no-img-element */
'use client';

import useAxiosPublic from "@/components/Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Link from "next/link";


export interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  rating: number;
  research: string[];
}

const CollegePage = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getColleges = async () => {
      const { data } = await axiosPublic.get('api/colleges');
      setColleges(data.data);
    };
    getColleges();
  }, [axiosPublic]);

  return (
    <div className='my-14 min-h-screen px-4 max-w-7xl mx-auto'>
      <h1 className="text-3xl font-bold text-center mb-10">Explore Colleges</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {colleges.map(college => (
          <div
            key={college._id}
            className="border rounded-xl shadow p-4 hover:shadow-md transition bg-white"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{college.name}</h2>
            <p><strong>Rating:</strong> {college.rating} / 5 ⭐</p>
            <p><strong>Admission:</strong> {college.admissionDates}</p>
            <p ><strong>Research:</strong> {college.research.join(", ")}</p>


            <Link href={`/college-details/${college._id}`}>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegePage;
