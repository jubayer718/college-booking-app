/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

interface College {
  _id: string;
  name: string;
  image: string;
}

const CollegeGallery = () => {
  const axiosPublic = useAxiosPublic();
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    const getColleges = async () => {
      try {
        const res = await axiosPublic.get('/api/colleges');
        setColleges(res.data.data || []); // Note: accessing `data.data` because of response structure
      } catch (error) {
        console.error("Failed to fetch colleges:", error);
      }
    };
    getColleges();
  }, [axiosPublic]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6"> College Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-3 text-center font-medium">{college.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeGallery;
