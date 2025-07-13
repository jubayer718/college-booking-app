
import CollegeGallery from "@/components/layout/CollegeGallery";
import SearchFilter from "@/components/layout/SearchFilter";


export default function Home() {
 
  return (
    <div className="min-h-dvh">
      <SearchFilter />

      {/* college gallery */}
      <CollegeGallery/>


    </div>
  );
}
