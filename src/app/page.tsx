
import CollegeGallery from "@/components/layout/home/CollegeGallery";
import SearchFilter from "@/components/layout/SearchFilter";
import ResearchPapers from "@/components/layout/home/ResearchPepar"
import ReviewSection from "@/components/layout/home/ReviewSection";


export default function Home() {
 
  return (
    <div className="min-h-screen">
      <SearchFilter />

      {/* college gallery */}
      <CollegeGallery/>
    {/* Research paper section */}
      <ResearchPapers />
      {/* Review section */}
      <ReviewSection/>
    </div>
  );
}
