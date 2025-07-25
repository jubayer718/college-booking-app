/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Admission } from "@/interfaces/admission.interface";
import { useSession } from "next-auth/react";
import ReviewForm from "@/components/layout/ReviewForm";

const MyCollege = () => {
  const { data: session, status } = useSession();
  const [data, setData] = useState<Admission[] | null>(null);
 


  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/my-admission?email=${session.user.email}`)
        .then((res) => res.json())
        .then(setData)
        .catch((err) => console.error("Fetching error", err));
    }
  }, [session?.user?.email]);

  if (status === "loading") {
    return <p className="my-14 text-center">Loading...</p>;
  }

  if (!session) return null;

  return (
    <div className="p-8 my-14 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">🎓 My College Admission Info</h2>
      {data?.length ? (
        data.map((item) => (
          <div
            key={item._id}
            className="p-4 border rounded-xl space-y-2 mb-4 shadow"
          >
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Subject:</strong> {item.subject}
            </p>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
            <p>
              <strong>Phone:</strong> {item.phone}
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>Date of Birth:</strong> {item.dob}
            </p>
            <img
              src={item.image}
              alt={item.name}
              className="w-full  object-cover rounded"
            />
            <ReviewForm collegeId={ item._id || ""} />
          </div>
        ))
        
      ) : (
        <p>No admission data found</p>
      )}
    </div>
  );
};

export default MyCollege;
