/* eslint-disable @next/next/no-img-element */
"use client"
export interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  events: string[];
  research: string[];
  sports: string[];
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

import useAxiosPublic from "@/components/Hooks/useAxiosPublic";
import { useSession } from "next-auth/react";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const DetailsPage = () => {
  const { id } = useParams();
  const {data:session, status } = useSession();
  const router = useRouter();
  const [college, setCollege] = useState<College | null>(null);
  const axiosPublic = useAxiosPublic();
  const [redirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      setIsRedirecting(true); // avoid rendering while redirecting
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
     
      const getCollege = async () => {
        try {
          const { data } = await axiosPublic.get(`/api/college/${id}`);
          setCollege(data.data)
        } catch (error) {
          console.log("error from college details",error)
        }
      }
      getCollege()
    }, 1000);
    return () => clearTimeout(timer);
  },[axiosPublic, id, router, status])
  


   if (status === "loading" || redirecting) {
    return <p className="my-14 text-center">Loading...</p>;
  }

  if (!session) return null;
  return (
    <div className="my-14">
      <div className="my-14 p-6 space-y-6 max-w-4xl mx-auto">
        {college ? (
          <>
            <img src={college.image} alt={college.name} className="w-full h-80 object-fill rounded-xl shadow" />
            <h1 className="text-3xl font-bold">{college.name}</h1>
            <p><strong>Admission Dates:</strong> {college.admissionDates}</p>

            <div>
              <h2 className="text-xl font-semibold mt-4">Events</h2>
              <ul className="list-disc ml-6">
                {college.events.map((event, i) => <li key={i}>{event}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-4">Research</h2>
              <ul className="list-disc ml-6">
                {college.research.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-4">Sports</h2>
              <ul className="list-disc ml-6">
                {college.sports.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            {/* <Link href={`/admission/${params.id}`}>
              <Button>Go to Admission</Button>
            </Link>

            <ReviewForm collegeId={params.id} />
            <ReviewList collegeId={params.id} /> */}
          </>
        ) : (
          <div className="text-center py-20 text-gray-500">Loading college details...</div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;