/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Admission } from "@/interfaces/admission.interface";
import { useSession } from "next-auth/react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { college } from "@/interfaces/college.interface";



const AdmissionForm = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [colleges, setColleges] = useState<college[]>([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getColleges = async () => {
      const { data } = await axiosPublic.get('api/colleges');
      setColleges(data.data);
    };
    getColleges();
  }, [axiosPublic, setColleges]);

  const [formData, setFormData] = useState<Admission>({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: "",
    collegeId: "",
  });

  
   if(status === 'loading')return <p className="my-14 text-center">Loading...</p>
  if (!session) {
    router.replace('/login');
    return null
  } 



  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();


    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, collegeId: id }),
      });

      const result = await res.json();
      
      if (res.ok) {
        alert("🎉 Admission Successful!");
        // Optionally redirect to /my-college
      } else {
        alert("❌ Failed to submit admission.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4 my-14">
      <h2 className="text-2xl font-bold text-center mb-4">Admission Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Candidate Name" onChange={handleChange} required />
        <Input name="subject" placeholder="Subject" onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <Input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <Textarea name="address" placeholder="Address" onChange={handleChange} required />
        <Input name="dob" type="date" onChange={handleChange} required />
        <Input name="image" placeholder="Image URL" onChange={handleChange} required />
        <Button type="submit" className="w-full">Submit</Button>

      </form>
    </div>
  )



}


export default AdmissionForm;