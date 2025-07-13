"use client";

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import college from "@/models/college";
import Link from "next/link";
import { Button } from "../ui/button";



interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  rating: number;
  research: string[];
}


const AdmitColleges = () => {
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
    <div className="mt-20 flex gap-3 justify-center items-center" >
      {
        colleges.map(college => {
          return (
            <div key={college._id}>
              <Link href={`/admission-form/${college._id}`} ><Button className="hover:cursor-pointer">{ college.name}</Button></Link>

            </div>
          )
        })
      }
      
    </div>
  );
};

export default AdmitColleges;