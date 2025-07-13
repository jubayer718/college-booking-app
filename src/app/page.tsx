
import CollegeGallery from "@/components/layout/home/CollegeGallery";
import SearchFilter from "@/components/layout/SearchFilter";
import ResearchPapers from "@/components/layout/home/ResearchPepar"


export default function Home() {
 
  return (
    <div className="min-h-dvh">
      <SearchFilter />

      {/* college gallery */}
      <CollegeGallery/>
    {/* Research paper section */}
    <ResearchPapers/>
    </div>
  );
}
