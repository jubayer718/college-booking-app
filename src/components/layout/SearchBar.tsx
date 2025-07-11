"use client";
import { Input } from '@/components/ui/input';


const SearchBar = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
    <Input
      type="text"
      placeholder="Search college by name..."
      className="text-lg"
    />
  </div>
  );
};

export default SearchBar;