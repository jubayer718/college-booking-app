/* eslint-disable @next/next/no-img-element */
"use client";


import { useEffect, useState } from "react";
import { Admission } from "@/interfaces/admission.interface";
import { useSession } from "next-auth/react";

const MyCollege = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<Admission[] | null>(null);
  console.log(data)

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/my-admission?email=${session.user.email}`)
        .then(res => res.json())
        .then(setData)
        .catch(err => console.error("Fetching error", err));
    }
  }, [session?.user?.email]);

  if (!session) return <p className="text-center">Please login to view your college</p>;

  return (
    <div className="p-8 my-14">
      <h2 className="text-2xl font-bold mb-4">🎓 My College Admission Info</h2>
      {data?.length ? (
        data.map((item) => (
          <div key={item._id} className="p-4 border rounded-xl space-y-2 mb-4 shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Date of Birth:</strong> {item.dob}</p>
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded" />
          </div>
        ))
      ) : (
        <p>No admission data found</p>
      )}
    </div>
  );
};

export default MyCollege;