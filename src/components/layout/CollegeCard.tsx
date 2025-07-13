/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  college: {
    _id: string;
    name: string;
    image: string;
    admissionDates: string;
    events: string[];
    research: string[];
    sports: string[];
    rating: number;
  };
}

const CollegeCard = ({ college }: Props) => {
  return (
    <Card className={cn('overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 py-4')}>
      <CardHeader className={cn("px-2 ")}>
        <div className="relative w-full h-full">
          <img
            src={college.image}
            alt="College image"
            className="w-full h-full object-cover p-4 "
          />
        </div>
        <div className="p-4">
          <CardTitle className="text-xl font-semibold">{college.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">
            Admission: {college.admissionDates}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm px-4 pb-4">
        <p>🎉 <span className="font-medium">Events:</span> {college.events.join(", ")}</p>
        <p>🔬 <span className="font-medium">Research:</span> {college.research.join(", ")}</p>
        <p>⚽ <span className="font-medium">Sports:</span> {college.sports.join(", ")}</p>
        <Link  href={`/college-details/${college._id}`}><Button className="w-full mt-3">View Details</Button></Link>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
