"use client"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


export interface College {
  _id: string;
  name: string;
  image: string;
  admissionDates: string;
  events: string[];
  research: string[];
  sports: string[];
  rating: number;
}

const SearchFilter = () => {
  const [colleges,setColleges] = useState<College[]>([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/api/colleges')
      .then(res => res.json())
      .then(data => setColleges(data))
      .catch(error => {
      console.log('data fetching error',error);
    })
  }, [])


  
  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <div className=" my-16 p-6 space-y-8">
    {/* 🔍 Search */}
    <div className="max-w-xl mx-auto">
      <Input
        type="text"
        placeholder="Search College by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      </div>
    {/* college cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <CollegeCard key={college._id} college={college}/>
        ))}
      </div>
    
    
  </div>
  );
};

export default SearchFilter;