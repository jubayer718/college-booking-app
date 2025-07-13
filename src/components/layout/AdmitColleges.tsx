"use client";

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import college from "@/models/college";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  rating: number;
  research: string[];
}


const AdmitColleges = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [colleges, setColleges] = useState<College[]>([]);
  const axiosPublic = useAxiosPublic();

 const [redirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      setIsRedirecting(true); // avoid rendering while redirecting
      router.replace("/login");
    }
  }, [status, router]);
  useEffect(() => {
    const getColleges = async () => {
      const { data } = await axiosPublic.get('api/colleges');
      setColleges(data.data);
    };
    getColleges();
  }, [axiosPublic]);

  if (status === 'loading' || redirecting) {
    return <p className=" my-14 text-center">loading...</p>
  }
  if (!session) {
    return null
  }
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